/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0F19',     // Deep Obsidian Black (from logo 'arua')
          navy: '#0B0F19',      // Alias for backwards compatibility
          dark: '#111827',      // Rich Charcoal surface
          slate: '#1E293B',    // Elevated card slate
          red: '#D00004',       // Crested Crane Crimson Red
          'red-dark': '#B30003',
          'red-light': '#FEF2F2',
          gold: '#D17F00',      // Economic Gold (from logo 'sez')
          'gold-light': '#F59E0B',
          'gold-dark': '#B46A00',
          'gold-tint': '#FFFBEB',
          light: '#F8FAFC',    // Soft page background
          border: '#E2E8F0',   // Subtle border
          muted: '#64748B'     // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
