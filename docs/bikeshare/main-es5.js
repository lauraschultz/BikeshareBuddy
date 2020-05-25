function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");

    var routes = [{
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    }, {
      path: 'map/:systemID',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
    }, {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./images */
    "./src/app/images.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'BikeshareBuddy';
      }

      _createClass(AppComponent, [{
        key: "onResize",
        value: function onResize() {
          if (window.innerWidth >= 600) {
            document.getElementById('content').style.backgroundImage = "url('" + _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].url + "')";
            document.getElementById('attribution').innerHTML = '<i class="material-icons" style="font-size:small">panorama</i>&nbsp;Background image: ' + '<a style="color: var(--navbar-dark);text-decoration: none;border-bottom: 1.5px solid;padding: 0px 2px;" target="_blank" href="' + _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].hyperlink + '">' + _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"][this.photoId].attribution + '</a>';
          } else {
            document.getElementById('content').style.backgroundImage = 'var(--background-gradient)';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoId = Math.floor(Math.random() * _images__WEBPACK_IMPORTED_MODULE_1__["backgrounds"].length);
          this.onResize();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [[1, "container", 3, "resize"], [1, "row", "navbar"], ["routerLink", ""], ["src", "../assets/bb_logo.svg", 1, "navbar-logo"], ["id", "content", 1, "row"], ["id", "footer", 1, "row"], ["id", "attribution"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\n    height:100%;                          \n  display: flex;             \n  flex-flow: column;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height:auto!important;\n    padding:5px 10px!important;\n}\n\n#content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    background-image: var(--background-gradient);\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: var(--navbar-dark);\n}\n\n.navbar-logo[_ngcontent-%COMP%] {\n    height:50px;\n    box-shadow: 2px 2px 6px rgba(0,0,0,0.5);\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    margin-bottom: -6px;  \n}\n\n#footer[_ngcontent-%COMP%] {\n    display:none;\n}\n\n@media only screen and (min-width: 600px) {\n    #content[_ngcontent-%COMP%] {\n        \n        background-position: center;\n        background-repeat: no-repeat;\n        background-size:cover;\n    }\n    \n    .navbar-logo[_ngcontent-%COMP%] {\n        height:65px;\n    }\n\n    .navbar[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n        padding:10px 16px!important;\n    }\n\n    #footer[_ngcontent-%COMP%] {\n        display: inline;\n        padding:20px;\n    }\n\n    #footer[_ngcontent-%COMP%]   #attribution[_ngcontent-%COMP%] {\n        float:right;\n        font-size: small;\n        color: var(--navbar-dark);\n    }\n\n    #footer[_ngcontent-%COMP%]   #attribution[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color:var(--navbar-dark);\n        text-decoration: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLE9BQ2dCLCtCQUErQixVQUNqQywrQ0FBK0MsT0FDL0Msb0JBQW9CLE1BQ3BCLGlCQUFpQjtFQUM1QyxhQUFhLGNBQWMsd0NBQXdDO0VBQ25FLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUIsR0FBRywyQkFBMkI7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSx5RkFBeUY7UUFDekYsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAvKiBORVcsIFNwZWMgLSBPcGVyYSAxMi4xLCBGaXJlZm94IDIwKyAqL1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuLm5hdmJhciB7XG4gICAgZmxleDogMCAxIGF1dG87XG59XG5cbi5uYXZiYXIgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDphdXRvIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOjVweCAxMHB4IWltcG9ydGFudDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJhY2tncm91bmQtZ3JhZGllbnQpO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWRhcmspO1xufVxuXG4ubmF2YmFyLWxvZ28ge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbn1cblxuLm5hdmJhciBhe1xuICAgIG1hcmdpbi1ib3R0b206IC02cHg7ICAvKiB3aHkgZG9lcyBpdCBkbyB0aGlzIDooICovXG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICNjb250ZW50IHtcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmdfaW1hZ2VzL2p1bGlhLXN0ZXBwZXItQ2VGRElNRjRCdTQtdW5zcGxhc2guanBnJyk7ICovXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIH1cbiAgICBcbiAgICAubmF2YmFyLWxvZ28ge1xuICAgICAgICBoZWlnaHQ6NjVweDtcbiAgICB9XG5cbiAgICAubmF2YmFyIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgICAgICAgcGFkZGluZzoxMHB4IDE2cHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICB9XG5cbiAgICAjZm9vdGVyICNhdHRyaWJ1dGlvbiB7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICBjb2xvcjogdmFyKC0tbmF2YmFyLWRhcmspO1xuICAgIH1cblxuICAgICNmb290ZXIgI2F0dHJpYnV0aW9uIGEge1xuICAgICAgICBjb2xvcjp2YXIoLS1uYXZiYXItZGFyayk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./error-card/error-card.component */
    "./src/app/error-card/error-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__["ErrorCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_14__["ErrorCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bikeshare-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/bikeshare-data.service.ts ***!
    \*******************************************/

  /*! exports provided: BikeshareDataService */

  /***/
  function srcAppBikeshareDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BikeshareDataService", function () {
      return BikeshareDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _system_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./system.model */
    "./src/app/system.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BikeshareDataService = /*#__PURE__*/function () {
      function BikeshareDataService(http) {
        _classCallCheck(this, BikeshareDataService);

        this.http = http;
        this.allSystems = [];
        this.systemError = false;
      } // return feed url of feedName from the currently selected system


      _createClass(BikeshareDataService, [{
        key: "getFeedFromDiscovery",
        value: function getFeedFromDiscovery(feedName) {
          return this.http.get(this.selectedSystem.discoveryUrl, {
            responseType: 'json'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return x['data']['en']['feeds'];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (feeds) {
            return feeds.filter(function (feed) {
              return feed.name === feedName;
            })[0].url;
          }));
        }
      }, {
        key: "setSelectedSystem",
        value: function setSelectedSystem(sys) {
          console.log('system set:', sys);
          this.selectedSystem = sys;
        }
      }, {
        key: "getSelectedSystem",
        value: function getSelectedSystem() {
          return this.selectedSystem;
        }
      }, {
        key: "getAllSystems",
        value: function getAllSystems() {
          return this.allSystems;
        } // returns only unsanitized csv string

      }, {
        key: "getAllSystemsCsv",
        value: function getAllSystemsCsv() {
          return this.http.get('https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv', {
            responseType: 'text'
          });
        }
      }, {
        key: "getSystemFeed",
        value: function getSystemFeed(feedName) {
          var _this2 = this;

          return this.getFeedFromDiscovery(feedName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (feed) {
            return _this2.http.get(feed, {
              responseType: 'json'
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            _this2.systemError = false;
            return x['data']['stations'];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2));
        } // private handleError(error: HttpErrorResponse) {
        //   // if (error.error instanceof ErrorEvent) {
        //   //   // A client-side or network error occurred. Handle it accordingly.
        //   //   console.error('An error occurred:', error.error.message);
        //   // } else {
        //   //   // The backend returned an unsuccessful response code.
        //   //   // The response body may contain clues as to what went wrong,
        //   //   console.error(
        //   //     `Backend returned code ${error.status}, ` +
        //   //     `body was: ${error.error}`);
        //   // }
        //   // return an observable with a user-facing error message
        //   this.systemError = true;
        //   return throwError(
        //     'Something bad happened; please try again later.');
        // };
        // sets selected system according to given systemID

      }, {
        key: "setSystemByID",
        value: function setSystemByID(sysID) {
          var _this3 = this;

          return this.getSystemsArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sysArray) {
            console.log('allsystems is: ', _this3.allSystems);

            var results = _this3.allSystems.filter(function (sys) {
              return sys.systemID == sysID;
            });

            _this3.selectedSystem = results.length == 0 ? undefined : results[0];
          }));
        }
      }, {
        key: "getSystemsArray",
        value: function getSystemsArray() {
          var _this4 = this;

          // let allSystems = [];
          return this.getAllSystemsCsv().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data.split('\n').slice(1, -1);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (lines) {
            return lines.map(function (line) {
              //line = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2"); // fix problem with comma in the location name
              var d = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2").split(',');
              return new _system_model__WEBPACK_IMPORTED_MODULE_2__["System"]({
                countryCode: d[0],
                systemName: d[1],
                location: d[2].replace('"', ''),
                systemID: d[3],
                discoveryUrl: d[5]
              });
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sysArr) {
            return _this4.allSystems = sysArr;
          }));
        }
      }]);

      return BikeshareDataService;
    }();

    BikeshareDataService.ɵfac = function BikeshareDataService_Factory(t) {
      return new (t || BikeshareDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    BikeshareDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BikeshareDataService,
      factory: BikeshareDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BikeshareDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error-card/error-card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/error-card/error-card.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorCardComponent */

  /***/
  function srcAppErrorCardErrorCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCardComponent", function () {
      return ErrorCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var ErrorCardComponent = /*#__PURE__*/function () {
      function ErrorCardComponent(route, router) {
        _classCallCheck(this, ErrorCardComponent);

        this.route = route;
        this.router = router;
        this.numSeconds = 10;
      }

      _createClass(ErrorCardComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.runCountdown);
        }
      }, {
        key: "updateSeconds",
        value: function updateSeconds() {
          if (this.numSeconds == 0) {
            clearInterval(this.runCountdown);
            this.router.navigate(['search']);
          } else {
            this.numSeconds--;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.runCountdown = setInterval(function () {
            _this.updateSeconds();
          }, 1000);
        }
      }]);

      return ErrorCardComponent;
    }();

    ErrorCardComponent.ɵfac = function ErrorCardComponent_Factory(t) {
      return new (t || ErrorCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ErrorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorCardComponent,
      selectors: [["app-error-card"]],
      decls: 10,
      vars: 1,
      consts: [[1, "with-max"], [1, "material-icons"]],
      template: function ErrorCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0Oops!");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Redirecting you to search page in ", ctx.numSeconds, " seconds...");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLWNhcmQvZXJyb3ItY2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-card',
          templateUrl: './error-card.component.html',
          styleUrls: ['./error-card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/images.ts":
  /*!***************************!*\
    !*** ./src/app/images.ts ***!
    \***************************/

  /*! exports provided: backgrounds */

  /***/
  function srcAppImagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backgrounds", function () {
      return backgrounds;
    });

    var backgrounds = [{
      url: '../assets/bg_images/julia-stepper-CeFDIMF4Bu4-unsplash.jpg',
      attribution: 'Viviana Rishe',
      hyperlink: 'https://unsplash.com/photos/CeFDIMF4Bu4'
    }, {
      url: '../assets/bg_images/morgan-von-gunten-Spx31sWjKZE-unsplash.jpg',
      attribution: 'Morgan Von Gunten',
      hyperlink: 'https://unsplash.com/photos/Spx31sWjKZE'
    }, {
      url: '../assets/bg_images/sebastian-herrmann-gPtOEPx_Cjw-unsplash.jpg',
      attribution: 'Sebastian Herrmann',
      hyperlink: 'https://unsplash.com/photos/gPtOEPx_Cjw'
    }, {
      url: '../assets/bg_images/viviana-rishe-HukxHhrVeiM-unsplash.jpg',
      attribution: 'Viviana Rishe',
      hyperlink: 'https://unsplash.com/photos/HukxHhrVeiM'
    }, {
      url: '../assets/bg_images/viviana-rishe-IOu70_yVBsA-unsplash.jpg',
      attribution: 'Viviana Rishe',
      hyperlink: 'https://unsplash.com/photos/IOu70_yVBsA'
    }, {
      url: '../assets/bg_images/victor-xok-Gi0OMNguFaw-unsplash.jpg',
      attribution: 'Victor Xok',
      hyperlink: 'https://unsplash.com/photos/Gi0OMNguFaw'
    }, {
      url: '../assets/bg_images/everton-vila-AsahNlC0VhQ-unsplash.jpg',
      attribution: 'Everton Vila',
      hyperlink: 'https://unsplash.com/photos/AsahNlC0VhQ'
    }];
    /***/
  },

  /***/
  "./src/app/live-search.service.ts":
  /*!****************************************!*\
    !*** ./src/app/live-search.service.ts ***!
    \****************************************/

  /*! exports provided: LiveSearchService */

  /***/
  function srcAppLiveSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveSearchService", function () {
      return LiveSearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bikeshare-data.service */
    "./src/app/bikeshare-data.service.ts");

    var LiveSearchService = /*#__PURE__*/function () {
      function LiveSearchService(bikeshareDataService) {
        _classCallCheck(this, LiveSearchService);

        this.bikeshareDataService = bikeshareDataService;
      }

      _createClass(LiveSearchService, [{
        key: "match",
        value: function match(system, str) {
          str = str.toLowerCase();
          return system.location.toLowerCase().startsWith(str) || system.systemName.toLowerCase().startsWith(str);
        }
      }, {
        key: "getAllMatches",
        value: function getAllMatches(search) {
          var _this5 = this;

          return this.bikeshareDataService.getAllSystems().filter(function (sys) {
            return _this5.match(sys, search);
          });
        }
      }]);

      return LiveSearchService;
    }();

    LiveSearchService.ɵfac = function LiveSearchService_Factory(t) {
      return new (t || LiveSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__["BikeshareDataService"]));
    };

    LiveSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LiveSearchService,
      factory: LiveSearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_1__["BikeshareDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent, StationDockInfo */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StationDockInfo", function () {
      return StationDockInfo;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _marker_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../marker.Model */
    "./src/app/marker.Model.ts");
    /* harmony import */


    var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bikeshare-data.service */
    "./src/app/bikeshare-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../error-card/error-card.component */
    "./src/app/error-card/error-card.component.ts");

    var _c0 = ["map"];

    function MapComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 4);
      }
    }

    function MapComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(bikeshareDataService, route, router) {
        _classCallCheck(this, MapComponent);

        this.bikeshareDataService = bikeshareDataService;
        this.route = route;
        this.router = router;
        this.switchToSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = 'bikeshare';
        this.info_window = new google.maps.InfoWindow({
          content: ''
        });
        this.markers = {};
        this.pageLoading = true;
        this.showErrorCard = false;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.current_system = this.route.snapshot.paramMap.get('systemID');
          console.log('the system id is ' + this.current_system);

          if (!this.bikeshareDataService.getSelectedSystem()) {
            // current system not set
            this.bikeshareDataService.setSystemByID(this.current_system).subscribe(function () {
              return _this6.getStationInfo();
            }); // console.log('now current system is ' + this.bikeshareDataService.getSelectedSystem());
          } else {
            this.getStationInfo();
          }
        }
      }, {
        key: "getSlots",
        value: function getSlots(station) {
          var max = 15;
          var cutoff = 2;
          var total = station.num_bikes_available + station.num_docks_available;
          var empty = Math.floor(station.num_docks_available / total * max);
          var full = Math.floor(station.num_bikes_available / total * max);

          if (station.num_bikes_available - full <= cutoff) {
            full = station.num_bikes_available;
          }

          if (station.num_docks_available - empty <= cutoff) {
            empty = station.num_docks_available;
          }

          return new StationDockInfo({
            empty: empty,
            full: full,
            extraEmpty: station.num_docks_available - empty,
            extraFull: station.num_bikes_available - full
          });
        }
      }, {
        key: "timeFormat",
        value: function timeFormat(date) {
          var now = new Date();
          date = new Date(+date * 1000);
          var timeAgo = now.getTime() - date.getTime();

          if (timeAgo < 1000 * 60) {
            // one minute
            return '<1 minute ago';
          }

          if (timeAgo < 1000 * 60 * 60) {
            // one hour
            var mins = Math.floor(timeAgo / (1000 * 60));
            return mins + ' min' + (mins == 1 ? '' : 's') + ' ago';
          }

          if (timeAgo < 1000 * 60 * 60 * 24) {
            // one day
            var hours = Math.floor(timeAgo / (1000 * 60 * 60));
            return hours + ' hour' + (hours == 1 ? '' : 's') + ' ago';
          }

          if (timeAgo < 1000 * 60 * 60 * 24 * 30) {
            // one month
            var days = Math.floor(timeAgo / (1000 * 60 * 60 * 24));
            return days + ' day' + (days == 1 ? '' : 's') + ' ago';
          }

          if (timeAgo < 1000 * 60 * 60 * 24 * 365) {
            // one year
            var months = Math.floor(timeAgo / (1000 * 60 * 60 * 24 * 30));
            return months + ' day' + (months == 1 ? '' : 's') + ' ago';
          }

          var years = Math.floor(timeAgo / (1000 * 60 * 60 * 24 * 365));
          return years + ' year' + (years == 1 ? '' : 's') + ' ago';
        }
      }, {
        key: "generateInfoWindowHTML",
        value: function generateInfoWindowHTML(title, station) {
          var docks = this.getSlots(station);
          var newHTML = '<div class="infoWindow"><h3>' + title + '</h3>';

          if (!(station.is_renting && station.is_returning)) {
            newHTML += '<div class="warning"><i class="material-icons">warning</i>&nbsp;Not currently ';

            if (!station.is_renting && !station.is_returning) {
              newHTML += 'renting bikes or accepting bike returns';
            } else if (!station.is_renting) {
              newHTML += 'renting bikes';
            } else {
              newHTML += 'accepting bike returns';
            }

            newHTML += '</div>';
          }

          newHTML += '<div class="cont">';

          for (var i = 0; i < docks.full; i++) {
            newHTML += '<span class="full"></span>';
          }

          newHTML += docks.extraFull > 0 ? '<span class="full moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraFull + '</span>' : '';

          for (var _i = 0; _i < docks.empty; _i++) {
            newHTML += '<span class="empty"></span>';
          }

          newHTML += docks.extraEmpty > 0 ? '<span class="empty moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraEmpty + '</span>' : '';
          newHTML += '</div><div class="footer"><div>' + station.num_bikes_available + ' available bike' + (station.num_bikes_available == 1 ? '' : 's') + '</div>';
          newHTML += '<div>' + station.num_docks_available + ' available dock' + (station.num_docks_available == 1 ? '' : 's') + '</div>';
          newHTML += '<div class="timestamp"><i class="material-icons">watch_later</i>&nbsp;Last updated ' + this.timeFormat(station.last_reported) + '</div></div></div>';
          return newHTML;
        }
      }, {
        key: "calculateCenter",
        value: function calculateCenter() {
          var lat = 0;
          var lng = 0;
          var counter = 0;
          this.station_info.forEach(function (station) {
            lat += station.lat;
            lng += station.lon;
            counter++;
          });
          return [lat / counter, lng / counter];
        }
      }, {
        key: "generateMap",
        value: function generateMap() {
          var center = this.calculateCenter();
          var mapProperties = {
            center: new google.maps.LatLng(center[0], center[1]),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
        }
      }, {
        key: "addMarkers",
        value: function addMarkers() {
          var _this7 = this;

          var markerProperties = {
            map: this.map // icon: '../../assets/place-24px.png'

          };
          this.station_info.forEach(function (station) {
            markerProperties['position'] = new google.maps.LatLng(station.lat, station.lon);
            _this7.markers[station.station_id] = new _marker_Model__WEBPACK_IMPORTED_MODULE_1__["Marker"](station.name, new google.maps.Marker(markerProperties));
          });
        }
      }, {
        key: "addInfoWindows",
        value: function addInfoWindows() {
          var _this8 = this;

          this.station_status.forEach(function (station) {
            var marker = _this8.markers[station.station_id];
            var _this = _this8;
            google.maps.event.addListener(marker.marker, 'click', function () {
              _this.info_window.close();

              _this.info_window.setContent(_this.generateInfoWindowHTML(marker.name, station));

              _this.info_window.open(_this.map, marker.marker);
            });
          });
        }
      }, {
        key: "getStationInfo",
        value: function getStationInfo() {
          var _this9 = this;

          this.bikeshareDataService.getSystemFeed('station_information').subscribe(function (x) {
            // console.log('got station info:', x);
            _this9.station_info = x;

            _this9.getStationStatus();

            if (!_this9.map) {
              _this9.generateMap();
            }
          }, function (err) {
            return _this9.handleError();
          });
        }
      }, {
        key: "getStationStatus",
        value: function getStationStatus() {
          var _this10 = this;

          this.bikeshareDataService.getSystemFeed('station_status').subscribe(function (x) {
            // console.log('got station status:', x);
            _this10.station_status = x;

            _this10.addMarkers();

            _this10.addInfoWindows();

            _this10.pageLoading = false;
          }, function (err) {
            return _this10.handleError();
          });
        }
      }, {
        key: "handleError",
        value: function handleError() {
          this.pageLoading = false;
          this.showErrorCard = true;
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
        }
      },
      outputs: {
        switchToSearch: "switchToSearch"
      },
      decls: 5,
      vars: 2,
      consts: [["class", "loading-spinner", 4, "ngIf"], [4, "ngIf"], ["id", "map-container"], ["map", ""], [1, "loading-spinner"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_ng_container_1_Template, 2, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorCard);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _error_card_error_card_component__WEBPACK_IMPORTED_MODULE_6__["ErrorCardComponent"]],
      styles: ["#map-container[_ngcontent-%COMP%] {\n    height:100%;\n}\n\n#map-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height:100%!important;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top:60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcC1jb250YWluZXIge1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4jbWFwLWNvbnRhaW5lciBkaXYge1xuICAgIGhlaWdodDoxMDAlIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6NjBweDtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [{
          type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        switchToSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      });
    })();

    var StationDockInfo = function StationDockInfo(init) {
      _classCallCheck(this, StationDockInfo);

      Object.assign(this, init);
    };
    /***/

  },

  /***/
  "./src/app/marker.Model.ts":
  /*!*********************************!*\
    !*** ./src/app/marker.Model.ts ***!
    \*********************************/

  /*! exports provided: Marker */

  /***/
  function srcAppMarkerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Marker", function () {
      return Marker;
    });

    var Marker = function Marker(n, m) {
      _classCallCheck(this, Marker);

      this.name = n;
      this.marker = m;
    };
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _live_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../live-search.service */
    "./src/app/live-search.service.ts");
    /* harmony import */


    var _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bikeshare-data.service */
    "./src/app/bikeshare-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SearchComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var sys_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.selectedSystem = sys_r2;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sys_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.selectedSystem === sys_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sys_r2.systemName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sys_r2.location);
      }
    }

    function SearchComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a system before continuing.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(liveSearchService, bikeshareDataService, route, router) {
        _classCallCheck(this, SearchComponent);

        this.liveSearchService = liveSearchService;
        this.bikeshareDataService = bikeshareDataService;
        this.route = route;
        this.router = router;
        this.switchToMap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorSelectSystem = false;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bikeshareDataService.getSystemsArray().subscribe();
        }
      }, {
        key: "runSearch",
        value: function runSearch(event) {
          var _this11 = this;

          this.searchResults = this.liveSearchService.getAllMatches(event.target.value).filter(function (sys) {
            return sys !== _this11.selectedSystem;
          });

          if (this.selectedSystem) {
            this.searchResults.unshift(this.selectedSystem);
          } // selected always shows up first in results

        }
      }, {
        key: "continue",
        value: function _continue() {
          if (this.selectedSystem) {
            // system has been selected
            this.bikeshareDataService.setSelectedSystem(this.selectedSystem);
            this.router.navigate(['map', this.bikeshareDataService.getSelectedSystem().systemID]);
          } else {
            // system has not been selected, show error
            this.errorSelectSystem = true;
          }
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_live_search_service__WEBPACK_IMPORTED_MODULE_1__["LiveSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      outputs: {
        switchToMap: "switchToMap"
      },
      decls: 24,
      vars: 2,
      consts: [[1, "with-max"], [1, "material-icons"], [1, "light"], [2, "width", "100%"], ["type", "text", "matInput", "", 3, "keyup"], [1, "search-results"], ["class", "result", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "next-button", 3, "click"], ["class", "error-text", 4, "ngIf"], [1, "result", 3, "click"], [1, "error-text"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_17_listener($event) {
            return ctx.runSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchComponent_div_19_Template, 6, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_21_listener() {
            return ctx["continue"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SearchComponent_span_23_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorSelectSystem);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n    z-index:0;\n}\n\n.search-results[_ngcontent-%COMP%] {\n    max-height:200px;\n    overflow-y: scroll;\n    margin: -20px 0px 10px 0px;\n    z-index: 1;\n    position: relative; \n}\n\n.search-results[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.search-results[_ngcontent-%COMP%]   .result.selected[_ngcontent-%COMP%] {\n    background-color: var(--result-highlight);\n    color:var(--light);\n}\n\n.light[_ngcontent-%COMP%] {\n    color: var(--text-gray);\n    font-style:italic;\n}\n\n.error-text[_ngcontent-%COMP%] {\n    padding:10px;\n    font-size: small;\n    color:var(--error-red);\n}\n\nbutton.next-button[_ngcontent-%COMP%] {\n    \n    display:block;\n    width:100%;\n    background-color: var(--navbar-dark);\n    color: var(--light);\n}\n\n@media only screen and (min-width: 600px) {\n    .search-results[_ngcontent-%COMP%] {\n        max-height: 300px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7eUJBQ3FCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgei1pbmRleDowO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6MjAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbjogLTIwcHggMHB4IDEwcHggMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cyAucmVzdWx0LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXN1bHQtaGlnaGxpZ2h0KTtcbiAgICBjb2xvcjp2YXIoLS1saWdodCk7XG59XG5cbi5saWdodCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheSk7XG4gICAgZm9udC1zdHlsZTppdGFsaWM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjp2YXIoLS1lcnJvci1yZWQpO1xufVxuXG5idXR0b24ubmV4dC1idXR0b24ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: _live_search_service__WEBPACK_IMPORTED_MODULE_1__["LiveSearchService"]
        }, {
          type: _bikeshare_data_service__WEBPACK_IMPORTED_MODULE_2__["BikeshareDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        switchToMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/system.model.ts":
  /*!*********************************!*\
    !*** ./src/app/system.model.ts ***!
    \*********************************/

  /*! exports provided: System */

  /***/
  function srcAppSystemModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "System", function () {
      return System;
    });

    var System = function System(init) {
      _classCallCheck(this, System);

      Object.assign(this, init);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lauraschultz/Documents/projects/bikeshare-frontend/bikeshare/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map