import { exportJWK, importPKCS8, importSPKI, SignJWT } from "jose";

const ALGORITHM = "RS256";

let privateKeyPromise = null;
let publicKeyPromise = null;
let jwksPromise = null;

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name} environment variable.`);
  }

  return value;
}

function normalizePem(value) {
  return String(value).replace(/^"|"$/g, "").replace(/\\n/g, "\n").trim();
}

function getKid() {
  return requireEnv("DEMO_JWT_KID");
}

async function getPrivateKey() {
  if (!privateKeyPromise) {
    const pem = normalizePem(requireEnv("DEMO_JWT_PRIVATE_KEY"));
    privateKeyPromise = importPKCS8(pem, ALGORITHM);
  }

  return privateKeyPromise;
}

async function getPublicKey() {
  if (!publicKeyPromise) {
    const pem = normalizePem(requireEnv("DEMO_JWT_PUBLIC_KEY"));
    publicKeyPromise = importSPKI(pem, ALGORITHM);
  }

  return publicKeyPromise;
}

export async function signJwtToken(payload, options = {}) {
  const privateKey = await getPrivateKey();
  const kid = getKid();
  const {
    issuer = "pradrava-demo",
    audience = "pradrava-demo-users",
    expiresIn = "8h",
    subject,
  } = options;

  let token = new SignJWT(payload)
    .setProtectedHeader({ alg: ALGORITHM, kid })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime(expiresIn);

  if (subject) {
    token = token.setSubject(subject);
  }

  return token.sign(privateKey);
}

export async function getPublicJwks() {
  if (!jwksPromise) {
    jwksPromise = (async () => {
      const publicKey = await getPublicKey();
      const kid = getKid();
      const jwk = await exportJWK(publicKey);

      return {
        keys: [
          {
            ...jwk,
            alg: ALGORITHM,
            kid,
            use: "sig",
          },
        ],
      };
    })();
  }

  return jwksPromise;
}