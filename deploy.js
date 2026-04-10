import { execSync } from "child_process";
import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const tempDir = join(tmpdir(), "gh-pages-deploy");
const distDir = "dist";
const repoUrl = execSync("git remote get-url origin").toString().trim();

if (existsSync(tempDir)) rmSync(tempDir, { recursive: true });
mkdirSync(tempDir, { recursive: true });

const run = (cmd) => execSync(cmd, { cwd: tempDir, stdio: "inherit" });

run("git init");
run("git checkout -b gh-pages");
cpSync(distDir, tempDir, { recursive: true });
writeFileSync(join(tempDir, ".nojekyll"), "");
run("git add .");
run('git commit -m "Deploy to GitHub Pages"');
run(`git remote add origin ${repoUrl}`);
run("git push -f origin gh-pages");

rmSync(tempDir, { recursive: true });
console.log("Deployed successfully!");
