/**
 * This script generates a .vscode/settings.json file that contains the
 * eslint.workingDirectories setting. This setting is used by VS Code to
 * automatically set the working directory for ESLint to the package directory
 * when opening a file in that package.
 * This is necessary because ESLint support for monorepos is not great and
 * otherwise the VSCode extension complains about unresolved paths which
 * actually do resolve correctly and are not errors when ESLint is run from CLI.
 */
const fs = require("fs");
const path = require("path");

const cwd = process.cwd();
const packagesPath = path.join(cwd, "packages");
const packageDirs = fs.readdirSync(packagesPath).filter((dir) => {
  const packageDirPath = path.join(packagesPath, dir);
  return fs.statSync(packageDirPath).isDirectory();
});

const eslintWorkingDirectories = packageDirs.map((dir) => ({
  directory: path.join("packages", dir),
  changeProcessCWD: true,
}));

const settings = {
  "eslint.workingDirectories": eslintWorkingDirectories,
};

const vscodeSettingsPath = path.join(cwd, ".vscode", "settings.json");
fs.writeFileSync(vscodeSettingsPath, JSON.stringify(settings, null, 2));
