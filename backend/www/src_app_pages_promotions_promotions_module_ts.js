(self["webpackChunkerp_proj"] = self["webpackChunkerp_proj"] || []).push([["src_app_pages_promotions_promotions_module_ts"],{

/***/ 5629:
/*!***************************************************************!*\
  !*** ./src/app/pages/promotions/promotions-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPageRoutingModule": () => (/* binding */ PromotionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotions.page */ 6528);




const routes = [
    {
        path: '',
        component: _promotions_page__WEBPACK_IMPORTED_MODULE_0__.PromotionsPage
    }
];
let PromotionsPageRoutingModule = class PromotionsPageRoutingModule {
};
PromotionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromotionsPageRoutingModule);



/***/ }),

/***/ 4303:
/*!*******************************************************!*\
  !*** ./src/app/pages/promotions/promotions.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPageModule": () => (/* binding */ PromotionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _promotions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotions-routing.module */ 5629);
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotions.page */ 6528);







let PromotionsPageModule = class PromotionsPageModule {
};
PromotionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promotions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionsPageRoutingModule
        ],
        declarations: [_promotions_page__WEBPACK_IMPORTED_MODULE_1__.PromotionsPage]
    })
], PromotionsPageModule);



/***/ }),

/***/ 6528:
/*!*****************************************************!*\
  !*** ./src/app/pages/promotions/promotions.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionsPage": () => (/* binding */ PromotionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_promotions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./promotions.page.html */ 8671);
/* harmony import */ var _promotions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotions.page.scss */ 6757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-calls.service */ 54);





let PromotionsPage = class PromotionsPage {
    constructor(apiCalls) {
        this.apiCalls = apiCalls;
    }
    ngOnInit() {
        this.apiCalls.encodeURL();
    }
};
PromotionsPage.ctorParameters = () => [
    { type: src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService }
];
PromotionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-promotions',
        template: _raw_loader_promotions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_promotions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PromotionsPage);



/***/ }),

/***/ 6757:
/*!*******************************************************!*\
  !*** ./src/app/pages/promotions/promotions.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb3Rpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8671:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/promotions/promotions.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>promotions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_promotions_promotions_module_ts.js.map