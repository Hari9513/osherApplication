webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, formBuild, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuild = formBuild;
        this.authServ = authServ;
        this.user = {};
        this.data = {};
        this.value = {};
        this.forgotGroup = this.formBuild.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])]
        });
        this.otpGroup = this.formBuild.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.passGroup = this.formBuild.group({
            newpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)])],
            confirmpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)])]
        });
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.forgotEmail = function () {
        var _this = this;
        console.log(this.forgotGroup.value);
        this.emailID = this.forgotGroup.value.email;
        this.authServ.forgot(this.forgotGroup.value)
            .then(function (data) {
            console.log(data.data.results.affectedRows > 0);
            if (data.data.results.affectedRows > 0) {
                window.alert('OTP Generated Successfully');
                _this.email = _this.forgotGroup.value;
            }
            else {
                _this.notExist = "Invalid email";
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ForgotpasswordPage.prototype.otpFun = function () {
        var _this = this;
        console.log(this.otpGroup.value);
        this.otpGroup.value.email = this.emailID;
        this.authServ.otpCheck(this.otpGroup.value)
            .then(function (data) {
            if (data.status == 200) {
                window.alert('OTP Verified Successfully');
                _this.otpKey = _this.otpGroup.value;
            }
            else {
                _this.invalidOTP = "Invalid OTP";
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ForgotpasswordPage.prototype.newPass = function () {
        var _this = this;
        if (this.passGroup.value.newpassword === this.passGroup.value.confirmpassword) {
            this.passGroup.value.email = this.emailID;
            this.authServ.newPassword(this.passGroup.value)
                .then(function (data) {
                window.alert('Password Updated Successfully');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.confirmpassword = 'Incorrect';
        }
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\osher\src\pages\forgotpassword\forgotpassword.html"*/'\n  <form *ngIf="!email" [formGroup]="forgotGroup" (ngSubmit)="forgotEmail()">\n      <ion-list>\n        <div class="logo">\n        </div>\n        <div *ngIf="notExist" style="color: brown; padding-left:10px;">Invalid Email ID</div>\n    <ion-item>\n      <ion-input type="text" name="email" placeholder="Enter Email ID" formControlName="email" aria-required="true"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="forgotGroup.invalid">Submit</button>\n    </ion-item>\n    </ion-list>\n    </form>\n  \n  <form *ngIf="email && !otpKey" [formGroup]="otpGroup" (ngSubmit)="otpFun()">\n      <ion-list>\n          <div class="logo">\n          </div>\n          <div *ngIf="invalidOTP" style="color: brown; padding-left:10px;">Invalid OTP Key</div>\n    <ion-item>\n      <ion-input type="text" name="otp" placeholder="Enter OTP" formControlName="otp" aria-required="true"></ion-input>\n    </ion-item>\n      \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="otpGroup.invalid">Submit</button>\n    </ion-item>\n  \n    </ion-list>\n  </form>\n  \n  <form *ngIf="otpKey" [formGroup]="passGroup" (ngSubmit)="newPass()">\n      <ion-list>\n          <div class="logo">\n          </div>\n    <ion-item>\n      <ion-input type="password" name="newpassword" placeholder="New Password" formControlName="newpassword" aria-required="true"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <ion-input type="password" name="confirmpassword" placeholder="Confirm Password" formControlName="confirmpassword" aria-required="true"></ion-input>\n      </ion-item>\n      <div style="color: brown; padding-left:10px;" *ngIf="confirmpassword">Incorrect Confirm Password</div>\n      \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="passGroup.invalid">Submit</button>\n    </ion-item>\n  \n    </ion-list>\n  </form>\n\n'/*ion-inline-end:"D:\osher\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, formbuilder, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.authServ = authServ;
        this.myGroup = this.formbuilder.group({
            tempData: this.formbuilder.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
                email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
                phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9]+')])],
                password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
                country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
                state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)])],
                profession: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
            }),
            regArray: this.formbuilder.array([])
        });
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage.prototype.register = function (value) {
        var _this = this;
        var regArrayData = this.myGroup.get('regArray');
        regArrayData.value.push(this.myGroup.get('tempData').value);
        var userData = regArrayData.value;
        this.authServ.registerUser(userData[0])
            .then(function (res) {
            if (res) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RegistrationPage.prototype.loginNav = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"D:\osher\src\pages\registration\registration.html"*/' <div class="logo" style="margin-top:15px;"></div>\n  <form [formGroup]="myGroup" (ngSubmit)="register(myGroup.value)">\n    <ion-list formGroupName="tempData"class="reg-form">\n        <ion-item>\n          <ion-input type="text" placeholder="Full Name" formControlName="name" aria-required="true"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type="email" placeholder="Email Id" formControlName="email" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Phone No" formControlName="phone" aria-required="true"></ion-input>\n        </ion-item>\n          \n        <ion-item>\n            <ion-input type="password" placeholder="Password" formControlName="password" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-input type="text" placeholder="Contury" formControlName="country" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-input type="text" placeholder="State" formControlName="state" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" placeholder="city" formControlName="city" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n           <ion-input type="text" placeholder="Profession" formControlName="profession" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <button class="submit-btn" ion-button block padding type="Submit" [disabled]="myGroup.invalid">Register</button>\n            <button class="submit-btn" ion-button block padding (click)="loginNav()">Login </button>\n          </ion-item>\n    </ion-list>\n  </form>\n'/*ion-inline-end:"D:\osher\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomescreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';

/**
 * Generated class for the HomescreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomescreenPage = /** @class */ (function () {
    function HomescreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomescreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomescreenPage');
    };
    HomescreenPage.prototype.loginNav = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomescreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homescreen',template:/*ion-inline-start:"D:\osher\src\pages\homescreen\homescreen.html"*/'\n\n<ion-content class="homescreen">\n  <ion-slides pager>\n\n    <ion-slide class="homescreen">\n      <!-- <ion-icon class="osher-icon" clear></ion-icon> -->\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <h2 style="color:#fff; margin-top: 300px;">Stock Exchange</h2>\n    </ion-slide>\n  \n    <ion-slide class="homescreen3">\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <p style="color:#fff;margin-top: 300px;">Watch ads & Earn Money</p>\n    </ion-slide>\n  \n    <ion-slide class="homescreen1">\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <p style="color:#fff; margin-top: 300px;">Survey And Reedeam Points</p>\n      <button ion-button (click)="loginNav();">Continue</button>\n    </ion-slide>  \n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\osher\src\pages\homescreen\homescreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomescreenPage);
    return HomescreenPage;
}());

//# sourceMappingURL=homescreen.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ads/ads.module": [
		283,
		7
	],
	"../pages/forgotpassword/forgotpassword.module": [
		284,
		6
	],
	"../pages/homescreen/homescreen.module": [
		285,
		5
	],
	"../pages/login/login.module": [
		286,
		4
	],
	"../pages/registration/registration.module": [
		287,
		3
	],
	"../pages/stocks/stocks.module": [
		288,
		2
	],
	"../pages/survey/survey.module": [
		289,
		1
	],
	"../pages/tabs/tabs.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_stocks__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ads_ads__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_survey__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__stocks_stocks__["a" /* StocksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__ads_ads__["a" /* AdsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__survey_survey__["a" /* SurveyPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\osher\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0" position="top" color="theme-color">\n  \n    <ion-tab [root]="tab1Root" tabTitle="Stocks" tabIcon="stats"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Ads" tabIcon="videocam"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Survey" tabIcon="logo-buffer"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"D:\osher\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authservice_authservice__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgotpassword_forgotpassword__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_stocks_stocks__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ads_ads__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__["a" /* HomescreenPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homescreen/homescreen.module#HomescreenPageModule', name: 'HomescreenPage', segment: 'homescreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stocks/stocks.module#StocksPageModule', name: 'StocksPage', segment: 'stocks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__["a" /* HomescreenPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_stocks_stocks__["a" /* StocksPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_authservice_authservice__["a" /* AuthserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_stocks_stocks__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ads_ads__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__["a" /* HomescreenPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'HomeScreen', component: __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__["a" /* HomescreenPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            // { title: 'Registration', component: RegistrationPage },
            // { title: 'Services', component: TabsPage },
            { title: 'Stock', component: __WEBPACK_IMPORTED_MODULE_7__pages_stocks_stocks__["a" /* StocksPage */] },
            { title: 'Ads', component: __WEBPACK_IMPORTED_MODULE_8__pages_ads_ads__["a" /* AdsPage */] },
            { title: 'Survey', component: __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__["a" /* SurveyPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\osher\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\osher\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RegistrationPage } from '../registration/registration';





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formbuilder, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.authServ = authServ;
        this.myGroup = this.formbuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)])]
        });
        this.email = this.myGroup.controls['email'];
        this.password = this.myGroup.controls['password'];
    }
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (value) {
            this.authServ.login(value)
                .then(function (data) {
                if (data.status == 200) {
                    window.alert('User Successfully LoggedIN');
                    localStorage.setItem('mail', 'user');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.notExist = "Invalid email or password";
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signupNav = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\osher\src\pages\login\login.html"*/'\n<form [formGroup]="myGroup" (ngSubmit)="onSubmit(myGroup.value)">\n\n  <ion-list>\n    <div class="logo">\n    </div>\n    <div *ngIf="notExist" style="color: brown; padding-left:10px;">Invalid Email ID or Passwor</div>\n    <ion-item [ngClass]="{\'error-border\':!myGroup.controls.email.valid}">\n      <ion-input type="email" email placeholder="Email ID" formControlName="email" aria-required="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="email.hasError(\'required\') && email.touched">\n      <p style="color: brown; padding-left:10px;">  *Email is required</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" formControlName="password" aria-required="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n      <p style="color: brown; padding-left:10px;">  *Password invalid</p>\n    </ion-item>\n \n    <ion-item>\n      <button class="submit-btn" ion-button block padding type="Submit" [disabled]="!myGroup.valid">Login</button>\n    </ion-item>\n\n    <ion-item>\n      <button class="link-btn" ion-button clear item-start (click)="signupNav();">Signup</button>\n      <button class="link-btn" ion-button clear item-end (click)="forgot()">Forget Password ?</button>\n    </ion-item>\n\n    \n  \n  </ion-list>\n</form>\n'/*ion-inline-end:"D:\osher\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdsPage = /** @class */ (function () {
    function AdsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdsPage');
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ads',template:/*ion-inline-start:"D:\osher\src\pages\ads\ads.html"*/'<ion-header>\n    <!-- <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\nAds\n</ion-content>\n'/*ion-inline-end:"D:\osher\src\pages\ads\ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StocksPage = /** @class */ (function () {
    function StocksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StocksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StocksPage');
    };
    StocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stocks',template:/*ion-inline-start:"D:\osher\src\pages\stocks\stocks.html"*/'<ion-header>\n    <!-- <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar> -->\n    <table class="stock-tbl">\n        <tr>\n            <th>Item</th>\n            <th>Price</th>\n            <th>Variation</th>\n          </tr>\n    </table>\n</ion-header>\n\n\n<ion-content class="stocks-cntr">\n  <ion-list>\n    <ion-item>\n      <table class="stock-tbl">\n        <tr>\n          <td>Apple</td>\n          <td>5000</td>\n          <td>6%</td>\n        </tr>\n        <tr>\n          <td>Mango</td>\n          <td>4500</td>\n          <td>5.5%</td>\n        </tr>\n        <tr>\n            <td>Banana</td>\n            <td>3900</td>\n            <td>4.3%</td>\n          </tr>\n          <tr>\n              <td>Apple</td>\n              <td>5000</td>\n              <td>6%</td>\n            </tr>\n            <tr>\n              <td>Mango</td>\n              <td>4500</td>\n              <td>5.5%</td>\n            </tr>\n            <tr>\n                <td>Banana</td>\n                <td>3900</td>\n                <td>4.3%</td>\n              </tr>\n              <tr>\n                  <td>Apple</td>\n                  <td>5000</td>\n                  <td>6%</td>\n                </tr>\n                <tr>\n                  <td>Mango</td>\n                  <td>4500</td>\n                  <td>5.5%</td>\n                </tr>\n                <tr>\n                    <td>Banana</td>\n                    <td>3900</td>\n                    <td>4.3%</td>\n                  </tr>\n                  <tr>\n                      <td>Apple</td>\n                      <td>5000</td>\n                      <td>6%</td>\n                    </tr>\n                    <tr>\n                      <td>Mango</td>\n                      <td>4500</td>\n                      <td>5.5%</td>\n                    </tr>\n                    <tr>\n                        <td>Banana</td>\n                        <td>3900</td>\n                        <td>4.3%</td>\n                      </tr>\n                      <tr>\n                          <td>Apple</td>\n                          <td>5000</td>\n                          <td>6%</td>\n                        </tr>\n                        <tr>\n                          <td>Mango</td>\n                          <td>4500</td>\n                          <td>5.5%</td>\n                        </tr>\n                        <tr>\n                            <td>Banana</td>\n                            <td>3900</td>\n                            <td>4.3%</td>\n                          </tr>\n                          <tr>\n                              <td>Apple</td>\n                              <td>5000</td>\n                              <td>6%</td>\n                            </tr>\n                            <tr>\n                              <td>Mango</td>\n                              <td>4500</td>\n                              <td>5.5%</td>\n                            </tr>\n                            <tr>\n                                <td>Banana</td>\n                                <td>3900</td>\n                                <td>4.3%</td>\n                              </tr>\n                              <tr>\n                                  <td>Apple</td>\n                                  <td>5000</td>\n                                  <td>6%</td>\n                                </tr>\n                                <tr>\n                                  <td>Mango</td>\n                                  <td>4500</td>\n                                  <td>5.5%</td>\n                                </tr>\n                                <tr>\n                                    <td>Banana</td>\n                                    <td>3900</td>\n                                    <td>4.3%</td>\n                                  </tr>\n      </table>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\osher\src\pages\stocks\stocks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StocksPage);
    return StocksPage;
}());

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = /** @class */ (function () {
    function SurveyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"D:\osher\src\pages\survey\survey.html"*/'<ion-header>\n    <!-- <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\nSurvey\n</ion-content>\n'/*ion-inline-end:"D:\osher\src\pages\survey\survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiUrl = 'https://www.paskle.com:2083/api/user/';
var loginUrl = 'https://www.paskle.com:2083/api/login/';
var forgotUrl = 'https://www.paskle.com:2083/api/forgotpassword';
var passwordUrl = 'https://www.paskle.com:2083/api/updatepassword';
/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthserviceProvider = /** @class */ (function () {
    function AuthserviceProvider(httpClient) {
        this.httpClient = httpClient;
        console.log('Hello AuthserviceProvider Provider');
    }
    AuthserviceProvider.prototype.forgot = function (user) {
        return this.httpClient.put(forgotUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.otpCheck = function (user) {
        return this.httpClient.post(forgotUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.newPassword = function (user) {
        return this.httpClient.put(passwordUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.login = function (user) {
        return this.httpClient.post(loginUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.registerUser = function (user) {
        return this.httpClient.post(apiUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getUserDetails = function () {
        return this.httpClient.get(apiUrl)
            .toPromise()
            .then(function (data) {
            return data.results;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getUserByID = function (user) {
        console.log(user);
        return this.httpClient.get(apiUrl + ("" + user))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.updateUserByID = function (user) {
        console.log(user);
        return this.httpClient.put(apiUrl + ("" + user.id), user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.deleteUser = function (user) {
        console.log(user);
        return this.httpClient.delete(apiUrl + ("" + user.id))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthserviceProvider);
    return AuthserviceProvider;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stocks_stocks__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ads_ads__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_survey__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__stocks_stocks__["a" /* StocksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__ads_ads__["a" /* AdsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__survey_survey__["a" /* SurveyPage */];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.loginNav = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.homeNav = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\osher\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n      \n      <ion-tabs selectedIndex="0" position="top" color="theme-color">\n          <ion-tab [root]="tab1Root" tabTitle="Stocks" tabIcon="stats"></ion-tab>\n          <ion-tab [root]="tab2Root" tabTitle="Ads" tabIcon="videocam"></ion-tab>\n          <ion-tab [root]="tab3Root" tabTitle="Survey" tabIcon="logo-buffer"></ion-tab>\n        </ion-tabs>\n\n  </ion-content>\n  \n  \n  '/*ion-inline-end:"D:\osher\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map