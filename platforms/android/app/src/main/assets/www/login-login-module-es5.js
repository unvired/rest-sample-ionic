function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"outer-div\">\n    <ion-title class=\"app-name\">Unvired-REST-Sample</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-div\" class=\"ion-padding\">\n  <ion-list>\n    <ion-input *ngIf=\"!isAuthenticationSuccess\" type=\"text\" [(ngModel)]=\"url\" autocapitalize=\"off\"></ion-input>\n    <ion-input *ngIf=\"!isAuthenticationSuccess\" type=\"text\" placeholder=\"company\" [(ngModel)]=\"company\"></ion-input>\n    <ion-input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" autocapitalize=\"off\"></ion-input>\n    <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n    <ion-button (click)=\"login()\" expand=\"block\">Login</ion-button>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer-div {\n  margin: 0;\n  width: 100% !important;\n}\n\n.app-name {\n  text-align: center;\n  color: #2D5F8A;\n  text-align: left;\n  font-size: 17px;\n  font-weight: bold;\n}\n\nion-button {\n  --background: #2D5F8A;\n  --border-width: 0.9px;\n  --border-radius: 8.0px;\n  --border-color:#D2D7D3;\n  height: 45px;\n  margin-top: 10px;\n}\n\nion-input {\n  width: 100%;\n  height: 45px;\n  border: solid 1px black;\n  border-width: 0.9px;\n  border-radius: 8px;\n  border-color: #D2D7D3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZpdGhyYS9yZXN0LXNhbXBsZS1pb25pYy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWRpdiB7XG4gICAgbWFyZ2luOjA7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmFwcC1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzJENUY4QTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMkQ1RjhBO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwLjlweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDguMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiNEMkQ3RDM7IFxuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjlweDtcbiAgICBib3JkZXItcmFkaXVzOiA4LjBweDtcbiAgICBib3JkZXItY29sb3I6ICNEMkQ3RDM7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzouNWVtO1xufVxuIiwiLm91dGVyLWRpdiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmFwcC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJENUY4QTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzJENUY4QTtcbiAgLS1ib3JkZXItd2lkdGg6IDAuOXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDguMHB4O1xuICAtLWJvcmRlci1jb2xvcjojRDJEN0QzO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuOXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1jb2xvcjogI0QyRDdEMztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzogMC41ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/unvired-cordova-sdk/ngx */
    "./node_modules/@ionic-native/unvired-cordova-sdk/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, alertCtrl, loading, unviredCordovaSdk) {
        _classCallCheck(this, LoginPage);

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

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad Login');
        }
      }, {
        key: "login",
        value: function login() {
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
      }, {
        key: "umpLogin",
        value: function umpLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loginParameters, authenticateActivateResult, authenticateLocalResult;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loginParameters = new _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginParameters"]();
                    loginParameters.url = this.url;
                    loginParameters.company = this.company;
                    loginParameters.username = this.username;
                    loginParameters.password = this.password;
                    loginParameters.loginType = _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginType"].unvired;
                    _context.t0 = this.isAuthenticationSuccess;
                    _context.next = _context.t0 === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].auth_activation_required ? 9 : _context.t0 === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].app_requires_login ? 15 : _context.t0 === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["LoginListenerType"].login_success ? 21 : 23;
                    break;

                  case 9:
                    this.showLaoding(); // tslint:disable-next-line:max-line-length

                    _context.next = 12;
                    return this.unviredCordovaSdk.authenticateAndActivate(loginParameters);

                  case 12:
                    authenticateActivateResult = _context.sent;

                    if (authenticateActivateResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateAndActivateResultType"].auth_activation_success) {
                      this.dismissLoading();
                      this.showAlert('', 'Successfully registered');
                      this.router.navigate(['home']);
                    } else if (authenticateActivateResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateAndActivateResultType"].auth_activation_error) {
                      this.dismissLoading();
                      console.log('Error during login:' + authenticateActivateResult.error);
                      this.showAlert('Error during login:', authenticateActivateResult.error);
                    }

                    return _context.abrupt("break", 23);

                  case 15:
                    this.showLaoding();
                    _context.next = 18;
                    return this.unviredCordovaSdk.authenticateLocal(loginParameters);

                  case 18:
                    authenticateLocalResult = _context.sent;

                    if (authenticateLocalResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateLocalResultType"].login_success) {
                      this.dismissLoading();
                      this.showAlert('', 'Local Password verified Successfully');
                      this.router.navigate(['home']);
                    } else if (authenticateLocalResult.type === _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["AuthenticateLocalResultType"].login_error) {
                      this.dismissLoading();
                      this.showAlert('', authenticateLocalResult.error);
                      console.log('Error during local login: ' + authenticateLocalResult.error);
                    }

                    return _context.abrupt("break", 23);

                  case 21:
                    this.router.navigate(['/home']);
                    return _context.abrupt("break", 23);

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showLaoding",
        value: function showLaoding() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loading.create({
                      message: 'Please wait...',
                      spinner: 'circles'
                    });

                  case 2:
                    this.load = _context2.sent;
                    _context2.next = 5;
                    return this.load.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    setTimeout(function () {
                      _this.load.dismiss();
                    }, 2000);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert(title, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      subHeader: message,
                      buttons: [{
                        text: 'Ok'
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["UnviredCordovaSDK"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_4__["UnviredCordovaSDK"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map