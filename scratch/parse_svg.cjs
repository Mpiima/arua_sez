const fs = require('fs');

const content = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');

// Parse numbers from path
const matches = content.match(/[-+]?[0-9]*\.?[0-9]+/g);
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

// Find M and l commands
const lines = content.split('\n');
console.log('Total lines:', lines.length);

// Let's create an inline SVG with clean viewBox
const cleanSvg = `
<svg viewBox="100 0 850 950" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ugandaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E5832" />
      <stop offset="50%" stop-color="#0B4728" />
      <stop offset="100%" stop-color="#06321C" />
    </linearGradient>
    <filter id="mapShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.18" />
    </filter>
  </defs>
  <g transform="translate(0, 1024) scale(0.1, -0.1)" fill="url(#ugandaGrad)" filter="url(#mapShadow)" stroke="#136B3D" stroke-width="12">
${lines.slice(11, 139).join('\n')}
  </g>
</svg>
`;

fs.writeFileSync('c:/xaamp/htdocs/arua_sez/src/components/UgandaMapSvg.vue', `
<template>
  <div class="relative w-full h-full flex items-center justify-center">
    ${cleanSvg}
  </div>
</template>
`);

console.log('Created UgandaMapSvg.vue successfully');
