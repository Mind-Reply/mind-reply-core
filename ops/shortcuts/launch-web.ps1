$APP = "C:\Users\ANGEL\Desktop\MindReply_workplace\clean_build\MindReply"
Set-Location $APP
if (Test-Path ".\package-lock.json") { npm.cmd ci } else { npm.cmd install }
npm.cmd run build
npm.cmd run dev
