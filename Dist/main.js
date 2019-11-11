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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/general/status/status.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/_components/general/status/status.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.status {\n    color:white;\n    line-height: 14px;\n    font-size: 14px;\n    width: 30%;\n    height: 12px;\n    padding: 10px;\n    margin: 8px auto;\n    opacity: .4;\n    border-radius: 3px;\n}\n\n.alert-success {\n    background-color: #28a745;\n}\n\n.alert-danger {\n    background-color: #dc3545;\n}\n\n.alert-info {\n    background-color: #17a2b8;\n}\n\n.alert-warning {\n    background-color: #ffc107;\n}\n\n.alert-primary {\n    background-color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnN0YXR1cyB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbn1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbi5hbGVydC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/general/status/status.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/general/status/status.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div *ngFor= \"let alert of alerts\" class=\"{{cssClass(alert)}} alert-dismissable status\">\n    {{alert.message}}\n</div>\n</div>"

/***/ }),

/***/ "./src/app/_components/general/status/status.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/general/status/status.component.ts ***!
  \****************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var StatusComponent = /** @class */ (function () {
    function StatusComponent(alertService) {
        this.alertService = alertService;
        this.status = {
            level: "primary",
            message: "All Okay"
        };
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            _this.alerts.push(alert);
        });
    };
    StatusComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    StatusComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        switch (alert.type) {
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success: return 'alert alert-success';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error: return 'alert alert-danger';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info: return 'alert alert-info';
            case _models_alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning: return 'alert alert-warning';
        }
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/_components/general/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/_components/general/status/status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/admin/admin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_components/profile/admin/admin.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/profile/admin/admin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/profile/admin/admin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/profile/admin/admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/profile/admin/admin.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/_components/profile/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/_components/profile/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/change-password/change-password.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/_components/profile/change-password/change-password.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-user {\n    width: 600px;\n    max-width: 800px;\n    width: 100%;\n    margin: auto;\n}\n\n.fields {\n    width: 100%;\n}\n\n.list-user {\n    width: 600px;\n    margin:0 auto;\n    \n}\n\n.top-header {\n    margin-top : 80px;\n    margin-bottom: 60px;\n}\n\n.inline-buttons {\n\n    display : inline;\n    margin : 8px;\n}\n\n.ro-text {\n    color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9wcm9maWxlL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtdXNlciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxpc3QtdXNlciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgXG59XG5cbi50b3AtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wIDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uaW5saW5lLWJ1dHRvbnMge1xuXG4gICAgZGlzcGxheSA6IGlubGluZTtcbiAgICBtYXJnaW4gOiA4cHg7XG59XG5cbi5yby10ZXh0IHtcbiAgICBjb2xvcjogYnJvd247XG59Il19 */"

/***/ }),

/***/ "./src/app/_components/profile/change-password/change-password.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/_components/profile/change-password/change-password.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form  [formGroup]= \"form\" (ngSubmit)=\"onSubmit()\" class=\"create-user\">\n    <div>\n          <h1 class=\"top-header\"> Update Password</h1>\n          <div>\n              <mat-form-field class=\"fields\">\n                <input matInput class=\"ro-text\" id=\"name\" type=\"text\" placeholder=\"Name\"\n                  formControlName=\"name\">\n              </mat-form-field>\n            </div>\n      <div>\n        <mat-form-field class=\"fields\">\n          <input matInput class=\"ro-text\" id=\"oldpassword\" type=\"password\" placeholder=\" Old Password\"\n            formControlName=\"oldpassword\">\n          <mat-error *ngIf=\"f.oldpassword.errors?.required && (f.oldpassword.dirty || f.oldpassword.invalid)\">Old Password\n            is Required</mat-error>\n          <mat-error *ngIf=\"f.oldpassword.errors?.minlength && (f.oldpassword.dirty || f.oldpassword.invalid)\">Password\n            must be a minimum 5 characters</mat-error>\n  \n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field class=\"fields\">\n          <input matInput class=\"ro-text\" id=\"password\" type=\"password\" placeholder=\"Password\"\n           formControlName=\"password\">\n          <mat-error *ngIf=\"f.password.errors?.required && (f.password.dirty || f.password.invalid)\">A Password is\n            Required</mat-error>\n          <mat-error *ngIf=\"f.password.errors?.minlength && (f.password.dirty || f.password.invalid)\">Password must be a\n            minimum 5 characters</mat-error>\n  \n        </mat-form-field>\n      </div>\n  \n      <div>\n        <mat-form-field class=\"fields\">\n          <input matInput class=\"ro-text\" id=\"confirm-password\" type=\"password\" placeholder=\"Confirm Password\"\n            formControlName=\"confirmpassword\">\n          <mat-error\n            *ngIf=\"f.confirmpassword.errors?.confirmpassword && (f.confirmpassword.dirty || f.confirmpassword.invalid)\">\n            Password must match!</mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <button  id=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\" >Submit</button>\n    <button (click)=\"cancelUpdate()\" class=\"inline-buttons\" mat-raised-button color=\"primary\" >Cancel</button>\n  </form>"

/***/ }),

/***/ "./src/app/_components/profile/change-password/change-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/profile/change-password/change-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators/password-validator */ "./src/app/validators/password-validator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(signup, router, alert) {
        this.signup = signup;
        this.router = router;
        this.alert = alert;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: true }),
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        }, { validators: _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["MatchPassword"].match });
        this.signup.getProfile()
            .subscribe(function (profile) {
            if (profile) {
                _this.form.patchValue({ 'name': profile.name });
                _this.user = profile;
                _this.id = profile._id;
            }
        }, function (error) {
            _this.alert.error(error.error);
            setTimeout(function () {
                _this.router.navigate(['login']);
            }, 2000);
        });
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () { };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ChangePasswordComponent.prototype, "p", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = {
            oldpassword: this.form.value.oldpassword,
            password: this.form.value.password,
            name: this.user.name,
            email: this.user.email
        };
        this.signup.updateProfile(this.id, post)
            .subscribe(function (response) {
            _this.alert.success("Request Sent Successfully");
            // update the user object.
            setTimeout(function () {
                _this.router.navigate(['profile']);
            }, 2000);
        }, function (error) {
            _this.alert.error(error.error.message);
        });
    };
    ChangePasswordComponent.prototype.cancelUpdate = function () {
        this.alert.clear();
        this.router.navigate(['profile']);
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/_components/profile/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/_components/profile/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/create-profile/create-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/_components/profile/create-profile/create-profile.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-user {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    margin-top: 50px;\n    width: 50%;\n\n}\n\n.create-user > * {\n    width: 100%;\n}\n\n#submit-button {\n    width:30%;\n    margin: auto;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9wcm9maWxlL2NyZWF0ZS1wcm9maWxlL2NyZWF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXVzZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogNTAlO1xuXG59XG5cbi5jcmVhdGUtdXNlciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuI3N1Ym1pdC1idXR0b24ge1xuICAgIHdpZHRoOjMwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/_components/profile/create-profile/create-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/profile/create-profile/create-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form  [formGroup]= \"form\" (ngSubmit)=\"onSubmit()\" class=\"create-user\">\n  <h1>Create Profile</h1>\n  <div>\n  </div>\n    <mat-form-field >\n    <input matInput\n           id=\"name\"\n           type=\"text\"\n           placeholder=\"Name\" required\n           formControlName=\"name\">\n    <mat-error *ngIf=\"f.name.errors?.required && (f.name.dirty || f.name.invalid)\">A Name is Required</mat-error>\n    <mat-error *ngIf=\"f.name.errors?.minlength && (f.name.dirty || f.name.invalid)\">Name must be 5 characters</mat-error> \n    <mat-error *ngIf=\"f.name.errors?.maxlength && (f.name.dirty || f.name.invalid)\">Name must not exceed 15 characters</mat-error> \n    </mat-form-field>\n  <mat-form-field>\n    <input matInput \n          id=\"email\"\n          type=\"text\" placeholder=\"E-Mail\"\n          formControlName=\"email\">\n          <mat-error *ngIf=\"f.email.errors?.required && (f.email.dirty || f.email.invalid)\">An Email address is Required</mat-error>\n          <mat-error *ngIf=\"f.email.errors?.email && (f.email.dirty || f.email.invalid)\">Name must be valid e-mail address</mat-error> \n         \n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput \n          id=\"password\"\n          type=\"password\" placeholder=\"Password\" \n          formControlName=\"password\">\n          <mat-error *ngIf=\"f.password.errors?.required && (f.password.dirty || f.password.invalid)\">A Password is Required</mat-error>\n          <mat-error *ngIf=\"f.password.errors?.minlength && (f.password.dirty || f.password.invalid)\">Password must be a minimum 5 characters</mat-error> \n         \n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput \n           id=\"confirm-password\"\n           type=\"password\" placeholder=\"Confirm Password\" \n           formControlName=\"confirmpassword\">\n           <mat-error *ngIf=\"f.confirmpassword.errors?.confirmpassword && (f.confirmpassword.dirty || f.confirmpassword.invalid)\">Password must match!</mat-error>\n  </mat-form-field>\n  <button id=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\" >Submit</button>\n\n \n</form>\n\n"

/***/ }),

/***/ "./src/app/_components/profile/create-profile/create-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_components/profile/create-profile/create-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function() { return CreateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators/password-validator */ "./src/app/validators/password-validator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CreateProfileComponent = /** @class */ (function () {
    //statusMessage = null;
    function CreateProfileComponent(signup, router, alert) {
        this.signup = signup;
        this.router = router;
        this.alert = alert;
    }
    CreateProfileComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        }, { validators: _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["MatchPassword"].match });
    };
    Object.defineProperty(CreateProfileComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CreateProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = {
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.password,
            isadmin: "false"
        };
        this.signup.signup(post)
            .subscribe(function (response) {
            _this.alert.success("Request Sent Successfully");
            setTimeout(function () {
                _this.router.navigate(['validateuser']);
            }, 3000);
        }, function (error) {
            if (error.status === 409) {
                _this.alert.error(error.error);
            }
        });
    };
    CreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(/*! ./create-profile.component.html */ "./src/app/_components/profile/create-profile/create-profile.component.html"),
            styles: [__webpack_require__(/*! ./create-profile.component.css */ "./src/app/_components/profile/create-profile/create-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/home/home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/profile/home/home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/profile/home/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/profile/home/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/profile/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/profile/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_components/profile/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/_components/profile/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_components/profile/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/profile/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/profile/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]= \"form\" (ngSubmit)=\"onSubmit()\" class=\"create-user\">\n \n    <div>\n    </div>\n    <h2>Login</h2>\n      <mat-form-field >\n      <input matInput\n             id=\"email\"\n             type=\"text\"\n             placeholder=\"Email Adress\" required\n             formControlName=\"email\">\n      <mat-error *ngIf=\"f.email.errors?.required && (f.email.dirty || f.email.invalid)\">Please enter your email address</mat-error>\n  \n      </mat-form-field>\n      <div>\n      <mat-form-field >\n          <input matInput\n                 id=\"password\"\n                 type=\"password\"\n                 placeholder=\"Password\" required\n                 formControlName=\"password\">\n          <mat-error *ngIf=\"f.password.errors?.required && (f.email.dirty || f.email.invalid)\">Please enter your email address</mat-error>\n      \n          </mat-form-field>\n        </div>\n  <div>\n  <button id=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\" >Submit</button>\n  </div>\n    </form>"

/***/ }),

/***/ "./src/app/_components/profile/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/profile/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");






var LoginComponent = /** @class */ (function () {
    //statusMessage = null;
    function LoginComponent(signup, router, alert) {
        this.signup = signup;
        this.router = router;
        this.alert = alert;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.signup.signin(post)
            .subscribe(function (response) {
            if (response.token && response) {
                _this.alert.success("Successfully Logged in!");
                localStorage.setItem('token', response.token);
            }
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 3000);
        }, function (error) {
            _this.alert.error(error.error.message);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/_components/profile/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_components/profile/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/newuser/newuser.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/profile/newuser/newuser.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvbmV3dXNlci9uZXd1c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/profile/newuser/newuser.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/profile/newuser/newuser.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]= \"form\" (ngSubmit)=\"onSubmit()\" class=\"create-user\">\n \n  <div>\n  </div>\n  <h2>Enter your Confirmation code you received in your Email Account:</h2>\n    <mat-form-field >\n    <input matInput\n           id=\"confirmid\"\n           type=\"text\"\n           placeholder=\"Confirmation ID:\" required\n           formControlName=\"confirmid\">\n    <mat-error *ngIf=\"f.confirmid.errors?.required && (f.confirmid.dirty || f.confirmid.invalid)\">Please enter your confirmation Code:</mat-error>\n\n    </mat-form-field>\n<div>\n<button id=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\" >Submit</button>\n</div>\n  </form>"

/***/ }),

/***/ "./src/app/_components/profile/newuser/newuser.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/profile/newuser/newuser.component.ts ***!
  \******************************************************************/
/*! exports provided: NewuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewuserComponent", function() { return NewuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");






var NewuserComponent = /** @class */ (function () {
    //statusMessage = null;
    function NewuserComponent(signup, router, alert) {
        this.signup = signup;
        this.router = router;
        this.alert = alert;
    }
    NewuserComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            confirmid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    Object.defineProperty(NewuserComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NewuserComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = {
            confirmid: this.form.value.confirmid
        };
        this.signup.confirm(post)
            .subscribe(function (response) {
            _this.alert.success("Request Sent Successfully");
            setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (error) {
            console.log(error);
            {
                _this.alert.error(error.error);
            }
        });
    };
    NewuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'newuser',
            template: __webpack_require__(/*! ./newuser.component.html */ "./src/app/_components/profile/newuser/newuser.component.html"),
            styles: [__webpack_require__(/*! ./newuser.component.css */ "./src/app/_components/profile/newuser/newuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], NewuserComponent);
    return NewuserComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/profile/profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/profile/profile/profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-user {\n    width: 600px;\n    max-width: 800px;\n    width: 100%;\n    margin: auto;\n}\n\n.fields {\n    width: 100%;\n}\n\n.list-user {\n    width: 600px;\n    margin:0 auto;\n    \n}\n\n.top-header {\n    margin-top : 30px;\n    margin-bottom: 30px;\n}\n\n.inline-buttons {\n\n    display : inline;\n    margin : 8px;\n}\n\n.ro-text {\n    color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXVzZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5saXN0LXVzZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIFxufVxuXG4udG9wLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcCA6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmlubGluZS1idXR0b25zIHtcblxuICAgIGRpc3BsYXkgOiBpbmxpbmU7XG4gICAgbWFyZ2luIDogOHB4O1xufVxuXG4ucm8tdGV4dCB7XG4gICAgY29sb3I6IGJyb3duO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/profile/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/profile/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form  [formGroup]= \"form\" (ngSubmit)=\"onSubmit()\" class=\"create-user\">\n        <h1 *ngIf=\"editMode\" class=\"top-header\"> Update Profile</h1>\n        <h1 *ngIf=\"!editMode\" class=\"top-header\"> User Profile</h1>\n        <div>\n\n        </div>\n        <div>\n          <mat-form-field  class=\"fields\" >\n          <input \n                 class=\"ro-text\"\n                 matInput\n                 id=\"name\"\n                 type=\"text\"\n                 formControlName=\"name\"\n                 placeholder=\"Name\">\n          <mat-error *ngIf=\"f.name.errors?.required && (f.name.dirty || f.name.invalid) && editMode\">A Name is Required</mat-error>\n          <mat-error *ngIf=\"f.name.errors?.minlength && (f.name.dirty || f.name.invalid)  && editMode\">Name must be 5 characters</mat-error> \n          <mat-error *ngIf=\"f.name.errors?.maxlength && (f.name.dirty || f.name.invalid)  && editMode\">Name must not exceed 15 characters</mat-error> \n          </mat-form-field>\n        </div>\n        <div>\n        <mat-form-field class=\"fields\">\n          <input matInput \n                class=\"ro-text\"\n                id=\"email\"\n                type=\"text\" \n                formControlName=\"email\"\n                placeholder=\"E-Mail Address\">\n                <mat-error *ngIf=\"f.email.errors?.required && (f.email.dirty || f.email.invalid)\">An Email address is Required</mat-error>\n                <mat-error *ngIf=\"f.email.errors?.email && (f.email.dirty || f.email.invalid)\">Name must be valid e-mail address</mat-error> \n               \n        </mat-form-field>\n      </div>\n\n      <div>\n            <mat-form-field *ngIf=\"editMode\"class=\"fields\">\n              <input matInput \n                     class=\"ro-text\" \n                     id=\"oldpassword\" \n                     type=\"password\" \n                     placeholder=\"Password\"\n                     formControlName=\"oldpassword\">\n             <mat-error *ngIf=\"f.oldpassword.errors?.required && (f.oldpassword.dirty || f.oldpassword.invalid)\">Password\n                is Required</mat-error>\n              <mat-error *ngIf=\"f.oldpassword.errors?.minlength && (f.oldpassword.dirty || f.oldpassword.invalid)\">Password\n                must be a minimum 5 characters</mat-error>\n      \n            </mat-form-field>\n          </div>\n    \n        <button  *ngIf=\"editMode || passwordChange\" id=\"submit-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\" >Submit</button>\n        <button (click)=\"cancelUpdate()\" *ngIf=\"editMode || passwordChange\" class=\"inline-buttons\" mat-raised-button color=\"primary\" >Cancel</button>\n      </form>\n      <div class=\"inline-buttons\" >\n      <button (click)=\"onUpdate()\" *ngIf=\"!editMode && !passwordChange\" class=\"inline-buttons\" mat-raised-button color=\"primary\"  >Update Profile</button>\n    </div>\n    <div class=\"inline-buttons\" >\n        <button (click)=\"onPasswordUpdate()\" *ngIf=\"!editMode && !passwordChange\" class=\"inline-buttons\" mat-raised-button color=\"primary\"  >Update Password</button>\n      </div>\n\n      \n      \n"

/***/ }),

/***/ "./src/app/_components/profile/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/profile/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(signup, router, alert) {
        this.signup = signup;
        this.router = router;
        this.alert = alert;
        // statusMessage = null;
        this.editMode = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]),
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)]),
        });
        this.signup.getProfile()
            .subscribe(function (profile) {
            if (profile) {
                //console.log(profile.name);
                _this.user = profile;
                //  this.user = profile.name;
                //  this.user.email = profile.email;
                //  this.user.password = profile.password;
                _this.form.patchValue({ 'email': profile.email });
                _this.form.patchValue({ 'name': profile.name });
                _this.form.patchValue({ 'password': "*****" });
                _this.form.disable();
                _this.id = profile._id;
            }
            // this.alert.success("Success");
        }, function (error) {
            _this.alert.error(error.error.message);
            setTimeout(function () {
                _this.alert.clear();
                _this.router.navigate(['login']);
            }, 2000);
        });
        // this.form.email.set
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(ProfileComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProfileComponent.prototype, "p", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var post = {
            name: this.form.value.name,
            email: this.form.value.email,
            oldpassword: this.form.value.oldpassword
        };
        this.signup.updateProfile(this.id, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) { return console.log("tapping"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { throw err.error.message; }))
            .subscribe(function (response) {
            _this.alert.success("Request Sent Successfully");
            localStorage.setItem('token', response.token);
            // update the user object.
            setTimeout(function () {
                _this.router.navigate(['profile']);
                _this.form.patchValue({ 'email': response.user.email });
                _this.form.patchValue({ 'name': response.user.name });
                _this.editMode = false;
                _this.form.disable();
                _this.alert.clear();
            }, 2000);
        }, function (err) { return _this.alert.error(err); });
    };
    //     this.signup.updateProfile(this.id, post)
    //     .subscribe(response => {
    //         this.statusMessage = "Request Sent Successfully";
    //         localStorage.setItem('token', response.token);
    //         // update the user object.
    //         setTimeout(() => {
    //             this.router.navigate(['profile']);
    //             this.form.patchValue({'email' : this.user.email});
    //             this.form.patchValue({'name' : this.user.name});
    //             this.editMode = false;
    //             this.form.disable();
    //             this.statusMessage = null;
    //         }, 2000);
    //     },
    //         (error) => {
    //             console.log("This is the error handler" + error.error.message);
    //             { this.statusMessage = error.error.message }
    //         }
    //     );
    // }
    ProfileComponent.prototype.cancelUpdate = function () {
        // this.form = null;
        // this.form = new FormGroup({
        //   email : new FormControl('',[Validators.required, Validators.email]),
        //   name : new FormControl ('',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
        //    });
        this.form.patchValue({ 'email': this.user.email });
        this.form.patchValue({ 'name': this.user.name });
        this.form.patchValue({ 'oldpassword': "*****" });
        this.editMode = false;
        if (this.editMode) {
            this.form.enable();
        }
        else
            (this.form.disable());
        this.alert.clear();
    };
    ProfileComponent.prototype.onUpdate = function () {
        this.editMode = true;
        this.form.patchValue({ 'oldpassword': "" });
        if (this.editMode) {
            this.form.enable();
        }
        else {
            this.form.disable();
        }
        this.alert.clear();
    };
    ProfileComponent.prototype.onPasswordUpdate = function () {
        this.router.navigate(['changepassword']);
        //  // this.editMode = !this.editMode;
        //   this.passwordChange = true;
        //   this.editMode = false;
        //   if(this.passwordChange) {this.form.enable()}
        //   else (this.form.disable())
        //   this.statusMessage = null;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/_components/profile/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/_components/profile/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/_components/profile/reset/reset.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_components/profile/reset/reset.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Byb2ZpbGUvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/profile/reset/reset.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/profile/reset/reset.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/profile/reset/reset.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/profile/reset/reset.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/_components/profile/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/_components/profile/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/admin.guard */ "./src/app/services/admin.guard.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_profile_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/profile/admin/admin.component */ "./src/app/_components/profile/admin/admin.component.ts");
/* harmony import */ var _components_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/profile/change-password/change-password.component */ "./src/app/_components/profile/change-password/change-password.component.ts");
/* harmony import */ var _components_profile_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/profile/newuser/newuser.component */ "./src/app/_components/profile/newuser/newuser.component.ts");
/* harmony import */ var _components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/profile/create-profile/create-profile.component */ "./src/app/_components/profile/create-profile/create-profile.component.ts");
/* harmony import */ var _components_profile_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/profile/login/login.component */ "./src/app/_components/profile/login/login.component.ts");
/* harmony import */ var _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/profile/profile/profile.component */ "./src/app/_components/profile/profile/profile.component.ts");
/* harmony import */ var _components_profile_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/profile/reset/reset.component */ "./src/app/_components/profile/reset/reset.component.ts");
/* harmony import */ var _components_profile_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/profile/home/home.component */ "./src/app/_components/profile/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var routes = [{ path: '', component: _components_profile_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'changepassword', component: _components_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"] },
    { path: 'reset', component: _components_profile_reset_reset_component__WEBPACK_IMPORTED_MODULE_9__["ResetComponent"] },
    { path: 'login', component: _components_profile_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'newuser', component: _components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_6__["CreateProfileComponent"] },
    { path: 'admin', component: _components_profile_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]] },
    { path: 'validateuser/:id', component: _components_profile_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_5__["NewuserComponent"] },
    { path: 'validateuser', component: _components_profile_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_5__["NewuserComponent"] },
    { path: '', redirectTo: '/', pathMatch: 'full' }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.currentuser {\n    font-size: 12px;\n    text-transform: capitalize;\n    margin-right: 10px;\n    margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jdXJyZW50dXNlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <mat-toolbar color=\"primary\">\n    <a routerLink=\"/\"><button color=\"accent\" mat-button md-raised-button>Home</button></a>\n    <a *ngIf=\"!login.isLoggedIn()\" routerLink=\"/login\"><button color=\"accent\" mat-button>Login</button></a>\n    <a *ngIf=\"!login.isLoggedIn()\"routerLink=\"/newuser\"><button color=\"accent\" mat-button>SignUp</button></a>\n    <a *ngIf=\"login.isLoggedIn() && login.CurrentUser.isadmin\"routerLink=\"/admin\"><button color=\"accent\" mat-button>Admin</button></a>\n    <a *ngIf=\"login.isLoggedIn()\" routerLink=\"/profile\"><button color=\"accent\" mat-button>Profile</button></a>\n    <a *ngIf=\"login.isLoggedIn()\" (click)=\"signout()\"><button color=\"accent\" mat-button>Logout</button></a>\n    <span *ngIf=\"login.isLoggedIn()\" class=\"currentuser\">{{login.CurrentUser.name}}</span>\n  </mat-toolbar>\n  <div style=\"height : 40px\">\n  <app-status></app-status>\n</div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(login, alert, router) {
        this.login = login;
        this.alert = alert;
        this.router = router;
        this.title = 'Login Template';
    }
    AppComponent.prototype.signout = function () {
        this.login.signout();
        this.router.navigate(['/']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assets_materialmodules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/materialmodules */ "./src/app/assets/materialmodules.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_profile_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/profile/login/login.component */ "./src/app/_components/profile/login/login.component.ts");
/* harmony import */ var _components_profile_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/profile/home/home.component */ "./src/app/_components/profile/home/home.component.ts");
/* harmony import */ var _components_profile_reset_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/profile/reset/reset.component */ "./src/app/_components/profile/reset/reset.component.ts");
/* harmony import */ var _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/profile/profile/profile.component */ "./src/app/_components/profile/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/profile/create-profile/create-profile.component */ "./src/app/_components/profile/create-profile/create-profile.component.ts");
/* harmony import */ var _components_profile_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/profile/newuser/newuser.component */ "./src/app/_components/profile/newuser/newuser.component.ts");
/* harmony import */ var _components_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/profile/change-password/change-password.component */ "./src/app/_components/profile/change-password/change-password.component.ts");
/* harmony import */ var _components_general_status_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_components/general/status/status.component */ "./src/app/_components/general/status/status.component.ts");
/* harmony import */ var _components_profile_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_components/profile/admin/admin.component */ "./src/app/_components/profile/admin/admin.component.ts");


















//import { AlertService } from './services/alert.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_profile_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_profile_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_profile_reset_reset_component__WEBPACK_IMPORTED_MODULE_10__["ResetComponent"],
                _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_profile_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_13__["CreateProfileComponent"],
                _components_profile_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_14__["NewuserComponent"],
                _components_profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
                _components_general_status_status_component__WEBPACK_IMPORTED_MODULE_16__["StatusComponent"],
                _components_profile_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _assets_materialmodules__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/materialmodules.ts":
/*!*******************************************!*\
  !*** ./src/app/assets/materialmodules.ts ***!
  \*******************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");








var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
// see jason wattmore website on how this is implemented
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/services/admin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");



var AdminGuard = /** @class */ (function () {
    function AdminGuard(login) {
        this.login = login;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        // console.log(this.login.isAdmin());
        return this.login.isAdmin();
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/alert */ "./src/app/models/alert.ts");





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        // clear alert messages on route change unless keepAfterRouteChange is true
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    //only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.clear();
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(login) {
        this.login = login;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.login.isLoggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        // hostserver= "http://"+ environment.backendhost;
        this.hostserver = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendhost + "/api/users";
        this.authserver = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendhost + "/api/auth";
        // hostserver="http://localhost:3000/api/users";
        this.token = localStorage.getItem('token') || " ";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': this.token
            })
        };
    }
    LoginService.prototype.getProfile = function () {
        var myToken = localStorage.getItem('token') || " ";
        var Options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': myToken
            })
        };
        //  return this.http.get<any>(this.hostserver+'/me', Options);
        return this.http.get(this.hostserver + '/me/', Options);
    };
    LoginService.prototype.updateProfile = function (id, input) {
        var myToken = localStorage.getItem('token') || " ";
        var UpdateOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': myToken
            })
        };
        return this.http.put(this.hostserver + '/' + id, input, UpdateOptions);
    };
    LoginService.prototype.updatePassword = function (id, input) {
        var myToken = localStorage.getItem('token') || " ";
        var PasswordOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': myToken
            })
        };
        return this.http.put(this.hostserver + '/' + id, input, PasswordOptions);
    };
    LoginService.prototype.clearProfile = function () {
        this.httpOptions = null;
        return;
    };
    LoginService.prototype.getToken = function () { return this.token; };
    LoginService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (!token)
            return false;
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        var isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    };
    LoginService.prototype.isAdmin = function () {
        var token = localStorage.getItem('token');
        if (!token)
            return false;
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        var decrptedValue = jwtHelper.decodeToken(token);
        var isExpired = jwtHelper.isTokenExpired(token);
        if (decrptedValue.isadmin && !isExpired)
            return true;
        else
            return false;
    };
    Object.defineProperty(LoginService.prototype, "CurrentUser", {
        get: function () {
            var token = localStorage.getItem('token');
            if (!token)
                return null;
            return new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]().decodeToken(token);
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.signin = function (input) {
        return this.http.post(this.authserver, input, this.httpOptions);
    };
    LoginService.prototype.confirm = function (input) {
        var confirmid = input.confirmid;
        return this.http.post(this.hostserver + '/' + confirmid, input, this.httpOptions);
    };
    LoginService.prototype.signup = function (input) {
        return this.http.post(this.hostserver, input, this.httpOptions);
    };
    LoginService.prototype.signout = function () {
        localStorage.removeItem('token');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/validators/password-validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/password-validator.ts ***!
  \**************************************************/
/*! exports provided: MatchPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPassword", function() { return MatchPassword; });
var MatchPassword = /** @class */ (function () {
    function MatchPassword() {
    }
    MatchPassword.match = function (c) {
        if (c.value == null || c.value.length === 0)
            return null;
        if (c.get('password').value !== c.get('confirmpassword').value) {
            // return {match: true};
            c.get('confirmpassword').setErrors({ confirmpassword: true });
        }
        return null;
    };
    return MatchPassword;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendhost: "http://host.template.baz:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brad/working/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map