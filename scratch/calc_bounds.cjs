const fs = require('fs');
const content = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');

// Match <path d="..."
const m = content.match(/<path d="([\s\S]*?)"/);
if (!m) {
  console.log("No path found");
  process.exit(1);
}
const pathD = m[1];
const tokens = pathD.trim().replace(/,/g, ' ').split(/\s+/);

let curX = 0, curY = 0;
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
let points = [];

let i = 0;
while (i < tokens.length) {
  const token = tokens[i];
  if (token === 'M') {
    curX = parseFloat(tokens[i+1]);
    curY = parseFloat(tokens[i+2]);
    points.push([curX, curY]);
    i += 3;
  } else if (token === 'l') {
    i++;
    while (i < tokens.length && !isNaN(parseFloat(tokens[i]))) {
      curX += parseFloat(tokens[i]);
      curY += parseFloat(tokens[i+1]);
      points.push([curX, curY]);
      i += 2;
    }
  } else if (token === 'c') {
    i++;
    while (i < tokens.length && !isNaN(parseFloat(tokens[i]))) {
      curX += parseFloat(tokens[i+4]);
      curY += parseFloat(tokens[i+5]);
      points.push([curX, curY]);
      i += 6;
    }
  } else if (token === 'z') {
    i++;
  } else {
    i++;
  }
}

points.forEach(([x, y]) => {
  const tx = x * 0.1;
  const ty = 1024 - y * 0.1;
  if (tx < minX) minX = tx;
  if (tx > maxX) maxX = tx;
  if (ty < minY) minY = ty;
  if (ty > maxY) maxY = ty;
});

console.log('Bounding Box in SVG coords (scale 0.1, flip y):');
console.log({ minX, maxX, width: maxX - minX, minY, maxY, height: maxY - minY });

const mappedPoints = points.map(([x, y]) => ({ x: x * 0.1, y: 1024 - y * 0.1 }));
// Top left corner is minX, minY
console.log("Top-most point:", mappedPoints.reduce((a, b) => a.y < b.y ? a : b));
console.log("Left-most point:", mappedPoints.reduce((a, b) => a.x < b.x ? a : b));
