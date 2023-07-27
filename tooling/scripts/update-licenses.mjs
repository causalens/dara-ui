import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { Glob, globIterate } from "glob";

// Copyright header - update in every source file
const LICENSE = `\
/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
`;

const files = new Glob(`./packages/*/src/**/*.{js,jsx,ts,tsx}`, {
  magicalBraces: true,
});

for await (const file of files) {
  // Read the file
  const content = await fs.readFile(file, "utf8");

  let newContent;

  // check if it starts with the license already
  if (content.startsWith(LICENSE)) {
    console.log(`Updating license in ${file}`);
    // check how many lines the block takes
    const lines = content.split("\n");
    const end = lines.slice(1).findIndex((line) => line.startsWith("*/")) + 1;
    // remove the docstring from the content
    lines.splice(0, end + 1);
    newContent = LICENSE + lines.join("\n");
  } else {
    console.log(`Adding license to ${file}`);
    // Update the content
    newContent = LICENSE + content;
  }

  // Write the file
  await fs.writeFile(file, newContent, "utf8");
}

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
