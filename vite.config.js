// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'


// export default defineConfig(({ command }) => ({
//   plugins: [vue()],
//   base: command === 'serve' ? '/' : '/teste2/', // base depends on dev or build
// }))

// export default defineConfig({
//   base: '/teste2/', // GitHub Pages subpath
//   plugins: [vue()]
// })

// export default defineConfig({
//   base: '/', // GitHub Pages subpath
//   plugins: [vue()]
// })



import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/teste2/',  // Ensure this matches your GitHub Pages repository name
  server: {
    historyApiFallback: true, // This will handle route fallbacks for history mode
  }
})
