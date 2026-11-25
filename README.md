# The Excuse That Almost Works

[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/anisakansa/excuse-that-almost-works/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/anisakansa/excuse-that-almost-works/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

My entry for [The Excuse That Almost Works](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5) on [make.fun](https://make.fun).

## The excuse

> My optician dilated my eyes this morning, I can't read a screen until tonight.

78 characters, 14 words, one line. A boring, specific medical detail a tired manager would almost believe — the optician dilated his eyes this morning. The laugh is the excuse's own logic: he typed this text on the very screen he claims he cannot read, and the excuse conveniently expires "tonight", just in time for launch night. No dead grandmother, no flat tyre, no sudden fever — none of the obvious excuses the manager has heard twice. Plain words, no setup, no signature: a text sent in a hurry.

## How it works

`main.ts` writes the excuse to `output/entry.txt`. It enforces the gate itself before writing: 1–140 characters, at most 20 words, exactly one line, no trailing newline — and reads the file back to confirm the bytes on disk match. Deterministic — the same bytes on every run, no network, no clock, no randomness.

```sh
node main.ts
```
