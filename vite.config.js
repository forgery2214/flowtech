import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';
export default defineConfig({base:'/flowtech/',build:{rollupOptions:{input:{home:fileURLToPath(new URL('./index.html',import.meta.url)),products:fileURLToPath(new URL('./products.html',import.meta.url))}}}});
