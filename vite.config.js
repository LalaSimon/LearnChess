import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        global: {},
    },
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "src/pages"),
        },
    },
});
