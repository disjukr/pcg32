import { copyFile, readFile, writeFile } from "node:fs/promises";

const originalCode = await readFile("./build/release.js", { encoding: "utf8" });
const wasmBinary = await readFile("./build/release.wasm");

const newCode = originalCode.replace(
  /\} = await \(async url => instantiate\((.|\s)*/,
  `} = await instantiate(new WebAssembly.Module(new Uint8Array([\n  ${
    Array.from(wasmBinary).join(",")
  }\n])));\n`,
);

await writeFile("./dist/index.mjs", newCode);
await copyFile("./build/release.d.ts", "./dist/index.d.ts");
await copyFile("./build/release.wasm", "./dist/pcg32.wasm");
