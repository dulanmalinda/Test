(self["webpackChunkerp_proj"] = self["webpackChunkerp_proj"] || []).push([["src_app_pages_items_items_module_ts"],{

/***/ 7774:
/*!*****************************************************!*\
  !*** ./src/app/pages/items/items-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 2558);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    }
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 7272:
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 7774);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page */ 2558);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var src_app_modalComponents_add_item_modal_add_item_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modalComponents/add-item-modal/add-item-modal.module */ 6680);
/* harmony import */ var src_app_modalComponents_selected_item_modal_selected_item_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modalComponents/selected-item-modal/selected-item-modal.module */ 6478);










let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            src_app_modalComponents_add_item_modal_add_item_modal_module__WEBPACK_IMPORTED_MODULE_3__.addItemModalComponentModule,
            src_app_modalComponents_selected_item_modal_selected_item_modal_module__WEBPACK_IMPORTED_MODULE_4__.selectedItemModalComponentModule
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_1__.ItemsPage]
    })
], ItemsPageModule);



/***/ }),

/***/ 2558:
/*!*******************************************!*\
  !*** ./src/app/pages/items/items.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./items.page.html */ 4915);
/* harmony import */ var _items_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.scss */ 1791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modalComponents_add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modalComponents/add-item-modal/add-item-modal.component */ 6081);
/* harmony import */ var src_app_modalComponents_selected_item_modal_selected_item_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modalComponents/selected-item-modal/selected-item-modal.component */ 4988);
/* harmony import */ var src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-calls.service */ 54);








let ItemsPage = class ItemsPage {
    constructor(apicalls, modalCtrl) {
        this.apicalls = apicalls;
        this.modalCtrl = modalCtrl;
        this.returnedItems = [];
    }
    ngOnInit() {
        this.apicalls.requirePane = true;
        this.getItems();
        this.apicalls.encodeURL();
    }
    getItems() {
        this.apicalls.getItems()
            .subscribe((response) => {
            this.returnedItems = response;
        }, (error) => {
            console.error('Request failed with error');
        });
    }
    addItemBtn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modalComponents_add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.AddItemModalComponent
            });
            yield modal.present();
        });
    }
    selectedItemEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modalComponents_selected_item_modal_selected_item_modal_component__WEBPACK_IMPORTED_MODULE_3__.SelectedItemModalComponent
            });
            yield modal.present();
        });
    }
    selectItem(event) {
        this.apicalls.selectedItem = event;
        this.selectedItemEvent();
    }
};
ItemsPage.ctorParameters = () => [
    { type: src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__.ApiCallsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-items',
        template: _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_items_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemsPage);



/***/ }),

/***/ 1791:
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid ion-row ion-col.long-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nion-grid ion-row ion-col {\n  text-align: center;\n}\n\n.perElement {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n}\n\n.odd {\n  background-color: #D23715;\n}\n\n.even {\n  background-color: #E44B2A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUFGaEI7O0FBVVE7RUFDSSxrQkFBQTtBQVBaOztBQVlBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFUSjs7QUFZQTtFQUNJLHlCQUFBO0FBVEo7O0FBV0U7RUFDRSx5QkFBQTtBQVJKIiwiZmlsZSI6Iml0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAmLmxvbmctdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGVyRWxlbWVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDIzNzE1O1xyXG4gIH1cclxuICAuZXZlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDRCMkE7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 4915:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/items/items.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Items</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n\n<div style=\"text-align: right; padding: 10px;\">\n  <ion-button size=\"medium\" (click) = \"addItemBtn()\" >Add Item</ion-button>\n</div>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\" showCancelButton= \"focus\" ></ion-searchbar>\n  </ion-toolbar>\n  <br>\n  \n  <ion-grid>\n    \n    <!--Titles-->\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Item Name</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Catagory</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Brand</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Tag</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Cost</h5></ion-card>       \n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Price</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Discount</h5></ion-card>\n      </ion-col>\n    </ion-row>\n    <!--End titles-->\n\n    <ion-card *ngFor=\"let item of returnedItems | filter:filterTerm;let i = index;\"  [ngClass]=\"(i % 2 == 0) ? 'even' : 'even'\" (click)=\"selectItem(item)\">\n      <ion-row  >\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.name}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.catName}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.brandName}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.tag}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.cost}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.price}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.disValue}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_items_items_module_ts.js.map