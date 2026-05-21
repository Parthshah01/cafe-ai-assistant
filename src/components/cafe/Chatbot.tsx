import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeInfo } from "@/data/menu";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE = {
  history: "brewline.chat.history",
};

const SUGGESTIONS = [
  "Best coffee?",
  "Anything vegan?",
  "Strongest drink?",
  "What should I try?",
];

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [messages, setMessages] = useState<Msg[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE.history);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [
      {
        role: "assistant",
        content: `Hi, I'm the ${cafeInfo.name} barista ☕ Ask me about the menu.`,
      },
    ];
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE.history, JSON.stringify(messages.slice(-30)));
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // ✅ Clear Chat
  const clearChat = () => {
    const initial = [
      {
        role: "assistant",
        content: `Hi, I'm the ${cafeInfo.name} barista ☕ Ask me about the menu.`,
      },
    ];
    setMessages(initial);
    localStorage.removeItem(STORAGE.history);
  };

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput("");

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      const reply = data?.reply || "Sorry, I didn't catch that.";

      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setError("Backend not running on port 5000.");
      setMessages((m) => m.slice(0, -1));
      setInput(trimmed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-40 flex w-[380px] flex-col overflow-hidden rounded-2xl border bg-card shadow-xl transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        )}
        style={{ height: "540px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-primary px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <div>
              <p className="text-sm font-semibold">AI Barista</p>
              <p className="text-[11px] opacity-70">Menu Assistant</p>
            </div>
          </div>

          <button
            onClick={clearChat}
            className="p-1.5 rounded hover:bg-white/10"
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] px-3.5 py-2.5 text-sm rounded-2xl leading-relaxed",
                m.role === "user"
                  ? "ml-auto bg-primary text-white rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm"
              )}
            >
              {m.content}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Brewing a reply…
            </div>
          )}

          {error && <div className="text-xs text-red-500">{error}</div>}

          {/* Suggestions */}
          {messages.length <= 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border px-3 py-1 text-xs hover:bg-muted"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t p-3 bg-background"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // stop new line
                send(input);
            }
          }}
          placeholder="Ask about the menu..."
          rows={1}
          className="flex-1 resize-none rounded-xl border p-2 text-sm outline-none"
        />

          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
};