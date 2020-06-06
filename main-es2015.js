(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








const routes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'map/:systemID', component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/app/images.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AppComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = 'BikeshareBuddy';
    }
    onResize() {
        if (window.innerWidth >= 600) {
            document.getElementById('content').style.backgroundImage = "url('" + _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].url + "')";
            document.getElementById('attribution').innerHTML =
                '<i class="material-icons" style="font-size:small">panorama</i>&nbsp;Background image: ' +
                    '<a style="color: var(--navbar-dark);text-decoration: none;border-bottom: 1.5px solid;padding: 0px 2px;" target="_blank" href="' +
                    _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].hyperlink + '">' +
                    _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].attribution +
                    '</a>';
        }
        else {
            document.getElementById('content').style.backgroundImage = 'var(--background-gradient)';
        }
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    ngOnInit() {
        this.photoId = Math.floor(Math.random() * _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"].length);
        this.onResize();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 3, consts: [["id", "container", 3, "resize"], [1, "row", "navbar"], ["routerLink", ""], ["src", "../assets/bb_logo.svg", 1, "navbar-logo"], [2, "flex", "1 1 auto"], ["routerLink", "search"], [1, "navbar-link"], [1, "material-icons"], ["routerLink", "login"], [1, "navbar-link", 3, "ngSwitch"], [4, "ngSwitchCase"], ["id", "content", 1, "row"], ["id", "footer", 1, "row"], ["id", "attribution"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_span_16_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_span_17_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["#container[_ngcontent-%COMP%] {\n    height:100%;                          \n  display: flex;             \n  flex-flow: column;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height:auto!important;\n    padding:5px 10px!important;\n}\n\n.navbar-link[_ngcontent-%COMP%] {\n    font-size: small;\n    color: var(--light);\n    padding:8px;\n    text-shadow: 1px 1px 5px rgba(0,0,0,0.5);\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none!important;\n}\n\n#content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    background-image: var(--background-gradient);\n    overflow-y:scroll;\n    position: relative;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: var(--navbar-dark);\n}\n\n.navbar-logo[_ngcontent-%COMP%] {\n    height:50px;\n    box-shadow: 2px 2px 6px rgba(0,0,0,0.5);\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    margin-bottom: -6px;  \n}\n\n#footer[_ngcontent-%COMP%] {\n    display:none;\n}\n\n@media only screen and (min-width: 600px) {\n    #content[_ngcontent-%COMP%] {\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size:cover;\n    }\n    \n    .navbar-logo[_ngcontent-%COMP%] {\n        height:65px;\n    }\n\n    .navbar-link[_ngcontent-%COMP%] {\n        font-size: smaller;\n        padding:10px;\n    }\n\n    .navbar[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n        padding:10px 16px!important;\n    }\n\n    #footer[_ngcontent-%COMP%] {\n        background-color: var(--light);\n        display: inline;\n        padding:20px;\n    }\n\n    #footer[_ngcontent-%COMP%]   #attribution[_ngcontent-%COMP%] {\n        float:right;\n        font-size: small;\n        color: var(--navbar-dark);\n    }\n\n    #footer[_ngcontent-%COMP%]   #attribution[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color:var(--navbar-dark);\n        text-decoration: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLE9BQ2dCLCtCQUErQixVQUNqQywrQ0FBK0MsT0FDL0Msb0JBQW9CLE1BQ3BCLGlCQUFpQjtFQUM1QyxhQUFhLGNBQWMsd0NBQXdDO0VBQ25FLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQixHQUFHLDJCQUEyQjtBQUNyRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgZGlzcGxheTogZmxleDsgICAgICAgICAgICAgLyogTkVXLCBTcGVjIC0gT3BlcmEgMTIuMSwgRmlyZWZveCAyMCsgKi9cbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5uYXZiYXIge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xufVxuXG4ubmF2YmFyIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgICBoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzo1cHggMTBweCFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbGluayB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi5uYXZiYXIgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xufVxuXG4jY29udGVudCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmFja2dyb3VuZC1ncmFkaWVudCk7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWRhcmspO1xufVxuXG4ubmF2YmFyLWxvZ28ge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbn1cblxuLm5hdmJhciBhe1xuICAgIG1hcmdpbi1ib3R0b206IC02cHg7ICAvKiB3aHkgZG9lcyBpdCBkbyB0aGlzIDooICovXG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICNjb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgfVxuICAgIFxuICAgIC5uYXZiYXItbG9nbyB7XG4gICAgICAgIGhlaWdodDo2NXB4O1xuICAgIH1cblxuICAgIC5uYXZiYXItbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgIH1cblxuICAgIC5uYXZiYXIgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgICAgICBwYWRkaW5nOjEwcHggMTZweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI2Zvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgfVxuXG4gICAgI2Zvb3RlciAjYXR0cmlidXRpb24ge1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgY29sb3I6IHZhcigtLW5hdmJhci1kYXJrKTtcbiAgICB9XG5cbiAgICAjZm9vdGVyICNhdHRyaWJ1dGlvbiBhIHtcbiAgICAgICAgY29sb3I6dmFyKC0tbmF2YmFyLWRhcmspO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error-card/error-card.component */ "./src/app/error-card/error-card.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase, 'bikeshare'),
            // AngularFirestoreModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__["ErrorCardComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], 
        // AngularFirestoreModule,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                    _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__["ErrorCardComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase, 'bikeshare'),
                    // AngularFirestoreModule,
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");









class AuthenticationService {
    constructor(afAuth, afDb, router, cookieService) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.router = router;
        this.cookieService = cookieService;
        this.userDetails = null;
    }
    isLoggedIn() {
        if (this.userDetails) {
            return true;
        }
        if (this.cookieService.get('user') !== '') {
            this.userDetails = JSON.parse(this.cookieService.get('user'));
            return true;
        }
        return false;
    }
    login() {
        this.afAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider()).then(user => {
            this.userDetails = user.user;
            this.userDetails;
            this.cookieService.set('user', JSON.stringify(this.userDetails));
            this.router.navigate(['home']);
        });
    }
    logout() {
        this.cookieService.set('user', '');
        this.userDetails = undefined;
        this.afAuth.signOut().then();
    }
    changeFavorite(sysID, stationID) {
        // returns true if station is a favorite after change, false if not
        return this.isFavorite(sysID, stationID).then(b => {
            // return true;
            if (b) {
                this.removeFavorite(sysID, stationID).then();
                return false;
            }
            this.addFavorite(sysID, stationID).then();
            return true;
        });
    }
    isFavorite(sysID, stationID) {
        if (!this.userDetails) {
            return new Promise((resolve, _) => resolve(false));
        }
        return this.afDb.object('users/' + this.userDetails.uid + '/' + sysID + '/' + stationID).query.once('value').then(x => (x.val() ? true : false));
        // return this.afDb.object('users/'+this.userDetails.uid+'/'+sysID+'/'+stationID).valueChanges()
        //   .pipe(map(x=> {console.log('isFavorite observable returned.'); return (x ? true : false)}));
    }
    addFavorite(sysID, stationID) {
        let data = {};
        data['/' + sysID + '/' + stationID] = true;
        return this.userDataRef.update(data);
    }
    removeFavorite(sysID, stationID) {
        return this.afDb.object('users/' + this.userDetails.uid + '/' + sysID + '/' + stationID).remove();
    }
    getUserData() {
        if (this.isLoggedIn) {
            const userId = 'users/' + this.userDetails.uid;
            // console.log(userId);
            this.userDataRef = this.afDb.object(userId);
            // console.log('userdataref:', this.userDataRef);
            this.userData = this.afDb.object(userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
            // console.log(this.afDb.object(userId).valueChanges())
            return this.userData;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bikeshare-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/bikeshare-data.service.ts ***!
  \*******************************************/
/*! exports provided: BikeshareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeshareDataService", function() { return BikeshareDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _system_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.model */ "./src/app/system.model.ts");
/* harmony import */ var _rtdb_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rtdb.model */ "./src/app/rtdb.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");








class BikeshareDataService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.allSystems = [];
    }
    getSystemByID(sysID) {
        if (this.allSystems.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.filterArr(sysID));
        }
        return this.retrieveSystemsArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.filterArr(sysID)));
    }
    filterArr(sysID) {
        const results = this.allSystems.filter(sys => sys.systemID === sysID);
        return (results.length === 0 ? undefined : results[0]);
    }
    // getSystemByID(sysID:string): System {
    //   const results =  this.allSystems.filter(sys => sys.systemID === sysID);
    //     return (results.length === 0 ? undefined : results[0]);
    // }
    getStationInfo(sys) {
        if (!sys || sys === this.mapSelectedSystem) {
            if (this.mapStationInfoArr) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mapStationInfoArr);
            }
            else {
                return this.getFeedFromDiscovery(this.mapSelectedSystem.discoveryUrl, 'station_information').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.mapStationInfoArr = x));
            }
        }
        return this.getFeedFromDiscovery(sys.discoveryUrl, 'station_information');
    }
    getStationStatus(sys) {
        if (!sys || sys === this.mapSelectedSystem) {
            if (this.mapStationStatusArr) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mapStationStatusArr);
            }
            else {
                return this.getFeedFromDiscovery(this.mapSelectedSystem.discoveryUrl, 'station_status').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => this.mapStationStatusArr = x));
            }
        }
        return this.getFeedFromDiscovery(sys.discoveryUrl, 'station_status');
    }
    getFeedFromDiscovery(discUrl, feedName) {
        return this.http.get(discUrl, { responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x['data']['en']['feeds']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(feeds => {
            const result = feeds.filter((feed) => feed.name === feedName);
            return (result.length > 0 ? result[0].url : undefined);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(feedUrl => this.http.get(feedUrl, { responseType: 'json' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x['data']['stations']));
    }
    setSelectedSystem(sys) {
        if (sys !== this.mapSelectedSystem) {
            this.mapSelectedSystem = sys;
            this.mapStationStatusArr = undefined;
            this.mapStationInfoArr = undefined;
        }
    }
    getSelectedSystem() {
        return this.mapSelectedSystem;
    }
    // getAllSystems(): System[] {
    //   return this.allSystems;
    // }
    // returns only unsanitized csv string
    getAllSystemsCsv() {
        return this.http.get('https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv', { responseType: 'text' });
    }
    getAllSystems() {
        return this.allSystems;
    }
    retrieveSystemsArray() {
        // let allSystems = [];
        return this.getAllSystemsCsv().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.split('\n').slice(1, -1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(lines => lines.map(line => {
            const d = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2").split(',');
            return new _system_model__WEBPACK_IMPORTED_MODULE_3__["System"]({
                countryCode: d[0],
                systemName: d[1],
                location: d[2].replace('"', ''),
                systemID: d[3],
                discoveryUrl: d[5]
            });
        }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sysArr => this.allSystems = sysArr));
    }
    findName(stationID) {
        return this.mapStationInfoArr.filter(x => x.station_id === stationID)[0].name;
    }
    getSlots(station) {
        const max = 12;
        const cutoff = 2;
        const total = station.num_bikes_available + station.num_docks_available;
        let empty = Math.floor((station.num_docks_available / total) * max);
        let full = Math.floor((station.num_bikes_available / total) * max);
        if ((station.num_bikes_available - full) <= cutoff) {
            full = station.num_bikes_available;
        }
        if ((station.num_docks_available - empty) <= cutoff) {
            empty = station.num_docks_available;
        }
        return new _rtdb_model__WEBPACK_IMPORTED_MODULE_4__["StationDockInfo"]({
            empty: empty,
            full: full,
            extraEmpty: station.num_docks_available - empty,
            extraFull: station.num_bikes_available - full
        });
    }
    timeFormat(date) {
        const now = new Date();
        date = new Date((+date * 1000));
        const timeAgo = now.getTime() - date.getTime();
        if (timeAgo < 1000 * 60) { // one minute
            return '<1 minute ago';
        }
        if (timeAgo < 1000 * 60 * 60) { // one hour
            const mins = Math.floor(timeAgo / (1000 * 60));
            return mins + ' min' + (mins == 1 ? '' : 's') + ' ago';
        }
        if (timeAgo < 1000 * 60 * 60 * 24) { // one day
            const hours = Math.floor(timeAgo / (1000 * 60 * 60));
            return hours + ' hour' + (hours == 1 ? '' : 's') + ' ago';
        }
        if (timeAgo < 1000 * 60 * 60 * 24 * 30) { // one month
            const days = Math.floor(timeAgo / (1000 * 60 * 60 * 24));
            return days + ' day' + (days == 1 ? '' : 's') + ' ago';
        }
        if (timeAgo < 1000 * 60 * 60 * 24 * 365) { // one year
            const months = Math.floor(timeAgo / (1000 * 60 * 60 * 24 * 30));
            return months + ' day' + (months == 1 ? '' : 's') + ' ago';
        }
        const years = Math.floor(timeAgo / (1000 * 60 * 60 * 24 * 365));
        return years + ' year' + (years == 1 ? '' : 's') + ' ago';
    }
    generateInfoWindowHTML(station, sysID) {
        const docks = this.getSlots(station);
        let newHTML = '';
        if (!(station.is_renting && station.is_returning)) {
            newHTML += '<div class="warning"><i class="material-icons">warning</i>&nbsp;Not currently ';
            if (!station.is_renting && !station.is_returning) {
                newHTML += 'renting bikes or accepting bike returns';
            }
            else if (!station.is_renting) {
                newHTML += 'renting bikes';
            }
            else {
                newHTML += 'accepting bike returns';
            }
            newHTML += '</div>';
        }
        newHTML += '<div class="cont">';
        for (let i = 0; i < docks.full; i++) {
            newHTML += '<span class="full"></span>';
        }
        newHTML += (docks.extraFull > 0 ? '<span class="full moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraFull + '</span>' : '');
        for (let i = 0; i < docks.empty; i++) {
            newHTML += '<span class="empty"></span>';
        }
        newHTML += (docks.extraEmpty > 0 ? '<span class="empty moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraEmpty + '</span>' : '')
            + '</div><div class="footer"><div>' + station.num_bikes_available + ' available bike' + (station.num_bikes_available == 1 ? '' : 's')
            + '</div><div>' + station.num_docks_available + ' available dock' + (station.num_docks_available == 1 ? '' : 's') + '</div>'
            + '<div class="timestamp"><i class="material-icons">watch_later</i>&nbsp;Last updated ' + this.timeFormat(station.last_reported) + '</div></div>';
        return newHTML;
    }
}
BikeshareDataService.ɵfac = function BikeshareDataService_Factory(t) { return new (t || BikeshareDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
BikeshareDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BikeshareDataService, factory: BikeshareDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BikeshareDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error-card/error-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-card/error-card.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCardComponent", function() { return ErrorCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");




class ErrorCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.numSeconds = 10;
    }
    ngOnDestroy() {
        clearInterval(this.runCountdown);
    }
    updateSeconds() {
        if (this.numSeconds == 0) {
            clearInterval(this.runCountdown);
            this.router.navigate(['search']);
        }
        else {
            this.numSeconds--;
        }
    }
    ngOnInit() {
        const _this = this;
        this.runCountdown = setInterval(function () { _this.updateSeconds(); }, 1000);
    }
}
ErrorCardComponent.ɵfac = function ErrorCardComponent_Factory(t) { return new (t || ErrorCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ErrorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorCardComponent, selectors: [["app-error-card"]], decls: 10, vars: 1, consts: [[1, "with-max"], [1, "material-icons"]], template: function ErrorCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "There was a problem with the data you requested.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting you to search page in ", ctx.numSeconds, " seconds...");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLWNhcmQvZXJyb3ItY2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-card',
                templateUrl: './error-card.component.html',
                styleUrls: ['./error-card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, SystemData, StationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemData", function() { return SystemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationData", function() { return StationData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bikeshare-data.service */ "./src/app/bikeshare-data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");











function HomeComponent_mat_card_title_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "pedal_bike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0Welcome, ", ctx_r0.userInfo.displayName, "! ");
} }
function HomeComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
} }
function HomeComponent_div_4_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_7_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const station_r5 = ctx.$implicit; const sys_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleStar(sys_r3, station_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_4_div_7_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_div_7_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const station_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", station_r5.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](station_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", station_r5.displayHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const sys_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToMap(sys_r3.system); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Go to map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_4_div_7_Template, 9, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sys_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sys_r3.system.systemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sys_r3.stations);
} }
class HomeComponent {
    constructor(authenticationService, route, router, bikeshareDataService, snackBar) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.bikeshareDataService = bikeshareDataService;
        this.snackBar = snackBar;
        this.userData = [];
        this.pageLoading = true;
    }
    ngOnInit() {
        if (!this.authenticationService.isLoggedIn()) {
            this.router.navigate(['search']);
        }
        else {
            this.userInfo = this.authenticationService.userDetails;
            this.authenticationService.getUserData().subscribe((d) => {
                this.createUserSavedData(d);
            });
        }
    }
    handleStar(system, station) {
        this.authenticationService
            .changeFavorite(system.system.systemID, station.id)
            .then((x) => {
            const message = x
                ? 'The station has been added to your favorites'
                : 'The station has been removed from your favorites';
            this.snackBar.open(message, 'Dismiss', {
                duration: 3000,
            });
            this.userData.map(s => {
                if (s.system === system.system) {
                    return s.stations.map(st => {
                        if (st.id === station.id) {
                            st.favorite = x;
                        }
                        return st;
                    });
                }
                return s;
            });
            // this.systems[system.system.systemID].stations.map(st => {
            //   if(st.station_id === station.id){station.favorite = x;}
            // });
            // const r = this.userData.find((sys) => sys === system);
            // r.stations.forEach((st) => {
            //   if (st === station) {
            //     st.favorite = x;
            //   }
            // });
        });
    }
    goToMap(sys) {
        this.bikeshareDataService.setSelectedSystem(sys);
        this.router.navigate(['map', sys.systemID]);
    }
    createUserSavedData(obj) {
        for (let [key, value] of Object.entries(obj)) {
            // for each system
            let sysData = new SystemData({ stations: [] });
            this.getSystemFromId(key)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((s) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.bikeshareDataService.getStationInfo(s), this.bikeshareDataService.getStationStatus(s)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((systemData) => {
                sysData.system = s;
                for (let [station, _] of Object.entries(value)) {
                    const result = systemData[0].filter((s) => s.station_id === station)[0];
                    sysData.stations.push(new StationData({
                        name: result.name,
                        id: result.station_id,
                        displayHtml: this.bikeshareDataService.generateInfoWindowHTML(systemData[1].filter((x) => x.station_id === station)[0], s.systemID),
                        favorite: true,
                    }));
                    // this.bikeshareDataService.generateInfoWindowHTML(systemData[1].filter(x => x.station_id === station)[0], s.systemID)
                    //   .then(html => {
                    //     sysData.stations.push( new StationData({
                    //       name: systemData[0].filter(s => s.station_id === station)[0].name,
                    //       displayHtml: html
                    //     }));
                    //   });
                }
                return sysData;
            }))))
                .subscribe((x) => {
                this.userData.push(x);
                this.pageLoading = false;
            });
        }
    }
    getSystemFromId(sysID) {
        return this.bikeshareDataService.getSystemByID(sysID);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_5__["BikeshareDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[1, "with-max"], [4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "system", 4, "ngFor", "ngForOf"], [1, "material-icons", 2, "font-size", "larger"], [1, "loading-spinner"], [1, "system"], [1, "mat-raised-button", "map-button", 3, "click"], [1, "material-icons"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "star"], [1, "material-icons", 3, "ngSwitch", "click"], ["class", "filled", 4, "ngSwitchCase"], ["class", "empty", 4, "ngSwitchCase"], [1, "infoWindow"], [1, "title"], [1, "status", 3, "innerHtml"], [1, "filled"], [1, "empty"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_mat_card_title_1_Template, 4, 1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"]], styles: [".system[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    border-bottom: 1px black solid;\n}\n\n.system[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    padding-bottom: 5px;\n}\n\n.system[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display:inline-block;\n}\n\n.infoWindow[_ngcontent-%COMP%] {\n    text-align:left;\n}\n\n.system[_ngcontent-%COMP%]   .map-button[_ngcontent-%COMP%] {\n    float:right;\n}\n\n.content[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n    padding:10px;\n    color: var(--gold);\n    vertical-align: top;\n    margin-top:35px;\n}\n\n.content[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%] {\n    padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN5c3RlbSBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xufVxuXG4uc3lzdGVtIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnN5c3RlbSAuY29udGVudCBzcGFuIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLmluZm9XaW5kb3cge1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cblxuLnN5c3RlbSAubWFwLWJ1dHRvbiB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi5jb250ZW50IC5zdGFyIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLXRvcDozNXB4O1xufVxuXG4uY29udGVudCAuc3RhciBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_5__["BikeshareDataService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();
class SystemData {
    constructor(init) {
        Object.assign(this, init);
    }
}
class StationData {
    constructor(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/images.ts":
/*!***************************!*\
  !*** ./src/app/images.ts ***!
  \***************************/
/*! exports provided: backgrounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgrounds", function() { return backgrounds; });
var backgrounds = [
    {
        url: '../assets/bg_images/julia-stepper-CeFDIMF4Bu4-unsplash.jpg',
        attribution: 'Viviana Rishe',
        hyperlink: 'https://unsplash.com/photos/CeFDIMF4Bu4'
    },
    {
        url: '../assets/bg_images/morgan-von-gunten-Spx31sWjKZE-unsplash.jpg',
        attribution: 'Morgan Von Gunten',
        hyperlink: 'https://unsplash.com/photos/Spx31sWjKZE'
    },
    {
        url: '../assets/bg_images/sebastian-herrmann-gPtOEPx_Cjw-unsplash.jpg',
        attribution: 'Sebastian Herrmann',
        hyperlink: 'https://unsplash.com/photos/gPtOEPx_Cjw'
    },
    {
        url: '../assets/bg_images/viviana-rishe-HukxHhrVeiM-unsplash.jpg',
        attribution: 'Viviana Rishe',
        hyperlink: 'https://unsplash.com/photos/HukxHhrVeiM'
    },
    {
        url: '../assets/bg_images/viviana-rishe-IOu70_yVBsA-unsplash.jpg',
        attribution: 'Viviana Rishe',
        hyperlink: 'https://unsplash.com/photos/IOu70_yVBsA'
    },
    {
        url: '../assets/bg_images/victor-xok-Gi0OMNguFaw-unsplash.jpg',
        attribution: 'Victor Xok',
        hyperlink: 'https://unsplash.com/photos/Gi0OMNguFaw'
    },
    {
        url: '../assets/bg_images/everton-vila-AsahNlC0VhQ-unsplash.jpg',
        attribution: 'Everton Vila',
        hyperlink: 'https://unsplash.com/photos/AsahNlC0VhQ'
    }
];


/***/ }),

/***/ "./src/app/live-search.service.ts":
/*!****************************************!*\
  !*** ./src/app/live-search.service.ts ***!
  \****************************************/
/*! exports provided: LiveSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSearchService", function() { return LiveSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bikeshare-data.service */ "./src/app/bikeshare-data.service.ts");



class LiveSearchService {
    constructor(bikeshareDataService) {
        this.bikeshareDataService = bikeshareDataService;
    }
    match(system, str) {
        str = str.toLowerCase();
        return system.location.toLowerCase().startsWith(str) || system.systemName.toLowerCase().startsWith(str);
    }
    getAllMatches(search) {
        return this.bikeshareDataService.getAllSystems().filter(sys => this.match(sys, search));
    }
}
LiveSearchService.ɵfac = function LiveSearchService_Factory(t) { return new (t || LiveSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__["BikeshareDataService"])); };
LiveSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LiveSearchService, factory: LiveSearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__["BikeshareDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





class LoginComponent {
    constructor(authenticationService, snackBar) {
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        if (this.authenticationService.isLoggedIn()) {
            this.authenticationService.logout();
            this.snackBar.open('You have been logged out.', 'Dismiss', {
                duration: 3000
            });
        }
    }
    onLogin() {
        this.authenticationService.login();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 0, consts: [[1, "with-max"], [1, "material-icons"], [1, "mat-raised-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in to BikeshareBuddy with your Google account to save your favorite stations and easily view their status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _marker_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marker.Model */ "./src/app/marker.Model.ts");
/* harmony import */ var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bikeshare-data.service */ "./src/app/bikeshare-data.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error-card/error-card.component */ "./src/app/error-card/error-card.component.ts");










function MapComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
} }
function MapComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove station from favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add station to favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleStar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapComponent_div_1_i_4_Template, 2, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_div_1_i_5_Template, 2, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapComponent_div_1_span_7_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MapComponent_div_1_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.findName(ctx_r1.openInfoWindowID), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.isFave);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.isFave);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
} }
function MapComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class MapComponent {
    constructor(bikeshareDataService, authenticationService, route, router, snackBar) {
        this.bikeshareDataService = bikeshareDataService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.title = 'bikeshare';
        this.info_window = new google.maps.InfoWindow({ content: '' });
        this.markers = {};
        this.infoWindows = {};
        this.pageLoading = true;
        this.showErrorCard = false;
    }
    ngOnInit() {
        if (!this.bikeshareDataService.getSelectedSystem()) {
            // current system not set
            this.bikeshareDataService.getSystemByID(this.route.snapshot.paramMap.get('systemID'))
                .subscribe(sys => {
                this.bikeshareDataService.setSelectedSystem(sys);
                this.getStationInfo();
            });
        }
        else {
            this.getStationInfo();
        }
        if (this.authenticationService.isLoggedIn()) {
            this.authenticationService.getUserData().subscribe();
        }
    }
    calculateCenter() {
        let lat = 0;
        let lng = 0;
        let counter = 0;
        this.bikeshareDataService.mapStationInfoArr.forEach(station => {
            lat += station.lat;
            lng += station.lon;
            counter++;
        });
        return [lat / counter, lng / counter];
    }
    generateMap() {
        const center = this.calculateCenter();
        const mapProperties = {
            center: new google.maps.LatLng(center[0], center[1]),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('map'), mapProperties);
    }
    addMarkers() {
        let markerProperties = {
            map: this.map
            // icon: '../../assets/place-24px.png'
        };
        this.bikeshareDataService.mapStationInfoArr.forEach(station => {
            markerProperties['position'] = new google.maps.LatLng(station.lat, station.lon);
            this.markers[station.station_id] = new _marker_Model__WEBPACK_IMPORTED_MODULE_1__["Marker"](station.name, new google.maps.Marker(markerProperties));
        });
    }
    handleStar() {
        if (!this.authenticationService.isLoggedIn()) {
            this.openSnackBar('You must be signed in to add a station to your favorites', 'Dismiss');
        }
        else {
            this.authenticationService.changeFavorite(this.bikeshareDataService.getSelectedSystem().systemID, this.openInfoWindowID)
                .then(x => {
                this.isFave = x;
                const message = (x ? 'The station has been added to your favorites' : 'The station has been removed from your favorites');
                this.openSnackBar(message, 'Dismiss');
            });
        }
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
    addInfoWindows() {
        this.bikeshareDataService.mapStationStatusArr.forEach(station => {
            let marker = this.markers[station.station_id];
            if (marker) {
                // var _this = this;
                // this.infoWindows[station.station_id] = new google.maps.InfoWindow({
                //   content:this.generateInfoWindowHTML(marker.name, station)
                // });
                google.maps.event.addListener(marker.marker, 'click', () => {
                    this.info_window.close();
                    this.info_window.setContent(this.generateInfoWindowHTML(marker.name, station));
                    this.info_window.open(this.map, marker.marker);
                    this.openInfoWindowID = station.station_id;
                    google.maps.event.addListener(this.info_window, 'closeclick', () => {
                        this.openInfoWindowID = undefined;
                    });
                    this.isFavorite(this.openInfoWindowID).then(x => {
                        this.isFave = x;
                    });
                    // // if(document.querySelector('#button')){
                    //   document.querySelector('#button')
                    //   .addEventListener('click', () => {
                    //     this.handleStar(station.station_id);
                    //     //this.generateInfoWindowHTML(marker.name, station);
                    //   });
                    // // }
                });
            }
        });
        // this.waitForElementToDisplay('#button', 500);
        // google.maps.event.addListener(this.info_window, 'domready', () => {
        // });
    }
    findName(stationID) {
        return this.bikeshareDataService.findName(stationID);
    }
    isFavorite(stationID) {
        return this.authenticationService.isFavorite(this.bikeshareDataService.getSelectedSystem().systemID, stationID);
    }
    generateInfoWindowHTML(title, station) {
        return '<div class="infoWindow"><h3>' + title + '</h3>' + this.bikeshareDataService.generateInfoWindowHTML(station) + '</div>';
    }
    getStationInfo() {
        this.bikeshareDataService.getStationInfo()
            .subscribe(x => {
            if (x === []) {
                this.handleError();
            }
            else {
                if (!this.map) {
                    this.generateMap();
                }
                this.getStationStatus();
            }
        }, err => this.handleError());
    }
    getStationStatus() {
        this.bikeshareDataService.getStationStatus()
            .subscribe(x => {
            this.addMarkers();
            this.addInfoWindows();
            this.pageLoading = false;
        }, err => this.handleError());
    }
    handleError() {
        this.pageLoading = false;
        this.showErrorCard = true;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 5, vars: 3, consts: [["class", "loading-spinner", 4, "ngIf"], ["id", "star-container", 4, "ngIf"], [4, "ngIf"], ["id", "map-container"], ["id", "map"], [1, "loading-spinner"], ["id", "star-container"], [1, "title"], [1, "star", "col", 3, "ngSwitch", "click"], ["class", "material-icons filled", 4, "ngSwitchCase"], ["class", "material-icons empty", 4, "ngSwitchCase"], [1, "desc", "col", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "material-icons", "filled"], [1, "material-icons", "empty"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_div_1_Template, 9, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openInfoWindowID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_8__["ErrorCardComponent"]], styles: ["#map-container[_ngcontent-%COMP%] {\n    height:100%;\n}\n\n#map-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height:100%!important;\n}\n\n#star-container[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:10px;\n    left:10px;\n    padding:12px;\n    background-color: white;\n    z-index: 1;\n    border-radius:3px;\n    box-shadow: 0 0 4px rgba(0,0,0,0.2);\n}\n\n#star-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    border-bottom: 1px solid #e6e6e6;\n    padding-bottom: 5px;\n}\n\n#star-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n    padding: 0 5px;\n}\n\n#star-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n#star-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.star.col[_ngcontent-%COMP%] {\n    padding:8px 0 8px 8px;\n}\n\n.desc.col[_ngcontent-%COMP%] {\n    padding:8px 8px 0 0;\n}\n\n#star-container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: smaller;\n    color: var(--gray);\n}\n\n#footer[_ngcontent-%COMP%] {\n    display:none!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcC1jb250YWluZXIge1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4jbWFwLWNvbnRhaW5lciBkaXYge1xuICAgIGhlaWdodDoxMDAlIWltcG9ydGFudDtcbn1cblxuI3N0YXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjEwcHg7XG4gICAgbGVmdDoxMHB4O1xuICAgIHBhZGRpbmc6MTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4jc3Rhci1jb250YWluZXIgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4jc3Rhci1jb250YWluZXIgLnN0YXIge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4jc3Rhci1jb250YWluZXIgLnN0YXIgaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc3Rhci1jb250YWluZXIgLmNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3Rhci5jb2wge1xuICAgIHBhZGRpbmc6OHB4IDAgOHB4IDhweDtcbn1cblxuLmRlc2MuY29sIHtcbiAgICBwYWRkaW5nOjhweCA4cHggMCAwO1xufVxuXG4jc3Rhci1jb250YWluZXIgLmRlc2Mge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/marker.Model.ts":
/*!*********************************!*\
  !*** ./src/app/marker.Model.ts ***!
  \*********************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
class Marker {
    constructor(n, m) {
        this.name = n;
        this.marker = m;
    }
}


/***/ }),

/***/ "./src/app/rtdb.model.ts":
/*!*******************************!*\
  !*** ./src/app/rtdb.model.ts ***!
  \*******************************/
/*! exports provided: UserData, UserSystem, UserStation, StationDockInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSystem", function() { return UserSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStation", function() { return UserStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationDockInfo", function() { return StationDockInfo; });
class UserData {
    constructor(init) {
        Object.assign(this, init);
    }
}
class UserSystem {
}
class UserStation {
}
class StationDockInfo {
    constructor(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _live_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live-search.service */ "./src/app/live-search.service.ts");
/* harmony import */ var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bikeshare-data.service */ "./src/app/bikeshare-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function SearchComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const sys_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleSelect(sys_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sys_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.selectedSystem === sys_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sys_r2.systemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sys_r2.location);
} }
function SearchComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a system before continuing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(liveSearchService, bikeshareDataService, route, router) {
        this.liveSearchService = liveSearchService;
        this.bikeshareDataService = bikeshareDataService;
        this.route = route;
        this.router = router;
        this.switchToMap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorSelectSystem = false;
    }
    ngOnInit() {
        this.bikeshareDataService.retrieveSystemsArray().subscribe();
    }
    runSearch(event) {
        this.searchResults = this.liveSearchService.getAllMatches(event.target.value).filter(sys => sys !== this.selectedSystem);
        if (this.selectedSystem) {
            this.searchResults.unshift(this.selectedSystem);
        } // selected always shows up first in results
    }
    handleSelect(sys) {
        if (this.selectedSystem === sys) {
            this.continue();
        }
        else {
            this.selectedSystem = sys;
        }
    }
    continue() {
        if (this.selectedSystem) {
            // system has been selected
            this.bikeshareDataService.setSelectedSystem(this.selectedSystem);
            this.router.navigate(['map', this.bikeshareDataService.getSelectedSystem().systemID]);
        }
        else {
            // system has not been selected, show error
            this.errorSelectSystem = true;
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_live_search_service__WEBPACK_IMPORTED_MODULE_1__["LiveSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { switchToMap: "switchToMap" }, decls: 24, vars: 2, consts: [[1, "with-max"], [1, "material-icons"], [1, "light"], [2, "width", "100%"], ["type", "text", "matInput", "", 3, "keyup"], [1, "search-results"], ["class", "result", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "next-button", 3, "click"], ["class", "error-text", 4, "ngIf"], [1, "result", 3, "click"], [1, "error-text"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for a System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search by system name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(eg \"Nice Ride\")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " or location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(eg \"Minneapolis\")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". Searching by country is not currently supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_17_listener($event) { return ctx.runSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchComponent_div_19_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_21_listener() { return ctx.continue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SearchComponent_span_23_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorSelectSystem);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n    z-index:0;\n}\n\n.search-results[_ngcontent-%COMP%] {\n    max-height:200px;\n    overflow-y: scroll;\n    margin: -20px 0px 10px 0px;\n    z-index: 1;\n    position: relative; \n}\n\n.search-results[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.search-results[_ngcontent-%COMP%]   .result.selected[_ngcontent-%COMP%] {\n    background-color: var(--result-highlight);\n    color:var(--light);\n}\n\n.light[_ngcontent-%COMP%] {\n    color: var(--text-gray);\n    font-style:italic;\n}\n\n.error-text[_ngcontent-%COMP%] {\n    padding:10px;\n    font-size: small;\n    color:var(--error-red);\n}\n\nbutton.next-button[_ngcontent-%COMP%] {\n    \n    display:block;\n    width:100%;\n    background-color: var(--navbar-dark);\n    color: var(--light);\n}\n\n@media only screen and (min-width: 600px) {\n    .search-results[_ngcontent-%COMP%] {\n        max-height: 300px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7eUJBQ3FCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgei1pbmRleDowO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6MjAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbjogLTIwcHggMHB4IDEwcHggMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cyAucmVzdWx0LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXN1bHQtaGlnaGxpZ2h0KTtcbiAgICBjb2xvcjp2YXIoLS1saWdodCk7XG59XG5cbi5saWdodCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheSk7XG4gICAgZm9udC1zdHlsZTppdGFsaWM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjp2YXIoLS1lcnJvci1yZWQpO1xufVxuXG5idXR0b24ubmV4dC1idXR0b24ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: _live_search_service__WEBPACK_IMPORTED_MODULE_1__["LiveSearchService"] }, { type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { switchToMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/system.model.ts":
/*!*********************************!*\
  !*** ./src/app/system.model.ts ***!
  \*********************************/
/*! exports provided: System */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "System", function() { return System; });
class System {
    constructor(init) {
        Object.assign(this, init);
    }
}


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDYNH1I2TSqF1mG4txz9RiUE0WyWVx0Zw4",
        authDomain: "bikeshare-ee539.firebaseapp.com",
        databaseURL: "https://bikeshare-ee539.firebaseio.com",
        projectId: "bikeshare-ee539",
        storageBucket: "bikeshare-ee539.appspot.com",
        messagingSenderId: "101519497899",
        appId: "1:101519497899:web:31abce2af00b4ed3e535ee",
        measurementId: "G-HQYPBGLC86"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lauraschultz/Documents/projects/bikeshare-frontend/bikeshare/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map