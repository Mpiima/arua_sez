const fs = require('fs');

const svgContent = fs.readFileSync('c:/xaamp/htdocs/arua_sez/public/uganda.svg', 'utf8');

// Extract the path data
const paths = [];
const pathRegex = /<path d="([\s\S]*?)"\/>/g;
let match;
while ((match = pathRegex.exec(svgContent)) !== null) {
  paths.push(match[1]);
}

console.log("Found paths:", paths.length);

// Generate component
const template = `
<template>
  <div class="relative w-full max-w-xl mx-auto py-6">
    <!-- SVG Map Container -->
    <div class="relative w-full aspect-[1/1] flex items-center justify-center">
      <svg 
        viewBox="0 0 1024 1024" 
        class="w-full h-full drop-shadow-2xl overflow-visible" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- Rich forest green gradient -->
          <linearGradient id="ugandaFill" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#0E5832" />
            <stop offset="40%" stop-color="#0B4728" />
            <stop offset="100%" stop-color="#06351E" />
          </linearGradient>

          <!-- Inner relief shadow -->
          <filter id="ugandaRelief" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25" />
          </filter>
        </defs>

        <!-- Dashed Connection Lines radiating from Arua SEZ (approx x=235, y=185) -->
        <!-- Line to South Sudan (Top-Right towards x=740, y=120) -->
        <path 
          d="M 235 185 Q 480 90 750 140" 
          fill="none" 
          stroke="#D97706" 
          stroke-width="3.5" 
          stroke-dasharray="8 8" 
          opacity="0.85"
        />

        <!-- Line to DRC (Bottom-Left towards x=100, y=620) -->
        <path 
          d="M 235 185 Q 120 380 140 640" 
          fill="none" 
          stroke="#D97706" 
          stroke-width="3.5" 
          stroke-dasharray="8 8" 
          opacity="0.85"
        />

        <!-- Line to Regional Markets (Bottom-Right towards x=750, y=700) -->
        <path 
          d="M 235 185 Q 520 450 720 680" 
          fill="none" 
          stroke="#D97706" 
          stroke-width="3.5" 
          stroke-dasharray="8 8" 
          opacity="0.85"
        />

        <!-- Uganda Map Paths (Transformed from potrace format) -->
        <g 
          transform="translate(0, 1024) scale(0.1, -0.1)" 
          fill="url(#ugandaFill)" 
          filter="url(#ugandaRelief)" 
          stroke="#15673C" 
          stroke-width="14"
          stroke-linejoin="round"
        >
          ${paths.map(p => `<path d="${p}" />`).join('\n          ')}
        </g>

        <!-- Centered "UGANDA" Country Label -->
        <text 
          x="530" 
          y="560" 
          fill="#FFFFFF" 
          opacity="0.85" 
          font-family="'Outfit', 'Inter', sans-serif" 
          font-weight="900" 
          font-size="46" 
          letter-spacing="10" 
          text-anchor="middle"
          class="select-none pointer-events-none drop-shadow"
        >
          UGANDA
        </text>

        <!-- Arua SEZ Map Pin (at x=235, y=185) -->
        <g transform="translate(235, 185)" class="cursor-pointer">
          <!-- Pulsing glow circle -->
          <circle cx="0" cy="0" r="14" fill="#F59E0B" opacity="0.4" class="animate-ping" />
          
          <!-- Pin body (teardrop) -->
          <path 
            d="M 0 0 C -12 -12, -14 -28, 0 -38 C 14 -28, 12 -12, 0 0 Z" 
            fill="#D97706" 
            stroke="#FFFFFF" 
            stroke-width="3"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
          />
          <!-- Inner white dot -->
          <circle cx="0" cy="-22" r="5" fill="#FFFFFF" />
        </g>

        <!-- Arua SEZ Badge (Pill box to the left/top of the pin) -->
        <foreignObject x="110" y="100" width="140" height="50">
          <div xmlns="http://www.w3.org/1999/xhtml" class="flex items-center">
            <div class="px-3 py-1.5 rounded-lg bg-[#06321C] border border-[#D97706] text-white text-xs font-black tracking-wider shadow-xl flex items-center gap-1.5 whitespace-nowrap">
              <span>ARUA SEZ</span>
            </div>
          </div>
        </foreignObject>
      </svg>

      <!-- Floating Card 1: South Sudan (Top-Right) -->
      <div class="absolute -top-4 -right-4 sm:right-0 z-30 bg-white rounded-xl shadow-xl border border-gray-100/90 p-4 max-w-[220px] sm:max-w-[240px] flex items-start gap-3.5 hover:shadow-2xl transition-shadow">
        <div class="w-8 h-5 rounded overflow-hidden shadow-sm flex-shrink-0 border border-gray-200 mt-0.5">
          <svg viewBox="0 0 600 300" class="w-full h-full">
            <rect width="600" height="90" fill="#000000"/>
            <rect y="90" width="600" height="15" fill="#FFFFFF"/>
            <rect y="105" width="600" height="90" fill="#DA121A"/>
            <rect y="195" width="600" height="15" fill="#FFFFFF"/>
            <rect y="210" width="600" height="90" fill="#078930"/>
            <polygon points="0,0 260,150 0,300" fill="#0F47AF"/>
            <polygon points="85,115 105,175 55,140 115,140 65,175" fill="#FCD116"/>
          </svg>
        </div>
        <div>
          <div class="font-heading font-black text-xs uppercase tracking-wider text-slate-900">SOUTH SUDAN</div>
          <div class="text-[11px] text-slate-500 leading-snug mt-1">
            A strategic neighbouring market with strong trade and investment potential.
          </div>
        </div>
      </div>

      <!-- Floating Card 2: DRC (Bottom-Left) -->
      <div class="absolute bottom-6 -left-6 sm:left-2 z-30 bg-white rounded-xl shadow-xl border border-gray-100/90 p-4 max-w-[220px] sm:max-w-[240px] flex items-start gap-3.5 hover:shadow-2xl transition-shadow">
        <div class="w-8 h-6 rounded overflow-hidden shadow-sm flex-shrink-0 border border-gray-200 mt-0.5">
          <svg viewBox="0 0 800 600" class="w-full h-full">
            <rect width="800" height="600" fill="#007FFF"/>
            <polygon points="0,600 0,480 640,0 800,0 800,120 160,600" fill="#FCD116"/>
            <polygon points="0,600 0,530 710,0 800,0 800,70 90,600" fill="#CE1021"/>
            <polygon points="120,60 145,135 85,90 155,90 95,135" fill="#FCD116"/>
          </svg>
        </div>
        <div>
          <div class="font-heading font-black text-xs uppercase tracking-wider text-slate-900">DRC</div>
          <div class="text-[11px] text-slate-500 leading-snug mt-1">
            Access to the Democratic Republic of Congo — a growing market of opportunity.
          </div>
        </div>
      </div>

      <!-- Floating Card 3: Regional Markets (Bottom-Right) -->
      <div class="absolute bottom-2 -right-4 sm:right-0 z-30 bg-white rounded-xl shadow-xl border border-gray-100/90 p-4 max-w-[220px] sm:max-w-[240px] flex items-start gap-3.5 hover:shadow-2xl transition-shadow">
        <div class="w-8 h-8 rounded-full bg-emerald-50 text-[#0E5832] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
          </svg>
        </div>
        <div>
          <div class="font-heading font-black text-xs uppercase tracking-wider text-slate-900">REGIONAL MARKETS</div>
          <div class="text-[11px] text-slate-500 leading-snug mt-1">
            Gateway to East and Central Africa and global markets.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;

fs.writeFileSync('c:/xaamp/htdocs/arua_sez/src/components/UgandaInteractiveMap.vue', template);
console.log("Successfully created UgandaInteractiveMap.vue");
