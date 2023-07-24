import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { Glob, globIterate } from "glob";

// Copy LICENSES/ folder to each packages/*/ folder
const LICENSES_PATH = "./LICENSES";
const licensesIter = globIterate(`${LICENSES_PATH}/*`);
const licenses = [];
for await (const license of licensesIter) {
  licenses.push(license);
}
console.log("Discovered licenses: ", licenses);

const packages = new Glob(`./packages/*/`, {
  mark: true,
  magicalBraces: true,
});

for await (const p of packages) {
  console.log(`Processing ${p}`);
  // If LICENSES does not exist in that folder, create empty first
  if (!fsSync.existsSync(path.join(p, "LICENSES"))) {
    await fs.mkdir(`${p}/LICENSES`);
  }

  for (const license of licenses) {
    const newPath = path.join(p, "LICENSES", license.split("/").pop());
    console.log(`Copying ${license} to ${newPath}`);
    await fs.copyFile(license, newPath);
  }
}
