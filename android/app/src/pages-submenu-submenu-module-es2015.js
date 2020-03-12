(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submenu-submenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submenu/submenu.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submenu/submenu.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=primary>\r\n    <ion-grid style=\"padding: 0;\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"2\" size-lg>\r\n          <ion-icon \r\n            (click)=\"goBack()\"\r\n            style=\"font-size:40px; margin-left: 5px;\"\r\n            name=\"arrow-back\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n          <ion-title style=\"padding: 0; margin: 0;\">{{menuData.title_menu.toUpperCase()}}</ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-form-item [menuId]=\"menuId\"></app-form-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/submenu/submenu-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/submenu-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SubmenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuPageRoutingModule", function() { return SubmenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _submenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submenu.page */ "./src/app/pages/submenu/submenu.page.ts");




const routes = [
    {
        path: '',
        component: _submenu_page__WEBPACK_IMPORTED_MODULE_3__["SubmenuPage"]
    }
];
let SubmenuPageRoutingModule = class SubmenuPageRoutingModule {
};
SubmenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubmenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/submenu/submenu.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/submenu/submenu.module.ts ***!
  \*************************************************/
/*! exports provided: SubmenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuPageModule", function() { return SubmenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _submenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submenu-routing.module */ "./src/app/pages/submenu/submenu-routing.module.ts");
/* harmony import */ var _submenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submenu.page */ "./src/app/pages/submenu/submenu.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let SubmenuPageModule = class SubmenuPageModule {
};
SubmenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _submenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmenuPageRoutingModule"]
        ],
        declarations: [_submenu_page__WEBPACK_IMPORTED_MODULE_6__["SubmenuPage"]]
    })
], SubmenuPageModule);



/***/ }),

/***/ "./src/app/pages/submenu/submenu.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/submenu/submenu.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1lbnUvc3VibWVudS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/submenu/submenu.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/submenu/submenu.page.ts ***!
  \***********************************************/
/*! exports provided: SubmenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuPage", function() { return SubmenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/menu/menu.service */ "./src/app/services/menu/menu.service.ts");





let SubmenuPage = class SubmenuPage {
    constructor(route, nav, menu) {
        this.route = route;
        this.nav = nav;
        this.menu = menu;
        // menuData: {};
        this.menuData = { title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1' };
    }
    ngOnInit() {
        this.menuId = this.route.snapshot.paramMap.get('menuId');
        this.getMenuData();
    }
    goBack() {
        this.nav.back();
    }
    getMenuData() {
        // this.menu.getMenusByParent(this.menuId).subscribe((results) => {
        //   this.menuData = results.data.menu;
        // }
    }
};
SubmenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }
];
SubmenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submenu/submenu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submenu.page.scss */ "./src/app/pages/submenu/submenu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
], SubmenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-submenu-submenu-module-es2015.js.map