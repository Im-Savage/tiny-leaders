@echo off
cd /d "C:\Users\gigal\CascadeProjects\tiny-leaders"
title Tiny Leaders Web Server - keep this open
echo Tiny Leaders web server
echo =======================
echo.
echo When this window says the website is ready, use:
echo http://127.0.0.1:3000/
echo.
echo Keep this window open. Closing it stops the web address.
echo.
set "NODE_EXE=C:\Users\gigal\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node.exe"
"%NODE_EXE%" "C:\Users\gigal\CascadeProjects\tiny-leaders\serve-out-3000.js" --no-open --no-build
echo.
echo The web server stopped.
pause
