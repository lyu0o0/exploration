import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This project is published at https://lyu0o0.github.io/exploration/.
// Set the base explicitly so local builds and GitHub Actions use the same path.
const base = '/exploration/'

export default defineConfig({
  plugins: [react()],
  base,
})
