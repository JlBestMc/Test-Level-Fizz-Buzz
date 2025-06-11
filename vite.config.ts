import { defineConfig } from 'vite'

const repoName = 'js-test-level-fizz-buzz'

export default defineConfig({
  base: `/${repoName}/`, // 👈 muy importante para GitHub Pages
})