
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(75, 22, 76)',
          foreground: '#FFFFFF',
          50: 'rgb(248, 231, 246)',
          100: 'rgb(243, 217, 240)',
          200: 'rgb(238, 203, 234)',
          300: 'rgb(232, 189, 228)',
          400: 'rgb(227, 176, 222)',
          500: 'rgb(221, 136, 207)',
          600: 'rgb(171, 105, 161)',
          700: 'rgb(140, 86, 132)',
          800: 'rgb(108, 66, 101)',
          900: 'rgb(75, 22, 76)',
        },
        secondary: {
          DEFAULT: 'rgb(221, 136, 207)',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: 'rgb(248, 231, 246)',
          foreground: 'rgb(75, 22, 76)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blur-in': {
          '0%': { filter: 'blur(5px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        'carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 2))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-out': 'fade-out 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'scale-out': 'scale-out 0.4s ease-out',
        'slide-in': 'slide-in 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'rotate-slow': 'rotate-slow 12s linear infinite',
        'blur-in': 'blur-in 0.6s ease-out',
        'carousel': 'carousel 25s linear infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(75, 22, 76) 0%, rgb(221, 136, 207) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, rgb(221, 136, 207) 0%, rgb(248, 231, 246) 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(221, 136, 207, 0.7) 0%, rgba(75, 22, 76, 0.8) 100%)',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(75, 22, 76, 0.1), 0 8px 10px -6px rgba(75, 22, 76, 0.1)',
        'glow': '0 0 20px rgba(221, 136, 207, 0.5)',
        'inner-glow': 'inset 0 2px 10px 0 rgba(221, 136, 207, 0.3)',
      },
      backdropFilter: {
        'blur-10': 'blur(10px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
