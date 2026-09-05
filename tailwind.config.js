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
          navy: '#0F172A',     // Deep slate navy
          slate: '#1E293B',    // Card slate
          gold: '#F59E0B',     // Amber / Economic gold
          'gold-dark': '#D97706',
          emerald: '#10B981',  // Sustainable industry green
          'emerald-dark': '#059669',
          light: '#F8FAFC',    // Soft paper background
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
