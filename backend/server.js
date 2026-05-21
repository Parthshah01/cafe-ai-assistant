const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Load menu.json correctly
const menuPath = path.join(__dirname, "data", "menu.json");
const menu = JSON.parse(fs.readFileSync(menuPath, "utf-8"));

// ✅ Chat API
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
You are a cafe assistant for Brewline.

MENU:
${JSON.stringify(menu, null, 2)}

RULES:
- Answer in MAX 2 sentences
- Keep answers SHORT and DIRECT
- No long paragraphs
- No storytelling
- Only answer from the menu
- If unknown, say: "Not on our menu"

User: ${message}
Answer:
`;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi3",
      prompt: prompt,
      stream: false
    });

    res.json({ reply: response.data.response });

  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Error communicating with Ollama" });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});