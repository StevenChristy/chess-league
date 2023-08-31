import { tmpdir } from "node:os";
import { randomBytes } from "node:crypto";

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function makeTmpDir() {
  const rnd = randomBytes(16).toString('base64url');
  return `${tmpdir()}/chess-${rnd}`;
}
