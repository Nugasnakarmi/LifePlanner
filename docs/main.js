"use strict";
(self["webpackChunkLifePlanner"] = self["webpackChunkLifePlanner"] || []).push([["main"],{

/***/ 49
/*!************************************************************!*\
  !*** ./src/app/views/boards-view/boards-view.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardsViewComponent: () => (/* binding */ BoardsViewComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_data_board_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/board-templates */ 9053);
/* harmony import */ var src_app_services_board_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/board/board.service */ 7453);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 5326);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 423);


















const _forTrack0 = ($index, $item) => $item.id;
function BoardsViewComponent_Conditional_14_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_14_Conditional_12_For_2_Template_div_click_0_listener() {
      const template_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createBoardFromTemplate(template_r4));
    })("keydown.enter", function BoardsViewComponent_Conditional_14_Conditional_12_For_2_Template_div_keydown_enter_0_listener() {
      const template_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createBoardFromTemplate(template_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "healing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 23)(9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", "Create board from template: " + template_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](template_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](template_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", template_r4.tasks.length, " tasks pre-loaded");
  }
}
function BoardsViewComponent_Conditional_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, BoardsViewComponent_Conditional_14_Conditional_12_For_2_Template, 13, 4, "div", 18, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.templates);
  }
}
function BoardsViewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 12)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Board name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function BoardsViewComponent_Conditional_14_Template_input_keydown_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createBoard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createBoard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 15)(8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleTemplates());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](12, BoardsViewComponent_Conditional_14_Conditional_12_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.newBoardNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.newBoardNameControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.showTemplates ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.showTemplates ? "Hide Templates" : "Use a Template", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.showTemplates ? 12 : -1);
  }
}
function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-form-field", 31)(2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template_input_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.saveEditBoard(board_r6, $event));
    })("keydown.escape", function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template_input_keydown_escape_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.cancelEditBoard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 33)(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.saveEditBoard(board_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.cancelEditBoard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.editBoardNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.editBoardNameControl.invalid);
  }
}
function BoardsViewComponent_Conditional_15_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](board_r6.description);
  }
}
function BoardsViewComponent_Conditional_15_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](2, BoardsViewComponent_Conditional_15_For_2_Conditional_2_Conditional_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 38)(4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Conditional_2_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.startEditBoard(board_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Conditional_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteBoard(board_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](board_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](board_r6.description ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", "Rename board " + board_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", "Delete board " + board_r6.name);
  }
}
function BoardsViewComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Conditional_15_For_2_Template_div_click_0_listener() {
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.editingBoardId !== board_r6.id && ctx_r1.selectBoard(board_r6));
    })("keydown.enter", function BoardsViewComponent_Conditional_15_For_2_Template_div_keydown_enter_0_listener() {
      const board_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.editingBoardId === board_r6.id ? null : ctx_r1.selectBoard(board_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](1, BoardsViewComponent_Conditional_15_For_2_Conditional_1_Template, 10, 2, "div", 29)(2, BoardsViewComponent_Conditional_15_For_2_Conditional_2_Template, 10, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const board_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.editingBoardId === board_r6.id ? 1 : 2);
  }
}
function BoardsViewComponent_Conditional_15_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No boards yet. Create one to get started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function BoardsViewComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](1, BoardsViewComponent_Conditional_15_For_2_Template, 3, 1, "div", 26, _forTrack0, false, BoardsViewComponent_Conditional_15_ForEmpty_3_Template, 2, 0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx);
  }
}
class BoardsViewComponent {
  constructor() {
    this.boardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_board_board_service__WEBPACK_IMPORTED_MODULE_10__.BoardService);
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_11__.TaskService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.showNewBoardForm = false;
    this.showTemplates = false;
    this.editingBoardId = null;
    this.templates = src_app_data_board_templates__WEBPACK_IMPORTED_MODULE_9__.BOARD_TEMPLATES;
    this.newBoardNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]);
    this.editBoardNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]);
  }
  ngOnInit() {
    this.taskService.landingPageInitialized();
    this.boards$ = this.boardService.boards$;
  }
  selectBoard(board) {
    this.boardService.selectBoard(board);
    this.router.navigate(['/main']);
  }
  toggleNewBoardForm() {
    this.showNewBoardForm = !this.showNewBoardForm;
    if (!this.showNewBoardForm) {
      this.newBoardNameControl.reset();
      this.showTemplates = false;
    }
  }
  toggleTemplates() {
    this.showTemplates = !this.showTemplates;
  }
  createBoard() {
    const name = this.newBoardNameControl.value?.trim();
    if (name && this.newBoardNameControl.valid) {
      const board = {
        name,
        description: ''
      };
      this.boardService.createBoard(board);
      this.newBoardNameControl.reset();
      this.showNewBoardForm = false;
      this.showTemplates = false;
    }
  }
  createBoardFromTemplate(template) {
    this.boardService.createBoardFromTemplate(template);
    this.showNewBoardForm = false;
    this.showTemplates = false;
  }
  startEditBoard(board, event) {
    event.stopPropagation();
    this.editingBoardId = board.id ?? null;
    this.editBoardNameControl.setValue(board.name);
  }
  saveEditBoard(board, event) {
    event.stopPropagation();
    const name = this.editBoardNameControl.value?.trim();
    if (name && this.editBoardNameControl.valid) {
      this.boardService.nameEditFinished({
        ...board,
        name
      });
    }
    this.editingBoardId = null;
  }
  cancelEditBoard(event) {
    event.stopPropagation();
    this.editingBoardId = null;
  }
  deleteBoard(board, event) {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation();
      if (!board.id) return;
      const tasks = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.taskService.tasks$);
      const boardTasks = tasks.filter(t => t.board_id === board.id);
      if (boardTasks.length > 0) {
        const confirmed = window.confirm(`"${board.name}" has ${boardTasks.length} task(s). Deleting this board will also delete all its tasks. Are you sure?`);
        if (!confirmed) return;
      }
      _this.boardService.deleteBoard(board.id);
    })();
  }
  static {
    this.ɵfac = function BoardsViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoardsViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: BoardsViewComponent,
      selectors: [["app-boards-view"]],
      decls: 17,
      vars: 6,
      consts: [["aria-hidden", "true", 1, "boards-bg"], [1, "boards-bg-grid"], [1, "boards-bg-accent"], [1, "boards-bg-diamond", "boards-bg-diamond--1"], [1, "boards-bg-diamond", "boards-bg-diamond--2"], [1, "boards-bg-diamond", "boards-bg-diamond--3"], [1, "boards-view-container"], [1, "boards-header"], [1, "boards-title"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "boards-grid"], [1, "new-board-form"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter board name", 3, "keydown.enter", "formControl"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "template-section"], [1, "template-toggle-btn", 3, "click"], [1, "template-grid"], ["tabindex", "0", 1, "template-card"], ["tabindex", "0", 1, "template-card", 3, "click", "keydown.enter"], [1, "template-card-icon"], [1, "template-card-name"], [1, "template-card-description"], [1, "template-card-footer"], [1, "template-task-count"], [1, "template-arrow"], ["tabindex", "0", 1, "board-card"], [1, "no-boards-message"], ["tabindex", "0", 1, "board-card", 3, "click", "keydown.enter"], [1, "board-card-edit"], [1, "board-card-edit", 3, "click"], ["appearance", "outline", 1, "edit-name-field"], ["matInput", "", "placeholder", "Board name", "autofocus", "", 3, "keydown.enter", "keydown.escape", "formControl"], [1, "edit-actions"], ["mat-icon-button", "", "color", "primary", "title", "Save", "aria-label", "Save board name", 3, "click", "disabled"], ["mat-icon-button", "", "title", "Cancel", "aria-label", "Cancel editing", 3, "click"], [1, "board-card-name"], [1, "board-card-description"], [1, "board-card-actions"], ["mat-icon-button", "", "title", "Rename board", 1, "card-action-btn", 3, "click"], ["mat-icon-button", "", "title", "Delete board", 1, "card-action-btn", "card-action-btn--delete", 3, "click"]],
      template: function BoardsViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Your Boards");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BoardsViewComponent_Template_button_click_10_listener() {
            return ctx.toggleNewBoardForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](14, BoardsViewComponent_Conditional_14_Template, 13, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](15, BoardsViewComponent_Conditional_15_Template, 4, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.showNewBoardForm ? "close" : "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.showNewBoardForm ? "Cancel" : "New Board", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.showNewBoardForm ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 4, ctx.boards$)) ? 15 : -1, tmp_3_0);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #010014;\n  position: relative;\n  overflow: hidden;\n}\n\n.boards-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.boards-bg[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -15%;\n  right: -10%;\n  width: 600px;\n  height: 600px;\n  background: radial-gradient(circle, rgba(249, 208, 122, 0.12) 0%, rgba(249, 208, 122, 0.03) 50%, transparent 70%);\n  border-radius: 50%;\n}\n.boards-bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -10%;\n  left: -5%;\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(circle, rgba(249, 208, 122, 0.08) 0%, rgba(249, 208, 122, 0.02) 50%, transparent 70%);\n  border-radius: 50%;\n}\n\n.boards-bg-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: linear-gradient(rgba(249, 208, 122, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 208, 122, 0.03) 1px, transparent 1px);\n  background-size: 60px 60px;\n}\n\n.boards-bg-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, rgba(249, 208, 122, 0.15), transparent);\n}\n\n.boards-bg-diamond[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border: 1px solid rgba(249, 208, 122, 0.06);\n  transform: rotate(45deg);\n}\n.boards-bg-diamond--1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 5%;\n}\n.boards-bg-diamond--2[_ngcontent-%COMP%] {\n  bottom: 15%;\n  right: 8%;\n  width: 150px;\n  height: 150px;\n}\n.boards-bg-diamond--3[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 20%;\n  width: 100px;\n  height: 100px;\n  border-color: rgba(249, 208, 122, 0.04);\n}\n\n.boards-view-container[_ngcontent-%COMP%] {\n  padding: 40px;\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 600px) {\n  .boards-view-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n\n.boards-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\n@media (max-width: 600px) {\n  .boards-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.boards-title[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.boards-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: linear-gradient(90deg, #F9D07A, rgba(249, 208, 122, 0.3));\n  border-radius: 2px;\n  margin-top: 8px;\n}\n@media (max-width: 600px) {\n  .boards-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.new-board-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: rgba(249, 208, 122, 0.05);\n  border-radius: 16px;\n  border: 1px solid rgba(249, 208, 122, 0.1);\n}\n.new-board-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .new-board-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .new-board-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.boards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .boards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n\n.board-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(249, 208, 122, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n}\n.board-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: linear-gradient(90deg, #F9D07A, rgba(249, 208, 122, 0.2));\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.board-card[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 208, 122, 0.08);\n  border-color: rgba(249, 208, 122, 0.25);\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(1, 0, 20, 0.4), 0 4px 12px rgba(249, 208, 122, 0.08);\n}\n.board-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.board-card[_ngcontent-%COMP%]:hover   .board-card-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.board-card[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #F9D07A;\n  outline-offset: 2px;\n}\n@media (max-width: 600px) {\n  .board-card[_ngcontent-%COMP%] {\n    min-height: 90px;\n    padding: 18px;\n    border-radius: 12px;\n  }\n  .board-card[_ngcontent-%COMP%]   .board-card-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n\n.board-card-name[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.01em;\n}\n\n.board-card-description[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.55);\n  margin-top: 8px;\n}\n\n.board-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n  margin-top: 12px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.board-card[_ngcontent-%COMP%]:focus-within   .board-card-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.card-action-btn[_ngcontent-%COMP%] {\n  color: rgba(249, 208, 122, 0.7);\n}\n.card-action-btn[_ngcontent-%COMP%]:hover {\n  color: #F9D07A;\n  background: rgba(249, 208, 122, 0.1);\n}\n.card-action-btn--delete[_ngcontent-%COMP%]:hover {\n  color: #ff6b6b;\n  background: rgba(255, 107, 107, 0.15);\n}\n\n.board-card-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.board-card-edit[_ngcontent-%COMP%]   .edit-name-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.board-card-edit[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n}\n\n.no-boards-message[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 16px;\n  text-align: center;\n  padding: 40px 0;\n}\n\n.template-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.template-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  border: 1px dashed rgba(249, 208, 122, 0.3);\n  border-radius: 8px;\n  color: rgba(249, 208, 122, 0.8);\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px 16px;\n  transition: all 0.2s;\n}\n.template-toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.template-toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #F9D07A;\n  color: #F9D07A;\n  background: rgba(249, 208, 122, 0.05);\n}\n\n.template-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  margin-top: 16px;\n}\n\n.template-card[_ngcontent-%COMP%] {\n  background: rgba(249, 208, 122, 0.05);\n  border: 1px solid rgba(249, 208, 122, 0.2);\n  border-radius: 12px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 208, 122, 0.1);\n  border-color: #F9D07A;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(249, 208, 122, 0.12);\n}\n.template-card[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #F9D07A;\n  outline-offset: 2px;\n}\n\n.template-card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #F9D07A;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n\n.template-card-name[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n}\n\n.template-card-description[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.5;\n}\n\n.template-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 8px;\n  border-top: 1px solid rgba(249, 208, 122, 0.1);\n}\n\n.template-task-count[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  color: rgba(249, 208, 122, 0.6);\n  font-weight: 600;\n}\n\n.template-arrow[_ngcontent-%COMP%] {\n  color: rgba(249, 208, 122, 0.5);\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s, color 0.2s;\n}\n.template-card[_ngcontent-%COMP%]:hover   .template-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: #F9D07A;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYm9hcmRzLXZpZXcvYm9hcmRzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlIQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlIQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlKQUNFO0VBRUYsMEJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUZBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0FBTkY7QUFRRTtFQUNFLFFBQUE7RUFDQSxRQUFBO0FBTko7QUFTRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFQSjtBQVVFO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBVEY7QUFXRTtFQVBGO0lBUUksYUFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQU5GO0lBT0ksbUJBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxRUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVBKO0FBVUU7RUFsQkY7SUFtQkksZUFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBUEY7QUFTRTtFQUNFLE9BQUE7QUFQSjtBQVVFO0VBZEY7SUFlSSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsUUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQVBGO0VBU0U7SUFDRSxXQUFBO0VBUEo7QUFDRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFSRjtBQVVFO0VBTEY7SUFNSSwwQkFBQTtJQUNBLFNBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0UscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxRUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQVBKO0FBVUU7RUFDRSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpRkFBQTtBQVJKO0FBVUk7RUFDRSxVQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7QUFUTjtBQWFFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0U7RUE5Q0Y7SUErQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUFYRjtFQWFFO0lBQ0UsVUFBQTtFQVhKO0FBQ0Y7O0FBZUE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVpGOztBQWVBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUFaRjs7QUFlQTtFQUNFLFVBQUE7QUFaRjs7QUFlQTtFQUNFLCtCQUFBO0FBWkY7QUFjRTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtBQVpKO0FBZ0JJO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0FBZE47O0FBbUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFoQkY7QUFrQkU7RUFDRSxXQUFBO0FBaEJKO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQWpCSjs7QUFxQkE7RUFDRSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFzQkE7RUFDRSxtQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbkJGO0FBcUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJKO0FBc0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUFwQko7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBckJGOztBQXdCQTtFQUNFLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBckJGO0FBdUJFO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0RBQUE7QUFyQko7QUF3QkU7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBdEJKOztBQTJCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Qko7O0FBNEJBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBekJGOztBQTRCQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUF6QkY7O0FBNEJBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBekJGO0FBMkJFO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBekJKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMTAwMTQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gQWVzdGhldGljIGJhY2tncm91bmQgd2l0aCBnZW9tZXRyaWMgZGVjb3JhdGlvbnNcbi5ib2FyZHMtYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBMYXJnZSBnb2xkZW4gZ3JhZGllbnQgb3JiIC0gdG9wIHJpZ2h0XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE1JTtcbiAgICByaWdodDogLTEwJTtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMTIpIDAlLCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDMpIDUwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAvLyBTdWJ0bGUgZ29sZGVuIG9yYiAtIGJvdHRvbSBsZWZ0XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTAlO1xuICAgIGxlZnQ6IC01JTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDgpIDAlLCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDIpIDUwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLmJvYXJkcy1iZy1ncmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNDksIDIwOCwgMTIyLCAwLjAzKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDMpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG59XG5cbi5ib2FyZHMtYmctYWNjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMTUpLCB0cmFuc3BhcmVudCk7XG59XG5cbi5ib2FyZHMtYmctZGlhbW9uZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDYpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cbiAgJi0tMSB7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogNSU7XG4gIH1cblxuICAmLS0yIHtcbiAgICBib3R0b206IDE1JTtcbiAgICByaWdodDogOCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAmLS0zIHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMjAlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjA0KTtcbiAgfVxufVxuXG4uYm9hcmRzLXZpZXctY29udGFpbmVyIHtcbiAgcGFkZGluZzogNDBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuXG4uYm9hcmRzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5ib2FyZHMtdGl0bGUge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0Y5RDA3QSwgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjMpKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5cbi5uZXctYm9hcmQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjEpO1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLmJvYXJkcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjYwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNHB4O1xuICB9XG59XG5cbi5ib2FyZC1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGOUQwN0EsIHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC4yKSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjI1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgxLCAwLCAyMCwgMC40KSwgMCA0cHggMTJweCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDgpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmJvYXJkLWNhcmQtYWN0aW9ucyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjRjlEMDdBO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgIC5ib2FyZC1jYXJkLWFjdGlvbnMge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLmJvYXJkLWNhcmQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG59XG5cbi5ib2FyZC1jYXJkLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYm9hcmQtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbn1cblxuLmJvYXJkLWNhcmQ6Zm9jdXMtd2l0aGluIC5ib2FyZC1jYXJkLWFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZC1hY3Rpb24tYnRuIHtcbiAgY29sb3I6IHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC43KTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI0Y5RDA3QTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMSk7XG4gIH1cblxuICAmLS1kZWxldGUge1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZjZiNmI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMTUpO1xuICAgIH1cbiAgfVxufVxuXG4uYm9hcmQtY2FyZC1lZGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5lZGl0LW5hbWUtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmVkaXQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5cbi5uby1ib2FyZHMtbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbi8vIFRlbXBsYXRlIHNlY3Rpb25cbi50ZW1wbGF0ZS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnRlbXBsYXRlLXRvZ2dsZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC44KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0Y5RDA3QTtcbiAgICBjb2xvcjogI0Y5RDA3QTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDUpO1xuICB9XG59XG5cbi50ZW1wbGF0ZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZW1wbGF0ZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjEpO1xuICAgIGJvcmRlci1jb2xvcjogI0Y5RDA3QTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMTIpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICNGOUQwN0E7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxufVxuXG4udGVtcGxhdGUtY2FyZC1pY29uIHtcbiAgbWF0LWljb24ge1xuICAgIGNvbG9yOiAjRjlEMDdBO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cbn1cblxuLnRlbXBsYXRlLWNhcmQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZW1wbGF0ZS1jYXJkLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4udGVtcGxhdGUtY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMSk7XG59XG5cbi50ZW1wbGF0ZS10YXNrLWNvdW50IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjYpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGVtcGxhdGUtYXJyb3cge1xuICBjb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBjb2xvciAwLjJzO1xuXG4gIC50ZW1wbGF0ZS1jYXJkOmhvdmVyICYge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgIGNvbG9yOiAjRjlEMDdBO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/supabase/supabase.service */ 867);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);












function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "div", 3)(2, "button", 7)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-menu", null, 0)(11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const userMenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", userMenu_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.userEmail);
  }
}
class AppComponent {
  constructor() {
    this.title = 'LifePlanner';
    this.userEmail = null;
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService);
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const session = yield _this.supabaseService.getSession();
      if (session?.user?.email) {
        _this.userEmail = session.user.email;
      }
      _this.supabaseService.supabase.auth.onAuthStateChange((_event, session) => {
        _this.userEmail = session?.user?.email ?? null;
      });
    })();
  }
  logout() {
    var _this2 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.supabaseService.signOut();
      _this2.userEmail = null;
      _this2.router.navigate(['/']);
    })();
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 1,
      consts: [["userMenu", "matMenu"], [1, "navbar", "has-background-dark"], [1, "navbar-brand"], [1, "navbar-item"], [1, "app-name", "has-gradient-text", 3, "click"], ["class", "navbar-end", 4, "ngIf"], [1, "navbar-end"], ["mat-button", "", 1, "user-menu-button", 3, "matMenuTriggerFor"], [1, "user-email"], ["mat-menu-item", "", "disabled", "", 1, "menu-email-header"], ["mat-menu-item", "", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_h1_click_3_listener() {
            return ctx.navigateToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " LifePlanner ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_div_5_Template, 18, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userEmail);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  right: 4em;\n  top: 1em;\n  color: #fff;\n  cursor: pointer;\n}\n\n.app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Yatra One\", sans-serif;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#F9D07A, #d4a94e);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.navbar-end[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n.user-menu-button[_ngcontent-%COMP%] {\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.menu-email-header[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 12px;\n  padding: 8px 16px;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLy9mb3IgbG9naW5cbi5sb2dpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0ZW07XG4gIHRvcDogMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLW5hbWUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGFzLWdyYWRpZW50LXRleHQge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjRjlEMDdBLCAjZDRhOTRlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1lbmQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXItbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi51c2VyLWVtYWlsIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZW51LWVtYWlsLWhlYWRlciB7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 289
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _store_task_task_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/task/task.reducer */ 6773);
/* harmony import */ var _store_task_task_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/task/task.effects */ 2399);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 1925);
/* harmony import */ var _store_board_board_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/board/board.effects */ 979);
/* harmony import */ var _store_board_board_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/board/board.reducer */ 4193);













// const composeEnhancers = composeWithDevTools({
//   realtime: true,
//   name: 'Your Instance Name',
//   hostname: 'localhost',
//   port: 1024, // the port your remotedev server is running at
// });
// const store = configureStore(
//   yourReducer,
//   composeEnhancers(applyMiddleware(/* put your middlewares here */))
// );
const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_5__.routes), (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.provideClientHydration)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)(), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)(),
  // required animations providers
  (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.provideToastr)({
    positionClass: 'toast-top-right',
    // Position of the toast
    closeButton: true,
    enableHtml: true,
    tapToDismiss: true,
    // Dismiss toast on click
    preventDuplicates: true
  }), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.provideStore)(), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.provideState)({
    name: 'idea-task',
    reducer: _store_task_task_reducer__WEBPACK_IMPORTED_MODULE_8__.tasksReducer
  }), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.provideState)({
    name: 'board',
    reducer: _store_board_board_reducer__WEBPACK_IMPORTED_MODULE_12__.boardsReducer
  }),
  // Assuming you have a board reducer
  (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.provideEffects)([_store_task_task_effects__WEBPACK_IMPORTED_MODULE_9__.TaskEffects, _store_board_board_effects__WEBPACK_IMPORTED_MODULE_11__.BoardEffects]), (0,_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.provideStoreDevtools)({
    maxAge: 25
  }) // Enable Redux DevTools
  ]
};

/***/ },

/***/ 381
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);





class LoginService {
  constructor() {
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService);
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService);
  }
  loginEmailPassword(loginCredentials) {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 867
/*!*******************************************************!*\
  !*** ./src/app/services/supabase/supabase.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseService: () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ 2014);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);




class SupabaseService {
  constructor() {
    this.supabaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SUPABASE_URL;
    const supabaseKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SUPABASE_KEY;
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(this.supabaseUrl, supabaseKey);
  }
  getUser() {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userResponse = yield _this.supabase.auth.getUser();
      return userResponse.data.user;
    })();
  }
  getSession() {
    var _this2 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data
      } = yield _this2.supabase.auth.getSession();
      return data.session;
    })();
  }
  signOut() {
    var _this3 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.supabase.auth.signOut();
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

/***/ },

/***/ 979
/*!**********************************************!*\
  !*** ./src/app/store/board/board.effects.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardEffects: () => (/* binding */ BoardEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var src_app_services_board_board_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/board/board.api.service */ 9439);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _board_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board.actions */ 8342);
/* harmony import */ var _task_task_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task/task.actions */ 5506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3255);









class BoardEffects {
  constructor(actions$) {
    this.actions$ = actions$;
    this.boardAPIService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_board_board_api_service__WEBPACK_IMPORTED_MODULE_2__.BoardAPIService);
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
    this.addBoard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_board_actions__WEBPACK_IMPORTED_MODULE_4__.addBoard), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(({
      board
    }) => this.boardAPIService.addBoard(board).then(() => this.boardAPIService.getBoards().then(fetchedBoards => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsSuccess({
      boards: fetchedBoards ?? []
    }))).catch(error => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsFailure({
      error
    })))));
    this.loadBoards$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_task_task_actions__WEBPACK_IMPORTED_MODULE_5__.landingPageInitialized), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => this.boardAPIService.getBoards().then(fetchedBoards => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsSuccess({
      boards: fetchedBoards
    })).catch(error => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsFailure({
      error
    })))));
    this.boardNameEdited$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_board_actions__WEBPACK_IMPORTED_MODULE_4__.boardNameEdited), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(({
      board
    }) => this.boardAPIService.editBoard(board).then(board => _board_actions__WEBPACK_IMPORTED_MODULE_4__.boardEditedSuccessfully({
      board
    })).catch(error => _board_actions__WEBPACK_IMPORTED_MODULE_4__.boardEditFailed({
      error
    })))));
    this.deleteBoard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_board_actions__WEBPACK_IMPORTED_MODULE_4__.deleteBoard), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(({
      boardId
    }) => this.boardAPIService.deleteBoard(boardId).then(success => success ? _board_actions__WEBPACK_IMPORTED_MODULE_4__.deleteBoardSuccess({
      boardId
    }) : _board_actions__WEBPACK_IMPORTED_MODULE_4__.deleteBoardFailure({
      error: 'Failed to delete board'
    })).catch(error => _board_actions__WEBPACK_IMPORTED_MODULE_4__.deleteBoardFailure({
      error
    })))));
    this.createBoardFromTemplate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_board_actions__WEBPACK_IMPORTED_MODULE_4__.createBoardFromTemplate), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(({
      template
    }) => this.boardAPIService.addBoardFromTemplate(template).then(() => this.boardAPIService.getBoards()).then(fetchedBoards => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsSuccess({
      boards: fetchedBoards ?? []
    })).catch(error => _board_actions__WEBPACK_IMPORTED_MODULE_4__.loadBoardsFailure({
      error
    })))));
  }
  static {
    this.ɵfac = function BoardEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BoardEffects,
      factory: BoardEffects.ɵfac
    });
  }
}

/***/ },

/***/ 1077
/*!**********************************************!*\
  !*** ./src/app/views/task/task.component.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskComponent: () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/task/task.api.service */ 3551);
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-task/add-task.component */ 5449);
/* harmony import */ var src_app_enums_task_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/enums/task-mode.enum */ 6277);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);











class TaskComponent {
  constructor() {
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_7__.TaskService);
    this.taskAPIService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_4__.TaskAPIService);
    this.taskUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.addTaskDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog);
  }
  deleteTask(taskId) {
    this.taskService.taskDeletionInitiated(taskId);
  }
  onEditTask(task) {
    const dialogRef = this.addTaskDialog.open(_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__.AddTaskComponent, {
      data: {
        taskType: null,
        mode: src_app_enums_task_mode_enum__WEBPACK_IMPORTED_MODULE_6__.TaskMode.Edit,
        task: task
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.taskUpdated.emit();
    });
  }
  static {
    this.ɵfac = function TaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["app-task"]],
      inputs: {
        task: "task",
        container: "container",
        index: "index"
      },
      outputs: {
        taskUpdated: "taskUpdated"
      },
      decls: 12,
      vars: 8,
      consts: [["cdkDrag", "", 3, "id"], [1, "name-description-container"], [1, "description"], [1, "action-buttons", "flex-column-center"], [1, "edit-button", 3, "click"], [1, "edit-icon"], [1, "delete-button", 3, "click"], [1, "delete-icon"]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_6_listener() {
            return ctx.onEditTask(ctx.task);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_9_listener() {
            return ctx.deleteTask(ctx.task.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("tasks ", ctx.container, "-tasks flex-row-space-between"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate2"]("", ctx.container, "-tasks-", ctx.index));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.task.description);
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__.CdkDrag, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: [".tasks[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  cursor: grab;\n  box-shadow: 0 8px 6px -6px rgb(54, 52, 52); \n\n}\n.tasks[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: small;\n  font-style: italic;\n}\n\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:not(.ideas-tasks,\n.name-description-container,\n.description,\n.delete-icon,\n.edit-icon) {\n  color: #fff;\n}\n[_nghost-%COMP%]   .goals-tasks[_ngcontent-%COMP%] {\n  background-color: rgba(249, 208, 122, 0.3);\n}\n[_nghost-%COMP%]   .objectives-tasks[_ngcontent-%COMP%] {\n  background-color: rgba(249, 208, 122, 0.5);\n}\n[_nghost-%COMP%]   .achievements-tasks[_ngcontent-%COMP%] {\n  background-color: rgba(249, 208, 122, 0.7);\n}\n[_nghost-%COMP%]   .tasks[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: bisque;\n  color: black;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  padding: 0px;\n  cursor: pointer;\n}\n.delete-button[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%] {\n  color: #990000;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  padding: 0px;\n  cursor: pointer;\n}\n.edit-button[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  color: #004d99;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUEsRUFBQSxtREFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0U7Ozs7O0VBUUUsV0FBQTtBQUhKO0FBS0U7RUFDRSwwQ0FBQTtBQUhKO0FBTUU7RUFDRSwwQ0FBQTtBQUpKO0FBT0U7RUFDRSwwQ0FBQTtBQUxKO0FBUUU7RUFDRSxzREFBQTtBQU5KOztBQVVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0VBRUEsd0JBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFDRSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxzREFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQVZGO0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVkY7QUFXRTtFQUNFLGNBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrcyB7XG4gIHBhZGRpbmc6IDE1cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IGdyYWI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYig1NCwgNTIsIDUyKTsgLyogT3BlcmEgMTAuNSwgSUUgOSwgRmlyZWZveCA0KywgQ2hyb21lIDYrLCBpT1MgNSAqL1xuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbn1cbjpob3N0IHtcbiAgOm5vdChcbiAgICAgIC5pZGVhcy10YXNrcyxcbiAgICAgIC5uYW1lLWRlc2NyaXB0aW9uLWNvbnRhaW5lcixcbiAgICAgIC5kZXNjcmlwdGlvbixcbiAgICAgIC5kZWxldGUtaWNvbixcbiAgICAgIC5lZGl0LWljb25cbiAgICApIHtcbiAgICAvL2FsbCBleGNlcHQgaWRlYXMgdGFibGVzXG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmdvYWxzLXRhc2tzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMyk7XG4gIH1cblxuICAub2JqZWN0aXZlcy10YXNrcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjUpO1xuICB9XG5cbiAgLmFjaGlldmVtZW50cy10YXNrcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjcpO1xuICB9XG5cbiAgLnRhc2tzOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuNjA3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMHB4O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLmRlbGV0ZS1pY29uIHtcbiAgICBjb2xvcjogIzk5MDAwMDtcbiAgfVxufVxuXG4uZWRpdC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAuZWRpdC1pY29uIHtcbiAgICBjb2xvcjogIzAwNGQ5OTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 1620
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/supabase/supabase.service */ 867);




const authGuard = /*#__PURE__*/function () {
  var _ref = (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    const session = yield supabaseService.getSession();
    if (session) {
      return true;
    }
    router.navigate(['/']);
    return false;
  });
  return function authGuard() {
    return _ref.apply(this, arguments);
  };
}();

/***/ },

/***/ 1900
/*!*********************************************!*\
  !*** ./src/app/store/task/task.selector.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectLoadingState: () => (/* binding */ selectLoadingState),
/* harmony export */   selectTaskFeature: () => (/* binding */ selectTaskFeature),
/* harmony export */   selectTasks: () => (/* binding */ selectTasks)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectTaskFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('idea-task');
const selectTasks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTaskFeature, state => state.tasks);
const selectLoadingState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectTaskFeature, state => state.loading);

/***/ },

/***/ 2173
/*!***********************************************!*\
  !*** ./src/app/services/task/task.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var src_app_store_task_task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/task/task.actions */ 5506);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_store_task_task_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/task/task.selector */ 1900);
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.service */ 3487);






class TaskService {
  constructor() {
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store);
    this.dialogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__.DialogService);
    this.tasks$ = this.store.select(src_app_store_task_task_selector__WEBPACK_IMPORTED_MODULE_3__.selectTasks);
  }
  landingPageInitialized() {
    this.store.dispatch(src_app_store_task_task_actions__WEBPACK_IMPORTED_MODULE_1__.landingPageInitialized());
  }
  taskWasAdded(task) {
    this.store.dispatch(src_app_store_task_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasAdded({
      task
    }));
  }
  taskWasUpdated(task, dialogRef) {
    this.store.dispatch(src_app_store_task_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasUpdated({
      task
    }));
    this.dialogService.closeAddTaskDialog(dialogRef);
  }
  taskDeletionInitiated(taskId) {
    this.store.dispatch(src_app_store_task_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasDeleted({
      taskId
    }));
  }
  static {
    this.ɵfac = function TaskService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/main-view/main-view.component */ 5333);
/* harmony import */ var _views_email_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/email/email-confirm/email-confirm.component */ 9722);
/* harmony import */ var _views_email_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/email/reset-password/reset-password.component */ 9654);
/* harmony import */ var _views_email_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/email/register/register.component */ 5166);
/* harmony import */ var _views_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/landing-page/landing-page.component */ 3365);
/* harmony import */ var _views_boards_view_boards_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/boards-view/boards-view.component */ 49);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);







const routes = [{
  path: '',
  component: _views_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingPageComponent
}, {
  path: 'boards',
  component: _views_boards_view_boards_view_component__WEBPACK_IMPORTED_MODULE_5__.BoardsViewComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard]
}, {
  path: 'main',
  component: _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_0__.MainViewComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.authGuard]
}, {
  path: 'confirmEmail',
  component: _views_email_email_confirm_email_confirm_component__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmComponent
}, {
  path: 'resetPassword',
  component: _views_email_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent
}, {
  path: 'register',
  component: _views_email_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
}];

/***/ },

/***/ 2399
/*!********************************************!*\
  !*** ./src/app/store/task/task.effects.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEffects: () => (/* binding */ TaskEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.actions */ 5506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_app_services_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dialog/dialog.service */ 3487);
/* harmony import */ var src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/task/task.api.service */ 3551);









class TaskEffects {
  constructor(actions$, taskAPIService) {
    this.actions$ = actions$;
    this.taskAPIService = taskAPIService;
    this.dialogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService);
    this.loadItems$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.landingPageInitialized), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.taskAPIService.getTasks()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tasks => _task_actions__WEBPACK_IMPORTED_MODULE_1__.loadTaskSuccess({
      tasks
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.loadTasksFailure({
      error
    })))))));
    this.addTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasAdded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      task
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.taskAPIService.addTask(task)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(addedTask => addedTask ? _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasAddedSuccessfully({
      task: addedTask
    }) : _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskAddFailed({
      error: 'Failed to add task'
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskAddFailed({
      error: 'Failed to add task'
    })))))));
    this.updateTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasUpdated), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      task
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.taskAPIService.editTask(task)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => res ? _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasUpdatedSuccessfully({
      task
    }) : _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskUpdateFailed({
      error: 'Failed to update task'
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskUpdateFailed({
      error: 'Failed to update task'
    })))))), {
      dispatch: true
    });
    this.deleteTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasDeleted), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      taskId
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.taskAPIService.deleteTask(taskId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => res ? _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasDeletedSuccessfully({
      taskId
    }) : _task_actions__WEBPACK_IMPORTED_MODULE_1__.taskDeletionFailed({
      error: 'Failed to delete task'
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskDeletionFailed({
      error: 'Failed to delete task'
    })))))));
  }
  static {
    this.ɵfac = function TaskEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_10__.TaskAPIService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TaskEffects,
      factory: TaskEffects.ɵfac
    });
  }
}

/***/ },

/***/ 2986
/*!******************************************************!*\
  !*** ./src/app/views/email/login/login.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.service */ 381);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 5326);















function LoginComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("email"));
  }
}
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("password"));
  }
}
class LoginComponent {
  constructor() {
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]);
    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
    this.hide = true;
    this.userDetails = null;
    this.loginService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
  }
  ngOnInit() {}
  getErrorMessage(formControlName) {
    let control = null;
    if (formControlName == 'email') {
      control = this.email;
    }
    if (formControlName == 'password') {
      control = this.password;
    }
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return control.hasError('email') ? 'Not a valid email' : '';
  }
  login() {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loginCredentials = {
        email: _this.email.value,
        password: _this.password.value
      };
      if (_this.email.valid && _this.password.valid) {
        try {
          const userSessionDetails = yield _this.loginService.loginEmailPassword(loginCredentials);
          _this.userDetails = userSessionDetails.user;
          _this.router.navigate(['/boards']);
        } catch (error) {}
      }
    })();
  }
  register() {
    this.router.navigate(['/register']);
  }
  keyDown($event) {
    if ($event.key === 'Enter') {
      this.login();
    }
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 8,
      consts: [[1, "login-container", 3, "keydown"], [1, "app-name", "has-gradient-text"], ["appearance", "outline"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], ["matInput", "", "required", "", 3, "formControl", "type"], ["mat-icon-button", "", "matSuffix", "", 1, "visibility-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "standard-button-height", 3, "click"], ["id", "register-text"], ["href", "javascript:void()", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown", function LoginComponent_Template_div_keydown_0_listener($event) {
            return ctx.keyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Login to start saving your life events");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Enter your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](9, LoginComponent_Conditional_9_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-form-field", 2)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](14, LoginComponent_Conditional_14_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " or...do you need to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_22_listener() {
            return ctx.register();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "register?");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.email.invalid ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.password)("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.password.invalid ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  align-items: stretch;\n  width: 320px;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0;\n}\n.login-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 1rem;\n  letter-spacing: 0.05em;\n}\n.login-container[_ngcontent-%COMP%]   #register-text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: rgba(255, 255, 255, 0.75);\n}\n.login-container[_ngcontent-%COMP%]   #register-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #F9D07A;\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   #register-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtBQUZKO0FBSUk7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUZOO0FBSU07RUFDRSwwQkFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAzMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHAge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdGFuZGFyZC1idXR0b24taGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIH1cblxuICAjcmVnaXN0ZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICNGOUQwN0E7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 3208
/*!***********************************************!*\
  !*** ./src/app/store/board/board.selector.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectBoardFeature: () => (/* binding */ selectBoardFeature),
/* harmony export */   selectBoardLoadingState: () => (/* binding */ selectBoardLoadingState),
/* harmony export */   selectBoards: () => (/* binding */ selectBoards),
/* harmony export */   selectSelectedBoard: () => (/* binding */ selectSelectedBoard)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectBoardFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('board');
const selectBoards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectBoardFeature, state => state.boards);
const selectBoardLoadingState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectBoardFeature, state => state.loading);
const selectSelectedBoard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectBoardFeature, state => state.selectedBoard);

/***/ },

/***/ 3365
/*!**************************************************************!*\
  !*** ./src/app/views/landing-page/landing-page.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPageComponent: () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _email_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email/login/login.component */ 2986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/supabase/supabase.service */ 867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);






class LandingPageComponent {
  constructor() {
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_4__.SupabaseService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const session = yield _this.supabaseService.getSession();
      if (session) {
        _this.router.navigate(['/boards']);
      }
    })();
  }
  static {
    this.ɵfac = function LandingPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["landing-page"]],
      decls: 31,
      vars: 0,
      consts: [[1, "landing-container"], [1, "welcome-section"], [1, "app-name", "has-gradient-text", "size-50-override"], [1, "features-list"], ["tabindex", "0", 1, "feature-card"], [1, "icon"], [1, "text"], [1, "login-section"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Welcome to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Organize your life, manage your tasks, and achieve your goals with ease. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u2714\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Task Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u2714\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Goal Tracking");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 4)(20, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u2714\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Secure Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4)(25, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\u2714\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Beautiful UI");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "app-login");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_email_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
      styles: [".landing-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #010014 0%, #0a0a2e 40%, #010014 100%);\n  align-items: center;\n  justify-content: center;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 60px 40px;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 20px;\n  color: #fff;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 30px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  font-size: 1.1rem;\n  color: #fff;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  margin-top: 24px;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: rgba(249, 208, 122, 0.08);\n  color: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(1, 0, 20, 0.2);\n  padding: 18px 28px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.15rem;\n  font-weight: 500;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid rgba(249, 208, 122, 0.15);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s;\n  position: relative;\n  z-index: 1;\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, .landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:focus {\n  transform: scale(1.06) translateY(-2px);\n  box-shadow: 0 6px 24px 0 rgba(249, 208, 122, 0.15), 0 1.5px 8px 0 rgba(1, 0, 20, 0.15);\n  background: rgba(249, 208, 122, 0.15);\n  border-color: rgba(249, 208, 122, 0.3);\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-right: 8px;\n  filter: drop-shadow(0 1px 2px rgba(249, 208, 122, 0.2));\n}\n.landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  letter-spacing: 0.01em;\n}\n.landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n  flex: 0 0 400px;\n  background: linear-gradient(135deg, #010014 0%, #0d0d30 50%, #010014 100%);\n  box-shadow: 0 8px 32px rgba(1, 0, 20, 0.4);\n  border-radius: 16px;\n  border: 1px solid rgba(249, 208, 122, 0.1);\n  padding: 40px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 3vw;\n  position: relative;\n  overflow: hidden;\n  transition: box-shadow 0.3s;\n}\n.landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]:hover::after, .landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]:active::after, .landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]:focus-within::after {\n  left: 120%;\n  transition: left 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -75%;\n  width: 60%;\n  height: 100%;\n  background: linear-gradient(120deg, rgba(249, 208, 122, 0.1) 0%, rgba(249, 208, 122, 0.03) 60%, transparent 100%);\n  pointer-events: none;\n  transition: left 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 2;\n}\n\n@media (max-width: 900px) {\n  .landing-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 24px 0;\n  }\n  .landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%], \n   .landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n    flex: unset;\n    width: 100%;\n    max-width: 500px;\n    margin: 0 auto 24px auto;\n    box-sizing: border-box;\n  }\n  .landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n    margin-right: 0;\n    box-shadow: 0 4px 16px rgba(1, 0, 20, 0.3);\n    border-radius: 12px;\n    padding: 32px 16px;\n  }\n}\n@media (max-width: 600px) {\n  .landing-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%], \n   .landing-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n    padding: 24px 8px;\n    max-width: 100%;\n  }\n  .landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .landing-container[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBFQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBRUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRk47QUFJTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUZSO0FBTUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSx5SEFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQU5OO0FBUU07RUFFRSx1Q0FBQTtFQUNBLHNGQUFBO0VBRUEscUNBQUE7RUFDQSxzQ0FBQTtBQVJSO0FBV007RUFDRSxzQkFBQTtBQVRSO0FBWU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdURBQUE7QUFWUjtBQWFNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQVhSO0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLDBFQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBZEo7QUFnQkk7RUFHRSxVQUFBO0VBQ0Esa0RBQUE7QUFoQk47QUFtQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUhBQUE7RUFNQSxvQkFBQTtFQUNBLGtEQUFBO0VBQ0EsVUFBQTtBQXRCTjs7QUEyQkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsZUFBQTtFQXhCRjtFQTBCRTs7SUFFRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esd0JBQUE7SUFDQSxzQkFBQTtFQXhCSjtFQTJCRTtJQUNFLGVBQUE7SUFDQSwwQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUF6Qko7QUFDRjtBQTZCQTtFQUNFO0lBQ0UsVUFBQTtFQTNCRjtFQTZCRTs7SUFFRSxpQkFBQTtJQUNBLGVBQUE7RUEzQko7RUE4QkU7SUFDRSxlQUFBO0VBNUJKO0VBK0JFO0lBQ0UsZUFBQTtFQTdCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMTAwMTQgMCUsICMwYTBhMmUgNDAlLCAjMDEwMDE0IDEwMCUpO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC53ZWxjb21lLXNlY3Rpb24ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogNjBweCA0MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmVhdHVyZXMtbGlzdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxOHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAuZmVhdHVyZS1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC4wOCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMSwgMCwgMjAsIDAuMik7XG4gICAgICBwYWRkaW5nOiAxOHB4IDI4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjE1KTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxuICAgICAgICBib3gtc2hhZG93IDAuMjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQgMC4yNXM7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNikgdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjRweCAwIHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC4xNSksXG4gICAgICAgICAgMCAxLjVweCA4cHggMCByZ2JhKDEsIDAsIDIwLCAwLjE1KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDIwOCwgMTIyLCAwLjE1KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC4yKSk7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luLXNlY3Rpb24ge1xuICAgIGZsZXg6IDAgMCA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDEwMDE0IDAlLCAjMGQwZDMwIDUwJSwgIzAxMDAxNCAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMSwgMCwgMjAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMSk7XG4gICAgcGFkZGluZzogNDBweCAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG5cbiAgICAmOmhvdmVyOjphZnRlcixcbiAgICAmOmFjdGl2ZTo6YWZ0ZXIsXG4gICAgJjpmb2N1cy13aXRoaW46OmFmdGVyIHtcbiAgICAgIGxlZnQ6IDEyMCU7XG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogLTc1JTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEyMGRlZyxcbiAgICAgICAgcmdiYSgyNDksIDIwOCwgMTIyLCAwLjEpIDAlLFxuICAgICAgICByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMDMpIDYwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjdzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmxhbmRpbmctY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI0cHggMDtcblxuICAgIC53ZWxjb21lLXNlY3Rpb24sXG4gICAgLmxvZ2luLXNlY3Rpb24ge1xuICAgICAgZmxleDogdW5zZXQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0byAyNHB4IGF1dG87XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIC5sb2dpbi1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxLCAwLCAyMCwgMC4zKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubGFuZGluZy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAud2VsY29tZS1zZWN0aW9uLFxuICAgIC5sb2dpbi1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDI0cHggOHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC53ZWxjb21lLXNlY3Rpb24gaDEge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgIC53ZWxjb21lLXNlY3Rpb24gcCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 3487
/*!***************************************************!*\
  !*** ./src/app/services/dialog/dialog.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogService: () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);

class DialogService {
  constructor() {}
  closeAddTaskDialog(dialogRef) {
    dialogRef.close();
  }
  static {
    this.ɵfac = function DialogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DialogService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3551
/*!***************************************************!*\
  !*** ./src/app/services/task/task.api.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskAPIService: () => (/* binding */ TaskAPIService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);





class TaskAPIService {
  constructor() {
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService);
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
  }
  addTask(taskData) {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
          user_id: user.id,
          board_id: taskData.board_id
        }).select().single();
        if (error) {
          throw error;
        }
        _this.toastRService.success(`Task ${taskData.name} added successfully`);
        return data;
      } catch (error) {
        _this.toastRService.error(`Failed to add task: ${error.message}`);
        return null;
      }
    })();
  }
  getTasks() {
    var _this2 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        _this2.toastRService.error(`Failed to get tasks: ${error.message}`);
      }
    })();
  }
  updateTaskContainer(taskData) {
    var _this3 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  deleteTask(id) {
    var _this4 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let {
          data,
          error
        } = yield _this4.supabaseService.supabase.from('tasks').delete().eq('id', id);
        if (error) {
          throw error;
        }
        _this4.toastRService.success(`Task deleted successfully`);
        return true;
      } catch (error) {
        _this4.toastRService.error(`Failed to delete task : ${error.message}`);
      }
    })();
  }
  editTask(taskData) {
    var _this5 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let {
          data,
          error
        } = yield _this5.supabaseService.supabase.from('tasks').update({
          name: taskData.name,
          description: taskData.description,
          type: taskData.type
          //TODO: Add more fields to upsert
        }).eq('id', taskData.id);
        if (error) {
          throw error;
        }
        _this5.toastRService.success(`Task ${taskData.name} was updated successfully`);
        return true;
      } catch (error) {
        _this5.toastRService.error(`Failed to update task : ${error.message}`);
      }
    })();
  }
  static {
    this.ɵfac = function TaskAPIService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskAPIService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TaskAPIService,
      factory: TaskAPIService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 4193
/*!**********************************************!*\
  !*** ./src/app/store/board/board.reducer.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardsReducer: () => (/* binding */ boardsReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _board_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.actions */ 8342);


function resolveSelectedBoard(currentSelected, boards) {
  if (currentSelected?.id) {
    return boards.find(b => b.id === currentSelected.id) ?? boards[0] ?? null;
  }
  return boards[0] ?? null;
}
const initialState = {
  boards: [],
  selectedBoard: null,
  loading: false
};
const boardsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.addBoard, (state, {
  board
}) => ({
  ...state,
  boards: [...state.boards, board],
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.loadBoardsSuccess, (state, {
  boards
}) => ({
  ...state,
  boards,
  selectedBoard: resolveSelectedBoard(state.selectedBoard, boards),
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.loadBoardsFailure, (state, {
  error
}) => ({
  ...state,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.boardEditedSuccessfully, (state, {
  board
}) => ({
  ...state,
  boards: [...state.boards.map(b => b.id === board.id ? board : b)],
  selectedBoard: state.selectedBoard?.id === board.id ? board : state.selectedBoard,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.selectBoard, (state, {
  board
}) => ({
  ...state,
  selectedBoard: board
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_board_actions__WEBPACK_IMPORTED_MODULE_1__.deleteBoardSuccess, (state, {
  boardId
}) => {
  const updatedBoards = state.boards.filter(b => b.id !== boardId);
  const newSelectedBoard = state.selectedBoard?.id === boardId ? updatedBoards[0] ?? null : state.selectedBoard;
  return {
    ...state,
    boards: updatedBoards,
    selectedBoard: newSelectedBoard
  };
}));

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.config */ 289);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, {
  ..._app_app_config__WEBPACK_IMPORTED_MODULE_4__.appConfig,
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideZoneChangeDetection)(), ..._app_app_config__WEBPACK_IMPORTED_MODULE_4__.appConfig.providers]
}).catch(err => console.error(err));

/***/ },

/***/ 5166
/*!************************************************************!*\
  !*** ./src/app/views/email/register/register.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/register/register.service */ 7309);
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utility/utility.service */ 7760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 5326);
















function RegisterComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("email"));
  }
}
function RegisterComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("password"));
  }
}
function RegisterComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("confirmPassword"));
  }
}
function RegisterComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("PasswordNoMatch"));
  }
}
function RegisterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "form", 2)(3, "mat-form-field", 3)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](7, RegisterComponent_Conditional_3_Conditional_7_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.hide = !ctx_r1.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](15, RegisterComponent_Conditional_3_Conditional_15_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-form-field", 3)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.hide = !ctx_r1.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](23, RegisterComponent_Conditional_3_Conditional_23_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](24, RegisterComponent_Conditional_3_Conditional_24_Template, 2, 1, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RegisterComponent_Conditional_3_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.passwordForm.controls.email.invalid ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.passwordForm.controls.password.invalid ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.passwordForm.controls.confirmPassword.invalid ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"]((ctx_r1.passwordForm.errors == null ? null : ctx_r1.passwordForm.errors["PasswordNoMatch"]) && ctx_r1.passwordForm.controls.confirmPassword.value ? 24 : -1);
  }
}
function RegisterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Registration was successful for ", ctx_r1.userDetails.user.email, ". Please check your email for verification. ");
  }
}
class RegisterComponent {
  constructor() {
    this.userDetails = null;
    this.hide = true;
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService);
    this.registerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_8__.RegisterService);
    this.registrationSuccess = false;
  }
  ngOnInit() {
    this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    }, {
      validators: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__.UtilityService.confirmPasswordValidator
    });
  }
  passwordsMatchValidator(formGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {
      notMatching: true
    };
  }
  getErrorMessage(formControlName) {
    const email = this.passwordForm.get('email');
    const password = this.passwordForm.get('password');
    const confirmPassword = this.passwordForm.get('confirmPassword');
    if (formControlName == 'email') {
      if (email.hasError('required')) {
        return 'You must enter a value';
      }
      return email.hasError('email') ? 'Not a valid email' : '';
    } else if (formControlName == 'password') {
      if (password.hasError('required')) {
        return 'You must enter a password';
      }
    } else if (formControlName == 'confirmPassword') {
      if (confirmPassword.hasError('required')) {
        return 'Please type your password again to confirm';
      } else {
        return 'Password must be entered';
      }
    } else if (formControlName == 'PasswordNoMatch') {
      return 'Passwords do not match';
    }
    return 'You must enter a value';
  }
  register() {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const email = _this.passwordForm.get('email');
      const confirmPassword = _this.passwordForm.get('confirmPassword');
      if (_this.passwordForm.valid) {
        _this.userDetails = yield _this.registerService.registerUser(email.value, confirmPassword.value);
        if (_this.userDetails.user) {
          _this.registrationSuccess = true;
        }
      }
    })();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 5,
      vars: 1,
      consts: [[1, "register-container"], [1, "app-name", "has-gradient-text"], [1, "register-form", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "placeholder", "pat@example.com", "formControlName", "email", "required", ""], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "visibility-button", 3, "click"], ["formControlName", "confirmPassword", "matInput", "", "required", "", 3, "type"], [1, "password-unmatch-error"], ["mat-raised-button", "", "color", "primary", 1, "standard-button-height", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](3, RegisterComponent_Conditional_3_Template, 27, 13)(4, RegisterComponent_Conditional_4_Template, 2, 1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](!ctx.registrationSuccess ? 3 : 4);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.register-container[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 320px;\n  text-align: center;\n  gap: 0.25rem;\n}\n.register-container[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.register-container[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Yatra One\", sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#F9D07A, #d4a94e);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.register-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  text-align: center;\n  margin-bottom: 0.5rem;\n}\n.register-container[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 1rem;\n  letter-spacing: 0.05em;\n  width: 100%;\n}\n.register-container[_ngcontent-%COMP%]   .password-unmatch-error[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  text-align: left;\n  padding-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUlFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxxREFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFISjtBQU1FO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBTEo7QUFRRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5KIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMC4yNXJlbTtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5hcHAtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5oYXMtZ3JhZGllbnQtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0Y5RDA3QSwgI2Q0YTk0ZSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxuXG4gIC5zdGFuZGFyZC1idXR0b24taGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFzc3dvcmQtdW5tYXRjaC1lcnJvciB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  //anon-public key
  SUPABASE_KEY: 'sb_publishable_doO5-LHFGbvUe9ye_vo9Qg_GjHpiFY5',
  SUPABASE_URL: 'https://vcnvdgoqpadvxyglbjsx.supabase.co'
};

/***/ },

/***/ 5333
/*!********************************************************!*\
  !*** ./src/app/views/main-view/main-view.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewComponent: () => (/* binding */ MainViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-task/add-task.component */ 5449);
/* harmony import */ var src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/enums/idea-type.enum */ 6730);
/* harmony import */ var src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/task/task.api.service */ 3551);
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/utility/utility.service */ 7760);
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../task/task.component */ 1077);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var src_app_services_board_board_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/board/board.service */ 7453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 6124);



















function MainViewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.selectedBoard.name);
  }
}
function MainViewComponent_Conditional_12_For_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-task", 14);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ɵ$index_44_r5 = ctx.$index;
    const container_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("task", item_r4)("container", container_r3)("index", ɵ$index_44_r5);
  }
}
function MainViewComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MainViewComponent_Conditional_12_For_3_Template_button_click_4_listener() {
      const container_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.openAddTask(container_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 13, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("cdkDropListDropped", function MainViewComponent_Conditional_12_For_3_Template_div_cdkDropListDropped_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](9, MainViewComponent_Conditional_12_For_3_For_10_Template, 1, 3, "app-task", 14, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const container_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("cdkDragDisabled", !ctx_r0.listDragEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](container_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", container_r3)("cdkDropListData", ctx_r0.containerRefs[container_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r0.containerRefs[container_r3]);
  }
}
function MainViewComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](2, MainViewComponent_Conditional_12_For_3_Template, 11, 4, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r0.containers);
  }
}
class MainViewComponent {
  constructor() {
    this.containers = ['symptoms', 'ideas', 'goals', 'objectives', 'achievements'];
    this.ideas = [];
    this.goals = [];
    this.objectives = [];
    this.achievements = [];
    this.symptoms = [];
    this.containerRefs = {
      symptoms: this.symptoms,
      ideas: this.ideas,
      goals: this.goals,
      objectives: this.objectives,
      achievements: this.achievements
    };
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_12__.TaskService);
    this.taskAPIService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_task_task_api_service__WEBPACK_IMPORTED_MODULE_9__.TaskAPIService);
    this.boardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_board_board_service__WEBPACK_IMPORTED_MODULE_14__.BoardService);
    this.selectedBoard = null;
    this.listDragEnabled = false;
    this.addTaskDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog);
  }
  ngOnInit() {
    this.getTasks();
    this.selectedBoardSub = this.boardService.selectedBoard$.subscribe(board => {
      this.selectedBoard = board;
      this.getTasks();
    });
  }
  ngOnDestroy() {
    this.selectedBoardSub?.unsubscribe();
  }
  getTasks() {
    this.tasks$ = this.taskService.tasks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(tasks => {
      this.resetContainerData();
      const filteredTasks = this.selectedBoard ? tasks.filter(t => t.board_id === this.selectedBoard.id) : tasks;
      filteredTasks.forEach(element => {
        if (element) {
          const containerName = src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__.UtilityService.getEnumKeyByValue(src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_8__.IdeaType, element.type);
          if (containerName) this.containerRefs[containerName].push(element);
        }
      });
    }));
  }
  resetContainerData() {
    this.containerRefs = {
      symptoms: [],
      ideas: [],
      goals: [],
      objectives: [],
      achievements: []
    };
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const data = event.container.data[event.currentIndex];
      const containerType = src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_8__.IdeaType[event.container.id];
      if (containerType === undefined) return;
      this.taskAPIService.updateTaskContainer({
        id: data.id,
        type: containerType
      }).then(updated => {});
    }
  }
  updateUserDetails(userDetails) {}
  openAddTask(type) {
    const dialogRef = this.addTaskDialog.open(_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__.AddTaskComponent, {
      data: {
        taskType: src_app_enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_8__.IdeaType[type],
        boardId: this.selectedBoard?.id
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    });
  }
  goToBoards() {
    this.router.navigate(['/boards']);
  }
  toggleListDrag() {
    this.listDragEnabled = !this.listDragEnabled;
  }
  static {
    this.ɵfac = function MainViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: MainViewComponent,
      selectors: [["app-main-view"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe])],
      decls: 14,
      vars: 8,
      consts: [["todoList", "cdkDropList"], [1, "root"], [1, "board"], [1, "board-header"], ["mat-button", "", 1, "back-button", 3, "click"], [1, "board-name"], ["mat-button", "", 1, "drag-mode-button", 3, "click", "title"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["cdkDrag", "", 1, "board-column", 3, "cdkDragDisabled"], [1, "title-container", "flex-row-space-between"], [1, "column-title"], [1, "add-task-button", 3, "click"], ["cdkDropList", "", 1, "tasks-container", "example-list", 3, "cdkDropListDropped", "id", "cdkDropListData"], [3, "task", "container", "index"]],
      template: function MainViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MainViewComponent_Template_button_click_3_listener() {
            return ctx.goToBoards();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Boards ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](7, MainViewComponent_Conditional_7_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MainViewComponent_Template_button_click_8_listener() {
            return ctx.toggleListDrag();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "drag_indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](12, MainViewComponent_Conditional_12_Template, 4, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.selectedBoard ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("drag-mode-active", ctx.listDragEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx.listDragEnabled ? "Disable list reordering" : "Enable list reordering");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.listDragEnabled ? "Lock Lists" : "Reorder Lists", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 6, ctx.tasks$)) ? 12 : -1, tmp_4_0);
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _task_task_component__WEBPACK_IMPORTED_MODULE_11__.TaskComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
      styles: [".root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0;\n}\n.board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 16px;\n  background: rgba(1, 0, 20, 0.7);\n}\n.board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  color: #F9D07A;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n}\n.board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%]   .drag-mode-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: rgba(255, 255, 255, 0.6);\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%]   .drag-mode-button.drag-mode-active[_ngcontent-%COMP%] {\n  color: #F9D07A;\n  border-color: #F9D07A;\n}\n.board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%]   .board-name[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n@media (max-width: 600px) {\n  .board[_ngcontent-%COMP%]   .board-header[_ngcontent-%COMP%]   .board-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n@media (max-width: 768px) {\n  .board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  row-gap: 10px;\n  max-height: 300px;\n  overflow-y: auto;\n  min-width: 300px;\n  margin: 50px;\n  padding: 25px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0;\n}\n@media (max-width: 768px) {\n  .board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: auto;\n    max-height: none;\n    margin: 8px 12px;\n    padding: 16px;\n  }\n  .board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: 12px;\n    margin-top: 0;\n  }\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .add-task-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-family: \"Yatra One\", sans-serif;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n@media (max-width: 600px) {\n  .board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.tasks-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUROO0FBR007RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFEUjtBQUtJO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSE47QUFLTTtFQU5GO0lBT0ksZUFBQTtFQUZOO0FBQ0Y7QUFNRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFORjtJQU9JLGtCQUFBO0VBSEo7QUFDRjtBQUtJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBSkY7SUFLSSxzQkFBQTtJQUNBLFdBQUE7RUFGTjtBQUNGO0FBSU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFGUjtBQUdRO0VBQ0UsY0FBQTtBQURWO0FBSVE7RUFqQkY7SUFrQkksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUFEUjtFQUdRO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VBRFY7QUFDRjtBQUlRO0VBQ0UsZUFBQTtBQUZWO0FBS1E7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSFY7QUFLVTtFQU5GO0lBT0ksZUFBQTtFQUZWO0FBQ0Y7O0FBU0E7RUFDRSxZQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuXG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcblxuICAuYm9hcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMCwgMjAsIDAuNyk7XG5cbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgY29sb3I6ICNGOUQwN0E7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRyYWctbW9kZS1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG5cbiAgICAgICYuZHJhZy1tb2RlLWFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjRjlEMDdBO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGOUQwN0E7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvYXJkLW5hbWUge1xuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIC5ib2FyZC1jb2x1bW5zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmJvYXJkLWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgcm93LWdhcDogMTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDhweCAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sdW1uLXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIllhdHJhIE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YXNrcy1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 5449
/*!******************************************************!*\
  !*** ./src/app/views/add-task/add-task.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTaskComponent: () => (/* binding */ AddTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var src_app_enums_task_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/enums/task-mode.enum */ 6277);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/task/task.service */ 2173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 423);













function AddTaskComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.getValidationMessage());
  }
}
class AddTaskComponent {
  constructor(data) {
    this.data = data;
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_7__.TaskService);
    this.addTaskDialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef);
    this.actionString = 'Add Task';
    this.TaskMode = src_app_enums_task_mode_enum__WEBPACK_IMPORTED_MODULE_6__.TaskMode;
  }
  ngOnInit() {
    this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('')
    });
    if (this.data.mode === src_app_enums_task_mode_enum__WEBPACK_IMPORTED_MODULE_6__.TaskMode.Edit) {
      this.actionString = 'Edit Task';
      this.addTaskForm.patchValue(this.data.task);
    }
  }
  getValidationMessage() {
    if (this.addTaskForm.controls.name.hasError('required')) {
      return 'You must enter a name for the task';
    }
    return this.addTaskForm.controls.name.hasError('minLength') ? 'At least 3 characters long' : '';
  }
  //TODO: move the actions to parent component
  addTask() {
    const task = {
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
      type: this.data.taskType,
      completion_status: 0,
      user_id: null,
      board_id: this.data.boardId
    };
    this.taskService.taskWasAdded(task);
    this.addTaskDialogRef.close();
  }
  editTask() {
    const task = {
      id: this.data.task.id,
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value
    };
    this.taskService.taskWasUpdated(task, this.addTaskDialogRef);
  }
  static {
    this.ɵfac = function AddTaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AddTaskComponent,
      selectors: [["add-task"]],
      decls: 13,
      vars: 6,
      consts: [[1, "add-task-container", "flex-column", 3, "submit", "formGroup"], ["appearance", "outline"], ["matInput", "", "placeholder", "Task name", "formControlName", "name", 3, "value"], ["matInput", "", "placeholder", "Task description", "formControlName", "description", "rows", "4", 3, "value"], [1, "action-button-container", "flex"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "action-button", 3, "disabled"]],
      template: function AddTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function AddTaskComponent_Template_form_submit_0_listener() {
            return ctx.data.mode === ctx.TaskMode.Edit ? ctx.editTask() : ctx.addTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Enter task name");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](5, AddTaskComponent_Conditional_5_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Please explain the task");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "textarea", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.addTaskForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.data.task == null ? null : ctx.data.task.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.addTaskForm.controls.name.invalid && ctx.addTaskForm.controls.name.touched ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.data.task == null ? null : ctx.data.task.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.addTaskForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.actionString, " ");
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: [".add-task-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  padding: 5px;\n}\n\n.action-button-container[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.action-button-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n@media screen and (max-width: 600px) {\n  .add-task-container[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtdGFzay1jb250YWluZXIge1xuICB3aWR0aDogNTB2dztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hZGQtdGFzay1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 5506
/*!********************************************!*\
  !*** ./src/app/store/task/task.actions.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   landingPageInitialized: () => (/* binding */ landingPageInitialized),
/* harmony export */   loadTaskSuccess: () => (/* binding */ loadTaskSuccess),
/* harmony export */   loadTasksFailure: () => (/* binding */ loadTasksFailure),
/* harmony export */   taskAddFailed: () => (/* binding */ taskAddFailed),
/* harmony export */   taskDeletionFailed: () => (/* binding */ taskDeletionFailed),
/* harmony export */   taskUpdateFailed: () => (/* binding */ taskUpdateFailed),
/* harmony export */   taskWasAdded: () => (/* binding */ taskWasAdded),
/* harmony export */   taskWasAddedSuccessfully: () => (/* binding */ taskWasAddedSuccessfully),
/* harmony export */   taskWasDeleted: () => (/* binding */ taskWasDeleted),
/* harmony export */   taskWasDeletedSuccessfully: () => (/* binding */ taskWasDeletedSuccessfully),
/* harmony export */   taskWasUpdated: () => (/* binding */ taskWasUpdated),
/* harmony export */   taskWasUpdatedSuccessfully: () => (/* binding */ taskWasUpdatedSuccessfully)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const landingPageInitialized = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Landing Page Initialized');
const loadTaskSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Load Tasks Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadTasksFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Load Tasks Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasAdded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Was Added', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasAddedSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Was Added Successfully', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskAddFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Adding Has Failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasUpdated = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Was Updated', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasUpdatedSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Was Updated Successfully', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskUpdateFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Updating Has Failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasDeleted = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Deletion Initiated', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskWasDeletedSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Was Deleted Successfully', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const taskDeletionFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks] Task Deletion Has Failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ },

/***/ 6277
/*!*****************************************!*\
  !*** ./src/app/enums/task-mode.enum.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskMode: () => (/* binding */ TaskMode)
/* harmony export */ });
var TaskMode;
(function (TaskMode) {
  TaskMode[TaskMode["Add"] = 0] = "Add";
  TaskMode[TaskMode["Edit"] = 1] = "Edit";
})(TaskMode || (TaskMode = {}));

/***/ },

/***/ 6730
/*!*****************************************!*\
  !*** ./src/app/enums/idea-type.enum.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  IdeaType[IdeaType["symptoms"] = 4] = "symptoms";
})(IdeaType || (IdeaType = {}));

/***/ },

/***/ 6773
/*!********************************************!*\
  !*** ./src/app/store/task/task.reducer.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   tasksReducer: () => (/* binding */ tasksReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.actions */ 5506);
/* harmony import */ var src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/board/board.actions */ 8342);



const initialState = {
  tasks: [],
  loading: false
};
const tasksReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.landingPageInitialized, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasAdded, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasAddedSuccessfully, (state, {
  task
}) => ({
  ...state,
  tasks: [...state.tasks, task],
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasUpdatedSuccessfully, (state, {
  task
}) => {
  console.log('Current state:', state);
  console.log('Task received:', task);
  return {
    ...state,
    tasks: state.tasks.map(existingTask => existingTask.id === task.id ? {
      ...existingTask,
      ...task
    } : existingTask),
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.loadTaskSuccess, (state, {
  tasks
}) => {
  console.log('Current state:', state);
  console.log('Tasks received:', tasks);
  return {
    ...state,
    tasks,
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_1__.taskWasDeletedSuccessfully, (state, {
  taskId
}) => ({
  ...state,
  tasks: state.tasks.filter(task => task.id !== taskId),
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_2__.deleteBoardSuccess, (state, {
  boardId
}) => ({
  ...state,
  tasks: state.tasks.filter(task => task.board_id !== boardId)
})));

/***/ },

/***/ 7309
/*!*******************************************************!*\
  !*** ./src/app/services/register/register.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterService: () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);





class RegisterService {
  constructor() {
    this.toastrService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService);
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService);
  }
  registerUser(email, password) {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 7453
/*!*************************************************!*\
  !*** ./src/app/services/board/board.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardService: () => (/* binding */ BoardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var src_app_store_board_board_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/board/board.selector */ 3208);
/* harmony import */ var src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/board/board.actions */ 8342);





class BoardService {
  constructor() {
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
    this.boards$ = this.store.select(src_app_store_board_board_selector__WEBPACK_IMPORTED_MODULE_2__.selectBoards);
    this.selectedBoard$ = this.store.select(src_app_store_board_board_selector__WEBPACK_IMPORTED_MODULE_2__.selectSelectedBoard);
    // You can implement store logic here if needed
  }
  getBoards() {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.loadBoards());
  }
  nameEditFinished(board) {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.boardNameEdited({
      board: board
    }));
  }
  //create new board
  createBoard(board) {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.addBoard({
      board
    }));
  }
  selectBoard(board) {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.selectBoard({
      board
    }));
  }
  deleteBoard(boardId) {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.deleteBoard({
      boardId
    }));
  }
  createBoardFromTemplate(template) {
    this.store.dispatch(src_app_store_board_board_actions__WEBPACK_IMPORTED_MODULE_3__.createBoardFromTemplate({
      template
    }));
  }
  static {
    this.ɵfac = function BoardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoardService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BoardService,
      factory: BoardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 7760
/*!********************************************!*\
  !*** ./src/app/utility/utility.service.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilityService: () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);

class UtilityService {
  static {
    this.getEnumKeyByValue = (enumObj, value) => Object.keys(enumObj).find(key => enumObj[key] === value);
  }
  static {
    this.confirmPasswordValidator = control => {
      return control.value.password === control.value.confirmPassword ? null : {
        PasswordNoMatch: true
      };
    };
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

/***/ },

/***/ 8342
/*!**********************************************!*\
  !*** ./src/app/store/board/board.actions.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBoard: () => (/* binding */ addBoard),
/* harmony export */   boardEditFailed: () => (/* binding */ boardEditFailed),
/* harmony export */   boardEditedSuccessfully: () => (/* binding */ boardEditedSuccessfully),
/* harmony export */   boardNameEdited: () => (/* binding */ boardNameEdited),
/* harmony export */   createBoardFromTemplate: () => (/* binding */ createBoardFromTemplate),
/* harmony export */   deleteBoard: () => (/* binding */ deleteBoard),
/* harmony export */   deleteBoardFailure: () => (/* binding */ deleteBoardFailure),
/* harmony export */   deleteBoardSuccess: () => (/* binding */ deleteBoardSuccess),
/* harmony export */   loadBoards: () => (/* binding */ loadBoards),
/* harmony export */   loadBoardsFailure: () => (/* binding */ loadBoardsFailure),
/* harmony export */   loadBoardsSuccess: () => (/* binding */ loadBoardsSuccess),
/* harmony export */   selectBoard: () => (/* binding */ selectBoard)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const addBoard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Create Board button was clicked', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadBoards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Load Boards');
const loadBoardsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Load Boards Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadBoardsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Load Boards Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const boardNameEdited = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Board was updated', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const boardEditedSuccessfully = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Board was edited successfully', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const boardEditFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Board edit failed', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectBoard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Board was selected', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteBoard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Delete Board', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteBoardSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Delete Board Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteBoardFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Delete Board Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createBoardFromTemplate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Boards] Create Board From Template', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ },

/***/ 9053
/*!*****************************************!*\
  !*** ./src/app/data/board-templates.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOARD_TEMPLATES: () => (/* binding */ BOARD_TEMPLATES)
/* harmony export */ });
/* harmony import */ var _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/idea-type.enum */ 6730);

const BOARD_TEMPLATES = [{
  id: 'counter-endometriosis',
  name: 'Counter Endometriosis',
  description: 'A structured board to help track and manage endometriosis — covering symptoms, preventive measures, diet & exercise, and personal notes.',
  tasks: [
  // Symptoms of Endometriosis
  {
    name: 'Chronic pelvic pain (especially during menstruation)',
    description: 'One of the most common symptoms. Record intensity (1–10), duration, and when it occurs in your cycle.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Heavy or irregular menstrual bleeding',
    description: 'Note flow volume, duration, and any changes compared to previous cycles.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Pain during or after sexual intercourse (dyspareunia)',
    description: 'Track frequency and severity. Discuss with your gynaecologist if persistent.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Pain with bowel movements or urination',
    description: 'Particularly common during menstruation. Log occurrence dates and severity.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Abdominal bloating and nausea',
    description: 'Note relation to menstrual cycle, foods eaten, and any triggers identified.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Persistent fatigue and low energy',
    description: 'Rate energy levels daily and track correlation with cycle phases.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Lower back and leg pain',
    description: 'Document location, intensity, and timing. Note any relief measures that help.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  }, {
    name: 'Infertility or difficulty conceiving',
    description: 'Endometriosis affects up to 50% of women with infertility. Seek specialist advice early.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.symptoms
  },
  // Preventive Measures
  {
    name: 'Track menstrual cycle and symptoms daily',
    description: 'Use a diary or app to log pain levels, flow, mood, and other symptoms each day.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Schedule regular gynaecological check-ups',
    description: 'Aim for at least one appointment every 6–12 months, or as advised by your doctor.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Discuss hormonal management with your doctor',
    description: 'Hormonal therapies (e.g., combined oral contraceptives, progestins, GnRH analogues) can reduce lesion activity and pain.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Practice stress-reduction techniques',
    description: 'Mindfulness, meditation, and deep breathing exercises can help lower cortisol and reduce inflammation.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Maintain a healthy body weight',
    description: 'Excess body fat can increase oestrogen levels, potentially worsening endometriosis.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Avoid inflammatory foods',
    description: 'Minimise trans fats, processed foods, and red meat which can promote inflammation.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Seek early medical attention for unusual symptoms',
    description: 'Early diagnosis and treatment can help slow disease progression and preserve fertility.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  }, {
    name: 'Connect with a support group',
    description: 'Peer support can improve emotional wellbeing. Look for local or online endometriosis communities.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.goals
  },
  // Diet and Exercise Plan
  {
    name: 'Eat anti-inflammatory foods daily',
    description: 'Include fatty fish (salmon, mackerel), berries, leafy greens, turmeric, and ginger in your meals.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Increase fibre intake',
    description: 'Aim for 25–35 g/day from vegetables, legumes, and whole grains to support gut health and oestrogen clearance.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Reduce red meat and processed foods',
    description: 'Studies link high red meat consumption to increased endometriosis risk. Substitute with plant proteins and fish.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Limit caffeine and alcohol',
    description: 'Both can increase oestrogen levels and worsen inflammation. Aim for fewer than 1 caffeinated drink per day.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Stay hydrated (8–10 glasses of water daily)',
    description: 'Adequate hydration supports detoxification and reduces bloating.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Practise gentle yoga and stretching',
    description: 'Yoga poses targeting the hips and pelvis can relieve pain and improve flexibility. Aim for 3× per week.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Low-impact cardio exercise',
    description: 'Walking, swimming, or cycling for 30 minutes/day helps reduce oestrogen, ease pain, and improve mood.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  }, {
    name: 'Supplement with omega-3 fatty acids',
    description: 'Omega-3s (fish oil) have anti-inflammatory effects that may reduce endometriosis-related pain. Consult your doctor before starting.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.objectives
  },
  // Other Notes
  {
    name: 'Daily pain level log',
    description: 'Rate pain on a scale of 1–10 each day. Note location, duration, and any relief measures used.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Medication and supplement tracker',
    description: 'Record all medications, supplements, dosages, and any side effects experienced.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Medical appointments diary',
    description: 'Log appointment dates, doctors seen, diagnoses, and recommended next steps.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Healthcare provider contact list',
    description: 'Keep a list of your gynaecologist, GP, specialist, and emergency contacts with phone numbers.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Symptom trigger journal',
    description: 'Identify and record foods, activities, stress events, or environmental factors that worsen symptoms.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Mental health and emotional wellbeing notes',
    description: 'Track mood, anxiety, and emotional state daily. Note any correlation with physical symptoms or cycle phases.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }, {
    name: 'Emergency contacts and care plan',
    description: 'Document who to call in a pain crisis, your preferred hospital, and your current treatment plan summary.',
    type: _enums_idea_type_enum__WEBPACK_IMPORTED_MODULE_0__.IdeaType.achievements
  }]
}];

/***/ },

/***/ 9439
/*!*****************************************************!*\
  !*** ./src/app/services/board/board.api.service.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardAPIService: () => (/* binding */ BoardAPIService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _supabase_supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../supabase/supabase.service */ 867);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);





class BoardAPIService {
  constructor() {
    this.supabaseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService);
    this.toastRService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService);
  }
  //TODO - Convert promises to observables
  addBoard(boardData) {
    var _this = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let user = yield _this.supabaseService.getUser();
        let {
          data,
          error
        } = yield _this.supabaseService.supabase.from('boards').insert({
          name: boardData.name,
          description: boardData.description,
          user_id: user.id,
          created_at: new Date().toISOString()
        });
        if (data) {
          console.log('Board added:', data);
        }
        if (error) {
          throw error;
        }
        _this.toastRService.success(`Board ${boardData.name} added successfully`);
        return true;
      } catch (error) {
        _this.toastRService.error(`Failed to add board : ${error.message}`);
      }
    })();
  }
  getBoards() {
    var _this2 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let user = yield _this2.supabaseService.getUser();
        let {
          data: boards,
          error
        } = yield _this2.supabaseService.supabase.from('boards').select('*').eq('user_id', user.id);
        if (error) {
          throw error;
        }
        if (boards) {
          return boards;
        }
      } catch (error) {}
    })();
  }
  deleteBoard(boardId) {
    var _this3 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Delete all tasks for this board first
        const {
          error: tasksError
        } = yield _this3.supabaseService.supabase.from('tasks').delete().eq('board_id', boardId);
        if (tasksError) {
          throw tasksError;
        }
        const {
          error
        } = yield _this3.supabaseService.supabase.from('boards').delete().eq('id', boardId);
        if (error) {
          throw error;
        }
        _this3.toastRService.success('Board deleted successfully');
        return true;
      } catch (error) {
        _this3.toastRService.error(`Failed to delete board: ${error?.message ?? error}`);
        return false;
      }
    })();
  }
  addBoardFromTemplate(template) {
    var _this4 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this4.supabaseService.getUser();
        const {
          data: boardData,
          error: boardError
        } = yield _this4.supabaseService.supabase.from('boards').insert({
          name: template.name,
          description: template.description,
          user_id: user.id,
          created_at: new Date().toISOString()
        }).select().single();
        if (boardError) {
          throw boardError;
        }
        const board = boardData;
        const taskRows = template.tasks.map(task => ({
          name: task.name,
          description: task.description,
          type: task.type,
          completion_status: 0,
          user_id: user.id,
          board_id: board.id
        }));
        const {
          error: tasksError
        } = yield _this4.supabaseService.supabase.from('tasks').insert(taskRows);
        if (tasksError) {
          throw tasksError;
        }
        _this4.toastRService.success(`Board "${template.name}" created from template`);
        return true;
      } catch (error) {
        _this4.toastRService.error(`Failed to create board from template: ${error.message}`);
        return false;
      }
    })();
  }
  editBoard(boardData) {
    var _this5 = this;
    return (0,_home_runner_work_LifePlanner_LifePlanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let {
          data,
          error
        } = yield _this5.supabaseService.supabase.from('boards').update({
          name: boardData.name,
          description: boardData.description,
          user_id: boardData.user_id
        }).eq('id', boardData.id).select('*').limit(1).single();
        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        return false;
      }
    })();
  }
  static {
    this.ɵfac = function BoardAPIService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoardAPIService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoardAPIService,
      factory: BoardAPIService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9654
/*!************************************************************************!*\
  !*** ./src/app/views/email/reset-password/reset-password.component.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utility/utility.service */ 7760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 5326);














function ResetPasswordComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("password"));
  }
}
function ResetPasswordComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("confirmPassword"));
  }
}
function ResetPasswordComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class ResetPasswordComponent {
  constructor() {
    this.hide = true;
  }
  ngOnInit() {
    this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8)]),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])
    }, {
      validators: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService.confirmPasswordValidator
    });
  }
  getErrorMessage(controlName) {
    const control = this.resetPasswordForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters';
    }
    return '';
  }
  confirmPassword() {
    if (this.resetPasswordForm.valid) {
      // TODO: wire up to auth service
    }
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ResetPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 27,
      vars: 13,
      consts: [[1, "reset-password-container"], [1, "card", "reset-password-form"], [1, "app-name", "has-gradient-text"], [1, "reset-password-title"], [1, "reset-form", 3, "submit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "required", "", 3, "type"], [1, "password-unmatch-error"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "standard-button-height", 3, "disabled"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "LifePlanner");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Reset Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function ResetPasswordComponent_Template_form_submit_6_listener() {
            return ctx.confirmPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "New password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_11_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](14, ResetPasswordComponent_Conditional_14_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field", 5)(16, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Confirm new password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_19_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](22, ResetPasswordComponent_Conditional_22_Template, 2, 1, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](23, ResetPasswordComponent_Conditional_23_Template, 2, 0, "mat-error", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Confirm password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.resetPasswordForm.controls["password"].invalid && ctx.resetPasswordForm.controls["password"].touched ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.resetPasswordForm.controls["confirmPassword"].invalid && ctx.resetPasswordForm.controls["confirmPassword"].touched ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((ctx.resetPasswordForm.errors == null ? null : ctx.resetPasswordForm.errors["PasswordNoMatch"]) && ctx.resetPasswordForm.controls["confirmPassword"].value ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.resetPasswordForm.invalid);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: [".reset-password-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 380px;\n  background-color: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(249, 208, 122, 0.1);\n  padding: 2.5em 2em;\n  border-radius: 1.5em;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .reset-password-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 1rem;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .reset-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  gap: 0.5rem;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .password-unmatch-error[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #F9D07A;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem 0;\n}\n.reset-password-container[_ngcontent-%COMP%]   .reset-password-form[_ngcontent-%COMP%]   .standard-button-height[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFJSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUhOO0FBTUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpOIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0LXBhc3N3b3JkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnJlc2V0LXBhc3N3b3JkLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ5LCAyMDgsIDEyMiwgMC4xKTtcbiAgICBwYWRkaW5nOiAyLjVlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XG5cbiAgICAucmVzZXQtcGFzc3dvcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLnJlc2V0LWZvcm0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLmZ1bGwtd2lkdGgge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnBhc3N3b3JkLXVubWF0Y2gtZXJyb3Ige1xuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogI0Y5RDA3QTtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cblxuICAgIC5zdGFuZGFyZC1idXR0b24taGVpZ2h0IHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 9722
/*!**********************************************************************!*\
  !*** ./src/app/views/email/email-confirm/email-confirm.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailConfirmComponent: () => (/* binding */ EmailConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/register/register.service */ 7309);



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
      return new (__ngFactoryType__ || EmailConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_register_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailConfirmComponent,
      selectors: [["app-email-confirm"]],
      decls: 4,
      vars: 0,
      consts: [[1, "confirm-email-container"], [1, "email-confirm-text"]],
      template: function EmailConfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your email has been confirmed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()();
        }
      },
      styles: [".confirm-email-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.confirm-email-container[_ngcontent-%COMP%]   .email-confirm-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(249, 208, 122, 0.1);\n  color: #fff;\n  border-radius: 12px;\n  height: 30%;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZW1haWwvZW1haWwtY29uZmlybS9lbWFpbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5jb25maXJtLWVtYWlsLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTsgIFxuXG4gICAgICAuZW1haWwtY29uZmlybS10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0OSwgMjA4LCAxMjIsIDAuMSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map