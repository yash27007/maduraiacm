import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use the React plugin

export default defineConfig({
  base: '/maduraiacm/',
  plugins: [react()], // Use the React plugin here
});
