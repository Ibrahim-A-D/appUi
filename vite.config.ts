import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/appUi/',
  // experimental: {
  //   renderBuiltUrl(filename: string, { hostId, hostType, type }: { hostId: string, hostType: 'js' | 'css' | 'html', type: 'public' | 'asset' }) {
  //     if (type === 'public') {
  //       return '/appUi/' + filename
  //     }
  //     else {
  //       return '/appUi/' + filename
  //     }
  //   }
  // }
})
