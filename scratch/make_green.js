const fs = require('fs');

let svg = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');

// Replace fill with rich dark forest green
svg = svg.replace(/fill="#000000"/g, 'fill="#0D472B"');
// Change stroke to a slightly lighter green for crisp relief
svg = svg.replace(/stroke="none"/g, 'stroke="#145A37" stroke-width="4"');

fs.writeFileSync('c:/xaamp/htdocs/arua_sez/public/uganda_green.svg', svg);
console.log('Successfully generated uganda_green.svg');
