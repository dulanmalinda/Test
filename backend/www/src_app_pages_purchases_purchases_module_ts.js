(self["webpackChunkerp_proj"] = self["webpackChunkerp_proj"] || []).push([["src_app_pages_purchases_purchases_module_ts"],{

/***/ 8486:
/*!*************************************************************!*\
  !*** ./src/app/pages/purchases/purchases-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesPageRoutingModule": () => (/* binding */ PurchasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _purchases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchases.page */ 3402);




const routes = [
    {
        path: '',
        component: _purchases_page__WEBPACK_IMPORTED_MODULE_0__.PurchasesPage
    }
];
let PurchasesPageRoutingModule = class PurchasesPageRoutingModule {
};
PurchasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasesPageRoutingModule);



/***/ }),

/***/ 6586:
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesPageModule": () => (/* binding */ PurchasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _purchases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchases-routing.module */ 8486);
/* harmony import */ var _purchases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchases.page */ 3402);







let PurchasesPageModule = class PurchasesPageModule {
};
PurchasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchases_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasesPageRoutingModule
        ],
        declarations: [_purchases_page__WEBPACK_IMPORTED_MODULE_1__.PurchasesPage]
    })
], PurchasesPageModule);



/***/ }),

/***/ 3402:
/*!***************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesPage": () => (/* binding */ PurchasesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_purchases_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./purchases.page.html */ 9488);
/* harmony import */ var _purchases_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchases.page.scss */ 1619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PurchasesPage = class PurchasesPage {
    constructor() { }
    ngOnInit() {
    }
};
PurchasesPage.ctorParameters = () => [];
PurchasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-purchases',
        template: _raw_loader_purchases_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_purchases_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PurchasesPage);



/***/ }),

/***/ 1619:
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9488:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/purchases/purchases.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>purchases</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_purchases_purchases_module_ts.js.map