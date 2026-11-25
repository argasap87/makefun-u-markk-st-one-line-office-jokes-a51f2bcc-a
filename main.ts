// One-Line Office Jokes — make.fun entry
// Writes a single one-line joke about office life to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a one-sentence office joke built on two universally relatable
// stand-up-meeting tropes — the meeting that never ends, and the coffee
// machine everyone stares at while waiting for it. The punchline escalates
// the mundane (a long stand-up) into the absurd (the machine filing a
// harassment claim), so the joke lands on a single vivid image instead of
// needing a second line to explain itself. 107 characters, one sentence,
// no profanity, no named person or company — safe for a general audience.
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
