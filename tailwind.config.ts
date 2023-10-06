import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main__color': "#04364A",
      'submain__color': "#176B87",
      'light__shade': "#64CCC5",
      'white__shade': "#DAFFFB"
    }
  },
  plugins: [],
}
export default config
