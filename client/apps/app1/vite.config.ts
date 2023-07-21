import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": `${path.resolve(
        __dirname,
        "../../packages/designsystem/src/components/index.tsx"
      )}`,
    },
  },
});
