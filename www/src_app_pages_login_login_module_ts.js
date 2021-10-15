(self["webpackChunkerp_proj"] = self["webpackChunkerp_proj"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-calls.service */ 54);







let LoginPage = class LoginPage {
    constructor(apicalls, router, loadingCtrl, route) {
        this.apicalls = apicalls;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.loginCreds = {
            username: "",
            password: ""
        };
        route.params.subscribe(val => {
            if (apicalls.requirePane) {
                apicalls.requirePane = false;
                window.location.reload();
            }
        });
    }
    ngOnInit() {
        this.apicalls.encodeURL();
    }
    loginBTN() {
        this.apicalls.presentLoading("Please wait...");
        this.apicalls.userLogin(this.loginCreds)
            .subscribe((response) => {
            this.loadingCtrl.dismiss();
            this.loginCreds.username = "";
            this.loginCreds.password = "";
            this.apicalls.requirePane = true;
            this.apicalls.loggedInstat = true;
            this.router.navigate(['/stocks']);
        }, (error) => {
            this.loadingCtrl.dismiss();
            this.apicalls.presentAlert("Failed Login.Retry", true);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nbody,\n.signin {\n  background-color: #d3d3d3;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.login {\n  position: relative;\n  height: 560px;\n  width: 405px;\n  margin: auto;\n  padding: 60px 60px;\n  background-size: cover;\n  background-color: #323232;\n  box-shadow: 0px 30px 60px -5px #000;\n}\nform {\n  padding-top: 80px;\n}\n.active {\n  border-bottom: 2px solid #1161ed;\n  color: white;\n}\n.nonactive {\n  color: rgba(255, 255, 255, 0.2);\n}\nh2 {\n  padding-left: 12px;\n  font-size: 22px;\n  text-transform: uppercase;\n  padding-bottom: 5px;\n  letter-spacing: 2px;\n  display: inline-block;\n  font-weight: 100;\n}\nh2:first-child {\n  padding-left: 0px;\n}\nspan {\n  text-transform: uppercase;\n  font-size: 12px;\n  opacity: 0.7;\n  display: inline-block;\n  position: relative;\n  top: -65px;\n  transition: all 0.5s ease-in-out;\n}\n.text {\n  border: none;\n  width: 100%;\n  padding: 15px 20px;\n  display: block;\n  height: 15px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px solid rgba(255, 255, 255, 0);\n  overflow: hidden;\n  margin-top: 15px;\n  transition: all 0.5s ease-in-out;\n}\n.text:focus {\n  outline: 0;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0);\n}\n.text:focus + span {\n  opacity: 0.6;\n}\ninput[type=text],\ninput[type=password] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n}\ninput {\n  display: inline-block;\n  padding-top: 20px;\n  font-size: 14px;\n}\nh2,\nspan,\n.custom-checkbox {\n  margin-left: 20px;\n}\n.custom-checkbox {\n  -webkit-appearance: none;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 8px;\n  border-radius: 2px;\n  display: inline-block;\n  position: relative;\n  top: 6px;\n}\n.custom-checkbox:checked {\n  background-color: #1161ed;\n}\n.custom-checkbox:checked:after {\n  content: \"✔\";\n  font-size: 10px;\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  color: #fff;\n}\n.custom-checkbox:focus {\n  outline: none;\n}\nlabel {\n  display: inline-block;\n  padding-top: 10px;\n  padding-left: 5px;\n}\n.signin {\n  background-color: #1161ed;\n  color: #FFF;\n  width: 100%;\n  padding: 10px 20px;\n  display: block;\n  height: 39px;\n  border-radius: 20px;\n  margin-top: 30px;\n  transition: all 0.5s ease-in-out;\n  border: none;\n  text-transform: uppercase;\n}\n.signin:hover {\n  background: #4082f5;\n  box-shadow: 0px 4px 35px -5px #4082f5;\n  cursor: pointer;\n}\n.signin:focus {\n  outline: none;\n}\nhr {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  top: 85px;\n  position: relative;\n}\na {\n  text-align: center;\n  display: block;\n  top: 120px;\n  position: relative;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7O0VBRUUseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsK0JBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTs7RUFFRSxxQ0FBQTtFQUNBLFdBQUE7QUFDRjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBOzs7RUFHRSxpQkFBQTtBQURGO0FBSUE7RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUFERiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5LFxuLnNpZ25pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmxvZ2luIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDU2MHB4O1xuICB3aWR0aDogNDA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNjBweCA2MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICBib3gtc2hhZG93OiAwcHggMzBweCA2MHB4IC01cHggIzAwMDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMTYxZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vbmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbmgyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuaDI6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50ZXh0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGV4dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLnRleHQ6Zm9jdXMgKyBzcGFuIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaDIsXG5zcGFuLFxuLmN1c3RvbS1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG59XG5cbi5jdXN0b20tY2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTYxZWQ7XG59XG5cbi5jdXN0b20tY2hlY2tib3g6Y2hlY2tlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgbGVmdDogNHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmN1c3RvbS1jaGVja2JveDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5zaWduaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE2MWVkO1xuICBjb2xvcjogI0ZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzlweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpZ25pbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MDgyZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMzVweCAtNXB4ICM0MDgyZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZ25pbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB0b3A6IDg1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufSJdfQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>\n\n<div class=\"login\">\n  <h2 class=\"active\"> sign in </h2>\n  <form>\n    <input type=\"text\" class=\"text\" name=\"username\" style=\"background-color:#585858;color: white;\" [(ngModel)]=\"loginCreds.username\">\n     <span style=\"font-size: 16px;font-weight: bold;color: white;\">username</span>\n\n    <br>\n    \n    <br>\n\n    <input type=\"password\" class=\"text\" name=\"password\" style=\"background-color:#585858;color: white;\" [(ngModel)]=\"loginCreds.password\">\n    <span style=\"font-size: 16px;font-weight: bold;color: white;\">password</span>\n    <br>\n    \n    <button class=\"signin\" (click) = \"loginBTN()\">\n      Sign In\n    </button>\n\n\n    <hr>\n  </form>\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map