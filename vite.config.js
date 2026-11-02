import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from /<repository-name>/.
// User/organization sites are served from the domain root.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repository && !repository.endsWith('.github.io')
  ? `/${repository}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
