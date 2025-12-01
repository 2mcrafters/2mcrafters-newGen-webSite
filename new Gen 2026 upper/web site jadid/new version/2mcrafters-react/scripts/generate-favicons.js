/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico");

const rootDir = path.resolve(__dirname, "..");
const sourceImage = path.join(rootDir, "public", "images", "logo-fnl-cree.png");
const outputFiles = [
  { dest: path.join(rootDir, "public", "icon.png"), size: 192 },
  { dest: path.join(rootDir, "public", "apple-touch-icon.png"), size: 180 },
];

async function makePng({ dest, size }) {
  await sharp(sourceImage)
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(dest);
  console.log(`generated ${path.relative(rootDir, dest)}`);
}

async function makeFavicons() {
  if (!fs.existsSync(sourceImage)) {
    throw new Error(`Source image not found at ${sourceImage}`);
  }

  await Promise.all(outputFiles.map(makePng));

  const faviconIntermediate = path.join(rootDir, "public", "tmp-favicon.png");
  await sharp(sourceImage)
    .resize(64, 64, { fit: "contain" })
    .png()
    .toFile(faviconIntermediate);

  const icoBuffer = await pngToIco(faviconIntermediate);
  const faviconPath = path.join(rootDir, "public", "favicon.ico");
  fs.writeFileSync(faviconPath, icoBuffer);
  console.log(`generated ${path.relative(rootDir, faviconPath)}`);

  fs.rmSync(faviconIntermediate, { force: true });
}

makeFavicons().catch((error) => {
  console.error(error);
  process.exit(1);
});
