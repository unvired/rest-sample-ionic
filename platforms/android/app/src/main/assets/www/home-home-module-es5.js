function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"container-div\">\n    <ion-title style=\"color: white;\">Unvired REST Sample</ion-title>\n  </ion-toolbar>    \n</ion-header>\n\n<ion-content class=\"container-div\" class=\"ion-padding\">\n  <!-- <ion-header>\n    <ion-toolbar>\n      <ion-title style=\"color: white;\">Unvired REST Sample</ion-title>\n    </ion-toolbar> \n  </ion-header> -->\n  <ion-input type=\"text\" placeholder=\"City\" [(ngModel)]=\"cityName\" autocapitalize=\"off\"></ion-input>\n  <ion-button (click)=\"getweather()\" expand=\"block\">Get Weather</ion-button>\n  <ion-list *ngIf=\"showWeatherInfo\" class=\"info-div\">\n    <ion-item>\n      <ion-label class=\"label\">Description</ion-label>\n      <ion-label class=\"value\">{{weatherHeraderObj.WEATHER_DESC}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Temperature</ion-label>\n    <ion-label class=\"value\">{{weatherHeraderObj.TEMPERATURE}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Humidity</ion-label>\n      <ion-label class=\"value\">{{weatherHeraderObj.HUMIDITY}}</ion-label>\n    </ion-item>\n  </ion-list> \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding-left: 0px !important;\n  color: white;\n}\n\nion-toolbar {\n  --background: #214564;\n}\n\n.container-div {\n  margin: 0;\n  width: 100% !important;\n}\n\nion-input {\n  width: 100%;\n  height: 45px;\n  border: solid 1px black;\n  border-width: 0.9px;\n  border-radius: 8px;\n  border-color: #D2D7D3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  padding: 0.5em;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 45px !important;\n  text-transform: none;\n}\n\n.info-div {\n  margin-top: 25px;\n  margin-right: 5px;\n  border-radius: 5px;\n  border-color: gray;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.label {\n  font-size: 18px;\n  color: darkgray;\n  margin-left: 8px;\n}\n\n.value {\n  font-size: 20px;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZpdGhyYS9yZXN0LXNhbXBsZS1pb25pYy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0FDUkY7O0FEV0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5uYXYtaGVhZGVyIHtcbi8vICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbi8vICAgY29sb3I6IHdoaXRlO1xuXG4vLyAgIC50b29sYmFyLWJhY2tncm91bmQge1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzIxNDU2NDtcbi8vICAgfVxuLy8gfVxuXG5pb24taGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzIxNDU2NDtcbn1cblxuLmNvbnRhaW5lci1kaXYge1xuICBtYXJnaW46MDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC45cHg7XG4gIGJvcmRlci1yYWRpdXM6IDguMHB4O1xuICBib3JkZXItY29sb3I6ICNEMkQ3RDM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6LjVlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC8vIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5pbmZvLWRpdiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGRhcmtncmF5O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59IiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyMTQ1NjQ7XG59XG5cbi5jb250YWluZXItZGl2IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwLjlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItY29sb3I6ICNEMkQ3RDM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaW5mby1kaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/unvired-cordova-sdk/ngx */
    "./node_modules/@ionic-native/unvired-cordova-sdk/ngx/index.js");
    /* harmony import */


    var src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/constants/appConstant */
    "./src/constants/appConstant.ts");
    /* harmony import */


    var src_models_WEATHER_HEADER__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/WEATHER_HEADER */
    "./src/models/WEATHER_HEADER.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(platform, actionSheetCtrl, alertCtrl, loading, unviredCordovaSdk) {
        _classCallCheck(this, HomePage);

        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.unviredCordovaSdk = unviredCordovaSdk;
        this.cityName = '';
        this.showWeatherInfo = false;
        this.weatherHeraderObj = {};
      }

      _createClass(HomePage, [{
        key: "getweather",
        value: function getweather() {
          this.showWeatherInfo = false;

          if (!this.cityName || this.cityName.trim().length === 0) {
            this.showAlert('', 'Enter City.' + this.cityName);
            return;
          }

          this.sendDataToServer();
        }
      }, {
        key: "sendDataToServer",
        value: function sendDataToServer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var weatherHeader, data, data1, result, insertDb, jsonObj, weatherObj, weather;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    weatherHeader = new src_models_WEATHER_HEADER__WEBPACK_IMPORTED_MODULE_5__["WEATHER_HEADER"]();
                    weatherHeader.CITY = this.cityName;
                    weatherHeader.HUMIDITY = '';
                    weatherHeader.TEMPERATURE = '';
                    weatherHeader.WEATHER_DESC = '';
                    data = {
                      WEATHER: [{
                        WEATHER_HEADER: weatherHeader
                      }]
                    };
                    data1 = {
                      WEATHER_HEADER: weatherHeader
                    };
                    this.showLaoding();
                    _context.next = 10;
                    return this.unviredCordovaSdk.dbInsertOrUpdate('WEATHER_HEADER', weatherHeader, true);

                  case 10:
                    insertDb = _context.sent;
                    console.log('Insert data to db -- weather_info page ' + JSON.stringify(insertDb)); // tslint:disable-next-line:max-line-length

                    if (!(this.platform.is('ios') || this.platform.is('android'))) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 15;
                    return this.unviredCordovaSdk.syncForeground(_ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["RequestType"].RQST, data1, '', src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__["AppConstant"].PA_GET_WEATHER, true);

                  case 15:
                    result = _context.sent;
                    _context.next = 21;
                    break;

                  case 18:
                    _context.next = 20;
                    return this.unviredCordovaSdk.syncForeground(_ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["RequestType"].RQST, null, data, src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__["AppConstant"].PA_GET_WEATHER, true);

                  case 20:
                    result = _context.sent;

                  case 21:
                    console.log('Response from server: ' + JSON.stringify(result));
                    this.dismissLoading();

                    if (result.type === 0) {
                      if (result.data.WEATHER === undefined) {
                        this.fetchDataFromDb();
                      } else {
                        jsonObj = result.data;
                        weatherObj = jsonObj.WEATHER[0];
                        weather = weatherObj.WEATHER_HEADER;
                        this.weatherHeraderObj = weather;
                        this.showWeatherInfo = true;
                      }
                    } else {
                      console.log('Error: ' + JSON.stringify(result.error));
                      this.showAlert('Error', result.error);
                    }

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fetchDataFromDb",
        value: function fetchDataFromDb() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var res, weather;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.unviredCordovaSdk.dbSelect('WEATHER_HEADER', "CITY = '".concat(this.cityName, "'"));

                  case 2:
                    res = _context2.sent;

                    if (res.type === 0) {
                      console.log('data from db: ' + JSON.stringify(res.data[0]));
                      weather = res.data[0];
                      this.weatherHeraderObj = weather;
                      this.showWeatherInfo = true;
                    } else {
                      console.log('Error: ' + JSON.stringify(res.error));
                      this.showAlert('Error', res.error);
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showLaoding",
        value: function showLaoding() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loading.create({
                      message: 'Please wait...',
                      spinner: 'circles'
                    });

                  case 2:
                    this.load = _context3.sent;
                    _context3.next = 5;
                    return this.load.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    setTimeout(function () {
                      _this.load.dismiss();
                    }, 2000);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "showAlert",
        value: function showAlert(title, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      subHeader: message,
                      buttons: [{
                        text: 'Ok'
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["UnviredCordovaSDK"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["UnviredCordovaSDK"]])], HomePage);
    /***/
  },

  /***/
  "./src/models/WEATHER_HEADER.ts":
  /*!**************************************!*\
    !*** ./src/models/WEATHER_HEADER.ts ***!
    \**************************************/

  /*! exports provided: WEATHER_HEADER */

  /***/
  function srcModelsWEATHER_HEADERTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WEATHER_HEADER", function () {
      return WEATHER_HEADER;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable-next-line:class-name


    var WEATHER_HEADER = function WEATHER_HEADER() {
      _classCallCheck(this, WEATHER_HEADER);
    };
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map