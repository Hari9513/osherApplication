webpackJsonp([21],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myaccount_myaccount__ = __webpack_require__(59);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, formBuild, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuild = formBuild;
        this.authServ = authServ;
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
        console.log(this.navParams.get('password'));
        this.currentUserPass = this.navParams.get('password');
    };
    ChangepasswordPage.prototype.changePassword = function () {
        var _this = this;
        console.log(this.currentPassword, this.newPassword, this.confirmPassword);
        if (this.newPassword === this.confirmPassword) {
            this.userUpdate = {
                email: this.currentUserPass.email,
                newpassword: this.newPassword
            };
            this.authServ.newPassword(this.userUpdate)
                .then(function (data) {
                window.alert('Password Updated Successfully');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myaccount_myaccount__["a" /* MyaccountPage */]);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log('Incorrect');
            this.checkPassword = 'Incorrect';
        }
    };
    ChangepasswordPage.prototype.onCurrentPas = function () {
        if (this.currentPassword) {
            if (this.currentUserPass.password != this.currentPassword) {
                this.wrongPass = 'Wrong';
                console.log('Equal');
            }
            else {
                this.wrongPass = '';
            }
        }
    };
    ChangepasswordPage.prototype.forgotPassword = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/changepassword/changepassword.html"*/'<ion-header>\n  <ion-navbar color="theme-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-icon class="osher-icon" clear></ion-icon>\n    <ion-title class="osher-txt">MY ACCOUNT</ion-title>\n    <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background: #151318;">\n  <form name="myForm" #myForm="ngForm"  (ngSubmit)="changePassword()">\n    <ion-list>\n      <div *ngIf="notExist" style="color: brown; padding-left:10px;">Invalid Email ID</div>\n  <ion-item>\n    <ion-input type="password" name="currentPassword" placeholder="Current Password" (change)="onCurrentPas()" [(ngModel)]="currentPassword" aria-required="true"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="wrongPass">\n    <p style="color: red">Incorrect Password</p>\n  </ion-item>\n  \n  <ion-item>\n    <ion-input type="password" name="newPassword" placeholder="New Password" [(ngModel)]="newPassword" aria-required="true"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n      <ion-input type="password" name="confirmPassword" placeholder="Confirm Password" [(ngModel)]="confirmPassword" aria-required="true"></ion-input>\n    </ion-item>\n    <div style="color: brown; padding-left:10px;" *ngIf="checkPassword">Incorrect Confirm Password</div>\n  \n  <ion-item>\n      <button class="submit-btn" ion-button block padding type="Submit" >Submit</button>\n    </ion-item>\n    <ion-item>\n      <a item-end (click)="forgotPassword()">Forgot Password ?</a>\n    </ion-item>\n  </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
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
            selector: 'page-registration',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/registration/registration.html"*/' <div class="logo" style="margin-top:15px;"></div>\n  <form [formGroup]="myGroup" (ngSubmit)="register(myGroup.value)">\n    <ion-list formGroupName="tempData"class="reg-form">\n        <ion-item>\n          <ion-input type="text" placeholder="Full Name" formControlName="name" aria-required="true"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type="email" placeholder="Email Id" formControlName="email" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Phone No" formControlName="phone" aria-required="true"></ion-input>\n        </ion-item>\n          \n        <ion-item>\n            <ion-input type="password" placeholder="Password" formControlName="password" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-input type="text" placeholder="Contury" formControlName="country" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-input type="text" placeholder="State" formControlName="state" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" placeholder="city" formControlName="city" aria-required="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n           <ion-input type="text" placeholder="Profession" formControlName="profession" aria-required="true"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <button class="submit-btn" ion-button block padding type="Submit" [disabled]="myGroup.invalid">Register</button>\n            <button class="submit-btn" ion-button block padding (click)="loginNav()">Login </button>\n          </ion-item>\n    </ion-list>\n  </form>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomescreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(30);
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
            selector: 'page-homescreen',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/homescreen/homescreen.html"*/'\n\n<ion-content class="homescreen">\n  <ion-slides pager>\n\n    <ion-slide class="homescreen">\n      <!-- <ion-icon class="osher-icon" clear></ion-icon> -->\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <h2 style="color:#fff; margin-top: 300px;">Stock Exchange</h2>\n    </ion-slide>\n  \n    <ion-slide class="homescreen3">\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <p style="color:#fff;margin-top: 300px;">Watch ads & Earn Money</p>\n    </ion-slide>\n  \n    <ion-slide class="homescreen1">\n      <!-- <ion-img class="slid-img" src="../assets/imgs/osher-icon-light.png"></ion-img> -->\n      <p style="color:#fff; margin-top: 300px;">Survey And Reedeam Points</p>\n      <button ion-button (click)="loginNav();">Continue</button>\n    </ion-slide>  \n  \n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/homescreen/homescreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomescreenPage);
    return HomescreenPage;
}());

//# sourceMappingURL=homescreen.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaytransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mywallet_mywallet__ = __webpack_require__(60);
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
 * Generated class for the PaytransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaytransferPage = /** @class */ (function () {
    function PaytransferPage(navCtrl, navParams, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    ;
    PaytransferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PaytransferPage');
        this.user = {
            email: localStorage.getItem('User')
        };
        this.authServ.getUserDataByEmail(this.user)
            .then(function (data) {
            _this.currentUser = data.results[0];
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PaytransferPage.prototype.phoneExist = function () {
        var _this = this;
        if (this.phone) {
            if (this.phone == this.currentUser.phone) {
                this.sameNumber = 'Same Number';
            }
            else {
                this.sameNumber = '';
                this.user = {
                    phone: this.phone
                };
                this.authServ.phoneExist(this.user)
                    .then(function (data) {
                    console.log(data);
                    if (data.results.length) {
                        _this.transferUser = data.results[0];
                        _this.phoneNotExist = '';
                    }
                    else {
                        _this.phoneNotExist = 'Phone Number Not Exist';
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        }
    };
    PaytransferPage.prototype.checkAmountExist = function () {
        console.log(this.currentUser.balance, this.amount);
        if (this.amount) {
            if (Number(this.currentUser.balance) >= Number(this.amount)) {
                this.invalidAmount = '';
                this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.amount));
            }
            else {
                this.invalidAmount = 'Insufficient Balance';
            }
        }
    };
    PaytransferPage.prototype.transferAmount = function () {
        var _this = this;
        this.authServ.updateUserByID(this.currentUser)
            .then(function (data) {
            console.log(data);
            window.alert('Money Successfully Tranfered');
            _this.transferUser.balance = Number(Number(_this.transferUser.balance) + Number(_this.amount));
            _this.authServ.updateUserByID(_this.transferUser)
                .then(function (data) {
                console.log(data);
                _this.wallet = {
                    debitedAmount: _this.amount
                };
                _this.authServ.addWallet(_this.wallet)
                    .then(function (data) {
                    console.log(data);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mywallet_mywallet__["a" /* MywalletPage */]);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PaytransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paytransfer',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/paytransfer/paytransfer.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">PAY/TRANSFER</ion-title>\n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n  \n  </ion-header>\n\n  <div class="user-img">\n    <img src="../../assets/imgs/wallet-purple.png">\n    <h3>Transfer</h3>\n  </div>\n  <form name="myForm" #myForm="ngForm" class="transfer-form">\n    <ion-list>\n      <ion-item>\n          <ion-input type="text" placeholder="Phone Number" name="phone" (change)="phoneExist()" [(ngModel)]="phone"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="phoneNotExist">\n        <p style="color: red">Phone Number Not Exist</p>\n      </ion-item>\n      <ion-item *ngIf="sameNumber">\n        <p style="color: red">Can\'t Transfer Amount to same Number</p>\n      </ion-item>\n      <ion-item>\n          <ion-input type="text" placeholder="Amount" name="amount" (change)="checkAmountExist()" [(ngModel)]="amount"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="invalidAmount">\n        <p style="color: red">Insufficient Balance</p>\n      </ion-item>\n      <ion-item>\n          <ion-input type="text" placeholder="Remarks" name="remarks" [(ngModel)]="remarks"></ion-input>\n      </ion-item>\n      <button ion-button block class="submit-btn" (click)="transferAmount()">Proceed</button>\n    </ion-list>\n  </form>\n\n\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/paytransfer/paytransfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], PaytransferPage);
    return PaytransferPage;
}());

//# sourceMappingURL=paytransfer.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(169);
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


var apiUrl = 'http://localhost:8000/api/user/';
var loginUrl = 'http://localhost:8000/api/login/';
var forgotUrl = 'http://localhost:8000/api/forgotpassword';
var passwordUrl = 'http://localhost:8000/api/updatepassword';
var stockUrll = 'http://localhost:8000/api/stock';
var emailUrl = 'http://localhost:8000/api/emailexist';
var phoneUrl = 'http://localhost:8000/api/phoneexist';
var stockStatus = 'http://localhost:8000/api/stockstatus';
var orderHistory = 'http://localhost:8000/api/orderhistory';
var SeparateOrder = 'http://localhost:8000/api/separateorder';
var couponUrl = 'http://localhost:8000/api/coupon/';
var walletUrl = 'http://localhost:8000/api/wallet/';
var UserStatusUpdateUrl = 'http://localhost:8000/api/userstatusupdate';
var myHeaders = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Autherzation': localStorage.getItem('User')
    })
};
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
    AuthserviceProvider.prototype.orderHistory = function () {
        return this.httpClient.get(orderHistory, myHeaders)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getUserDataByEmail = function (data) {
        console.log(data);
        return this.httpClient.put(emailUrl, data)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.addOrder = function (order) {
        console.log(order);
        return this.httpClient.post(orderHistory, order)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.addWallet = function (wallet) {
        console.log(wallet);
        return this.httpClient.post(walletUrl, wallet)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.upload = function (formData) {
        return this.httpClient.post(stockUrll + "/upload", formData)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.uploadImage = function (formData, id) {
        return this.httpClient.post(apiUrl + "uploadImage", formData, id)
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
    AuthserviceProvider.prototype.phoneExist = function (user) {
        return this.httpClient.post(phoneUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    // updateStocks(stocks){
    //   console.log(stocks);
    //   return this.httpClient.put(stockUrll, stocks)
    //   .toPromise()
    //   .then(data => {
    //     return data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // }
    AuthserviceProvider.prototype.updateStockStatus = function (user) {
        console.log(user);
        return this.httpClient.put(stockStatus, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.emailExist = function (user) {
        return this.httpClient.post(emailUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.addStock = function (stock) {
        return this.httpClient.post(stockUrll, stock)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getAllStocks = function () {
        return this.httpClient.get(stockUrll)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getWalletDetails = function () {
        return this.httpClient.get(walletUrl)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getOrderByName = function (order) {
        console.log(order);
        return this.httpClient.post(SeparateOrder, order)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.getStockByID = function (stockID) {
        console.log(stockID);
        return this.httpClient.get(stockUrll + ("/" + stockID))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.updateStockByID = function (stock) {
        console.log(stock);
        return this.httpClient.put(stockUrll + ("/" + stock.ID), stock)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.newPassword = function (user) {
        console.log(user);
        return this.httpClient.put(passwordUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.updateUserStatus = function (user) {
        console.log(user);
        return this.httpClient.post(UserStatusUpdateUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthserviceProvider.prototype.updateUserStatusByEmail = function (user) {
        console.log(user);
        return this.httpClient.put(UserStatusUpdateUrl, user)
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
    AuthserviceProvider.prototype.getCouponCode = function (user) {
        return this.httpClient.put(couponUrl, user)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log(err);
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
    AuthserviceProvider.prototype.deleteStock = function (stock) {
        console.log(stock);
        return this.httpClient.delete(stockUrll + ("/" + stock.id))
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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ads/ads.module": [
		305,
		20
	],
	"../pages/changepassword/changepassword.module": [
		294,
		19
	],
	"../pages/forgotpassword/forgotpassword.module": [
		295,
		18
	],
	"../pages/home/home.module": [
		296,
		17
	],
	"../pages/homescreen/homescreen.module": [
		297,
		16
	],
	"../pages/login/login.module": [
		298,
		15
	],
	"../pages/more/more.module": [
		299,
		14
	],
	"../pages/myaccount/myaccount.module": [
		300,
		13
	],
	"../pages/mywallet/mywallet.module": [
		301,
		12
	],
	"../pages/order/order.module": [
		302,
		11
	],
	"../pages/orderdetails/orderdetails.module": [
		303,
		10
	],
	"../pages/orderhistory/orderhistory.module": [
		304,
		9
	],
	"../pages/paytransfer/paytransfer.module": [
		306,
		8
	],
	"../pages/registration/registration.module": [
		307,
		7
	],
	"../pages/reports/reports.module": [
		308,
		0
	],
	"../pages/stocks/stocks.module": [
		309,
		6
	],
	"../pages/survey/survey.module": [
		310,
		5
	],
	"../pages/tabs/tabs.module": [
		311,
		4
	],
	"../pages/ticketdetails/ticketdetails.module": [
		312,
		3
	],
	"../pages/tickets/tickets.module": [
		313,
		2
	],
	"../pages/trade/trade.module": [
		314,
		1
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/more/more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>More</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/more/more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_stocks__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ads_ads__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_survey__ = __webpack_require__(58);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0" position="top" color="theme-color">\n  \n    <ion-tab [root]="tab1Root" tabTitle="Stocks" tabIcon="stats"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Ads" tabIcon="videocam"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Survey" tabIcon="logo-buffer"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the TicketdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketdetailsPage = /** @class */ (function () {
    function TicketdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TicketdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketdetailsPage');
    };
    TicketdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticketdetails',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/ticketdetails/ticketdetails.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">Order Details</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n</ion-header>\n\n\n<div style="padding-top: 60px;">\n  <ion-item class="title-btn">\n      <label>Amazon.com</label>\n  </ion-item>\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label style="font-size: 50px;">546.10</label>\n        </ion-col>\n        <ion-col>\n          <ion-row><ion-col><label>+5.75</label></ion-col></ion-row>\n          <ion-row><ion-col><label>+1.06%</label></ion-col></ion-row>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <!-- <ion-item style="color: #fff; background-color: #290435!important; padding: 0px!important;text-align: center;margin-top: 5px;">\n    <label>Trade</label>\n  </ion-item> -->\n  <form class="order-form">\n      <h1 class="page-title">Trade</h1>\n    <ion-list>\n      <ion-item>\n        <ion-select start placeholder="--Select--">\n          <ion-option>Buy</ion-option>\n          <ion-option>Sell</ion-option>\n        </ion-select>\n        <ion-input type="text" end placeholder="Qty"></ion-input>\n      </ion-item>\n       <ion-item>\n          <ion-input type="text" placeholder="Price(0.00 Market Price)"></ion-input>\n        </ion-item>\n        <ion-item>\n            <button class="reset-btn btn" ion-button item-start>Reset</button>\n            <button class="order-btn btn" ion-button item-end>Place Order</button>\n          </ion-item>\n    </ion-list>\n  </form>\n \n</div>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/ticketdetails/ticketdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TicketdetailsPage);
    return TicketdetailsPage;
}());

//# sourceMappingURL=ticketdetails.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orderhistory_orderhistory__ = __webpack_require__(61);
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
 * Generated class for the TicketsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketsPage = /** @class */ (function () {
    function TicketsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tradeRoot = __WEBPACK_IMPORTED_MODULE_3__trade_trade__["a" /* TradePage */];
        this.reportsRoot = __WEBPACK_IMPORTED_MODULE_5__orderhistory_orderhistory__["a" /* OrderhistoryPage */];
        this.moreRoot = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
    }
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickets',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/tickets/tickets.html"*/'<ion-tabs selectedIndex="1" position="top">\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tradeRoot" tabTitle="Trade" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="reportsRoot" tabTitle="Reports" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="moreRoot" tabTitle="More" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/tickets/tickets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TradePage = /** @class */ (function () {
    function TradePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TradePage');
    };
    TradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trade',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/trade/trade.html"*/'<!--\n  Generated template for the TradePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/trade/trade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgotpassword_forgotpassword__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_stocks_stocks__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ads_ads__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_order_order__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ticketdetails_ticketdetails__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_orderdetails_orderdetails__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_orderhistory_orderhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mywallet_mywallet__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_paytransfer_paytransfer__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_changepassword_changepassword__ = __webpack_require__(111);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_orderhistory_orderhistory__["a" /* OrderhistoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ticketdetails_ticketdetails__["a" /* TicketdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_paytransfer_paytransfer__["a" /* PaytransferPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_changepassword_changepassword__["a" /* ChangepasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homescreen/homescreen.module#HomescreenPageModule', name: 'HomescreenPage', segment: 'homescreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderhistory/orderhistory.module#OrderhistoryPageModule', name: 'OrderhistoryPage', segment: 'orderhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ads/ads.module#AdsPageModule', name: 'AdsPage', segment: 'ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paytransfer/paytransfer.module#PaytransferPageModule', name: 'PaytransferPage', segment: 'paytransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stocks/stocks.module#StocksPageModule', name: 'StocksPage', segment: 'stocks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticketdetails/ticketdetails.module#TicketdetailsPageModule', name: 'TicketdetailsPage', segment: 'ticketdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trade/trade.module#TradePageModule', name: 'TradePage', segment: 'trade', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_orderhistory_orderhistory__["a" /* OrderhistoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ticketdetails_ticketdetails__["a" /* TicketdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_paytransfer_paytransfer__["a" /* PaytransferPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_changepassword_changepassword__["a" /* ChangepasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_authservice_authservice__["a" /* AuthserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_homescreen_homescreen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_stocks_stocks__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ads_ads__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_order_order__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_orderdetails_orderdetails__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_orderhistory_orderhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_myaccount_myaccount__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mywallet_mywallet__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_paytransfer_paytransfer__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { RegistrationPage } from '../pages/registration/registration';
// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
// import { TabsPage } from '../pages/tabs/tabs';


// import { SurveyPage } from '../pages/survey/survey';






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_stocks_stocks__["a" /* StocksPage */];
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
            { title: 'Order', component: __WEBPACK_IMPORTED_MODULE_9__pages_order_order__["a" /* OrderPage */] },
            { title: 'Order Details', component: __WEBPACK_IMPORTED_MODULE_10__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */] },
            { title: 'Order History', component: __WEBPACK_IMPORTED_MODULE_11__pages_orderhistory_orderhistory__["a" /* OrderhistoryPage */] },
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_12__pages_myaccount_myaccount__["a" /* MyaccountPage */] },
            { title: 'My Wallet', component: __WEBPACK_IMPORTED_MODULE_13__pages_mywallet_mywallet__["a" /* MywalletPage */] },
            { title: 'Pay Transfer', component: __WEBPACK_IMPORTED_MODULE_14__pages_paytransfer_paytransfer__["a" /* PaytransferPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__ = __webpack_require__(14);
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
                    console.log(data.token);
                    window.alert('User Successfully LoggedIN');
                    localStorage.setItem('User', data.token);
                    _this.userID = {
                        id: data.data.results[0].id
                    };
                    _this.authServ.updateUserStatus(_this.userID)
                        .then(function (data) {
                        console.log(data);
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
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
            selector: 'page-login',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/login/login.html"*/'\n<form [formGroup]="myGroup" (ngSubmit)="onSubmit(myGroup.value)">\n\n  <ion-list>\n    <div class="logo">\n    </div>\n    <div *ngIf="notExist" style="color: brown; padding-left:10px;">Invalid Email ID or Passwor</div>\n    <ion-item [ngClass]="{\'error-border\':!myGroup.controls.email.valid}">\n      <ion-input type="email" email placeholder="Email ID" formControlName="email" aria-required="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="email.hasError(\'required\') && email.touched">\n      <p style="color: brown; padding-left:10px;">  *Email is required</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" formControlName="password" aria-required="true"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n      <p style="color: brown; padding-left:10px;">  *Password invalid</p>\n    </ion-item>\n \n    <ion-item>\n      <button class="submit-btn" ion-button block padding type="Submit" [disabled]="!myGroup.valid">Login</button>\n    </ion-item>\n\n    <ion-item>\n      <button class="link-btn" ion-button clear item-start (click)="signupNav();">Signup</button>\n      <button class="link-btn" ion-button clear item-end (click)="forgot()">Forget Password ?</button>\n    </ion-item>\n\n    \n  \n  </ion-list>\n</form>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderdetails_orderdetails__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(30);
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
    function StocksPage(navCtrl, navParams, alertController, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.authServ = authServ;
        // setInterval(() =>{
        //   this.ionViewDidLoad();
        // }, 5000)
    }
    StocksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StocksPage');
        this.authServ.getAllStocks()
            .then(function (data) {
            _this.allStocks = data.results.reverse();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    StocksPage.prototype.goOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */]);
    };
    StocksPage.prototype.openBuySell = function (stock) {
        var _this = this;
        var addBuySellAlert = this.alertController.create({
            title: "Amazon",
            message: "",
            buttons: [
                {
                    text: "Buy",
                    cssClass: 'buy-btn',
                    handler: function () {
                        // console.log('Cancel clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */], {
                            data: stock,
                            type: 'Buy'
                        });
                    }
                },
                {
                    text: "Sell",
                    cssClass: 'sell-btn',
                    handler: function () {
                        // console.log('Cancel clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */], {
                            data: stock,
                            type: 'Sell'
                        });
                    }
                },
                {
                    text: "Details",
                    handler: function () {
                        // console.log('Cancel clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__orderdetails_orderdetails__["a" /* OrderdetailsPage */], {
                            data: stock
                        });
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        addBuySellAlert.present();
    };
    StocksPage.prototype.loginNav = function () {
        var _this = this;
        this.userEmail = {
            email: localStorage.getItem('User')
        };
        this.authServ.updateUserStatusByEmail(this.userEmail)
            .then(function (data) {
            console.log(data);
            localStorage.removeItem('User');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    StocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stocks',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/stocks/stocks.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n    <table class="stock-tbl">\n        <tr>\n            <th>Item</th>\n            <th>Price</th>\n            <th>Variation</th>\n          </tr>\n    </table>\n</ion-header>\n\n\n<ion-content class="stocks-cntr">\n  <ion-list>\n    <ion-item>\n      <table class="stock-tbl">\n        <tbody>\n        <tr *ngFor="let stock of allStocks">\n          <td (click)="openBuySell(stock)">{{stock.stock_name}}</td>\n          <td (click)="openBuySell(stock)">{{stock.stock_price}}</td>\n          <td style="color: green">{{stock.variationAmount?stock.variationAmount:\'0.00\'}} / {{stock.variationPercent?stock.variationPercent:\'0.00\'}} %</td>\n        </tr>\n      </tbody>\n      </table>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/stocks/stocks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], StocksPage);
    return StocksPage;
}());

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_stocks__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ads_ads__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_survey__ = __webpack_require__(58);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__stocks_stocks__["a" /* StocksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__ads_ads__["a" /* AdsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__survey_survey__["a" /* SurveyPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n      \n      <ion-tabs selectedIndex="0" position="top" color="theme-color">\n          <ion-tab [root]="tab1Root" tabTitle="Stocks" tabIcon="stats"></ion-tab>\n          <ion-tab [root]="tab2Root" tabTitle="Ads" tabIcon="videocam"></ion-tab>\n          <ion-tab [root]="tab3Root" tabTitle="Survey" tabIcon="logo-buffer"></ion-tab>\n        </ion-tabs>\n\n  </ion-content>\n  \n  \n  '/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-ads',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/ads/ads.html"*/'<ion-header>\n    <!-- <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\nAds\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/ads/ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(14);
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
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/forgotpassword/forgotpassword.html"*/'\n  <form *ngIf="!email" [formGroup]="forgotGroup" (ngSubmit)="forgotEmail()">\n      <ion-list>\n        <div class="logo">\n        </div>\n        <div *ngIf="notExist" style="color: brown; padding-left:10px;">Invalid Email ID</div>\n    <ion-item>\n      <ion-input type="text" name="email" placeholder="Enter Email ID" formControlName="email" aria-required="true"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="forgotGroup.invalid">Submit</button>\n    </ion-item>\n    </ion-list>\n    </form>\n  \n  <form *ngIf="email && !otpKey" [formGroup]="otpGroup" (ngSubmit)="otpFun()">\n      <ion-list>\n          <div class="logo">\n          </div>\n          <div *ngIf="invalidOTP" style="color: brown; padding-left:10px;">Invalid OTP Key</div>\n    <ion-item>\n      <ion-input type="text" name="otp" placeholder="Enter OTP" formControlName="otp" aria-required="true"></ion-input>\n    </ion-item>\n      \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="otpGroup.invalid">Submit</button>\n    </ion-item>\n  \n    </ion-list>\n  </form>\n  \n  <form *ngIf="otpKey" [formGroup]="passGroup" (ngSubmit)="newPass()">\n      <ion-list>\n          <div class="logo">\n          </div>\n    <ion-item>\n      <ion-input type="password" name="newpassword" placeholder="New Password" formControlName="newpassword" aria-required="true"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n        <ion-input type="password" name="confirmpassword" placeholder="Confirm Password" formControlName="confirmpassword" aria-required="true"></ion-input>\n      </ion-item>\n      <div style="color: brown; padding-left:10px;" *ngIf="confirmpassword">Incorrect Confirm Password</div>\n      \n    <ion-item>\n        <button class="submit-btn" ion-button block padding type="Submit" [disabled]="passGroup.invalid">Submit</button>\n    </ion-item>\n  \n    </ion-list>\n  </form>\n\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stocks_stocks__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var percentageValue = 1;
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, fb, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.authServ = authServ;
        this.ProductPercentage = 20;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
        this.type = this.navParams.get('type');
        this.stockData = this.navParams.get('data');
        console.log(localStorage.getItem('User'));
        this.userEmail = {
            email: localStorage.getItem('User')
        };
    };
    OrderPage.prototype.onChange = function () {
        console.log('Calling');
        this.stockQuantity = '';
        this.expextedPrice = '';
    };
    OrderPage.prototype.GetPercentage = function () {
        var _this = this;
        if (this.stockQuantity) {
            var percent = (Number(this.stockQuantity) * percentageValue) / 100;
            if (this.type == 'Buy') {
                this.somePrice = Number(this.stockData.stock_price) + Number(percent);
            }
            else {
                this.somePrice = Number(this.stockData.stock_price) - Number(percent);
            }
            this.variationPercent = Number(Number(this.stockQuantity) * percentageValue);
            console.log(this.variationPercent);
            this.variationAmount = (Number(Number(this.somePrice) * this.variationPercent) / 100);
            console.log(this.variationAmount);
            if (this.type == 'Buy') {
                this.stockData.variationPercent = Number(Number(this.stockData.variationPercent) + Number(this.variationPercent));
                console.log(this.stockData.variationPercent);
                this.stockData.variationAmount = Number(Number(this.stockData.variationAmount) + Number(this.variationAmount));
                this.dynamicPrice = Number(this.stockData.stock_price) + Number(this.variationAmount);
            }
            else {
                this.stockData.variationPercent = Number(Number(this.stockData.variationPercent) - Number(this.variationPercent));
                this.stockData.variationAmount = Number(Number(this.stockData.variationAmount) - Number(this.variationAmount));
                this.dynamicPrice = Number(this.stockData.stock_price) - Number(this.variationAmount);
            }
            this.authServ.getUserDataByEmail(this.userEmail)
                .then(function (data) {
                _this.currentUser = data.results[0];
            })
                .catch(function (error) {
                console.log(error);
            });
            console.log(this.stockData);
        }
    };
    OrderPage.prototype.placeOrder = function () {
        var _this = this;
        this.ePrice = Number(this.expextedPrice);
        if (this.ePrice) {
            this.actualAmount = Number(Number(this.ePrice) * Number(this.stockQuantity));
            if (this.actualAmount <= this.currentUser.balance) {
                if (this.ePrice >= this.stockData.stock_price) {
                    this.status = 'Executed';
                }
                else {
                    this.status = 'Pending';
                }
                if (this.type == 'Buy' && this.status == 'Executed') {
                    this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.ePrice));
                    this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) - Number(this.stockQuantity));
                    this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
                }
                else if (this.type == 'Sell' && this.status == 'Executed') {
                    this.currentUser.balance = Number(Number(this.currentUser.balance) + Number(this.ePrice));
                    this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) + Number(this.stockQuantity));
                    this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
                }
                console.log(this.currentUser);
                this.orderData = {
                    userID: this.currentUser.id.toString(),
                    name: this.stockData.stock_name,
                    quantity: this.stockQuantity,
                    price: this.ePrice,
                    type: this.type,
                    status: this.status
                };
                this.authServ.addOrder(this.orderData)
                    .then(function (data) {
                    console.log('Current Balance', _this.currentUser);
                    if (_this.orderData.status == 'Executed') {
                        _this.authServ.updateUserByID(_this.currentUser)
                            .then(function (data) {
                            console.log(data);
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                    }
                    if (_this.orderData.status == 'Executed') {
                        _this.stockData.stock_price = _this.dynamicPrice.toFixed(2);
                        _this.stockData.variationPercent = _this.variationPercent.toFixed(2);
                        _this.stockData.variationAmount = _this.variationAmount.toFixed(2);
                        console.log('stock Data', _this.stockData);
                        _this.authServ.updateStockByID(_this.stockData)
                            .then(function (data) {
                            console.log("Updated");
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                    window.alert('Order Successfully Added');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__stocks_stocks__["a" /* StocksPage */]);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
            else {
                window.alert('You dont have sufficient balance');
                this.stockQuantity = '';
            }
        }
        else {
            this.actualAmount = Number(Number(this.stockData.stock_price) * Number(this.stockQuantity));
            if (this.actualAmount <= this.currentUser.balance) {
                this.ePrice = this.stockData.stock_price;
                this.status = 'Executed';
                if (this.type == 'Buy' && this.status == 'Executed') {
                    this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.ePrice));
                    this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) - Number(this.stockQuantity));
                    this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
                }
                else if (this.type == 'Sell' && this.status == 'Executed') {
                    this.currentUser.balance = Number(Number(this.currentUser.balance) + Number(this.ePrice));
                    this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) + Number(this.stockQuantity));
                    this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
                }
                this.orderData = {
                    userID: this.currentUser.id.toString(),
                    name: this.stockData.stock_name,
                    quantity: this.stockQuantity,
                    price: this.ePrice,
                    type: this.type,
                    status: this.status
                };
                this.authServ.addOrder(this.orderData)
                    .then(function (data) {
                    console.log('Current Balance', _this.currentUser);
                    if (_this.orderData.status == 'Executed') {
                        _this.authServ.updateUserByID(_this.currentUser)
                            .then(function (data) {
                            console.log(data);
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                    }
                    if (_this.orderData.status == 'Executed') {
                        _this.stockData.stock_price = _this.dynamicPrice.toFixed(2);
                        _this.stockData.variationPercent = _this.variationPercent.toFixed(2);
                        _this.stockData.variationAmount = _this.variationAmount.toFixed(2);
                        _this.authServ.updateStockByID(_this.stockData)
                            .then(function (data) {
                            console.log("Updated");
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                    window.alert('Order Successfully Added');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__stocks_stocks__["a" /* StocksPage */]);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
            else {
                window.alert('You dont have sufficient balance');
                this.stockQuantity = '';
            }
        }
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/order/order.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">ORDER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n</ion-header>\n\n\n<div style="padding-top: 60px;">\n  <ion-item class="title-btn">\n      <label>{{stockData?.stock_name}}</label>\n      <label>Available : {{stockData?.stock_quantity}}</label>\n  </ion-item>\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label style="font-size: 50px;">{{stockData?.stock_price}}</label>\n        </ion-col>\n        <ion-col>\n          <ion-row><ion-col><label>+ {{stockData?.variationAmount | currency: \'Rs. \'}}</label></ion-col></ion-row>\n          <ion-row><ion-col><label>+ {{stockData?.variationPercent}} %</label></ion-col></ion-row>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <!-- <ion-item style="color: #fff; background-color: #290435!important; padding: 0px!important;text-align: center;margin-top: 5px;">\n    <label>Trade</label>\n  </ion-item> -->\n  <form name="myForm" #myForm="ngForm" class="order-form">\n      <h1 class="page-title">Trade</h1>\n    <ion-list>\n      <ion-item>\n        <ion-select placeholder="--Select--" name="type" (change)="onChange()" [(ngModel)]="type">\n          <ion-option value="Buy">Buy</ion-option>\n          <ion-option value="Sell">Sell</ion-option>\n        </ion-select>\n        <ion-input type="text" end placeholder="Qty" name="quantity" (blur)="GetPercentage()" [(ngModel)]="stockQuantity"></ion-input>\n      </ion-item>\n       <ion-item>\n          <ion-input type="text" placeholder="Price(0.00 Market Price)" name="price" [(ngModel)]="expextedPrice"></ion-input>\n        </ion-item>\n        <ion-item>\n            <button class="reset-btn btn" ion-button item-start>Reset</button>\n            <button class="order-btn btn" ion-button item-end (click)="placeOrder()">Place Order</button>\n          </ion-item>\n    </ion-list>\n  </form>\n \n</div>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(14);
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
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdetailsPage = /** @class */ (function () {
    function OrderdetailsPage(navCtrl, navParams, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    OrderdetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderdetailsPage');
        this.stockData = this.navParams.get('data');
        this.authServ.getOrderByName(this.stockData)
            .then(function (data) {
            var val = data.results.map(function (data) {
                return data.price;
            });
            var array = val;
            var largest = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] > largest) {
                    largest = array[i];
                }
            }
            if (_this.stockData.stock_price > _this.heighestPrice) {
                _this.heighestPrice = _this.stockData.stock_price;
            }
            else {
                _this.heighestPrice = largest;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    OrderdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderdetails',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/orderdetails/orderdetails.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">ORDER DETAILS</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n</ion-header>\n\n\n<div style="padding-top: 60px;">\n  <ion-item class="title-btn">\n      <label style="font-size: 30px;">{{stockData?.stock_name}}</label>\n  </ion-item>\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label style="font-size: 50px;">{{stockData?.stock_price}}</label>\n        </ion-col>\n        <ion-col>\n          <ion-row><ion-col><label>{{stockData?.variationAmount}}</label></ion-col></ion-row>\n          <ion-row><ion-col><label>{{stockData?.variationPercent}}%</label></ion-col></ion-row>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <!-- <ion-item style="color: #fff; background-color: #290435!important; padding: 0px!important;text-align: center;margin-top: 5px;">\n    <label>Trade</label>\n  </ion-item> -->\n  <form class="order-form">\n      <h1 class="page-title">Overview</h1>\n    <ion-list>\n      <ion-item>\n        <label class="lbl">Open</label>  \n        <label class="amt">{{stockData?.stock_price}}</label>\n      </ion-item>\n      <ion-item>\n        <label class="lbl">High</label>  \n        <label class="amt">{{heighestPrice}}</label>\n      </ion-item>\n      <ion-item>\n        <label class="lbl">Traded Qty</label>  \n        <label class="amt">{{stockData?.tradedquantity}}</label>\n      </ion-item>\n    </ion-list>\n  </form>\n \n</div>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/orderdetails/orderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-survey',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/survey/survey.html"*/'<ion-header>\n    <!-- <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">OSHER</ion-title>\n      \n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\nSurvey\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/survey/survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(111);
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
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, navParams, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    MyaccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyaccountPage');
        this.userEmail = {
            email: localStorage.getItem('User')
        };
        this.authServ.getUserDataByEmail(this.userEmail)
            .then(function (data) {
            _this.currentUser = data.results[0];
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MyaccountPage.prototype.uploadImage = function (files) {
        var _this = this;
        if (files.length) {
            console.log(files);
            var file = files[0];
            console.log(file.name);
            this.fileName = file.name;
            // this.fileSize = (file.size / (1024 * 1024)).toFixed(2);
            // this.fileType = file.type;
            var fd = new FormData();
            fd.append('file', file);
            this.authServ.uploadImage(fd, this.currentUser.id)
                .then(function (data) {
                console.log(data);
                _this.fileName = data.fileName;
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    MyaccountPage.prototype.update = function () {
        var _this = this;
        this.currentUser.image = this.fileName;
        console.log(this.currentUser);
        this.authServ.updateUserByID(this.currentUser)
            .then(function (data) {
            console.log(data);
            _this.ionViewDidLoad();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyaccountPage.prototype.editPassword = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__["a" /* ChangepasswordPage */], {
            password: this.currentUser
        });
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myaccount',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/myaccount/myaccount.html"*/'<ion-header>\n  <ion-navbar color="theme-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-icon class="osher-icon" clear></ion-icon>\n    <ion-title class="osher-txt">MY ACCOUNT</ion-title>\n    <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: #151318;">\n  <div class="user-img">\n    <div>\n    <img width="100" height="100" src="../../assets/imgs/{{currentUser?.image}}">\n    <input style="margin-left: 100px" type="file" (blur)="uploadImage($event.target.files)" accept="image/x-png,image/jpeg">\n    <button ion-button (click)="update()">Update</button>\n  </div>\n    <p class="user-name">{{currentUser?.name}}</p>\n    <p class="user-email">{{currentUser?.email}}</p>\n  </div>\n  <ion-list>\n    <ion-item class="profile-bg">\n        <ion-label start>Password:</ion-label>\n        <ion-label start>******** <span style="float: right;"><ion-icon name="md-create" (click)="editPassword()"></ion-icon></span></ion-label>\n      </ion-item>\n    <ion-item class="profile-bg">\n      <ion-label start>Mobile:</ion-label>\n      <ion-label end>{{currentUser?.phone}}</ion-label>\n    </ion-item>\n    <ion-item class="profile-bg">\n      <ion-label start>Country:</ion-label>\n      <ion-label end>{{currentUser?.country}}</ion-label>\n    </ion-item>\n    <ion-item class="profile-bg">\n      <ion-label start>State:</ion-label>\n      <ion-label end>{{currentUser?.state}}</ion-label>\n    </ion-item>\n    <ion-item class="profile-bg">\n      <ion-label start>City:</ion-label>\n      <ion-label end>{{currentUser?.city}}</ion-label>\n    </ion-item>\n    <ion-item class="profile-bg">\n      <ion-label start>Profession:</ion-label>\n      <ion-label end>{{currentUser?.profession}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/myaccount/myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(14);
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
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MywalletPage = /** @class */ (function () {
    function MywalletPage(navCtrl, navParams, alertController, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.authServ = authServ;
    }
    MywalletPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MywalletPage');
        this.userEmail = {
            email: localStorage.getItem('User')
        };
        this.authServ.getUserDataByEmail(this.userEmail)
            .then(function (data) {
            _this.currentUser = data.results[0];
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
        this.authServ.orderHistory()
            .then(function (data) {
            _this.orderDatas = data.results.reverse();
            console.log(_this.orderDatas);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.authServ.getWalletDetails()
            .then(function (data) {
            _this.walletDatas = data.results.reverse();
            console.log(_this.walletDatas);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MywalletPage.prototype.addMoney = function () {
        var _this = this;
        var addMoney = this.alertController.create({
            title: "Enter Code",
            message: "",
            inputs: [
                {
                    name: 'Coupon',
                    placeholder: 'Enter Coupon Code'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        // console.log(data.Coupon)
                        _this.currentUser.couponcode = data.Coupon;
                        _this.authServ.getCouponCode(_this.currentUser)
                            .then(function (data) {
                            console.log(data);
                            if (data.results.length) {
                                if (data.results[0].status == 1) {
                                    _this.currentUser.balance = Number(Number(_this.currentUser.balance) + Number(data.results[0].couponamount));
                                    _this.authServ.updateUserByID(_this.currentUser)
                                        .then(function (value) {
                                        console.log(value);
                                        window.alert('Amount Added Successfully');
                                        _this.wallet = {
                                            creditedMoney: data.results[0].couponamount,
                                            couponcode: data.results[0].couponcode
                                        };
                                        _this.authServ.addWallet(_this.wallet)
                                            .then(function (data) {
                                            console.log(data);
                                        })
                                            .catch(function (err) {
                                            console.log(err);
                                        });
                                    })
                                        .catch(function (err) {
                                        console.log(err);
                                    });
                                }
                                else {
                                    window.alert('Coupon Code Expires');
                                }
                            }
                            else {
                                window.alert('Invalid Coupon Code');
                            }
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                    }
                }
            ],
        });
        addMoney.present();
    };
    MywalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mywallet',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/mywallet/mywallet.html"*/'<ion-header>\n    <ion-navbar color="theme-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-icon class="osher-icon" clear></ion-icon>\n      <ion-title class="osher-txt">MY Wallet</ion-title>\n      <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <div class="user-img">\n      <img src="../../assets/imgs/wallet-purple.png">\n      <p class="your-blnc">Your Current Balance is</p>\n      <div class="points"><span><ion-icon name="ios-disc" class="coins"></ion-icon></span> {{currentUser?.balance | currency: \'Rs. \'}}</div>\n      <button ion-button class="submit-btn" (click)="addMoney();">Add Money</button>\n    </div>\n    <div class="trnct">\n      <div class="p-title">Recent Activity</div>\n      <ion-card *ngFor="let wallet of walletDatas">\n          <ion-card-header>\n            <p class="trnct-date">{{wallet.created_AT | date:\'dd MMM, yyyy\'}}</p>\n            <span style="font-weight: bold;"><span *ngIf="wallet.creditedMoney">Amount Credited</span> <span *ngIf="wallet.debitedAmount">Transfered Amount</span> </span>\n            <span class="trnct-amount"><span *ngIf="wallet.creditedMoney">Rs.{{wallet.creditedMoney}}</span><span *ngIf="wallet.debitedAmount">-Rs.{{wallet.debitedAmount}}</span></span>\n          </ion-card-header>\n          <ion-card-content>\n            <p style="margin-top: -10px;">{{wallet.couponcode}}</p>\n          </ion-card-content>\n        </ion-card>\n      <ion-card *ngFor="let order of orderDatas">\n          <ion-card-header>\n            <p class="trnct-date">{{order.created_AT | date:\'dd MMM, yyyy\'}}</p>\n            <span style="font-weight: bold;">{{order.name}} - {{order.type}} </span>\n            <span class="trnct-amount"><span *ngIf="order.type == \'Buy\'">-</span>Rs.{{order.price}}</span>\n          </ion-card-header>\n          <ion-card-content>\n            <p style="margin-top: -10px;">TRN No: OSH00878</p>\n          </ion-card-content>\n        </ion-card>\n<!-- \n        <ion-card>\n            <ion-card-header>\n              <p class="trnct-date">28-07-2018</p>\n              <span style="font-weight: bold;">Buy Axis Bank</span>\n              <span class="trnct-amount">Rs.280</span>\n            </ion-card-header>\n            <ion-card-content>\n              <p style="margin-top: -10px;">TRN No: OSH00878</p>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header>\n                <p class="trnct-date">28-07-2018</p>\n                <span style="font-weight: bold;">Buy Axis Bank</span>\n                <span class="trnct-amount">Rs.280</span>\n              </ion-card-header>\n              <ion-card-content>\n                <p style="margin-top: -10px;">TRN No: OSH00878</p>\n              </ion-card-content>\n            </ion-card> -->\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/mywallet/mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderhistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(14);
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
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderhistoryPage = /** @class */ (function () {
    function OrderhistoryPage(navCtrl, navParams, authServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServ = authServ;
    }
    OrderhistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderhistoryPage');
        this.authServ.orderHistory()
            .then(function (data) {
            _this.orderDatas = data.results;
            console.log(_this.orderDatas);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    OrderhistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderhistory',template:/*ion-inline-start:"/home/hari/codings/osher/osherApplication/src/pages/orderhistory/orderhistory.html"*/'<ion-header>\n  <ion-navbar color="theme-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-icon class="osher-icon" clear></ion-icon>\n    <ion-title class="osher-txt">ORDER HISTORY</ion-title>\n    \n    <ion-icon name="contact" class="profile-btn" (click)="loginNav();"></ion-icon>\n  </ion-navbar>\n  <table class="stock-tbl">\n    <tr>\n      <th>Script No.</th>\n      <th>Status</th>\n      <th>Buy/Sell</th>\n      <th>Order Qty</th>\n      <th>Order Price</th>\n    </tr>\n    <tr>\n      <th>Order ID</th>\n      <th></th>\n      <th></th>\n      <th>EXE Qty</th>\n      <th>EXE Price</th>\n    </tr>\n</table>\n</ion-header>\n\n<ion-content >\n  <table class="stock-tbl tbl-txt">\n    <tr *ngFor="let order of orderDatas">\n      <td><div>{{order.name}}</div><div class="sub-row">CD00989</div></td>\n      <td><div>{{order.status}}</div><div class="sub-row"></div></td>\n      <td><div *ngIf="order.type == \'Buy\'" class="buy">{{order.type}}</div><div *ngIf="order.type == \'Sell\'" class="sell">{{order.type}}</div><div class="sub-row"></div></td>\n      <td><div>{{order.quantity}}</div><div class="sub-row">0</div></td>\n      <td><div>{{order.price}}</div><div class="sub-row">550.08</div></td>\n    </tr>\n    <!-- <tr>\n      <td><div>SBI Bank</div><div class="sub-row">CD00989</div></td>\n      <td><div>Fully Executed</div><div class="sub-row"></div></td>\n      <td><div class="sell">Sell</div><div class="sub-row"></div></td>\n      <td><div>10</div><div class="sub-row">10</div></td>\n      <td><div>550.08</div><div class="sub-row">550.08</div></td>\n    </tr>\n    <tr>\n      <td><div>Axis Bank</div><div class="sub-row">CD00989</div></td>\n      <td><div>Partial Executed</div><div class="sub-row"></div></td>\n      <td><div class="buy">Buy</div><div class="sub-row"></div></td>\n      <td><div>10</div><div class="sub-row">3</div></td>\n      <td><div>550.08</div><div class="sub-row">548.08</div></td>\n    </tr> -->\n    <!-- <tr class="sub-tr">\n      <td>CD8890</td>\n      <td></td>\n      <td></td>\n      <td>0</td>\n      <td>550.08</td>\n    </tr> -->\n  </table>\n</ion-content>'/*ion-inline-end:"/home/hari/codings/osher/osherApplication/src/pages/orderhistory/orderhistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], OrderhistoryPage);
    return OrderhistoryPage;
}());

//# sourceMappingURL=orderhistory.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map