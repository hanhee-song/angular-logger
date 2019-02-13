(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Please open the developer console and refresh the page to see the logger in action</div>\n\n<app-sample></app-sample>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sample_sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sample/sample.component */ "./src/app/components/sample/sample.component.ts");
/* harmony import */ var _components_child_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/child/child.component */ "./src/app/components/child/child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_sample_sample_component__WEBPACK_IMPORTED_MODULE_3__["SampleComponent"],
                _components_child_child_component__WEBPACK_IMPORTED_MODULE_4__["ChildComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/child/child.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/child/child.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/child/child.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/child/child.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/child/child.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/child/child.component.ts ***!
  \*****************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_log_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger/log-wrapper */ "./src/app/logger/log-wrapper.ts");
/* harmony import */ var _logger_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger/log.service */ "./src/app/logger/log.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildComponent = /** @class */ (function (_super) {
    __extends(ChildComponent, _super);
    function ChildComponent(logService) {
        var _this = _super.call(this, logService) || this;
        _this.logService = logService;
        return _this;
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.ngOnDestroy = function () { };
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/components/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/components/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [_logger_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], ChildComponent);
    return ChildComponent;
}(_logger_log_wrapper__WEBPACK_IMPORTED_MODULE_1__["LogWrapper"]));



/***/ }),

/***/ "./src/app/components/sample/sample.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/sample/sample.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FtcGxlL3NhbXBsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sample/sample.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/sample/sample.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-child></app-child>\n"

/***/ }),

/***/ "./src/app/components/sample/sample.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sample/sample.component.ts ***!
  \*******************************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_log_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger/log-wrapper */ "./src/app/logger/log-wrapper.ts");
/* harmony import */ var _logger_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logger/log.service */ "./src/app/logger/log.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SampleComponent = /** @class */ (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent(logService, dataService, modalService) {
        var _this = _super.call(this, logService) || this;
        _this.logService = logService;
        _this.dataService = dataService;
        _this.modalService = modalService;
        _this.cache = {};
        _this.data = {};
        return _this;
    }
    SampleComponent.prototype.ngOnInit = function () {
        if (this.isCachePopulated()) {
        }
        else {
            this.initData();
        }
    };
    SampleComponent.prototype.ngOnDestroy = function () { };
    SampleComponent.prototype.initData = function () {
        var _this = this;
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                _this.modalService.openModal();
                _this.dataService.getData("args").subscribe(_this.initDataCallback.bind(_this));
            });
        });
    };
    SampleComponent.prototype.initDataCallback = function (data) {
        this.modalService.closeModel();
        this.data = this.processData(data.fakeData);
        this.isLoaded = true;
        this.setCache(data.fakeData);
        this.initWidgets();
    };
    SampleComponent.prototype.processData = function (data) {
        this.throwError(data);
        return data.map(function (datum) { return datum * 2; });
    };
    SampleComponent.prototype.throwError = function (data) {
        return data.prop.prop;
    };
    SampleComponent.prototype.isCachePopulated = function () {
        return !!this.cache.data;
    };
    SampleComponent.prototype.setCache = function (data) {
        this.cache.data = data;
    };
    SampleComponent.prototype.initWidgets = function () {
        this.initWidgetOne();
        this.initWidgetTwo();
        this.initWidgetThree();
    };
    SampleComponent.prototype.initWidgetOne = function () { };
    SampleComponent.prototype.initWidgetTwo = function () {
        this.initWidgetTwoData();
    };
    SampleComponent.prototype.initWidgetThree = function () { };
    SampleComponent.prototype.initWidgetTwoData = function () {
        this.cache.widgetTwoData = this.cache.data.map(function (data) { return 1; });
    };
    SampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/components/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.css */ "./src/app/components/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [_logger_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]])
    ], SampleComponent);
    return SampleComponent;
}(_logger_log_wrapper__WEBPACK_IMPORTED_MODULE_3__["LogWrapper"]));



/***/ }),

/***/ "./src/app/logger/interfaces.ts":
/*!**************************************!*\
  !*** ./src/app/logger/interfaces.ts ***!
  \**************************************/
/*! exports provided: LogLevelEnum, LogStringEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevelEnum", function() { return LogLevelEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogStringEnum", function() { return LogStringEnum; });
var LogLevelEnum;
(function (LogLevelEnum) {
    LogLevelEnum[LogLevelEnum["NOLOG"] = -1] = "NOLOG";
    LogLevelEnum[LogLevelEnum["ERROR"] = 0] = "ERROR";
    LogLevelEnum[LogLevelEnum["WARN"] = 1] = "WARN";
    LogLevelEnum[LogLevelEnum["INFO"] = 2] = "INFO";
    LogLevelEnum[LogLevelEnum["LOG"] = 3] = "LOG";
    LogLevelEnum[LogLevelEnum["TIMESTAMP"] = 3] = "TIMESTAMP";
    LogLevelEnum[LogLevelEnum["VERBOSE"] = 4] = "VERBOSE";
})(LogLevelEnum || (LogLevelEnum = {}));
var LogStringEnum;
(function (LogStringEnum) {
    LogStringEnum["NOLOG"] = "NOLOG";
    LogStringEnum["ERROR"] = "ERROR";
    LogStringEnum["WARN"] = "WARN";
    LogStringEnum["INFO"] = "INFO";
    LogStringEnum["LOG"] = "LOG";
    LogStringEnum["TIMESTAMP"] = "TIMESTAMP";
    LogStringEnum["VERBOSE"] = "VERBOSE";
})(LogStringEnum || (LogStringEnum = {}));


/***/ }),

/***/ "./src/app/logger/log-queue.ts":
/*!*************************************!*\
  !*** ./src/app/logger/log-queue.ts ***!
  \*************************************/
/*! exports provided: LogQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogQueue", function() { return LogQueue; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/app/logger/interfaces.ts");

var LogQueue = /** @class */ (function () {
    function LogQueue() {
        this.logGroupQueue = [];
        this.groupIndexStack = [];
    }
    LogQueue.prototype.makeGroup = function (header, logLevel, isCollapsed) {
        var logGroup = {
            isGrouped: true,
            logQueue: [],
            isCollapsed: isCollapsed,
            logQueueHeader: header,
            style: logLevel || _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].LOG,
            depth: this.groupIndexStack.length,
            startDate: new Date(),
            startTime: performance.now(),
        };
        this.logGroupQueue.push(logGroup);
        this.groupIndexStack.push(this.logGroupQueue.length - 1);
    };
    LogQueue.prototype.endGroup = function (header, logLevel, performanceNow) {
        var idx = this.groupIndexStack.pop();
        var group = this.logGroupQueue[idx];
        if (header) {
            group.logQueueHeader = header;
        }
        if (logLevel) {
            group.style = logLevel;
        }
        group.logQueueHeader = this.getNestedGroupHeader(group.logQueueHeader, group.depth);
        group.endTime = performanceNow || performance.now();
        group.style = this.elevateGroupLevel(group);
    };
    /**
     * This function will get the highest log level found within a group
     */
    LogQueue.prototype.elevateGroupLevel = function (group) {
        return group.logQueue.reduce(function (acc, item) {
            return _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"][item.level] < _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"][acc.level] ? item : acc;
        }, { level: group.style }).level;
    };
    LogQueue.prototype.getNestedGroupHeader = function (header, depth) {
        return ' | '.repeat(depth) + header;
    };
    LogQueue.prototype.addToCurrentGroup = function (level, args) {
        this.logGroupQueue[this.groupIndexStack[this.groupIndexStack.length - 1]].logQueue.push({ level: level, args: args });
    };
    LogQueue.prototype.isQueueEmpty = function () {
        return !this.logGroupQueue.length;
    };
    LogQueue.prototype.areAllGroupsEnded = function () {
        return !this.groupIndexStack.length;
    };
    LogQueue.prototype.isMostRecentItemGrouped = function () {
        return this.logGroupQueue[this.logGroupQueue.length - 1].isGrouped;
    };
    LogQueue.prototype.forEach = function (callback) {
        for (var i = 0; i < this.logGroupQueue.length; i++) {
            var group = this.logGroupQueue[i];
            callback(group);
        }
    };
    LogQueue.prototype.clearQueue = function () {
        this.logGroupQueue = [];
    };
    return LogQueue;
}());



/***/ }),

/***/ "./src/app/logger/log-wrapper.ts":
/*!***************************************!*\
  !*** ./src/app/logger/log-wrapper.ts ***!
  \***************************************/
/*! exports provided: LogWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWrapper", function() { return LogWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/app/logger/interfaces.ts");
var _a, _b;


var SUBJECTS = Symbol('subjects'), LOG_LEVEL_SUB = Symbol('logLevelSub'), WINDOW_STORE_NAME = Symbol('windowStoreName'), IS_DESTROY_WRAPPED = Symbol('isDestroyWrapped'), IS_COMPONENT_WRAPPED = Symbol('isComponentWrapped'), IS_PROTOTYPE_WRAPPED = Symbol('isPrototypeWrapped'), WRAPPED_FUNCTIONS = Symbol('wrappedFunctions'), NG_ON_DESTROY = Symbol('ngOnDestroy');
var INVALID_KEYS = new Set(['Observable', 'Router', 'User', 'ElementRef']);
var LogWrapper = /** @class */ (function () {
    function LogWrapper(logService) {
        var _this = this;
        this.logService = logService;
        this[_a] = [];
        this[_b] = false;
        if (!LogWrapper.logService) {
            LogWrapper.logService = logService;
        }
        LogWrapper.checkLogLevel(+LogWrapper.logService.getLogLevel(), this);
        var prototype = this.__proto__;
        this[LOG_LEVEL_SUB] = LogWrapper.logService.getLogLevelSubject()
            .subscribe(function (logLevel) {
            LogWrapper.checkLogLevel(logLevel, _this);
        });
        LogWrapper._wrapProtoNgOnDestroy(prototype);
    }
    LogWrapper.checkLogLevel = function (level, component) {
        var prototype = component.__proto__;
        if (level >= 4) {
            this._addToWindowStore(component);
            this._wrapComponent(component, prototype);
            this._wrapPrototype(prototype);
        }
        else {
            this._deleteFromWindowStore(component);
            this._unwrapComponent(component, prototype);
            this._unwrapPrototype(prototype);
        }
    };
    LogWrapper._addToWindowStore = function (component) {
        if (!component[WINDOW_STORE_NAME]) {
            component[WINDOW_STORE_NAME] = LogWrapper.logService.getWindowStore().add(component);
        }
    };
    LogWrapper._deleteFromWindowStore = function (component) {
        if (component[WINDOW_STORE_NAME]) {
            LogWrapper.logService.getWindowStore().delete(component[WINDOW_STORE_NAME]);
            delete component[WINDOW_STORE_NAME];
        }
    };
    LogWrapper._wrapComponent = function (component, prototype) {
        if (!component[IS_COMPONENT_WRAPPED]) {
            this._wrapComponentSubjectsAfterInit(component);
            this._wrapComponentNgOnDestroy(component, prototype);
            component[IS_COMPONENT_WRAPPED] = true;
        }
    };
    LogWrapper._unwrapComponent = function (component, prototype) {
        if (component[IS_COMPONENT_WRAPPED]) {
            this._unwrapComponentNgOnDestroy(component, prototype);
            this._unwrapComponentSubjects(component);
            component[IS_COMPONENT_WRAPPED] = false;
        }
    };
    LogWrapper._wrapPrototype = function (prototype) {
        if (!prototype[IS_PROTOTYPE_WRAPPED]) {
            LogWrapper.logService.info('Wrapping prototype ' + prototype.constructor.name);
            prototype[WRAPPED_FUNCTIONS] = {};
            for (var key in prototype) {
                if (prototype.hasOwnProperty(key)
                    && key !== 'constructor'
                    && key !== 'ngOnDestroy'
                    && key.slice(0, 2) !== '__'
                    && typeof prototype[key] === 'function') {
                    var oldFunction = prototype[key];
                    prototype[WRAPPED_FUNCTIONS][key] = oldFunction;
                    prototype[key] = this.wrappedFunction(key, prototype);
                }
            }
            prototype[IS_PROTOTYPE_WRAPPED] = true;
        }
    };
    LogWrapper.wrappedFunction = function (functionName, prototype) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var error, returnValue;
            // handle possibility of losing scope
            if (!this[WINDOW_STORE_NAME]) {
                console.error.arguments("function " + functionName + " on prototype " + prototype.constructor.name + " was executed out of scope. Consider binding the function to 'this'.");
                return;
            }
            var before = LogWrapper._cloneClean(this);
            LogWrapper.logService.groupCollapsed();
            try {
                returnValue = prototype[WRAPPED_FUNCTIONS][functionName].bind(this).apply(void 0, args);
            }
            catch (e) {
                error = e;
            }
            var endTime = performance.now();
            LogWrapper.logService.log('  Args:', args);
            var numberOfDiffs = LogWrapper._logDiffs(before, this);
            if (error) {
                LogWrapper.logService.error(error);
            }
            else {
                LogWrapper.logService.log('Return:', returnValue);
            }
            var logString = this._getHeaderName(functionName)
                + ' (changes - ' + numberOfDiffs + ')'
                + (returnValue !== undefined ? ' (return ' + LogWrapper._getTypeOfValue(returnValue) + ')' : '');
            LogWrapper.logService.groupEnd(logString, error ? _interfaces__WEBPACK_IMPORTED_MODULE_1__["LogStringEnum"].ERROR : _interfaces__WEBPACK_IMPORTED_MODULE_1__["LogStringEnum"].LOG, endTime);
            if (!error) {
                return returnValue;
            }
        };
    };
    LogWrapper._logDiffs = function (before, current) {
        var after = LogWrapper._cloneClean(current);
        var keysWithStateChanges = LogWrapper._getKeysWithStateChanges(before, after);
        if (keysWithStateChanges.length) {
            var beforeObj = LogWrapper._getSubsetOfObjectByKeys(before, keysWithStateChanges);
            var afterObj = LogWrapper._getSubsetOfObjectByKeys(after, keysWithStateChanges);
            LogWrapper.logService.log('Before:', beforeObj);
            LogWrapper.logService.log(' After:', afterObj);
        }
        return keysWithStateChanges.length;
    };
    LogWrapper.prototype._getHeaderName = function (key) {
        return this.constructor.name + ' ' + key;
    };
    LogWrapper._unwrapPrototype = function (prototype) {
        if (prototype[IS_PROTOTYPE_WRAPPED]) {
            var wrappedFunctions = prototype[WRAPPED_FUNCTIONS];
            for (var key in wrappedFunctions) {
                if (wrappedFunctions.hasOwnProperty(key)) {
                    prototype[key] = wrappedFunctions[key];
                }
            }
            prototype[WRAPPED_FUNCTIONS] = {};
            prototype[IS_PROTOTYPE_WRAPPED] = false;
        }
    };
    LogWrapper._getKeysWithStateChanges = function (obj1, obj2) {
        var diffs = [];
        for (var key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(obj1[key], obj2[key]))
                    diffs.push(key);
            }
        }
        return diffs;
    };
    LogWrapper._getSubsetOfObjectByKeys = function (obj, keys) {
        var subsetOfObj = {};
        for (var i = 0; i < keys.length; i++) {
            subsetOfObj[keys[i]] = obj[keys[i]];
        }
        return subsetOfObj;
    };
    LogWrapper._cloneClean = function (obj) {
        var clone = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                if (element === undefined
                    || element === null
                    || (element.constructor.name.slice(element.constructor.name.length - 7) !== 'Service'
                        && !INVALID_KEYS.has(element.constructor.name)
                        && !LogWrapper._hasFunction(element))) {
                    clone[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(element);
                }
            }
        }
        return clone;
    };
    LogWrapper._hasFunction = function (obj) {
        if (typeof obj === 'function') {
            return true;
        }
        if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && typeof obj[key] === 'function') {
                    return true;
                }
            }
        }
        return false;
    };
    LogWrapper._wrapComponentSubjectsAfterInit = function (component) {
        var _this = this;
        setTimeout(function () {
            var _loop_1 = function (key) {
                if (component.hasOwnProperty(key)) {
                    var element = component[key];
                    if (_this._isSubject(element)) {
                        var sub = element.subscribe(function (data) {
                            LogWrapper.logService.groupCollapsed(component._getHeaderName(key) + ' (next)' + (data !== undefined ? ', (new data)' : ''), _interfaces__WEBPACK_IMPORTED_MODULE_1__["LogStringEnum"].TIMESTAMP);
                            LogWrapper.logService.log('Args: ', data);
                            LogWrapper.logService.groupEnd();
                        });
                        component[SUBJECTS].push(sub);
                    }
                }
            };
            for (var key in component) {
                _loop_1(key);
            }
        }, 0);
    };
    LogWrapper._unwrapComponentSubjects = function (component) {
        if (component[SUBJECTS] && component[SUBJECTS].length) {
            for (var i = 0; i < component[SUBJECTS].length; i++) {
                var sub = component[SUBJECTS][i];
                sub.unsubscribe();
            }
        }
        component[SUBJECTS] = [];
    };
    // hook onto ngOnDestroy to unsub from logLevelSub
    LogWrapper._wrapProtoNgOnDestroy = function (prototype) {
        // hook onto proto destroy
        if (prototype[IS_DESTROY_WRAPPED]) {
            return;
        }
        if (prototype.ngOnDestroy) {
            prototype[IS_DESTROY_WRAPPED] = true;
            var oldDestroy = prototype.ngOnDestroy;
            prototype[NG_ON_DESTROY] = oldDestroy;
            prototype.ngOnDestroy = function () {
                this[LOG_LEVEL_SUB].unsubscribe();
                prototype[NG_ON_DESTROY].apply(this);
            };
        }
    };
    LogWrapper._wrapComponentNgOnDestroy = function (component, prototype) {
        if (prototype.ngOnDestroy) {
            component.ngOnDestroy = function () {
                LogWrapper.logService.getWindowStore().delete(this[WINDOW_STORE_NAME]);
                prototype.ngOnDestroy.apply(this);
            };
        }
    };
    LogWrapper._unwrapComponentNgOnDestroy = function (component, prototype) {
        if (prototype.ngOnDestroy && component.hasOwnProperty('ngOnDestroy')) {
            delete component.ngOnDestroy;
        }
    };
    LogWrapper._isSubject = function (element) {
        return element && element.constructor && element.constructor.name === 'Subject';
    };
    LogWrapper._getTypeOfValue = function (element) {
        if (element && element.constructor && element.constructor.name) {
            return element.constructor.name;
        }
        else {
            return typeof element;
        }
    };
    return LogWrapper;
}());

_a = SUBJECTS, _b = IS_COMPONENT_WRAPPED;


/***/ }),

/***/ "./src/app/logger/log.service.ts":
/*!***************************************!*\
  !*** ./src/app/logger/log.service.ts ***!
  \***************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/app/logger/interfaces.ts");
/* harmony import */ var _log_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-queue */ "./src/app/logger/log-queue.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _window_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./window-store */ "./src/app/logger/window-store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ActivatedRoute } from '@angular/router';



var DEFAULT_LOG_LEVEL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? -1 : 4;
var LogService = /** @class */ (function () {
    function LogService(
    // private route: ActivatedRoute
    ) {
        this.logLevelSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.windowStore = new _window_store__WEBPACK_IMPORTED_MODULE_6__["WindowStore"]();
        this.logQueue = new _log_queue__WEBPACK_IMPORTED_MODULE_1__["LogQueue"]();
        // private readonly filteredLocations: Set<string> = new Set(['LogService', 'Subscriber', 'TapSubscriber', 'MapSubscriber', 'SafeSubscriber', 'Observable', 'Array', 'Object', 'LogQueue']);
        this.logLevel = _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"].LOG;
        this.groupCounter = 0;
        this.STYLE = {
            INFO: 'color: #40ad45; font-weight: 700;',
            ERROR: 'color: #f24b4b; font-weight: 700;',
            LOG: 'font-weight: 400;',
            TIMESTAMP: 'color: #888; font-weight: 400;',
            WARN: 'color: orange; font-weight: 700;',
        };
        this.isIe = this._isIe();
        this.isTest = !!window.__karma__;
        this.logLevel = DEFAULT_LOG_LEVEL;
        if (this.isIe || this.isTest) {
            this.logLevel = _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"].NOLOG;
        }
        // if (this.route.snapshot.queryParams.logLevel) {
        //   this.logLevel = +this.route.snapshot.queryParams.logLevel;
        // }
        // this.route.queryParams.subscribe(params => {
        //   if (params.logLevel) {
        //     this.setLogLevel(+params.logLevel);
        //   }
        // });
        this.setLogLevel(this.logLevel);
    }
    /**
     * Wrapper for console.log(). Requires logLevel <= 3
     */
    LogService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._queueItem.apply(this, [_interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].LOG].concat(args));
    };
    /**
     * Wrapper for console.log(). Requires logLevel <= 3
     */
    LogService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._queueItem.apply(this, [_interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].INFO].concat(args));
    };
    /**
     * Wrapper for console.log(). Requires logLevel <= 3
     */
    LogService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._queueItem.apply(this, [_interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].WARN].concat(args));
    };
    /**
     * Wrapper for console.log(). Requires logLevel <= 3
     */
    LogService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._queueItem.apply(this, [_interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].ERROR].concat(args));
    };
    /** Wrapper for console.group(). Starts a new uncollapsed group to be logged
     * @param header - header of group
     * @param logLevel - logLevel ranging from NOLOG (-1) to VERBOSE (4). Default is LOG(3). Gorups will be hidden if they and their children's log levels are below the threshold
     */
    LogService.prototype.group = function (header, logLevel) {
        this.logQueue.makeGroup(header || '', logLevel || _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].LOG, false);
    };
    /** Wrapper for console.group(). Starts a new uncollapsed group to be logged
     * @param header - header of group
     * @param logLevel - logLevel ranging from NOLOG (-1) to VERBOSE (4). Default is LOG(3). Gorups will be hidden if they and their children's log levels are below the threshold
     */
    LogService.prototype.groupCollapsed = function (header, logLevel) {
        this.logQueue.makeGroup(header || '', logLevel || _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogStringEnum"].LOG, true);
    };
    LogService.prototype.groupEnd = function (header, logLevel, performanceNow) {
        var _this = this;
        this.logQueue.endGroup(header, logLevel, performanceNow);
        if (this.logQueue.areAllGroupsEnded()) {
            this.logQueue.forEach(function (logGroup) {
                _this._logGroup(logGroup);
            });
            this.logQueue.clearQueue();
        }
    };
    LogService.prototype.setLogLevel = function (level) {
        if ([-1, 0, 1, 2, 3, 4].includes(level)) {
            this.logLevel = level;
        }
        else {
            this.logLevel = _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"].WARN;
        }
        if (!this.isTest) {
            !this.isIe
                ? console.warn('%cLog level is now ' + this.logLevel, this.STYLE.ERROR)
                : console.warn('Log level is now ' + this.logLevel);
        }
        this.logLevelSubject.next(this.logLevel);
    };
    LogService.prototype.getLogLevel = function () {
        return this.logLevel;
    };
    LogService.prototype.getLogLevelSubject = function () {
        return this.logLevelSubject;
    };
    LogService.prototype.getWindowStore = function () {
        return this.windowStore;
    };
    LogService.prototype._logItem = function (level, isGrouped, args) {
        if (this.logLevel >= _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"][level]) {
            this._groupBasedOnTime();
            if (isGrouped) {
                !this.isIe
                    ? console.group('%c' + args[0] + '%c - ' + this._getLogDateTimeString(), this.STYLE[level], this.STYLE.TIMESTAMP)
                    : console.group(args[0] + ' - ' + this._getLogDateTimeString());
                for (var i = 0; i < args.length; i++) {
                    var element = args[i];
                    console[level.toLocaleLowerCase()](element);
                }
                console.groupEnd();
            }
            else {
                if (level.toLocaleLowerCase() === 'info') {
                    !this.isIe
                        ? console.log.apply(console, ['%c' + args[0], this.STYLE[level]].concat(args.slice(1))) : console.log.apply(console, args);
                }
                else {
                    console[level.toLocaleLowerCase()].apply(console, args);
                }
            }
        }
    };
    LogService.prototype._queueItem = function (level) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.logQueue.isQueueEmpty() || !this.logQueue.isMostRecentItemGrouped()) {
            var isGrouped = args.length > 1;
            this._logItem(level, isGrouped, args);
        }
        else {
            this.logQueue.addToCurrentGroup(level, args);
        }
    };
    LogService.prototype._logGroup = function (group) {
        var _this = this;
        var action = group.style;
        if (this.logLevel > _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"][action] || this._isGroupLoggable(group)) {
            this._groupBasedOnTime();
            var consoleGroup = group.isCollapsed ? console.groupCollapsed : console.group;
            var timeDiff = Math.round((group.endTime - group.startTime) * 10) / 10;
            var timeString = this._getLogDateTimeString(group.startDate) + ' (' + timeDiff + ' ms)';
            !this.isIe
                ? consoleGroup('%c' + group.logQueueHeader + '%c - ' + timeString, this.STYLE[group.style], this.STYLE.TIMESTAMP)
                : consoleGroup(group.logQueueHeader + ' - ' + timeString);
            group.logQueue.forEach(function (item) {
                _this._logItem(item.level, false, item.args);
            });
            console.groupEnd();
        }
    };
    LogService.prototype._isGroupLoggable = function (group) {
        for (var i = 0; i < group.logQueue.length; i++) {
            var itemAction = group.logQueue[i][0];
            if (this.logLevel >= _interfaces__WEBPACK_IMPORTED_MODULE_0__["LogLevelEnum"][itemAction]) {
                return true;
            }
        }
        return false;
    };
    LogService.prototype._getLogDateTimeString = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(date ? date : new Date(), 'HH:mm:ss.SSS');
    };
    LogService.prototype._groupBasedOnTime = function () {
        var now = new Date();
        var ms = now.getTime();
        if (!this.mostRecentLog || this.mostRecentLog + 200 < ms) {
            console.groupEnd();
            this.groupCounter++;
            !this.isIe
                ? console.group('[  ' + this.groupCounter + '  ]' + '%c' + this._getLogDateTimeString(now), this.STYLE.TIMESTAMP)
                : console.group('[  ' + this.groupCounter + '  ]' + this._getLogDateTimeString(now));
            clearTimeout(this.groupTimeout);
        }
        this.mostRecentLog = ms;
    };
    LogService.prototype._isIe = function () {
        var ua = window.navigator.userAgent;
        return ~ua.indexOf('MSIE ') || ~ua.indexOf('Trident/') ? true : false;
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/logger/window-store.ts":
/*!****************************************!*\
  !*** ./src/app/logger/window-store.ts ***!
  \****************************************/
/*! exports provided: WindowStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowStore", function() { return WindowStore; });
var WindowStore = /** @class */ (function () {
    function WindowStore() {
        this.store = {};
        if (!window.hasOwnProperty('s')) {
            window.s = {};
        }
        this.store = window.s;
    }
    /** Adds the component to the window
     * @param component - object to add to the window
     * @return thekey in the store that maps to the component
     */
    WindowStore.prototype.add = function (component) {
        return this._add(component);
    };
    WindowStore.prototype.delete = function (componentName) {
        this._delete(componentName);
    };
    WindowStore.prototype._has = function (componentName) {
        return this.store.hasOwnProperty(componentName);
    };
    WindowStore.prototype._add = function (component) {
        var name = this._getComponentName(component);
        this.store[name] = component;
        return name;
    };
    WindowStore.prototype._delete = function (componentName) {
        delete this.store[componentName];
    };
    WindowStore.prototype._getComponentName = function (component) {
        var componentName = component.constructor.name;
        if (!this._has(componentName)) {
            return componentName;
        }
        for (var i = 0; i < 99; i++) {
            if (!this._has(componentName + i)) {
                return componentName + i;
            }
        }
        // this will start returning a constant string after there are more than 100 instances of a component
        // in the window store. this is to prevent whatever bizarre memory leak you're trying to
        // induce by having more than 100 components.
        return "MAX_COMPONENTS_NAME";
    };
    return WindowStore;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _logger_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/log.service */ "./src/app/logger/log.service.ts");
/* harmony import */ var _logger_log_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/log-wrapper */ "./src/app/logger/log-wrapper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function (_super) {
    __extends(DataService, _super);
    function DataService(logService) {
        var _this = _super.call(this, logService) || this;
        _this.logService = logService;
        return _this;
    }
    DataService.prototype.ngOnDestroy = function () { };
    DataService.prototype.getData = function (args) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            fakeData: [1, 2, 3],
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logger_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], DataService);
    return DataService;
}(_logger_log_wrapper__WEBPACK_IMPORTED_MODULE_4__["LogWrapper"]));



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _logger_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../logger/log.service */ "./src/app/logger/log.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_log_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/log-wrapper */ "./src/app/logger/log-wrapper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalService = /** @class */ (function (_super) {
    __extends(ModalService, _super);
    function ModalService(logService) {
        var _this = _super.call(this, logService) || this;
        _this.logService = logService;
        _this.modalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.isOpen = true;
        _this.modalSubject.subscribe(function (isOpen) { return _this.isOpen = isOpen; });
        return _this;
    }
    ModalService.prototype.ngOnDestroy = function () { };
    ModalService.prototype.closeModel = function () {
        this.modalSubject.next(false);
    };
    ModalService.prototype.openModal = function () {
        this.modalSubject.next(true);
    };
    ModalService.prototype.getModalSubject = function () {
        return this.modalSubject;
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logger_log_service__WEBPACK_IMPORTED_MODULE_0__["LogService"]])
    ], ModalService);
    return ModalService;
}(_logger_log_wrapper__WEBPACK_IMPORTED_MODULE_2__["LogWrapper"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hanhee\Code\angular-logger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map