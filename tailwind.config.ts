import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    "extend": {
      "colors": {
        "dark": {
          "50": "#C1C2C5",
          "100": "#A6A7AB",
          "200": "#909296",
          "300": "#5C5F66",
          "400": "#373A40",
          "500": "#2C2E33",
          "600": "#25262B",
          "700": "#1A1B1E",
          "800": "#141517",
          "900": "#101113",
          "DEFAULT": "#1A1B1E"
        },
        "gray": {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712"
        },
        "info": {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "DEFAULT": "#60a5fa"
        },
        "black": "#000",
        "light": {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#f3f4f6"
        },
        "muted": "#374151",
        "white": "#fff",
        "danger": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
          "DEFAULT": "#dc2626"
        },
        "neutral": {
          "50": "#f3f3f3",
          "100": "#e7e7e7",
          "200": "#c2c2c2",
          "300": "#9d9d9e",
          "400": "#545455",
          "500": "#3c3b3d",
          "600": "#0B0A0C",
          "700": "#080809",
          "800": "#070607",
          "900": "#050506",
          "950": "#040405",
          "1000" : "#171717",
          "DEFAULT": "#0B0A0C"
        },
        "primary": {
          "50": "#fdf8fb",
          "100": "#fbf2f8",
          "200": "#f6deed",
          "300": "#f1c9e2",
          "400": "#e6a1cd",
          "500": "#e294c5",
          "600": "#db79b7",
          "700": "#a45b89",
          "800": "#83496e",
          "900": "#6b3b5a",
          "950": "#583049",
          "DEFAULT": "#db79b7"
        },
        "success": {
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
          "950": "#022c22",
          "DEFAULT": "#10b981"
        },
        "warning": {
          "50": "#fffbeb",
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "950": "#451a03",
          "DEFAULT": "#f59e0b"
        },
        "tertiary": {
          "50": "#f3f3f4",
          "100": "#e8e7e8",
          "200": "#c5c4c6",
          "300": "#a1a1a3",
          "400": "#5b5a5e",
          "500": "#444247",
          "600": "#151319",
          "700": "#100e13",
          "800": "#0d0b0f",
          "900": "#0a090c",
          "950": "#08080a",
          "DEFAULT": "#151319"
        },
        "secondary": {
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b6",
          "500": "#ec4899",
          "600": "#db2777",
          "700": "#be185d",
          "800": "#9d174d",
          "900": "#831843",
          "950": "#500724",
          "DEFAULT": "#db2777"
        }
      },
      "spacing": {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem"
      },
      "fontFamily": {
        "sans": "\"Space Grotesk\",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\""
      },
      "backgroundImage": {
        "arrow-down": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
        "caret-down": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentFill' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");"
      },
      "screens": {},
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 10s linear infinite',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};
export default config;
