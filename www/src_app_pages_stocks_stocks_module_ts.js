(self["webpackChunkerp_proj"] = self["webpackChunkerp_proj"] || []).push([["src_app_pages_stocks_stocks_module_ts"],{

/***/ 9336:
/*!****************************************************************************************!*\
  !*** ./src/app/modalComponents/selected-stock-modal/selected-stock-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedStockModalComponent": () => (/* binding */ SelectedStockModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_selected_stock_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./selected-stock-modal.component.html */ 9334);
/* harmony import */ var _selected_stock_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selected-stock-modal.component.scss */ 9530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-calls.service */ 54);







let SelectedStockModalComponent = class SelectedStockModalComponent {
    constructor(apiCalls, formbuilder, modalCtrl, alertcontroller) {
        this.apiCalls = apiCalls;
        this.formbuilder = formbuilder;
        this.modalCtrl = modalCtrl;
        this.alertcontroller = alertcontroller;
        this.addStocksForm = this.formbuilder.group({
            Amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
        });
        this.transferStocksForm = this.formbuilder.group({
            Amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
            Branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        this.deleteStocksForm = this.formbuilder.group({
            Amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
        });
        this.availabeBraches = [];
    }
    get Amount() {
        return this.addStocksForm.get("Amount");
    }
    get Branch() {
        return this.addStocksForm.get("Branch");
    }
    ngOnInit() {
        this.getBranches();
    }
    closeBTN() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    getBranches() {
        this.apiCalls.getBranches()
            .subscribe((response) => {
            response.forEach(e => {
                if (e.branchCode != this.apiCalls.selectedStock.branchCode) {
                    this.availabeBraches.push(e);
                }
            });
        }, (error) => {
            console.error('Request failed with error');
        });
    }
    addBTN() {
        this.apiCalls.presentLoading("Please wait..");
        var itemID = this.apiCalls.selectedStock.itemId;
        var qty = this.addStocksForm.get("Amount").value;
        var branchCode = this.apiCalls.selectedStock.branchCode;
        this.apiCalls.addStocks(itemID, branchCode, qty)
            .subscribe((response) => {
            this.apiCalls.loadingController.dismiss();
            this.apiCalls.presentAlert("Stocks Added", true);
            this.closeBTN();
        }, (error) => {
            this.apiCalls.loadingController.dismiss();
            this.apiCalls.presentAlert("Error occured! Try again", true);
        });
    }
    transferBTN() {
        var senderBranch = this.apiCalls.selectedStock.branchCode;
        var receiverBranch = this.transferStocksForm.get("Branch").value;
        var itemID = this.apiCalls.selectedStock.itemId;
        var qty = this.transferStocksForm.get("Amount").value;
        if (this.apiCalls.selectedStock.currentStock > qty) {
            this.apiCalls.presentLoading("Please wait..");
            this.apiCalls.transferStocks(senderBranch, receiverBranch, itemID, qty)
                .subscribe((response) => {
                this.apiCalls.loadingController.dismiss();
                this.apiCalls.presentAlert("Stocks Tranfered", true);
                this.closeBTN();
            }, (error) => {
                this.apiCalls.loadingController.dismiss();
                this.apiCalls.presentAlert("Error occured! Try again", true);
            });
        }
        else {
            this.apiCalls.presentAlert("Invalid request", true);
        }
    }
    deleteBTN() {
        var itemID = this.apiCalls.selectedStock.itemId;
        var qty = -this.deleteStocksForm.get("Amount").value;
        var branchCode = this.apiCalls.selectedStock.branchCode;
        if (this.apiCalls.selectedStock.currentStock >= -qty) {
            this.apiCalls.presentLoading("Please wait..");
            this.apiCalls.deleteStocks(itemID, branchCode, qty)
                .subscribe((response) => {
                this.apiCalls.loadingController.dismiss();
                this.apiCalls.presentAlert("Stocks Deleted", true);
                this.closeBTN();
            }, (error) => {
                this.apiCalls.loadingController.dismiss();
                this.apiCalls.presentAlert("Error occured! Try again", true);
            });
        }
        else {
            this.apiCalls.presentAlert("Invalid Request", true);
            this.closeBTN();
        }
    }
    deleteAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroller.create({
                message: "Are you sure want to delete stocks",
                buttons: [{
                        text: 'NO',
                        role: 'cancel',
                    }, {
                        text: 'YES',
                        handler: () => {
                            this.deleteBTN();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
SelectedStockModalComponent.ctorParameters = () => [
    { type: src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
SelectedStockModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-selected-stock-modal',
        template: _raw_loader_selected_stock_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_selected_stock_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectedStockModalComponent);



/***/ }),

/***/ 327:
/*!*************************************************************************************!*\
  !*** ./src/app/modalComponents/selected-stock-modal/selected-stock-modal.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectedStockModalComponentModule": () => (/* binding */ selectedStockModalComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selected-stock-modal.component */ 9336);






let selectedStockModalComponentModule = class selectedStockModalComponentModule {
};
selectedStockModalComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_0__.SelectedStockModalComponent],
        entryComponents: [_selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_0__.SelectedStockModalComponent],
        exports: [_selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_0__.SelectedStockModalComponent]
    })
], selectedStockModalComponentModule);



/***/ }),

/***/ 8538:
/*!*******************************************************!*\
  !*** ./src/app/pages/stocks/stocks-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksPageRoutingModule": () => (/* binding */ StocksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _stocks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.page */ 290);




const routes = [
    {
        path: '',
        component: _stocks_page__WEBPACK_IMPORTED_MODULE_0__.StocksPage
    }
];
let StocksPageRoutingModule = class StocksPageRoutingModule {
};
StocksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StocksPageRoutingModule);



/***/ }),

/***/ 983:
/*!***********************************************!*\
  !*** ./src/app/pages/stocks/stocks.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksPageModule": () => (/* binding */ StocksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var _stocks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks-routing.module */ 8538);
/* harmony import */ var _stocks_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stocks.page */ 290);
/* harmony import */ var src_app_modalComponents_selected_stock_modal_selected_stock_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modalComponents/selected-stock-modal/selected-stock-modal.module */ 327);









let StocksPageModule = class StocksPageModule {
};
StocksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _stocks_routing_module__WEBPACK_IMPORTED_MODULE_1__.StocksPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            src_app_modalComponents_selected_stock_modal_selected_stock_modal_module__WEBPACK_IMPORTED_MODULE_3__.selectedStockModalComponentModule
        ],
        declarations: [_stocks_page__WEBPACK_IMPORTED_MODULE_2__.StocksPage]
    })
], StocksPageModule);



/***/ }),

/***/ 290:
/*!*********************************************!*\
  !*** ./src/app/pages/stocks/stocks.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksPage": () => (/* binding */ StocksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stocks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stocks.page.html */ 1398);
/* harmony import */ var _stocks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks.page.scss */ 5701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-calls.service */ 54);
/* harmony import */ var src_app_modalComponents_selected_stock_modal_selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modalComponents/selected-stock-modal/selected-stock-modal.component */ 9336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);









let StocksPage = class StocksPage {
    constructor(apicalls, modalCtrl, router, location) {
        this.apicalls = apicalls;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.location = location;
        this.returnedItems = [];
        this.availabeBraches = [];
    }
    ngOnInit() {
        this.apicalls.requirePane = true;
        this.getAllStocks();
        this.getAllBranches();
        this.apicalls.encodeURL();
    }
    getAllStocks() {
        this.apicalls.getStocks()
            .subscribe((response) => {
            this.returnedItems = response;
        }, (error) => {
            console.error('Request failed with error');
        });
    }
    getAllBranches() {
        this.apicalls.getBranches()
            .subscribe((response) => {
            this.availabeBraches = response;
        }, (error) => {
            console.error('Request failed with error');
        });
    }
    selectedStockEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modalComponents_selected_stock_modal_selected_stock_modal_component__WEBPACK_IMPORTED_MODULE_3__.SelectedStockModalComponent
            });
            yield modal.present();
        });
    }
    selectStock(event) {
        this.apicalls.selectedStock = event;
        this.selectedStockEvent();
    }
    calculateStockVal(amount, cost) {
        var val = amount * cost;
        return val;
    }
};
StocksPage.ctorParameters = () => [
    { type: src_app_services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location }
];
StocksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stocks',
        template: _raw_loader_stocks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stocks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StocksPage);



/***/ }),

/***/ 9530:
/*!******************************************************************************************!*\
  !*** ./src/app/modalComponents/selected-stock-modal/selected-stock-modal.component.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3RlZC1zdG9jay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 5701:
/*!***********************************************!*\
  !*** ./src/app/pages/stocks/stocks.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid ion-row ion-col.long-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nion-grid ion-row ion-col {\n  text-align: center;\n}\n\n.perElement {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n}\n\n.available {\n  background-color: #006403;\n}\n\n.notavailable {\n  background-color: #B92C20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2Nrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBRmhCOztBQVVRO0VBQ0ksa0JBQUE7QUFQWjs7QUFZQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBVEo7O0FBWUE7RUFDSSx5QkFBQTtBQVRKOztBQVdBO0VBQ0kseUJBQUE7QUFSSiIsImZpbGUiOiJzdG9ja3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICYubG9uZy10ZXh0IHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wZXJFbGVtZW50IHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmF2YWlsYWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY0MDM7XHJcbiAgfVxyXG4ubm90YXZhaWxhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I5MkMyMDtcclxuICB9Il19 */");

/***/ }),

/***/ 9334:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalComponents/selected-stock-modal/selected-stock-modal.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{apiCalls.selectedStock.name}}</ion-title>\n    <ion-button color=\"danger\" slot=\"end\" (click)=\"closeBTN()\">\n      <ion-icon  name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Add stocks</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup] = \"addStocksForm\">\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"floating\">Amount</ion-label>\n            <ion-input formControlName=\"Amount\" type=\"number\" min = \"0\"></ion-input>\n          </ion-item>\n        </ion-list>\n      <br>\n      <ion-toolbar>\n        <ion-button expand=\"block\" fill=\"outline\" (click)=\"addBTN()\"  [disabled]=\"!addStocksForm.valid\">Add Stocks</ion-button>\n      </ion-toolbar>\n    </form>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Transfer stocks</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup] = \"transferStocksForm\">\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"floating\">Amount</ion-label>\n            <ion-input formControlName=\"Amount\" type=\"number\" min = \"0\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Transfer To</ion-label>\n            <ion-select placeholder=\"Select One\" formControlName=\"Branch\">\n              <ion-select-option value=\"{{branch.branchCode}}\" *ngFor=\"let branch of availabeBraches\">{{branch.branchName}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      <br>\n      <ion-toolbar>\n        <ion-button expand=\"block\" fill=\"outline\" (click)=\"transferBTN()\"  [disabled]=\"!transferStocksForm.valid\">Transfer Stocks</ion-button>\n      </ion-toolbar>\n    </form>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Delete stocks</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup] = \"deleteStocksForm\">\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"floating\">Amount</ion-label>\n            <ion-input formControlName=\"Amount\" type=\"number\" min = \"0\"></ion-input>\n          </ion-item>\n        </ion-list>\n      <br>\n      <ion-toolbar>\n        <ion-button expand=\"block\" fill=\"outline\" (click)=\"deleteAlert()\"  [disabled]=\"!deleteStocksForm.valid\">Delete Stocks</ion-button>\n      </ion-toolbar>\n    </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ 1398:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stocks/stocks.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Stocks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-toolbar>\n          <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\" showCancelButton= \"focus\" ></ion-searchbar>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Branch</ion-label>\n          <ion-select placeholder=\"Select One\" [(ngModel)]=\"filterTerm\">\n            <ion-select-option value=\"{{branch.branchCode}}\" *ngFor=\"let branch of availabeBraches\">{{branch.branchName}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <br>\n  \n  <ion-grid>\n    \n    <!--Titles-->\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Item Name</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Brand</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Stock Amount</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Cost</h5></ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Price</h5></ion-card>       \n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Discount</h5></ion-card>       \n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align:center;\"><h5>Stock value</h5></ion-card>       \n      </ion-col>\n    </ion-row>\n    <!--End titles-->\n\n    \n    <ion-card *ngFor=\"let item of returnedItems | filter:filterTerm;let i = index;\"  [ngClass]=\"(item.currentStock == 0) ? 'notavailable' : 'available'\" (click)=\"selectStock(item)\">\n      <ion-row  >\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.name}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.brandName}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.currentStock}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.cost}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.price}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{item.disValue}}</div>\n        </ion-col>\n        <ion-col class=\"long-text\">\n          <div class=\"perElement\">{{calculateStockVal(item.currentStock,item.cost)}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n  \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stocks_stocks_module_ts.js.map