set HOST=192.168.1.61
set PORT=3000

@echo off
for /f "tokens=1-2 delims=:" %%a in ('ipconfig^|find "IPv4"') do set HOST=%%b