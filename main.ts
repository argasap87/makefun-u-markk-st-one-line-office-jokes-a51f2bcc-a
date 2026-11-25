// One-Line Office Jokes — make.fun entry
// Writes a single one-line joke about office life to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our 9 am stand-up runs so long the coffee machine files a harassment claim for being stared at all morning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer requires 1–199 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry length ${LINE.length} is outside the 1–199 character gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
