(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/imported-jobs.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/imported-jobs.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imported-jobs\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.html": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.html ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"company-detailed pt-3\"  *ngIf=\"company\">\r\n    <button type=\"button\" class=\"btn btn-primary ml-2\" (click)='isEdit = true'>Edit</button>\r\n    <div class=\"container-fluid pl-4 pr-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col-7 company-details-wrapper\">\r\n                <div class=\"company-photo\">\r\n                    <div class=\"text-center\">\r\n                        <img [src]=\"company?.logo && company?.logo !== '' ? company?.logo : '/assets/img/default-company.svg'\" alt=\"\">\r\n                        <p *ngIf=\"company.name\">{{ company.name }}</p>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"left-side\">\r\n                    <div class=\"contact\">\r\n    \r\n                        <div class=\"mt-4\">\r\n                            <p> Contact </p>\r\n                            <span *ngIf=\"company['emails'] as emails\">\r\n                                <img src=\"assets/img/205.svg\" alt=\"\"> \r\n                                {{ emails | delimetr }}\r\n                            </span>\r\n                            <span *ngIf=\"company['phones'] as phones\">\r\n                                <img src=\"assets/img/206.svg\" alt=\"\" > \r\n                                <ng-container *ngFor=\"let phone of phones\">\r\n                                    +{{ phone?.country_code }} {{ phone?.number }} <br>\r\n                                </ng-container>\r\n                            </span>\r\n                            <span *ngIf=\"company['websites'] as websites\">\r\n                                <img src=\"assets/img/185.svg\" alt=\"\">\r\n                                {{ websites | delimetr }}\r\n                            </span>\r\n                        </div>\r\n    \r\n                    </div>\r\n    \r\n                    <div class=\"addational-information mt-4\">\r\n                        <p>Addational information</p>\r\n                        <span *ngIf=\"company.foundation_date as foundation_date\">Registation Date: {{ foundation_date }}</span>\r\n                        <span *ngIf=\"company.industry as industry\">Industry : {{ industry }}</span>\r\n                        <span *ngIf=\"company.company_type as company_type\">Company type: {{ company_type }}</span>\r\n                        <span class=\"d-flex\" *ngIf=\"company.business_hours && company.business_hours.length > 0\">\r\n                            Working Hours: \r\n                            <ng-container *ngFor=\"let business_hour of company.business_hours\">\r\n                                    <span class=\"mt-0 ml-2\">\r\n                                        <ng-container *ngIf=\"business_hour.week_days.length > 1; else: oneDay\">\r\n                                                {{ business_hour.week_days[0] | titlecase }} - {{ business_hour.week_days[business_hour.week_days.length - 1] | titlecase }}\r\n                                        </ng-container>\r\n            \r\n                                        <ng-template #oneDay>\r\n                                                {{ business_hour.week_days[0] | titlecase }}\r\n                                        </ng-template>\r\n            \r\n                                        <!-- {{ business_hour.week_days[0] }} - {{ business_hour.week_days[business_hour.week_days.length - 1] }} -->\r\n                                        <ng-container *ngIf=\"business_hour.hour_from && business_hour.hour_to\">\r\n                                            | {{ business_hour.hour_from }} - {{ business_hour.hour_to }}\r\n                                        </ng-container>\r\n                                    </span>\r\n                                </ng-container>\r\n                    </span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"contact-person mb-3\">\r\n                    <div class=\"d-flex justify-content-between mb-3 Contact\">\r\n                        <p class=\"m-0\">Contact Person</p>\r\n                        <a class=\"m-0\" (click)='openModal(\"Contact Person\")'>Add</a>\r\n                    </div>\r\n                    <div class=\"add-client\" *ngIf=\"company?.contact_persons as persons; else:noPerson\">\r\n                        <ng-container *ngFor=\"let person of persons\">\r\n                                <div class=\"d-flex\" *ngIf=\"person.id !== null; else:noPerson\">\r\n                                        <span>Name: {{  person.first_name }}  {{ person.last_name }}</span>\r\n                                        <span class=\"ml-3\" *ngIf=\"person?.departament\">Position: {{ person?.departament }}</span>\r\n                                    </div>\r\n                        </ng-container>\r\n                          \r\n                        \r\n                    </div>\r\n                            <ng-template #noPerson>\r\n                                <span>Add Contact Person</span>\r\n                            </ng-template>\r\n                    \r\n                </div>\r\n\r\n                <div class=\"mb-3\" *ngIf=\"company?.status ||  company?.status === 'pre_sale'\">\r\n                    <button class=\"btn btn-primary mr-3\">Move to Sales</button>\r\n                    <button class=\"btn btn-light\">Rejected</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-5\">\r\n                <div class=\"tabs d-flex\">\r\n                    <h6 class=\"mr-3\" [ngClass]=\"{'active': isCommentesActive}\" (click)='isCommentesActive = true'>\r\n                        Comments</h6>\r\n                    <h6 [ngClass]=\"{'active': !isCommentesActive}\" (click)='isCommentesActive = false'>Active History\r\n                    </h6>\r\n                </div>\r\n                <div class=\"content-container\">\r\n\r\n                    <ng-container *ngIf=\"isCommentesActive; else history\">\r\n                        <div class=\"wrapper-comments\">\r\n                            <div class=\"second\" *ngFor=\"let item of comments; let i = index\">\r\n                                <div class=\"comment-box\">\r\n                                  <textarea #comment class=\"comment\" cols=\"20\" rows=\"5\" disabled> {{ item.text }}</textarea>\r\n                                </div>\r\n                                \r\n                                <span>Added on {{ item.created_at | date }} by vova</span>\r\n                                <div class=\"edit-comment d-flex\">\r\n                                    <button class=\"m-0 backgroundless p-0\" (click)=\"editComment(item._id , comment)\">Edit | </button>\r\n                                    <button class=\"m-0 backgroundless p-0\" (click)='deleteComment( item._id, i )'> Delete</button>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"contact-person mb-3 mt-3\">\r\n                            <div class=\"d-flex justify-content-between mb-3 Contact\">\r\n                                <p class=\"m-0\">Add Comment</p>\r\n                                <button  class=\"m-0 backgroundless p-0\" (click)='addComment()'>Add</button>\r\n                            </div>\r\n                            <textarea class=\"form-control\" rows=\"4\" \r\n                                      placeholder=\"Enter Your Comment\"  [(ngModel)]=\"comment\"></textarea>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-template #history>\r\n                            <ng-container *ngIf=\"(histories | async) as histories\">\r\n                                    <div class=\"mt-2\" *ngIf=\"histories.amount > 0\">\r\n                                        <div class=\"histories\" *ngFor=\"let history of histories.histories\">\r\n                                                <div class=\"history\">\r\n                                                    <time> {{ history.created_at | date:'medium' }} </time>                     \r\n                                                    <span [innerHTML]=\"history.text\" class=\"mt-3\"></span>\r\n                                                </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"comment\" *ngIf=\"histories.amount <= 0\">No Activity History yet</div>\r\n                            </ng-container>\r\n                            \r\n                           \r\n                    </ng-template>\r\n\r\n                </div>\r\n                <!-- <div class=\"sales-agent\">\r\n                        <div class=\"d-flex align-items-center\">\r\n                            <p class=\"mr-3 mb-0\">Sales Agent</p>\r\n                            <img class=\"user-photo\" src=\"assets/img/we-are-hiring.jpg\" alt=\"\">\r\n                            <a class=\"mt-0 pl-3\">Dachi Gigauri</a>\r\n                        </div>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"edit-company-wrapper\" *ngIf=\"isEdit\" style=\"height: 104%;top: -31px;\"></div>\r\n\r\n        <div class=\"edit-company-modal\" [ngClass]=\"{'d-block': isEdit }\" >\r\n                <app-edit-compnay-detailed-modal (result)='isEdit = false' [data]='company'></app-edit-compnay-detailed-modal>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n \r\n<ng-container *ngIf=\"modalType === 'Contact Person'\">\r\n        <div class=\"edit-company-wrapper\"></div>\r\n        <app-contact-person-modal (result)='getRestult($event)' [data]='company' ></app-contact-person-modal>\r\n</ng-container>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"contactForm\" autocomplete=\"off\">\r\n    <div class=\"custom-modal container-fluid\">\r\n        <div class=\"container\">\r\n            <div class=\"w-35 content\">\r\n                <div class=\"title\">\r\n                    <h4>Contact Person</h4>\r\n                    <a (click)='close()'>X</a>\r\n                </div>\r\n                <div class=\"content-wrapper\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <label for=\"last-name\" class=\"label-control\">First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter first name\" id=\"last-name\"\r\n                                formControlName=\"first_name\"\r\n                                [ngClass]=\"{'is-invalid': ctCtrls.first_name.invalid && submitted }\">\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <label for=\"first-name\" class=\"label-control\">Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter last name\" id=\"first-name\"\r\n                                formControlName=\"last_name\"\r\n                                [ngClass]=\"{'is-invalid': ctCtrls.last_name.invalid && submitted }\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mt-3\">\r\n                        <label for=\"departament\" class=\"label-control\">Password</label>\r\n\r\n                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\"\r\n                            [ngClass]=\"{'is-invalid': ctCtrls.password.invalid && submitted }\">\r\n\r\n                        <div class=\"password-criteria\" style=\"right:-250px;\"\r\n                            *ngIf=\"contactForm.get('password').invalid && submitted\">\r\n                            <div class=\"arrow\"></div>\r\n                            <ul>\r\n                                <li [ngClass]=\"{ 'd-none': !contactForm.get('password').hasError('minLength') }\">\r\n                                    At least 8 characters </li>\r\n                                <li [ngClass]=\"{ 'd-none': !contactForm.get('password').hasError('uppercase') }\">\r\n                                    At least one Uppercase Letter (A-Z) </li>\r\n                                <li [ngClass]=\"{ 'd-none': !contactForm.get('password').hasError('number') }\">\r\n                                    At least one number (0-9)</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mt-3\">\r\n                        <label for=\"departament\" class=\"label-control\">Departament</label>\r\n                        <input type=\"text\" placeholder=\"Departament\" class=\"form-control\" formControlName=\"departament\"\r\n                            [ngClass]=\"{'is-invalid': ctCtrls.departament.invalid && submitted }\">\r\n                    </div>\r\n\r\n                    <div class=\"mt-3\">\r\n                        <label for=\"Username\" class=\"label-control\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Auto generated\" id=\"Username\"\r\n                            formControlName=\"username\"\r\n                            [ngClass]=\"{'is-invalid': ctCtrls.username.invalid && submitted }\">\r\n                    </div>\r\n\r\n                    <div class=\"mt-3\">\r\n                        <label for=\"Email\" class=\"label-control\">Email</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\" id=\"Email\"\r\n                            formControlName=\"email\" [ngClass]=\"{'is-invalid': contactForm.get('email').errors }\">\r\n                    </div>\r\n\r\n                    <div class=\"mt-3\">\r\n                        <label for=\"phone\" class=\"label-control\">Phone</label>\r\n                        <div class=\"row mx-0\" formGroupName=\"phone\">\r\n                            <div class=\"col-4 p-0 form-group\" id=\"phone\">\r\n                                <select class=\"form-control\" id=\"country-index\" formControlName=\"country_code\">\r\n                                    <option value=\"\" disabled>Country </option>\r\n                                    <option [value]=\"code.country_code\" \r\n                                        *ngFor=\"let code of countryCodes | async;\">\r\n                                        {{  code.country }}\r\n                                        (+{{  code.country_code }})\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <div class=\"col-8 form-group\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"company-phone-number\" placeholder=\"Number\"\r\n                                       formControlName=\"number\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                        <div class=\"mt-3\">\r\n                            <label for=\"Country\" class=\"label-control\">Country</label>\r\n                            <select name=\"\" id=\"Country\" class=\"form-control\" formControlName=\"country\"\r\n                                [ngClass]=\"{'is-invalid': ctCtrls.country.invalid && submitted }\">\r\n                                <option value=\"\" disabled>Select country</option>\r\n                                <option *ngFor=\"let country of listOfCountries\" [value]='country.asc'>{{ country.name }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"mt-3\">\r\n                            <label class=\"label-control\">Birthday</label>\r\n\r\n                            <div class=\"row mx-0\">\r\n                                <div class=\"col-1 pl-0 ml-1 mt-1 mr-2 w-10 my-0\">\r\n                                    <img src=\"assets/img/birthday.svg\" alt=\"birthday\">\r\n                                </div>\r\n                                <div class=\"col-3 pl-0 pr-1 my-0\">\r\n                                    <select class=\"form-control\" name=\"b-day\" formControlName=\"day\">\r\n                                        <option value=\"\" disabled selected>Day</option>\r\n                                        <option *ngFor=\"let day of DAYS\" [value]=\"day\" tabindex=\"9\"> {{day}} </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col px-1 my-0\">\r\n                                    <select class=\"form-control\" name=\"b-month\" formControlName=\"month\">\r\n                                        <option value=\"\" disabled selected>Month</option>\r\n                                        <option *ngFor=\"let month of MONTHS\" [value]=\"month.id\" tabindex=\"10\">\r\n                                            {{month.name}}\r\n                                        </option>\r\n\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-3 pl-1 pr-0 my-0\">\r\n                                    <select class=\"form-control\" name=\"b-year\" formControlName=\"year\">\r\n                                        <option value=\"\" disabled selected>Year</option>\r\n                                        <option *ngFor=\"let year of YEARS\" [value]=\"year\">\r\n                                            {{year}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"mt-3\">\r\n                            <label for=\"\">Gender</label>\r\n                            <div class=\"mt-1\">\r\n                                <label for=\"male\"><img [src]=\"ctCtrls.gender.value === 'male' ? \r\n                                                                  'assets/img/10.svg' : 'assets/img/9.svg'\"\r\n                                        alt=\"\"></label>\r\n                                <input type=\"radio\" id=\"male\" class=\"d-none\" formControlName=\"gender\" value=\"male\"\r\n                                    name=\"gender\">\r\n\r\n                                <label for=\"shemale\"><img [src]=\"ctCtrls.gender.value === 'female' ? \r\n                                                                    'assets/img/8.svg' : 'assets/img/7.svg'\"\r\n                                        alt=\"\"></label>\r\n                                <input type=\"radio\" id=\"shemale\" class=\"d-none\" name=\"gender\" value=\"female\"\r\n                                    formControlName=\"gender\">\r\n                            </div>\r\n\r\n                            <div class=\"mt-2lp text-right\">\r\n                                <button class=\"btn btn-primary\" (click)='save()'>Save</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.html": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.html ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"editForm\" autocomplete=\"off\">\r\n    <div class=\"p-4 edit-company\">\r\n        <div class=\"field\">\r\n            <div class=\"d-flex justify-content-between\">\r\n                <h4>Edit Company Information</h4>\r\n                <a class=\"close-god\" (click)='close()'>X</a>\r\n            </div>\r\n            <div class=\"field-row\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <p>Legal Name</p>\r\n                    </div>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter legal name\" formControlName=\"name\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n            <h4>Contact</h4>\r\n            <hr>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <p>Email <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-7\" formArrayName=\"emails\">\r\n                        <ng-container *ngFor=\"let item of editCtrls.emails['controls']; let i = index\">\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" [formControlName]=\"i\"\r\n                                    [ngClass]=\"{'is-invalid': editCtrls.emails.at(i).invalid  && editCtrls.emails.at(i).touched }\">\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2\">\r\n                        <p>Phone <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-7\">\r\n                        <ng-container *ngFor=\"let item of editCtrls.phones['controls']; let i = index\"\r\n                            formArrayName=\"phones\">\r\n                            <ng-container [formGroupName]=\"i\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6\">\r\n                                        <select class=\"form-control\" id=\"country-index\" formControlName=\"country_code\">\r\n                                            <option value=\"\" disabled>Country </option>\r\n                                            <option [value]=\"code.country_code\"\r\n                                                *ngFor=\"let code of countryCodes | async;\">\r\n                                                {{  code.country }}\r\n                                                (+{{  code.country_code }})\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-6\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Phone number\"\r\n                                            formControlName=\"number\"\r\n                                            [ngClass]=\"{'is-invalid': editCtrls.phones.at(i).get('number').invalid  && editCtrls.phones.at(i).get('number').touched }\">\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2\">\r\n                        <p>Address <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-7\" formGroupName=\"addresses\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <label class=\"label-control\" for=\"Apartament\">Apartament</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Apartament\" id=\"Apartament\"\r\n                                    formControlName=\"apartament\">\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <label for=\"place\" class=\"label-control\">Postal code</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" id=\"place\"\r\n                                    formControlName=\"postal_code\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <ng-container formGroupName=\"location\">\r\n                                <div class=\"col-4\">\r\n                                    <label for=\"country\" class=\"label-control\">Country</label>\r\n                                    <select id=\"country\" class=\"form-control\" formControlName=\"country\"\r\n                                        (change)='getListOfCities($event)'>\r\n                                        <option value=\"\" disabled>Select Country</option>\r\n                                        <option *ngFor=\"let country of listOfCountries\" [value]=\"country.asc\">\r\n                                            {{ country.name }}</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div class=\"col-4\">\r\n                                    <label for=\"city\" class=\"label-control\">City</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Search city\"\r\n                                        formControlName=\"city\" [ngbTypeahead]=\"searchCity\"\r\n                                        [resultFormatter]=\"cityFormatter\" [inputFormatter]=\"cityFormatter\"\r\n                                        [attr.disabled]='!editCtrls.addresses.get(\"location\").get(\"country\").value ? true : null'>\r\n                                </div>\r\n                            </ng-container>\r\n\r\n\r\n                            <div class=\"col-4\">\r\n                                <label for=\"region\" class=\"label-control\">Region/Province</label>\r\n                                <input type=\"text\" formControlName=\"region\" id=\"region\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2 mt-4\">\r\n                        <p>Website <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-7\" formArrayName=\"websites\">\r\n                        <ng-container *ngFor=\"let item of editCtrls.websites['controls']; let i = index\">\r\n                                <input type=\"url\" class=\"form-control mt-4\" placeholder=\"Enter Website Name\"\r\n                                    [formControlName]=\"i\">\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n            <h4>Addational Information</h4>\r\n            <hr>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <p>VAT number </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter VAT number\" formControlName=\"vat\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <p>Registration date </p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <input type=\"date\" class=\"form-control\" placeholder=\"Enter registration date\"\r\n                            formControlName=\"foundation_date\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <p>Industry <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <select name=\"\" id=\"region\" class=\"form-control\" formControlName=\"industry\">\r\n                            <option value=\"\" disabled>Select one </option>\r\n                            <option [value]=\"Industry.name\" *ngFor=\"let Industry of listOfIndustries\">{{ Industry.name }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <p>Company Type <span class=\"star\">*</span></p>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter company type\"\r\n                            formControlName=\"company_type\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"field-row mb-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <p>Working Hours</p>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <app-busines-hours (result)=\"getWorkingHour($event)\" [data]=\"editCtrls.business_hours.value\"></app-busines-hours>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"submit()\">Save</button>\r\n    </div>\r\n\r\n\r\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/jobs-container.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/jobs-container.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row  flex-nowrap\">\r\n        <div class=\"col-2 pl-0 pr-0 sidebar\">\r\n                    <ul>\r\n                        <li [routerLink]=\"['/imported-jobs']\"><div>\r\n                            <img class=\"pointers\" src=\"assets/img/147.svg\" alt=\"\"> {{ params.id }}</div></li>\r\n                        <li [routerLink]=\"['/imported-jobs']\"><div><img class=\"pointers\" src=\"assets/img/147.svg\" alt=\"\">\r\n                             <img [src]=\"params.img\" style=\"background: #ffffff; border-radius:50%\"> {{ params.country }}\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"job\" [routerLink]=\"['/imported-jobs','select-job']\" [queryParams]=\"params\" ><img [src]=\"job.img\" style=\"margin-right: 10px; width: 40px;\">{{ job.title }}</li>\r\n                        <div class=\"menu\" >\r\n                            <li [routerLink]=\"['/imported-jobs','jobs', 'new-lead']\" \r\n                                [queryParams]=\"params\" \r\n                                routerLinkActive=\"router-link-active\" \r\n                                [routerLinkActiveOptions]=\"{extact: true}\">New Leads</li>\r\n                            <li [routerLink]=\"['/imported-jobs','jobs', 'pre-sales']\" \r\n                                [queryParams]=\"params\" \r\n                                routerLinkActive=\"router-link-active\" \r\n                                [routerLinkActiveOptions]=\"{extact: true}\">Pre-Sales</li>\r\n                            <li [routerLink]=\"['/imported-jobs','jobs', 'sales']\" \r\n                                [queryParams]=\"params\" \r\n                                routerLinkActive=\"router-link-active\" \r\n                                [routerLinkActiveOptions]=\"{extact: true}\">Sales</li>\r\n                            <li>CAM</li>\r\n                            <li>Statistics</li>\r\n                            <li>Locations</li>\r\n                        </div>\r\n                    </ul>\r\n        </div>\r\n        <div class=\"col-10\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>    \r\n\r\n<div class=\"here\">\r\n    <ng-template #placeholder></ng-template>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"companies-info mt-3 ml-3 p-3\">\r\n    <div class=\"companies-container d-flex justify-content-between align-items-center p-0\">\r\n        <div class=\"companies-search-bar  search-bar\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <img src=\"assets/img/208.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"companies-sort\">\r\n            <a href=\"#\">Most Recent</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"companies-list\">\r\n        <div class=\"row companies-list-header d-flex justify-content-between mt-3 align-items-center p-2\">\r\n            <div class=\"col-3\">Company</div>\r\n            <div class=\"col-1\">Jobs</div>\r\n            <div class=\"col-2\">Email</div>\r\n            <div class=\"col-2\">Phone</div>\r\n            <div class=\"col-2\">Source</div>\r\n            <div class=\"col-2\">Actions</div>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"!loading\">\r\n            <div class=\"row  d-flex justify-content-between mt-3 align-items-center\"\r\n                *ngFor=\"let comp of companies?.companies\">\r\n                <div class=\"col-3 company-name\" (click)='openModal(\"detailed\", comp)'>\r\n                    <img [src]=\"comp?.logo && comp?.logo !== '' ? comp?.logo : '/assets/img/default-company.svg'\"\r\n                        alt=\"\">\r\n                    {{ comp.name }}\r\n                </div>\r\n                <div class=\"col-1\" *ngIf=\"comp['jobs'] as jobs\">{{ jobs.length }}</div>\r\n                <div class=\"col-2\" (click)='openModal(\"detailed\", comp)'>\r\n                    <ng-container *ngIf=\"comp['emails'] as emails; else:noEmail\">\r\n                        <ng-container *ngFor=\"let email of emails\">\r\n                            {{ email }} <br>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #noEmail>-</ng-template>\r\n                    \r\n                </div>\r\n                <div class=\"col-2\" (click)='openModal(\"detailed\", comp)'>\r\n                    <ng-container *ngIf=\"comp['phones'] as phones; else:noPhone\">\r\n                        <ng-container *ngFor=\"let phone of phones\">\r\n                           +{{ phone?.country_code }} {{ phone?.number }} <br>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #noPhone>-</ng-template>   \r\n                </div>\r\n                <div class=\"col-2\">HR.ge</div>\r\n                <div class=\"col-2 d-flex justify-content-start p-0\">\r\n                    <button type=\"button\" class=\"backgroundless p-0\" (click)='openModal(\"Send Email\", comp)'>\r\n                        <img src=\"assets/img/other_mail.svg\" alt=\"\" style=\"height: 30px;width: 40px; cursor: pointer;\">\r\n                    </button>\r\n                    <button type=\"button\" class=\"backgroundless p-0 ml-2\" (click)='openModal(\"detailed\", comp)'>\r\n                        <img src=\"assets/img/edit.svg\" alt=\"\" style=\"height: 30px;width: 40px; cursor: pointer;\">\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </ng-container>\r\n        <ngb-pagination [collectionSize]=\"companies?.amount\" [pageSize]=\"'15'\" [maxSize]='5' [(page)]='page'\r\n            (pageChange)=\"changePage($event)\" class=\"d-flex justify-content-end mt-4\"></ngb-pagination>\r\n    </div>\r\n\r\n    <ng-template [ngIf]='loading'>\r\n        <div class=\"d-flex justify-content-center align-items-center\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n    </ng-template>\r\n\r\n</div>\r\n\r\n<app-modal [size]='\"lg\"' (closeModal)='modalType = null'>\r\n    <app-send-email-modal *ngIf=\"modalType === 'Send Email'\" (result)='closeModal()' [recivers]='recivers'\r\n        [companyID]=\"selectedCompanyID\"></app-send-email-modal>\r\n    <app-company-detailed-modal *ngIf=\"modalType === 'detailed'\" [companyId]='selectedCompanyID' [isEdit]=\"true\">\r\n    </app-company-detailed-modal>\r\n</app-modal>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"companies-info mt-3 ml-3 p-3\">\r\n    <div class=\"companies-container d-flex justify-content-between align-items-center p-0\">\r\n        <div class=\"companies-search-bar  search-bar\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <img src=\"assets/img/208.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"companies-sort\">\r\n            <a href=\"#\">Most Recent</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row companies-list-header d-flex justify-content-between mt-3 align-items-center p-2\">\r\n        <div class=\"col-3\">Company</div>\r\n        <div class=\"col-1\">Jobs</div>\r\n        <div class=\"col-2\">Email</div>\r\n        <div class=\"col-2\">Phone</div>\r\n        <div class=\"col-2\">Source</div>\r\n        <div class=\"col-2\">Actions</div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"!loading\">\r\n        <div class=\"row companies-list d-flex justify-content-between mt-3 align-items-center\"\r\n            *ngFor=\"let comp of companies?.companies\">\r\n            <div class=\"col-3 company-name\" (click)=\"open(comp._id)\">\r\n                <img [src]=\"comp?.logo && comp?.logo !== '' ? comp?.logo : '/assets/img/default-company.svg'\" alt=\"\">\r\n                {{ comp.name }}\r\n            </div>\r\n            <div class=\"col-1\" *ngIf=\"comp['jobs'] as jobs\">{{ jobs.length }}</div>\r\n            <div class=\"col-2\">\r\n                <ng-container *ngIf=\"comp['emails'] as emails; else:noEmail\">\r\n                    <ng-container *ngFor=\"let email of emails\">\r\n                        {{ email }} <br>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #noEmail>-</ng-template>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <ng-container *ngIf=\"comp['phones'] as phones; else:noPhone\">\r\n                    <ng-container *ngFor=\"let phone of phones\">\r\n                        +{{ phone?.country_code }} {{ phone?.number }} <br>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #noPhone>-</ng-template>\r\n            </div>\r\n            <div class=\"col-2\">HR.ge</div>\r\n            <div class=\"col-2\">\r\n                <img src=\"assets/img/other_mail.svg\" alt=\"\" style=\"height: 30px;width: 40px; cursor: pointer;\">\r\n            </div>\r\n        </div>\r\n\r\n    </ng-container>\r\n    <ngb-pagination [collectionSize]=\"companies?.amount\" [pageSize]=\"'15'\" [maxSize]='5' [(page)]='page'\r\n        (pageChange)=\"changePage($event)\" class=\"d-flex justify-content-end mt-4\"></ngb-pagination>\r\n</div>\r\n\r\n<app-modal [size]='\"xl\"' (closeModal)='modalType = null'>\r\n    <app-company-detailed-modal *ngIf=\"modalType === 'detailed'\" [companyId]='companyId'></app-company-detailed-modal>\r\n</app-modal>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/sales/sales.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/sales/sales.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"companies-info mt-3 ml-3 p-3\">\r\n        <div class=\"companies-container d-flex justify-content-between align-items-center p-0\">\r\n                <div class=\"companies-search-bar  search-bar\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                        <img src=\"assets/img/208.svg\" alt=\"\">\r\n                </div>\r\n            <div class=\"companies-sort\">\r\n                <a href=\"#\">Most Recent</a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"row companies-list-header d-flex justify-content-between mt-3 align-items-center p-2\">\r\n                <div class=\"col-3\">Company</div>\r\n                <div class=\"col-1\">Jobs</div>\r\n                <div class=\"col-2\">Email</div>\r\n                <div class=\"col-2\">Phone</div>\r\n                <div class=\"col-2\">Source</div>\r\n                <div class=\"col-2\">Actions</div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 send-email\">\r\n    <form [formGroup]=\"emailFormGroup\" (ngSubmit)=\"sendEmail()\">\r\n        <div class=\"d-flex mt-1\" [ngClass]=\"{'flex-wrap': emails.length > 3}\">\r\n            <label for=\"to\" class=\"label-control\"> To </label>\r\n            <div class=\"emails\" >\r\n                <span *ngFor=\"let email of emails; let i = index\" class=\"email\">{{ email }} \r\n                    <button type=\"button\" class=\"backgroundless\" (click)=\"remove(i)\">x</button>\r\n                </span>\r\n            </div>\r\n            <input type=\"email\" class=\"form-control\" (keydown.enter)=\"addEmail(email , $event)\" #email\r\n                    [ngClass]=\"{'mr-5 mt-2': emails.length > 3}\">\r\n        </div>\r\n\r\n        <div class=\"d-flex mt-3\" >\r\n            <label for=\"Subject\" class=\"label-control\"> Subject </label>\r\n            <input type=\"text\" id=\"Subject\" class=\"form-control\" placeholder=\"Enter Subject\" autocomplete=\"off\"\r\n                formControlName=\"subject\">\r\n        </div>\r\n        <div class=\"mt-4 position-relative\">\r\n            <img class=\"welcome-screen\" src=\"assets/img/welcome.png\" alt=\"\">\r\n            <textarea class=\"form-control\" formControlName=\"text\" rows=\"9\"\r\n                [ngClass]=\"{'is-invalid': emailFormGroup.get('text').errors || ( submitted && emailFormGroup.get('text').invalid  ) }\"></textarea>\r\n        </div>\r\n        <div class=\"mt-3 mb-3 text-right\">\r\n            <button class=\"btn btn-primary\" type=\"submit\" [ngClass]=\"{'btn-light': emails.length === 0,\r\n                                 'btn-primary': emails.length > 0 }\" >Send</button>\r\n        </div>\r\n    </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-country/select-country.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-country/select-country.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid continent mt-3\" style=\"width:90%;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-lg-3 col-md-4  mb-3\" *ngFor=\"let country of COUNTRIES\" >\r\n            <div class=\"continent-box p-0\">\r\n                <div class=\"box-img\">\r\n                    <img [src]=\"country.img\" alt=\"\">\r\n                </div>\r\n                <div class=\"box-title\">\r\n                    <h5>{{ country.name }}</h5>\r\n                </div>\r\n                <div class=\"box-list\" >\r\n                    <ul>\r\n                        <li *ngFor=\"let list of country['list']\" (click)='expand( $event )' >\r\n                            {{ list.name }}\r\n                            <div class=\"d-none anime\">\r\n                                <ng-container *ngFor=\"let item of list['list']\">\r\n                                    <div class=\"d-flex align-items-center mt-2\">\r\n                                        <img [src]=\"item['img']\" alt=\"flag\" *ngIf=\"item['img']\">\r\n                                        <p class=\"mb-0 pl-3\" \r\n                                           [routerLink]=\"['/imported-jobs','select-job']\"  \r\n                                           [queryParams]=\"{ id: item.id !== '' ? item.id : undefined ,country: item.name, continent: list.name, img: item['img'] }\">{{ item.name }}</p>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-job-type/select-job-type.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-job-type/select-job-type.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center mt-4\">\r\n    <div class=\"card-wrapper\">\r\n        <a [routerLink]=\"['/imported-jobs', 'select-country']\" >{{ params.continent || params.id }} > {{ params.country }} </a>\r\n        <div class=\"container-fluid\">\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-3 mt-2 mb-2\" *ngFor=\"let job of SELECT_JOB\">\r\n                <div class=\"house-card pt-4\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"icon\">\r\n                            <img [src]=\"job.img\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"amount\">\r\n                            <h4 [routerLink]=\"['/imported-jobs','jobs']\"\r\n                                [queryParams]=\"{ abbr: params.id !== '' ? params.id : undefined ,  id: params.continent, country: params.country, job: job.title , img: params.img }\">{{ job.title }}</h4>\r\n                            <div class=\"d-flex\">\r\n                                    <p>{{ job.amount }}</p> \r\n                                    <span   [ngClass]=\"{'status--green': job.precent > 0 ,\r\n                                                        'status--grey': job.precent === 0 , \r\n                                                        'status--orange': job.precent < 0 }\">{{ job.precent }}%</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n           \r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\">\r\n    <div class=\"login d-flex justify-content-center align-items-center\">\r\n        <div class=\"login-info text-center\">\r\n            <div class=\"login-logo mb-2 m-auto\">\r\n                <img src=\"assets/img/1.svg\" alt=\"\">\r\n            </div>\r\n            <p style=\"font-size:30px;\">RIGHT<span style=\"color:#00F4ff\">NAO SALES TOOL</span></p>\r\n            <div class=\"login-title mb-5\">\r\n                <p>Sign in</p>\r\n            </div>\r\n            <form [formGroup]=\"loginForm\" (submit)=\"login($event)\">\r\n                <div class=\"form-group mt-3\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\"\r\n                            formControlName=\"username\"  [ngClass]=\"{ 'is-invalid':  (form.username.touched || form.username.dirty || submitted)  && form.username.errors }\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                           formControlName=\"password\" [ngClass]=\"{ 'is-invalid':  (form.password.touched || form.password.dirty || submitted)  && form.password.errors }\" >\r\n                </div>\r\n                <div class=\"checkbox d-flex justify-content-between\">\r\n                    <div class=\"login-left\">\r\n                        <div class=\"custom-control custom-checkbox mr-2 big-screen\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"check-applicants\">\r\n                            <label class=\"custom-control-label\" for=\"check-applicants\">Remember me</label>\r\n                        </div>\r\n                    </div>\r\n                    <small class=\"form-text\"><a href=\"#\" class=\"text-secondary\">Forgot Sign in info?</a></small>\r\n                </div>\r\n                <button class=\"btn btn-login btn-lg float-left mt-2 w-100\" type=\"submit\">Sign in</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/app-modal/app-modal.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/app-modal/app-modal.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-template #appModal  #ngbModalContainer>  \r\n    <div  class=\"modal-content pt-2\">\r\n            <div class=\"d-flex justify-content-between pl-4 pr-4\" *ngIf='title && isBlue &&  !withoutContent'>\r\n                <h1> {{ title }}</h1>\r\n                <a  (click)=\"close()\"  style=\"cursor: pointer\">&#10005;</a>\r\n            </div>\r\n\r\n            <h2 *ngIf='!isBlue && !withoutContent' class=\"calendar-modal-header\"> {{ title }}\r\n                <a style=\"cursor: pointer\" (click)=\"close()\">&#10005;</a>\r\n            </h2>\r\n\r\n            <h2 *ngIf='withoutContent' class=\"calendar-modal-header\" style=\"padding-top: 2rem;\"> {{ title }} </h2>\r\n            \r\n            <ng-content #content></ng-content>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n  \r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/busines-hours/busines-hours.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/busines-hours/busines-hours.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n<form [formGroup]=\"bhForm\" autocomplete=\"off\" class=\"p-0\">\r\n  <div class=\"row align-items-center justify-content-beetwen\" style=\"padding: 0 0 20px 15px\">\r\n      <div class=\"custom-control custom-radio custom-control-inline  radioWrap col-5\">\r\n          <input type=\"radio\" class=\"custom-control-input\" id=\"open-on-selected-hours\"(change)=\"radioTypeChange($event)\"  value=\"select\" formControlName=\"business_hours\"  >  \r\n          <label for=\"open-on-selected-hours\" class=\"custom-control-label\"> Open on selected hours </label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio custom-control-inline radioWrap col-3\">\r\n          <input type=\"radio\" class=\"custom-control-input\" id=\"always-open\" (change)=\"radioTypeChange($event)\" value=\"open\" formControlName=\"business_hours\"  >  \r\n          <label for=\"always-open\" class=\"custom-control-label\"> Always open </label>\r\n      </div>   \r\n      <div class=\"custom-control custom-radio custom-control-inline radioWrap col-4\">\r\n          <input type=\"radio\" class=\"custom-control-input\" id=\"permanently-closed\" (change)=\"radioTypeChange($event)\" value=\"closed\" formControlName=\"business_hours\"  >  \r\n          <label for=\"permanently-closed\" class=\"custom-control-label\">  Permanently Closed </label>\r\n      </div>\r\n  </div>\r\n\r\n  <div\r\n  style=\"margin-bottom: 5px\"\r\n    class=\"row align-items-center justify-content-beetwen\"\r\n    formArrayName=\"hours\"\r\n    *ngFor=\"let item of Hours.controls; let i = index; trackBy:trackByFn\"\r\n  >\r\n    <ng-container [formGroupName]=\"i\">\r\n      <div class=\"col-4 d-flex flex-column justify-content-end\">\r\n        <span class=\"dropdown-icon\">▾</span>\r\n        <span class=\"days-title\"> From </span>\r\n        <ng-multiselect-dropdown\r\n          placeholder=\"Days\"\r\n          [data]=\"dropdownListDays\"\r\n          name=\"days_business_hour\"\r\n          [settings]=\"dropdownSettingsDays\"\r\n          formControlName=\"week_days\"\r\n          [disabled]=\"disabledWeeks\"\r\n        >\r\n        </ng-multiselect-dropdown>\r\n      </div>\r\n      <div class=\"col-3 pl-2 pr-2\"> \r\n        <span class=\"days-title\">To </span>\r\n        <ngb-timepicker formControlName=\"hour_from\" (keyup)=\"removeAlphabet($event)\"></ngb-timepicker>\r\n      </div>\r\n      <div class=\"col-1 line\"> &#8212; </div>\r\n      <div class=\"col-3 pl-2 pr-2\">\r\n        <span class=\"days-title\">To</span>\r\n        <ngb-timepicker formControlName=\"hour_to\" (keyup)=\"removeAlphabet($event)\"></ngb-timepicker>\r\n      </div>\r\n    </ng-container>\r\n    <button class=\"col-1 backgroundless\"  style=\"padding: 0; margin-top: 22px;\"  (click)=\"removeItem(i)\" *ngIf=\"multiple\"> Remove </button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"backgroundless\" style=\"margin: 5px 0 0 15px;\" (click)=\"addAnother()\" *ngIf=\"multiple && Hours.length < 7\">  Add Another  </button>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-user-tool\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header-info d-flex align-items-center justify-content-between\">\r\n            <div class=\"left-header d-flex justify-content-between align-items-center\">\r\n                <div class=\"header-logo d-flex mr-4\"  routerLink=\"/\" >\r\n                    <img src=\"assets/img/1.svg\"    alt=\"\" style=\"height:46px; padding:4px;\">\r\n                    <div class=\"logo\">\r\n                        RIGHT\r\n                        <span>Nao</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"header-search-bar ml-2\">\r\n                    <input type=\"text\" class=\"form-control search-bar\" placeholder=\"   Search\">\r\n                </div>\r\n            </div>\r\n            <div class=\"profile-icon\">\r\n                <img src=\"assets/img/we-are-hiring.jpg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                        if (e.indexOf(p[i]) < 0)
                            t[p[i]] = s[p[i]];
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            var routes = [
                { path: '', redirectTo: 'imported-jobs/select-country', pathMatch: 'full' },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _imported_jobs_imported_jobs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imported-jobs/imported-jobs.module */ "./src/app/imported-jobs/imported-jobs.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                        _imported_jobs_imported_jobs_module__WEBPACK_IMPORTED_MODULE_11__["ImportedJobsModule"]
                    ],
                    providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/imported-jobs-routing.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/imported-jobs/imported-jobs-routing.module.ts ***!
          \***************************************************************/
        /*! exports provided: ImportedJobsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedJobsRoutingModule", function () { return ImportedJobsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _imported_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imported-jobs.component */ "./src/app/imported-jobs/imported-jobs.component.ts");
            /* harmony import */ var _select_country_select_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-country/select-country.component */ "./src/app/imported-jobs/select-country/select-country.component.ts");
            /* harmony import */ var _select_job_type_select_job_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-job-type/select-job-type.component */ "./src/app/imported-jobs/select-job-type/select-job-type.component.ts");
            /* harmony import */ var _jobs_container_jobs_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs-container/jobs-container.component */ "./src/app/imported-jobs/jobs-container/jobs-container.component.ts");
            /* harmony import */ var _jobs_container_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-container/new-lead/new-lead.component */ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.ts");
            /* harmony import */ var _jobs_container_pre_sales_pre_sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs-container/pre-sales/pre-sales.component */ "./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.ts");
            /* harmony import */ var _jobs_container_sales_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobs-container/sales/sales.component */ "./src/app/imported-jobs/jobs-container/sales/sales.component.ts");
            /* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
            var routes = [
                { path: 'imported-jobs', component: _imported_jobs_component__WEBPACK_IMPORTED_MODULE_3__["ImportedJobsComponent"],
                    canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                    children: [
                        { path: '', redirectTo: 'select-country', pathMatch: 'full' },
                        { path: 'select-country', component: _select_country_select_country_component__WEBPACK_IMPORTED_MODULE_4__["SelectCountryComponent"] },
                        { path: 'select-job', component: _select_job_type_select_job_type_component__WEBPACK_IMPORTED_MODULE_5__["SelectJobTypeComponent"] },
                        { path: 'jobs', component: _jobs_container_jobs_container_component__WEBPACK_IMPORTED_MODULE_6__["JobsContainerComponent"],
                            children: [
                                { path: 'new-lead', component: _jobs_container_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_7__["NewLeadComponent"] },
                                { path: '', pathMatch: 'full', redirectTo: 'new-lead' },
                                { path: 'pre-sales', component: _jobs_container_pre_sales_pre_sales_component__WEBPACK_IMPORTED_MODULE_8__["PreSalesComponent"] },
                                { path: 'sales', component: _jobs_container_sales_sales_component__WEBPACK_IMPORTED_MODULE_9__["SalesComponent"] }
                            ] }
                    ]
                },
            ];
            var ImportedJobsRoutingModule = /** @class */ (function () {
                function ImportedJobsRoutingModule() {
                }
                return ImportedJobsRoutingModule;
            }());
            ImportedJobsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ImportedJobsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/imported-jobs.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/imported-jobs/imported-jobs.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".imported-jobs {\n  background-color: #EAEDF2;\n  min-height: 100vh;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcaW1wb3J0ZWQtam9icy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9pbXBvcnRlZC1qb2JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZWQtam9icy9pbXBvcnRlZC1qb2JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydGVkLWpvYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRURGMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufTsiLCIuaW1wb3J0ZWQtam9icyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVERjI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/imported-jobs.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/imported-jobs/imported-jobs.component.ts ***!
          \**********************************************************/
        /*! exports provided: ImportedJobsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedJobsComponent", function () { return ImportedJobsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ImportedJobsComponent = /** @class */ (function () {
                function ImportedJobsComponent() {
                }
                ImportedJobsComponent.prototype.ngOnInit = function () {
                    console.log('here');
                };
                return ImportedJobsComponent;
            }());
            ImportedJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-imported-jobs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imported-jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/imported-jobs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imported-jobs.component.scss */ "./src/app/imported-jobs/imported-jobs.component.scss")).default]
                })
            ], ImportedJobsComponent);
            ;
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/imported-jobs.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/imported-jobs/imported-jobs.module.ts ***!
          \*******************************************************/
        /*! exports provided: ImportedJobsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedJobsModule", function () { return ImportedJobsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _imported_jobs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imported-jobs-routing.module */ "./src/app/imported-jobs/imported-jobs-routing.module.ts");
            /* harmony import */ var _imported_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imported-jobs.component */ "./src/app/imported-jobs/imported-jobs.component.ts");
            /* harmony import */ var _select_country_select_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-country/select-country.component */ "./src/app/imported-jobs/select-country/select-country.component.ts");
            /* harmony import */ var _select_job_type_select_job_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-job-type/select-job-type.component */ "./src/app/imported-jobs/select-job-type/select-job-type.component.ts");
            /* harmony import */ var _jobs_container_jobs_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-container/jobs-container.component */ "./src/app/imported-jobs/jobs-container/jobs-container.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _jobs_container_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobs-container/new-lead/new-lead.component */ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.ts");
            /* harmony import */ var _jobs_container_pre_sales_pre_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jobs-container/pre-sales/pre-sales.component */ "./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.ts");
            /* harmony import */ var _jobs_container_sales_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jobs-container/sales/sales.component */ "./src/app/imported-jobs/jobs-container/sales/sales.component.ts");
            /* harmony import */ var _jobs_container_company_detailed_modal_company_detailed_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobs-container/company-detailed-modal/company-detailed-modal.component */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.ts");
            /* harmony import */ var _jobs_container_send_email_modal_send_email_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jobs-container/send-email-modal/send-email-modal.component */ "./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.ts");
            /* harmony import */ var _jobs_container_company_detailed_modal_edit_compnay_detailed_modal_edit_compnay_detailed_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.ts");
            /* harmony import */ var _jobs_container_company_detailed_modal_contact_person_modal_contact_person_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.ts");
            /* harmony import */ var _jobs_container_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jobs-container/notification/notification.component */ "./src/app/imported-jobs/jobs-container/notification/notification.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var ImportedJobsModule = /** @class */ (function () {
                function ImportedJobsModule() {
                }
                return ImportedJobsModule;
            }());
            ImportedJobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _jobs_container_company_detailed_modal_company_detailed_modal_component__WEBPACK_IMPORTED_MODULE_12__["CompanyDetailedModalComponent"],
                        _imported_jobs_component__WEBPACK_IMPORTED_MODULE_4__["ImportedJobsComponent"],
                        _select_country_select_country_component__WEBPACK_IMPORTED_MODULE_5__["SelectCountryComponent"],
                        _select_job_type_select_job_type_component__WEBPACK_IMPORTED_MODULE_6__["SelectJobTypeComponent"],
                        _jobs_container_jobs_container_component__WEBPACK_IMPORTED_MODULE_7__["JobsContainerComponent"],
                        _jobs_container_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_9__["NewLeadComponent"],
                        _jobs_container_pre_sales_pre_sales_component__WEBPACK_IMPORTED_MODULE_10__["PreSalesComponent"],
                        _jobs_container_sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"],
                        _jobs_container_send_email_modal_send_email_modal_component__WEBPACK_IMPORTED_MODULE_13__["SendEmailModalComponent"],
                        _jobs_container_company_detailed_modal_edit_compnay_detailed_modal_edit_compnay_detailed_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditCompnayDetailedModalComponent"],
                        _jobs_container_company_detailed_modal_contact_person_modal_contact_person_modal_component__WEBPACK_IMPORTED_MODULE_15__["ContactPersonModalComponent"],
                        _jobs_container_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"]
                    ],
                    entryComponents: [_jobs_container_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _imported_jobs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImportedJobsRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTypeaheadModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPaginationModule"]
                    ]
                })
            ], ImportedJobsModule);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.scss": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.scss ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".company-detailed {\n  position: relative;\n}\n.company-detailed .edit {\n  position: absolute;\n  top: -20px;\n  left: 21px;\n  color: #00D4E3;\n  cursor: pointer;\n}\n.company-detailed .company-photo img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.company-detailed .company-details-wrapper {\n  border-right: 1px solid #ccc;\n}\n.company-detailed .company-details-wrapper span {\n  display: block;\n  color: #808080;\n  font-size: 14px;\n  padding-right: 10px;\n  margin-top: 10px;\n}\n.company-detailed .company-details-wrapper span img {\n  width: 20px;\n  margin-right: 10px;\n}\n.company-detailed p {\n  font-size: 1.1rem;\n  color: #052337;\n}\n.company-detailed .contact-person .Contact a {\n  color: #00D4E3;\n  cursor: pointer;\n}\n.company-detailed .contact-person .add-client {\n  height: 100px;\n  border-radius: 4px;\n  color: #808080;\n}\n.company-detailed .tabs h6 {\n  color: #052337;\n  cursor: pointer;\n}\n.company-detailed .tabs .active {\n  border-bottom: 2px solid #00D4E3;\n  margin-bottom: 1px;\n}\n.company-detailed .content-container .wrapper-comments {\n  height: 574px;\n  overflow-y: auto;\n}\n.company-detailed .content-container .second {\n  overflow-y: auto;\n}\n.company-detailed .content-container .second .comment-box {\n  position: relative;\n  z-index: 1;\n}\n.company-detailed .content-container .second .comment-box .comment {\n  height: 50px;\n  overflow: auto;\n  background: #dce1e6;\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 4px;\n  color: #052337;\n  font-size: 0.8rem;\n  margin-top: 20px;\n  border: unset;\n  transition: 0.3s background ease-in-out;\n}\n.company-detailed .content-container .second .comment-box .comment:focus {\n  background: #fff;\n}\n.company-detailed .content-container .second .comment-box::after {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: 20px;\n  position: absolute;\n  background: #dce1e6;\n  border-bottom-right-radius: 100%;\n  top: 55px;\n  z-index: -1;\n}\n.company-detailed .content-container .second span {\n  font-size: 12px;\n  padding-top: 22px;\n  display: block;\n}\n.company-detailed .content-container .second .edit-comment a {\n  color: #00D4E3;\n  cursor: pointer;\n}\n.company-detailed textarea {\n  height: 106px;\n  background: #dce1e6;\n  color: #808080;\n}\n.company-detailed .user-photo {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n.left-side {\n  height: 420px;\n}\n.edit-company-modal {\n  position: absolute;\n  width: 76%;\n  height: 102.6%;\n  z-index: 2;\n  background: #fff;\n  top: -32px;\n  left: 0px;\n  border-radius: 4px;\n  display: none;\n  overflow-y: auto;\n}\n.edit-company-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: #ccc;\n  top: 0px;\n  opacity: 0.4;\n  left: 0px;\n  border-radius: 4px;\n}\n.histories .history {\n  display: flex;\n  flex-direction: column;\n  background: #dce1e6;\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 4px;\n  color: #052337;\n  font-size: 0.8rem;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9jb21wYW55LWRldGFpbGVkLW1vZGFsL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxzYWxlLXRvb2xzL3NyY1xcYXBwXFxpbXBvcnRlZC1qb2JzXFxqb2JzLWNvbnRhaW5lclxcY29tcGFueS1kZXRhaWxlZC1tb2RhbFxcY29tcGFueS1kZXRhaWxlZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9jb21wYW55LWRldGFpbGVkLW1vZGFsL2NvbXBhbnktZGV0YWlsZWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtBQ0ZKO0FER0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FUSTtFQVVKLGVBQUE7QUNEUjtBRElRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRlo7QURLSTtFQVlJLDRCQUFBO0FDZFI7QURHUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQWhCO0FES0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNIUjtBRE9ZO0VBQUksY0F2Q0o7RUF1Q3VCLGVBQUE7QUNIbkM7QURLUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNIWjtBRE9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNMWjtBRE9RO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQ0xaO0FEU1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNQWjtBRFNRO0VBQ0ksZ0JBQUE7QUNQWjtBRFFZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDTmhCO0FET2dCO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNMcEI7QURNcUI7RUFDRyxnQkFBQTtBQ0p4QjtBRE9nQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0xwQjtBRFNZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BoQjtBRFVnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDUnBCO0FEYUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWFI7QURhSztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGVBO0VBQ0ksYUFBQTtBQ1pKO0FEZUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZ0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDYko7QURtQks7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNoQlIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL2NvbXBhbnktZGV0YWlsZWQtbW9kYWwvY29tcGFueS1kZXRhaWxlZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrLWN5YW46ICMwMEQ0RTM7XHJcblxyXG5cclxuLmNvbXBhbnktZGV0YWlsZWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgIGxlZnQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWN5YW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktcGhvdG8ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktZGV0YWlscy13cmFwcGVyIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgY29sb3I6ICMwNTIzMzc7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1wZXJzb24ge1xyXG4gICAgICAgIC5Db250YWN0IHtcclxuICAgICAgICAgICAgYSB7IGNvbG9yOiAkZGFyay1jeWFuOyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZC1jbGllbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWJzIHtcclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDUyMzM3O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRhcmstY3lhbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgICAud3JhcHBlci1jb21tZW50cyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc0cHg7ICAgICAgXHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIC5zZWNvbmQge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAuY29tbWVudC1ib3h7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNlMWU2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNTIzMzc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6dW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGJhY2tncm91bmQgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkY2UxZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5lZGl0LWNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMEQ0RTM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RjZTFlNjtcclxuICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICB9XHJcbiAgICAgLnVzZXItcGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgfVxyXG4gIFxyXG59O1xyXG4ubGVmdC1zaWRlIHtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcbi5lZGl0LWNvbXBhbnktbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIGhlaWdodDogMTAyLjYlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0b3A6IC0zMnB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvLyB0cmFuc2l0aW9uOiAzcztcclxufTtcclxuXHJcbi5lZGl0LWNvbXBhbnktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiB9XHJcblxyXG5cclxuXHJcbiAuaGlzdG9yaWVze1xyXG4gICAgIC5oaXN0b3J5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RjZTFlNjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDUyMzM3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgfVxyXG4gfSIsIi5jb21wYW55LWRldGFpbGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbXBhbnktZGV0YWlsZWQgLmVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDIxcHg7XG4gIGNvbG9yOiAjMDBENEUzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFueS1kZXRhaWxlZCAuY29tcGFueS1waG90byBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNvbXBhbnktZGV0YWlsZWQgLmNvbXBhbnktZGV0YWlscy13cmFwcGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn1cbi5jb21wYW55LWRldGFpbGVkIC5jb21wYW55LWRldGFpbHMtd3JhcHBlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29tcGFueS1kZXRhaWxlZCAuY29tcGFueS1kZXRhaWxzLXdyYXBwZXIgc3BhbiBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbXBhbnktZGV0YWlsZWQgcCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzA1MjMzNztcbn1cbi5jb21wYW55LWRldGFpbGVkIC5jb250YWN0LXBlcnNvbiAuQ29udGFjdCBhIHtcbiAgY29sb3I6ICMwMEQ0RTM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21wYW55LWRldGFpbGVkIC5jb250YWN0LXBlcnNvbiAuYWRkLWNsaWVudCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4uY29tcGFueS1kZXRhaWxlZCAudGFicyBoNiB7XG4gIGNvbG9yOiAjMDUyMzM3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tcGFueS1kZXRhaWxlZCAudGFicyAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEQ0RTM7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbi5jb21wYW55LWRldGFpbGVkIC5jb250ZW50LWNvbnRhaW5lciAud3JhcHBlci1jb21tZW50cyB7XG4gIGhlaWdodDogNTc0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29tcGFueS1kZXRhaWxlZCAuY29udGVudC1jb250YWluZXIgLnNlY29uZCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29tcGFueS1kZXRhaWxlZCAuY29udGVudC1jb250YWluZXIgLnNlY29uZCAuY29tbWVudC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY29tcGFueS1kZXRhaWxlZCAuY29udGVudC1jb250YWluZXIgLnNlY29uZCAuY29tbWVudC1ib3ggLmNvbW1lbnQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZGNlMWU2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMDUyMzM3O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xufVxuLmNvbXBhbnktZGV0YWlsZWQgLmNvbnRlbnQtY29udGFpbmVyIC5zZWNvbmQgLmNvbW1lbnQtYm94IC5jb21tZW50OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jb21wYW55LWRldGFpbGVkIC5jb250ZW50LWNvbnRhaW5lciAuc2Vjb25kIC5jb21tZW50LWJveDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNkY2UxZTY7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmNvbXBhbnktZGV0YWlsZWQgLmNvbnRlbnQtY29udGFpbmVyIC5zZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbXBhbnktZGV0YWlsZWQgLmNvbnRlbnQtY29udGFpbmVyIC5zZWNvbmQgLmVkaXQtY29tbWVudCBhIHtcbiAgY29sb3I6ICMwMEQ0RTM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21wYW55LWRldGFpbGVkIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDZweDtcbiAgYmFja2dyb3VuZDogI2RjZTFlNjtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4uY29tcGFueS1kZXRhaWxlZCAudXNlci1waG90byB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxlZnQtc2lkZSB7XG4gIGhlaWdodDogNDIwcHg7XG59XG5cbi5lZGl0LWNvbXBhbnktbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NiU7XG4gIGhlaWdodDogMTAyLjYlO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IC0zMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmVkaXQtY29tcGFueS13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICB0b3A6IDBweDtcbiAgb3BhY2l0eTogMC40O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhpc3RvcmllcyAuaGlzdG9yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICNkY2UxZTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMwNTIzMzc7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: CompanyDetailedModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailedModalComponent", function () { return CompanyDetailedModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var CompanyDetailedModalComponent = /** @class */ (function () {
                function CompanyDetailedModalComponent(salesService) {
                    this.salesService = salesService;
                    this.isCommentesActive = true;
                    this.company = null;
                    this.comments = [];
                    this.isCommentEdit = false;
                    this.isEdit = false;
                }
                CompanyDetailedModalComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.histories = this.salesService.getCompanyHistroy(this.companyId);
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.salesService
                        .getCompanyById(this.companyId), this.salesService
                        .getCompanyComments(this.companyId)).subscribe(function (_a) {
                        var comp = _a[0], comments = _a[1];
                        _this.comments = comments['comments'];
                        _this.company = comp;
                        console.log(comp);
                    });
                };
                ;
                CompanyDetailedModalComponent.prototype.openModal = function (type) {
                    this.modalType = type;
                };
                CompanyDetailedModalComponent.prototype.getRestult = function (e) {
                    var _case = e._case;
                    if (_case === 'CLOSE') {
                        this.modalType = null;
                    }
                };
                CompanyDetailedModalComponent.prototype.addComment = function () {
                    var _this = this;
                    if (this.comment.length > 2) {
                        this.salesService
                            .addComment(this.companyId, this.comment)
                            .subscribe(function (res) {
                            var posted = new Date();
                            _this.comments.push({
                                _id: res,
                                text: _this.comment,
                                created_at: posted.toLocaleDateString()
                            });
                            _this.comment = '';
                        });
                    }
                };
                ;
                CompanyDetailedModalComponent.prototype.editComment = function (id, comment) {
                    if (!comment.hasAttribute('disabled')) {
                        this.salesService
                            .editComment(this.companyId, id, comment.value)
                            .subscribe(function (_) { return comment.setAttribute('disabled', 'disabled'); });
                    }
                    comment.removeAttribute('disabled');
                    comment.focus();
                };
                CompanyDetailedModalComponent.prototype.deleteComment = function (id, idx) {
                    var _this = this;
                    this.salesService
                        .deleteComment(this.companyId, id)
                        .subscribe(function () { return _this.comments.splice(idx, 1); });
                };
                return CompanyDetailedModalComponent;
            }());
            CompanyDetailedModalComponent.ctorParameters = function () { return [
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placeholder', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
            ], CompanyDetailedModalComponent.prototype, "_cp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CompanyDetailedModalComponent.prototype, "companyId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CompanyDetailedModalComponent.prototype, "isEdit", void 0);
            CompanyDetailedModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-detailed-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-detailed-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-detailed-modal.component.scss */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/company-detailed-modal.component.scss")).default]
                })
            ], CompanyDetailedModalComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".custom-modal {\n  z-index: 1;\n  position: absolute;\n  top: 0px;\n  height: 100%;\n}\n.custom-modal .content {\n  z-index: 100000000000000;\n  position: absolute;\n  background: #fff;\n  left: 25%;\n  top: 1%;\n  border-radius: 4px;\n  width: 50%;\n  height: 88vh;\n  overflow-y: scroll;\n}\n.custom-modal .title {\n  background: #052337;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 4px;\n}\n.custom-modal .title a {\n  color: #ccc;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.custom-modal .title h4 {\n  color: white;\n  margin: 0px;\n  font-size: 20px;\n}\n.custom-modal .content-wrapper {\n  background: #fff;\n  width: 100%;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9jb21wYW55LWRldGFpbGVkLW1vZGFsL2NvbnRhY3QtcGVyc29uLW1vZGFsL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxzYWxlLXRvb2xzL3NyY1xcYXBwXFxpbXBvcnRlZC1qb2JzXFxqb2JzLWNvbnRhaW5lclxcY29tcGFueS1kZXRhaWxlZC1tb2RhbFxcY29udGFjdC1wZXJzb24tbW9kYWxcXGNvbnRhY3QtcGVyc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL2NvbXBhbnktZGV0YWlsZWQtbW9kYWwvY29udGFjdC1wZXJzb24tbW9kYWwvY29udGFjdC1wZXJzb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQVlBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RSO0FESlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ01aO0FESlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNNWjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9jb21wYW55LWRldGFpbGVkLW1vZGFsL2NvbnRhY3QtcGVyc29uLW1vZGFsL2NvbnRhY3QtcGVyc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDAwMDAwMDAwMDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICB0b3A6IDElO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogODh2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwNTIzMzc7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB9XHJcblxyXG59IiwiLmN1c3RvbS1tb2RhbCB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jdXN0b20tbW9kYWwgLmNvbnRlbnQge1xuICB6LWluZGV4OiAxMDAwMDAwMDAwMDAwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGVmdDogMjUlO1xuICB0b3A6IDElO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogODh2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmN1c3RvbS1tb2RhbCAudGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjMDUyMzM3O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmN1c3RvbS1tb2RhbCAudGl0bGUgYSB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b20tbW9kYWwgLnRpdGxlIGg0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmN1c3RvbS1tb2RhbCAuY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: ContactPersonModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersonModalComponent", function () { return ContactPersonModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            /* harmony import */ var src_app_shared_register_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/register.validator */ "./src/app/shared/register.validator.ts");
            /* harmony import */ var src_app_utiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utiles */ "./src/app/utiles.ts");
            var ContactPersonModalComponent = /** @class */ (function () {
                function ContactPersonModalComponent(fb, salesService) {
                    this.fb = fb;
                    this.salesService = salesService;
                    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.listOfCountries = [];
                    this.submitted = false;
                    this.YEARS = src_app_utiles__WEBPACK_IMPORTED_MODULE_5__["YEARS"];
                    this.MONTHS = src_app_utiles__WEBPACK_IMPORTED_MODULE_5__["MONTHS"];
                    this.DAYS = src_app_utiles__WEBPACK_IMPORTED_MODULE_5__["DAYS"];
                    this.contactForm = fb.group({
                        first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        departament: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                        country: [this.salesService.currentCountry, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        gender: ['male'],
                        year: [""],
                        month: [""],
                        day: [""],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                src_app_shared_register_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidation"].detectUppercase(),
                                src_app_shared_register_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidation"].detectNumber(),
                                src_app_shared_register_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidation"].detectLength(7),
                            ])],
                        phone: fb.group({
                            country_code: [""],
                            number: [""],
                        })
                    });
                }
                Object.defineProperty(ContactPersonModalComponent.prototype, "ctCtrls", {
                    get: function () {
                        return this.contactForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactPersonModalComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.countryCodes = this.salesService.getListOfCountryCodes();
                    this.salesService.getCountries()
                        .subscribe(function (contries) { return _this.listOfCountries = contries; });
                };
                ContactPersonModalComponent.prototype.close = function () { this.result.emit({ _case: 'CLOSE' }); };
                ContactPersonModalComponent.prototype.save = function () {
                    var _this = this;
                    this.submitted = true;
                    if (this.contactForm.invalid)
                        return;
                    var _a = this.contactForm.value, day = _a.day, month = _a.month, year = _a.year;
                    var birthday;
                    if (day !== "" && month !== "" && year !== "") {
                        birthday = day + "-" + month + "-" + year;
                    }
                    this.salesService
                        .editCompanyContactInfo(this.data._id, Object.assign({}, this.contactForm.value, { birthday: birthday }))
                        .subscribe(function () { return _this.close(); }, function (err) { return console.log(err); }, function () { return _this.close(); });
                };
                ;
                return ContactPersonModalComponent;
            }());
            ContactPersonModalComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ContactPersonModalComponent.prototype, "result", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ContactPersonModalComponent.prototype, "data", void 0);
            ContactPersonModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact-person-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-person-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-person-modal.component.scss */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component.scss")).default]
                })
            ], ContactPersonModalComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.scss ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".edit-company h4 {\n  margin-bottom: 1.8rem;\n  font-size: 1.1rem;\n  color: #052337;\n}\n.edit-company p {\n  color: #052337;\n  font-weight: 500px;\n}\n.edit-company span {\n  color: #808080;\n}\n.edit-company .field:not(:first-child) {\n  margin-top: 1rem;\n}\n.edit-company img {\n  cursor: pointer;\n}\n.edit-company button {\n  margin-top: 10px;\n}\n.star {\n  color: #00D4E3 !important;\n}\n.toggled {\n  background: #dce1e6;\n  padding: 15px;\n  border-radius: 4px;\n}\n.close-god {\n  cursor: pointer;\n  color: #dce1e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9jb21wYW55LWRldGFpbGVkLW1vZGFsL2VkaXQtY29tcG5heS1kZXRhaWxlZC1tb2RhbC9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcam9icy1jb250YWluZXJcXGNvbXBhbnktZGV0YWlsZWQtbW9kYWxcXGVkaXQtY29tcG5heS1kZXRhaWxlZC1tb2RhbFxcZWRpdC1jb21wbmF5LWRldGFpbGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL2NvbXBhbnktZGV0YWlsZWQtbW9kYWwvZWRpdC1jb21wbmF5LWRldGFpbGVkLW1vZGFsL2VkaXQtY29tcG5heS1kZXRhaWxlZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxjQUFBO0FDQVI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURJSTtFQUNJLGVBQUE7QUNGUjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBREtBO0VBQ0kseUJBQUE7QUNGSjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydGVkLWpvYnMvam9icy1jb250YWluZXIvY29tcGFueS1kZXRhaWxlZC1tb2RhbC9lZGl0LWNvbXBuYXktZGV0YWlsZWQtbW9kYWwvZWRpdC1jb21wbmF5LWRldGFpbGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtY29tcGFueSB7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDUyMzM3O1xyXG4gICAgfTtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMDUyMzM3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgfVxyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLnN0YXIge1xyXG4gICAgY29sb3I6ICMwMEQ0RTMgIWltcG9ydGFudDtcclxufVxyXG4udG9nZ2xlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNlMWU2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uY2xvc2UtZ29kIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZGNlMWU2O1xyXG59IiwiLmVkaXQtY29tcGFueSBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMDUyMzM3O1xufVxuLmVkaXQtY29tcGFueSBwIHtcbiAgY29sb3I6ICMwNTIzMzc7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbn1cbi5lZGl0LWNvbXBhbnkgc3BhbiB7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuLmVkaXQtY29tcGFueSAuZmllbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmVkaXQtY29tcGFueSBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdC1jb21wYW55IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdGFyIHtcbiAgY29sb3I6ICMwMEQ0RTMgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZWQge1xuICBiYWNrZ3JvdW5kOiAjZGNlMWU2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jbG9zZS1nb2Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZGNlMWU2O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: EditCompnayDetailedModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompnayDetailedModalComponent", function () { return EditCompnayDetailedModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var EditCompnayDetailedModalComponent = /** @class */ (function () {
                function EditCompnayDetailedModalComponent(fb, salesService) {
                    var _this = this;
                    this.fb = fb;
                    this.salesService = salesService;
                    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.listOfCountries = [];
                    this.listOfIndustries = [];
                    this.searchCity = function (text$) { return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return term.length > 1 ? _this.getCities(term) : []; })); };
                    this.cityFormatter = function (city) { return city.city; };
                    this.editForm = fb.group({
                        name: [''],
                        emails: fb.array([
                            fb.control("", { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]) })
                        ]),
                        addresses: fb.group({
                            apartament: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            location: fb.group({
                                country: [''],
                                city: ['']
                            }),
                            street: [''],
                        }),
                        websites: fb.array([
                            fb.control("")
                        ]),
                        vat: [''],
                        foundation_date: [''],
                        industry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        company_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        phones: fb.array([
                            fb.group({
                                country_code: [''],
                                number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                            })
                        ]),
                        business_hours: [],
                    });
                }
                Object.defineProperty(EditCompnayDetailedModalComponent.prototype, "editCtrls", {
                    get: function () {
                        return this.editForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                EditCompnayDetailedModalComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.countryCodes = this.salesService.getListOfCountryCodes();
                    this.salesService.getCountries()
                        .subscribe(function (contries) { return _this.listOfCountries = contries; });
                    this.salesService.getIndustries()
                        .subscribe(function (industries) { return _this.listOfIndustries = industries; });
                    this.patchData();
                };
                ;
                EditCompnayDetailedModalComponent.prototype.patchData = function () {
                    if (this.data) {
                        this.editForm.patchValue({
                            name: this.data.name,
                            emails: this.data.emails,
                            addresses: this.data.addresses,
                            websites: this.data.websites,
                            vat: this.data.vat,
                            foundation_date: this.data.foundation_date,
                            industry: this.data.industry,
                            company_type: this.data.company_type,
                            phones: this.data.phones,
                            business_hours: this.data.business_hours,
                        });
                    }
                };
                EditCompnayDetailedModalComponent.prototype.close = function () { this.result.emit({ _case: 'close' }); };
                EditCompnayDetailedModalComponent.prototype.addPhone = function () {
                    var phones = this.editForm.get('phones');
                    phones.push(this.fb.group({ phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }));
                };
                EditCompnayDetailedModalComponent.prototype.getListOfCities = function (e) { };
                ;
                EditCompnayDetailedModalComponent.prototype.getCities = function (term) {
                    return this.salesService
                        .getCityByName(term)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (cities) {
                        return cities.filter(function (c) { return c.city.toLowerCase()
                            .indexOf(term.toLowerCase()) > -1; }).slice(0, 10);
                    }));
                };
                EditCompnayDetailedModalComponent.prototype.getWorkingHour = function (hours) {
                    if (hours) {
                        this.editForm
                            .get('business_hours')
                            .setValue(hours[0]);
                    }
                };
                EditCompnayDetailedModalComponent.prototype.submit = function () {
                    var _this = this;
                    this.salesService
                        .editCompany(this.data._id, this.editForm.value)
                        .subscribe(function () {
                        var user = _this.salesService.user;
                        _this.salesService
                            .addCompanyHistory(_this.data._id, user.username + " <b>Company information updated</b>")
                            .subscribe(function () { return _this.close(); });
                    });
                };
                return EditCompnayDetailedModalComponent;
            }());
            EditCompnayDetailedModalComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], EditCompnayDetailedModalComponent.prototype, "result", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], EditCompnayDetailedModalComponent.prototype, "data", void 0);
            EditCompnayDetailedModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-compnay-detailed-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-compnay-detailed-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-compnay-detailed-modal.component.scss */ "./src/app/imported-jobs/jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component.scss")).default]
                })
            ], EditCompnayDetailedModalComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/jobs-container.component.scss": 
        /*!****************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/jobs-container.component.scss ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 225px;\n  background-color: #052337;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  min-height: 95vh;\n}\n.sidebar ul {\n  list-style: none;\n  padding: 0px;\n  margin-top: 15px;\n}\n.sidebar li {\n  color: #808080;\n  font-size: 1rem;\n  line-height: 40px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n.sidebar li:hover {\n  background-color: #001428;\n}\n.sidebar li a:hover {\n  color: white;\n  text-decoration: none;\n}\n.sidebar img {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.pointers {\n  transform: rotate(90deg);\n}\n.job {\n  padding-left: 35px;\n}\n.menu li {\n  padding-left: 93px;\n}\n.router-link-active {\n  color: #00D4E3 !important;\n  background: #264361 !important;\n}\n.here ::ng-deep a {\n  color: #00D4E3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcam9icy1jb250YWluZXJcXGpvYnMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL2pvYnMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0E7QURBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENJO0VBQ0sseUJBQUE7QUNDVDtBRENJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREdBO0VBQ0ksd0JBQUE7QUNBSjtBREVBO0VBQ0ksa0JBQUE7QUNDSjtBREdJO0VBQ0ksa0JBQUE7QUNBUjtBRElBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtBQ0RKO0FEUUk7RUFDSSxjQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL2pvYnMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxud2lkdGg6MTAwJTtcclxubWluLXdpZHRoOiAyMjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjojMDUyMzM3O1xyXG51c2VyLXNlbGVjdDogbm9uZTtcclxubWluLWhlaWdodDogOTV2aDtcclxuICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowcHg7ICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDsgIFxyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIGNvbG9yOiM4MDgwODA7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIGxpOmhvdmVye1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDE0Mjg7XHJcbiAgICB9XHJcbiAgICBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlcnMge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59O1xyXG4uam9iIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxufTtcclxuXHJcbi5tZW51IHtcclxuICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDkzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMEQ0RTMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjQzNjEgIWltcG9ydGFudDtcclxufTtcclxuLml0ZW1zIHtcclxuICAgIFxyXG59XHJcblxyXG4uaGVyZSB7XHJcbiAgICA6Om5nLWRlZXAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMEQ0RTM7XHJcbiAgICB9XHJcbn0iLCIuc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMzM3O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWluLWhlaWdodDogOTV2aDtcbn1cbi5zaWRlYmFyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNpZGViYXIgbGkge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNpZGViYXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDI4O1xufVxuLnNpZGViYXIgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZGViYXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBvaW50ZXJzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uam9iIHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xufVxuXG4ubWVudSBsaSB7XG4gIHBhZGRpbmctbGVmdDogOTNweDtcbn1cblxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDBENEUzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyNjQzNjEgIWltcG9ydGFudDtcbn1cblxuLmhlcmUgOjpuZy1kZWVwIGEge1xuICBjb2xvcjogIzAwRDRFMztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/jobs-container.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/jobs-container.component.ts ***!
          \**************************************************************************/
        /*! exports provided: JobsContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsContainerComponent", function () { return JobsContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _select_country_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-country/model */ "./src/app/imported-jobs/select-country/model.ts");
            /* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/imported-jobs/jobs-container/notification/notification.component.ts");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            var JobsContainerComponent = /** @class */ (function () {
                function JobsContainerComponent(activatedRoute, componentFactoryResolver, salesService, router) {
                    this.activatedRoute = activatedRoute;
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.salesService = salesService;
                    this.router = router;
                    this.params = null;
                    this.SELECT_JOB = _select_country_model__WEBPACK_IMPORTED_MODULE_3__["SELECT_JOB"];
                    this.job = null;
                }
                JobsContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.params = this.activatedRoute.snapshot.queryParams;
                    this.job = this.SELECT_JOB.filter(function (job) { return job.title === _this.params.job; })[0];
                    this.salesService
                        .$notification.subscribe(function (data) {
                        if (data)
                            _this.getRestult(data);
                    });
                    this.salesService.currentCountry = this.params["abbr"];
                };
                JobsContainerComponent.prototype.getRestult = function (data) {
                    var _this = this;
                    var cp = this.componentFactoryResolver.resolveComponentFactory(_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]);
                    var cpRef = this._cp.createComponent(cp);
                    var messsage = data.messsage, link = data.link;
                    cpRef.instance
                        .message = messsage;
                    cpRef.instance
                        .navigate = function () { _this.router.navigate(link.split('/'), { queryParamsHandling: 'merge' }); };
                    setTimeout(function () { return _this._cp.clear(); }, 4000);
                };
                return JobsContainerComponent;
            }());
            JobsContainerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placeholder', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
            ], JobsContainerComponent.prototype, "_cp", void 0);
            JobsContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-jobs-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/jobs-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobs-container.component.scss */ "./src/app/imported-jobs/jobs-container/jobs-container.component.scss")).default]
                })
            ], JobsContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".companies-info {\n  padding: 10px;\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 10px;\n}\n.companies-info .companies-title h5 {\n  font-size: 16px;\n}\n.companies-info .companies-subtitle {\n  font-size: 18px;\n  font-weight: bold;\n}\n.companies-info .region-list ul {\n  list-style: none;\n  padding: 0;\n}\n.companies-info .region-list li a {\n  line-height: 40px;\n}\n.companies-table {\n  font-size: 14px;\n}\n.companies-table thead {\n  background-color: #052337;\n  color: white;\n}\n.companies-table .company-icon {\n  width: 50px;\n  height: 50px;\n}\n.companies-table .company-icon-user img {\n  border: none;\n  border-radius: 50px;\n  width: 50px;\n  height: 50px;\n}\n.companies-list-header {\n  background-color: #264361;\n  border: none;\n  color: white;\n  border-radius: 5px;\n  list-style: none;\n  font-size: 13px;\n}\n.companies-list {\n  font-size: 13px;\n}\n.companies-search-bar {\n  width: 30%;\n  position: relative;\n}\n.companies-search-bar input {\n  padding-right: 36px;\n}\n.companies-search-bar img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.companies-wrapper {\n  overflow-x: scroll;\n}\n.companies-wrapper .companies {\n  min-width: 1200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9uZXctbGVhZC9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcam9icy1jb250YWluZXJcXG5ldy1sZWFkXFxuZXctbGVhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9uZXctbGVhZC9uZXctbGVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFBO0VBQ0ksZUFBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURLQTtFQUNJLGVBQUE7QUNGSjtBRElZO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRlo7QURLZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0hwQjtBREt3QjtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSDVCO0FEU1k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOaEI7QURTWTtFQUNJLGVBQUE7QUNOaEI7QURjQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEWUk7RUFDSSxtQkFBQTtBQ1ZSO0FEWUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDVlI7QURjQTtFQUNJLGtCQUFBO0FDWEo7QURZSTtFQUNJLGlCQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL25ldy1sZWFkL25ldy1sZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbmllcy1pbmZve1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4uY29tcGFuaWVzLXRpdGxlIGg1e1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbn1cclxuLmNvbXBhbmllcy1zdWJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4ucmVnaW9uLWxpc3R7XHJcbiAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowOyAgIFxyXG4gICAgfVxyXG4gICAgbGkgYXtcclxuICAgICAgICBsaW5lLWhlaWdodDo0MHB4XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgXHJcblxyXG4uY29tcGFuaWVzLXRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICBcclxuICAgICAgICAgICAgdGhlYWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzA1MjMzNztcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAuY29tcGFueS1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wYW55LWljb24tdXNlciBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5jb21wYW5pZXMtbGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNjQzNjE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4OyAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21wYW5pZXMtbGlzdHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgICAgICAgLy8gIGltZ3tcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuLmNvbXBhbmllcy1zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiAzMCU7ICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn07XHJcblxyXG4uY29tcGFuaWVzLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLmNvbXBhbmllcyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbiAgICB9XHJcbn0iLCIuY29tcGFuaWVzLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29tcGFuaWVzLWluZm8gLmNvbXBhbmllcy10aXRsZSBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb21wYW5pZXMtaW5mbyAuY29tcGFuaWVzLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb21wYW5pZXMtaW5mbyAucmVnaW9uLWxpc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbXBhbmllcy1pbmZvIC5yZWdpb24tbGlzdCBsaSBhIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5jb21wYW5pZXMtdGFibGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29tcGFuaWVzLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjMzNztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbXBhbmllcy10YWJsZSAuY29tcGFueS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jb21wYW5pZXMtdGFibGUgLmNvbXBhbnktaWNvbi11c2VyIGltZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbXBhbmllcy1saXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQzNjE7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbXBhbmllcy1saXN0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29tcGFuaWVzLXNlYXJjaC1iYXIge1xuICB3aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29tcGFuaWVzLXNlYXJjaC1iYXIgaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuLmNvbXBhbmllcy1zZWFyY2gtYmFyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmNvbXBhbmllcy13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLmNvbXBhbmllcy13cmFwcGVyIC5jb21wYW5pZXMge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: NewLeadComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLeadComponent", function () { return NewLeadComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/app-modal/app-modal.component */ "./src/app/shared/components/app-modal/app-modal.component.ts");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            var NewLeadComponent = /** @class */ (function () {
                function NewLeadComponent(salesService) {
                    this.salesService = salesService;
                    this.companies = null;
                    this.amount = 0;
                    this.loading = true;
                    this.page = 0;
                    this.recivers = [];
                }
                NewLeadComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.salesService.getCompanies()
                        .subscribe(function (data) { _this.companies = data; _this.loading = false; console.log(_this.companies); });
                };
                NewLeadComponent.prototype.openModal = function (type, company) {
                    this.modalType = type;
                    this.selectedCompanyID = company["_id"];
                    switch (type) {
                        case "detailed":
                            this._modal.title = " ";
                            this._modal.size = "xl";
                            break;
                        default:
                            this._modal.title = type;
                            if (company["emails"]) {
                                this.recivers = company["emails"];
                            }
                            break;
                    }
                    this._modal.open();
                };
                ;
                NewLeadComponent.prototype.closeModal = function () {
                    var _this = this;
                    this._modal.close();
                    this.modalType = null;
                    this.salesService
                        .changeCompanyStatus(this.selectedCompanyID, "pre_sale")
                        .subscribe(function () {
                        _this.salesService.$notification.next({
                            messsage: 'The company is moved to, <a style="color:#00D4E3">Pre-Sales</a> Please, follow the process there.',
                            link: '/imported-jobs/jobs/pre-sales'
                        });
                    });
                };
                NewLeadComponent.prototype.changePage = function (pagination) {
                    var _this = this;
                    var after = --pagination * 15;
                    this.loading = true;
                    this.salesService.getCompanies(after)
                        .subscribe(function (data) { _this.companies = data; _this.loading = false; });
                };
                ;
                return NewLeadComponent;
            }());
            NewLeadComponent.ctorParameters = function () { return [
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_2__["AppModalComponent"], { static: false })
            ], NewLeadComponent.prototype, "_modal", void 0);
            NewLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-lead',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-lead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-lead.component.scss */ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.scss")).default]
                })
            ], NewLeadComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/notification/notification.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/notification/notification.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: NotificationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () { return NotificationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotificationComponent = /** @class */ (function () {
                function NotificationComponent() {
                    this.message = false || 'Title';
                }
                NotificationComponent.prototype.ngOnInit = function () { };
                ;
                NotificationComponent.prototype.navigate = function (e) {
                };
                ;
                return NotificationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NotificationComponent.prototype, "message", void 0);
            NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notification',
                    template: "\n       <div class='notifications' \n            (click)='navigate($event)' [innerHTML]='message'>\n          {{ message }}          \n       </div>\n  ",
                    styles: ["\n       .notifications {\n         background-color: #fff;\n         position: absolute;\n         padding: 15px 16px;\n         bottom: 10px;\n         border-radius: 4px;\n         left: 15px;\n         cursor: pointer;\n         color: #808080;\n         max-width: 292px;\n        }\n  "]
                })
            ], NotificationComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".companies-search-bar {\n  width: 30%;\n  position: relative;\n}\n.companies-search-bar input {\n  padding-right: 36px;\n}\n.companies-search-bar img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.companies-list {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9wcmUtc2FsZXMvQzpcXFVzZXJzXFxSb2JlcnRcXERlc2t0b3BcXHNhbGUtdG9vbHMvc3JjXFxhcHBcXGltcG9ydGVkLWpvYnNcXGpvYnMtY29udGFpbmVyXFxwcmUtc2FsZXNcXHByZS1zYWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9wcmUtc2FsZXMvcHJlLXNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFUjtBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9wcmUtc2FsZXMvcHJlLXNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbmllcy1zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiAzMCU7ICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmNvbXBhbmllcy1saXN0ICB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuY29tcGFuaWVzLXNlYXJjaC1iYXIge1xuICB3aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29tcGFuaWVzLXNlYXJjaC1iYXIgaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuLmNvbXBhbmllcy1zZWFyY2gtYmFyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmNvbXBhbmllcy1saXN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: PreSalesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreSalesComponent", function () { return PreSalesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/app-modal/app-modal.component */ "./src/app/shared/components/app-modal/app-modal.component.ts");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            var PreSalesComponent = /** @class */ (function () {
                function PreSalesComponent(salesService) {
                    this.salesService = salesService;
                    this.companies = null;
                    this.amount = 0;
                    this.loading = true;
                    this.page = 0;
                }
                PreSalesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.salesService.getCompanies(0, "pre_sale")
                        .subscribe(function (data) { _this.companies = data; _this.loading = false; });
                };
                PreSalesComponent.prototype.open = function (compId) {
                    this._modal.open();
                    this._modal.title = ' ';
                    this.modalType = 'detailed';
                    this.companyId = compId;
                };
                ;
                PreSalesComponent.prototype.changePage = function (pagination) {
                    var _this = this;
                    console.log('here');
                    var after = --pagination * 15;
                    this.loading = true;
                    this.salesService.getCompanies(after)
                        .subscribe(function (data) { _this.companies = data; _this.loading = false; });
                };
                ;
                return PreSalesComponent;
            }());
            PreSalesComponent.ctorParameters = function () { return [
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_2__["AppModalComponent"], { static: false })
            ], PreSalesComponent.prototype, "_modal", void 0);
            PreSalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pre-sales',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pre-sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pre-sales.component.scss */ "./src/app/imported-jobs/jobs-container/pre-sales/pre-sales.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../new-lead/new-lead.component.scss */ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.scss")).default]
                })
            ], PreSalesComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/sales/sales.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/sales/sales.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".companies-search-bar {\n  width: 30%;\n  position: relative;\n}\n.companies-search-bar input {\n  padding-right: 36px;\n}\n.companies-search-bar img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9zYWxlcy9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcam9icy1jb250YWluZXJcXHNhbGVzXFxzYWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9zYWxlcy9zYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnRlZC1qb2JzL2pvYnMtY29udGFpbmVyL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbmllcy1zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiAzMCU7ICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuICAgICIsIi5jb21wYW5pZXMtc2VhcmNoLWJhciB7XG4gIHdpZHRoOiAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb21wYW5pZXMtc2VhcmNoLWJhciBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG4uY29tcGFuaWVzLXNlYXJjaC1iYXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/sales/sales.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/sales/sales.component.ts ***!
          \***********************************************************************/
        /*! exports provided: SalesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function () { return SalesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SalesComponent = /** @class */ (function () {
                function SalesComponent() {
                }
                SalesComponent.prototype.ngOnInit = function () {
                };
                return SalesComponent;
            }());
            SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sales',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/sales/sales.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales.component.scss */ "./src/app/imported-jobs/jobs-container/sales/sales.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../new-lead/new-lead.component.scss */ "./src/app/imported-jobs/jobs-container/new-lead/new-lead.component.scss")).default]
                })
            ], SalesComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".send-email label {\n  width: 79px;\n  font-weight: 400;\n}\n.send-email span {\n  margin-right: 10px;\n  background-color: #dce1e6;\n  color: #052337;\n  border-radius: 8px;\n  padding: 7px 15px;\n  white-space: nowrap;\n}\n.send-email .welcome-screen {\n  position: absolute;\n  width: 95%;\n  top: 16px;\n  left: 2.5%;\n  height: 94px;\n}\n.send-email textarea {\n  padding-left: 2.5%;\n  padding-right: 2.5%;\n  padding-top: 129px;\n  color: #808080;\n}\n.emails {\n  display: flex;\n  justify-content: center;\n}\n.emails .email {\n  position: relative;\n}\n.emails .email button {\n  position: absolute;\n  top: -5px;\n  right: -5%;\n  color: inherit;\n  outline: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9zZW5kLWVtYWlsLW1vZGFsL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxzYWxlLXRvb2xzL3NyY1xcYXBwXFxpbXBvcnRlZC1qb2JzXFxqb2JzLWNvbnRhaW5lclxcc2VuZC1lbWFpbC1tb2RhbFxcc2VuZC1lbWFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9zZW5kLWVtYWlsLW1vZGFsL3NlbmQtZW1haWwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVHO0VBQ0ssa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQVI7QURFRztFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBUDtBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZWQtam9icy9qb2JzLWNvbnRhaW5lci9zZW5kLWVtYWlsLW1vZGFsL3NlbmQtZW1haWwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1lbWFpbCB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDc5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCA7XHJcbiAgICB9XHJcbiAgICBzcGFuICB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2UxZTY7XHJcbiAgICAgICAgY29sb3I6ICMwNTIzMzc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgIC53ZWxjb21lLXNjcmVlbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDIuNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA5NHB4O1xyXG4gICB9O1xyXG4gICB0ZXh0YXJlYSB7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xyXG4gICAgICAgcGFkZGluZy10b3A6IDEyOXB4O1xyXG4gICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgIH1cclxufSAgICBcclxuXHJcbi5lbWFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmVtYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi5zZW5kLWVtYWlsIGxhYmVsIHtcbiAgd2lkdGg6IDc5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2VuZC1lbWFpbCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMWU2O1xuICBjb2xvcjogIzA1MjMzNztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zZW5kLWVtYWlsIC53ZWxjb21lLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk1JTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAyLjUlO1xuICBoZWlnaHQ6IDk0cHg7XG59XG4uc2VuZC1lbWFpbCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMi41JTtcbiAgcGFkZGluZy1yaWdodDogMi41JTtcbiAgcGFkZGluZy10b3A6IDEyOXB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmVtYWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmVtYWlscyAuZW1haWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZW1haWxzIC5lbWFpbCBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgcmlnaHQ6IC01JTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG91dGxpbmU6IHVuc2V0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: SendEmailModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailModalComponent", function () { return SendEmailModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            var SendEmailModalComponent = /** @class */ (function () {
                function SendEmailModalComponent(salesService, f) {
                    var _this = this;
                    this.salesService = salesService;
                    this.f = f;
                    this.submitted = false;
                    this.recivers = [];
                    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.emails = [];
                    this.remove = function (i) { return _this.emails.splice(i, 1); };
                    this.emailFormGroup = f.group({
                        subject: ['RightNao'],
                        text: ["Default Text , Michael will provide it", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                }
                SendEmailModalComponent.prototype.ngOnInit = function () {
                    this.emails = this.recivers.slice();
                };
                ;
                SendEmailModalComponent.prototype.sendEmail = function () {
                    var _this = this;
                    this.submitted = true;
                    if (this.emailFormGroup.invalid)
                        return;
                    this.salesService
                        .sendEmail(Object.assign({}, this.emailFormGroup.value, { recieviers: this.emails }))
                        .subscribe(function () {
                        _this.result.emit();
                        _this.salesService
                            .changeCompanyStatus(_this.companyID, "pre_sale")
                            .subscribe();
                    }, function (err) { return _this.result.emit(); });
                };
                ;
                SendEmailModalComponent.prototype.addEmail = function (input, e) {
                    e.preventDefault();
                    var value = input.value;
                    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/gmi;
                    if (value !== "" && emailRegex.test(value)) {
                        this.emails.push(value);
                        input.classList.remove('is-invalid');
                        input.value = "";
                    }
                    else {
                        input.classList.add("is-invalid");
                    }
                    return false;
                };
                return SendEmailModalComponent;
            }());
            SendEmailModalComponent.ctorParameters = function () { return [
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SendEmailModalComponent.prototype, "recivers", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SendEmailModalComponent.prototype, "companyID", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SendEmailModalComponent.prototype, "result", void 0);
            SendEmailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-send-email-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./send-email-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./send-email-modal.component.scss */ "./src/app/imported-jobs/jobs-container/send-email-modal/send-email-modal.component.scss")).default]
                })
            ], SendEmailModalComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/select-country/model.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/imported-jobs/select-country/model.ts ***!
          \*******************************************************/
        /*! exports provided: COUNTRIES, SELECT_JOB */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function () { return COUNTRIES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_JOB", function () { return SELECT_JOB; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var COUNTRIES = [
                {
                    id: "europe",
                    name: "Europe",
                    img: 'assets/img/flags/europe.png',
                    list: [
                        {
                            id: "north_west_europe",
                            name: "North-West Europe",
                            list: [
                                { name: "Germany", id: "DE", img: "assets/img/flags/Mask Group 14.svg" },
                                { name: "United Kingdom", id: "GB", img: "assets/img/flags/Mask Group 15.svg" },
                                { name: "France", id: "FR", img: "assets/img/flags/Mask Group 16.svg" },
                                { name: "Netherlands", id: "NL", img: "assets/img/flags/Mask Group 18.svg" },
                                { name: "Belgium", id: "BL", img: "assets/img/flags/Mask Group 17.svg" },
                                { name: "Austria", id: "AT", img: "assets/img/flags/Mask Group 20.svg" },
                                { name: "Switzerland", id: "CH", img: "assets/img/flags/Mask Group 21.svg" },
                                { name: "Ireland", id: "IE", img: "assets/img/flags/Mask Group 19.svg" },
                                { name: "Luxembourg", id: "LU", img: "assets/img/flags/Mask Group 24.svg" },
                                { name: "Iceland", id: "IS", img: "assets/img/flags/Mask Group 22.svg" },
                                { name: "Monaco", id: "MC", img: "assets/img/flags/Mask Group 23.svg" },
                                { name: "Liechtenstein", id: "LI", img: "assets/img/flags/Mask Group 25.svg" }
                            ]
                        },
                        {
                            id: "south_west_europe",
                            name: "South-West Europe",
                            list: [
                                { name: "Italy", id: "IT", img: "assets/img/flags/Mask Group 26.svg" },
                                { name: "Spain", id: "ES", img: "assets/img/flags/Mask Group 27.svg" },
                                { name: "Portugal", id: "PT", img: "assets/img/flags/Mask Group 28.svg" },
                                { name: "Slovenia", id: "SI", img: "assets/img/flags/Mask Group 29.svg" },
                                { name: "Andorra", id: "AD", img: "assets/img/flags/Mask Group 31.svg" },
                                { name: "San Marino", id: "SM", img: "assets/img/flags/Mask Group 30.svg" },
                                { name: "Holy See", id: "", img: "assets/img/flags/Mask Group 33.svg" },
                            ]
                        },
                        {
                            id: "south_east_europe",
                            name: "South-East Europe",
                            list: [
                                { name: "Romania", id: "RO", img: "assets/img/flags/Mask Group 38.svg" },
                                { name: "Greece", id: "GR", img: "assets/img/flags/Mask Group 39.svg" },
                                { name: "Serbia", id: "RS", img: "assets/img/flags/Mask Group 40.svg" },
                                { name: "Bulgaria", id: "BG", img: "assets/img/flags/Mask Group 41.svg" },
                                { name: "Croatia", id: "HR", img: "assets/img/flags/Mask Group 42.svg" },
                                { name: "Moldova", id: "MD", img: "assets/img/flags/Mask Group 44.svg" },
                                { name: "Bosnia and Herzegovina", id: "BA", img: "assets/img/flags/Group 3.svg" },
                                { name: "Albania", id: "AL", img: "assets/img/flags/Mask Group 43.svg" },
                                { name: "North Macedonia", id: "", img: "assets/img/flags/Mask Group 34.svg" },
                                { name: "Cyprus", id: "CY", img: "assets/img/flags/Mask Group 35.svg" },
                                { name: "Montenegro", id: "ME", img: "assets/img/flags/Mask Group 36.svg" },
                                { name: "Malta", id: "MT", img: "assets/img/flags/Mask Group 37.svg" }
                            ]
                        },
                        {
                            id: "north_east_europe",
                            name: "North-East Europe",
                            list: [
                                { name: "Poland", id: "PL", img: "assets/img/flags/Mask Group 49.svg" },
                                { name: "Czech Republic (Czechia)", id: "CZ", img: "assets/img/flags/Mask Group 45.svg" },
                                { name: "Hungary", id: "HU", img: "assets/img/flags/Mask Group 51.svg" },
                                { name: "Slovakia", id: "SK", img: "assets/img/flags/Mask Group 29.svg" },
                                { name: "Lithuania", id: "LT", img: "assets/img/flags/Mask Group 47.svg" },
                                { name: "Latvia", id: "LV", img: "assets/img/flags/Mask Group 48.svg" },
                                { name: "Estonia", id: "EE", img: "assets/img/flags/Mask Group 46.svg" }
                            ]
                        },
                        {
                            id: "northern_europe",
                            name: "Northern Europe",
                            list: [
                                { name: "Sweden", id: "SE", img: "assets/img/flags/Mask Group 52.svg" },
                                { name: "Denmark", id: "DK", img: "assets/img/flags/Mask Group 53.svg" },
                                { name: "Finland", id: "FI", img: "assets/img/flags/Mask Group 54.svg" },
                                { name: "Norway", id: "NO", img: "assets/img/flags/Mask Group 55.svg" }
                            ]
                        }
                    ]
                },
                {
                    id: "russia_cis_middle_east",
                    name: "Russia, CIS & Middle East",
                    img: 'assets/img/flags/Russia-2499x1406.png',
                    list: [
                        {
                            id: "russia",
                            name: "Russia & CIS",
                            list: [
                                { name: "Russia", id: "RU", img: "assets/img/flags/Mask Group 3.svg" },
                                { name: "Ukraine", id: "UA", img: "assets/img/flags/Mask Group 12.svg" },
                                { name: "Afghanistan", id: "UZ", img: "assets/img/flags/Mask Group 11.svg" },
                                { name: "Uzbekistan", id: "UZ", img: "assets/img/flags/Mask Group 9.svg" },
                                { name: "Kazakhstan", id: "KZ", img: "assets/img/flags/Mask Group 7.svg" },
                                { name: "Azerbaijan", id: "AZ", img: "assets/img/flags/Mask Group 5.svg" },
                                { name: "Tajikistan", id: "TJ", img: "assets/img/flags/Mask Group 2.svg" },
                                { name: "Belarus", id: "BY", img: "assets/img/flags/Mask Group 13.svg" },
                                { name: "Kyrgyzstan", id: "KG", img: "assets/img/flags/Mask Group 8.svg" },
                                { name: "Turkmenistan", id: "TM", img: "assets/img/flags/Mask Group 10.svg" },
                                { name: "Georgia", id: "GE", img: "assets/img/flags/Mask Group 6.svg" },
                                { name: "Armenia", id: "AM", img: "assets/img/flags/Mask Group 4.svg" },
                            ]
                        },
                        {
                            id: "middle_east",
                            name: "Middle East - GCC +",
                            list: [
                                { name: "Saudi Arabia", id: "SA", img: "assets/img/flags/Mask Group 56.svg" },
                                { name: "Yemen", id: "YE", img: "assets/img/flags/Mask Group 69.svg" },
                                { name: "United Arab Emirates", id: "AE", img: "assets/img/flags/Mask Group 70.svg" },
                                { name: "Oman", id: "OM", img: "assets/img/flags/Mask Group 58.svg" },
                                { name: "Kuwait", id: "KW", img: "assets/img/flags/Mask Group 68.svg" },
                                { name: "Qatar", id: "QA", img: "assets/img/flags/Mask Group 57.svg" },
                                { name: "Bahrain", id: "BH", img: "assets/img/flags/Mask Group 63.svg" }
                            ]
                        },
                        {
                            id: "middle",
                            name: "Middle East - Northern",
                            list: [
                                { name: "Turkey", id: "TR", img: "assets/img/flags/Mask Group 59.svg" },
                                { name: "Iran", id: "IR", img: "assets/img/flags/Mask Group 65.svg" },
                                { name: "Iraq", id: "IQ", img: "assets/img/flags/Mask Group 64.svg" },
                                { name: "Syria", id: "SY", img: "assets/img/flags/Mask Group 62.svg" },
                                { name: "Jordan", id: "JO", img: "assets/img/flags/Mask Group 67.svg" },
                                { name: "Israel", id: "IL", img: "assets/img/flags/Mask Group 66.svg" },
                                { name: "Lebanon", id: "LB", img: "assets/img/flags/Mask Group 61.svg" },
                                { name: "State of Palestine", id: "PS", img: "assets/img/flags/Mask Group 60.svg" },
                            ]
                        },
                    ]
                },
                {
                    id: "Asia",
                    name: "Asia",
                    img: 'assets/img/flags/asia.png',
                    list: [
                        {
                            id: "Central_Asia",
                            name: "Central Asia",
                            list: [
                                { name: "India", id: "IN", img: "assets/img/flags/Mask Group 86.svg" },
                                { name: "Pakistan", id: "PK", img: "assets/img/flags/Mask Group 89.svg" },
                                { name: "Bangladesh", id: "BD", img: "assets/img/flags/Mask Group 71.svg" },
                                { name: "Nepal", id: "NP", img: "assets/img/flags/Mask Group 84.svg" },
                                { name: "Sri Lanka", id: "LK", img: "assets/img/flags/Mask Group 91.svg" },
                                { name: "Bhutan", id: "BT", img: "assets/img/flags/Mask Group 72.svg" },
                                { name: "Maldives", id: "MV", img: "assets/img/flags/Mask Group 80.svg" }
                            ]
                        },
                        {
                            id: "China",
                            name: "china",
                            list: [
                                { name: "China", id: "CN", img: "assets/img/flags/Mask Group 75.svg" },
                                { name: "Mongolia", id: "MN", img: "assets/img/flags/Mask Group 85.svg" },
                            ]
                        },
                        {
                            id: "South_East_Asia",
                            name: "South East Asia",
                            list: [
                                { name: "Indonesia", id: "ID", img: "assets/img/flags/Mask Group 76.svg" },
                                { name: "Philippines", id: "PH", img: "assets/img/flags/Mask Group 87.svg" },
                                { name: "Vietnam", id: "VN", img: "assets/img/flags/Mask Group 93.svg" },
                                { name: "Thailand", id: "TH", img: "assets/img/flags/Mask Group 92.svg" },
                                { name: "Myanmar", id: "MM", img: "assets/img/flags/Mask Group 104.svg" },
                                { name: "Malaysia", id: "MY", img: "assets/img/flags/Mask Group 81.svg" },
                                { name: "Cambodia", id: "KH", img: "assets/img/flags/Mask Group 108.svg" },
                                { name: "Laos", id: "LA", img: "assets/img/flags/Mask Group 83.svg" },
                                { name: "Singapore", id: "SG", img: "assets/img/flags/Mask Group 88.svg" },
                                { name: "Brunei", id: "BN", img: "assets/img/flags/Mask Group 121.svg" },
                                { name: "Palau", id: "", img: "assets/img/flags/Mask Group 90.svg" }
                            ]
                        },
                        {
                            id: "Japan_Korea",
                            name: "Japan & Korea",
                            list: [
                                { name: "Japan", id: "JP", img: "assets/img/flags/Mask Group 77.svg" },
                                { name: "South Korea", id: "KR", img: "assets/img/flags/Mask Group 79.svg" },
                                { name: "North Korea", id: "KP", img: "assets/img/flags/Mask Group 78.svg" }
                            ]
                        }
                    ]
                },
                {
                    id: "Africa",
                    name: "Africe",
                    img: 'assets/img/flags/giza.png',
                    list: [
                        {
                            id: "North_Africa",
                            name: "North Africa",
                            list: [
                                { name: "Egypt", id: "EG", img: "assets/img/flags/Mask Group 101.svg" },
                                { name: "Algeria", id: "DZ", img: "assets/img/flags/Mask Group 89.svg" },
                                { name: "Sudan", id: "SD", img: "assets/img/flags/Mask Group 115.svg" },
                                { name: "Morocco", id: "MA", img: "assets/img/flags/Mask Group 93.svg" },
                                { name: "Niger", id: "NE", img: "assets/img/flags/Mask Group 114.svg" },
                                { name: "Mali", id: "ML", img: "assets/img/flags/Mask Group 113.svg" },
                                { name: "Chad", id: "TD", img: "assets/img/flags/Mask Group 95.svg" },
                                { name: "Tunisia", id: "TN", img: "assets/img/flags/Mask Group 120.svg" },
                                { name: "South Sudan", id: "SS", img: "assets/img/flags/Group -2.svg" },
                                { name: "Libya", id: "LY", img: "assets/img/flags/Group -1.svg" },
                                { name: "Mauritania", id: "MR", img: "assets/img/flags/Mask Group 138.svg" },
                                { name: "Cabo Verde", id: "CV", img: "assets/img/flags/Mask Group 94.svg" },
                            ]
                        },
                        {
                            id: "Western_Africa",
                            name: "Western Africa",
                            list: [
                                { name: "Nigeria", id: "NG", img: "assets/img/flags/Mask Group 110.svg" },
                                { name: "Ghana", id: "GH", img: "assets/img/flags/Mask Group 104.svg" },
                                { name: "Côte", id: "CI", img: "assets/img/flags/Mask Group 98.svg" },
                                { name: "d'Ivoire", id: "CI", img: "assets/img/flags/Mask Group 98.svg" },
                                { name: "Burkina Faso", id: "BF", img: "assets/img/flags/Mask Group 97.svg" },
                                { name: "Senegal", id: "SN", img: "assets/img/flags/Mask Group 104.svg" },
                                { name: "Guinea", id: "GN", img: "assets/img/flags/Mask Group 105.svg" },
                                { name: "Benin", id: "BJ", img: "assets/img/flags/Mask Group 96.svg" },
                                { name: "Togo", id: "TG", img: "assets/img/flags/Mask Group 122.svg" },
                                { name: "Sierra Leone", id: "SL", img: "assets/img/flags/Mask Group 117.svg" },
                                { name: "Liberia", id: "LR", img: "assets/img/flags/Mask Group 81.svg" },
                                { name: "Gambia", id: "GM", img: "assets/img/flags/Mask Group 107.svg" },
                                { name: "Guinea-Bissau", id: "GW", img: "assets/img/flags/Mask Group 106.svg" }
                            ]
                        },
                        {
                            id: "Eastern_Africa",
                            name: "Eastern Africa",
                            list: [
                                { name: "Ethiopia", id: "ET", img: "assets/img/flags/Mask Group 102.svg" },
                                { name: "Kenya", id: "KE", img: "assets/img/flags/Mask Group 108.svg" },
                                { name: "Uganda", id: "UG", img: "assets/img/flags/Mask Group 121.svg" },
                                { name: "Somalia", id: "SO", img: "assets/img/flags/Mask Group 118.svg" },
                                { name: "Eritrea", id: "ER", img: "assets/img/flags/Mask Group 103.svg" },
                                { name: "Djibouti", id: "DJ", img: "assets/img/flags/Mask Group 100.svg" },
                                { name: "Seychelles", id: "SC", img: "assets/img/flags/Mask Group 119.svg" }
                            ]
                        },
                        {
                            id: "Central_Africa",
                            name: "Central Africa",
                            list: [
                                { name: "DR Congo", id: "CD", img: "assets/img/flags/Mask Group 127.svg" },
                                { name: "Tanzania", id: "TZ", img: "assets/img/flags/Mask Group 144.svg" },
                                { name: "Angola", id: "AO", img: "assets/img/flags/Mask Group 125.svg" },
                                { name: "Cameroon", id: "CM", img: "assets/img/flags/Group -3.svg" },
                                { name: "Rwanda", id: "RW", img: "assets/img/flags/Mask Group 143.svg" },
                                { name: "Burundi", id: "BI", img: "assets/img/flags/Mask Group 126.svg" },
                                { name: "Congo", id: "CG", img: "assets/img/flags/Mask Group 129.svg" },
                                { name: "Central African Republic", id: "CF", img: "assets/img/flags/Mask Group 128.svg" },
                                { name: "Gabon", id: "GA", img: "assets/img/flags/Mask Group 132.svg" },
                                { name: "Equatorial Guinea", id: "GQ", img: "assets/img/flags/Mask Group 130.svg" },
                                { name: "São Tomé & Príncipe", id: "ST", img: "assets/img/flags/Mask Group 142.svg" },
                            ]
                        },
                        {
                            id: "Southern_Africa",
                            name: "Southern Africa",
                            list: [
                                { name: "South Africa", id: "ZA", img: "assets/img/flags/Mask Group 141.svg" },
                                { name: "Mozambique", id: "MZ", img: "assets/img/flags/Mask Group 135.svg" },
                                { name: "Madagascar", id: "MG", img: "assets/img/flags/Mask Group 134.svg" },
                                { name: "Malawi", id: "MW", img: "assets/img/flags/Mask Group 133.svg" },
                                { name: "Zambia", id: "ZM", img: "assets/img/flags/Mask Group 139.svg" },
                                { name: "Zimbabwe", id: "ZW", img: "assets/img/flags/Mask Group 140.svg" },
                                { name: "Namibia", id: "NA", img: "assets/img/flags/Mask Group 136.svg" },
                                { name: "Botswana", id: "BW", img: "assets/img/flags/Mask Group 123.svg" },
                                { name: "Lesotho", id: "LS", img: "assets/img/flags/Mask Group 173.svg" },
                                { name: "Mauritius", id: "MU", img: "assets/img/flags/Mask Group 47.svg" },
                                { name: "Eswatini", id: "", img: "assets/img/flags/Mask Group 157.svg" },
                                { name: "Comoros", id: "KM", img: "assets/img/flags/Mask Group 124.svg" }
                            ]
                        }
                    ]
                },
                {
                    id: "Americas",
                    name: "Americas",
                    img: 'assets/img/flags/shutterstock_676088749.png',
                    list: [
                        {
                            id: "South_Amercia",
                            name: "South Amercia",
                            list: [
                                { name: "Brazil", id: "BR", img: "assets/img/flags/Mask Group 150.svg" },
                                { name: "Colombia", id: "CO", img: "assets/img/flags/Mask Group 149.svg" },
                                { name: "Argentina", id: "AR", img: "assets/img/flags/Mask Group 151.svg" },
                                { name: "Peru", id: "PE", img: "assets/img/flags/Mask Group 158.svg" },
                                { name: "Venezuela", id: "VE", img: "assets/img/flags/Mask Group 164.svg" },
                                { name: "Chile", id: "CL", img: "assets/img/flags/Mask Group 148.svg" },
                                { name: "Ecuador", id: "EC", img: "assets/img/flags/Mask Group 152.svg" },
                                { name: "Bolivia", id: "BO", img: "assets/img/flags/Mask Group 154.svg" },
                                { name: "Uruguay", id: "UY", img: "assets/img/flags/Mask Group 163.svg" }
                            ]
                        },
                        {
                            id: "Greater_Antilles",
                            name: "Greater Antilles",
                            list: [
                                { name: "Haiti", id: "HT", img: "assets/img/flags/Mask Group 154.svg" },
                                { name: "Cuba", id: "CU", img: "assets/img/flags/Mask Group 146.svg" },
                                { name: "Dominican Republic", id: "DO", img: "assets/img/flags/Mask Group 154.svg" },
                                { name: "Jamaica", id: "JM", img: "assets/img/flags/Mask Group 166.svg" }
                            ]
                        },
                        {
                            id: "Lesser_Antilles",
                            name: "Lesser Antilles",
                            list: [
                                { name: "Trinidad and Tobago	Guyana", id: "TT", img: "assets/img/flags/Mask Group 161.svg" },
                                { name: "Suriname", id: "SR", img: "assets/img/flags/Mask Group 160.svg" },
                                { name: "Barbados", id: "BB", img: "assets/img/flags/Group -5.svg" },
                                { name: "St. Lucia", id: "LC", img: "assets/img/flags/Mask Group 159.svg" },
                                { name: "Grenada	St. Vincent & Grenadines", id: "VC", img: "assets/img/flags/Mask Group 155.svg" },
                                { name: "Antigua and Barbuda	Dominica", id: "AG", img: "assets/img/flags/Mask Group 179.svg" },
                                { name: "St. Kitts & Nevis	", id: "KN", img: "assets/img/flags/Mask Group 162.svg" }
                            ]
                        },
                        {
                            id: "Central_America",
                            name: "Central America",
                            list: [
                                { name: "Mexico", id: "MX", img: "assets/img/flags/Group -7.svg" },
                                { name: "Guatemala", id: "GT", img: "assets/img/flags/Group -7.svg" },
                                { name: "Honduras", id: "HN", img: "assets/img/flags/Group -11.svg" },
                                { name: "Paraguay", id: "PY", img: "assets/img/flags/Mask Group 172.svg" },
                                { name: "Nicaragua", id: "NI", img: "assets/img/flags/Mask Group 173.svg" },
                                { name: "El Salvador", id: "SV", img: "assets/img/flags/Mask Group 169.svg" },
                                { name: "Costa Rica", id: "CR", img: "assets/img/flags/Mask Group 167.svg" },
                                { name: "Panama", id: "PA", img: "assets/img/flags/Group -10.svg" },
                                { name: "Belize", id: "BZ", img: "assets/img/flags/Mask Group 168.svg" }
                            ]
                        },
                        {
                            id: "North_America",
                            name: "North America",
                            list: [
                                { name: "United States", id: "US", img: "assets/img/flags/Group -9.svg" },
                                { name: "Canada", id: "CA", img: "assets/img/flags/Group -8.svg" },
                                { name: "Bahamas", id: "BS", img: "assets/img/flags/Mask Group 171.svg" }
                            ]
                        },
                    ]
                },
                {
                    id: "Australia_Oceania",
                    name: "Australia & Oceania",
                    img: 'assets/img/flags/Circular-Quay_Charlotte-Karp-1200x900.png',
                    list: [
                        {
                            id: "Australia",
                            name: "Australia",
                            list: [
                                { name: "Australia", id: "AU", img: "assets/img/flags/Mask Group 180.svg" },
                                { name: "Papua New Guinea", id: "PG", img: "assets/img/flags/Group -12.svg" },
                                { name: "Peru", id: "PE", img: "assets/img/flags/Mask Group 158.svg" },
                                { name: "New Zealand", id: "NZ", img: "assets/img/flags/Mask Group 180.svg" },
                                { name: "Timor-Leste", id: "TL", img: "assets/img/flags/Mask Group 186.svg" }
                            ]
                        },
                        {
                            id: "Oceania",
                            name: "Oceania",
                            list: [
                                { name: "Fiji", id: "FJ", img: "assets/img/flags/Mask Group 175.svg" },
                                { name: "Solomon Islands", id: "SB", img: "assets/img/flags/Mask Group 185.svg" },
                                { name: "Vanuatu", id: "VU", img: "assets/img/flags/Mask Group 184.svg" },
                                { name: "Samoa", id: "WS", img: "assets/img/flags/Mask Group 183.svg" },
                                { name: "Kiribati", id: "KI", img: "assets/img/flags/Mask Group 179.svg" },
                                { name: "Micronesia", id: "FM", img: "assets/img/flags/Mask Group 170.svg" },
                                { name: "Tonga", id: "TO", img: "assets/img/flags/Mask Group 182.svg" },
                                { name: "Marshall Islands", id: "MH", img: "assets/img/flags/Mask Group 177.svg" },
                                { name: "Tuvalu", id: "TV", img: "assets/img/flags/Mask Group 174.svg" },
                                { name: "Nauru", id: "NR", img: "assets/img/flags/Mask Group 176.svg" },
                            ]
                        },
                    ]
                }
            ];
            var SELECT_JOB = [
                {
                    img: 'assets/img/flappy/450.svg',
                    title: 'Jobs',
                    amount: 1500,
                    precent: 0
                },
                {
                    img: 'assets/img/flappy/402.svg',
                    title: 'Real Estate',
                    amount: 1500,
                    precent: -2
                },
                {
                    img: 'assets/img/flappy/435.svg',
                    title: 'Vehicles',
                    amount: 1500,
                    precent: 4
                },
                {
                    img: 'assets/img/flappy/418.svg',
                    title: 'Pets & Plants',
                    amount: 1500,
                    precent: 1
                },
                {
                    img: 'assets/img/flappy/709.svg',
                    title: 'For Sale',
                    amount: 1500,
                    precent: 5
                },
                {
                    img: 'assets/img/flappy/422.svg',
                    title: 'Services',
                    amount: 1500,
                    precent: -4
                },
                {
                    img: 'assets/img/flappy/651.svg',
                    title: 'Community',
                    amount: 1500,
                    precent: 2
                },
                {
                    img: 'assets/img/flappy/412.svg',
                    title: 'Personals & Dating',
                    amount: 1500,
                    precent: 12
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/select-country/select-country.component.scss": 
        /*!****************************************************************************!*\
          !*** ./src/app/imported-jobs/select-country/select-country.component.scss ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".continent-box {\n  background-color: white;\n  border-radius: 10px;\n  padding: 5px;\n  min-height: 420px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.continent-box .box-img img {\n  width: 100%;\n}\n.continent-box .box-title h5 {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.continent-box .box-list ul {\n  font-size: 16px;\n  padding: 10px;\n  list-style: none;\n}\n.continent-box .box-list ul li {\n  line-height: 40px;\n  color: #808080;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9zZWxlY3QtY291bnRyeS9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcaW1wb3J0ZWQtam9ic1xcc2VsZWN0LWNvdW50cnlcXHNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXBvcnRlZC1qb2JzL3NlbGVjdC1jb3VudHJ5L3NlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7QURDUTtFQUNJLFdBQUE7QUNDWjtBREVRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FaO0FER1k7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRFo7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQXBCIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0ZWQtam9icy9zZWxlY3QtY291bnRyeS9zZWxlY3QtY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250aW5lbnQtYm94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHBhZGRpbmc6NXB4OyBcclxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAuYm94LWltZyB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIC5ib3gtdGl0bGUgaDV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtbGlzdHtcclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAmOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4iLCIuY29udGluZW50LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jb250aW5lbnQtYm94IC5ib3gtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRpbmVudC1ib3ggLmJveC10aXRsZSBoNSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGluZW50LWJveCAuYm94LWxpc3QgdWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY29udGluZW50LWJveCAuYm94LWxpc3QgdWwgbGkge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/select-country/select-country.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/imported-jobs/select-country/select-country.component.ts ***!
          \**************************************************************************/
        /*! exports provided: SelectCountryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryComponent", function () { return SelectCountryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/app/imported-jobs/select-country/model.ts");
            var SelectCountryComponent = /** @class */ (function () {
                function SelectCountryComponent() {
                    this.COUNTRIES = _model__WEBPACK_IMPORTED_MODULE_2__["COUNTRIES"];
                    this.clicked = false;
                    this.previusNode = null;
                }
                SelectCountryComponent.prototype.ngOnInit = function () { };
                ;
                SelectCountryComponent.prototype.expand = function (e) {
                    if (!e.target.children.length)
                        return;
                    if (e.target.children[0].classList.contains('d-none')) {
                        e.target.children[0].classList.remove('d-none');
                    }
                    ;
                    if (this.previusNode && !this.previusNode.isSameNode(e.target.children[0])) {
                        this.previusNode.classList.add('d-none');
                    }
                    this.previusNode = e.target.children[0];
                };
                ;
                return SelectCountryComponent;
            }());
            SelectCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-select-country',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-country/select-country.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-country.component.scss */ "./src/app/imported-jobs/select-country/select-country.component.scss")).default]
                })
            ], SelectCountryComponent);
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/select-job-type/select-job-type.component.scss": 
        /*!******************************************************************************!*\
          !*** ./src/app/imported-jobs/select-job-type/select-job-type.component.scss ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-wrapper {\n  width: 90%;\n}\n.card-wrapper .house-card {\n  height: 111px;\n  background: #fff;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);\n  padding-left: 30px;\n}\n.card-wrapper .house-card img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  margin-top: -15px;\n}\n.card-wrapper .house-card h4 {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: #052337;\n  cursor: pointer;\n}\n.card-wrapper .house-card p {\n  color: #808080;\n  font-size: 18px;\n  margin-right: 10px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.status, .status--orange, .status--grey, .status--green {\n  align-self: center;\n  font-weight: 800;\n  font-size: 13px;\n}\n.status--green {\n  color: #5BB370;\n}\n.status--grey {\n  color: #808080;\n}\n.status--orange {\n  color: #FF9452;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0ZWQtam9icy9zZWxlY3Qtam9iLXR5cGUvQzpcXFVzZXJzXFxSb2JlcnRcXERlc2t0b3BcXHNhbGUtdG9vbHMvc3JjXFxhcHBcXGltcG9ydGVkLWpvYnNcXHNlbGVjdC1qb2ItdHlwZVxcc2VsZWN0LWpvYi10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXBvcnRlZC1qb2JzL3NlbGVjdC1qb2ItdHlwZS9zZWxlY3Qtam9iLXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR1o7QUREUTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR1g7QUREUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURFQTtFQUNLLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0w7QURBSztFQUVLLGNBQUE7QUNDVjtBRENLO0VBRUksY0FBQTtBQ0FUO0FERUs7RUFFRyxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9pbXBvcnRlZC1qb2JzL3NlbGVjdC1qb2ItdHlwZS9zZWxlY3Qtam9iLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAuaG91c2UtY2FyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpOyBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgIGNvbG9yOiAjMDUyMzM3O1xyXG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICYtLWdyZWVuIHtcclxuICAgICAgICAgIEBleHRlbmQgLnN0YXR1cztcclxuICAgICAgICAgIGNvbG9yOiAjNUJCMzcwO1xyXG4gICAgIH1cclxuICAgICAmLS1ncmV5IHtcclxuICAgICAgICAgQGV4dGVuZCAuc3RhdHVzO1xyXG4gICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICB9XHJcbiAgICAgJi0tb3JhbmdlIHtcclxuICAgICAgICBAZXh0ZW5kIC5zdGF0dXM7XHJcbiAgICAgICAgY29sb3I6ICAjRkY5NDUyO1xyXG4gICAgIH1cclxufSIsIi5jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xufVxuLmNhcmQtd3JhcHBlciAuaG91c2UtY2FyZCB7XG4gIGhlaWdodDogMTExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5jYXJkLXdyYXBwZXIgLmhvdXNlLWNhcmQgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi5jYXJkLXdyYXBwZXIgLmhvdXNlLWNhcmQgaDQge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMDUyMzM3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC13cmFwcGVyIC5ob3VzZS1jYXJkIHAge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnN0YXR1cywgLnN0YXR1cy0tb3JhbmdlLCAuc3RhdHVzLS1ncmV5LCAuc3RhdHVzLS1ncmVlbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnN0YXR1cy0tZ3JlZW4ge1xuICBjb2xvcjogIzVCQjM3MDtcbn1cbi5zdGF0dXMtLWdyZXkge1xuICBjb2xvcjogIzgwODA4MDtcbn1cbi5zdGF0dXMtLW9yYW5nZSB7XG4gIGNvbG9yOiAjRkY5NDUyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/imported-jobs/select-job-type/select-job-type.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/imported-jobs/select-job-type/select-job-type.component.ts ***!
          \****************************************************************************/
        /*! exports provided: SelectJobTypeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectJobTypeComponent", function () { return SelectJobTypeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _select_country_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-country/model */ "./src/app/imported-jobs/select-country/model.ts");
            var SelectJobTypeComponent = /** @class */ (function () {
                function SelectJobTypeComponent(activatedRoute) {
                    this.activatedRoute = activatedRoute;
                    this.params = null;
                    this.SELECT_JOB = _select_country_model__WEBPACK_IMPORTED_MODULE_3__["SELECT_JOB"];
                }
                SelectJobTypeComponent.prototype.ngOnInit = function () {
                    this.params = this.activatedRoute.snapshot.queryParams;
                };
                return SelectJobTypeComponent;
            }());
            SelectJobTypeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            SelectJobTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-select-job-type',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-job-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imported-jobs/select-job-type/select-job-type.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-job-type.component.scss */ "./src/app/imported-jobs/select-job-type/select-job-type.component.scss")).default]
                })
            ], SelectJobTypeComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #052337;\n  background-repeat: no-repeat;\n  color: white;\n}\n.login-container .login {\n  font-size: 14px;\n  height: 100vh;\n}\n.login-container .login .login-logo {\n  width: 60px;\n  height: 70px;\n}\n.login-container .login .login-info {\n  max-width: 400px;\n  width: 44%;\n}\n@media screen and (max-width: 590px) {\n  .login-container .login .login-info {\n    width: 88%;\n    max-width: unset !important;\n  }\n}\n.login-container .login .login-title {\n  font-size: 30px;\n  line-height: 35px;\n}\n.login-container .login .form-check-input {\n  margin: 0;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxSb2JlcnRcXERlc2t0b3BcXHNhbGUtdG9vbHMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0VaO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHcEI7QURBZ0I7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNFcEI7QUREb0I7RUFISjtJQUlRLFVBQUE7SUFDQSwyQkFBQTtFQ0l0QjtBQUNGO0FERmdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSXBCO0FERmdCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FDSXBCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMzM3O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIC5sb2dpbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgICAgICAgIC5sb2dpbi1sb2dve1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvZ2luLWluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2dpbi10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY2hlY2staW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4iLCIubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIzMzc7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4gLmxvZ2luLWxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4gLmxvZ2luLWluZm8ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogNDQlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciAubG9naW4gLmxvZ2luLWluZm8ge1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbiAubG9naW4tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4gLmZvcm0tY2hlY2staW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(salesService, f, router) {
                    this.salesService = salesService;
                    this.f = f;
                    this.router = router;
                    this.submitted = false;
                    this.loginForm = f.group({
                        username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(LoginComponent.prototype, "form", {
                    get: function () {
                        return this.loginForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.login = function (e) {
                    var _this = this;
                    e.preventDefault();
                    this.submitted = true;
                    if (this.loginForm.valid) {
                        this.salesService
                            .auth(this.loginForm.value)
                            .subscribe(function (el) {
                            _this.router.navigate(['/imported-jobs', 'select-country']);
                        }, function (err) {
                            console.log(err);
                        });
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/sales.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/sales.service.ts ***!
          \**********************************/
        /*! exports provided: SalesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesService", function () { return SalesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _utiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utiles */ "./src/app/utiles.ts");
            var SalesService = /** @class */ (function () {
                function SalesService(http, cookieService) {
                    this.http = http;
                    this.cookieService = cookieService;
                    this.$notification = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                Object.defineProperty(SalesService.prototype, "currentCountry", {
                    /**
                     * Get Country from local storage
                     * @returns (Country) @type string
                     */
                    get: function () {
                        return !!localStorage.getItem("country") ?
                            localStorage.getItem("country") : "";
                    },
                    /**
                     * Set country to local storage
                     *
                     * @param country
                     */
                    set: function (country) {
                        if (country) {
                            if (country !== "") {
                                localStorage.setItem("country", country);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SalesService.prototype, "user", {
                    get: function () {
                        return !!localStorage.getItem("user") ?
                            JSON.parse(localStorage.getItem("user")) : {};
                    },
                    set: function (data) {
                        if (data) {
                            localStorage.setItem("user", JSON.stringify(data));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @method POST
                 * @param data
                 */
                SalesService.prototype.auth = function (data) {
                    var _this = this;
                    return this.http
                        .post("/api/auth", data, {
                        responseType: "text",
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) {
                        _this.cookieService.set('token', token, 14, '/');
                        _this.user = Object(_utiles__WEBPACK_IMPORTED_MODULE_6__["parseJWT"])(token);
                        return token;
                    }));
                };
                SalesService.prototype.getCountries = function () {
                    return this.http
                        .get('/assets/data/countries.json')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (el) {
                        var data = [];
                        for (var key in el) {
                            if (key.length === 2) {
                                data.push({ asc: key, name: el[key] });
                            }
                        }
                        return data;
                    }));
                };
                ;
                SalesService.prototype.getIndustries = function () {
                    return this.http.get('/assets/data/industries.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (el) {
                        var data = [];
                        for (var key in el) {
                            data.push({ asc: key, name: el[key] });
                        }
                        return data;
                    }));
                };
                Object.defineProperty(SalesService.prototype, "hasAuth", {
                    get: function () {
                        return !!this.cookieService.get('token');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Send email
                 * @method POST
                 * @param data
                 */
                SalesService.prototype.sendEmail = function (data) {
                    return this.http
                        .post('/api/email', data);
                };
                /**
                 * Get city by city name only
                 * @method GET
                 * @param city_name
                 */
                SalesService.prototype.getCityByName = function (city_name) {
                    return this.http
                        .get("/api/graphql/cities/" + city_name)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (el) { return el["getListOfAllCities"]; }));
                };
                /**
                 * Get list of country codes ( for phone )
                 */
                SalesService.prototype.getListOfCountryCodes = function () {
                    return this.http
                        .get("/api/graphql/country_codes");
                };
                /**
                 * Get city by coutry id
                 *
                 * @method GET
                 * @param country_id
                 * @param city_name
                 */
                SalesService.prototype.getCityByCountryAndName = function (country_id, city_name) {
                    return this.http
                        .get("/api/graphql/cities/" + country_id + "/" + city_name)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (el) { return el["getListOfCities"]; }));
                };
                /** SALES TOOLS  */
                SalesService.prototype.getCompanies = function (after, status) {
                    if (after === void 0) { after = 0; }
                    if (status === void 0) { status = "any"; }
                    return this.http.get("/api/companies?first=12&after=" + after + "&status=" + status);
                };
                SalesService.prototype.getCompanyById = function (company_id) {
                    return this.http.get("/api/companies/" + company_id);
                };
                SalesService.prototype.editCompany = function (company_id, input) {
                    return this.http.put("/api/companies/" + company_id, input);
                };
                SalesService.prototype.editCompanyContactInfo = function (company_id, data) {
                    return this.http.put("/api/contact_person/" + company_id, data);
                };
                SalesService.prototype.changeCompanyStatus = function (company_id, status) {
                    return this.http.put("/api/companies/" + company_id + "/stage", { status: status });
                };
                SalesService.prototype.getCompanyComments = function (company_id) {
                    return this.http.get("/api/companies/" + company_id + "/comments");
                };
                SalesService.prototype.addComment = function (company_id, comment) {
                    return this.http.post("/api/companies/" + company_id + "/comments ", { text: comment });
                };
                SalesService.prototype.editComment = function (company_id, comment_id, text) {
                    return this.http.put("/api/companies/" + company_id + "/comments/" + comment_id, { text: text });
                };
                SalesService.prototype.deleteComment = function (company_id, comment_id) {
                    return this.http.delete("/api/companies/" + company_id + "/comments/" + comment_id);
                };
                SalesService.prototype.addCompanyHistory = function (company_id, text) {
                    return this.http.post("/api/companies/" + company_id + "/history", { text: text });
                };
                SalesService.prototype.getCompanyHistroy = function (company_id) {
                    return this.http.get("/api/companies/" + company_id + "/history");
                };
                return SalesService;
            }());
            SalesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
            ]; };
            SalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SalesService);
            /***/ 
        }),
        /***/ "./src/app/shared/components/app-modal/app-modal.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/app-modal/app-modal.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 412px) and (max-width: 1030px) {\n  .modal-content {\n    margin: 0 auto !important;\n  }\n}\n.modal-content {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5) !important;\n}\n.calendar-modal-header {\n  padding-bottom: 8px;\n  padding-left: 50px !important;\n  padding-right: 15px !important;\n}\nh1 {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLW1vZGFsL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxzYWxlLXRvb2xzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFwcC1tb2RhbFxcYXBwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hcHAtbW9kYWwvYXBwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSx5QkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJLDBEQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0RKO0FETUE7RUFDSSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXBwLW1vZGFsL2FwcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbGVuZGFyLW1vZGFsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLm1vZGFsLWNvbnRlbnQge1xyXG4vLyAgICAgd2lkdGg6IDU5N3B4O1xyXG4vLyB9O1xyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufSIsIkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMzBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLm1vZGFsLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItbW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/app-modal/app-modal.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/components/app-modal/app-modal.component.ts ***!
          \********************************************************************/
        /*! exports provided: AppModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModalComponent", function () { return AppModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var AppModalComponent = /** @class */ (function () {
                function AppModalComponent(modalService) {
                    this.modalService = modalService;
                    this.width = 597;
                    this.size = 'md';
                    this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.withoutContent = false;
                    this.isBlue = true;
                }
                AppModalComponent.prototype.ngOnInit = function () { };
                AppModalComponent.prototype.close = function () {
                    this.modalService.dismissAll();
                    this.closeModal.emit();
                };
                AppModalComponent.prototype.open = function () {
                    var _this = this;
                    setTimeout(function () {
                        // @ts-ignore
                        _this.modalService.open(_this.modal, { size: _this.size, backdrop: 'static' }).result.then(function (res) {
                        }, function (reason) {
                            ;
                            _this.close();
                            _this.title = '';
                        });
                    });
                };
                return AppModalComponent;
            }());
            AppModalComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appModal', { static: true })
            ], AppModalComponent.prototype, "modal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppModalComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppModalComponent.prototype, "width", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppModalComponent.prototype, "size", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AppModalComponent.prototype, "closeModal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppModalComponent.prototype, "withoutContent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppModalComponent.prototype, "isBlue", void 0);
            AppModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/app-modal/app-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-modal.component.scss */ "./src/app/shared/components/app-modal/app-modal.component.scss")).default]
                })
            ], AppModalComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/busines-hours/busines-hours.component.scss": 
        /*!******************************************************************************!*\
          !*** ./src/app/shared/components/busines-hours/busines-hours.component.scss ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".days-title {\n  color: #808080;\n  font-size: 14px;\n  padding-left: 3px;\n}\n\nspan.dropdown-icon {\n  position: absolute;\n  right: 20px;\n  top: 32px;\n  font-size: 16px;\n  color: #808080;\n}\n\n:host ::ng-deep ng-multiselect-dropdown .multiselect-dropdown div span:last-child {\n  display: none;\n}\n\n:host ::ng-deep ng-multiselect-dropdown .multiselect-dropdown div .dropdown-btn {\n  min-height: 38px;\n}\n\n:host ::ng-deep ng-multiselect-dropdown .multiselect-dropdown div .dropdown-btn span {\n  font-size: 14px;\n  color: #808080;\n}\n\n.custom-control-label::after {\n  margin-top: 0;\n}\n\n.custom-control-label::before {\n  margin-top: 0;\n}\n\n.line {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n}\n\n.radioWrap {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnVzaW5lcy1ob3Vycy9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxidXNpbmVzLWhvdXJzXFxidXNpbmVzLWhvdXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXNpbmVzLWhvdXJzL2J1c2luZXMtaG91cnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURLUTtFQUNFLGFBQUE7QUNGVjs7QURJUTtFQUNFLGdCQUFBO0FDRlY7O0FER1U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRFFFO0VBQ0UsYUFBQTtBQ0xKOztBRE9FO0VBQ0UsYUFBQTtBQ0pKOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FES0E7RUFDRSxTQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXNpbmVzLWhvdXJzL2J1c2luZXMtaG91cnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF5cy10aXRsZSB7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG59XHJcblxyXG5zcGFuLmRyb3Bkb3duLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICB9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgLm11bHRpc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWJ0biB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbi5saW5le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5yYWRpb1dyYXAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCIuZGF5cy10aXRsZSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG5zcGFuLmRyb3Bkb3duLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAubXVsdGlzZWxlY3QtZHJvcGRvd24gZGl2IHNwYW46bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmctbXVsdGlzZWxlY3QtZHJvcGRvd24gLm11bHRpc2VsZWN0LWRyb3Bkb3duIGRpdiAuZHJvcGRvd24tYnRuIHtcbiAgbWluLWhlaWdodDogMzhweDtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biAubXVsdGlzZWxlY3QtZHJvcGRvd24gZGl2IC5kcm9wZG93bi1idG4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmFkaW9XcmFwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/busines-hours/busines-hours.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/shared/components/busines-hours/busines-hours.component.ts ***!
          \****************************************************************************/
        /*! exports provided: BusinesHoursComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesHoursComponent", function () { return BusinesHoursComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var BusinesHoursComponent = /** @class */ (function () {
                function BusinesHoursComponent(f, timepickerConfig) {
                    this.f = f;
                    this.timepickerConfig = timepickerConfig;
                    this.multiple = false;
                    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.disabledWeeks = false;
                    this.busniessDate = [];
                    this.trackByFn = function (index) { return index; };
                    timepickerConfig.spinners = false;
                    this.bhForm = f.group({
                        hours: f.array([this.initaliazeValue()]),
                        business_hours: ['select']
                    });
                }
                BusinesHoursComponent.prototype.initaliazeValue = function () {
                    return this.f.group({
                        week_days: [],
                        hour_from: '',
                        hour_to: ''
                    });
                };
                Object.defineProperty(BusinesHoursComponent.prototype, "Hours", {
                    get: function () {
                        return this.bhForm.get('hours');
                    },
                    enumerable: true,
                    configurable: true
                });
                BusinesHoursComponent.prototype.removeAlphabet = function (e) {
                    var code = e.keyCode;
                    return code >= 65 && code <= 90 ? e.target.value = '' : true;
                };
                BusinesHoursComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dropdownSettingsDays = {
                        singleSelection: false,
                        idField: 'item_id',
                        textField: 'item_text',
                        selectAllText: 'Select All',
                        unSelectAllText: 'UnSelect All',
                        itemsShowLimit: 3,
                        allowSearchFilter: true,
                        disabled: true,
                    };
                    this.dropdownListDays = [
                        { item_id: 1, item_text: 'Monday' },
                        { item_id: 2, item_text: 'Tuesday' },
                        { item_id: 3, item_text: 'Wednesday' },
                        { item_id: 4, item_text: 'Thursday' },
                        { item_id: 5, item_text: 'Friday' },
                        { item_id: 6, item_text: 'Saturday' },
                        { item_id: 7, item_text: 'Sunday' }
                    ];
                    if (this.data)
                        this.parseData();
                    /// Get Values from form ///
                    this.Hours.valueChanges.subscribe(function (hours) {
                        if (hours && hours.length > 0) {
                            _this.busniessDate = hours.map(function (hour) {
                                var week_days = hour.week_days, hour_from = hour.hour_from, hour_to = hour.hour_to;
                                /// Parse week days ///
                                if (week_days && week_days.length > 0) {
                                    week_days = week_days.sort(function (a, b) { return a['item_id'] < b['item_id'] ? -1 : 1; })
                                        .map(function (day) { return day['item_text'].toLowerCase(); });
                                }
                                else
                                    week_days = [];
                                /// Parse time ///
                                if (hour_from) {
                                    var hour_1 = hour_from['hour'] < 10 ? "0" + hour_from['hour'] : hour_from['hour'], minute = hour_from['minute'] < 10 ? "0" + hour_from['minute'] : hour_from['minute'];
                                    hour_from = hour_1 + ":" + minute;
                                }
                                if (hour_to) {
                                    var hour_2 = hour_to['hour'] < 10 ? "0" + hour_to['hour'] : hour_to['hour'], minute = hour_to['minute'] < 10 ? "0" + hour_to['minute'] : hour_to['minute'];
                                    hour_to = hour_2 + ":" + minute;
                                }
                                return {
                                    hour_from: hour_from,
                                    hour_to: hour_to,
                                    week_days: week_days
                                };
                            });
                        }
                        _this.result.emit(_this.busniessDate);
                    });
                };
                BusinesHoursComponent.prototype.radioTypeChange = function (e) {
                    var _this = this;
                    var value = e.target.value;
                    if (value === 'select') {
                        this.Hours.enable();
                        this.disabledWeeks = false;
                    }
                    if (value === 'closed' || value === 'open') {
                        this.Hours.disable();
                        this.disabledWeeks = false;
                    }
                    if (value === 'open') {
                        this.busniessDate.map(function (date) { return (date.hour_from = '0:00',
                            date.hour_to = '0:00',
                            date.week_days = _this.dropdownListDays.map(function (day) { return day['item_text'].toLowerCase(); })); });
                    }
                    if (value === 'closed') {
                        this.disabledWeeks = true;
                        this.Hours.disable();
                        this.busniessDate.map(function (date) { return (date.hour_from = '', date.hour_to = '', date.week_days = []); });
                    }
                };
                BusinesHoursComponent.prototype.dateToObject = function (date) {
                    if (date && date !== null) {
                        var hour = date ? +date.split(':')[0] : null, minute = date ? +date.split(':')[1] : null;
                        return {
                            hour: hour,
                            minute: minute
                        };
                    }
                };
                BusinesHoursComponent.prototype.weekDaysToObject = function (weeks) {
                    if (weeks && weeks.length > 0) {
                        return weeks.map(function (week, idx) {
                            return {
                                item_id: ++idx,
                                item_text: "" + week[0].toUpperCase() + week.slice(1)
                            };
                        });
                    }
                };
                BusinesHoursComponent.prototype.parseData = function () {
                    var _this = this;
                    if (this.data.length > 0) {
                        this.Hours.removeAt(0); /// Remove default inputs 
                        this.result.emit(this.data); /// Emit data 
                        this.data.map(function (el) {
                            var hour_from = el.hour_from, hour_to = el.hour_to, week_days = el.week_days;
                            hour_from = _this.dateToObject(hour_from);
                            hour_to = _this.dateToObject(hour_to);
                            week_days = _this.weekDaysToObject(week_days);
                            _this.Hours.push(_this.f.group({
                                hour_from: [hour_from],
                                hour_to: [hour_to],
                                week_days: [week_days]
                            }));
                        });
                    }
                };
                BusinesHoursComponent.prototype.addAnother = function () {
                    return this.Hours.push(this.initaliazeValue());
                };
                BusinesHoursComponent.prototype.removeItem = function (i) {
                    this.busniessDate.splice(i, 1);
                    return this.Hours.removeAt(i);
                };
                return BusinesHoursComponent;
            }());
            BusinesHoursComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BusinesHoursComponent.prototype, "multiple", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BusinesHoursComponent.prototype, "data", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], BusinesHoursComponent.prototype, "result", void 0);
            BusinesHoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-busines-hours',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busines-hours.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/busines-hours/busines-hours.component.html")).default,
                    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepickerConfig"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busines-hours.component.scss */ "./src/app/shared/components/busines-hours/busines-hours.component.scss")).default]
                })
            ], BusinesHoursComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/header/header.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/header/header.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header-user-tool {\n  background-color: #264361;\n  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);\n}\n.header-user-tool .search-bar {\n  border: 1px solid gray;\n  border-radius: 10px;\n  height: 32px;\n}\n.header-user-tool .header-logo {\n  outline: unset;\n  cursor: pointer;\n}\n.header-user-tool .logo {\n  text-transform: uppercase;\n  font: normal 30px above;\n  margin-left: 15px;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n}\n.header-user-tool .logo span {\n  color: #00f4ff;\n}\n.header-user-tool .profile-icon img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  cursor: pointer;\n}\nimg {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEZXNrdG9wXFxzYWxlLXRvb2xzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQ0NBO0FEQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBRE1BO0VBQ0ksZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdXNlci10b29se1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMyNjQzNjE7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAuMSApO1xyXG4uc2VhcmNoLWJhcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGhlaWdodDozMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxvZ28ge1xyXG4gICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udDogbm9ybWFsIDMwcHggYWJvdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjMDBmNGZmO1xyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlLWljb257XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuaGVhZGVyLXVzZXItdG9vbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQzNjE7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmhlYWRlci11c2VyLXRvb2wgLnNlYXJjaC1iYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG4uaGVhZGVyLXVzZXItdG9vbCAuaGVhZGVyLWxvZ28ge1xuICBvdXRsaW5lOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci11c2VyLXRvb2wgLmxvZ28ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiBub3JtYWwgMzBweCBhYm92ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmhlYWRlci11c2VyLXRvb2wgLmxvZ28gc3BhbiB7XG4gIGNvbG9yOiAjMDBmNGZmO1xufVxuLmhlYWRlci11c2VyLXRvb2wgLnByb2ZpbGUtaWNvbiBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/header/header.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/header/header.component.ts ***!
          \**************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/spinner/spinner.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  border: 14px solid #f3f3f3;\n  border-top: 14px solid #264361;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9DOlxcVXNlcnNcXFJvYmVydFxcRGVza3RvcFxcc2FsZS10b29scy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRywwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNESDs7QURJQTtFQUNJO0lBQUssdUJBQUE7RUNBUDtFRENFO0lBQU8seUJBQUE7RUNFVDtBQUNGOztBRExBO0VBQ0k7SUFBSyx1QkFBQTtFQ0FQO0VEQ0U7SUFBTyx5QkFBQTtFQ0VUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG4uc3Bpbm5lcntcclxuICAgYm9yZGVyOiAxNHB4IHNvbGlkICNmM2YzZjM7XHJcbiAgIGJvcmRlci10b3A6IDE0cHggc29saWQgIzI2NDM2MTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB3aWR0aDogMTAwcHg7XHJcbiAgIGhlaWdodDogMTAwcHg7XHJcbiAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7ICBcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlue1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuXHJcbn0iLCIuc3Bpbm5lciB7XG4gIGJvcmRlcjogMTRweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkICMyNjQzNjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/spinner/spinner.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
          \****************************************************************/
        /*! exports provided: SpinnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () { return SpinnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SpinnerComponent = /** @class */ (function () {
                function SpinnerComponent() {
                }
                SpinnerComponent.prototype.ngOnInit = function () {
                };
                return SpinnerComponent;
            }());
            SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-spinner',
                    template: "\n    <div class=\"spinner\">\n    </div>\n  ",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")).default]
                })
            ], SpinnerComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/guards/auth.guard.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/guards/auth.guard.ts ***!
          \*********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales.service */ "./src/app/sales.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(salesService, router) {
                    this.salesService = salesService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    console.log(this.salesService.hasAuth);
                    if (!this.salesService.hasAuth) {
                        this.router.navigate(['/login']);
                        return false;
                    }
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: src_app_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/delimetr.pipe.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/pipes/delimetr.pipe.ts ***!
          \***********************************************/
        /*! exports provided: DelimetrPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelimetrPipe", function () { return DelimetrPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DelimetrPipe = /** @class */ (function () {
                function DelimetrPipe() {
                }
                DelimetrPipe.prototype.transform = function (value, args) {
                    if (value.length === 0)
                        return;
                    switch (value.length) {
                        case 1:
                            return value[0];
                        default: {
                            var last = value[value.length - 1];
                            return value.slice(0, -1).join(args) + "," + last;
                        }
                    }
                };
                return DelimetrPipe;
            }());
            DelimetrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'delimetr'
                })
            ], DelimetrPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/register.validator.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/register.validator.ts ***!
          \**********************************************/
        /*! exports provided: PasswordValidation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function () { return PasswordValidation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var PasswordValidation = /** @class */ (function () {
                function PasswordValidation() {
                }
                PasswordValidation.MatchPassword = function (AC) {
                    var password = AC.get('password').value; // to get value in input tag
                    var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
                    if (password != confirmPassword) {
                        AC.get('confirmPassword').setErrors({ MatchPassword: true });
                    }
                    else {
                        return null;
                    }
                };
                PasswordValidation.strong = function (AC) {
                    var password = AC.get('password').value;
                    var hasNumber = /\d/.test(password.value);
                    var hasUpper = /[A-Z]/.test(password.value);
                    var hasLower = /[a-z]/.test(password.value);
                    var valid = hasNumber && hasUpper && hasLower;
                    if (!valid) {
                        // return what´s not valid
                        return { strong: true };
                    }
                    return null;
                };
                PasswordValidation.detectUppercase = function () {
                    return function (control) {
                        var value = control.value;
                        var regexUppercase = /[A-Z]/g;
                        var testUppercase = regexUppercase.test(value);
                        return !testUppercase ? { 'uppercase': 'inValid' } : null;
                    };
                };
                PasswordValidation.detectString = function () {
                    return function (control) {
                        var value = control.value;
                        if (!!value) {
                            var regexSymbols = /\b[A-Z a-z]\b/gim;
                            var testNumbers = regexSymbols.test(value);
                            return !testNumbers ? { 'text': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.detectLetterAnNumber = function () {
                    return function (control) {
                        var value = control.value;
                        if (!!value) {
                            var regexSymbols = /\b\w+\b/gim;
                            var testNumbers = regexSymbols.test(value);
                            return !testNumbers ? { 'text': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.detectNumber = function () {
                    return function (control) {
                        var value = control.value;
                        var regexNumbers = /[0-9]/g;
                        var testNumbers = regexNumbers.test(value);
                        return !testNumbers ? { 'number': 'inValid' } : null;
                    };
                };
                PasswordValidation.detectIfhasNumber = function () {
                    return function (control) {
                        var value = control.value;
                        var regexNumbers = /[0-9]/g;
                        var testNumbers = regexNumbers.test(value);
                        return testNumbers ? { 'number': 'inValid' } : null;
                    };
                };
                PasswordValidation.detectSymbols = function () {
                    return function (control) {
                        var value = control.value;
                        var regexSymbols = /[@$!^]/g;
                        var testNumbers = regexSymbols.test(value);
                        return !testNumbers ? { 'symbols': 'inValid' } : null;
                    };
                };
                PasswordValidation.detectInitials = function () {
                    return function (control) {
                        var value = control.value;
                        var group = control.parent;
                        if (group) {
                            var firstname = group.controls['firstname'].value;
                            var lastname = group.controls['lastname'].value;
                            var email = group.controls['email'].value !== null ?
                                group.controls['email'].value.split("@")[0] : null;
                            var regexInitials = new RegExp("(?=.*" + firstname + ")|(?=.*" + lastname + ")|(?=.*" + email + ")", 'gi');
                            var testInitials = regexInitials.test(value);
                            return testInitials ? { 'initials': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.detectLength = function (len) {
                    return function (control) {
                        var value = control.value;
                        var testlength = value.length > len;
                        return !testlength ? { 'minLength': 'inValid' } : null;
                    };
                };
                PasswordValidation.detectAnySymbols = function () {
                    return function (control) {
                        var value = control.value;
                        if (!!value) {
                            var regexSymbols = /^[a-z-\s]+$/gim;
                            var testNumbers = regexSymbols.test(value);
                            return !testNumbers ? { 'symbols': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.detectEmail = function () {
                    return function (control) {
                        var value = control.value;
                        if (!!value) {
                            var regexSymbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/gmi;
                            var testEmail = regexSymbols.test(value);
                            return !testEmail ? { 'email': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.detectURL = function () {
                    return function (control) {
                        var value = control.value;
                        if (value === '')
                            return null;
                        if (value !== null && value) {
                            var regexSymbols = /(https:?:)?(\/\/)?(w{3}\.)?(\w{2,19}\.)(\w{1,12}(\.\w+)?)\/*\S+/gi; ///^(http[s]?:\/\/){0,1}(www\.){0,1}[a-z0-9\.\-]+\.[a-z]{2,5}[\.]{0,1}/gi;
                            var testEmail = regexSymbols.test(value);
                            return !testEmail ? { 'url': 'inValid' } : null;
                        }
                        return null;
                    };
                };
                PasswordValidation.validateMin = function (max) {
                    return function (control) {
                        var value = control.value, parent = control.parent;
                        if (!!value) {
                            var maxValue = parent.get(max);
                            maxValue.updateValueAndValidity();
                            control.value > maxValue.value ?
                                maxValue.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(control.value)]) :
                                maxValue.setValidators(null);
                        }
                        return null;
                    };
                };
                PasswordValidation.validateMax = function (min) {
                    return function (control) {
                        var value = control.value, parent = control.parent;
                        if (!!value) {
                            var minValue = parent.get(min);
                            minValue.updateValueAndValidity();
                            control.value > minValue.value ?
                                minValue.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(control.value)]) :
                                minValue.setValidators(null);
                        }
                        return null;
                    };
                };
                return PasswordValidation;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-modal/app-modal.component */ "./src/app/shared/components/app-modal/app-modal.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
            /* harmony import */ var _components_busines_hours_busines_hours_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/busines-hours/busines-hours.component */ "./src/app/shared/components/busines-hours/busines-hours.component.ts");
            /* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
            /* harmony import */ var _pipes_delimetr_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/delimetr.pipe */ "./src/app/shared/pipes/delimetr.pipe.ts");
            var COMPONENTS = [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_6__["AppModalComponent"],
                _components_busines_hours_busines_hours_component__WEBPACK_IMPORTED_MODULE_9__["BusinesHoursComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"],
                _pipes_delimetr_pipe__WEBPACK_IMPORTED_MODULE_11__["DelimetrPipe"]
            ];
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: COMPONENTS,
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"],
                        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                    ],
                    exports: COMPONENTS.concat([
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                    ])
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/app/utiles.ts": 
        /*!***************************!*\
          !*** ./src/app/utiles.ts ***!
          \***************************/
        /*! exports provided: MONTHS, DAYS, YEARS, parseJWT */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function () { return MONTHS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS", function () { return DAYS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARS", function () { return YEARS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJWT", function () { return parseJWT; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            function parseJWT(token) {
                var base64URL = token.split('.')[1];
                var base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPaylod = decodeURIComponent(atob(base64).split('').map(function (el) {
                    return "%" + ("00" + el.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                return JSON.parse(jsonPaylod);
            }
            var MONTHS = [
                { id: 1, name: "January" },
                { id: 2, name: "February" },
                { id: 3, name: "March" },
                { id: 4, name: "April" },
                { id: 5, name: "May" },
                { id: 6, name: "June" },
                { id: 7, name: "July" },
                { id: 8, name: "August" },
                { id: 9, name: "September" },
                { id: 10, name: "October" },
                { id: 11, name: "November" },
                { id: 12, name: "December" }
            ];
            var YEARS = (function () {
                var currentYear = new Date().getFullYear() - 18, years = [];
                for (var i = currentYear; i >= 1960; i--) {
                    years.push(i);
                }
                return years;
            })();
            var DAYS = (function () {
                var days = [];
                for (var i = 1; i <= 31; i++) {
                    days.push(i);
                }
                return days;
            })();
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Robert\Desktop\sale-tools\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map