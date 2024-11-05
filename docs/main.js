"use strict";
(self["webpackChunkLifePlanner"] = self["webpackChunkLifePlanner"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);



class AppComponent {
  constructor() {
    this.title = 'LifePlanner';
    this.userName = 'Login';
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  }
  openLogin() {
    // let loginRef = this.loginDialog.open(LoginComponent);
    // loginRef.afterClosed().subscribe((data) => {
    //   if (data) {
    //     console.log(data);
    //     if (data.userDetails.hasOwnProperty('_profile')) {
    //       var userName = data.userDetails._profile.data.email;
    //       this.userName = userName;
    //       console.log(userName);
    //     }
    //   }
    // });
    this.router.navigate(['/login']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar", "has-background-dark"], [1, "navbar-brand"], [1, "navbar-item"], [1, "app-name", "has-gradient-text", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h1_click_3_listener() {
            return ctx.navigateToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LifePlanner ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  right: 4em;\n  top: 1em;\n  color: #fff;\n  cursor: pointer;\n}\n\n.app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Yatra One\", sans-serif;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIGxvZ2luXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA0ZW07XHJcbiAgdG9wOiAxZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXBwLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LWZhbWlseTogXCJZYXRyYSBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYXMtZ3JhZGllbnQtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzEzZjdmNCwgIzJhZjU5OCk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);






const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.provideClientHydration)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)(), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)(),
  // required animations providers
  (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.provideToastr)({
    positionClass: 'toast-top-right',
    // Position of the toast
    closeButton: true,
    enableHtml: true,
    tapToDismiss: true,
    // Dismiss toast on click
    preventDuplicates: true
  })]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/main-view/main-view.component */ 5333);
/* harmony import */ var _views_email_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/email/email-confirm/email-confirm.component */ 9722);
/* harmony import */ var _views_email_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/email/reset-password/reset-password.component */ 9654);
/* harmony import */ var _views_email_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/email/login/login.component */ 2986);
/* harmony import */ var _views_email_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/email/register/register.component */ 5166);





const routes = [{
  path: '',
  component: _views_email_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'main',
  component: _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_0__.MainViewComponent
}, {
  path: 'confirmEmail',
  component: _views_email_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmComponent
}, {
  path: 'resetPassword',
  component: _views_email_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent
}, {
  path: 'register',
  component: _views_email_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent
}];

/***/ }),

/***/ 6730:
/*!*****************************************!*\
  !*** ./src/app/enums/idea-type.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdeaType: () => (/* binding */ IdeaType)
/* harmony export */ });
var IdeaType;
(function (IdeaType) {
  IdeaType[IdeaType["ideas"] = 0] = "ideas";
  IdeaType[IdeaType["goals"] = 1] = "goals";
  IdeaType[IdeaType["objectives"] = 2] = "objectives";
  IdeaType[IdeaType["achievements"] = 3] = "achievements";
})(IdeaType || (IdeaType = {}));

/***/ }),

/***/ 381:
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);





class LoginService {
  constructor() {
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService);
  }
  loginEmailPassword(loginCredentials) {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this.supabaseService.supabase.auth.signInWithPassword({
          email: loginCredentials.email,
          password: loginCredentials.password
        });
        console.log(data);
        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        _this.toastRService.error(`Login error : ${error.message}`, 'Failure');
      }
    })();
  }
  static {
    this.ɵfac = function LoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7309:
/*!*******************************************************!*\
  !*** ./src/app/services/register/register.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterService: () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);





class RegisterService {
  constructor() {
    this.toastrService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService);
  }
  registerUser(email, password) {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let {
        data,
        error
      } = yield _this.supabaseService.supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) {
        _this.toastrService.error(error.message);
        return;
      }
      if (data) {
        _this.toastrService.success(`Registration successful for ${data.user.email}`);
        return data;
      }
    })();
  }
  static {
    this.ɵfac = function RegisterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 867:
/*!*******************************************************!*\
  !*** ./src/app/services/supabase/supabase.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseService: () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ 2014);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class SupabaseService {
  constructor() {
    this.supabaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.SUPABASE_URL;
    const supabaseKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.SUPABASE_KEY;
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(this.supabaseUrl, supabaseKey);
  }
  getUser() {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userResponse = yield _this.supabase.auth.getUser();
      return userResponse.data.user;
    })();
  }
  static {
    this.ɵfac = function SupabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SupabaseService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SupabaseService,
      factory: SupabaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2173:
/*!***********************************************!*\
  !*** ./src/app/services/task/task.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);





class TaskService {
  constructor() {
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService);
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
  }
  addTask(taskData) {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let user = yield _this.supabaseService.getUser();
        let {
          data,
          error
        } = yield _this.supabaseService.supabase.from('tasks').insert({
          name: taskData.name,
          description: taskData.description,
          type: taskData.type,
          completion_status: taskData.completion_status,
          user_id: user.id
        });
        if (error) {
          throw error;
        }
        _this.toastRService.success(`Task ${taskData.name} added successfully}`);
        return true;
      } catch (error) {
        _this.toastRService.error(`Failed to add task : ${error.message}`);
      }
    })();
  }
  getTasks() {
    var _this2 = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let user = yield _this2.supabaseService.getUser();
        let {
          data: tasks,
          error
        } = yield _this2.supabaseService.supabase.from('tasks').select('*').eq('user_id', user.id);
        if (error) {
          throw error;
        }
        if (tasks) {
          return tasks;
        }
      } catch (error) {
        _this2.toastRService.error(`Failed to add task : ${error.message}`);
      }
    })();
  }
  updateTaskContainer(taskData) {
    var _this3 = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let user = yield _this3.supabaseService.getUser();
        let {
          data,
          error
        } = yield _this3.supabaseService.supabase.from('tasks').update({
          type: taskData.type
        }).eq('id', taskData.id);
        if (error) {
          throw error;
        }
        return true;
      } catch (error) {
        _this3.toastRService.error(`Failed to update task : ${error.message}`);
      }
    })();
  }
  static {
    this.ɵfac = function TaskService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7760:
/*!********************************************!*\
  !*** ./src/app/utility/utility.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilityService: () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class UtilityService {
  static {
    this.getEnumKeyByValue = (enumObj, value) => Object.keys(enumObj).find(key => enumObj[key] === value);
  }
  constructor() {}
  static {
    this.ɵfac = function UtilityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UtilityService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilityService,
      factory: UtilityService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5449:
/*!******************************************************!*\
  !*** ./src/app/views/add-task/add-task.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTaskComponent: () => (/* binding */ AddTaskComponent)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);











function AddTaskComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getValidationMessage());
  }
}
class AddTaskComponent {
  constructor(data) {
    this.data = data;
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService);
    this.addTaskDialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef);
  }
  ngOnInit() {
    this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('')
    });
  }
  getValidationMessage() {
    if (this.addTaskForm.controls.name.hasError('required')) {
      return 'You must enter a name for the task';
    }
    return this.addTaskForm.controls.name.hasError('minLength') ? 'At least 3 characters long' : '';
  }
  addTask() {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const task = {
        name: _this.addTaskForm.controls.name.value,
        description: _this.addTaskForm.controls.description.value,
        type: _this.data.taskType,
        completion_status: 0,
        user_id: null
      };
      const didAdd = yield _this.taskService.addTask(task);
      if (didAdd) {
        //close dialog
        _this.addTaskDialogRef.close();
      }
    })();
  }
  static {
    this.ɵfac = function AddTaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AddTaskComponent,
      selectors: [["add-task"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 2,
      consts: [[1, "add-task-container", "flex-column", 3, "submit", "formGroup"], ["matInput", "", "placeholder", "Task name", "formControlName", "name"], ["matInput", "", "placeholder", "Task description", "formControlName", "description"], ["mat-raised-button", "", "color", "primary", "type", "submit"]],
      template: function AddTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddTaskComponent_Template_form_submit_0_listener() {
            return ctx.addTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field")(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter task name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddTaskComponent_Conditional_5_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Please explain the task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "textarea", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Add Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addTaskForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.addTaskForm.controls.name.invalid && ctx.addTaskForm.controls.name.touched ? 5 : -1);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".add-task-container[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 50vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC10YXNrLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9722:
/*!**********************************************************************!*\
  !*** ./src/app/views/email/email-confirm/email-confirm.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailConfirmComponent: () => (/* binding */ EmailConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/register/register.service */ 7309);



class EmailConfirmComponent {
  constructor(activatedRoute, registerService) {
    this.activatedRoute = activatedRoute;
    this.registerService = registerService;
    this.token = '';
    this.tokenId = '';
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParam => {
      this.token = queryParam.token;
      this.tokenId = queryParam.tokenId;
      this.confirmUser();
    });
  }
  confirmUser() {
    // this.registerService.confirmUser( this.token, this.tokenId).then( res=>console.log(res));
  }
  static {
    this.ɵfac = function EmailConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EmailConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_0__.RegisterService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailConfirmComponent,
      selectors: [["app-email-confirm"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      consts: [[1, "confirm-email-container"], [1, "email-confirm-text"]],
      template: function EmailConfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your email has been confirmed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".confirm-email-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.confirm-email-container[_ngcontent-%COMP%]   .email-confirm-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  height: 30%;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvZW1haWwtY29uZmlybS9lbWFpbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURSIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbmZpcm0tZW1haWwtY29udGFpbmVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTsgIFxyXG5cclxuICAgICAgLmVtYWlsLWNvbmZpcm0tdGV4dHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2986:
/*!******************************************************!*\
  !*** ./src/app/views/email/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login/login.service */ 381);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);














function LoginComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage());
  }
}
class LoginComponent {
  // loginDialogRef = inject(MatDialogRef<LoginComponent>);
  constructor() {
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]);
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
    this.hide = true;
    this.userDetails = null;
    this.loginService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService);
    this.registerDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  }
  ngOnInit() {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  login() {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loginCredentials = {
        email: _this.email.value,
        password: _this.password.value
      };
      try {
        const userSessionDetails = yield _this.loginService.loginEmailPassword(loginCredentials);
        _this.userDetails = userSessionDetails.user;
        _this.router.navigate(['/main']);
        // this.closeLoginDialog();
      } catch (error) {}
    })();
  }
  register() {
    // this.loginDialogRef.close();
    this.router.navigate(['/register']);
    // let registerRef = this.registerDialog.open(RegisterComponent);
    // registerRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     console.log(result);
    //   }
    // });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 7,
      consts: [[1, "login-container"], [1, "app-name", "has-gradient-text"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], ["matInput", "", "required", "", 3, "formControl", "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "standard-button-height", 3, "click"], ["id", "register-text"], ["href", "javascript:void()", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login to start saving your life events");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Enter your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_Conditional_9_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 2)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " or...do you need to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_21_listener() {
            return ctx.register();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "register?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.email.invalid ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.password)("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  align-items: stretch;\n  width: 300px;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Yatra One\", sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.login-container[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.login-container[_ngcontent-%COMP%]   #register-text[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHJvdy1nYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmFwcC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGFzLWdyYWRpZW50LXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzEzZjdmNCwgIzJhZjU5OCk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnN0YW5kYXJkLWJ1dHRvbi1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI3JlZ2lzdGVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5166:
/*!************************************************************!*\
  !*** ./src/app/views/email/register/register.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/register/register.service */ 7309);













function RegisterComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("email"));
  }
}
function RegisterComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("password"));
  }
}
function RegisterComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("confirmPassword"));
  }
}
function RegisterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_Conditional_3_Conditional_6_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 2)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.hide = !ctx_r1.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterComponent_Conditional_3_Conditional_14_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 2)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.hide = !ctx_r1.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RegisterComponent_Conditional_3_Conditional_22_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.email.invalid ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.password)("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.password.invalid ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.confirmPassword)("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.confirmPassword.invalid ? 22 : -1);
  }
}
function RegisterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Registration was successful for ", ctx_r1.userDetails.user.email, ". Please check your email for verification. ");
  }
}
class RegisterComponent {
  constructor() {
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]);
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
    this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
    this.userDetails = null;
    this.hide = true;
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService);
    this.registerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService);
    this.registrationSuccess = false;
  }
  ngOnInit() {
    this.password.valueChanges.subscribe(() => {
      this.confirmPassword.updateValueAndValidity();
    });
  }
  static matchValues(matchTo // name of the control to match to
  ) {
    return control => {
      return !!control.parent && !!control.parent.value && control.value === control.parent.controls[matchTo].value ? null : {
        isMatching: false
      };
    };
  }
  getErrorMessage(type) {
    if (type == 'email') {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    } else if (type == 'password') {
      if (this.password.hasError('required')) {
        return 'Password must be entered';
      }
    } else if (type == 'confirmPassword') {
      if (this.confirmPassword.hasError('required')) {
        return 'Please type your password again to confirm';
      } else {
        return 'Passwords do not match';
      }
    }
    return 'You must enter a value';
  }
  register() {
    var _this = this;
    return (0,C_Users_61452_OneDrive_Documents_Projects_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('valid registration for', _this.email.value, '-', _this.password.value);
      _this.userDetails = yield _this.registerService.registerUser(_this.email.value, _this.confirmPassword.value);
      if (_this.userDetails.user) {
        _this.registrationSuccess = true;
      }
    })();
  }
  closeLoginDialog() {
    this.registerDialogRef.close();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 1,
      consts: [[1, "register-container"], [1, "app-name", "has-gradient-text"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], ["matInput", "", "required", "", 3, "formControl", "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "standard-button-height", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_Conditional_3_Template, 25, 14)(4, RegisterComponent_Conditional_4_Template, 2, 1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.registrationSuccess ? 3 : 4);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 300px;\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Yatra One\", sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.register-container[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.register-container[_ngcontent-%COMP%]   #register-text[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBR0U7RUFDRSxpQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmFwcC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGFzLWdyYWRpZW50LXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzEzZjdmNCwgIzJhZjU5OCk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnN0YW5kYXJkLWJ1dHRvbi1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgI3JlZ2lzdGVyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9654:
/*!************************************************************************!*\
  !*** ./src/app/views/email/reset-password/reset-password.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);







class ResetPasswordComponent {
  constructor() {
    this.hide = true;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ResetPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 8,
      consts: [[1, "reset-password-container"], [1, "card", "reset-password-form"], ["appearance", "fill"], ["matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "standard-button-height"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_6_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_13_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm my password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix],
      styles: [".reset-password-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  background-color: #fff;\n  padding: 2em;\n  border-radius: 2em;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQVE7RUFDSSxZQUFBO0FBRVoiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtcGFzc3dvcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5yZXNldC1wYXNzd29yZC1mb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcblxyXG4gICAgICAgIC5zdGFuZGFyZC1idXR0b24taGVpZ2h0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbiAgXHJcbiAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5333:
/*!********************************************************!*\
  !*** ./src/app/views/main-view/main-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewComponent: () => (/* binding */ MainViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-task/add-task.component */ 5449);
/* harmony import */ var src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/idea-type.enum */ 6730);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utility/utility.service */ 7760);












function MainViewComponent_For_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ɵ$index_29_r5 = ctx.$index;
    const container_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("tasks ", container_r2, "-tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("id", "", container_r2, "-tasks-", ɵ$index_29_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
  }
}
function MainViewComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainViewComponent_For_8_Template_button_click_4_listener() {
      const container_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.openAddTask(container_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function MainViewComponent_For_8_Template_div_cdkDropListDropped_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](9, MainViewComponent_For_8_For_10_Template, 2, 7, "div", 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const container_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](container_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkDropListData", ctx_r2.containerRefs[container_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r2.containerRefs[container_r2]);
  }
}
class MainViewComponent {
  constructor() {
    this.containers = ['ideas', 'goals', 'objectives', 'achievements'];
    this.ideas = [];
    this.goals = [];
    this.objectives = [];
    this.achievements = [];
    this.containerRefs = {
      ideas: this.ideas,
      goals: this.goals,
      objectives: this.objectives,
      achievements: this.achievements
    };
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService);
    this.addTaskDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog);
  }
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.resetContainerData();
    this.taskService.getTasks().then(data => {
      data.forEach(element => {
        if (element) {
          const containerName = src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService.getEnumKeyByValue(src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_1__.IdeaType, element.type);
          this.containerRefs[containerName].push(element);
        }
      });
    });
  }
  resetContainerData() {
    this.containerRefs = {
      ideas: [],
      goals: [],
      objectives: [],
      achievements: []
    };
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const data = event.container.data[event.currentIndex];
      this.taskService.updateTaskContainer({
        id: data.id,
        type: parseInt(event.container.id.substring(14))
      }).then(updated => {
        //Don't need to do this
        // if (updated) {
        //   this.getTasks();
        // }
      });
    }
  }
  updateUserDetails(userDetails) {}
  openAddTask(type) {
    console.log(src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_1__.IdeaType[type]);
    const dialogRef = this.addTaskDialog.open(_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__.AddTaskComponent, {
      data: {
        taskType: src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_1__.IdeaType[type]
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    });
  }
  static {
    this.ɵfac = function MainViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MainViewComponent,
      selectors: [["app-main-view"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 0,
      consts: [["todoList", "cdkDropList"], [1, "root"], [1, "board"], [1, "board-bar"], [1, "board-name"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["cdkDrag", "", 1, "board-column"], [1, "title-container", "flex-row-space-between"], [1, "column-title"], [1, "add-task-button", 3, "click"], ["cdkDropList", "", 1, "tasks-container", "example-list", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 3, "class", "id"], ["cdkDrag", "", 3, "id"]],
      template: function MainViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Board Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](7, MainViewComponent_For_8_Template, 11, 2, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.containers);
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
      styles: [".root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0;\n}\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.5);\n  padding: 8px 30px;\n}\n.board[_ngcontent-%COMP%]   .board-name[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  row-gap: 10px;\n  max-height: 300px;\n  overflow-y: hidden;\n  min-width: 300px;\n  margin: 50px;\n  padding: 25px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.4);\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .add-task-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-family: \"Yatra One\", sans-serif;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n\n.tasks-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.tasks-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(.ideas-tasks) {\n  color: #fff;\n}\n.tasks-container[_ngcontent-%COMP%]   .goals-tasks[_ngcontent-%COMP%] {\n  background-color: rgb(162, 178, 226);\n}\n.tasks-container[_ngcontent-%COMP%]   .objectives-tasks[_ngcontent-%COMP%] {\n  background-color: rgb(252, 172, 0);\n}\n.tasks-container[_ngcontent-%COMP%]   .achievements-tasks[_ngcontent-%COMP%] {\n  background-color: rgb(97, 192, 19);\n}\n\n.tasks[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px 12px;\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  box-shadow: 0 8px 6px -6px rgb(54, 52, 52); \n\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: bisque;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.tasks-container.cdk-drop-list-dragging[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQUFGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDRTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRU47QUFBTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUVSO0FBRFE7RUFDRSxjQUFBO0FBR1Y7QUFBUTtFQUNFLGVBQUE7QUFFVjtBQUNRO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNWOztBQU1BO0VBQ0UsWUFBQTtBQUhGO0FBS0U7RUFFRSxXQUFBO0FBSko7QUFNRTtFQUNFLG9DQUFBO0FBSko7QUFPRTtFQUNFLGtDQUFBO0FBTEo7QUFRRTtFQUNFLGtDQUFBO0FBTko7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQ0FBQSxFQUFBLG1EQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFFQSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtBQVRGOztBQVlBO0VBQ0Usc0RBQUE7QUFURjs7QUFXQTtFQUNFLHNEQUFBO0FBUkYiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG5cclxuICBtaW4td2lkdGg6IDA7XHJcbiAgbWluLWhlaWdodDogMDtcclxuICAuYm9hcmQtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoZ3JleSwgNTAlKTtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xyXG4gIH1cclxuICAuYm9hcmQtbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuYm9hcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC5ib2FyZC1jb2x1bW5zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgLmJvYXJkLWNvbHVtbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAwOyAvL2ZvcmNlIGNvbHVtbnMgdG8gYmUgc2FtZSBzaXplXHJcbiAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCA0MCUpO1xyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YXNrcy1jb250YWluZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgOm5vdCguaWRlYXMtdGFza3MpIHtcclxuICAgIC8vYWxsIGV4Y2VwdCBpZGVhcyB0YWJsZXNcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuZ29hbHMtdGFza3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTc4LCAyMjYpO1xyXG4gIH1cclxuXHJcbiAgLm9iamVjdGl2ZXMtdGFza3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTcyLCAwKTtcclxuICB9XHJcblxyXG4gIC5hY2hpZXZlbWVudHMtdGFza3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxOTIsIDE5KTtcclxuICB9XHJcbn1cclxuXHJcbi50YXNrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDU0LCA1MiwgNTIpOyAvKiBPcGVyYSAxMC41LCBJRSA5LCBGaXJlZm94IDQrLCBDaHJvbWUgNissIGlPUyA1ICovXHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLnRhc2tzLWNvbnRhaW5lci5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50YXNrczpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  SUPABASE_URL: 'https://vcnvdgoqpadvxyglbjsx.supabase.co',
  //anon-public key
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbnZkZ29xcGFkdnh5Z2xianN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MTU5OTQsImV4cCI6MjA0NTk5MTk5NH0.Ok5SbeonhQpPggxeHd_CM0dn0GbS2YQr8eb-rQOa9nM',
  SUPABASE_SECRET_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbnZkZ29xcGFkdnh5Z2xianN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDQxNTk5NCwiZXhwIjoyMDQ1OTkxOTk0fQ.qT9sBawOJY1bq56_K6fZ-k5dUC5piVkvvS1wmqpX6mo',
  DB_CONNECTION_STRING: 'postgresql://postgres.vcnvdgoqpadvxyglbjsx:*d7xiT7B*65qp*S@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 289);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map