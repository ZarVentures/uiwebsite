@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM ================================================
REM  Update project with latest files from Git
REM  Usage: double-click or run: update-from-git.bat [branch]
REM  Default branch: main
REM ================================================

REM Determine branch (first argument or default to main)
SET BRANCH=%1
IF "%BRANCH%"=="" SET BRANCH=main

echo === Updating project from Git (branch: %BRANCH%) ===

REM Change directory to the location of this script (project root)
cd /d "%~dp0"
echo Current directory: %CD%

echo.
echo 1^) Fetching latest changes from origin...
git fetch origin
IF ERRORLEVEL 1 (
  echo Git fetch failed. Please check your network connection or Git configuration.
  goto :EOF
)

echo.
echo 2^) Pulling latest changes from origin/%BRANCH%...
git pull origin %BRANCH%
IF ERRORLEVEL 1 (
  echo Git pull failed. You may have local changes or conflicts.
  echo Run "git status" and resolve any issues, then try again.
  goto :EOF
)

echo.
echo Project successfully updated from origin/%BRANCH%.

ENDLOCAL


