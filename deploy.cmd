@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script
:: Version: 1.0.17
:: ----------------------

:: Prerequisites
:: -------------

:: Verify node.js installed
where node 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
  echo Missing node.js executable, please install node.js, if already installed make sure it can be reached from current environment.
  goto error
)

:: Setup
:: -----

setlocal enabledelayedexpansion

SET ARTIFACTS=%~dp0%..\artifacts

IF NOT DEFINED DEPLOYMENT_SOURCE (
  SET DEPLOYMENT_SOURCE=%~dp0%.
)

IF NOT DEFINED DEPLOYMENT_TARGET (
  SET DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot
)

IF NOT DEFINED NEXT_MANIFEST_PATH (
  SET NEXT_MANIFEST_PATH=%ARTIFACTS%\manifest

  IF NOT DEFINED PREVIOUS_MANIFEST_PATH (
    SET PREVIOUS_MANIFEST_PATH=%ARTIFACTS%\manifest
  )
)

echo paths:

echo TheDeploymentSource is %DEPLOYMENT_SOURCE%
echo TheDeploymentTarget is %DEPLOYMENT_TARGET%
echo TheDeploymentTemp is %DEPLOYMENT_TEMP%

IF NOT DEFINED KUDU_SYNC_CMD (
  :: Install kudu sync
  echo Installing Kudu Sync
  call npm install kudusync -g --silent
  IF !ERRORLEVEL! NEQ 0 goto error

  :: Locally just running "kuduSync" would also work
  SET KUDU_SYNC_CMD=%appdata%\npm\kuduSync.cmd
)

echo node Version: 
node -v 

goto Deployment

:: Utility Functions
:: -----------------

:SelectNodeVersion

IF DEFINED KUDU_SELECT_NODE_VERSION_CMD (
  :: The following are done only on Windows Azure Websites environment
  call %KUDU_SELECT_NODE_VERSION_CMD% "%DEPLOYMENT_SOURCE%" "%DEPLOYMENT_TARGET%" "%DEPLOYMENT_TEMP%"
  IF !ERRORLEVEL! NEQ 0 goto error

  IF EXIST "%DEPLOYMENT_TEMP%\__nodeVersion.tmp" (
    SET /p NODE_EXE=<"%DEPLOYMENT_TEMP%\__nodeVersion.tmp"
    IF !ERRORLEVEL! NEQ 0 goto error
  )
  
  IF EXIST "%DEPLOYMENT_TEMP%\__npmVersion.tmp" (
    SET /p NPM_JS_PATH=<"%DEPLOYMENT_TEMP%\__npmVersion.tmp"
    IF !ERRORLEVEL! NEQ 0 goto error
  )

  IF NOT DEFINED NODE_EXE (
    SET NODE_EXE=node
  )

  SET NPM_CMD="!NODE_EXE!" "!NPM_JS_PATH!"
) ELSE (
  SET NPM_CMD=npm
  SET NODE_EXE=node
)

goto :EOF

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------
:: https://dotnetthoughts.net/deploying-your-angular-app-to-azure/
:: 

:Deployment
echo Handling node.js deployment.

echo calling SelectNodeVersion
:: 2. Select node version
call :SelectNodeVersion
echo calling SelectNodeVersion end

:: 3. Install npm packages
::IF EXIST "%DEPLOYMENT_TARGET%/package.json" (
::  pushd "%DEPLOYMENT_TARGET%"
  ::call :ExecuteCmd !NPM_CMD! install --production
::  echo Run package.json npm install
::  call :ExecuteCmd !NPM_CMD! install 
  ::call :ExecuteCmd !NPM_CMD! install @angular
::  IF !ERRORLEVEL! NEQ 0 goto error
::  popd
::)

:: Install npm packages from package.json
IF EXIST "%DEPLOYMENT_SOURCE%/package.json" (
  pushd "%DEPLOYMENT_SOURCE%"
  :: call :ExecuteCmd !NPM_CMD! install --production
  echo Run package.json npm install from source
  call :ExecuteCmd !NPM_CMD! install
  :: call :ExecuteCmd !NPM_CMD! install @angular
  :: call :ExecuteCmd !NPM_CMD! install @angular
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)

::IF NOT DEFINED NODE_VERSION1 (
::  :: Install kudu sync
::  echo Updating node version
::call npm install -g n
::  IF !ERRORLEVEL! NEQ 0 goto error
::
::  node -v
::)

:: Building the Angular App
::IF EXIST "%DEPLOYMENT_SOURCE%/.angular-cli.json" (
:: pushd "%DEPLOYMENT_SOURCE%"
  ::call :ExecuteCmd node_modules\.bin\ng build --progress false --prod
::  echo execute .angular-cli.json run build from source
::  call :ExecuteCmd !NPM_CMD! run build
::  IF !ERRORLEVEL! NEQ 0 goto error
::  popd
::)

::echo Run build angular.json
IF EXIST "%DEPLOYMENT_SOURCE%/angular.json" (
  pushd "%DEPLOYMENT_SOURCE%"
  ::call :ExecuteCmd node_modules\.bin\ng build --progress false --prod
  echo execute angular.json run build
  :: runs the build command ng build from package.json
  call :ExecuteCmd !NPM_CMD! run build --prod
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)

:: KuduSync from source/dist to wwwroot
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" (
  ::call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
  call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%/dist/base-chat" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
  IF !ERRORLEVEL! NEQ 0 goto error
)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
goto end

:: Execute command routine that will echo out when error
:ExecuteCmd
setlocal
set _CMD_=%*
call %_CMD_%
if "%ERRORLEVEL%" NEQ "0" echo Failed exitCode=%ERRORLEVEL%, command=%_CMD_%
exit /b %ERRORLEVEL%

:error
endlocal
echo An error has occurred during web site deployment.
call :exitSetErrorLevel
call :exitFromFunction 2>nul

:exitSetErrorLevel
exit /b 1

:exitFromFunction
()

:end
endlocal
echo Finished successfully.
