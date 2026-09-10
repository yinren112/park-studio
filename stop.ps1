$ErrorActionPreference = 'Stop'
$parkPidFile = Join-Path $PSScriptRoot 'data/server.pid'
if (-not (Test-Path -LiteralPath $parkPidFile)) { Write-Host 'No launcher-owned service was found.'; exit 0 }
$parkPid = [int](Get-Content -LiteralPath $parkPidFile)
$parkProcess = Get-CimInstance Win32_Process -Filter "ProcessId = $parkPid" -ErrorAction SilentlyContinue
$parkServerPath = Join-Path $PSScriptRoot 'server.py'
if ($parkProcess -and $parkProcess.CommandLine -and $parkProcess.CommandLine.Contains($parkServerPath)) {
    Stop-Process -Id $parkPid
    Write-Host 'LAILIN STUDIO stopped. SQLite data has been retained.'
} elseif ($parkProcess) {
    throw 'The recorded process no longer belongs to this project. Nothing was stopped.'
}
Remove-Item -LiteralPath $parkPidFile
