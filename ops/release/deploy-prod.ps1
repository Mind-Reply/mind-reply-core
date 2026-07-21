$APP = "C:\Users\ANGEL\Desktop\MindReply_workplace\clean_build\MindReply"
Set-Location $APP
cmd /c "vercel.cmd --cwd `"$APP`" pull --yes --environment=development"
cmd /c "vercel.cmd --cwd `"$APP`" --prod"
