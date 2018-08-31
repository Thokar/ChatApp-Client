(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatHeaderWrapper {\r\n    height: 90px;\r\n    color: #222;\r\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\r\n}\r\n\r\n.chatRoom {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nrouter-outlet {\r\n    height: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"chatRoom\">\n  <div class=\"chatHeaderWrapper\">\n    <app-navbar></app-navbar>\n  </div>\n  <router-outlet></router-outlet>\n  <!-- test single components-->\n  <!--<app-login-form></app-login-form>-->\n</div>\n\n<!-- \n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BaseChat';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../routes */ "./src/routes.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//import { AngularFireOfflineModule } from 'angularfire2-offline';
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_8__["ChatroomComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_12__["SignupFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_15__["UserItemComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_16__["ChatFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_19__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_17__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput {\r\n    flex: 10;\r\n    font-size: 1.3em;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background-color: #eee;\r\n    color: #000;\r\n    transition: 0.1s ease-out;\r\n    padding-left: 80px;\r\n}\r\n\r\n.chatInput:focus {\r\n    background-color: #E4F1Fe;\r\n    color: #222;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton {\r\n    flex: 1;\r\n    padding: 10px;\r\n    padding: 8px 24px;\r\n    font-family: \"Droid Sans\", sans-serif;\r\n    background-color: #2A2845;\r\n    color: white;\r\n    transition: 0.2s ease-out;\r\n    min-width: 50px;\r\n}\r\n\r\n.chatButton:hover {\r\n    background-color: #444;\r\n}"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  class=\"chatInput\"\n  [(ngModel)]=\"message\"\n  (keydown)=\"handleSubmit($event)\" />\n\n<button \n  class=\"chatButton\"\n  (click)=\"send()\">Send</button>\n\n<!--<p>\n  chat-form works!\n</p>\n-->\n"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = '';
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode == 13) {
            this.send();
        }
    };
    ChatFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent \r\n{\r\n    display: flex;\r\n}\r\n\r\n.userListWrapper \r\n{\r\n    color: #fff;\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 1;\r\n    order: 1;\r\n    background-color: #2a2845;\r\n    padding: 20px 0px 40px 30px;\r\n    border-right: 1px solid #222;\r\n}\r\n\r\n.feedWrapper \r\n{\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: scroll; /*auto*/\r\n    background-color: #fff;\r\n    background:\r\n    linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0,0,0,0.9)),\r\n    url('photo_39871_20150806.jpg') center center no-repeat;;\r\n    background-size: 100%;\r\n}\r\n\r\n.chatFormWrapper {\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #eee;\r\n    z-index: 3;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track\r\n{\r\n    border-radius: 10px;\r\n    background-color: #F5f5f5;\r\n}\r\n\r\napp-user-list \r\n{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div>\n  <div #scroller class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>\n<!--\n<p>\n  chatroom works!\n</p>\n-->"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        this.feedContainer.nativeElement.value = "test";
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        // Left also possible
        //this.feedContainer.nativeElement.scrollLeft
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    // https://alligator.io/angular/viewchild-access-component/
    // see https://angular.io/guide/lifecycle-hooks
    // and https://v2.angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatroomComponent.prototype.ngAfterViewInit = function () {
        this.scrollToBottom();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scroller', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatroomComponent.prototype, "feedContainer", void 0);
    ChatroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.message {\r\n    flex-direction: column;\r\n    margin: 10px 0;\r\n}"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <div *ngFor=\"let message of feed | async\" class=\"message\"> \n    <app-message [chatMessage]=message></app-message>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.feed = this.chat.getMessageFeed().valueChanges();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed = this.chat.getMessageFeed().valueChanges();
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginContainer\n{\n    height: 100%;\n    overflow: hidden;\n    background:\n        linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0,0,80,0.9)),\n        url('botanical-cactus-close-up-305821.jpg') center center no-repeat;;\n    background-size: 100%;\n}\n.loginCard\n{\n    display: block;\n    border: ipx solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: 420px;\n    margin: auto;\n    margin-top: 40px;\n    text-align: center;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: hidden;\n}\n.loginFormInput\n{\n    margin: auto;\n    margin-top: 16px;\n    display: block;\n    width: 60%;\n    height: 40px;\n    border-radius: 4px;\n    background: #ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n}\n.btn\n{\n    height: 54px;\n    width: 60%;\n    margin: auto;\n    margin-top: 16px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n}\n#btn-signUp\n{\n    background-color:#2A2845;\n}\n#btn-signUp:hover\n{\n    background-color:#4A4865;\n    transition: ease-in 0.2s;\n}\n#btn-login\n{\n    background-color:#4A4875;\n}\n#btn-login:hover\n{\n    background-color: #5A5895;\n    transition: ease-in 0.2s;\n}\n.loginHeading\n{\n    height: 2em;\n}\n.errorMsg\n{\n    color: red;\n}\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginContainer\">\n  <div class=\"loginCard\">\n    <h2 class=\"loginHeading\">Log In</h2>\n    <input [(ngModel)]=\"email\"\n    type=\"email\"\n    name=\"email\"\n    class=\"loginFormInput\"\n    required/>\n    <input [(ngModel)]=\"password\"\n    type=\"password\"\n    name=\"password\"\n    class=\"loginFormInput\"\n    required />\n   <button class=\"btn\"\n            type=\"submit\" \n            id=\"btn-login\"\n            (click)=\"login()\">\n            Log In\n    </button>\n   <label class=\"errorMsg\" [(ngModel)]=\"errorMsg\"></label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit LoginFormComponent');
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) {
            console.log(error.message);
            _this.errorMsg = error.message;
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer\r\n {\r\n    display:  flex;\r\n    height: auto;\r\n    width: 70%;\r\n    min-width: 400px;\r\n    border-radius: 5px;\r\n    align-items: stretch;\r\n    background-color: #eee;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n.isOwnMessageContainer \r\n{\r\n    background-color: #015798;\r\n}\r\n.messageContent \r\n{\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n\r\n}\r\n.isOwnMessageContent \r\n{\r\n    background-color: #E3F2FD;\r\n    color: #01579B;\r\n}\r\n.sender \r\n{\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n.isOwnSender\r\n{\r\n    color: #E1F5FE;\r\n}\r\n.timestamp {\r\n    color: #555;\r\n    font-style: italic;\r\n}\r\n.isOwnTimestamp {\r\n    color: #4FC3F7;\r\n}\r\n.messageData {\r\n    flex: 1;\r\n    padding: 10px;\r\n    font-size: 0.7em;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\n  [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\n <div class=\"messageData\"\n   [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\n   <span class=\"sender\"\n      [ngClass]=\"{'isOwnSender':isOwnMessage}\">\n     {{ userName }}\n   </span>\n   <span class=\"timestamp\"\n      [ngClass]=\"{'isOwnTimestamp':isOwnMessage}\">\n     {{ timeStamp | date: 'medium'}}\n   </span>\n  </div>\n <div class=\"messageContent\"\n   [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\n   {{ messageContent }}\n </div>\n</div>\n<!-- <p>\n  message works!\n</p>\n-->"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService) {
        var _this = this;
        this.authService = authService;
        console.log('ctor ChatMessage');
        authService.authUser().subscribe(function (user) {
            _this.ownEmail = user.email;
            _this.isOwnMessage = _this.ownEmail == _this.userEmail;
        });
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        console.log('ngOnInit ChatMessage');
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userEmail = chatMessage.email;
        this.userName = chatMessage.userName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar\r\n{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: #EAEAEB;\r\n}\r\n#logo\r\n{\r\n    display: inline-block;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgNSURBVHhe7VtrbBRVFIb4iI/4TnxEf6q/9BcmEo1u0u2W7uz2sZ1ZKC3RmMizpQLyNBFMNNEfKkYJojFGhaJYgUihFYggb/palEit8iiFUn4YsN22FNvduZ4ze6Y7s3Nn9jWzLaZf8qWlc+8957tz77nn3jtMmsAEJjCmcLlcN3sE8dl8QVzh9om1bp/UAuyB3/vyfRLDn7F/49/FWiyH5bEeNXFjwiOUvegWpM/zBekfFJo2sZ4gfobtUJM3BCZ7fFIA3yZXVIbE9vL8ZaXYfszMOITbKz3tFsRDPAG2UZAOenyBp8jkuMFknLfg4IjBYWc4gvbQbsz8GOK54uK78n1iI8dJxwkBcyfaJ1dyj7yi8ofAiVaec7ki2kc/yKXcwVVSci8YP8lzKtdU/MgP3kOuOY+pknQ7ROXjPGfGiuDPMZfr5dvIRWcBc34Dz4mxJqxA68lF55DnkySe8fFCt7dMJFftRUGBdD9kdcvg7Q/zDI8Xwii4VFhYeTe5nT3gjT8KDX8IgWYg0dh4JXTC++R+5pgyZc4tIH45JBz9iQaEwEy2dNVbbOO3dezwsSbWdaGb9fcPsJGRCHBE+R3/hs82bq5jr69cw7ylM3VtOEpBvJbV0pjvK3sCGgolNrxg0Qq2s3EvGxgYZOkC62Dd+TXLdW06RRix75Kc9IAbGci3w9rG0OmWthMkJXs0t55gcxcu1TlsP8XLaW+n3b7gHJg/EbURX1kl276jgUWjUXLdPkQiEbbtx13KdNI7bh/zvKKXpCUHJBLztZVfmVvDOs93kbvO4czZTvbSq9U6x+0iaFpH8qwBhYu1b756ySrWFw6Ti84DbaFN1b5dhDjQThLN4fbOeFI759GRoaHr5FrugDad6ATcs5BUI3Cpg0Kj0R6HfW9vH7mUDDKTBzpYtPsLFv2jhkVOVrJIqydG+B3/hs/kwT+pfHKgbbunA54tklwjlHWeCmLAO9eZypwH4Vf2gcgKFml+ITVCWayDdZMBY4IvUGEQkimhA2aRXD2UDE+T5GBETorr3Sx6ai5fZAqMts+DNi5RY+b4YXu9QUim9HjFKpKsBwS9tWohXOeTLXVyX4hFQj6usLQY8jM5HKJW+cAlck61TXmCEFxJkuNwl5Y+oM3tW0O/kmk+5L42FmnJ4wvKhNAWdqgVmlrajGIyIa8D4EG1WgDTW0vAsMe3xhWSDUNFSttmkGWZzatZZhSUJmEHu5BkxwHLXrNaYNdPe8kkDzLM+dl8ATYw2j5fsWGG+oY9BkHp0u2VKkh2DC4h+DA8kPEh7tCsNjZKtNc6DdE8emE9i17ckJxQTrdSnJzJol2fKD+1bcpXfyFrRuCuMutdZGFgKkmPAaJ/ufoQt7TmkPUCgKlEcB2gfLwuDfehi7o2MWewwuIVq42iUqfs81XcR9JjgOj/kVoA9/NmwARG5yjQkQ4AyoN/xZ5x8E3t94mi0qB4imTHob3EOHq8hcwYgVlcoqPKMMbsrmdTUir1tcP9t3KYFuuUn7o2gdHuL8mqEYePNiWISp0QAD8l2XHACDitFjjfdZHMGBHtgPQ2wVGnGO1YRFaN6Oy6YBCWKvO8kodkxwHr/xW1QDjcT2aM4Ka66QRBHhMDo6ZdM/T2hQ3CUqIg/o17HZIdB4yAf9VCeH5nhkjbNIOjaccAHjRxYZRgywzDw8NGcSlRfJsk66E91v7fdoAgXps2LfAISdYDOqBXLYjrrBn4QzX1IMijITCOtmu+FGYyBdw+6T2SawR0wBm14A0RBM93GQRaEcT3WB6CwNKwWy2c0TLIyeZidLHo2Xf4wU+lSRCUL9m3DHr8ZUUklQ8YAR+rhTHJMAM/ETJPZlB8SuDEAKtE6KtN3xlEmhECfPLLUV0q/EayVLhS56gjHWBXKixIvweDwVtJpjlchYHHoMLoZqh/wDwQylf36521yObUKcALfip5QVC+eoCsGYF5SmHJDL7gBMLbj3h8UpBkWgOWiSa1Il5XmQO2w+3zdA7byWj7AsWGGeobdhuEWhFzHLdX9JNMc0DBxWolPHSwBAx7PLzgCciKyoFIDxkxAg9EMrs+E4fy/aKbpPKBd/2YLKiV8K7OCsp5oN1HYmFrm8ebMz8Sg5Vu0OMte57k8oE7JbXC7KolykGkFfAg05ajMeVQ1PoMEn1Bn7Si0ickfF7xGZJrBKaK2FNqhbrt9WTeAhDBs4kJsWPxy9SYOeq27UgQkyFhQ4TH/yTZCFg61qiF8Zb27LlOcsEKsnKMlbhEWhLKxqJ98ouR02fO2XxjLM4muUbgugnb49Fv/fBaKvWrMZADCQweZihpM3aI9mqs4zUlw7NKchIRuxqrShCQDcUOyxGAwA+PtVMBLyhxB5ZrXBsa0l2OwovpKyiSHic3nQV+GKEaRu4/eITcyg3wzVctWhkXH7uqLyb3nAV+YgqxoE01XlhSnpMPI1TwPpDAjzXIPWfh8cy6EyLlUdVwQdF0tu/AYXLNWeBShyuPNuDhm8fRSO45C7/ffwcY3aca9/iDrHHPz+Sec8AMD5OcxHUe53zSraxdwOgPRhu0DqR0PZ4FcGODuT2m3lq7xBB+mkfuOQsQfxPMsa1aBzZv2UpuZg88Z8RvfjCOHDpynH1du4UtXv6mElu0NhXi9wmCuDSn/zsM5tl6gyM5pnI1L4gf4D0luZU7KL3OcSoHlCngVuNmjNzJPWDJW61NfOymsidXLl/EDmAj/HstCJ/u8QQeJBcmMIEJ5BKTJv0Hv5QYu/faw34AAAAASUVORK5CYII=') no-repeat;\r\n    background-size: cover;\r\n    margin: 12px 10px 12px 32;\r\n    width: 60px;\r\n    height: 60px;\r\n    min-width: 60px;\r\n}\r\n#heading\r\n{\r\n    flex: 4;\r\n    padding: 24px 0px 8px 10px;\r\n    height: 60px;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n}\r\n.links\r\n{\r\n    padding-top: 32px;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    display: block;\r\n}\r\n#heading > a \r\n{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.links a\r\n{\r\n    color: #555;\r\n    text-decoration: none;\r\n    transition: ease-in 0.2s;\r\n    padding-right: 12px;\r\n    overflow: hidden;\r\n}\r\n.links a:hover\r\n{\r\n    color: #1E88E5;\r\n    transition: ease-in 0.2s;\r\n}\r\n#userEmail \r\n{\r\n    padding-right: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n <div id=\"logo\"></div>\n  <div id=\"heading\"><a routerLink=\"/\">basechat</a></div>\n  <div class=\"links\">\n    <div *ngIf=\"(!user | async); else notLoggedIn\">\n          <span>\n              <span id=\"userEmail\">Hello {{userEmail}}</span>\n            </span>\n            <span>\n              <a href='#' (click)=\"logout()\">Logout</a>\n            </span>\n    </div>\n    <ng-template  #notLoggedIn>\n          <span>\n              <a href=\"#\" (click)=\"login()\">Login</a>\n            </span>\n            <span>\n              <a routerLink=\"/signup\">Sign Up</a>\n            </span>\n      </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        console.log('Init Navbar');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit Navbar');
        this.user = this.authService.authUser();
        this.user.subscribe(function (user) {
            if (!user) {
                _this.userEmail = user.email;
            }
        });
        console.log('OnInit Navbar - complete');
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.login = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        console.log("check authState");
        this.user = afAuth.authState;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.userObject = auth;
                var status_1 = 'online';
                _this.setUserStatus(status_1);
            }
        });
    }
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        console.log('login');
        var loginResult = this.afAuth.auth.signInWithEmailAndPassword(email, password);
        if (loginResult) {
            this.router.navigate(['chat']);
        }
        return loginResult;
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            _this.authState = user;
            var status = 'online';
            _this.setUserData(email, displayName, status, user.user.uid);
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.logout = function () {
        var status = 'offine';
        this.setUserStatus(status);
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    AuthService.prototype.setUserData = function (email, displayName, status, userId) {
        try {
            var list = this.db.list('users');
            list.push({
                displayName: displayName,
                email: email,
                status: status,
                uid: userId,
            });
            /* works ok:
            const pushId = this.db.createPushId();
            const item =  {
              displayName: displayName,
              email: email,
              status: status,
              uid: userId,
              id: pushId,
              indexOn: "uid",
            };
            this.UsersRef.set(item.id, item);
            */
        }
        catch (error) {
            console.log(error);
        }
    };
    AuthService.prototype.setUserStatus = function (status) {
        var path = "users/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // more auth https://gist.github.com/codediodeio/5e02b605f2ab015f2fb1e60497bd46bf
        ,
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    // https://dzone.com/articles/observables-with-the-angular-5
    // https://github.com/angular/angularfire2/issues/1220
    // https://stackoverflow.com/questions/48123366/how-i-can-call-observable-complete-callback-function-it-doesnt-work
    function ChatService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        console.log("ChatService constructor called");
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.user = auth;
                _this.chatMessages = _this.getMessageFeed().valueChanges();
            }
            //this.userName = this.userObj.displayName;
            console.log('UserNameStr: ' + _this.user.displayName);
            console.log('Called constructor!');
            //console.log(this.userObj.displayName);
        });
    }
    // gute referenz: https://grokonez.com/frontend/angular/angular-5-firebase-crud-operations-with-angularfire2-v5#2_Object
    // see https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md
    // interessant: https://stackoverflow.com/questions/50506896/angular-6-rxjs-pipe-not-working-on-valuechanges
    ChatService.prototype.getUser = function () {
        var _this = this;
        console.log("Get User called");
        var uid = this.user.uid;
        //console.log("uid"+uid);
        //const path = `/users/${uid}`;
        //console.log("getUserFor");
        // Solution?
        // https://github.com/angular/angularfire2/issues/1209
        var ab = this.db.list('/users', function (ref) { return ref.orderByChild("uid")
            .limitToFirst(1)
            .equalTo(uid); })
            .valueChanges().subscribe(function (data) {
            _this.userArray = data;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("done");
        });
        console.log("Get User called - complete");
        //return ab;
    };
    ChatService.prototype.getUsers = function () {
        var path = "/users";
        return this.db.list(path).valueChanges();
    };
    // AngularFire List Doku
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    ChatService.prototype.sendMessage = function (msg) {
        var _this = this;
        var timestamp = new Date(); //this.getTimeStamp();
        var email = this.user.email;
        var userName = this.userName;
        var uid = this.user.uid;
        this.db.list('/users', function (ref) { return ref.orderByChild("uid")
            .limitToFirst(1)
            .equalTo(uid); })
            .valueChanges().subscribe(function (data) {
            data.forEach(function (x) {
                if (x.uid === uid) {
                    _this.db.list('messages').push({
                        message: msg,
                        timeSent: timestamp.toString(),
                        userName: x.displayName,
                        email: email,
                    }).then(function () {
                        console.log('push and then');
                    });
                }
                else {
                    console.log("not equal");
                }
            });
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("done");
        });
        console.log('this.username' + this.userNameStr);
        console.log('this.username' + this.userName);
        //console.log('Called sendMessage()!');
    };
    ChatService.prototype.getMessageFeed = function () {
        // query to create our message feed binding
        //console.log('Called getMessageFeed()!');
        return this.db.list('messages', function (ref) { return ref.limitToLast(25).orderByKey(); });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container \r\n{\r\n    overflow: hidden;\r\n    background:\r\n    linear-gradient(45deg, rgba(0,103, 255,0.3), rgba(0,150, 80,0.9) ),\r\n    url('photo_55025_20151126.jpg') center center no-repeat;;\r\n}\r\n.signUpCard \r\n{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px; \r\n    height: 520px;\r\n    margin: auto;\r\n    margin-top: auto;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n}\r\n.formInput\r\n{\r\n    display: block;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background: #ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size: 1em;\r\n    margin-bottom: 18px;\r\n}\r\n.btn\r\n{\r\n    height: 54px;\r\n    margin-top: 32px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    width: 100%\r\n}\r\n#btn-signUp\r\n{\r\n    background-color: #2A2845;\r\n}\r\n#btn-signUp:hover\r\n{\r\n    background-color: #4a4865;\r\n    transition: ease-in 0.2s;\r\n}\r\n#btn-signUp:disabled\r\n{\r\n    background-color: #eee;\r\n    color: #999;\r\n}\r\nh2 \r\n{\r\n    text-align: center;\r\n    height: 2em;\r\n}\r\na \r\n{\r\n    text-decoration: none;\r\n}\r\n.label \r\n{\r\n    font-size: 0.9em;\r\n}\r\n.errorMsg\r\n{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"signUpCard\">\n    <form #signUpForm=\"ngForm\">\n      <h2 class=\"heading\">Sign Up</h2>\n      \n      <label class=\"label\">Email</label>\n      <input type=\"email\" name=\"email\"\n        placeholder=\"Enter your email address\"\n        [(ngModel)]=\"email\" class=\"formInput\"\n        maxlength=\"60\" required />\n\n      <label class=\"label\">Password</label>\n      <input type=\"password\" name=\"password\"\n        placeholder=\"Choose a password\"\n        [(ngModel)]=\"password\" class=\"formInput\"\n        required />\n      <label class=\"label\">DisplayName</label>\n      <input name=\"displayName\"\n        placeholder=\"Enter a display name\"\n        [(ngModel)]=\"displayName\" class=\"formInput\"\n        maxlength=\"12\" required />\n      <button [disabled]=\"!signUpForm.form.valid\"\n          type=\"submit\" (click)=\"signUp()\"\n          class=\"btn\" id=\"btn-signUp\">\n          Sign Up\n      </button>\n      <label class=\"errorMsg\" [(ngModel)]=\"errorMsg\"></label>  \n    </form>\n  </div>\n</div>\n\n<!-- <p>\n  signup-form works!\n</p>\n-->\n"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        var result = this.authService.signUp(email, password, displayName).catch(function (error) { return _this.errorMsg = error.message; });
        if (result) {
            this.router.navigate(['chat']);
        }
    };
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-item/user-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userContainer\r\n{\r\n    display:  flex;\r\n    height: auto;\r\n    flex: 9;\r\n    padding: 10px;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    border-radius: 1px;\r\n    align-items: flex-start;\r\n    background-color: #201835;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    color: #A098A5;\r\n    border-radius: 8px;\r\n    transition: ease-in 0.2s;\r\n}\r\n.userData {\r\n    flex: 1;\r\n    font-size: 0.7em;\r\n}\r\n.userContent\r\n{\r\n    display: inline-block;\r\n    flex: 9;\r\n}\r\n.userContainer:hover \r\n{\r\n    background-color: #453968;\r\n    color: #ddd;\r\n    transition: ease-in 0.1s;\r\n}\r\n.online\r\n{\r\n    background-color: #0FA;\r\n}\r\n.busy {\r\n    background-color: #FB0;\r\n}\r\n.offline \r\n{\r\n    background-color: #888;\r\n}\r\n.status\r\n{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    min-height: 10px;\r\n    border-radius: 50%;\r\n    margin: 10px 12px 0px 10px;\r\n}"

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-item/user-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userContainer\">\n  <div class=\"userData\"> \n      <span class=\"status\" [ngClass]=(user.status)>\n      </span>\n  </div>\n  <div class=\"userContent\">\n    {{user.displayName}}\n  </div>\n</div>\n<!--<p>\n  user-item works!\n</p>\n-->"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userList {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user {\r\n    flex-direction: column;\r\n    margin: 10px 0;\r\n    height: 40px;\r\n    min-width: 160px;\r\n}"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n<div *ngFor=\"let user of users\" class=\"user\">\n  <app-user-item [user]=user ></app-user-item>\n</div>\n</div>\n<!--<p>\n  user-list works!\n</p>\n-->"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(chatservice) {
        var _this = this;
        chatservice.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCcIxT3WDJrZNdL3FWE6gBauI7x9s6CiEg',
        authDomain: 'zeta-flare-143011.firebaseapp.com',
        databaseURL: 'https://zeta-flare-143011.firebaseio.com',
        projectId: 'zeta-flare-143011',
        storageBucket: 'zeta-flare-143011.appspot.com',
        messagingSenderId: '552594457872'
    },
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");



var appRoutes = [
    { path: 'signup', component: _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"] },
    { path: 'chat', component: _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__["ChatroomComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Develop\base-chat\base-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map