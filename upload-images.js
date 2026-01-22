require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");
const DIR = "./images";

async function run() {
  const files = fs.readdirSync(DIR);

  for (const file of files) {
    const filePath = path.join(DIR, file);
    const buffer = fs.readFileSync(filePath);

    const blob = await put(`recipes/${file}`, buffer, {
      access: "public",
    });

    console.log(file, "->", blob.url);
  }
}

run();
