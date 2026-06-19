@echo off
cd /d "%~dp0"
set "START_LOG=%~dp0tiny-leaders-start.log"
echo [%date% %time%] Starting Tiny Leaders launcher > "%START_LOG%"
title Tiny Leaders Website Server
cls

echo Tiny Leaders Website
echo ====================
echo.
echo Starting the website and opening the browser...
echo.
echo Keep this black window open while using the website.
echo Closing this window stops the website.
echo.

set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node.exe"

if /I "%NODE_EXE%"=="node.exe" (
  where node.exe >nul 2>nul
  if errorlevel 1 (
    echo ERROR: Node.js was not found.
    echo Tell Codex this exact message: Node.js was not found.
    pause
    exit /b 1
  )
)

if not exist "%NODE_EXE%" if /I not "%NODE_EXE%"=="node.exe" (
  echo ERROR: Node.js was not found.
  echo Tell Codex this exact message: Node.js was not found.
  echo [%date% %time%] ERROR: Node.js was not found. >> "%START_LOG%"
  pause
  exit /b 1
)

if not exist "%~dp0serve-out-3000.js" (
  echo ERROR: serve-out-3000.js was not found.
  echo Tell Codex this exact message.
  echo [%date% %time%] ERROR: serve-out-3000.js was not found. >> "%START_LOG%"
  pause
  exit /b 1
)

"%NODE_EXE%" "%~dp0serve-out-3000.js" >> "%START_LOG%" 2>&1
set "EXIT_CODE=%ERRORLEVEL%"
echo [%date% %time%] Exited with %EXIT_CODE% >> "%START_LOG%"

echo.
if not "%EXIT_CODE%"=="0" (
  echo The website stopped with an error.
  echo Tell Codex the message above this line.
  pause
  exit /b %EXIT_CODE%
)

echo Done.
timeout /t 2 /nobreak >nul
