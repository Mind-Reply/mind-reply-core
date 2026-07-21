#!/usr/bin/env node
import readline from "node:readline";
import { exec } from "node:child_process";

function run(cmd, cwd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd, timeout: 20000 }, (err, stdout, stderr) => {
      if (err) return reject(stderr || err.message);
      resolve(stdout);
    });
  });
}

async function handle(input) {
  const text = input.trim().toLowerCase();

  if (text.includes("status")) {
    console.log(await run("pm2 status"));
    console.log(await run("docker ps"));
    return;
  }

  if (text.includes("restart n8n")) {
    console.log(await run("docker compose restart n8n", process.env.HOME + "/n8n-docker"));
    return;
  }

  if (text.includes("logs n8n")) {
    console.log(await run("docker logs n8n-docker-n8n-1 --tail 50"));
    return;
  }

  if (text.includes("open admin") || text.includes("open control")) {
    await run('cmd.exe /c start http://localhost:3000/admin');
    return;
  }

  if (text.includes("restart web")) {
    console.log(await run("pm2 restart mindreply-web || true"));
    return;
  }

  console.log("Commands: status, restart n8n, logs n8n, restart web, open admin");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Commander> ",
});

console.log("Commander ready.");
rl.prompt();

rl.on("line", async (line) => {
  try { await handle(line); }
  catch(e){ console.log(e); }
  rl.prompt();
});
