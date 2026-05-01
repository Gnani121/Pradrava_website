import { generateKeyPairSync, randomUUID } from "node:crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
  publicKeyEncoding: { type: "spki", format: "pem" },
});

const kid = `demo-${new Date().toISOString().slice(0, 7)}`; // e.g. "demo-2026-05"

const escape = (pem) => pem.replace(/\n/g, "\\n").trim();

console.log("\n=== ADD THESE TO .env.local AND VERCEL ===\n");
console.log(`DEMO_JWT_KID=${kid}`);
console.log(`DEMO_JWT_PRIVATE_KEY="${escape(privateKey)}"`);
console.log(`DEMO_JWT_PUBLIC_KEY="${escape(publicKey)}"`);
console.log("\n=== ALSO SAVE COPIES OF THE RAW PEM (for backup) ===\n");
console.log("--- PRIVATE KEY ---");
console.log(privateKey);
console.log("--- PUBLIC KEY ---");
console.log(publicKey);