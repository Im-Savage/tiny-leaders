@echo off
cd /d "%~dp0"
set "NODE_EXE=C:\Users\gigal\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node.exe"
"%NODE_EXE%" "%~dp0serve-out-3000.js" --no-open --no-build > "%~dp0tiny-leaders-web.out.log" 2> "%~dp0tiny-leaders-web.err.log"
