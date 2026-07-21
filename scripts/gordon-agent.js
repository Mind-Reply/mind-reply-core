#!/usr/bin/env node
import readline from "node:readline";
import { exec } from "node:child_process";

function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { timeout: 20000 }, (err, stdout, stderr) => {
      if (err) return reject(stderr || err.message);
      resolve(stdout);
    });
  });
}

async function handle(text) {
  if (text === "status") console.log(await run("pm2 status"));
  else if (text === "docker") console.log(await run("docker ps"));
  else if (text === "restart n8n") console.log(await run("docker compose restart n8n", process.env.HOME+"/n8n-docker"));
  else if (text === "open") await run('cmd.exe /c start http://localhost:3000/admin');
  else console.log("Commands: status, docker, restart n8n, open");
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: "Gordon> " });
console.log("Gordon Agent ready.");
rl.prompt();
rl.on("line", async (line) => { try { await handle(line.trim()); } catch(e){console.log(e);} rl.prompt(); });
