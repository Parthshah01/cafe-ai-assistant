const fs = require('fs');

const pbFile = 'C:\\Users\\shahr\\.gemini\\antigravity\\conversations\\646087db-01c3-439d-b507-717fa01bb4f6.pb';
const content = fs.readFileSync(pbFile);
const stringContent = content.toString('utf8');

// The original file probably has "Pastries" or "Brunch"
let idx = stringContent.indexOf('Pastries');
if (idx !== -1) {
    console.log("Found Pastries at", idx);
    let startIdx = stringContent.lastIndexOf('[', idx);
    let endIdx = startIdx + 5000;
    fs.writeFileSync('debug.txt', stringContent.substring(startIdx, endIdx));
} else {
    console.log("Not found Pastries");
}
