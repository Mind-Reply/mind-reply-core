$N8N = "C:\Users\ANGEL\Desktop\MindReply_workplace\clean_build\n8n"
$dockerDesktop = "$Env:ProgramFiles\Docker\Docker\Docker Desktop.exe"
try {
  $dv = docker version 2>$null
  if ($dv -notmatch "Server: Docker Engine") {
    if (Test-Path $dockerDesktop) { Start-Process $dockerDesktop; Start-Sleep -Seconds 20 }
  }
} catch {
  if (Test-Path $dockerDesktop) { Start-Process $dockerDesktop; Start-Sleep -Seconds 20 }
}
$ok = $false
for ($i=0; $i -lt 18; $i++) {
  try {
    $dv = docker version 2>$null
    if ($dv -match "Server: Docker Engine") { $ok = $true; break }
  } catch {}
  Start-Sleep -Seconds 5
}
if (-not $ok) { Write-Host "Docker daemon not ready."; exit 1 }
Set-Location $N8N
docker compose -f ".\docker-compose.yml" --env-file ".\.env" up -d
docker compose -f ".\docker-compose.yml" --env-file ".\.env" ps
