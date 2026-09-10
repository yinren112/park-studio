param([int]$Port = 8767, [switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$parkRoot = $PSScriptRoot
$parkUrl = "http://127.0.0.1:$Port"
$parkHealth = $null
try { $parkHealth = Invoke-RestMethod "$parkUrl/health" -TimeoutSec 2 } catch {}
if ($parkHealth -and $parkHealth.application -ne 'lailin-park-studio') {
    throw "Port $Port is occupied by another application. Choose another port with -Port."
}
if (-not $parkHealth) {
    $parkPython = Get-Command python -ErrorAction SilentlyContinue
    if (-not $parkPython) { throw 'Python 3.11+ is required. Install Python, then run this launcher again.' }
    New-Item -ItemType Directory -Force -Path (Join-Path $parkRoot 'data') | Out-Null
    $parkServer = Join-Path $parkRoot 'server.py'
    $parkProcess = Start-Process -FilePath $parkPython.Source -ArgumentList @('-u', ('"' + $parkServer + '"'), '--port', $Port) -WorkingDirectory $parkRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $parkRoot 'data/server-stdout.log') -RedirectStandardError (Join-Path $parkRoot 'data/server.log')
    Set-Content -LiteralPath (Join-Path $parkRoot 'data/server.pid') -Value $parkProcess.Id -Encoding ascii
    for ($parkAttempt = 0; $parkAttempt -lt 40; $parkAttempt++) {
        Start-Sleep -Milliseconds 250
        try { $parkHealth = Invoke-RestMethod "$parkUrl/health" -TimeoutSec 1; if ($parkHealth.status -eq 'ok') { break } } catch {}
        $parkProcess.Refresh()
        if ($parkProcess.HasExited) { throw 'Service did not start. Check data/server.log.' }
    }
    if (-not $parkHealth -or $parkHealth.application -ne 'lailin-park-studio' -or $parkHealth.status -ne 'ok') { throw 'Service did not become ready. Check data/server.log.' }
}
Write-Host "LAILIN STUDIO: $parkUrl"
Write-Host "Mode: $($parkHealth.mode) / Assets: $($parkHealth.assets)"
if (-not $NoBrowser) { Start-Process $parkUrl }
