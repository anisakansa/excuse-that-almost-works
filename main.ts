// The Excuse That Almost Works — make.fun bounty
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// Gate: 1-140 UTF-8 characters, at most 20 words, one line of plain text.
// Verified locally: the line is 78 characters, 14 words, no newline.
//
// The angle: a boring, specific medical detail a tired manager would
// almost believe — the optician dilated the gamer's eyes this morning.
// The laugh is the excuse's own logic, not a joke bolted on: he typed
// this text on the very screen he claims he cannot read, and the excuse
// conveniently expires "tonight", just in time for launch night. No dead
// grandmother, no flat tyre, no sudden fever — none of the obvious
// excuses the manager has heard twice. Plain words, no setup, no
// signature: a text sent in a hurry.
//
// Deterministic: the same bytes on every run. No clock, no randomness,
// no network. Output goes to "output/entry.txt", relative to the
// working directory (never the script's own folder, which is read-only
// in the grading sandbox).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My optician dilated my eyes this morning, I can't read a screen until tonight.";

// Gate: 1-140 characters, at most 20 words, exactly one line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
const words = LINE.split(/\s+/).filter(Boolean);
if (words.length > 20) {
  throw new Error(`entry must be at most 20 words, got ${words.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

// Plain ASCII only, so character count and byte count agree.
if (Buffer.byteLength(LINE, "utf8") !== LINE.length) {
  throw new Error("entry must be plain ASCII within the character gate");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");

// Round-trip guard: the file must read back byte-identical to the line.
const back = readFileSync("output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: entry.txt does not match the line");
}

console.log(`wrote ${LINE.length} chars, ${words.length} words to output/entry.txt`);
