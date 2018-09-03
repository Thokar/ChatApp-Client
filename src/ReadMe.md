///////////////////////////////////////////////////////////
/// packages
npm install angularfire2-offline

////////////////////////////////////////////////////////
/// Usefull weblinks
// Save install
// https://github.com/angular/angular-cli/issues/8798s

// deployment preinstall
// https://stackoverflow.com/questions/47185611/versions-of-angular-compiler-cli-and-typescript-could-not-be-determined#

// firebase-authentication-with-angular-6 
// https://github.com/FouomaOscar/firebase-authentication-with-angular-6

// Build and Deploy Angular App to Azure from Github via KuduScript
// https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/

// Deploying Your Angular Application To Azure
// https://dotnetthoughts.net/deploying-your-angular-app-to-azure/

// hosting in azure
// https://www.newventuresoftware.com/blog/deploying-angular-4-cli-apps-to-iis-on-azure

// Understanding the Angular CLI Workspace File
// https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/

// deploy to azure
// https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/

// Angular doku: 
// https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md

// die richtige node version
// https://stackoverflow.com/questions/49764571/how-to-upgrade-nodejs-version-on-azure

// Angular is a static website!
// https://stackoverflow.com/questions/45677959/how-to-run-ng-serve-command-in-kudu-console-to-make-azure-serve-my-angular-web

// see https://github.com/wesdoyle/base-chat/tree/master/src/assets

// Images for website and App
// https://www.pexels.com/photo/botanical-cactus-close-up-decor-305821/

// Angualr Kanban
// https://github.com/DlhSoftTeam/Angular-Kanban

//////////////////////////////////////////////////////////
/// deployment
https://stackoverflow.com/questions/46930364/deploy-default-angular-application-on-azure-from-github-gives-error

https://dotnetthoughts.net/deploying-your-angular-app-to-azure/

/// deployment settings
 "scripts": {
    "ng": "ng",
    "prestart": "ng build --prod",
    "build": "ng build --prod",
    "start": "ng serve",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
"start": "ng serve",
  
"build": "ng build --prod",

packages.json, specify node version
,
  "engines": {
    "node": "8.9.4"
}

    "@angular/animations": "^6.0.3",
    "@angular/common": "^6.0.3",
    "@angular/compiler": "^6.0.3",
    "@angular/core": "^6.0.3",
    "@angular/forms": "^6.0.3",
    "@angular/http": "^6.0.3",
    "@angular/platform-browser": "^6.0.3",
    "@angular/platform-browser-dynamic": "^6.0.3",
    "@angular/router": "^6.0.3",
    "angularfire2": "^5.0.0-rc.11",
    "angularfire2-offline": "^4.3.1",
    "codelyzer": "~4.2.1",
    "https-proxy-agent": "^2.2.1",
    "core-js": "^2.5.4",
    "firebase": "^5.4.0",
    "rxjs": "^6.0.0",
    "zone.js": "^0.8.26"


    
    "@angular-devkit/build-angular": "^0.6.8",
    "@angular/cli": "~6.0.8",
    "@angular/language-service": "^6.0.3",
    "@angular/common": "^6.0.3",
    "@angular/compiler": "^6.0.3",
    "@angular/core": "^6.0.3",
    "@angular/forms": "^6.0.3",
    "@angular/http": "^6.0.3",
    "@angular/platform-browser": "^6.0.3",
    "@angular/platform-browser-dynamic": "^6.0.3",
    "@angular/router": "^6.0.3",
    "angularfire2": "^5.0.0-rc.11",
    "angularfire2-offline": "^4.3.1",
    "@types/jasmine": "~2.8.6",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.2.1",
    "https-proxy-agent": "^2.2.1",
    "core-js": "^2.5.4",
    "firebase": "^5.4.0",
    "rxjs": "^6.0.0",
    "zone.js": "^0.8.26",
    "ts-node": "~5.0.1",
    "karma": "~1.7.1",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.0",
    "karma-jasmine": "~1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.3.0",
    "tslint": "~5.9.1",
    "concurrently": "^3.2.0",
    "lite-server": "^2.2.2",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "typescript": "~2.7.2"