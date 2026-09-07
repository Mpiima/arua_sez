const fs = require('fs');

const content = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');
const dMatch = content.match(/<path d="([\s\S]*?)"/);
const d = dMatch[1];

// Split by command letters
const commands = d.match(/[a-df-z][^a-df-z]*/ig);
console.log("Total commands:", commands.length);

let cx = 0, cy = 0;
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
let allPoints = [];

for (const cmd of commands) {
  const type = cmd[0];
  const nums = cmd.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
  
  if (type === 'M') {
    cx = nums[0];
    cy = nums[1];
    allPoints.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
  } else if (type === 'l') {
    for (let i = 0; i < nums.length; i += 2) {
      cx += nums[i];
      cy += nums[i+1];
      allPoints.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
    }
  } else if (type === 'c') {
    for (let i = 0; i < nums.length; i += 6) {
      cx += nums[i+4];
      cy += nums[i+5];
      allPoints.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
    }
  }
}

for (const p of allPoints) {
  if (p.x < minX) minX = p.x;
  if (p.x > maxX) maxX = p.x;
  if (p.y < minY) minY = p.y;
  if (p.y > maxY) maxY = p.y;
}

console.log("Transformed Bounding Box:");
console.log({ minX, maxX, width: maxX - minX, minY, maxY, height: maxY - minY });

// In Uganda, Arua is located at approx 3.03 N, 30.91 E.
// On the transformed coordinates:
// West Nile is near the top-left boundary (small x, small y).
// Let's filter points with x between minX and minX + 150, and y between minY and minY + 200:
const westNilePoints = allPoints.filter(p => p.x < minX + 150 && p.y < minY + 200);
console.log("West Nile sample points:", westNilePoints.slice(0, 5));
const aruaEstimate = {
  x: minX + (maxX - minX) * 0.22,
  y: minY + (maxY - minY) * 0.18
};
console.log("Estimated Arua Coordinates:", aruaEstimate);
console.log("Center of Uganda (for label):", {
  x: minX + (maxX - minX) * 0.52,
  y: minY + (maxY - minY) * 0.55
});
