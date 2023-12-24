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

.main-btns-div {
    display: flex;
    gap: 15px;
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

/* task styles */
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

.task-bottom-div {
    margin: 0;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
}

.task-desc {
    margin: 0;
}

.task-btns-div {
    display: flex;
    gap: 10px;
}

.edit-task-btn {
    background-color: rgb(208, 231, 237);
    font-family: 'Mina', sans-serif;
    color:rgb(13, 58, 72);
    border: 1px solid rgb(13, 58, 72);
    border-radius: 15px;
    width: 60px;
    height: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-task-btn {
    background-color: rgb(208, 231, 237);
    font-family: 'Mina', sans-serif;
    color:rgb(13, 58, 72);
    border: 1px solid rgb(13, 58, 72);
    border-radius: 15px;
    width: 60px;
    height: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
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
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    margin: 0;\n    font-family: 'Mina', sans-serif;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 100px auto;\n}\n\n/* header styles */\n.header {\n    background-color: rgb(127, 162, 173);\n    width: 100vw;\n    height: 100px;\n    margin: 0;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    margin: 0;\n    color: rgb(13, 58, 72);\n    font-size: 3rem;\n    margin: 0 20px;\n}\n\n/* sidebar styles */\n.sidebar {\n    background-color: rgb(208, 231, 237);\n    height: 100vh;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 20px 20px 50px;\n    box-sizing: border-box;\n    grid-column: 1 / 2;\n}\n\nh2 {\n    color: rgb(13, 58, 72);\n    margin: 10px;\n    font-size: 2rem;\n    position: relative;\n    right: 30px;\n}\n\n.add-project-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    color:rgb(127, 162, 173);\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.project-btn-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.create-icon {\n    height: 36px;\n    width: 36px;\n    background-color: rgb(127, 162, 173);\n    border: none;\n}\n\n.project-names {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 8px 0;\n    color:rgb(13, 58, 72);\n}\n\n/* project popup styles */\n.project-popup {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-project-btn {\n    align-self: flex-end;\n    background-color: rgb(127, 162, 173);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    font-size: 15px;\n    font-weight: 400;\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 50px;\n    height: 15px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* main styles */\n.main {\n    background-color: rgb(13, 58, 72);\n    padding: 30px 50px;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.main-title-div {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    margin: 0;\n}\n\n.edit-div {\n    display: flex;\n    gap: 10px;\n}\n\n.edit-input {\n    border: none;\n    border-bottom: 1px solid rgb(208, 231, 237);\n    height: 2.5rem;\n    font-family: 'Mina', sans-serif;\n    font-size: 2.5rem;\n    font-weight: 700;\n    background-color:rgb(13, 58, 72);\n    color:rgb(208, 231, 237);\n}\n\n.done-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main-title {\n    color: rgb(208, 231, 237);\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.project-due-date {\n    color:rgb(208, 231, 237);\n    font-size: 1.5rem;\n}\n\n.main-btns-div {\n    display: flex;\n    gap: 15px;\n}\n\n.edit-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-task-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0;\n    margin-left: 30px;\n    margin-bottom: 30px;\n}\n\n.add-task-btn {\n    background-color: rgb(13, 58, 72);\n    border: none;\n    color:rgb(127, 162, 173);\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n/* project styles */\n.main-content {\n    display: flex;\n    gap: 50px;\n}\n\n.project-card {\n    width: 700px;\n    height: 400px;\n    background-color: rgb(127, 162, 173);\n    border: 10px solid rgb(208, 231, 237);\n    border-radius: 20px;\n}\n\n/* task styles */\n.task {\n    border-bottom: 2px solid rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n    padding: 15px;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-due-div {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    padding: 0;\n}\n\n.task-bottom-div {\n    margin: 0;\n    margin-left: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-desc {\n    margin: 0;\n}\n\n.task-btns-div {\n    display: flex;\n    gap: 10px;\n}\n\n.edit-task-btn {\n    background-color: rgb(208, 231, 237);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 60px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-task-btn {\n    background-color: rgb(208, 231, 237);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 60px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-due-date {\n    margin: 0;\n}\n\n/* task popup styles */\n.task-popup {\n    background-color: rgb(208, 231, 237);\n    color: rgb(13, 58, 72);\n    width: 250px;\n    height: 400px;\n    padding: 20px;\n    box-sizing: border-box;\n    border: 5px solid rgb(127, 162, 173);\n    border-radius: 20px;\n}\n\n.popup-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    margin-bottom: 10px;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-input {\n    border: none;\n    border-bottom: 1px solid rgb(13, 58, 72);\n    height: 1.3rem;\n    font-family: 'Mina', sans-serif;\n    background-color:rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n}\n\n.radio-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.radio-div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.red-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: red; \n}\n\n.orange-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: orange; \n}\n\n.yellow-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: yellow;\n}\n\n.submit-task {\n    align-self: center;\n    background-color: rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    color:rgb(208, 231, 237);\n    border: 2px solid rgb(127, 162, 173);\n    border-radius: 15px;\n    width: 80px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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

        const taskBottomDiv = document.createElement('div');
        taskBottomDiv.classList.add('task-bottom-div');
        task.appendChild(taskBottomDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        const descInput = document.querySelector('.desc-input');
        taskDesc.textContent = descInput.value;
        taskBottomDiv.appendChild(taskDesc);

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

        const btnDiv = document.createElement('div');
        btnDiv.classList.add('task-btns-div');
        taskBottomDiv.appendChild(btnDiv);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-task-btn');
        editBtn.textContent = 'Edit';
        btnDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-task-btn');
        deleteBtn.textContent = 'Delete';
        btnDiv.appendChild(deleteBtn);

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

const mainBtnsDiv = document.createElement('div');
mainBtnsDiv.classList.add('main-btns-div');
mainTitleDiv.appendChild(mainBtnsDiv);

const editBtn = document.createElement('button');
editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit';
mainBtnsDiv.appendChild(editBtn);

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = 'Delete';
mainBtnsDiv.appendChild(deleteBtn);

const addTaskDiv = document.createElement('div');
addTaskDiv.classList.add('add-task-div');
main.appendChild(addTaskDiv);

const addTaskIcon = document.createElement('img');
addTaskIcon.classList.add('create-icon');
addTaskDiv.appendChild(addTaskIcon);

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = '+ Add Task';
addTaskDiv.appendChild(addTaskBtn);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
main.appendChild(mainContent);

const projectCard = document.createElement('div');
projectCard.classList.add('project-card');
mainContent.appendChild(projectCard);

/***/ }),

/***/ "./src/project-edit-delete.js":
/*!************************************!*\
  !*** ./src/project-edit-delete.js ***!
  \************************************/
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

/***/ "./src/task-edit-delete.js":
/*!*********************************!*\
  !*** ./src/task-edit-delete.js ***!
  \*********************************/
/***/ (() => {

// const editTask = document.querySelector('edit-task-btn');
// editTask.addEventListener('click', () => {    

// })

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
/* harmony import */ var _project_edit_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-edit-delete.js */ "./src/project-edit-delete.js");
/* harmony import */ var _project_edit_delete_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_project_edit_delete_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-edit-delete.js */ "./src/task-edit-delete.js");
/* harmony import */ var _task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEVBQThFLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxzQ0FBc0MsZ0JBQWdCLHNDQUFzQyxHQUFHLGNBQWMsb0JBQW9CLHdDQUF3QyxxQ0FBcUMsR0FBRyxrQ0FBa0MsMkNBQTJDLG1CQUFtQixvQkFBb0IsZ0JBQWdCLHNCQUFzQix5QkFBeUIsb0JBQW9CLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLDZCQUE2QixzQkFBc0IscUJBQXFCLEdBQUcsb0NBQW9DLDJDQUEyQyxvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsbUNBQW1DLDZCQUE2Qix5QkFBeUIsR0FBRyxRQUFRLDZCQUE2QixtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZ0JBQWdCLCtCQUErQix3QkFBd0IsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsa0JBQWtCLG1CQUFtQixrQkFBa0IsMkNBQTJDLG1CQUFtQixHQUFHLG9CQUFvQix3QkFBd0IsdUJBQXVCLG9CQUFvQiw0QkFBNEIsR0FBRyxnREFBZ0Qsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxzQkFBc0IsMkJBQTJCLDJDQUEyQyxzQ0FBc0MsNEJBQTRCLHNCQUFzQix1QkFBdUIsd0NBQXdDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLDhCQUE4Qix3Q0FBd0MseUJBQXlCLHlCQUF5QixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsZ0JBQWdCLEdBQUcsZUFBZSxvQkFBb0IsZ0JBQWdCLEdBQUcsaUJBQWlCLG1CQUFtQixrREFBa0QscUJBQXFCLHNDQUFzQyx3QkFBd0IsdUJBQXVCLHVDQUF1QywrQkFBK0IsR0FBRyxlQUFlLDJDQUEyQyw0QkFBNEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsMkNBQTJDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGlCQUFpQixnQ0FBZ0Msd0JBQXdCLGdCQUFnQixHQUFHLHVCQUF1QiwrQkFBK0Isd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLDJDQUEyQyw0QkFBNEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsMkNBQTJDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGlCQUFpQiwyQ0FBMkMsNEJBQTRCLHNDQUFzQyxzQkFBc0IsdUJBQXVCLDJDQUEyQywwQkFBMEIsa0JBQWtCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsR0FBRyxtQkFBbUIsd0NBQXdDLG1CQUFtQiwrQkFBK0Isd0JBQXdCLHVCQUF1QixHQUFHLHlDQUF5QyxvQkFBb0IsZ0JBQWdCLEdBQUcsbUJBQW1CLG1CQUFtQixvQkFBb0IsMkNBQTJDLDRDQUE0QywwQkFBMEIsR0FBRyw4QkFBOEIsa0RBQWtELDRCQUE0QixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLEdBQUcsc0JBQXNCLGdCQUFnQix3QkFBd0Isb0JBQW9CLHFDQUFxQyxHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxvQkFBb0Isb0JBQW9CLGdCQUFnQixHQUFHLG9CQUFvQiwyQ0FBMkMsc0NBQXNDLDRCQUE0Qix3Q0FBd0MsMEJBQTBCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsc0JBQXNCLDJDQUEyQyxzQ0FBc0MsNEJBQTRCLHdDQUF3QywwQkFBMEIsa0JBQWtCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IsZ0JBQWdCLEdBQUcsMENBQTBDLDJDQUEyQyw2QkFBNkIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLDJDQUEyQywwQkFBMEIsR0FBRyxrQkFBa0IsdUJBQXVCLHdCQUF3QixnQkFBZ0IsMEJBQTBCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLEdBQUcsaUJBQWlCLG1CQUFtQiwrQ0FBK0MscUJBQXFCLHNDQUFzQywwQ0FBMEMsNEJBQTRCLEdBQUcsc0JBQXNCLG9CQUFvQixxQ0FBcUMsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsR0FBRyxtQkFBbUIsa0JBQWtCLG1CQUFtQixtQkFBbUIseUJBQXlCLGdDQUFnQyxHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsK0JBQStCLEdBQUcsa0JBQWtCLHlCQUF5Qix3Q0FBd0Msc0NBQXNDLCtCQUErQiwyQ0FBMkMsMEJBQTBCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDeHpWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2xaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBaUc7QUFDakc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUkyQztBQUNuRSxPQUFPLGlFQUFlLG9GQUFPLElBQUksb0ZBQU8sVUFBVSxvRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0N3Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSx3REFBUztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7Ozs7Ozs7OztBQ2hDQTtBQUNBOztBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ0hKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzdIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUNBO0FBQ007QUFDRztBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLmNzcz9hNjcyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtZWRpdC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZWRpdC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tQb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xufVxuXG4vKiBoZWFkZXIgc3R5bGVzICovXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbjogMCAyMHB4O1xufVxuXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuaDIge1xuICAgIGNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDMwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6cmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9qZWN0LWJ0bi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5jcmVhdGUtaWNvbiB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LW5hbWVzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xufVxuXG4vKiBwcm9qZWN0IHBvcHVwIHN0eWxlcyAqL1xuLnByb2plY3QtcG9wdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbWFpbiBzdHlsZXMgKi9cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5tYWluLXRpdGxlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5lZGl0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5lZGl0LWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xufVxuXG4uZG9uZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucHJvamVjdC1kdWUtZGF0ZSB7XG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWFpbi1idG5zLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5lZGl0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLXRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBwcm9qZWN0IHN0eWxlcyAqL1xuLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIHRhc2sgc3R5bGVzICovXG4udGFzayB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1kdWUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnRhc2stYm90dG9tLWRpdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1kZXNjIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50YXNrLWJ0bnMtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmVkaXQtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS10YXNrLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFzay1kdWUtZGF0ZSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiB0YXNrIHBvcHVwIHN0eWxlcyAqL1xuLnRhc2stcG9wdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnBvcHVwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGFzay1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4udGFzay1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xuICAgIGhlaWdodDogMS4zcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xufVxuXG4ucmFkaW8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJhZGlvLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4ucmVkLWxhYmVsIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxufVxuXG4ub3JhbmdlLWxhYmVsIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxufVxuXG4ueWVsbG93LWxhYmVsIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5zdWJtaXQtdGFzayB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLG9DQUFv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Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxufVxcblxcbi8qIGhlYWRlciBzdHlsZXMgKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMzBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jcmVhdGUtaWNvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxufVxcblxcbi8qIHByb2plY3QgcG9wdXAgc3R5bGVzICovXFxuLnByb2plY3QtcG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBtYWluIHN0eWxlcyAqL1xcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWFpbi10aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmVkaXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbn1cXG5cXG4uZG9uZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gICAgY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3QtZHVlLWRhdGUge1xcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubWFpbi1idG5zLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBwcm9qZWN0IHN0eWxlcyAqL1xcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogdGFzayBzdHlsZXMgKi9cXG4udGFzayB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kdWUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YXNrLWJvdHRvbS1kaXYge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWRlc2Mge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrLWJ0bnMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogdGFzayBwb3B1cCBzdHlsZXMgKi9cXG4udGFzay1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5wb3B1cC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBoZWlnaHQ6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJhZGlvLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucmVkLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXFxufVxcblxcbi5vcmFuZ2UtbGFiZWwge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcXG59XFxuXFxuLnllbGxvdy1sYWJlbCB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zdWJtaXQtdGFzayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWRpdicpO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBvcHVwJyk7XG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQtbGFiZWwnKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnRuJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWVzJyk7XG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgICAgICAvLyBjcmVhdGUgaW5kaXZpZHVhbCBwcm9qZWN0IGNhcmQgZm9yIGV2ZXJ5IG5ldyBwcm9qZWN0IGFuZCBnaXZlIGl0IGEgdW5pcXVlIGNsYXNzP1xuICAgICAgICAvLyBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG4gICAgICAgIC8vIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBvcHVwJyk7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSk7IiwiaW1wb3J0IHt0YXNrUG9wdXB9IGZyb20gJy4vdGFza1BvcHVwLmpzJztcblxuLy8gYWRkIGNoZWNrYm94IHRvIGNoZWNrIHdoZW4gdGFzayBpcyBkb25lXG4vLyB0YXNrIHNob3VsZCBub3QgYmUgYWRkZWQgaWYgaW5wdXRzIGFyZSBlbXB0eVxuLy8gYWRkIGFuIGVkaXQgYW5kIGEgZGVsZXRlIGJ1dHRvbiB0byBlYWNoIHRhc2tcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wb3B1cCcpO1xuICAgIGlmIChwb3B1cCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza1BvcHVwKCk7XG4gICAgfVxuXG4gICAgLy8gYnV0dG9uIHNob3VsZCBub3QgYmUgYWxsb3dlZCB0byBiZSBwcmVzc2VkIGlmIGlucHV0cyBhcmUgZW1wdHkuXG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrKTtcblxuICAgIC8vIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICAgIC8vIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdoZWxsbyB0aGVyZScpO1xuICAgIC8vICAgICBjcmVhdGVUYXNrKCk7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FyZCcpOyAgICBcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza0lucHV0LnZhbHVlO1xuICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRHVlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRpdicpO1xuICAgICAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tEdWVEaXYpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0JvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJvdHRvbS1kaXYnKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQm90dG9tRGl2KTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjLWlucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgICB0YXNrQm90dG9tRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1pbnB1dCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdGFza0R1ZURpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWRcIik7XG4gICAgICAgIGlmIChyYWRpb0lucHV0LnZhbHVlID09ICdyZWQnKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdyZWQtbGFiZWwnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgfSBlbHNlIGlmIChyYWRpb0lucHV0LnZhbHVlID09ICdvcmFuZ2UnKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UtbGFiZWwnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgfSBlbHNlIGlmIChyYWRpb0lucHV0LnZhbHVlID09ICd5ZWxsb3cnKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd5ZWxsb3ctbGFiZWwnKVxuICAgICAgICAgICAgdGFza0R1ZURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bnMtZGl2Jyk7XG4gICAgICAgIHRhc2tCb3R0b21EaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWJ0bicpO1xuICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzay1idG4nKTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgIC8vIGNoZWNrbWFyayBjcmVhdGlvbiBmb3Igd2hlbiB0YXNrIGlzIGZpbmlzaGVkIGJlbG93XG4gICAgICAgIC8vIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgLy8gY2hlY2suY2xhc3NMaXN0LmFkZCgndGFzay1jaGVjaycpO1xuICAgICAgICAvLyBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgLy8gdGFzay5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbn0iLCIvLyBhZGQgaW4gaWNvbnNcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVG8tZG8gTGlzdCc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG5jb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbnNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKTtcblxuY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1kaXYnKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG5cbmNvbnN0IHByb2plY3RCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tZGl2Jyk7XG5hZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RCdG5EaXYpO1xuXG5jb25zdCBjcmVhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jcmVhdGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1pY29uJyk7XG4vLyBjcmVhdGVJY29uLnNyYyA9IGdldENyZWF0ZUljb247XG5wcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUljb24pO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5wcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5jb25zdCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5maXJzdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lcycpO1xuZmlyc3RQcm9qZWN0LnRleHRDb250ZW50ID0gJ0ZpcnN0IFByb2plY3QnO1xuc2lkZWJhci5hcHBlbmRDaGlsZChmaXJzdFByb2plY3QpO1xuXG5jb25zdCBtYWluVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlLWRpdicpO1xubWFpbi5hcHBlbmRDaGlsZChtYWluVGl0bGVEaXYpO1xuXG5jb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcbm1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdGaXJzdCBQcm9qZWN0Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG5jb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnByb2plY3REdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZHVlLWRhdGUnKTtcbnByb2plY3REdWVEYXRlLnRleHRDb250ZW50ID0gJzEyLzI5Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG5cbmNvbnN0IG1haW5CdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdtYWluLWJ0bnMtZGl2Jyk7XG5tYWluVGl0bGVEaXYuYXBwZW5kQ2hpbGQobWFpbkJ0bnNEaXYpO1xuXG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5lZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG5lZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xubWFpbkJ0bnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbmRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xubWFpbkJ0bnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1kaXYnKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cbmNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5hZGRUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtaWNvbicpO1xuYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xuYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xubWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbmNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTsiLCJjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUtZGl2Jyk7XG5cbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGl2Jyk7XG4gICAgbWFpblRpdGxlRGl2LnByZXBlbmQoZWRpdERpdik7XG5cbiAgICAvLyBwdXQgY3VycmVudCB0aXRsZSBuYW1lIGluIGlucHV0IHRvIGVkaXQuXG4gICAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdElucHV0KTtcblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoJ2RvbmUtYnRuJyk7XG4gICAgZG9uZUJ0bi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuXG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICBtYWluVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IGVkaXRJbnB1dC52YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHdlIGFsc28gd2FudCBpdCB0byB1cGRhdGUgdGhlIG5hbWUgb2YgdGhlIHByb2plY3QgaW4gdGhlIHNpZGViYXIgYXMgd2VsbC5cbiAgICB9KVxufSlcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7IiwiLy8gY29uc3QgZWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdlZGl0LXRhc2stYnRuJyk7XG4vLyBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgICAgXG5cbi8vIH0pIiwiY29uc3QgdGFza1BvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXAuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG5jb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbnBvcHVwVGl0bGUuY2xhc3NMaXN0LmFkZCgncG9wdXAtdGl0bGUnKTtcbnBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xucG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xudGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG50YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcvJyk7XG5wb3B1cC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbmNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG5jb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xudGFzay50ZXh0Q29udGVudCA9ICdUYXNrOic7XG50YXNrRGl2LmFwcGVuZENoaWxkKHRhc2spO1xuXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbnRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XG50YXNrSW5wdXQudHlwZSA9ICd0ZXh0JztcbnRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG5cbmNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG5kZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5kZXNjRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuXG5jb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbmRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjLWlucHV0Jyk7XG5kZXNjSW5wdXQudHlwZSA9ICd0ZXh0JztcbmRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG5kYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6JztcbmRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5kYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtaW5wdXQnKTtcbmRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG5jb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xucHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xucHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuY29uc3QgcmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNvbnRhaW5lcicpO1xucHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpO1xuXG5jb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJlZERpdi5jbGFzc0xpc3QuYWRkKCdyYWRpby1kaXYnKTtcbnJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZERpdik7XG5cbmNvbnN0IHJlZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnJlZElucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvJyk7XG5yZWRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmFkaW8taW5wdXQnKTtcbnJlZElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncmVkJyk7XG5yZWRJbnB1dC50eXBlID0gJ3JhZGlvJztcbnJlZERpdi5hcHBlbmRDaGlsZChyZWRJbnB1dCk7XG5cbmNvbnN0IHJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucmVkLmNsYXNzTGlzdC5hZGQoJ3JlZC1sYWJlbCcpO1xucmVkRGl2LmFwcGVuZENoaWxkKHJlZCk7XG5cbmNvbnN0IG9yYW5nZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3JhbmdlRGl2LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWRpdicpO1xucmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQob3JhbmdlRGl2KTtcblxuY29uc3Qgb3JhbmdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xub3JhbmdlSW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8nKTtcbm9yYW5nZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdyYWRpby1pbnB1dCcpO1xub3JhbmdlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdvcmFuZ2UnKTtcbm9yYW5nZUlucHV0LnR5cGUgPSAncmFkaW8nO1xub3JhbmdlRGl2LmFwcGVuZENoaWxkKG9yYW5nZUlucHV0KTtcblxuY29uc3Qgb3JhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5vcmFuZ2UuY2xhc3NMaXN0LmFkZCgnb3JhbmdlLWxhYmVsJyk7XG5vcmFuZ2VEaXYuYXBwZW5kQ2hpbGQob3JhbmdlKTtcblxuY29uc3QgeWVsbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG55ZWxsb3dEaXYuY2xhc3NMaXN0LmFkZCgncmFkaW8tZGl2Jyk7XG5yYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZWxsb3dEaXYpO1xuXG5jb25zdCB5ZWxsb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG55ZWxsb3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpO1xueWVsbG93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3JhZGlvLWlucHV0Jyk7XG55ZWxsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3llbGxvdycpO1xueWVsbG93SW5wdXQudHlwZSA9ICdyYWRpbyc7XG55ZWxsb3dEaXYuYXBwZW5kQ2hpbGQoeWVsbG93SW5wdXQpO1xuXG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnllbGxvdy5jbGFzc0xpc3QuYWRkKCd5ZWxsb3ctbGFiZWwnKTtcbnllbGxvd0Rpdi5hcHBlbmRDaGlsZCh5ZWxsb3cpO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtdGFzaycpO1xuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG5hZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbn07XG5cbmV4cG9ydCB7dGFza1BvcHVwfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXBwLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS5qcyc7XG5pbXBvcnQgJy4vY3JlYXRlVGFzay5qcyc7XG5pbXBvcnQgJy4vY3JlYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgJy4vcHJvamVjdC1lZGl0LWRlbGV0ZS5qcyc7XG5pbXBvcnQgJy4vdGFzay1lZGl0LWRlbGV0ZS5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9