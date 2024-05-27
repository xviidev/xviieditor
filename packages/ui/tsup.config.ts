import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    clean: true,
    target: "es2019",
    format: ["cjs", "esm"],
    minify: !options.watch,
    splitting: false,
    dts: !options.watch,
  };
});
