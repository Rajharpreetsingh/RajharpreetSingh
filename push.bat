@echo off
title GitHub Auto Push

echo =================================
echo       Pushing Code to GitHub
echo =================================

git add .

set /p message="Enter commit message: "

if "%message%"=="" set message=Update portfolio

git commit -m "%message%"

if errorlevel 1 (
echo.
echo Commit failed or there are no changes.
pause
exit /b 1
)

git push origin main

if errorlevel 1 (
echo.
echo Push failed. Please check your GitHub connection.
pause
exit /b 1
)

echo.
echo Successfully pushed changes to GitHub!
pause
