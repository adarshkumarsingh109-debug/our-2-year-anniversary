// postcss.config.mjs  (recommended .mjs for ESM)
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      optimize: {
        minify: false,   // ← This often fixes Vercel builds
      },
    },
  },
};

export default config;