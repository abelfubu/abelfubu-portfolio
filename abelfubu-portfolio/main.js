(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const _c0 = ["menuItem"];
const _c1 = ["*"];
class SidenavComponent {
    constructor(renderer, bo) {
        this.renderer = renderer;
        this.bo = bo;
        this.width = '3.3em';
        this.height = '80px';
        this.isSmall = false;
    }
    get isWidth() {
        return this.width;
    }
    ngOnInit() { }
    ngAfterContentInit() {
        this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]).subscribe((state) => {
            console.log(state);
            if (state.matches) {
                this.isSmall = true;
                this.width = '100%';
                this.items.forEach(item => this.renderer.setStyle(item.nativeElement.children[1], 'display', 'none'));
            }
            else {
                this.isSmall = false;
                this.width = '3.3em';
                this.items.forEach(item => this.renderer.setStyle(item.nativeElement.children[1], 'display', 'block'));
            }
        });
        console.log(this.items);
    }
    onMouseOver() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isSmall) {
                return;
            }
            this.width = '12em';
            for (const item of this.items) {
                if (!((_a = item.nativeElement) === null || _a === void 0 ? void 0 : _a.children[1])) {
                    return;
                }
                yield this.delay(50);
                this.renderer.setStyle(item.nativeElement.children[1], 'transform', 'translateX(0px)');
                this.renderer.setStyle(item.nativeElement.children[1], 'opacity', 1);
            }
        });
    }
    onMouseLeave() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isSmall) {
                return;
            }
            this.width = '3.3em';
            for (const item of this.items) {
                if (!((_a = item.nativeElement) === null || _a === void 0 ? void 0 : _a.children[1])) {
                    return;
                }
                yield this.delay(50);
                this.renderer.setStyle(item === null || item === void 0 ? void 0 : item.nativeElement.children[1], 'transform', 'translateX(-100px)');
                this.renderer.setStyle(item === null || item === void 0 ? void 0 : item.nativeElement.children[1], 'opacity', 0);
            }
        });
    }
    delay(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds));
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], contentQueries: function SidenavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c0, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, hostVars: 2, hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.isWidth);
    } }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[1, "card", 3, "mouseover", "mouseleave"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function SidenavComponent_Template_div_mouseover_0_listener() { return ctx.onMouseOver(); })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("height", ctx.height);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Fira Sans\", sans-serif;\n  line-height: 1.6em;\n  overflow-x: hidden;\n  transition: background-color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 400ms ease-in-out;\n}\n\nbody.dark-mode[_ngcontent-%COMP%] {\n  background-color: #282c34;\n  color: #bee4e1;\n}\n\nbody.dark-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #282c34;\n}\n\nbody.light-mode[_ngcontent-%COMP%] {\n  background-color: #f2faf9;\n  color: #0f1015;\n}\n\nbody.light-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\nsvg[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  transition: color 150ms ease-in-out;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #ff9e02;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: #ffb305;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  display: flex;\n  z-index: 10;\n  transition: all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  left: 0;\n  justify-content: center;\n}\n\n@media (min-width: 600px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n    height: calc(100vh - 82px);\n    top: 82px;\n  }\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    flex-direction: row;\n    bottom: 0;\n  }\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  padding: 16px 0 12px;\n  overflow: hidden;\n  background-color: #1e2127;\n  box-shadow: 0 0 22px 3px rgba(15, 16, 21, 0.3);\n  border-radius: 0 12px 12px 0;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 150px;\n  width: 50px;\n  background-color: #1e2127;\n  z-index: 1;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 160px;\n    display: flex;\n    justify-content: center;\n    border-radius: 12px 12px 0 0;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]::before {\n    display: none;\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19iYXNlLnNjc3MiLCIuLi8uLi8uLi8uLi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX2RhcmstbW9kZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX2xpZ2h0LW1vZGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0dBQUE7QUNKRjs7QURNRTtFRWpCQSx5QkFBQTtFQUNBLGNBQUE7QURjRjs7QUNaRTtFQUNFLHlCQUFBO0FEY0o7O0FER0U7RUdyQkEseUJBQUE7RUFDQSxjQUFBO0FGcUJGOztBRW5CRTtFQUNFLHNCQUFBO0FGcUJKOztBRENBOzs7O0VBSUUsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFFO0VBQ0UsY0FBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBQWxEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtBQXFERjs7QUFuREU7RUFURjtJQVVJLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSxTQUFBO0VBc0RGO0FBQ0Y7O0FBcERFO0VBZkY7SUFnQkksbUJBQUE7SUFDQSxTQUFBO0VBdURGO0FBQ0Y7O0FBckRFO0VBQ0UsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUdMQSw4Q0FBQTtFSE9BLDRCQUFBO0FBdURKOztBQXJESTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBdUROOztBQXBESTtFQWpCRjtJQWtCSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7RUF1REo7RUF0REk7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQXdETjtBQUNGIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdjb2xvcnMnIGFzICo7XG5AdXNlICdkYXJrLW1vZGUnIGFzICo7XG5AdXNlICdsaWdodC1tb2RlJyBhcyAqO1xuXG4qIHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSwgY29sb3IgNDAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgJi5kYXJrLW1vZGUge1xuICAgIEBpbmNsdWRlIGRhcmttb2RlO1xuICB9XG5cbiAgJi5saWdodC1tb2RlIHtcbiAgICBAaW5jbHVkZSBsaWdodG1vZGU7XG4gIH1cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zdmcge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxNTBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRvcmFuZ2UsIDkwMCk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IG1hcC1nZXQoJG9yYW5nZSwgNzAwKTtcbiAgfVxufVxuIiwiQHVzZSAnaW5kZXgnIGFzICo7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xuICBsZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgycHgpO1xuICAgIHRvcDogODJweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xuICAgIHBhZGRpbmc6IDE2cHggMCAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkZ3JleSwgNzAwKTtcbiAgICBAaW5jbHVkZSBzaGFkb3coYmlnKTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkZ3JleSwgNzAwKTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB3aWR0aDogMTYwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnY29sb3JzJ2FzICo7XG5cbkBtaXhpbiBkYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGdyZXksIDUwMCk7XG4gIGNvbG9yOiBtYXAtZ2V0KCRncmVlbiwgMTAwKTtcblxuICAuYnVsbGV0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBtYXAtZ2V0KCRncmV5LCA1MDApO1xuICB9XG59XG4iLCJAdXNlICdjb2xvcnMnYXMgKjtcblxuQG1peGluIGxpZ2h0bW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1peChtYXAtZ2V0KCRncmVlbiwgMTAwKSwgI2ZmZiwgMjAlKTtcbiAgY29sb3I6IG1hcC1nZXQoJGdyZXksIDkwMCk7XG5cbiAgLmJ1bGxldCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgfVxufVxuIiwiQHVzZSAnY29sb3JzJyBhcyAqO1xuXG5AbWl4aW4gZ3JpZCgkY29sdW1uczogMywgJGdhcDogMTZweCkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgMWZyKTtcbiAgZ3JpZC1nYXA6ICRnYXA7XG4gIEBjb250ZW50O1xufVxuXG5AbWl4aW4gZmxleCgkanVzdGlmeTogc3BhY2UtYmV0d2VlbiwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAY29udGVudDtcbn1cblxuQG1peGluIHNoYWRvdygkc2l6ZTogYmlnKSB7XG4gIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAxcHggcmdiYShtYXAtZ2V0KCRncmV5LCA5MDApLCAwLjMpO1xuICB9IEBlbHNlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjJweCAzcHggcmdiYShtYXAtZ2V0KCRncmV5LCA5MDApLCAwLjMpO1xuICB9XG59XG5cbkBtaXhpbiBwYWRkaW5nIHtcbiAgcGFkZGluZzogMzJweCA4JTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/abelfubu-portfolio/abelfubu-portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const _c0 = ["section"];
function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function HomeComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_44_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.handleBulletClick(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("filled", index_r7 === ctx_r5.currentPage);
} }
function HomeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomeComponent_div_44_div_1_Template, 1, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.sections);
} }
class HomeComponent {
    constructor(document, renderer, cdr) {
        this.document = document;
        this.renderer = renderer;
        this.cdr = cdr;
        this.window = this.document.defaultView;
        this.currentPage = 0;
        this.wheel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => this.handleScrollEvent(event)));
        this.scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'touch').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => this.handleScrollEvent(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    }
    ngAfterViewInit() {
        this.renderer.setAttribute(this.sections.first.nativeElement, 'class', 'on-screen');
        this.cdr.detectChanges();
    }
    incrementCurrentPage() {
        const sectionsLength = this.sections.length - 1;
        this.currentPage = this.currentPage !== sectionsLength ? this.currentPage + 1 : sectionsLength;
    }
    decreaseCurrentPage() {
        this.currentPage = this.currentPage === 0 ? 0 : this.currentPage - 1;
    }
    setClass(cssClass, index) {
        var _a;
        this.renderer.setAttribute((_a = this.sections.get(index)) === null || _a === void 0 ? void 0 : _a.nativeElement, 'class', cssClass);
    }
    removeClass() {
        var _a;
        this.renderer.removeAttribute((_a = this.sections.get(this.currentPage)) === null || _a === void 0 ? void 0 : _a.nativeElement, 'class');
    }
    handleScrollEvent(event) {
        return event.deltaY > 0 ? this.scrollNextPage() : this.scrollPreviousPage();
    }
    scrollNextPage() {
        this.setClass('fadeout-top', this.currentPage);
        this.incrementCurrentPage();
        this.setClass('fadein-bottom', this.currentPage);
    }
    scrollPreviousPage() {
        this.setClass('fadeout-bottom', this.currentPage);
        this.decreaseCurrentPage();
        this.setClass('fadein-top', this.currentPage);
    }
    handleBulletClick(index) {
        if (index < this.currentPage) {
            this.setClass('fadeout-bottom', this.currentPage);
            this.currentPage = index;
            this.setClass('fadein-top', this.currentPage);
        }
        else if (index > this.currentPage) {
            this.setClass('fadeout-top', this.currentPage);
            this.currentPage = index;
            this.setClass('fadein-bottom', this.currentPage);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sections = _t);
    } }, decls: 45, vars: 4, consts: [[4, "ngIf"], ["section", ""], [1, "img"], ["src", "https://media-exp1.licdn.com/dms/image/C4E03AQHk550y2tSIjg/profile-displayphoto-shrink_800_800/0/1593251933328?e=1622073600&v=beta&t=JBrO1Z1cOYDoZFw2MvMXFCpsykP4iM0U2RC9CLbvWZA", "alt", ""], [1, "exp-item"], [1, "flex-between"], ["class", "bullets", 4, "ngIf"], [1, "bullets"], ["class", "bullet", 3, "filled", "click", 4, "ngFor", "ngForOf"], [1, "bullet", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Abel de la Fuente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Angular | Typescript | sass | nodejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Curioso, creativo, proactivo, vers\u00E1til, me encanta innovar y descubrir cosas nuevas, la m\u00FAsica, lo m\u00EDstico, el caf\u00E9 y las tecnolog\u00EDas. De peque\u00F1o crec\u00ED entre ordenadores y siempre quise descubrir qu\u00E9 es lo que pasaba dentro de esas cajas silenciosas. Me interes\u00E9 por el dise\u00F1o, por la ilustraci\u00F3n, por la m\u00FAsica y despu\u00E9s por c\u00F3mo unir todo esto en una sola filosof\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " En los \u00FAltimos a\u00F1os me he especializado en desarrollo de aplicaciones tanto corporativas como para peque\u00F1os usuarios, utilizando como principal stack Angular, Typescript y Nodejs. Deseo poder aportar mis conocimientos y seguir aprendiendo y creciendo en el mundo del desarrollo web que me apasiona. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Granollers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Barcelona");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Espa\u00F1a | Tel\u00E9fono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "617 36 61 35");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "section", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Experiencia laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Bravent | Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "2020 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Desarrollo de aplicaciones con Angular, Typescript, Sass, Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "section", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis quis quos reiciendis molestias laudantium consequuntur officia dolore quo, odio quasi quaerat ea, culpa quod expedita. A eos fugiat blanditiis iste vel veritatis consequuntur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "@abelfubu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Abel de la Fuente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.scroll$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sections == null ? null : ctx.sections.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Fira Sans\", sans-serif;\n  line-height: 1.6em;\n  overflow-x: hidden;\n  transition: background-color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 400ms ease-in-out;\n}\n\nbody.dark-mode[_ngcontent-%COMP%] {\n  background-color: #282c34;\n  color: #bee4e1;\n}\n\nbody.dark-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #282c34;\n}\n\nbody.light-mode[_ngcontent-%COMP%] {\n  background-color: #f2faf9;\n  color: #0f1015;\n}\n\nbody.light-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\nsvg[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  transition: color 150ms ease-in-out;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #ff9e02;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: #ffb305;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #ffab04;\n  font-size: 0.8em;\n  margin-bottom: 0.5em;\n}\n\n[_nghost-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: url(\"https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\");\n  background-size: cover;\n}\n\n[_nghost-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  mix-blend-mode: darken;\n  max-width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 32px 8%;\n  height: 100vh;\n  position: fixed;\n  height: calc(100vh - 82px);\n  top: -100vh;\n  z-index: -1;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 64px;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 8%;\n  font-size: 12px;\n}\n\n@media (max-width: 900px) {\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: column;\n    align-items: center;\n    font-size: 0.8em;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]   .on-screen[_ngcontent-%COMP%] {\n  top: 82px;\n}\n\n[_nghost-%COMP%]   .fadein-bottom[_ngcontent-%COMP%] {\n  animation: fadein-bottom 2s cubic-bezier(0.19, 1, 0.22, 1);\n  top: 82px;\n}\n\n[_nghost-%COMP%]   .fadein-top[_ngcontent-%COMP%] {\n  animation: fadein-top 2s cubic-bezier(0.19, 1, 0.22, 1);\n  top: 82px;\n}\n\n[_nghost-%COMP%]   .fadeout-top[_ngcontent-%COMP%] {\n  animation: fadeout-top 2s cubic-bezier(0.19, 1, 0.22, 1);\n  top: -100vh;\n}\n\n[_nghost-%COMP%]   .fadeout-bottom[_ngcontent-%COMP%] {\n  animation: fadeout-bottom 2s cubic-bezier(0.19, 1, 0.22, 1);\n  top: -100vh;\n}\n\n[_nghost-%COMP%]   .bullets[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  right: 1.5em;\n  top: 82px;\n  height: calc(100vh - 82px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]   .bullets[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  width: 0.7em;\n  height: 0.7em;\n  box-shadow: 0 0 0 1.5px #ffab04;\n  border-radius: 50%;\n  margin: 8px 0;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .bullets[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%] {\n  transition: background-color 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  background-color: #ffca2c;\n}\n\n[_nghost-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-items: baseline;\n}\n\n@keyframes kenburns-top {\n  0% {\n    transform: scale(1) translateY(0);\n    transform-origin: 50% 16%;\n  }\n  100% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: top;\n  }\n}\n\n@keyframes fadein-bottom {\n  0% {\n    top: 100vh;\n  }\n  100% {\n    top: 82px;\n  }\n}\n\n@keyframes fadein-top {\n  0% {\n    top: -100vh;\n  }\n  100% {\n    top: 82px;\n  }\n}\n\n@keyframes fadeout-top {\n  0% {\n    top: 82px;\n  }\n  100% {\n    top: -100vh;\n  }\n}\n\n@keyframes fadeout-bottom {\n  0% {\n    top: 82px;\n  }\n  100% {\n    top: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19iYXNlLnNjc3MiLCIuLi8uLi8uLi8uLi9ob21lLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX2RhcmstbW9kZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX2xpZ2h0LW1vZGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0dBQUE7QUNKRjs7QURNRTtFRWpCQSx5QkFBQTtFQUNBLGNBQUE7QURjRjs7QUNaRTtFQUNFLHlCQUFBO0FEY0o7O0FER0U7RUdyQkEseUJBQUE7RUFDQSxjQUFBO0FGcUJGOztBRW5CRTtFQUNFLHNCQUFBO0FGcUJKOztBRENBOzs7O0VBSUUsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFFO0VBQ0UsY0FBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBQWxEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQXFERjs7QUFuREU7RUFDRSxjQUFBO0FBcURKOztBQWxERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFvREo7O0FBakRFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtTEFBQTtFQUNBLHNCQUFBO0FBbURKOztBQWxESTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW9ETjs7QUFoREU7RUdOQSxnQkFBQTtFSFFFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFR25DRixhQUFBO0VBQ0EscUNBQUE7RUFDQSxjSGtDbUI7RUFDZixtQkFBQTtBQW9ETjs7QUFqREk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQW1ETjs7QUFoREk7RUFsQkY7SUd0QkEsYUFBQTtJQUNBLG1CQUYrQztJQUcvQyx1Qkh1Q2tCO0lHdENsQixtQkFBQTtJSHVDSSxnQkFBQTtFQXNESjtFQXJESTtJQUNFLGFBQUE7RUF1RE47RUFyREk7SUFDRSxhQUFBO0VBdUROO0FBQ0Y7O0FBbkRFO0VBQ0UsU0FBQTtBQXFESjs7QUFsREU7RUFDRSwwREFBQTtFQUNBLFNBQUE7QUFvREo7O0FBakRFO0VBQ0UsdURBQUE7RUFDQSxTQUFBO0FBbURKOztBQWhERTtFQUNFLHdEQUFBO0VBQ0EsV0FBQTtBQWtESjs7QUFoREU7RUFDRSwyREFBQTtFQUNBLFdBQUE7QUFrREo7O0FBL0NFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFpREo7O0FBL0NJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFpRE47O0FBOUNJO0VBQ0UseUVBQUE7RUFDQSx5QkFBQTtBQWdETjs7QUE1Q0U7RUdwR0EsYUFBQTtFQUNBLG1CQUYrQztFQUcvQyw4QkFIb0I7RUFJcEIsbUJBQUE7RUhtR0kscUJBQUE7QUFpRE47O0FBNUNBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VBK0NGO0VBN0NBO0lBQ0Usd0NBQUE7SUFDQSxxQkFBQTtFQStDRjtBQUNGOztBQTVDQTtFQUNFO0lBQ0UsVUFBQTtFQThDRjtFQTVDQTtJQUNFLFNBQUE7RUE4Q0Y7QUFDRjs7QUEzQ0E7RUFDRTtJQUNFLFdBQUE7RUE2Q0Y7RUEzQ0E7SUFDRSxTQUFBO0VBNkNGO0FBQ0Y7O0FBMUNBO0VBQ0U7SUFDRSxTQUFBO0VBNENGO0VBMUNBO0lBQ0UsV0FBQTtFQTRDRjtBQUNGOztBQXpDQTtFQUNFO0lBQ0UsU0FBQTtFQTJDRjtFQXpDQTtJQUNFLFVBQUE7RUEyQ0Y7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnY29sb3JzJyBhcyAqO1xuQHVzZSAnZGFyay1tb2RlJyBhcyAqO1xuQHVzZSAnbGlnaHQtbW9kZScgYXMgKjtcblxuKiB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCksIGNvbG9yIDQwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICYuZGFyay1tb2RlIHtcbiAgICBAaW5jbHVkZSBkYXJrbW9kZTtcbiAgfVxuXG4gICYubGlnaHQtbW9kZSB7XG4gICAgQGluY2x1ZGUgbGlnaHRtb2RlO1xuICB9XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3ZnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogbWFwLWdldCgkb3JhbmdlLCA5MDApO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRvcmFuZ2UsIDcwMCk7XG4gIH1cbn1cbiIsIkB1c2UgXCJpbmRleFwiIGFzICo7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICBoMyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogbWFwLWdldCgkb3JhbmdlLCA4MDApO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cblxuICAuaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDk2MjQ3NzY5MjAtMGZhYzI0YTlkZmRhP2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MCcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaW1nIHtcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgQGluY2x1ZGUgcGFkZGluZztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MnB4KTtcbiAgICB0b3A6IC0xMDB2aDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBAaW5jbHVkZSBncmlkKDIsIDY0cHgpIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE2cHg7XG4gICAgICBsZWZ0OiA4JTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAuaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5vbi1zY3JlZW4ge1xuICAgIHRvcDogODJweDtcbiAgfVxuXG4gIC5mYWRlaW4tYm90dG9tIHtcbiAgICBhbmltYXRpb246IGZhZGVpbi1ib3R0b20gMnMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xuICAgIHRvcDogODJweDtcbiAgfVxuXG4gIC5mYWRlaW4tdG9wIHtcbiAgICBhbmltYXRpb246IGZhZGVpbi10b3AgMnMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xuICAgIHRvcDogODJweDtcbiAgfVxuXG4gIC5mYWRlb3V0LXRvcCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0LXRvcCAycyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG4gICAgdG9wOiAtMTAwdmg7XG4gIH1cbiAgLmZhZGVvdXQtYm90dG9tIHtcbiAgICBhbmltYXRpb246IGZhZGVvdXQtYm90dG9tIDJzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbiAgICB0b3A6IC0xMDB2aDtcbiAgfVxuXG4gIC5idWxsZXRzIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEuNWVtO1xuICAgIHRvcDogODJweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MnB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuYnVsbGV0IHtcbiAgICAgIHdpZHRoOiAwLjdlbTtcbiAgICAgIGhlaWdodDogMC43ZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxLjVweCBtYXAtZ2V0KCRvcmFuZ2UsIDgwMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5maWxsZWQge1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJG9yYW5nZSwgNDAwKTtcbiAgICB9XG4gIH1cblxuICAuZmxleC1iZXR3ZWVuIHtcbiAgICBAaW5jbHVkZSBmbGV4IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBrZW5idXJucy10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIHRvcDogMTAwdmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA4MnB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluLXRvcCB7XG4gIDAlIHtcbiAgICB0b3A6IC0xMDB2aDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDgycHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0LXRvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDgycHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMTAwdmg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0LWJvdHRvbSB7XG4gIDAlIHtcbiAgICB0b3A6IDgycHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAxMDB2aDtcbiAgfVxufVxuIiwiQHVzZSAnY29sb3JzJ2FzICo7XG5cbkBtaXhpbiBkYXJrbW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGdyZXksIDUwMCk7XG4gIGNvbG9yOiBtYXAtZ2V0KCRncmVlbiwgMTAwKTtcblxuICAuYnVsbGV0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBtYXAtZ2V0KCRncmV5LCA1MDApO1xuICB9XG59XG4iLCJAdXNlICdjb2xvcnMnYXMgKjtcblxuQG1peGluIGxpZ2h0bW9kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1peChtYXAtZ2V0KCRncmVlbiwgMTAwKSwgI2ZmZiwgMjAlKTtcbiAgY29sb3I6IG1hcC1nZXQoJGdyZXksIDkwMCk7XG5cbiAgLmJ1bGxldCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgfVxufVxuIiwiQHVzZSAnY29sb3JzJyBhcyAqO1xuXG5AbWl4aW4gZ3JpZCgkY29sdW1uczogMywgJGdhcDogMTZweCkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgMWZyKTtcbiAgZ3JpZC1nYXA6ICRnYXA7XG4gIEBjb250ZW50O1xufVxuXG5AbWl4aW4gZmxleCgkanVzdGlmeTogc3BhY2UtYmV0d2VlbiwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAY29udGVudDtcbn1cblxuQG1peGluIHNoYWRvdygkc2l6ZTogYmlnKSB7XG4gIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAxcHggcmdiYShtYXAtZ2V0KCRncmV5LCA5MDApLCAwLjMpO1xuICB9IEBlbHNlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjJweCAzcHggcmdiYShtYXAtZ2V0KCRncmV5LCA5MDApLCAwLjMpO1xuICB9XG59XG5cbkBtaXhpbiBwYWRkaW5nIHtcbiAgcGFkZGluZzogMzJweCA4JTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_svg_icons_github_github_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/svg-icons/github/github.component */ "Hs91");
/* harmony import */ var _shared_svg_icons_linkedin_icon_linkedin_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/svg-icons/linkedin-icon/linkedin-icon.component */ "5iyK");
/* harmony import */ var _shared_svg_icons_light_mode_icon_light_mode_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/svg-icons/light-mode-icon/light-mode-icon.component */ "RNYk");
/* harmony import */ var _shared_svg_icons_dark_mode_icon_dark_mode_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/svg-icons/dark-mode-icon/dark-mode-icon.component */ "bUY7");






class HeaderComponent {
    constructor() {
        this.onDarkToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { isDarkMode: "isDarkMode" }, outputs: { onDarkToggled: "onDarkToggled" }, decls: 11, vars: 8, consts: [["src", "assets/svg/logo.svg", "alt", "Logo Abelfubu"], [1, "social"], ["href", "https://github.com/abelfubu", "target", "_blank"], ["href", "https://www.linkedin.com/in/abelfubu/", "target", "_blank"], [1, "dark"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-linkedin-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-light-mode-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_light_mode_icon_click_8_listener() { return ctx.onDarkToggled.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-dark-mode-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_dark_mode_icon_click_10_listener() { return ctx.onDarkToggled.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotate-in", ctx.isDarkMode)("rotate-out", !ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotate-in", !ctx.isDarkMode)("rotate-out", ctx.isDarkMode);
    } }, directives: [_shared_svg_icons_github_github_component__WEBPACK_IMPORTED_MODULE_1__["GithubIconComponent"], _shared_svg_icons_linkedin_icon_linkedin_icon_component__WEBPACK_IMPORTED_MODULE_2__["LinkedinIconComponent"], _shared_svg_icons_light_mode_icon_light_mode_icon_component__WEBPACK_IMPORTED_MODULE_3__["LightModeIconComponent"], _shared_svg_icons_dark_mode_icon_dark_mode_icon_component__WEBPACK_IMPORTED_MODULE_4__["DarkModeIconComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Fira Sans\", sans-serif;\n  line-height: 1.6em;\n  overflow-x: hidden;\n  transition: background-color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 400ms ease-in-out;\n}\n\nbody.dark-mode[_ngcontent-%COMP%] {\n  background-color: #282c34;\n  color: #bee4e1;\n}\n\nbody.dark-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #282c34;\n}\n\nbody.light-mode[_ngcontent-%COMP%] {\n  background-color: #f2faf9;\n  color: #0f1015;\n}\n\nbody.light-mode[_ngcontent-%COMP%]   .bullet[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\nsvg[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  transition: color 150ms ease-in-out;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #ff9e02;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: #ffb305;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #181b21;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 82px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 8%;\n  box-shadow: 0 0 8px 1px rgba(15, 16, 21, 0.3);\n}\n\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 9em;\n}\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 28px;\n  cursor: pointer;\n  color: #ffca2c;\n}\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 28px;\n}\n\n[_nghost-%COMP%]   .dark[_ngcontent-%COMP%] {\n  height: 28px;\n}\n\n[_nghost-%COMP%]   .dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 26px;\n  right: 8%;\n}\n\n[_nghost-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding-right: 44px;\n  display: flex;\n}\n\n[_nghost-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.rotate-in[_ngcontent-%COMP%] {\n  animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.rotate-out[_ngcontent-%COMP%] {\n  animation: rotate-out-center 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n\n@keyframes rotate-out-center {\n  0% {\n    transform: rotate(0);\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(-360deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotate-in-center {\n  0% {\n    transform: rotate(-360deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19iYXNlLnNjc3MiLCIuLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZS9fZGFyay1tb2RlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZS9fbGlnaHQtbW9kZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnR0FBQTtBQ0pGOztBRE1FO0VFakJBLHlCQUFBO0VBQ0EsY0FBQTtBRGNGOztBQ1pFO0VBQ0UseUJBQUE7QURjSjs7QURHRTtFR3JCQSx5QkFBQTtFQUNBLGNBQUE7QUZxQkY7O0FFbkJFO0VBQ0Usc0JBQUE7QUZxQko7O0FEQ0E7Ozs7RUFJRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUU7RUFDRSxjQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FBbERBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VHQ0EsYUFBQTtFQUNBLG1CQUYrQztFQUcvQyw4QkFIb0I7RUFJcEIsbUJBQUE7RUhGQSxhQUFBO0VHUUUsNkNBQUE7QUhpREo7O0FBdERFO0VBQ0UsY0FBQTtBQXdESjs7QUFyREU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF1REo7O0FBckRJO0VBQ0UsWUFBQTtBQXVETjs7QUFuREU7RUFDRSxZQUFBO0FBcURKOztBQW5ESTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFxRE47O0FBakRFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBbURKOztBQWpESTtFQUNFLGlCQUFBO0FBbUROOztBQTlDQTtFQUVFLHdFQUFBO0FBaURGOztBQTlDQTtFQUVFLDBFQUFBO0FBaURGOztBQWxDQTtFQUNFO0lBRUUsb0JBQUE7SUFDQSxVQUFBO0VBaURGO0VBL0NBO0lBRUUsMEJBQUE7SUFDQSxVQUFBO0VBaURGO0FBQ0Y7O0FBbENBO0VBQ0U7SUFFRSwwQkFBQTtJQUNBLFVBQUE7RUFnREY7RUE5Q0E7SUFFRSxvQkFBQTtJQUNBLFVBQUE7RUFnREY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdjb2xvcnMnIGFzICo7XG5AdXNlICdkYXJrLW1vZGUnIGFzICo7XG5AdXNlICdsaWdodC1tb2RlJyBhcyAqO1xuXG4qIHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSwgY29sb3IgNDAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgJi5kYXJrLW1vZGUge1xuICAgIEBpbmNsdWRlIGRhcmttb2RlO1xuICB9XG5cbiAgJi5saWdodC1tb2RlIHtcbiAgICBAaW5jbHVkZSBsaWdodG1vZGU7XG4gIH1cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zdmcge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxNTBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRvcmFuZ2UsIDkwMCk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IG1hcC1nZXQoJG9yYW5nZSwgNzAwKTtcbiAgfVxufVxuIiwiQHVzZSAnaW5kZXgnIGFzICo7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGdyZXksIDgwMCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogODJweDtcbiAgQGluY2x1ZGUgZmxleDtcbiAgcGFkZGluZzogMCA4JTtcbiAgQGluY2x1ZGUgc2hhZG93KHNtYWxsKTtcblxuICBpbWcge1xuICAgIG1heC13aWR0aDogOWVtO1xuICB9XG5cbiAgYSB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbWFwLWdldCgkb3JhbmdlLCA0MDApO1xuXG4gICAgc3ZnIHtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gIH1cblxuICAuZGFyayB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuXG4gICAgYSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDI2cHg7XG4gICAgICByaWdodDogOCU7XG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgcGFkZGluZy1yaWdodDogNDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgYSB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLnJvdGF0ZS1pbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtaW4tY2VudGVyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gIGFuaW1hdGlvbjogcm90YXRlLWluLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLnJvdGF0ZS1vdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLW91dC1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7XG4gIGFuaW1hdGlvbjogcm90YXRlLW91dC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLW91dC1jZW50ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUtb3V0LWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtaW4tY2VudGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlLWluLWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCJAdXNlICdjb2xvcnMnYXMgKjtcblxuQG1peGluIGRhcmttb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkZ3JleSwgNTAwKTtcbiAgY29sb3I6IG1hcC1nZXQoJGdyZWVuLCAxMDApO1xuXG4gIC5idWxsZXQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIG1hcC1nZXQoJGdyZXksIDUwMCk7XG4gIH1cbn1cbiIsIkB1c2UgJ2NvbG9ycydhcyAqO1xuXG5AbWl4aW4gbGlnaHRtb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWl4KG1hcC1nZXQoJGdyZWVuLCAxMDApLCAjZmZmLCAyMCUpO1xuICBjb2xvcjogbWFwLWdldCgkZ3JleSwgOTAwKTtcblxuICAuYnVsbGV0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICB9XG59XG4iLCJAdXNlICdjb2xvcnMnIGFzICo7XG5cbkBtaXhpbiBncmlkKCRjb2x1bW5zOiAzLCAkZ2FwOiAxNnB4KSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRjb2x1bW5zLCAxZnIpO1xuICBncmlkLWdhcDogJGdhcDtcbiAgQGNvbnRlbnQ7XG59XG5cbkBtaXhpbiBmbGV4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBjb250ZW50O1xufVxuXG5AbWl4aW4gc2hhZG93KCRzaXplOiBiaWcpIHtcbiAgQGlmICRzaXplID09IHNtYWxsIHtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDFweCByZ2JhKG1hcC1nZXQoJGdyZXksIDkwMCksIDAuMyk7XG4gIH0gQGVsc2Uge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMnB4IDNweCByZ2JhKG1hcC1nZXQoJGdyZXksIDkwMCksIDAuMyk7XG4gIH1cbn1cblxuQG1peGluIHBhZGRpbmcge1xuICBwYWRkaW5nOiAzMnB4IDglO1xufVxuIl19 */"] });


/***/ }),

/***/ "5/rM":
/*!*******************************************************************!*\
  !*** ./src/app/shared/svg-icons/home-icon/home-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIconComponent", function() { return HomeIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeIconComponent {
    constructor() { }
    ngOnInit() { }
}
HomeIconComponent.ɵfac = function HomeIconComponent_Factory(t) { return new (t || HomeIconComponent)(); };
HomeIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeIconComponent, selectors: [["app-home-icon"]], decls: 2, vars: 0, consts: [["id", "i-home", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "width", "2em", "height", "2em", "fill", "none", "stroke", "currentcolor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["d", "M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z"]], template: function HomeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "5iyK":
/*!***************************************************************************!*\
  !*** ./src/app/shared/svg-icons/linkedin-icon/linkedin-icon.component.ts ***!
  \***************************************************************************/
/*! exports provided: LinkedinIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinIconComponent", function() { return LinkedinIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LinkedinIconComponent {
}
LinkedinIconComponent.ɵfac = function LinkedinIconComponent_Factory(t) { return new (t || LinkedinIconComponent)(); };
LinkedinIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkedinIconComponent, selectors: [["app-linkedin-icon"]], decls: 3, vars: 0, consts: [["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "2em", "height", "2em", "viewBox", "0 0 510 510", "fill", "currentcolor"], ["id", "post-linkedin"], ["d", "M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z\n\t\t\t M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9\n\t\t\tS140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204\n\t\t\tV204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"]], template: function LinkedinIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "AytR":
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


/***/ }),

/***/ "EOA5":
/*!*************************************************************************!*\
  !*** ./src/app/shared/svg-icons/options-icon/options-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: OptionsIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsIconComponent", function() { return OptionsIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OptionsIconComponent {
}
OptionsIconComponent.ɵfac = function OptionsIconComponent_Factory(t) { return new (t || OptionsIconComponent)(); };
OptionsIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsIconComponent, selectors: [["app-options-icon"]], decls: 2, vars: 0, consts: [["id", "i-options", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "width", "2em", "height", "2em", "fill", "none", "stroke", "currentcolor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["d", "M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29"]], template: function OptionsIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Hs91":
/*!*************************************************************!*\
  !*** ./src/app/shared/svg-icons/github/github.component.ts ***!
  \*************************************************************/
/*! exports provided: GithubIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubIconComponent", function() { return GithubIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GithubIconComponent {
    constructor() { }
}
GithubIconComponent.ɵfac = function GithubIconComponent_Factory(t) { return new (t || GithubIconComponent)(); };
GithubIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubIconComponent, selectors: [["app-github"]], decls: 2, vars: 0, consts: [["id", "i-github", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "width", "2em", "height", "2em"], ["stroke-width", "0", "fill", "currentColor", "d", "M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"]], template: function GithubIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "RNYk":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/svg-icons/light-mode-icon/light-mode-icon.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LightModeIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightModeIconComponent", function() { return LightModeIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LightModeIconComponent {
}
LightModeIconComponent.ɵfac = function LightModeIconComponent_Factory(t) { return new (t || LightModeIconComponent)(); };
LightModeIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LightModeIconComponent, selectors: [["app-light-mode-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "2em", "viewBox", "0 0 24 24", "width", "2em", "fill", "currentcolor"], ["fill", "none", "height", "24", "width", "24"], ["d", "M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"]], template: function LightModeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_svg_icons_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/svg-icons/home-icon/home-icon.component */ "5/rM");
/* harmony import */ var _shared_svg_icons_github_github_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/svg-icons/github/github.component */ "Hs91");
/* harmony import */ var _shared_svg_icons_contact_icon_contact_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/svg-icons/contact-icon/contact-icon.component */ "j83E");








const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.isDarkMode = true;
    }
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        return this.isDarkMode ? this.setClass('dark-mode') : this.setClass('light-mode');
    }
    setClass(clss) {
        this.renderer.setAttribute(this.document.body, 'class', clss);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 3, consts: [[3, "isDarkMode", "onDarkToggled"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["menuItem", ""], ["routerLink", "/github", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDarkToggled", function AppComponent_Template_app_header_onDarkToggled_0_listener() { return ctx.toggleDarkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-home-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-contact-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isDarkMode", ctx.isDarkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _shared_svg_icons_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_5__["HomeIconComponent"], _shared_svg_icons_github_github_component__WEBPACK_IMPORTED_MODULE_6__["GithubIconComponent"], _shared_svg_icons_contact_icon_contact_icon_component__WEBPACK_IMPORTED_MODULE_7__["ContactIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding-top: 82px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110vw;\n  margin-left: -200px;\n  top: 10%;\n  z-index: -1;\n  mix-blend-mode: exclusion;\n  opacity: 0.2;\n  position: absolute;\n  filter: invert(100%);\n  max-height: 90vh;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  transition: opacity 500ms ease-in;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   a.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  z-index: 4;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(-2px) translateX(-100px);\n  margin-left: 1em;\n  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3RoZW1lL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUNWRixhQUFBO0VBQ0EsbUJBRitDO0VBRy9DLDJCRFNnQjtFQ1JoQixtQkFBQTtFRFNJLG1CQUFBO0FBQ047QUFFSTtFQUNFLFVBQUE7QUFBTjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBS0U7RUFDRSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdtaXhpbnMnIGFzICo7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA4MnB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDExMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gICAgdG9wOiAxMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgbWl4LWJsZW5kLW1vZGU6IGV4Y2x1c2lvbjtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICBhIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW47XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LXN0YXJ0KSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJiA6Zmlyc3QtY2hpbGQge1xuICAgICAgei1pbmRleDogNDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgdHJhbnNsYXRlWCgtMTAwcHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xuICB9XG59XG4iLCJAdXNlICdjb2xvcnMnIGFzICo7XG5cbkBtaXhpbiBncmlkKCRjb2x1bW5zOiAzLCAkZ2FwOiAxNnB4KSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRjb2x1bW5zLCAxZnIpO1xuICBncmlkLWdhcDogJGdhcDtcbiAgQGNvbnRlbnQ7XG59XG5cbkBtaXhpbiBmbGV4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBjb250ZW50O1xufVxuXG5AbWl4aW4gc2hhZG93KCRzaXplOiBiaWcpIHtcbiAgQGlmICRzaXplID09IHNtYWxsIHtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDFweCByZ2JhKG1hcC1nZXQoJGdyZXksIDkwMCksIDAuMyk7XG4gIH0gQGVsc2Uge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMnB4IDNweCByZ2JhKG1hcC1nZXQoJGdyZXksIDkwMCksIDAuMyk7XG4gIH1cbn1cblxuQG1peGluIHBhZGRpbmcge1xuICBwYWRkaW5nOiAzMnB4IDglO1xufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_components_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/sidenav/sidenav.module */ "neLD");
/* harmony import */ var _shared_svg_icons_svg_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/svg-icons/svg-icons.module */ "fgP3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.module */ "99Un");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _app_components_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_svg_icons_svg_icons_module__WEBPACK_IMPORTED_MODULE_3__["SvgIconsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
        _app_components_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__["SidenavModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_svg_icons_svg_icons_module__WEBPACK_IMPORTED_MODULE_3__["SvgIconsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bUY7":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/svg-icons/dark-mode-icon/dark-mode-icon.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DarkModeIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeIconComponent", function() { return DarkModeIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DarkModeIconComponent {
}
DarkModeIconComponent.ɵfac = function DarkModeIconComponent_Factory(t) { return new (t || DarkModeIconComponent)(); };
DarkModeIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DarkModeIconComponent, selectors: [["app-dark-mode-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "2em", "viewBox", "0 0 24 24", "width", "2em", "fill", "currentcolor"], ["fill", "none", "height", "24", "width", "24"], ["d", "M11.01,3.05C6.51,3.54,3,7.36,3,12c0,4.97,4.03,9,9,9c4.63,0,8.45-3.5,8.95-8c0.09-0.79-0.78-1.42-1.54-0.95 c-0.84,0.54-1.84,0.85-2.91,0.85c-2.98,0-5.4-2.42-5.4-5.4c0-1.06,0.31-2.06,0.84-2.89C12.39,3.94,11.9,2.98,11.01,3.05z"]], template: function DarkModeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "fgP3":
/*!******************************************************!*\
  !*** ./src/app/shared/svg-icons/svg-icons.module.ts ***!
  \******************************************************/
/*! exports provided: SvgIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconsModule", function() { return SvgIconsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _options_icon_options_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-icon/options-icon.component */ "EOA5");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github/github.component */ "Hs91");
/* harmony import */ var _home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-icon/home-icon.component */ "5/rM");
/* harmony import */ var _light_mode_icon_light_mode_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light-mode-icon/light-mode-icon.component */ "RNYk");
/* harmony import */ var _dark_mode_icon_dark_mode_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dark-mode-icon/dark-mode-icon.component */ "bUY7");
/* harmony import */ var _contact_icon_contact_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-icon/contact-icon.component */ "j83E");
/* harmony import */ var _linkedin_icon_linkedin_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linkedin-icon/linkedin-icon.component */ "5iyK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SvgIconsModule {
}
SvgIconsModule.ɵfac = function SvgIconsModule_Factory(t) { return new (t || SvgIconsModule)(); };
SvgIconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SvgIconsModule });
SvgIconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SvgIconsModule, { declarations: [_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_3__["HomeIconComponent"],
        _github_github_component__WEBPACK_IMPORTED_MODULE_2__["GithubIconComponent"],
        _options_icon_options_icon_component__WEBPACK_IMPORTED_MODULE_1__["OptionsIconComponent"],
        _contact_icon_contact_icon_component__WEBPACK_IMPORTED_MODULE_6__["ContactIconComponent"],
        _dark_mode_icon_dark_mode_icon_component__WEBPACK_IMPORTED_MODULE_5__["DarkModeIconComponent"],
        _linkedin_icon_linkedin_icon_component__WEBPACK_IMPORTED_MODULE_7__["LinkedinIconComponent"],
        _light_mode_icon_light_mode_icon_component__WEBPACK_IMPORTED_MODULE_4__["LightModeIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_3__["HomeIconComponent"],
        _github_github_component__WEBPACK_IMPORTED_MODULE_2__["GithubIconComponent"],
        _contact_icon_contact_icon_component__WEBPACK_IMPORTED_MODULE_6__["ContactIconComponent"],
        _options_icon_options_icon_component__WEBPACK_IMPORTED_MODULE_1__["OptionsIconComponent"],
        _linkedin_icon_linkedin_icon_component__WEBPACK_IMPORTED_MODULE_7__["LinkedinIconComponent"],
        _dark_mode_icon_dark_mode_icon_component__WEBPACK_IMPORTED_MODULE_5__["DarkModeIconComponent"],
        _light_mode_icon_light_mode_icon_component__WEBPACK_IMPORTED_MODULE_4__["LightModeIconComponent"]] }); })();


/***/ }),

/***/ "j83E":
/*!*************************************************************************!*\
  !*** ./src/app/shared/svg-icons/contact-icon/contact-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactIconComponent", function() { return ContactIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactIconComponent {
}
ContactIconComponent.ɵfac = function ContactIconComponent_Factory(t) { return new (t || ContactIconComponent)(); };
ContactIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactIconComponent, selectors: [["app-contact-icon"]], decls: 3, vars: 0, consts: [["id", "i-telephone", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 32 32", "width", "2em", "height", "2em", "fill", "none", "stroke", "currentcolor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["d", "M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z"], ["cx", "16", "cy", "21", "r", "4"]], template: function ContactIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "neLD":
/*!******************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.module.ts ***!
  \******************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.component */ "+7qI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SidenavModule {
}
SidenavModule.ɵfac = function SidenavModule_Factory(t) { return new (t || SidenavModule)(); };
SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'github',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-github-github-module */ "pages-github-github-module").then(__webpack_require__.bind(null, /*! ./pages/github/github.module */ "jw5F")).then(m => m.GithubModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map