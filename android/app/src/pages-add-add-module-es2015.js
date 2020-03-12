(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf='menuId'>\r\n  <app-add-item [menuId]='menuId'></app-add-item>\r\n</ion-content>\r\n<ion-content *ngIf='!menuId'>\r\n  <app-add-item></app-add-item>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add/add-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add/add-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function() { return AddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.page */ "./src/app/pages/add/add.page.ts");




const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"]
    }
];
let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add/add.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/add/add.module.ts ***!
  \*****************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/pages/add/add-routing.module.ts");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add.page */ "./src/app/pages/add/add.page.ts");








let AddPageModule = class AddPageModule {
};
AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddPageRoutingModule"]
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_7__["AddPage"]]
    })
], AddPageModule);



/***/ }),

/***/ "./src/app/pages/add/add.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/add/add.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC9hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/add/add.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/add/add.page.ts ***!
  \***************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AddPage = class AddPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // this.menuId = '5'
        this.menuId = this.route.snapshot.paramMap.get('menuId');
    }
};
AddPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.page.scss */ "./src/app/pages/add/add.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-add-module-es2015.js.map