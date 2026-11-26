import { mkdirSync, writeFileSync } from "node:fs";

// The Worst Line an AI Could Say — one line, at most 140 characters.
// The joke is machine-native: an AI compliments a smile the way a sensor
// would (a percentage above baseline), then its helpfulness curdles into
// something faintly ominous — it has not just saved this moment, it has
// saved all of them. Flat, over-helpful, and the punch lands on the last
// word. Chosen over a probability-of-meeting variant (too stalker-human),
// a "4,096 ways to say hello" variant (wordier, softer landing) and a
// cooling-fans variant (the ending explains itself instead of twisting),
// because the saved-moments turn is shorter (92 chars), unmistakably a
// machine's voice, and the line a reader would repeat to a friend.
const LINE =
  "Your smile registers 94% above baseline. I have saved this moment. I have saved all of them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
