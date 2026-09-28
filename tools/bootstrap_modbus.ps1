param([switch]$NoBrowser, [double]$Seconds = 0, [int]$Port = 18868, [int]$ModbusPort = 15020)
$ErrorActionPreference = 'Stop'
$pilotRoot = Split-Path -Parent $PSScriptRoot
$pilotPython = Join-Path $pilotRoot '.venv-modbus\Scripts\python.exe'
if (-not (Test-Path -LiteralPath $pilotPython)) {
    $pythonCommand = Get-Command python -ErrorAction Stop
    & $pythonCommand.Source -c "import sys; assert sys.version_info >= (3,11), 'Python 3.11+ required'"
    if ($LASTEXITCODE -ne 0) { throw 'Python 3.11+ is required.' }
    & $pythonCommand.Source -m venv (Join-Path $pilotRoot '.venv-modbus')
    if ($LASTEXITCODE -ne 0) { throw 'Could not create the local virtual environment.' }
}
$wheelDirectory = Join-Path $pilotRoot 'wheelhouse'
if (-not (Test-Path -LiteralPath $wheelDirectory)) { $wheelDirectory = Join-Path $pilotRoot 'output\modbus-wheels' }
if (-not (Test-Path -LiteralPath $wheelDirectory)) { throw 'Offline wheelhouse is missing. Follow docs/MODBUS_PILOT.md.' }
& $pilotPython -m pip install --no-index --find-links $wheelDirectory -r (Join-Path $pilotRoot 'adapters\requirements.txt')
if ($LASTEXITCODE -ne 0) { throw 'Offline dependency installation failed.' }
$pilotArguments = @((Join-Path $pilotRoot 'tools\run_modbus_pilot.py'), '--seconds', $Seconds, '--port', $Port, '--modbus-port', $ModbusPort)
if ($NoBrowser) { $pilotArguments += '--no-browser' }
& $pilotPython @pilotArguments
exit $LASTEXITCODE
