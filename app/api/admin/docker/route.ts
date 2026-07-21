import { NextResponse } from "next/server";
import { exec } from "node:child_process";

export async function GET(): Promise<Response> {
  return new Promise<Response>((resolve) => {
    exec("docker ps", (err, stdout) => {
      resolve(NextResponse.json({ docker: stdout }));
    });
  });
}
