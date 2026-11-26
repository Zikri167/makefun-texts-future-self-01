import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

const entryPath = join(outDir, "entry.txt");
const line = "Future you here. You fix the squeaky door in 2029. Four years, three YouTube videos, one bruised thumb. The door forgave you years ago. I still haven't.";
writeFileSync(entryPath, line);
