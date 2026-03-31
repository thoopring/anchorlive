import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E17055",
          dark: "#C0513A",
          light: "#FDEAE5",
          50: "#FFF5F2",
        },
        accent: {
          DEFAULT: "#00C9B7",
          light: "#E6FAF7",
        },
        dark: "#191F28",
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F6",
          200: "#E5E8EB",
          400: "#8B95A1",
          500: "#6B7684",
          600: "#4E5968",
          800: "#333D4B",
        },
      },
      fontFamily: {
        pretendard: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "heading-hero": [
          "clamp(32px, 4.5vw, 48px)",
          { lineHeight: "1.25", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
        "heading-section": [
          "clamp(26px, 3.5vw, 38px)",
          { lineHeight: "1.3", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        "heading-sub": [
          "clamp(24px, 3vw, 34px)",
          { lineHeight: "1.35", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
      },
      borderRadius: {
        card: "16px",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
