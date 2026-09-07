const fs = require('fs');
const content = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');
const dMatch = content.match(/<path d="([\s\S]*?)"/);
const d = dMatch[1];
const commands = d.match(/[a-df-z][^a-df-z]*/ig);

let cx = 0, cy = 0;
let points = [];

for (const cmd of commands) {
  const type = cmd[0];
  const nums = cmd.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
  if (type === 'M') {
    cx = nums[0]; cy = nums[1];
    points.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
  } else if (type === 'l') {
    for (let i = 0; i < nums.length; i += 2) {
      cx += nums[i]; cy += nums[i+1];
      points.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
    }
  } else if (type === 'c') {
    for (let i = 0; i < nums.length; i += 6) {
      cx += nums[i+4]; cy += nums[i+5];
      points.push({ x: cx * 0.1, y: 1024 - cy * 0.1 });
    }
  }
}

// In the screenshot, the pin at (235, 185) is at that small top-left tip!
// Let's find points with x between 180 and 350, y between 150 and 300
console.log("Points in upper-left quadrant:");
const upperLeft = points.filter(p => p.x >= 150 && p.x <= 350 && p.y >= 100 && p.y <= 300);
console.log(upperLeft.slice(0, 10));

// Arua is in the West Nile region, which is the bulge on the upper left.
// In the user's reference image, look at the pin:
// It is at the top left of the main map outline, right next to the 'ARUA SEZ' badge.
