#!/usr/bin/env python3
import os, subprocess, sys
from datetime import datetime

def run(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True).stdout.strip()

def main():
    org = sys.argv[1] if len(sys.argv) > 1 else "mind-reply"
    repo = sys.argv[2] if len(sys.argv) > 2 else "mind-reply-core"
    
    print(f"Preparing repository for https://github.com/{org}/{repo}")
    if not os.path.exists(".git"):
        run("git init && git branch -M main")
    
    run("git add .")
    run(f'git commit -m "feat(mr-core): Release [{datetime.utcnow().isoformat()}]"')
    
    remote_url = f"https://github.com/{org}/{repo}.git"
    if "origin" in run("git remote"):
        run(f"git remote set-url origin {remote_url}")
    else:
        run(f"git remote add origin {remote_url}")
    
    print("Local repo ready! Execute:")
    print("  git push -u origin main --force")
    print(f"  gh repo create {org}/{repo} --public --source=. --remote=origin --push")

if __name__ == "__main__":
    main()