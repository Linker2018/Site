/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        metallic: {
          bronze: '#CD7F32',
          gold: '#FFD700',
          silver: '#C0C0C0',
          'dark-bronze': '#8B4513',
          'light-gold': '#FFEF94',
          'dark-silver': '#A0A0A0'
        },
        crypto: {
          gold: '#FFD700',
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          orange: '#ea580c',
          purple: '#7c3aed',
          pink: '#ec4899'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmerGradient 8s ease-in-out infinite',
        'metallic-glow': 'metallicGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmerGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '50% 100%' },
          '75%': { backgroundPosition: '100% 0%' },
        },
        metallicGlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '33%': { backgroundPosition: '100% 50%' },
          '66%': { backgroundPosition: '50% 100%' },
        }
      }
    },
  },
  plugins: [],
}