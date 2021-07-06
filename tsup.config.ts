import type { Options } from "tsup";

export const tsup: Options = {
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm"],
  entryPoints: ["src/index.ts"],
  target: "es6",
};
