/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    margin: 0;
    font-family: 'Mina', sans-serif;
}

#content {
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 100px auto;
}

/* header styles */
.header {
    background-color: rgb(127, 162, 173);
    width: 100vw;
    height: 100px;
    margin: 0;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
}

h1 {
    margin: 0;
    color: rgb(13, 58, 72);
    font-size: 3rem;
    margin: 0 20px;
}

/* sidebar styles */
.sidebar {
    background-color: rgb(208, 231, 237);
    height: 100vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 50px 20px 20px 50px;
    box-sizing: border-box;
    grid-column: 1 / 2;
}

h2 {
    color: rgb(13, 58, 72);
    margin: 10px;
    font-size: 2rem;
    position: relative;
    right: 30px;
}

.add-project-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color:rgb(127, 162, 173);
    font-size: 1.2rem;
    font-weight: 700;
}

.project-btn-div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.create-icon {
    height: 36px;
    width: 36px;
    background-color: rgb(127, 162, 173);
    border: none;
}

.project-names {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 8px 0;
    color:rgb(13, 58, 72);
}

/* project popup styles */
.project-popup {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.add-project-btn {
    align-self: flex-end;
    background-color: rgb(127, 162, 173);
    font-family: 'Mina', sans-serif;
    color:rgb(13, 58, 72);
    font-size: 15px;
    font-weight: 400;
    border: 1px solid rgb(13, 58, 72);
    border-radius: 15px;
    width: 50px;
    height: 15px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* main styles */
.main {
    background-color: rgb(13, 58, 72);
    padding: 30px 50px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.main-title-div {
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 0;
}

.edit-div {
    display: flex;
    gap: 10px;
}

.edit-input {
    border: none;
    border-bottom: 1px solid rgb(208, 231, 237);
    height: 2.5rem;
    font-family: 'Mina', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    background-color:rgb(13, 58, 72);
    color:rgb(208, 231, 237);
}

.done-btn {
    background-color: rgb(127, 162, 173);
    color:rgb(13, 58, 72);
    font-family: 'Mina', sans-serif;
    font-size: 15px;
    font-weight: 400;
    border: 2px solid rgb(208, 231, 237);
    border-radius: 15px;
    width: 70px;
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-title {
    color: rgb(208, 231, 237);
    font-size: 2.5rem;
    margin: 0;
}

.project-due-date {
    color:rgb(208, 231, 237);
    font-size: 1.5rem;
}

.edit-btn {
    background-color: rgb(127, 162, 173);
    color:rgb(13, 58, 72);
    font-family: 'Mina', sans-serif;
    font-size: 15px;
    font-weight: 400;
    border: 2px solid rgb(208, 231, 237);
    border-radius: 15px;
    width: 70px;
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-btn {
    background-color: rgb(127, 162, 173);
    color:rgb(13, 58, 72);
    font-family: 'Mina', sans-serif;
    font-size: 15px;
    font-weight: 400;
    border: 2px solid rgb(208, 231, 237);
    border-radius: 15px;
    width: 70px;
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-task-div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    margin-left: 30px;
    margin-bottom: 30px;
}

.add-task-btn {
    background-color: rgb(13, 58, 72);
    border: none;
    color:rgb(127, 162, 173);
    font-size: 1.3rem;
    font-weight: 700;
}

/* project styles */
.main-content {
    display: flex;
    gap: 50px;
}

.project-card {
    width: 700px;
    height: 400px;
    background-color: rgb(127, 162, 173);
    border: 10px solid rgb(208, 231, 237);
    border-radius: 20px;
}

.task {
    border-bottom: 2px solid rgb(208, 231, 237);
    color:rgb(13, 58, 72);
    padding: 15px;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-due-div {
    display: flex;
    align-items: center;
    gap: 15px;
}

.task-title {
    font-weight: 400;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
}

.task-desc {
    margin: 0;
    margin-left: 10px;
}

.task-due-date {
    margin: 0;
}

/* task popup styles */
.task-popup {
    background-color: rgb(208, 231, 237);
    color: rgb(13, 58, 72);
    width: 250px;
    height: 400px;
    padding: 20px;
    box-sizing: border-box;
    border: 5px solid rgb(127, 162, 173);
    border-radius: 20px;
}

.popup-title {
    font-weight: 400;
    font-size: 1.3rem;
    margin: 0;
    margin-bottom: 10px;
}

.task-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.task-div {
    display: flex;
    flex-direction: column;
}

.form-input {
    border: none;
    border-bottom: 1px solid rgb(13, 58, 72);
    height: 1.3rem;
    font-family: 'Mina', sans-serif;
    background-color:rgb(208, 231, 237);
    color:rgb(13, 58, 72);
}

.radio-container {
    display: flex;
    justify-content: space-between;
}

.radio-div {
    display: flex;
    align-items: center;
    gap: 5px;
}

.red-label {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background-color: red; 
}

.orange-label {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background-color: orange; 
}

.yellow-label {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background-color: yellow;
}

.submit-task {
    align-self: center;
    background-color: rgb(13, 58, 72);
    font-family: 'Mina', sans-serif;
    color:rgb(208, 231, 237);
    border: 2px solid rgb(127, 162, 173);
    border-radius: 15px;
    width: 80px;
    height: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    margin: 0;\n    font-family: 'Mina', sans-serif;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 100px auto;\n}\n\n/* header styles */\n.header {\n    background-color: rgb(127, 162, 173);\n    width: 100vw;\n    height: 100px;\n    margin: 0;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    margin: 0;\n    color: rgb(13, 58, 72);\n    font-size: 3rem;\n    margin: 0 20px;\n}\n\n/* sidebar styles */\n.sidebar {\n    background-color: rgb(208, 231, 237);\n    height: 100vh;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 20px 20px 50px;\n    box-sizing: border-box;\n    grid-column: 1 / 2;\n}\n\nh2 {\n    color: rgb(13, 58, 72);\n    margin: 10px;\n    font-size: 2rem;\n    position: relative;\n    right: 30px;\n}\n\n.add-project-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    color:rgb(127, 162, 173);\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.project-btn-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.create-icon {\n    height: 36px;\n    width: 36px;\n    background-color: rgb(127, 162, 173);\n    border: none;\n}\n\n.project-names {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 8px 0;\n    color:rgb(13, 58, 72);\n}\n\n/* project popup styles */\n.project-popup {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-project-btn {\n    align-self: flex-end;\n    background-color: rgb(127, 162, 173);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    font-size: 15px;\n    font-weight: 400;\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 50px;\n    height: 15px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* main styles */\n.main {\n    background-color: rgb(13, 58, 72);\n    padding: 30px 50px;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.main-title-div {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    margin: 0;\n}\n\n.edit-div {\n    display: flex;\n    gap: 10px;\n}\n\n.edit-input {\n    border: none;\n    border-bottom: 1px solid rgb(208, 231, 237);\n    height: 2.5rem;\n    font-family: 'Mina', sans-serif;\n    font-size: 2.5rem;\n    font-weight: 700;\n    background-color:rgb(13, 58, 72);\n    color:rgb(208, 231, 237);\n}\n\n.done-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main-title {\n    color: rgb(208, 231, 237);\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.project-due-date {\n    color:rgb(208, 231, 237);\n    font-size: 1.5rem;\n}\n\n.edit-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-task-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0;\n    margin-left: 30px;\n    margin-bottom: 30px;\n}\n\n.add-task-btn {\n    background-color: rgb(13, 58, 72);\n    border: none;\n    color:rgb(127, 162, 173);\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n/* project styles */\n.main-content {\n    display: flex;\n    gap: 50px;\n}\n\n.project-card {\n    width: 700px;\n    height: 400px;\n    background-color: rgb(127, 162, 173);\n    border: 10px solid rgb(208, 231, 237);\n    border-radius: 20px;\n}\n\n.task {\n    border-bottom: 2px solid rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n    padding: 15px;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-due-div {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    padding: 0;\n}\n\n.task-desc {\n    margin: 0;\n    margin-left: 10px;\n}\n\n.task-due-date {\n    margin: 0;\n}\n\n/* task popup styles */\n.task-popup {\n    background-color: rgb(208, 231, 237);\n    color: rgb(13, 58, 72);\n    width: 250px;\n    height: 400px;\n    padding: 20px;\n    box-sizing: border-box;\n    border: 5px solid rgb(127, 162, 173);\n    border-radius: 20px;\n}\n\n.popup-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    margin-bottom: 10px;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-input {\n    border: none;\n    border-bottom: 1px solid rgb(13, 58, 72);\n    height: 1.3rem;\n    font-family: 'Mina', sans-serif;\n    background-color:rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n}\n\n.radio-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.radio-div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.red-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: red; \n}\n\n.orange-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: orange; \n}\n\n.yellow-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: yellow;\n}\n\n.submit-task {\n    align-self: center;\n    background-color: rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    color:rgb(208, 231, 237);\n    border: 2px solid rgb(127, 162, 173);\n    border-radius: 15px;\n    width: 80px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ (() => {

const addProjectBtn = document.querySelector('.add-project');

addProjectBtn.addEventListener('click', () => {
    const addProjectDiv = document.querySelector('.add-project-div');

    const popup = document.createElement('div');
    popup.classList.add('project-popup');
    addProjectDiv.appendChild(popup);

    const inputLabel = document.createElement('label');
    inputLabel.classList.add('project-input-label');
    inputLabel.textContent = 'Project Name:';
    popup.appendChild(inputLabel);

    const input = document.createElement('input');
    input.classList.add('form-input');
    popup.appendChild(input);

    const submit = document.createElement('btn');
    submit.classList.add('add-project-btn');
    submit.textContent = 'Add';
    popup.appendChild(submit);

    submit.addEventListener('click', addProject);

    function addProject() {
        const sidebar = document.querySelector('.sidebar');

        const project = document.createElement('p');
        project.classList.add('project-names');
        project.textContent = input.value;
        sidebar.appendChild(project);

        // create individual project card for every new project and give it a unique class?
        // const mainContent = document.querySelector('.main-content');
        // const projectCard = document.createElement('div');
        // projectCard.classList.add('project-card');
        // mainContent.appendChild(projectCard);

        // close popup once add button is pressed.
        const popup = document.querySelector('.project-popup');
        popup.classList.add('hidden');
        return;
    }
});

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPopup.js */ "./src/taskPopup.js");


// add checkbox to check when task is done
// task should not be added if inputs are empty
// add an edit and a delete button to each task

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', () => {
    const popup = document.querySelector('.task-popup');
    if (popup) {
        return;
    } else {
        (0,_taskPopup_js__WEBPACK_IMPORTED_MODULE_0__.taskPopup)();
    }

    // button should not be allowed to be pressed if inputs are empty.
    const submitTask = document.querySelector('.submit-task');
    submitTask.addEventListener('click', createTask);

    // const taskForm = document.querySelector('.task-form');
    // taskForm.addEventListener('submit', (e) => {
    //     console.log('hello there');
    //     createTask();
    //     e.preventDefault();
    // });
});

function createTask() {
    const projectCard = document.querySelector('.project-card');    
        const task = document.createElement('div');
        task.classList.add('task');
        projectCard.appendChild(task);

        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');
        task.appendChild(taskHeader);

        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('task-title');
        const taskInput = document.querySelector('.task-input');
        taskTitle.textContent = taskInput.value;
        taskHeader.appendChild(taskTitle);

        const taskDueDiv = document.createElement('div');
        taskDueDiv.classList.add('task-due-div');
        taskHeader.appendChild(taskDueDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        const descInput = document.querySelector('.desc-input');
        taskDesc.textContent = descInput.value;
        task.appendChild(taskDesc);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        const dateInput = document.querySelector('.date-input');
        taskDueDate.textContent = dateInput.value;
        taskDueDiv.appendChild(taskDueDate);

        const radioInput = document.querySelector("input[type='radio']:checked");
        if (radioInput.value == 'red') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('red-label');
            taskDueDiv.appendChild(taskPriority);
        } else if (radioInput.value == 'orange') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('orange-label');
            taskDueDiv.appendChild(taskPriority);
        } else if (radioInput.value == 'yellow') {
            const taskPriority = document.createElement('div');
            taskPriority.classList.add('yellow-label')
            taskDueDiv.appendChild(taskPriority);
        }

        // checkmark creation for when task is finished below
        // const check = document.createElement('input');
        // check.classList.add('task-check');
        // check.type = 'checkbox';
        // task.appendChild(check);

        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';
}

/***/ }),

/***/ "./src/edit-delete.js":
/*!****************************!*\
  !*** ./src/edit-delete.js ***!
  \****************************/
/***/ (() => {

const editProject = document.querySelector('.edit-btn');
editProject.addEventListener('click', () => {
    const mainTitleDiv = document.querySelector('.main-title-div');

    const mainTitle = document.querySelector('.main-title');
    mainTitle.classList.add('hidden');

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-div');
    mainTitleDiv.prepend(editDiv);

    // put current title name in input to edit.
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editDiv.appendChild(editInput);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.textContent = 'Done';
    editDiv.appendChild(doneBtn);

    doneBtn.addEventListener('click', () => {
        editDiv.classList.add('hidden');

        mainTitle.classList.remove('hidden');
        mainTitle.textContent = editInput.value;
        return;

        // we also want it to update the name of the project in the sidebar as well.
    })
})

const deleteProject = document.querySelector('.delete-btn');


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

// add in icons

const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'To-do List';
header.appendChild(headerTitle);

const sidebarTitle = document.createElement('h2');
sidebarTitle.textContent = 'Projects';
sidebar.appendChild(sidebarTitle);

const addProjectDiv = document.createElement('div');
addProjectDiv.classList.add('add-project-div');
sidebar.appendChild(addProjectDiv);

const projectBtnDiv = document.createElement('div');
projectBtnDiv.classList.add('project-btn-div');
addProjectDiv.appendChild(projectBtnDiv);

const createIcon = document.createElement('img');
createIcon.classList.add('create-icon');
// createIcon.src = getCreateIcon;
projectBtnDiv.appendChild(createIcon);

const addProject = document.createElement('p');
addProject.classList.add('add-project');
addProject.textContent = 'Add Project';
projectBtnDiv.appendChild(addProject);

const firstProject = document.createElement('p');
firstProject.classList.add('project-names');
firstProject.textContent = 'First Project';
sidebar.appendChild(firstProject);

const mainTitleDiv = document.createElement('div');
mainTitleDiv.classList.add('main-title-div');
main.appendChild(mainTitleDiv);

const mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = 'First Project';
mainTitleDiv.appendChild(mainTitle);

const projectDueDate = document.createElement('p');
projectDueDate.classList.add('project-due-date');
projectDueDate.textContent = '12/29';
mainTitleDiv.appendChild(projectDueDate);

const editBtn = document.createElement('button');
editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit';
mainTitleDiv.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = 'Delete';
mainTitleDiv.appendChild(deleteBtn);

const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('add-task-div');
main.appendChild(addTaskDiv);

const addTaskIcon = document.createElement('img');
addTaskIcon.classList.add('create-icon');
addTaskDiv.appendChild(addTaskIcon);

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = 'Add Task';
addTaskDiv.appendChild(addTaskBtn);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
main.appendChild(mainContent);

const projectCard = document.createElement('div');
projectCard.classList.add('project-card');
mainContent.appendChild(projectCard);

/***/ }),

/***/ "./src/taskPopup.js":
/*!**************************!*\
  !*** ./src/taskPopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskPopup: () => (/* binding */ taskPopup)
/* harmony export */ });
const taskPopup = () => {
    const mainContent = document.querySelector('.main-content');

const popup = document.createElement('div');
popup.classList.add('task-popup');
mainContent.appendChild(popup);

const popupTitle = document.createElement('h3');
popupTitle.classList.add('popup-title');
popupTitle.textContent = 'Add Task';
popup.appendChild(popupTitle);

const taskForm = document.createElement('form');
taskForm.classList.add('task-form');
taskForm.setAttribute('action', '/');
popup.appendChild(taskForm);

const taskDiv = document.createElement('div');
taskDiv.classList.add('task-div');
taskForm.appendChild(taskDiv);

const task = document.createElement('label');
task.classList.add('task-label');
task.textContent = 'Task:';
taskDiv.appendChild(task);

const taskInput = document.createElement('input');
taskInput.classList.add('form-input');
taskInput.classList.add('task-input');
taskInput.type = 'text';
taskDiv.appendChild(taskInput);

const descDiv = document.createElement('div');
descDiv.classList.add('task-div');
taskForm.appendChild(descDiv);

const desc = document.createElement('label');
desc.classList.add('task-label');
desc.textContent = 'Description:';
descDiv.appendChild(desc);

const descInput = document.createElement('input');
descInput.classList.add('form-input');
descInput.classList.add('desc-input');
descInput.type = 'text';
descDiv.appendChild(descInput);

const dateDiv = document.createElement('div');
dateDiv.classList.add('task-div');
taskForm.appendChild(dateDiv);

const date = document.createElement('label');
date.classList.add('task-label');
date.textContent = 'Date:';
dateDiv.appendChild(date);

const dateInput = document.createElement('input');
dateInput.classList.add('form-input');
dateInput.classList.add('date-input');
dateInput.type = 'date';
dateDiv.appendChild(dateInput);

const priorityDiv = document.createElement('div');
priorityDiv.classList.add('task-div');
taskForm.appendChild(priorityDiv);

const priority = document.createElement('label');
priority.classList.add('task-label');
priority.textContent = 'Priority:';
priorityDiv.appendChild(priority);

const radioContainer = document.createElement('div');
radioContainer.classList.add('radio-container');
priorityDiv.appendChild(radioContainer);

const redDiv = document.createElement('div');
redDiv.classList.add('radio-div');
radioContainer.appendChild(redDiv);

const redInput = document.createElement('input');
redInput.classList.add('radio');
redInput.setAttribute('name', 'radio-input');
redInput.setAttribute('value', 'red');
redInput.type = 'radio';
redDiv.appendChild(redInput);

const red = document.createElement('div');
red.classList.add('red-label');
redDiv.appendChild(red);

const orangeDiv = document.createElement('div');
orangeDiv.classList.add('radio-div');
radioContainer.appendChild(orangeDiv);

const orangeInput = document.createElement('input');
orangeInput.classList.add('radio');
orangeInput.setAttribute('name', 'radio-input');
orangeInput.setAttribute('value', 'orange');
orangeInput.type = 'radio';
orangeDiv.appendChild(orangeInput);

const orange = document.createElement('div');
orange.classList.add('orange-label');
orangeDiv.appendChild(orange);

const yellowDiv = document.createElement('div');
yellowDiv.classList.add('radio-div');
radioContainer.appendChild(yellowDiv);

const yellowInput = document.createElement('input');
yellowInput.classList.add('radio');
yellowInput.setAttribute('name', 'radio-input');
yellowInput.setAttribute('value', 'yellow');
yellowInput.type = 'radio';
yellowDiv.appendChild(yellowInput);

const yellow = document.createElement('div');
yellow.classList.add('yellow-label');
yellowDiv.appendChild(yellow);

const addBtn = document.createElement('btn');
addBtn.classList.add('submit-task');
addBtn.textContent = 'Add';
addBtn.setAttribute('type', 'submit');
taskForm.appendChild(addBtn);
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_createProject_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-delete.js */ "./src/edit-delete.js");
/* harmony import */ var _edit_delete_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_edit_delete_js__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw4RUFBOEUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxh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QUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVDd0M7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsd0RBQVM7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDN0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUNBO0FBQ007QUFDRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5jc3M/YTY3MiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza1BvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XG59XG5cbi8qIGhlYWRlciBzdHlsZXMgKi9cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi8qIHNpZGViYXIgc3R5bGVzICovXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCA1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG5oMiB7XG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMzBweDtcbn1cblxuLmFkZC1wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2plY3QtYnRuLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNyZWF0ZS1pY29uIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3QtbmFtZXMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG59XG5cbi8qIHByb2plY3QgcG9wdXAgc3R5bGVzICovXG4ucHJvamVjdC1wb3B1cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBtYWluIHN0eWxlcyAqL1xuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLm1haW4tdGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmVkaXQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmVkaXQtaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XG59XG5cbi5kb25lLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LWR1ZS1kYXRlIHtcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5lZGl0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLXRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBwcm9qZWN0IHN0eWxlcyAqL1xuLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YXNrIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udGFzay1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWR1ZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4udGFzay1kZXNjIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50YXNrLWR1ZS1kYXRlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIHRhc2sgcG9wdXAgc3R5bGVzICovXG4udGFzay1wb3B1cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucG9wdXAtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YXNrLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi50YXNrLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgaGVpZ2h0OiAxLjNyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG59XG5cbi5yYWRpby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmFkaW8tZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5yZWQtbGFiZWwge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXG59XG5cbi5vcmFuZ2UtbGFiZWwge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgXG59XG5cbi55ZWxsb3ctbGFiZWwge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLnN1Ym1pdC10YXNrIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNi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QjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xcbn1cXG5cXG4vKiBoZWFkZXIgc3R5bGVzICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLyogc2lkZWJhciBzdHlsZXMgKi9cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCA1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY3JlYXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbmFtZXMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbn1cXG5cXG4vKiBwcm9qZWN0IHBvcHVwIHN0eWxlcyAqL1xcbi5wcm9qZWN0LXBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogbWFpbiBzdHlsZXMgKi9cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLm1haW4tdGl0bGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5lZGl0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmVkaXQtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcXG59XFxuXFxuLmRvbmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICAgIGNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWR1ZS1kYXRlIHtcXG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBwcm9qZWN0IHN0eWxlcyAqL1xcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZHVlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHRhc2sgcG9wdXAgc3R5bGVzICovXFxuLnRhc2stcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcXG4gICAgaGVpZ2h0OiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yYWRpby1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnJlZC1sYWJlbCB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxcbn1cXG5cXG4ub3JhbmdlLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgXFxufVxcblxcbi55ZWxsb3ctbGFiZWwge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3VibWl0LXRhc2sge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1kaXYnKTtcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wb3B1cCcpO1xuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWlucHV0LWxhYmVsJyk7XG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lcycpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGluZGl2aWR1YWwgcHJvamVjdCBjYXJkIGZvciBldmVyeSBuZXcgcHJvamVjdCBhbmQgZ2l2ZSBpdCBhIHVuaXF1ZSBjbGFzcz9cbiAgICAgICAgLy8gY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xuICAgICAgICAvLyBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgLy8gY2xvc2UgcG9wdXAgb25jZSBhZGQgYnV0dG9uIGlzIHByZXNzZWQuXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcG9wdXAnKTtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KTsiLCJpbXBvcnQge3Rhc2tQb3B1cH0gZnJvbSAnLi90YXNrUG9wdXAuanMnO1xuXG4vLyBhZGQgY2hlY2tib3ggdG8gY2hlY2sgd2hlbiB0YXNrIGlzIGRvbmVcbi8vIHRhc2sgc2hvdWxkIG5vdCBiZSBhZGRlZCBpZiBpbnB1dHMgYXJlIGVtcHR5XG4vLyBhZGQgYW4gZWRpdCBhbmQgYSBkZWxldGUgYnV0dG9uIHRvIGVhY2ggdGFza1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXBvcHVwJyk7XG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrUG9wdXAoKTtcbiAgICB9XG5cbiAgICAvLyBidXR0b24gc2hvdWxkIG5vdCBiZSBhbGxvd2VkIHRvIGJlIHByZXNzZWQgaWYgaW5wdXRzIGFyZSBlbXB0eS5cbiAgICBjb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJyk7XG4gICAgc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2spO1xuXG4gICAgLy8gY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gICAgLy8gdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2hlbGxvIHRoZXJlJyk7XG4gICAgLy8gICAgIGNyZWF0ZVRhc2soKTtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJyk7ICAgIFxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEdWVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGl2Jyk7XG4gICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURpdik7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzYy1pbnB1dCcpO1xuICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5wdXQnKTtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkXCIpO1xuICAgICAgICBpZiAocmFkaW9JbnB1dC52YWx1ZSA9PSAncmVkJykge1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncmVkLWxhYmVsJyk7XG4gICAgICAgICAgICB0YXNrRHVlRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFkaW9JbnB1dC52YWx1ZSA9PSAnb3JhbmdlJykge1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnb3JhbmdlLWxhYmVsJyk7XG4gICAgICAgICAgICB0YXNrRHVlRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFkaW9JbnB1dC52YWx1ZSA9PSAneWVsbG93Jykge1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgneWVsbG93LWxhYmVsJylcbiAgICAgICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrbWFyayBjcmVhdGlvbiBmb3Igd2hlbiB0YXNrIGlzIGZpbmlzaGVkIGJlbG93XG4gICAgICAgIC8vIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgLy8gY2hlY2suY2xhc3NMaXN0LmFkZCgndGFzay1jaGVjaycpO1xuICAgICAgICAvLyBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgLy8gdGFzay5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbn0iLCJjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUtZGl2Jyk7XG5cbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGl2Jyk7XG4gICAgbWFpblRpdGxlRGl2LnByZXBlbmQoZWRpdERpdik7XG5cbiAgICAvLyBwdXQgY3VycmVudCB0aXRsZSBuYW1lIGluIGlucHV0IHRvIGVkaXQuXG4gICAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdElucHV0KTtcblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoJ2RvbmUtYnRuJyk7XG4gICAgZG9uZUJ0bi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuXG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICBtYWluVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IGVkaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHdlIGFsc28gd2FudCBpdCB0byB1cGRhdGUgdGhlIG5hbWUgb2YgdGhlIHByb2plY3QgaW4gdGhlIHNpZGViYXIgYXMgd2VsbC5cbiAgICB9KVxufSlcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7XG4iLCIvLyBhZGQgaW4gaWNvbnNcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG5jb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbnNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKTtcblxuY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1kaXYnKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG5cbmNvbnN0IHByb2plY3RCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tZGl2Jyk7XG5hZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RCdG5EaXYpO1xuXG5jb25zdCBjcmVhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jcmVhdGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1pY29uJyk7XG4vLyBjcmVhdGVJY29uLnNyYyA9IGdldENyZWF0ZUljb247XG5wcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUljb24pO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5wcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5jb25zdCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5maXJzdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lcycpO1xuZmlyc3RQcm9qZWN0LnRleHRDb250ZW50ID0gJ0ZpcnN0IFByb2plY3QnO1xuc2lkZWJhci5hcHBlbmRDaGlsZChmaXJzdFByb2plY3QpO1xuXG5jb25zdCBtYWluVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlLWRpdicpO1xubWFpbi5hcHBlbmRDaGlsZChtYWluVGl0bGVEaXYpO1xuXG5jb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcbm1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdGaXJzdCBQcm9qZWN0Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG5jb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnByb2plY3REdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZHVlLWRhdGUnKTtcbnByb2plY3REdWVEYXRlLnRleHRDb250ZW50ID0gJzEyLzI5Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG5cbmNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbmVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5tYWluVGl0bGVEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbmRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xubWFpblRpdGxlRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbmNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG5tYWluLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG5jb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYWRkVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWljb24nKTtcbmFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0ljb24pO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5hZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpOyIsImNvbnN0IHRhc2tQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcG9wdXAnKTtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5wb3B1cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLXRpdGxlJyk7XG5wb3B1cFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbnBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xudGFza0Zvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnLycpO1xucG9wdXAuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG5jb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG50YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbnRhc2sudGV4dENvbnRlbnQgPSAnVGFzazonO1xudGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrKTtcblxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG50YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB1dCcpO1xudGFza0lucHV0LnR5cGUgPSAndGV4dCc7XG50YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbmNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlc2NEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xuXG5jb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xuZGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjKTtcblxuY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5kZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVzYy1pbnB1dCcpO1xuZGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG5kZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbmNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xuZGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOic7XG5kYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbmRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XG5kYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbmRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbnByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbmNvbnN0IHJhZGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyYWRpby1jb250YWluZXInKTtcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKTtcblxuY29uc3QgcmVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yZWREaXYuY2xhc3NMaXN0LmFkZCgncmFkaW8tZGl2Jyk7XG5yYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZWREaXYpO1xuXG5jb25zdCByZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yZWRJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpO1xucmVkSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3JhZGlvLWlucHV0Jyk7XG5yZWRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3JlZCcpO1xucmVkSW5wdXQudHlwZSA9ICdyYWRpbyc7XG5yZWREaXYuYXBwZW5kQ2hpbGQocmVkSW5wdXQpO1xuXG5jb25zdCByZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJlZC5jbGFzc0xpc3QuYWRkKCdyZWQtbGFiZWwnKTtcbnJlZERpdi5hcHBlbmRDaGlsZChyZWQpO1xuXG5jb25zdCBvcmFuZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm9yYW5nZURpdi5jbGFzc0xpc3QuYWRkKCdyYWRpby1kaXYnKTtcbnJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKG9yYW5nZURpdik7XG5cbmNvbnN0IG9yYW5nZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbm9yYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvJyk7XG5vcmFuZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmFkaW8taW5wdXQnKTtcbm9yYW5nZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnb3JhbmdlJyk7XG5vcmFuZ2VJbnB1dC50eXBlID0gJ3JhZGlvJztcbm9yYW5nZURpdi5hcHBlbmRDaGlsZChvcmFuZ2VJbnB1dCk7XG5cbmNvbnN0IG9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3JhbmdlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZS1sYWJlbCcpO1xub3JhbmdlRGl2LmFwcGVuZENoaWxkKG9yYW5nZSk7XG5cbmNvbnN0IHllbGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xueWVsbG93RGl2LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWRpdicpO1xucmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQoeWVsbG93RGl2KTtcblxuY29uc3QgeWVsbG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueWVsbG93SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8nKTtcbnllbGxvd0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdyYWRpby1pbnB1dCcpO1xueWVsbG93SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICd5ZWxsb3cnKTtcbnllbGxvd0lucHV0LnR5cGUgPSAncmFkaW8nO1xueWVsbG93RGl2LmFwcGVuZENoaWxkKHllbGxvd0lucHV0KTtcblxuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG55ZWxsb3cuY2xhc3NMaXN0LmFkZCgneWVsbG93LWxhYmVsJyk7XG55ZWxsb3dEaXYuYXBwZW5kQ2hpbGQoeWVsbG93KTtcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXRhc2snKTtcbmFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59O1xuXG5leHBvcnQge3Rhc2tQb3B1cH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2FwcC5jc3MnO1xuaW1wb3J0ICcuL2hvbWUuanMnO1xuaW1wb3J0ICcuL2NyZWF0ZVRhc2suanMnO1xuaW1wb3J0ICcuL2NyZWF0ZVByb2plY3QuanMnO1xuaW1wb3J0ICcuL2VkaXQtZGVsZXRlLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=