import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: 'https://AlexMagargiu.github.io/React-Notes-App',
  }

  if (command !== 'serve') {
    config.base = '/React-Notes-App/'
  }

  return config
})