(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"container-div\">\n    <ion-title style=\"color: white;\">Unvired REST Sample</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"container-div\" class=\"ion-padding\">\n  <ion-input type=\"text\" placeholder=\"City\" [(ngModel)]=\"cityName\" autocapitalize=\"off\"></ion-input>\n  <ion-button (click)=\"getweather()\" expand=\"block\">Get Weather</ion-button>\n  <ion-list *ngIf=\"showWeatherInfo\" class=\"info-div\">\n    <ion-item>\n      <ion-label class=\"label\">Description</ion-label>\n      <ion-label class=\"value\">{{weatherHeraderObj.WEATHER_DESC}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Temperature</ion-label>\n    <ion-label class=\"value\">{{weatherHeraderObj.TEMPERATURE}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label\">Humidity</ion-label>\n      <ion-label class=\"value\">{{weatherHeraderObj.HUMIDITY}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  padding-left: 0px !important;\n  color: white;\n}\n\nion-toolbar {\n  --background: #214564;\n}\n\n.container-div {\n  margin: 0;\n  width: 100% !important;\n}\n\nion-input {\n  width: 100%;\n  height: 45px;\n  border: solid 1px black;\n  border-width: 0.9px;\n  border-radius: 8px;\n  border-color: #D2D7D3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  padding: 0.5em;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 45px !important;\n  text-transform: none;\n}\n\n.info-div {\n  margin-top: 25px;\n  margin-right: 5px;\n  border-radius: 5px;\n  border-color: gray;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.label {\n  font-size: 18px;\n  color: darkgray;\n  margin-left: 8px;\n}\n\n.value {\n  font-size: 20px;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZpdGhyYS9yZXN0LXNhbXBsZS1pb25pYy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjE0NTY0O1xufVxuXG4uY29udGFpbmVyLWRpdiB7XG4gIG1hcmdpbjowO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwLjlweDtcbiAgYm9yZGVyLXJhZGl1czogOC4wcHg7XG4gIGJvcmRlci1jb2xvcjogI0QyRDdEMztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzouNWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaW5mby1kaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyMTQ1NjQ7XG59XG5cbi5jb250YWluZXItZGl2IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwLjlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItY29sb3I6ICNEMkQ3RDM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaW5mby1kaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/unvired-cordova-sdk/ngx */ "./node_modules/@ionic-native/unvired-cordova-sdk/ngx/index.js");
/* harmony import */ var src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/appConstant */ "./src/constants/appConstant.ts");
/* harmony import */ var src_models_WEATHER_HEADER__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/WEATHER_HEADER */ "./src/models/WEATHER_HEADER.ts");






let HomePage = class HomePage {
    constructor(platform, actionSheetCtrl, alertCtrl, loading, unviredCordovaSdk) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.unviredCordovaSdk = unviredCordovaSdk;
        this.cityName = '';
        this.showWeatherInfo = false;
        this.weatherHeraderObj = {};
    }
    getweather() {
        this.showWeatherInfo = false;
        if (!this.cityName || this.cityName.trim().length === 0) {
            this.showAlert('', 'Enter City.' + this.cityName);
            return;
        }
        this.sendDataToServer();
    }
    sendDataToServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const weatherHeader = new src_models_WEATHER_HEADER__WEBPACK_IMPORTED_MODULE_5__["WEATHER_HEADER"]();
            weatherHeader.CITY = this.cityName;
            weatherHeader.HUMIDITY = '';
            weatherHeader.TEMPERATURE = '';
            weatherHeader.WEATHER_DESC = '';
            const data = { WEATHER: [{ WEATHER_HEADER: weatherHeader }] };
            const data1 = { WEATHER_HEADER: weatherHeader };
            let result;
            this.showLaoding();
            const insertDb = yield this.unviredCordovaSdk.dbInsertOrUpdate('WEATHER_HEADER', weatherHeader, true);
            console.log('Insert data to db -- weather_info page ' + JSON.stringify(insertDb));
            // tslint:disable-next-line:max-line-length
            if (this.platform.is('ios') || this.platform.is('android')) {
                result = yield this.unviredCordovaSdk.syncForeground(_ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["RequestType"].RQST, data1, '', src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__["AppConstant"].PA_GET_WEATHER, true);
            }
            else {
                result = yield this.unviredCordovaSdk.syncForeground(_ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["RequestType"].RQST, null, data, src_constants_appConstant__WEBPACK_IMPORTED_MODULE_4__["AppConstant"].PA_GET_WEATHER, true);
            }
            console.log('Response from server: ' + JSON.stringify(result));
            this.dismissLoading();
            if (result.type === 0) {
                if (result.data.WEATHER === undefined) {
                    this.fetchDataFromDb();
                }
                else {
                    const jsonObj = result.data;
                    const weatherObj = jsonObj.WEATHER[0];
                    const weather = weatherObj.WEATHER_HEADER;
                    this.weatherHeraderObj = weather;
                    this.showWeatherInfo = true;
                }
            }
            else {
                console.log('Error: ' + JSON.stringify(result.error));
                this.showAlert('Error', result.error);
            }
        });
    }
    fetchDataFromDb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const res = yield this.unviredCordovaSdk.dbSelect('WEATHER_HEADER', `CITY = '${this.cityName}'`);
            if (res.type === 0) {
                console.log('data from db: ' + JSON.stringify(res.data[0]));
                const weather = res.data[0];
                this.weatherHeraderObj = weather;
                this.showWeatherInfo = true;
            }
            else {
                console.log('Error: ' + JSON.stringify(res.error));
                this.showAlert('Error', res.error);
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
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["UnviredCordovaSDK"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_unvired_cordova_sdk_ngx__WEBPACK_IMPORTED_MODULE_3__["UnviredCordovaSDK"]])
], HomePage);



/***/ }),

/***/ "./src/models/WEATHER_HEADER.ts":
/*!**************************************!*\
  !*** ./src/models/WEATHER_HEADER.ts ***!
  \**************************************/
/*! exports provided: WEATHER_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_HEADER", function() { return WEATHER_HEADER; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// tslint:disable-next-line:class-name
class WEATHER_HEADER {
}


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map