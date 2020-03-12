(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-add-add-module~pages-form-form-module~pages-menu-menu-module~pages-submenu-submenu-mod~97ae385b"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-form/add-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-form/add-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate [formGroup]=\"formCreation\" *ngIf=\"!formCreated\">\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Form Title</ion-label>\r\n        <ion-input \r\n          type=\"text\" \r\n          formControlName=\"formTitle\" \r\n          required=\"true\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"formTitle.hasError('required') && formTitle.touched\">\r\n      <p style=\"margin-left: 15px; font-size: 13px;\">Please for the love of God write the form title.</p>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Form Description</ion-label>\r\n      <ion-input \r\n        type=\"text\" \r\n        formControlName=\"formDescription\" \r\n        required=\"true\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"formDescription.hasError('required') && formDescription.touched\">\r\n      <p style=\"margin-left: 15px; font-size: 13px;\">Please for the love of God write the form description.</p>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" (click)='createForm()' [disabled]=\"isDisabled\">Create</ion-button>\r\n\r\n</form>\r\n\r\n<div *ngIf='formCreated'>\r\n  <ion-list style=\"margin-bottom: 5px;\">\r\n    <ion-item>\r\n        <ion-label>{{formTitle.value}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>{{formDescription.value}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <app-input-handler [formId]='formId'></app-input-handler>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-input/add-input.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-input/add-input.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate [formGroup]=\"addInput\">\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\">Input label</ion-label>\r\n    <ion-input \r\n      type=\"text\" \r\n      formControlName=\"label\" \r\n      required=\"true\">\r\n    </ion-input>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"label.hasError('required') && label.touched\">\r\n    <p style=\"margin-left: 15px; font-size: 13px;\">Please for the love of God write the label for your input.</p>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Select input type</ion-label>\r\n    <ion-select placeholder=\"select input...\" formControlName=\"type\">\r\n      <ion-select-option value='number'>Number</ion-select-option>\r\n      <ion-select-option value='text'>Text</ion-select-option>\r\n      <ion-select-option value='date'>Date</ion-select-option>\r\n      <ion-select-option value='email'>Email</ion-select-option>\r\n      <ion-select-option value='password'>Password</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-button expand=\"block\" (click)='createInput()' [disabled]=\"isDisabled\">Create input</ion-button>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-item/add-item.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-item/add-item.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!menuId\">\r\n  <ion-header>\r\n    <ion-toolbar color = primary>\r\n      <ion-grid style=\"padding: 0;\">\r\n        <ion-row class =\"ion-align-items-center\">\r\n          <ion-col size=\"2\" size-lg>\r\n            <ion-icon \r\n              (click)=\"goBack()\"\r\n              style=\"font-size:40px; margin-left: 5px;\"\r\n              name=\"arrow-back\">\r\n            </ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n            <ion-title \r\n              style=\"padding: 0; margin: 0;\">\r\n                Add Menu\r\n            </ion-title>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <app-add-menu></app-add-menu>\r\n</div>\r\n\r\n<div *ngIf=\"menuId\">\r\n\r\n  <div *ngIf=\"option == 1\">\r\n    <ion-header>\r\n      <ion-toolbar color=primary>\r\n        <ion-grid style=\"padding: 0;\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"2\" size-lg>\r\n              <ion-icon \r\n                (click)=\"goBack()\"\r\n                style=\"font-size:40px; margin-left: 5px;\"\r\n                name=\"arrow-back\">\r\n              </ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n              <ion-title style=\"padding: 0; margin: 0;\">Add Menu to parent</ion-title>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <app-add-menu [menuId]='menuId'></app-add-menu>\r\n  </div>\r\n\r\n  <div *ngIf=\"option == 2\">\r\n    <ion-header>\r\n      <ion-toolbar color=primary>\r\n        <ion-grid style=\"padding: 0;\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"2\" size-lg>\r\n              <ion-icon \r\n                (click)=\"goBack()\"\r\n                style=\"font-size:40px; margin-left: 5px;\"\r\n                name=\"arrow-back\">\r\n              </ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n              <ion-title style=\"padding: 0; margin: 0;\">Add Form</ion-title>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <app-add-form [menuId]='menuId'></app-add-form>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-menu/add-menu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-menu/add-menu.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"menuCreation\">\r\n  <ion-list>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Menu Title</ion-label>\r\n        <ion-input \r\n          type=\"text\" \r\n          formControlName=\"menuTitle\" \r\n          required=\"true\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"menuTitle.hasError('required') && menuTitle.touched\">\r\n      <p style=\"margin-left: 15px; font-size: 13px;\">Please for the love of God write the menus title.</p>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Menu Description</ion-label>\r\n      <ion-input \r\n        type=\"text\" \r\n        formControlName=\"menuDescription\" \r\n        required=\"true\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"menuDescription.hasError('required') && menuDescription.touched\">\r\n      <p style=\"margin-left: 15px; font-size: 13px;\">Please for the love of God write the menu description.</p>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" (click)='createMenu()' [disabled]=\"isDisabled\">Create</ion-button>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-list *ngIf='inputList?.length'>\r\n  <ion-text>\r\n    <h1>{{inputList[0].title_form}}</h1>\r\n  </ion-text>  \r\n  <ion-item *ngFor='let input of inputList; let i = index'>\r\n      <ion-label>{{input.label_input}}</ion-label>\r\n      <div [ngSwitch]=\"input.type_input\">\r\n        <ion-input *ngSwitchCase=\"'text'\" type=\"text\" [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n        <ion-input *ngSwitchCase=\"'password'\" type=\"password\" [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n        <ion-input *ngSwitchCase=\"'number'\" type=\"number\" [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n        <ion-input *ngSwitchCase=\"'email'\" type=\"email\" [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n        <ion-input *ngSwitchCase=\"'date'\" type=\"date\" [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n        <ion-input *ngSwitchDefault [(ngModel)]=\"answerArray[i].answer\"  required></ion-input>\r\n      </div>\r\n    </ion-item>\r\n    <ion-button (click)=\"onSubmit()\" color=\"primary\" size=\"large\">Submit</ion-button>\r\n  </ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-item/form-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-item/form-item.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-text *ngIf='menuData'>\r\n  <p>{{menuData.description_menu}}</p>\r\n</ion-text>\r\n\r\n<ion-list>\r\n  <ion-grid style=\"padding: 0;\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n        <ion-title>List of Submenus</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"2\" size-lg *ngIf=\"userIsAdm\">\r\n        <ion-icon \r\n          (click)=\"addMenuToSubmenu()\"\r\n          name=\"add-outline\" \r\n          style=\"font-size:40px\">\r\n        </ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list *ngIf='!submenuList?.length'>\r\n    <ion-item>\r\n      This Submenu has no submenus\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf='submenuList?.length'>\r\n    <ion-item-sliding #item *ngFor='let submenu of submenuList'>\r\n      <ion-item>\r\n        <ion-text (click)='getMenu(submenu.id_menu)'>\r\n          <h2>{{submenu.title_menu}}</h2>\r\n          <p>{{submenu.description_menu}}</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\" *ngIf=\"userIsAdm\">\r\n        <ion-button\r\n          expand=\"full\" \r\n          color=\"danger\" \r\n          (click)=\"deleteSubmenu(submenu.id_menu)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list> \r\n</ion-list>\r\n\r\n<ion-list>\r\n  <ion-grid style=\"padding: 0;\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"10\" size-lg style=\"padding: 0; margin: 0;\">\r\n        <ion-title>List of Forms</ion-title>\r\n      </ion-col>\r\n      <ion-col size=\"2\" size-lg *ngIf=\"userIsAdm\">\r\n        <ion-icon \r\n          (click)=\"addFormToSubmenu()\"\r\n          name=\"add-outline\" \r\n          style=\"font-size:40px\">\r\n        </ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-list *ngIf='!formList?.length'>\r\n    <ion-item>\r\n      This Submenu has no forms\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf='formList?.length'>\r\n    <ion-item-sliding #item *ngFor='let form of formList'>\r\n      <ion-item>\r\n        <ion-text (click)='getForm(form.id_form)'>\r\n          <h2>{{form.title_form}}</h2>\r\n          <p>{{form.description_form}}</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\" *ngIf=\"userIsAdm\">\r\n        <ion-button\r\n          expand=\"full\" \r\n          color=\"danger\" \r\n          (click)=\"deleteForm(form.id_form)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-list>\r\n\r\n<ion-button class=\"delete-button\" expand=\"block\" color=\"danger\" (click)=\"logout()\">delete this submenu</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-handler/input-handler.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-handler/input-handler.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate [formGroup]=\"addInputToForm\">\r\n\r\n  <ion-list *ngIf='inputList.length'>\r\n    <ion-item >\r\n      <ion-label>Available inputs</ion-label>\r\n      <ion-select formControlName=\"inputId\" placeholder=\"Select input...\" cancelText=\"Dismiss\">\r\n        <ion-select-option *ngFor=\"let input of inputList\" [value]=\"input.id_input\">{{input.label_input}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-button style=\"margin: 2px 20px;\" expand=\"block\" (click)='addInput()' [disabled]=\"isDisabled\">Add input</ion-button>\r\n  </ion-list>\r\n  \r\n  <ion-item *ngIf='!inputList.length'>\r\n    <ion-text>There are no existing inputs. Please create one.</ion-text>\r\n  </ion-item>\r\n  \r\n\r\n</form>\r\n\r\n<app-add-input (refreshInputs)='getInputs()'></app-add-input>\r\n<!-- <app-add-input (refreshInputs)='inputAdded($event)'></app-add-input> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-items/menu-items.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-items/menu-items.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list *ngIf='list?.length'>\r\n  <ion-item-sliding #item *ngFor='let menu of list'>\r\n    <ion-item>\r\n      <ion-text (click)='getMenu(menu.id_menu)'>\r\n        <h2>{{ menu.title_menu }}</h2>\r\n        <p>{{ menu.description_menu }}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\" *ngIf=\"userIsAdm\">\r\n      <!-- <ion-button \r\n        expand=\"full\" \r\n        color=\"success\"\r\n        (click)=\"editMenu(menu)\">\r\n        <ion-icon name=\"brush\"></ion-icon>\r\n      </ion-button> -->\r\n      <ion-button\r\n        expand=\"full\" \r\n        color=\"danger\" \r\n        (click)=\"deleteMenu(menu.id_menu)\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-user/update-user.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-user/update-user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate [formGroup]=\"updateUser\">\r\n\r\n  <ion-item>\r\n    <ion-label stacked>Username:</ion-label>\r\n    <ion-input [disabled]='!isEnabled' formControlName=\"username\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label stacked>Name:</ion-label>\r\n    <ion-input [disabled]='!isEnabled' formControlName=\"name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label stacked>Email:</ion-label>\r\n    <ion-input [disabled]='!isEnabled' type='email' formControlName=\"email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Gender:</ion-label>\r\n    <ion-select [disabled]='!isEnabled' placeholder=\"select input...\" formControlName=\"gender\">\r\n      <ion-select-option value='male'>Male</ion-select-option>\r\n      <ion-select-option value='female'>Female</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label stacked>Age:</ion-label>\r\n    <ion-input [disabled]='!isEnabled' type='number' formControlName=\"age\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)='edit()'>Edit User.</ion-button>\r\n  <ion-button [disabled]='!isEnabled' (click)='update()'>Update User.</ion-button>\r\n\r\n</form>");

/***/ }),

/***/ "./src/app/components/add-form/add-form.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-form/add-form.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/add-form/add-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-form/add-form.component.ts ***!
  \***********************************************************/
/*! exports provided: AddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormComponent", function() { return AddFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/option/option.service */ "./src/app/services/option/option.service.ts");




let AddFormComponent = class AddFormComponent {
    constructor(formBuilder, form) {
        this.formBuilder = formBuilder;
        this.form = form;
        this.isDisabled = true;
        this.isEnabled = true;
        this.formCreated = false;
        this.formCreation = this.formBuilder.group({
            formTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            formDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formTitle = this.formCreation.controls['formTitle'];
        this.formDescription = this.formCreation.controls['formDescription'];
    }
    ngOnInit() { }
    ngDoCheck() {
        if (this.formTitle.value == "" || this.formDescription.value == "") {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }
    }
    createForm() {
        if (this.formCreation.valid) {
            // this.formCreated = true;
            this.form.createForm(this.menuId, this.formTitle.value, this.formDescription.value).subscribe((results) => {
                this.formCreated = true;
                this.isEnabled = false;
                this.formId = results.data.id;
            });
        }
    }
};
AddFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__["OptionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddFormComponent.prototype, "menuId", void 0);
AddFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-form/add-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-form.component.scss */ "./src/app/components/add-form/add-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__["OptionService"]])
], AddFormComponent);



/***/ }),

/***/ "./src/app/components/add-input/add-input.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/add-input/add-input.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWlucHV0L2FkZC1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/add-input/add-input.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-input/add-input.component.ts ***!
  \*************************************************************/
/*! exports provided: AddInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInputComponent", function() { return AddInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/input/input.service */ "./src/app/services/input/input.service.ts");




let AddInputComponent = class AddInputComponent {
    constructor(formBuilder, input) {
        this.formBuilder = formBuilder;
        this.input = input;
        this.refreshInputs = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addInput = this.formBuilder.group({
            label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['text', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.label = this.addInput.controls['label'];
        this.type = this.addInput.controls['type'];
    }
    ngOnInit() { }
    createInput() {
        if (this.addInput.valid) {
            // let obj = {label_input: this.label.value, type_input: this.type.value}
            // this.refreshInputs.emit({...obj});
            this.input.createInput(this.label.value, this.type.value).subscribe((results) => {
                alert(results);
                this.refreshInputs.emit();
            });
        }
    }
};
AddInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__["InputService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AddInputComponent.prototype, "refreshInputs", void 0);
AddInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-input/add-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-input.component.scss */ "./src/app/components/add-input/add-input.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__["InputService"]])
], AddInputComponent);



/***/ }),

/***/ "./src/app/components/add-item/add-item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/option/option.service */ "./src/app/services/option/option.service.ts");




let AddItemComponent = class AddItemComponent {
    constructor(nav, opt) {
        this.nav = nav;
        this.opt = opt;
    }
    ngOnInit() {
        this.option = this.opt.getOption();
    }
    goBack() {
        this.nav.back();
    }
};
AddItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__["OptionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddItemComponent.prototype, "menuId", void 0);
AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-item/add-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.component.scss */ "./src/app/components/add-item/add-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_option_option_service__WEBPACK_IMPORTED_MODULE_3__["OptionService"]])
], AddItemComponent);



/***/ }),

/***/ "./src/app/components/add-menu/add-menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-menu/add-menu.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW1lbnUvYWRkLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/add-menu/add-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-menu/add-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu/menu.service */ "./src/app/services/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddMenuComponent = class AddMenuComponent {
    constructor(menu, formBuilder, router) {
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isDisabled = true;
        this.menuCreation = this.formBuilder.group({
            menuTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            menuDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.menuTitle = this.menuCreation.controls['menuTitle'];
        this.menuDescription = this.menuCreation.controls['menuDescription'];
    }
    ngDoCheck() {
        if (this.menuTitle.value == "" || this.menuDescription.value == "") {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }
    }
    ngOnInit() { }
    createMenu() {
        if (this.menuCreation.valid) {
            if (this.menuId) {
                this.menu.createMenu(this.menuTitle.value, this.menuDescription.value, this.menuId).subscribe((results) => {
                    this.router.navigateByUrl(`views/submenu/${this.menuId}`);
                });
            }
            else {
                this.menu.createMenu(this.menuTitle.value, this.menuDescription.value, 'none').subscribe((results) => {
                    this.router.navigateByUrl('views/menu');
                });
            }
        }
    }
};
AddMenuComponent.ctorParameters = () => [
    { type: src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AddMenuComponent.prototype, "menuId", void 0);
AddMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-menu/add-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-menu.component.scss */ "./src/app/components/add-menu/add-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AddMenuComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-items/menu-items.component */ "./src/app/components/menu-items/menu-items.component.ts");
/* harmony import */ var _form_item_form_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-item/form-item.component */ "./src/app/components/form-item/form-item.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");
/* harmony import */ var _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-menu/add-menu.component */ "./src/app/components/add-menu/add-menu.component.ts");
/* harmony import */ var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-form/add-form.component */ "./src/app/components/add-form/add-form.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "./src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _input_handler_input_handler_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-handler/input-handler.component */ "./src/app/components/input-handler/input-handler.component.ts");
/* harmony import */ var _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-input/add-input.component */ "./src/app/components/add-input/add-input.component.ts");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/components/update-user/update-user.component.ts");














let ComponentModule = class ComponentModule {
};
ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [
            _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemsComponent"],
            _form_item_form_item_component__WEBPACK_IMPORTED_MODULE_6__["FormItemComponent"],
            _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"],
            _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_8__["AddMenuComponent"],
            _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_9__["AddFormComponent"],
            _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"],
            _input_handler_input_handler_component__WEBPACK_IMPORTED_MODULE_11__["InputHandlerComponent"],
            _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_12__["AddInputComponent"],
            _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserComponent"]
        ],
        exports: [
            _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemsComponent"],
            _form_item_form_item_component__WEBPACK_IMPORTED_MODULE_6__["FormItemComponent"],
            _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"],
            _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_8__["AddMenuComponent"],
            _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_9__["AddFormComponent"],
            _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"],
            _input_handler_input_handler_component__WEBPACK_IMPORTED_MODULE_11__["InputHandlerComponent"],
            _add_input_add_input_component__WEBPACK_IMPORTED_MODULE_12__["AddInputComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserComponent"]
        ]
    })
], ComponentModule);



/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_option_option_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/option/option.service */ "./src/app/services/option/option.service.ts");
/* harmony import */ var _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/input/input.service */ "./src/app/services/input/input.service.ts");
/* harmony import */ var _services_answer_answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/answer/answer.service */ "./src/app/services/answer/answer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DynamicFormComponent = class DynamicFormComponent {
    constructor(form, router, input, answer) {
        this.form = form;
        this.router = router;
        this.input = input;
        this.answer = answer;
        this.answerArray = [];
    }
    ngOnInit() {
        this.renderForm();
    }
    renderForm() {
        this.input.getInputsByForm(this.formId).subscribe((results) => {
            this.inputList = results;
            for (let i = 0; i < this.inputList.length; i++) {
                this.answerArray.push({ id: this.inputList[i].id_input, answer: '' });
            }
        });
    }
    onSubmit() {
        console.log(this.answerArray);
        this.answer.createAnswer(this.formId, JSON.stringify(this.answerArray)).subscribe((results) => {
            alert(results);
            this.router.navigateByUrl('views/menu');
        });
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _services_option_option_service__WEBPACK_IMPORTED_MODULE_2__["OptionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__["InputService"] },
    { type: _services_answer_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DynamicFormComponent.prototype, "formId", void 0);
DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/components/dynamic-form/dynamic-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_option_option_service__WEBPACK_IMPORTED_MODULE_2__["OptionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_input_input_service__WEBPACK_IMPORTED_MODULE_3__["InputService"], _services_answer_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"]])
], DynamicFormComponent);



/***/ }),

/***/ "./src/app/components/form-item/form-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/form-item/form-item.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  height: 60%;\n}\n\n.delete-button {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWl0ZW0vQzpcXFVzZXJzXFx3aXNhbVxcRG9jdW1lbnRzXFxQcm95ZWN0b3NcXHAxRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm0taXRlbVxcZm9ybS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0taXRlbS9mb3JtLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0taXRlbS9mb3JtLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgcmlnaHQ6IDA7XHJcbn0iLCJpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/form-item/form-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/form-item/form-item.component.ts ***!
  \*************************************************************/
/*! exports provided: FormItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormItemComponent", function() { return FormItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_option_option_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/option/option.service */ "./src/app/services/option/option.service.ts");
/* harmony import */ var _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menu/menu.service */ "./src/app/services/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let FormItemComponent = class FormItemComponent {
    constructor(opt, menu, auth, nav, router) {
        this.opt = opt;
        this.menu = menu;
        this.auth = auth;
        this.nav = nav;
        this.router = router;
        this.submenuList = [{ title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1' }];
        this.formList = [];
        // menuData: any;
        this.menuData = { title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1' };
        this.userIsAdm = this.auth.userIsAdmin();
    }
    ngOnInit() {
        this.getData();
    }
    ngDoCheck() {
        this.getData();
    }
    getData() {
        // this.menu.getMenusByParent(this.menuId).subscribe((results) => {
        //   this.submenuList = results.data.submenus;
        //   this.formList = results.data.forms;
        //   this.menuData = results.data.menu;
        // })
    }
    getForm(formId) {
        this.router.navigateByUrl(`/views/form/${formId}`);
    }
    getMenu(menuId) {
        this.router.navigateByUrl(`/views/submenu/${menuId}`);
    }
    addMenuToSubmenu() {
        this.opt.setOption(1);
        this.nav.navigateForward([`/views/add/${this.menuId}`]);
    }
    addFormToSubmenu() {
        this.opt.setOption(2);
        this.nav.navigateForward([`/views/add/${this.menuId}`]);
    }
};
FormItemComponent.ctorParameters = () => [
    { type: _services_option_option_service__WEBPACK_IMPORTED_MODULE_2__["OptionService"] },
    { type: _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormItemComponent.prototype, "menuId", void 0);
FormItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-item/form-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-item.component.scss */ "./src/app/components/form-item/form-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_option_option_service__WEBPACK_IMPORTED_MODULE_2__["OptionService"],
        _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
        src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], FormItemComponent);



/***/ }),

/***/ "./src/app/components/input-handler/input-handler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/input-handler/input-handler.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQtaGFuZGxlci9pbnB1dC1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/input-handler/input-handler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/input-handler/input-handler.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHandlerComponent", function() { return InputHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_input_input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/input/input.service */ "./src/app/services/input/input.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let InputHandlerComponent = class InputHandlerComponent {
    constructor(input, formBuilder) {
        this.input = input;
        this.formBuilder = formBuilder;
        this.inputList = [{ id_input: 1, label_input: 'a label' }, { id_input: 2, label_input: 'a label2' }];
        this.addInputToForm = this.formBuilder.group({
            inputId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.inputId = this.addInputToForm.controls['inputId'];
    }
    ngOnInit() {
        this.getInputs();
    }
    getInputs() {
        this.input.getAllInputs().subscribe((results) => {
            this.inputList = results;
        });
    }
    addInput() {
        if (this.addInputToForm.valid) {
            console.log(this.inputId.value);
            this.input.addInputToForm(this.formId, this.inputId.value).subscribe((results) => {
                this.getInputs();
            });
        }
    }
    inputAdded(input) {
        // this.inputList.push({...input, id_input: 3})
        // this.getInputs();
        console.log(input);
    }
};
InputHandlerComponent.ctorParameters = () => [
    { type: _services_input_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputHandlerComponent.prototype, "formId", void 0);
InputHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-handler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-handler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-handler/input-handler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-handler.component.scss */ "./src/app/components/input-handler/input-handler.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_input_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], InputHandlerComponent);



/***/ }),

/***/ "./src/app/components/menu-items/menu-items.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-items/menu-items.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWl0ZW1zL0M6XFxVc2Vyc1xcd2lzYW1cXERvY3VtZW50c1xcUHJveWVjdG9zXFxwMUZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LWl0ZW1zXFxtZW51LWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUtaXRlbXMvbWVudS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1pdGVtcy9tZW51LWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufSIsImlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDYwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/menu-items/menu-items.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu-items/menu-items.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemsComponent", function() { return MenuItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu/menu.service */ "./src/app/services/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");





let MenuItemsComponent = class MenuItemsComponent {
    constructor(menu, router, auth) {
        this.menu = menu;
        this.router = router;
        this.auth = auth;
        this.list = [
            { title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1' },
            { title_menu: "menu prueba2", description_menu: "este es el menu de prueba2", id_menu: '2' }
        ];
        this.userIsAdm = this.auth.userIsAdmin();
    }
    ngOnInit() {
        this.getMenus();
    }
    ionViewWillEnter() {
        this.getMenus();
    }
    getMenus() {
        this.menu.getMenusWithoutParents().subscribe((results) => {
            this.list = results;
            console.log(this.list);
        });
    }
    getMenu(menuId) {
        this.router.navigateByUrl(`/views/submenu/${menuId}`);
    }
    editMenu(item) {
        console.log(item);
    }
    deleteMenu(menuId) {
        this.menu.deleteMenu(menuId).subscribe(() => {
            this.getMenus();
        });
    }
};
MenuItemsComponent.ctorParameters = () => [
    { type: _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
MenuItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-items',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-items/menu-items.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-items.component.scss */ "./src/app/components/menu-items/menu-items.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], MenuItemsComponent);



/***/ }),

/***/ "./src/app/components/update-user/update-user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdateUserComponent = class UpdateUserComponent {
    constructor(auth, formBuilder, router) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isEnabled = false;
        this.updateUser = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.setUserData();
    }
    edit() {
        this.isEnabled = !this.isEnabled;
    }
    setUserData() {
        this.auth.getUser().subscribe((results) => {
            var user = results.data;
            this.updateUser.setValue({
                username: user.username_user,
                name: user.name_user,
                email: user.email_user,
                gender: user.gender_user,
                age: user.age_user
            });
        });
    }
    update() {
        if (this.updateUser.valid) {
            this.auth.onUpdate(this.updateUser.get('username').value, this.updateUser.get('name').value, this.updateUser.get('email').value, this.updateUser.get('age').value, this.updateUser.get('gender').value).subscribe((results) => {
                this.router.navigateByUrl('views/menu');
            });
        }
    }
};
UpdateUserComponent.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-user/update-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-user.component.scss */ "./src/app/components/update-user/update-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateUserComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-add-add-module~pages-form-form-module~pages-menu-menu-module~pages-submenu-submenu-mod~97ae385b-es2015.js.map