import fs from "fs/promises";
import path from "path";
import { Glob } from "glob";

// Copyright header - update in every source file
const LICENSE = `\
/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
  if (content.startsWith("/**")) {
    console.log(`Updating license in ${file}`);
    // check how many lines the block takes
    const lines = content.split("\n");
    const end =
      lines.slice(1).findIndex((line) => line.trim().startsWith("*/")) + 1;
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
const LICENSE_PATH = "./LICENSE";

const packages = new Glob(`./packages/*/`, {
  mark: true,
  magicalBraces: true,
});

for await (const p of packages) {
  console.log(`Processing ${p}`);

  const newPath = path.join(p, "LICENSE");
  console.log(`Copying LICENSE to ${newPath}`);
  await fs.copyFile(LICENSE_PATH, newPath);
}
