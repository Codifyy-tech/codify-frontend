import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgPlugin()],
})
