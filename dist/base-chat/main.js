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

module.exports = "<div class=\"chatRoom\">\r\n  <div class=\"chatHeaderWrapper\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n  <!--<router-outlet></router-outlet>-->\r\n  <!-- test single components-->\r\n  <!--<app-login-form></app-login-form>-->\r\n  <app-user></app-user>\r\n</div>"

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
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authGuard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/authGuard.service */ "./src/app/services/authGuard.service.ts");
/* harmony import */ var _services_userResolver_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/userResolver.service */ "./src/app/services/userResolver.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../routes */ "./src/routes.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { AngularFireOfflineModule } from 'angularfire2-offline';
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
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_16__["ChatFormComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_23__["appRoutes"], { useHash: false }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebase),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_18__["ChatService"], _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _services_authGuard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_userResolver_service__WEBPACK_IMPORTED_MODULE_22__["UserResolverService"]],
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

module.exports = "<input\r\n  class=\"chatInput\"\r\n  [(ngModel)]=\"message\"\r\n  (keydown)=\"handleSubmit($event)\" />\r\n\r\n<button \r\n  class=\"chatButton\"\r\n  (click)=\"send()\">Send</button>\r\n\r\n<!--<p>\r\n  chat-form works!\r\n</p>\r\n-->\r\n"

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

module.exports = "<div class=\"mainContent\">\r\n  <div class=\"userListWrapper\">\r\n    <app-user-list></app-user-list>\r\n  </div>\r\n  <div #scroller class=\"feedWrapper\">\r\n    <app-feed></app-feed>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"chatFormWrapper\">\r\n  <app-chat-form></app-chat-form>\r\n</div>\r\n<!--\r\n<p>\r\n  chatroom works!\r\n</p>\r\n-->"

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

module.exports = "<div class=\"feed\">\r\n  <div *ngFor=\"let message of feed | async\" class=\"message\"> \r\n    <app-message [chatMessage]=message></app-message>\r\n  </div>\r\n</div>"

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

module.exports = ".loginContainer\r\n{\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background:\r\n        linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0,0,80,0.9)),\r\n        url('botanical-cactus-close-up-305821.jpg') center center no-repeat;;\r\n    background-size: 100%;\r\n}\r\n.loginCard\r\n{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px;\r\n    height: 520px;\r\n    margin: auto;\r\n    margin-top: auto;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n}\r\n.loginFormInput\r\n{\r\n    margin-bottom: 18px;\r\n    display: block;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background: #ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size:1em;\r\n}\r\n.btn\r\n{\r\n    height: 54px;\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n}\r\n#btn-signUp\r\n{\r\n    background-color:#2A2845;\r\n}\r\n#btn-signUp:hover\r\n{\r\n    background-color:#4A4865;\r\n    transition: ease-in 0.2s;\r\n}\r\n#btn-login\r\n{\r\n    background-color:#4A4875;\r\n}\r\n#btn-login:hover\r\n{\r\n    background-color: #5A5895;\r\n    transition: ease-in 0.2s;\r\n}\r\n.loginHeading\r\n{\r\n    height: 2em;\r\n}\r\n.errorMsg\r\n{\r\n    color: red;\r\n}\r\n.row\r\n{\r\n    margin-top: 10px;\r\n}\r\n.label \r\n{\r\n    font-size: 0.9em;\r\n}\r\n.infoField\r\n{\r\n    height: 54px;\r\n    border: none;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: ease-in 0.2s;\r\n    width: 100%;\r\n    margin-bottom: 18px;\r\n    margin-right: 2px;\r\n    font-size: 0.9em;\r\n}\r\n.rightItem\r\n{\r\n    width: 100%;\r\n    text-align: right;\r\n    height: 54px;\r\n}\r\nh2 \r\n{\r\n    text-align: center;\r\n    height: 2em;\r\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginContainer\">\r\n  <div class=\"loginCard\">\r\n    <h2 class=\"loginHeading\">Log In</h2>\r\n    <form [formGroup]=\"loginForm\">\r\n      <!-- old binding  [(ngModel)]=\"email\" -->\r\n      <label class=\"label\">Email</label>\r\n      <input\r\n      type=\"email\"\r\n      formControlName=\"email\"\r\n      name=\"email\"\r\n      class=\"loginFormInput\"\r\n      required/>\r\n      <!-- old binding  [(ngModel)]=\"password\"-->\r\n      <label class=\"label\">Password</label>\r\n      <input\r\n      type=\"password\"\r\n      formControlName=\"password\"\r\n      name=\"password\"\r\n      class=\"loginFormInput\"\r\n      required />\r\n      <button class=\"btn\"\r\n              type=\"submit\" \r\n              id=\"btn-login\"\r\n              (click)=\"tryLogin(loginForm.value)\">\r\n              Log In\r\n      </button>\r\n\r\n  \r\n      <div class=\"rightItem\">\r\n        <label class=\"label infoField\">No account yet?</label>\r\n        <a class=\"label infoField\" href=\"/signup\">Create an account</a>\r\n      </div>\r\n      <!-- \r\n      <button type=\"button\" class=\"btn\" (click)=\"tryFacebookLogin()\">Login with Facebook</button>\r\n      <button type=\"button\" class=\"btn\" (click)=\"tryGoogleLogin()\">Login with Google</button>\r\n      <button type=\"button\" class=\"btn\" (click)=\"tryTwitterLogin()\">Login with Twitter</button>\r\n      -->\r\n      <!-- nnModel cannot be used in a form-->\r\n      <!--<label class=\"errorMsg\" [(ngModel)]=\"errorMsg\"></label> -->\r\n      <label class=\"errorMsg\">{{ errorMsg }}</label>\r\n    </form>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function LoginFormComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit LoginFormComponent');
    };
    // depricated
    //login()
    //{
    //  console.log('login() called from login-form component');
    //  var cred = this.authService.login(this.email, this.password)
    //  .catch(error => {
    //    console.log(error.message);
    //    this.errorMsg = error.message;
    //    //this.router.navigate(['login']);
    //  });
    //
    //  if(cred)
    //  {
    //    this.router.navigate(['chat']);
    //  }
    //}
    LoginFormComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginFormComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        });
    };
    LoginFormComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        });
    };
    LoginFormComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        });
    };
    LoginFormComponent.prototype.tryLogin = function (value) {
        var _this = this;
        console.log('tryLogin');
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/chat']);
        }, function (err) {
            console.log(err);
            _this.errorMsg = err.message;
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        })
        // login example
        // https://github.com/FouomaOscar/firebase-authentication-with-angular-6/blob/master/src/app/core/auth.service.ts
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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

module.exports = "<div class=\"messageContainer\"\r\n  [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\r\n <div class=\"messageData\"\r\n   [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\r\n   <span class=\"sender\"\r\n      [ngClass]=\"{'isOwnSender':isOwnMessage}\">\r\n     {{ userName }}\r\n   </span>\r\n   <span class=\"timestamp\"\r\n      [ngClass]=\"{'isOwnTimestamp':isOwnMessage}\">\r\n     {{ timeStamp | date: 'medium'}}\r\n   </span>\r\n  </div>\r\n <div class=\"messageContent\"\r\n   [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\r\n   {{ messageContent }}\r\n </div>\r\n</div>\r\n<!-- <p>\r\n  message works!\r\n</p>\r\n-->"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
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
    function MessageComponent(authService, userService) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        console.log('ctor ChatMessage');
        //authService.authUser().subscribe( user =>
        //{
        //  this.ownEmail = user.email;
        //  this.isOwnMessage = this.ownEmail == this.userEmail;
        //})
        var lUser = this.userService.getCurrentUser();
        lUser.then(function (user) {
            _this.userEmail = user.email;
            _this.isOwnMessage = _this.ownEmail == _this.userEmail;
            _this.userName = user.displayName;
            //this.user = user;
            //this.userObservable =  new Observable( obj => {obj.next(user);})
        }).catch(function (err) {
            console.log(err);
            //this.router.navigate(['/login']);
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
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

/***/ "./src/app/models/firebaseUserModel.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/firebaseUserModel.model.ts ***!
  \***************************************************/
/*! exports provided: FireBaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseUserModel", function() { return FireBaseUserModel; });
var FireBaseUserModel = /** @class */ (function () {
    function FireBaseUserModel() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
    return FireBaseUserModel;
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

module.exports = "<div class=\"navBar\">\r\n <div id=\"logo\"></div>\r\n  <div id=\"heading\"><a routerLink=\"/\">basechat</a></div>\r\n  <div class=\"links\">\r\n    <div *ngIf=\"(user | async); else notLoggedIn\">\r\n          <span>\r\n            <a href='/user' id=\"userEmail\">Hello {{userEmail}}</a>\r\n            </span>\r\n            <span>\r\n              <a href='#' (click)=\"logout()\">Logout</a>\r\n            </span>\r\n    </div>\r\n    <ng-template  #notLoggedIn>\r\n          <span>\r\n              <a href=\"/login\" (click)=\"login()\">Login</a>\r\n            </span>\r\n            <span>\r\n              <a routerLink=\"/signup\">Sign Up</a>\r\n            </span>\r\n      </ng-template>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
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
    function NavbarComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        console.log('Init Navbar');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log('OnInit Navbar');
        var lUser = this.userService.getCurrentUser();
        lUser.then(function (user) {
            //this.userEmail = user.email;
            //this.user = user;
            //this.userObservable =  new Observable( obj => {obj.next(user);})
        }).catch(function (err) {
            console.log(err);
            //this.router.navigate(['/login']);
        });
        // new try
        //this.user = this.userService.getCurrentUser();
        //this.user.then(user => {
        //  this.userEmail = user.email;
        //}).catch (err => console.log(err));
        //this.user.subscribe(user => {
        //  if(user)
        //  {
        //    console.log('we have a user');
        //    this.userEmail = user.email;
        //  }
        //  else
        //  {
        //    console.log('no user');
        //    //this.router.navigate(['login']);
        //  }
        //  
        //});
        console.log('OnInit Navbar - complete');
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        console.log('logout');
        this.authService.doLogout();
        this.authService.doLogout()
            .then(function (res) {
            //this.location.back();
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    NavbarComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
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
                //this.setUserStatus(status);
            }
        });
    }
    // Legacy API
    //authUser() 
    //{
    //  return this.user;
    //}
    //get currentUserId(): string 
    //{
    //  return this.authState !== null ? this.authState.uid: '';
    //}
    //login(email: string, password: string)
    //{
    //  console.log('login');
    //  var loginResult =  this.afAuth.auth.signInWithEmailAndPassword
    //  (email, password);
    //
    //  return loginResult;
    //}
    //signUp(email: string, password: string, displayName: string)
    //{
    //  return this.afAuth.auth.createUserWithEmailAndPassword
    //  (
    //    email,
    //    password,
    //  ).then((user) => 
    //    {
    //      this.authState = user;
    //      const status = 'online';
    //      this.setUserData(
    //        email, 
    //        displayName, 
    //        status,
    //        user.user.uid,
    //      )}
    //  ).catch(error => console.log(error));
    //}
    //logout()
    //{
    //  const status = 'offine';
    //  this.setUserStatus(status);
    //  this.afAuth.auth.signOut();
    //  //this.router.navigate(['login']);
    //}
    //setUserData(
    //  email: string,
    //  displayName: string, 
    //  status: string,
    //  userId: string): void 
    //{
    //  try {
    //    const list = this.db.list('users');
    //    list.push({ 
    //      displayName: displayName,
    //      email: email,
    //      status: status,
    //      uid: userId,
    //    });
    //
    //    /* works ok:
    //    const pushId = this.db.createPushId();
    //    const item =  { 
    //      displayName: displayName,
    //      email: email,
    //      status: status,
    //      uid: userId,
    //      id: pushId,
    //      indexOn: "uid",
    //    };
    //    this.UsersRef.set(item.id, item);
    //    */
    //  }
    //  catch(error)
    //  { 
    //    console.log(error)
    //  } 
    //} 
    //setUserStatus(status: string): void 
    //{
    //  const path = `users/${this.currentUserId}`;
    //  const data = {
    //    status: status
    //  }
    //  this.db.object(path).update(data)
    //  .catch(error => console.log(error));
    //}
    // New API for Angular 6
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].TwitterAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        console.log('doLogin');
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
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

/***/ "./src/app/services/authGuard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authGuard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (user) {
                console.log('AuthguardCanActivate');
                //this.router.navigate(['/chat']);
                return resolve(true);
            }, function (err) {
                return resolve(true);
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
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
        });
    }
    // gute referenz: https://grokonez.com/frontend/angular/angular-5-firebase-crud-operations-with-angularfire2-v5#2_Object
    // see https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md
    // interessant: https://stackoverflow.com/questions/50506896/angular-6-rxjs-pipe-not-working-on-valuechanges
    ChatService.prototype.getUser = function () {
        var _this = this;
        console.log("Get User called");
        var uid = this.user.uid;
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

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import 'rxjs/add/operator/toPromise'; not needed in A


var UserService = /** @class */ (function () {
    function UserService(afAuth) {
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve();
                //resolve(res)
            }, function (err) { return reject(err); });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/userResolver.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/userResolver.service.ts ***!
  \**************************************************/
/*! exports provided: UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return UserResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_firebaseUserModel_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/firebaseUserModel.model */ "./src/app/models/firebaseUserModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolverService = /** @class */ (function () {
    function UserResolverService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserResolverService.prototype.resolve = function (route) {
        var _this = this;
        var user = new _models_firebaseUserModel_model__WEBPACK_IMPORTED_MODULE_3__["FireBaseUserModel"]();
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (res) {
                if (res.providerData[0].providerId == 'password') {
                    user.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, function (err) {
                console.log('redirect login');
                //this.router.navigate(['/login']);
                return reject(err);
            });
        });
    };
    UserResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserResolverService);
    return UserResolverService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container \r\n{\r\n    overflow: hidden;\r\n    background:\r\n    linear-gradient(45deg, rgba(0,103, 255,0.3), rgba(0,150, 80,0.9) ),\r\n    url('photo_55025_20151126.jpg') center center no-repeat;;\r\n}\r\n.signUpCard \r\n{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px; \r\n    height: 600px;\r\n    margin: auto;\r\n    margin-top: auto;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n}\r\n.formInput\r\n{\r\n    display: block;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    background: #ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size: 1em;\r\n    margin-bottom: 18px;\r\n}\r\n.btn\r\n{\r\n    height: 54px;\r\n    margin-top: 32px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    width: 100%;\r\n    margin-bottom: 18px;\r\n}\r\n#btn-signUp\r\n{\r\n    background-color: #2A2845;\r\n}\r\n#btn-signUp:hover\r\n{\r\n    background-color: #4a4865;\r\n    transition: ease-in 0.2s;\r\n}\r\n#btn-signUp:disabled\r\n{\r\n    background-color: #eee;\r\n    color: #999;\r\n}\r\nh2 \r\n{\r\n    text-align: center;\r\n    height: 2em;\r\n}\r\na \r\n{\r\n    text-decoration: none;\r\n}\r\n.label \r\n{\r\n    font-size: 0.9em;\r\n}\r\n.errorMsg\r\n{\r\n    color: red;\r\n}\r\n.infoField\r\n{\r\n    height: 54px;\r\n    border: none;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: ease-in 0.2s;\r\n    width: 100%;\r\n    margin-bottom: 18px;\r\n    margin-right: 2px;\r\n    font-size: 0.9em;\r\n}\r\n.rightItem\r\n{\r\n    width: 100%;\r\n    text-align: right;\r\n    height: 54px;\r\n}"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"signUpCard\">\r\n    <!-- <form #signUpForm=\"ngForm\">-->\r\n      <!-- article about form Group \r\n        https://toddmotto.com/reactive-formgroup-validation-angular-2\r\n      -->\r\n    <form [formGroup]=\"registerForm\">\r\n      <h2 class=\"heading\">Sign Up</h2>\r\n      <label class=\"label\">Email</label>\r\n      <!-- legacy binding [(ngModel)]=\"email\"-->\r\n      <input type=\"email\" name=\"email\"\r\n        formControlName=\"email\"\r\n        placeholder=\"Enter your email address\"\r\n         class=\"formInput\"\r\n        maxlength=\"60\" required />\r\n\r\n      <label class=\"label\">Password</label>\r\n      <!-- legacy binding [(ngModel)]=\"password\"-->\r\n      <input type=\"password\" name=\"password\"\r\n        placeholder=\"Choose a password\"\r\n        formControlName=\"password\"\r\n        class=\"formInput\"\r\n        required />\r\n      <label class=\"label\">DisplayName</label>\r\n      <!-- legacy binding [(ngModel)]=\"displayName\"-->\r\n      <input name=\"displayName\"\r\n        placeholder=\"Enter a display name\"\r\n        formControlName=\"displayName\"\r\n        class=\"formInput\"\r\n        maxlength=\"12\" required />\r\n      <button [disabled]=\"!registerForm.valid\"\r\n          type=\"submit\" (click)=\"tryRegister(registerForm.value)\"\r\n          class=\"btn\" id=\"btn-signUp\">\r\n          Sign Up\r\n      </button>\r\n      <!-- legacy binding [(ngModel)]=\"errorMsg\" -->\r\n      <div class=\"rightItem\">\r\n        <label class=\"label infoField\">Already have an account?</label>\r\n        <a class=\"label infoField\" href=\"/login\">Login</a>\r\n      </div>\r\n      <!--\r\n      <button type=\"button\" class=\"btn \" (click)=\"tryFacebookLogin()\">Register with Facebook</button>\r\n      <button type=\"button\" class=\"btn\" (click)=\"tryGoogleLogin()\">Register with Google</button>\r\n      <button type=\"button\" class=\"btn\" (click)=\"tryTwitterLogin()\">Register with Twitter</button>\r\n      -->\r\n      <label class=\"label errorMsg\">{{errorMsg}}</label>\r\n      <label class=\"label success\">{{successMsg}}</label>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- <p>\r\n  signup-form works!\r\n</p>\r\n-->\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function SignupFormComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    // legacy code
    //signUp() {
    //  const email = this.email;
    //  const password = this.password;
    //  const displayName = this.displayName;
    //
    //var result = this.authService.signUp(
    //  email, 
    //  password, 
    //  displayName).catch(error => this.errorMsg = error.message);
    //
    //  if(result)
    //  {
    //    this.router.navigate(['chat']);
    //  }
    //}
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            displayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SignupFormComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMsg = "";
            _this.successMsg = "Your account has been created";
            _this.router.navigate(['/chat']);
        }, function (err) {
            console.log(err);
            _this.errorMsg = err.message;
            _this.successMsg = "";
        });
    };
    SignupFormComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        }, function (err) { return console.log(err); });
    };
    SignupFormComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        }, function (err) { return console.log(err); });
    };
    SignupFormComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/chat']);
        }, function (err) { return console.log(err); });
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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

module.exports = "<div class=\"userContainer\">\r\n  <div class=\"userData\"> \r\n      <span class=\"status\" [ngClass]=(user.status)>\r\n      </span>\r\n  </div>\r\n  <div class=\"userContent\">\r\n    {{user.displayName}}\r\n  </div>\r\n</div>\r\n<!--<p>\r\n  user-item works!\r\n</p>\r\n-->"

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

module.exports = "<div class=\"userList\">\r\n<div *ngFor=\"let user of users\" class=\"user\">\r\n  <app-user-item [user]=user ></app-user-item>\r\n</div>\r\n</div>\r\n<!--<p>\r\n  user-list works!\r\n</p>\r\n-->"

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

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    width: 100%\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"card\" style=\"width: 20rem;\">\n          <img class=\"card-img-top image\" [src]=\"user.image\" alt=\"Card image cap\">\n          <div *ngIf='user.provider != \"password\"'class=\"card-body\">\n            <h4 class=\"card-title\">{{user.name}}</h4>\n            <p class=\"card-text\">This is an example of Social Authentication using Firebase in an Angular 5 web app. </p>\n          </div>\n          <div *ngIf='user.provider == \"password\"'class=\"card-body\">\n            <form [formGroup]=\"profileForm\">\n              <div class=\"form-group\">\n                <label>Your name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\n              </div>\n            </form>\n            <a (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">Save</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link\">Logout</button>\n      </div>\n    </div>\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_firebaseUserModel_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/firebaseUserModel.model */ "./src/app/models/firebaseUserModel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(userService, authService, route, 
    //private location: Location,
    fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.user = new _models_firebaseUserModel_model__WEBPACK_IMPORTED_MODULE_5__["FireBaseUserModel"]();
        console.log('constructor User Component');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit User Component');
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    UserComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    UserComponent.prototype.save = function (value) {
        this.userService.updateCurrentUser(value)
            .then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UserComponent);
    return UserComponent;
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
/* harmony import */ var _app_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _app_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/services/authGuard.service */ "./src/app/services/authGuard.service.ts");





var appRoutes = [
    { path: 'signup', component: _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"], canActivate: [_app_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"], canActivate: [_app_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'chat', component: _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__["ChatroomComponent"], canActivate: [_app_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'userForm', component: _app_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    //{ path: 'user', component: UserComponent, canActivate: [AuthGuardService] }, 
    //{ path: 'user', component: UserComponent,  resolve: { data: UserResolverService}},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\FullStackApp\ChatApp\ChatApp-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map