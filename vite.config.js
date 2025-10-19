import { defineConfig } from "vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    copyPublicDir: false,
  },
  plugins: [
    dts({
      include: ["lib"],
    }),
  ],
})
