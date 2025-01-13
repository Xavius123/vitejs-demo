import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ENV shifting logic
// load env options
const mode = process.env.NODE_ENV || 'development';
const env = loadEnv(mode, process.cwd(), '');
// scripts to add
// npm run dev -- --mode development
// npm run build -- --mode qa
// npm run build -- --mode uat
// npm run build -- --mode staging
// npm run build -- --mode production

// preview build script
//  "preview": "vite preview --port 8080"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@shared': path.resolve(__dirname, './src/app/shared'),
            '@enums': path.resolve(__dirname, './src/app/eums'),
            '@services': path.resolve(__dirname, './src/app/services'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        // preprocessorOptions: {
        //     // scss: {
        //     //     additionalData: `@use "@scss/variables";`,
        //     // },
        // },
    },
    define: {
        'process.env': env, // Inject environment variables
    },
    server: {
        port: 3000,
    },
});
