import sharp from "sharp";
import { readdir, unlink, rename } from "fs/promises";
import { join, extname, basename } from "path";

const BC_DIR = "./public/BC";

const PNG_PHOTOS = [
  "Activities5.png",
  "Activities6.png",
  "building2.png",
  "student in Class.png",
  "student in Lap1.png",
];

const DUPLICATE_TO_DELETE = ["Students 2.jpg.png"];

async function convertPngToJpg(filename) {
  const input = join(BC_DIR, filename);
  const output = join(BC_DIR, basename(filename, ".png") + ".jpg");

  await sharp(input)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  const inputSize = (await import("fs")).statSync(input).size;
  const outputSize = (await import("fs")).statSync(output).size;
  const saving = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

  console.log(
    `✓ ${filename} → ${basename(output)}  ` +
      `${(inputSize / 1024).toFixed(0)} KB → ${(outputSize / 1024).toFixed(0)} KB  (${saving}% smaller)`
  );

  await unlink(input);
}

async function deleteDuplicate(filename) {
  const filePath = join(BC_DIR, filename);
  await unlink(filePath);
  console.log(`✓ Deleted duplicate: ${filename}`);
}

console.log("=== PNG → JPG conversion ===\n");

for (const file of PNG_PHOTOS) {
  try {
    await convertPngToJpg(file);
  } catch (err) {
    console.error(`✗ Failed: ${file} — ${err.message}`);
  }
}

console.log("\n=== Removing duplicates ===\n");

for (const file of DUPLICATE_TO_DELETE) {
  try {
    await deleteDuplicate(file);
  } catch (err) {
    console.error(`✗ Could not delete: ${file} — ${err.message}`);
  }
}

console.log("\nDone. Now update site-content.ts paths:");
console.log("  building2.png  →  building2.jpg");
console.log("  student%20in%20Lap1.png  →  student%20in%20Lap1.jpg");
