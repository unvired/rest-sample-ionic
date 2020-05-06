(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"outer-div\">\n    <ion-title class=\"app-name\">Unvired-REST-Sample</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-div\" class=\"ion-padding\">\n  <ion-list>\n    <ion-input *ngIf=\"!isAuthenticationSuccess\" type=\"text\" [(ngModel)]=\"url\" autocapitalize=\"off\"></ion-input>\n    <ion-input *ngIf=\"!isAuthenticationSuccess\" type=\"text\" placeholder=\"company\" [(ngModel)]=\"company\"></ion-input>\n    <ion-input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" autocapitalize=\"off\"></ion-input>\n    <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n    <ion-button (click)=\"login()\" expand=\"block\">Login</ion-button>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-div {\n  margin: 0;\n  width: 100% !important;\n}\n\n.app-name {\n  text-align: center;\n  color: #2D5F8A;\n  text-align: left;\n  font-size: 17px;\n  font-weight: bold;\n}\n\nion-button {\n  --background: #2D5F8A;\n  --border-width: 0.9px;\n  --border-radius: 8.0px;\n  --border-color:#D2D7D3;\n  height: 45px;\n  margin-top: 10px;\n}\n\nion-input {\n  width: 100%;\n  height: 45px;\n  border: solid 1px black;\n  border-width: 0.9px;\n  border-radius: 8px;\n  border-color: #D2D7D3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZpdGhyYS9yZXN0LXNhbXBsZS1pb25pYy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWRpdiB7XG4gICAgbWFyZ2luOjA7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmFwcC1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyRDVGOEE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzJENUY4QTtcbiAgICAtLWJvcmRlci13aWR0aDogMC45cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4LjBweDtcbiAgICAtLWJvcmRlci1jb2xvcjojRDJEN0QzO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24taW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDAuOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDguMHB4O1xuICAgIGJvcmRlci1jb2xvcjogI0QyRDdEMztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOi41ZW07XG59XG4iLCIub3V0ZXItZGl2IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXBwLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMkQ1RjhBO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMkQ1RjhBO1xuICAtLWJvcmRlci13aWR0aDogMC45cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogOC4wcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiNEMkQ3RDM7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC45cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbG9yOiAjRDJEN0QzO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAwLjVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/unvired-cordova-sdk/ngx */ "./node_modules/@ionic-native/unvired-cordova-sdk/ngx/index.js");





let LoginPage = class LoginPage {
    constructor(router, alertCtrl, loading, unviredCordovaSdk) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.unviredCordovaSdk = unviredCordovaSdk;
        this.isHasPermissions = false;
        this.url = 'https://sandbox.unvired.io/UMP/';
        this.company = '';
        this.username = '';
        this.password = '';
        this.isAuthenticationSuccess = this.router.getCurrentNavigation().extras.queryParams.isAuthenticationSuccess;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }
    login() {
        if (!this.isAuthenticationSuccess) {
            if (!this.url || this.url.trim().length === 0) {
                this.showAlert('', 'Enter Url.');
            }
            if (!this.company || this.company.trim().length === 0) {
                this.showAlert('', 'Enter Company.');
                return;
            }
        }
        if (!this.username || this.username.trim().length === 0) {
            this.showAlert('', 'Enter Username.');
            return;
        }
        if (!this.password || this.password.trim().length === 0) {
            this.showAlert('', 'Enter Password.');
            return;
        }
        this.umpLogin();
    }
    umpLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginParameters = new _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginParameters"]();
            loginParameters.url = this.url;
            loginParameters.company = this.company;
            loginParameters.username = this.username;
            loginParameters.password = this.password;
            loginParameters.loginType = _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginType"].unvired;
            switch (this.isAuthenticationSuccess) {
                case _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].auth_activation_required:
                    this.showLaoding();
                    // tslint:disable-next-line:max-line-length
                    const authenticateActivateResult = yield this.unviredCordovaSdk.authenticateAndActivate(loginParameters);
                    if (authenticateActivateResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateAndActivateResultType"].auth_activation_success) {
                        this.dismissLoading();
                        this.showAlert('', 'Successfully registered');
                        this.router.navigate(['home']);
                    }
                    else if (authenticateActivateResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateAndActivateResultType"].auth_activation_error) {
                        this.dismissLoading();
                        console.log('Error during login:' + authenticateActivateResult.error);
                        this.showAlert('Error during login:', authenticateActivateResult.error);
                    }
                    break;
                case _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].app_requires_login:
                    this.showLaoding();
                    const authenticateLocalResult = yield this.unviredCordovaSdk.authenticateLocal(loginParameters);
                    if (authenticateLocalResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateLocalResultType"].login_success) {
                        this.dismissLoading();
                        this.showAlert('', 'Local Password verified Successfully');
                        this.router.navigate(['home']);
                    }
                    else if (authenticateLocalResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateLocalResultType"].login_error) {
                        this.dismissLoading();
                        this.showAlert('', authenticateLocalResult.error);
                        console.log('Error during local login: ' + authenticateLocalResult.error);
                    }
                    break;
                case _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].login_success:
                    this.router.navigate(['/home']);
                    break;
            }
        });
    }
    showLaoding() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.load = yield this.loading.create({
                message: 'Please wait...',
                spinner: 'circles'
            });
            yield this.load.present();
        });
    }
    dismissLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            setTimeout(() => {
                this.load.dismiss();
            }, 2000);
        });
    }
    showAlert(title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: message,
                buttons: [{
                        text: 'Ok'
                    }],
            });
            alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["UnviredCordovaSDK"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["UnviredCordovaSDK"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map