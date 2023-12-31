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

.add-project {
    background-color: rgb(208, 231, 237);
    border: none;
    color:rgb(127, 162, 173);
    font-size: 1.2rem;
    font-weight: 700;
}

.project-btn-div {
    display: flex;
    align-items: center;
    gap: 10px;
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
    margin: 10px 0;
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
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-title {
    color: rgb(208, 231, 237);
    font-size: 2.5rem;
    margin: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    margin: 0;\n    font-family: 'Mina', sans-serif;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 100px auto;\n}\n\n/* header styles */\n.header {\n    background-color: rgb(127, 162, 173);\n    width: 100vw;\n    height: 100px;\n    margin: 0;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    margin: 0;\n    color: rgb(13, 58, 72);\n    font-size: 3rem;\n    margin: 0 20px;\n}\n\n/* sidebar styles */\n.sidebar {\n    background-color: rgb(208, 231, 237);\n    height: 100vh;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 20px 20px 50px;\n    box-sizing: border-box;\n    grid-column: 1 / 2;\n}\n\nh2 {\n    color: rgb(13, 58, 72);\n    margin: 10px;\n    font-size: 2rem;\n    position: relative;\n    right: 30px;\n}\n\n.add-project-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    color:rgb(127, 162, 173);\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.add-project {\n    background-color: rgb(208, 231, 237);\n    border: none;\n    color:rgb(127, 162, 173);\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.project-btn-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.project-names {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 8px 0;\n    color:rgb(13, 58, 72);\n}\n\n/* project popup styles */\n.project-popup {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-project-btn {\n    align-self: flex-end;\n    background-color: rgb(127, 162, 173);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    font-size: 15px;\n    font-weight: 400;\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 50px;\n    height: 15px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* main styles */\n.main {\n    background-color: rgb(13, 58, 72);\n    padding: 30px 50px;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.main-title-div {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    margin: 0;\n}\n\n.edit-div {\n    display: flex;\n    gap: 10px;\n}\n\n.edit-input {\n    border: none;\n    border-bottom: 1px solid rgb(208, 231, 237);\n    height: 2.5rem;\n    font-family: 'Mina', sans-serif;\n    font-size: 2.5rem;\n    font-weight: 700;\n    background-color:rgb(13, 58, 72);\n    color:rgb(208, 231, 237);\n    margin: 10px 0;\n}\n\n.done-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main-title {\n    color: rgb(208, 231, 237);\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.main-btns-div {\n    display: flex;\n    gap: 15px;\n}\n\n.edit-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-btn {\n    background-color: rgb(127, 162, 173);\n    color:rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    border: 2px solid rgb(208, 231, 237);\n    border-radius: 15px;\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-task-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0;\n    margin-left: 30px;\n    margin-bottom: 30px;\n}\n\n.add-task-btn {\n    background-color: rgb(13, 58, 72);\n    border: none;\n    color:rgb(127, 162, 173);\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n/* project styles */\n.main-content {\n    display: flex;\n    gap: 50px;\n}\n\n.project-card {\n    width: 700px;\n    height: 400px;\n    background-color: rgb(127, 162, 173);\n    border: 10px solid rgb(208, 231, 237);\n    border-radius: 20px;\n}\n\n/* task styles */\n.task {\n    border-bottom: 2px solid rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n    padding: 15px;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-due-div {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    padding: 0;\n}\n\n.task-bottom-div {\n    margin: 0;\n    margin-left: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-desc {\n    margin: 0;\n}\n\n.task-btns-div {\n    display: flex;\n    gap: 10px;\n}\n\n.edit-task-btn {\n    background-color: rgb(208, 231, 237);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 60px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-task-btn {\n    background-color: rgb(208, 231, 237);\n    font-family: 'Mina', sans-serif;\n    color:rgb(13, 58, 72);\n    border: 1px solid rgb(13, 58, 72);\n    border-radius: 15px;\n    width: 60px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-due-date {\n    margin: 0;\n}\n\n/* task popup styles */\n.task-popup {\n    background-color: rgb(208, 231, 237);\n    color: rgb(13, 58, 72);\n    width: 250px;\n    height: 400px;\n    padding: 20px;\n    box-sizing: border-box;\n    border: 5px solid rgb(127, 162, 173);\n    border-radius: 20px;\n}\n\n.popup-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    margin-bottom: 10px;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-input {\n    border: none;\n    border-bottom: 1px solid rgb(13, 58, 72);\n    height: 1.3rem;\n    font-family: 'Mina', sans-serif;\n    background-color:rgb(208, 231, 237);\n    color:rgb(13, 58, 72);\n}\n\n.radio-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.radio-div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.red-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: red; \n}\n\n.orange-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: orange; \n}\n\n.yellow-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: yellow;\n}\n\n.submit-task {\n    align-self: center;\n    background-color: rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    color:rgb(208, 231, 237);\n    border: 2px solid rgb(127, 162, 173);\n    border-radius: 15px;\n    width: 80px;\n    height: 25px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-popup.js */ "./src/project-popup.js");


const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
    checkPopup();
});

const checkPopup = () => {
    const inputLabel = document.querySelector('.project-input-label');
    if (inputLabel) {
        return;
    } else {
        (0,_project_popup_js__WEBPACK_IMPORTED_MODULE_0__.projectPopup)();
    }
}

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _taskPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPopup.js */ "./src/taskPopup.js");
/* harmony import */ var _project_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-data.js */ "./src/project-data.js");
/* harmony import */ var _task_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-class.js */ "./src/task-class.js");




setTimeout(() => {
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
}), 500
})

function createTask(arg) {
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

        taskBottomDiv.appendChild(taskDesc);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        const dateInput = document.querySelector('.date-input');

        taskDueDiv.appendChild(taskDueDate);

        const radioInput = document.querySelector("input[type='radio']:checked");

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

        if(arg instanceof _task_class_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            displayTaskValues(taskTitle, taskDesc, taskDueDate, taskDueDiv, arg)
        } else {
            createRadioColors(radioInput.value, taskDueDiv)
            setValues(taskTitle, taskDesc, taskDueDate, radioInput, taskInput, descInput, dateInput)
        }

        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';
}

function setValues (task, desc, date, radio, taskInput, descInput, dateInput) {
    const project = getProject();
    task.textContent = taskInput.value;
    desc.textContent = descInput.value;
    date.textContent = dateInput.value;
    console.log(radio.value);
    project.addTask(taskInput.value, descInput.value, dateInput.value, radio.value);
}

function createRadioColors (priority, taskDueDiv){
    if (priority == 'red') {
        const taskPriority = document.createElement('div');
        taskPriority.classList.add('red-label');
        taskDueDiv.appendChild(taskPriority);
    } else if (priority == 'orange') {
        const taskPriority = document.createElement('div');
        taskPriority.classList.add('orange-label');
        taskDueDiv.appendChild(taskPriority);
    } else if (priority == 'yellow') {
        const taskPriority = document.createElement('div');
        taskPriority.classList.add('yellow-label')
        taskDueDiv.appendChild(taskPriority);
    }
}

function displayTaskValues (title, desc, date, taskDueDiv, obj){
    title.textContent = obj.title;
    desc.textContent = obj.desc;
    date.textContent = obj.date;
    createRadioColors(obj.priority, taskDueDiv);
}
 
function getProject() {
    const mainTitle = document.querySelector('.main-title');
    for(const project of _project_data_js__WEBPACK_IMPORTED_MODULE_1__.projects){
        console.log(project)
        if (project.name === mainTitle.textContent) {
            return project;
        }  
    }
}



/***/ }),

/***/ "./src/display-project.js":
/*!********************************!*\
  !*** ./src/display-project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProject: () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


const displayProject = (proj) => {
    const mainTitle = document.querySelector('.main-title');
    const projectCard = document.querySelector('.project-card');
    
    mainTitle.textContent = proj.name;

    projectCard.innerHTML = '';
    for (let i = 0; i < proj.tasks.length; i++) {
        console.log(proj.tasks[i])
        ;(0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(proj.tasks[i]);
    }
}

/***/ }),

/***/ "./src/first-project.js":
/*!******************************!*\
  !*** ./src/first-project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addFirstProject)
/* harmony export */ });
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");
/* harmony import */ var _project_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-data.js */ "./src/project-data.js");
/* harmony import */ var _display_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-project.js */ "./src/display-project.js");




function addFirstProject() {
    const name = 'First Project';
    const proj = new _project_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    _project_data_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(proj);

    const sidebar = document.querySelector('.sidebar');

    const projectEl = document.createElement('p');
    projectEl.classList.add('project-names');
    projectEl.textContent = 'First Project';
    sidebar.appendChild(projectEl);

    const mainTitleDiv = document.querySelector('.main-title-div');
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title');
    mainTitle.textContent = 'First Project';
    mainTitleDiv.appendChild(mainTitle);

    projectEl.addEventListener('click', () => {
        (0,_display_project_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(proj);
    });

    const projectPopupDiv = document.querySelector('.project-popup');
    projectPopupDiv.innerHTML = '';
    return;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _first_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-project */ "./src/first-project.js");
'./first-project.js';

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

const addProject = document.createElement('button');
addProject.classList.add('add-project');
addProject.textContent = '+ Add Project';
projectBtnDiv.appendChild(addProject);

const popup = document.createElement('div');
popup.classList.add('project-popup');
addProjectDiv.appendChild(popup);

const mainTitleDiv = document.createElement('div');
mainTitleDiv.classList.add('main-title-div');
main.appendChild(mainTitleDiv);

(0,_first_project__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

/***/ "./src/project-class.js":
/*!******************************!*\
  !*** ./src/project-class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-data */ "./src/project-data.js");
/* harmony import */ var _task_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-class.js */ "./src/task-class.js");



class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(title, desc, date, priority) {
        const task = new _task_class_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, desc, date, priority);
        this.tasks.push(task);
    }

    edit(name) {
        this.name = name;
    }

    delete(name) {
        _project_data__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
            if (project.name == name) {
                const index = _project_data__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project);
                _project_data__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
                return;
            }
        })
    }
}

/***/ }),

/***/ "./src/project-data.js":
/*!*****************************!*\
  !*** ./src/project-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = [];

/***/ }),

/***/ "./src/project-edit-delete.js":
/*!************************************!*\
  !*** ./src/project-edit-delete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");
/* harmony import */ var _project_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-data.js */ "./src/project-data.js");



const editProject = document.querySelector('.edit-btn');
editProject.addEventListener('click', () => {
    const mainTitleDiv = document.querySelector('.main-title-div');
    const mainTitle = document.querySelector('.main-title');
    mainTitle.classList.add('hidden');

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-div');
    mainTitleDiv.prepend(editDiv);

    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editInput.value = mainTitle.textContent;
    editDiv.appendChild(editInput);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.textContent = 'Done';
    editDiv.appendChild(doneBtn);

    doneBtn.addEventListener('click', () => {
        const proj = getProj();
        const projectEl = getProjEl(proj);
        proj.edit(editInput.value);

        editDiv.classList.add('hidden');
        mainTitle.classList.remove('hidden');

        mainTitle.textContent = editInput.value;
        projectEl.textContent = editInput.value;
        return;
    })
})

const getProj = () => {
    const mainTitle = document.querySelector('.main-title');
    for (const proj of _project_data_js__WEBPACK_IMPORTED_MODULE_1__.projects) {
        if (proj.name === mainTitle.textContent) {
            return proj;
        }
    }
}

const getProjEl = (proj) => {
    const projectElements = document.querySelectorAll('.project-names');
    for (const projectEl of projectElements) {
        if (projectEl.textContent == proj.name) {
            console.log('Project El: ', projectEl);
            return projectEl;
        }
    }
}

const deleteProject = document.querySelector('.delete-btn');

/***/ }),

/***/ "./src/project-popup.js":
/*!******************************!*\
  !*** ./src/project-popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectPopup: () => (/* binding */ projectPopup)
/* harmony export */ });
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");
/* harmony import */ var _project_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-data.js */ "./src/project-data.js");
/* harmony import */ var _display_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-project.js */ "./src/display-project.js");




function projectPopup() {
    const popup = document.querySelector('.project-popup');

    const inputLabel = document.createElement('label');
    inputLabel.classList.add('project-input-label');
    inputLabel.textContent = 'Project Name:';
    popup.appendChild(inputLabel);

    const input = document.createElement('input');
    input.classList.add('form-input');
    input.classList.add('project-name-input')
    popup.appendChild(input);

    const submit = document.createElement('btn');
    submit.classList.add('add-project-btn');
    submit.textContent = 'Add';
    popup.appendChild(submit);

    submit.addEventListener('click', addProject);
}

function addProject() {
    const input = document.querySelector('.project-name-input');
    const proj = new _project_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](input.value);
    _project_data_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(proj);
    console.log(_project_data_js__WEBPACK_IMPORTED_MODULE_1__.projects);

    const sidebar = document.querySelector('.sidebar');

    const projectEl = document.createElement('p');
    projectEl.classList.add('project-names');
    projectEl.textContent = input.value;
    sidebar.appendChild(projectEl);

    projectEl.addEventListener('click', () => {
        (0,_display_project_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(proj);
    })

    const projectPopupDiv = document.querySelector('.project-popup');
    projectPopupDiv.innerHTML = '';
    return;
}



/***/ }),

/***/ "./src/task-class.js":
/*!***************************!*\
  !*** ./src/task-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, desc, date, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
    }

    edit() {

    }

    delete() {
        
    }
}

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
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _project_edit_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-edit-delete.js */ "./src/project-edit-delete.js");
/* harmony import */ var _task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-edit-delete.js */ "./src/task-edit-delete.js");
/* harmony import */ var _task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_task_edit_delete_js__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEVBQThFLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsc0NBQXNDLGdCQUFnQixzQ0FBc0MsR0FBRyxjQUFjLG9CQUFvQix3Q0FBd0MscUNBQXFDLEdBQUcsa0NBQWtDLDJDQUEyQyxtQkFBbUIsb0JBQW9CLGdCQUFnQixzQkFBc0IseUJBQXlCLG9CQUFvQiwwQkFBMEIsR0FBRyxRQUFRLGdCQUFnQiw2QkFBNkIsc0JBQXNCLHFCQUFxQixHQUFHLG9DQUFvQywyQ0FBMkMsb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLG1DQUFtQyw2QkFBNkIseUJBQXlCLEdBQUcsUUFBUSw2QkFBNkIsbUJBQW1CLHNCQUFzQix5QkFBeUIsa0JBQWtCLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsOEJBQThCLGdCQUFnQiwrQkFBK0Isd0JBQXdCLHVCQUF1QixHQUFHLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLCtCQUErQix3QkFBd0IsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsb0JBQW9CLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDRCQUE0QixHQUFHLGdEQUFnRCxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQiwyQkFBMkIsMkNBQTJDLHNDQUFzQyw0QkFBNEIsc0JBQXNCLHVCQUF1Qix3Q0FBd0MsMEJBQTBCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsOEJBQThCLHdDQUF3Qyx5QkFBeUIseUJBQXlCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLGdCQUFnQixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsbUJBQW1CLGtEQUFrRCxxQkFBcUIsc0NBQXNDLHdCQUF3Qix1QkFBdUIsdUNBQXVDLCtCQUErQixxQkFBcUIsR0FBRyxlQUFlLDJDQUEyQyw0QkFBNEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsMkNBQTJDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxpQkFBaUIsZ0NBQWdDLHdCQUF3QixnQkFBZ0IsR0FBRyxvQkFBb0Isb0JBQW9CLGdCQUFnQixHQUFHLGVBQWUsMkNBQTJDLDRCQUE0QixzQ0FBc0Msc0JBQXNCLHVCQUF1QiwyQ0FBMkMsMEJBQTBCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsaUJBQWlCLDJDQUEyQyw0QkFBNEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsMkNBQTJDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLDBCQUEwQixHQUFHLG1CQUFtQix3Q0FBd0MsbUJBQW1CLCtCQUErQix3QkFBd0IsdUJBQXVCLEdBQUcseUNBQXlDLG9CQUFvQixnQkFBZ0IsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsNENBQTRDLDBCQUEwQixHQUFHLDhCQUE4QixrREFBa0QsNEJBQTRCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsd0JBQXdCLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsZ0JBQWdCLHdCQUF3QixvQkFBb0IscUNBQXFDLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEdBQUcsb0JBQW9CLDJDQUEyQyxzQ0FBc0MsNEJBQTRCLHdDQUF3QywwQkFBMEIsa0JBQWtCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxzQkFBc0IsMkNBQTJDLHNDQUFzQyw0QkFBNEIsd0NBQXdDLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRywwQ0FBMEMsMkNBQTJDLDZCQUE2QixtQkFBbUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMkNBQTJDLDBCQUEwQixHQUFHLGtCQUFrQix1QkFBdUIsd0JBQXdCLGdCQUFnQiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLCtDQUErQyxxQkFBcUIsc0NBQXNDLDBDQUEwQyw0QkFBNEIsR0FBRyxzQkFBc0Isb0JBQW9CLHFDQUFxQyxHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsZ0NBQWdDLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsbUJBQW1CLHlCQUF5QiwrQkFBK0IsR0FBRyxrQkFBa0IseUJBQXlCLHdDQUF3QyxzQ0FBc0MsK0JBQStCLDJDQUEyQywwQkFBMEIsa0JBQWtCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLG1CQUFtQjtBQUNuMFY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDaFoxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpRztBQUNqRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSTJDO0FBQ25FLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSxvRkFBTyxVQUFVLG9GQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsK0RBQVk7QUFDcEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHlDO0FBQ0U7QUFDUjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsd0RBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsc0RBQUk7QUFDOUI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSDBDOztBQUVuQztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBLFFBQVEsd0RBQVU7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDO0FBQ0U7QUFDUzs7QUFFckM7QUFDZjtBQUNBLHFCQUFxQix5REFBTztBQUM1QixJQUFJLHNEQUFROztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1FQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QjhDOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFd0M7QUFDTDs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixzREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVE7QUFDaEI7QUFDQSw4QkFBOEIsbURBQVE7QUFDdEMsZ0JBQWdCLG1EQUFRO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JPOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNFOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEeUM7QUFDRTtBQUNTOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix5REFBTztBQUM1QixJQUFJLHNEQUFRO0FBQ1osZ0JBQWdCLHNEQUFROztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbUVBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ0hKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzdIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUNBO0FBQ007QUFDRztBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLmNzcz9hNjcyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlyc3QtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1kYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWVkaXQtZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LXBvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWNsYXNzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWVkaXQtZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0bztcbn1cblxuLyogaGVhZGVyIHN0eWxlcyAqL1xuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW46IDAgMjBweDtcbn1cblxuLyogc2lkZWJhciBzdHlsZXMgKi9cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDUwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzMHB4O1xufVxuXG4uYWRkLXByb2plY3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6cmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9qZWN0LWJ0bi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWVzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xufVxuXG4vKiBwcm9qZWN0IHBvcHVwIHN0eWxlcyAqL1xuLnByb2plY3QtcG9wdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbWFpbiBzdHlsZXMgKi9cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5tYWluLXRpdGxlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5lZGl0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5lZGl0LWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZG9uZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1haW4tYnRucy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uZWRpdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLyogcHJvamVjdCBzdHlsZXMgKi9cbi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1MHB4O1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiB0YXNrIHN0eWxlcyAqL1xuLnRhc2sge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stZHVlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YXNrLWJvdHRvbS1kaXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhc2stZGVzYyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGFzay1idG5zLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5lZGl0LXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZWxldGUtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhc2stZHVlLWRhdGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogdGFzayBwb3B1cCBzdHlsZXMgKi9cbi50YXNrLXBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wb3B1cC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2stZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcbiAgICBoZWlnaHQ6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcbn1cblxuLnJhZGlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yYWRpby1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnJlZC1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBcbn1cblxuLm9yYW5nZS1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcbn1cblxuLnllbGxvdy1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uc3VibWl0LXRhc2sge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLDJDQUEyQztJQUMzQyxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxufVxcblxcbi8qIGhlYWRlciBzdHlsZXMgKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMzBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjpyZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxufVxcblxcbi8qIHByb2plY3QgcG9wdXAgc3R5bGVzICovXFxuLnByb2plY3QtcG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBtYWluIHN0eWxlcyAqL1xcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWFpbi10aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmVkaXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmRvbmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gICAgY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4tYnRucy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgY29sb3I6cmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6cmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogcHJvamVjdCBzdHlsZXMgKi9cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi8qIHRhc2sgc3R5bGVzICovXFxuLnRhc2sge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZHVlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGFzay1ib3R0b20tZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1kZXNjIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1idG5zLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmVkaXQtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHRhc2sgcG9wdXAgc3R5bGVzICovXFxuLnRhc2stcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMywgNTgsIDcyKTtcXG4gICAgaGVpZ2h0OiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTWluYScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBjb2xvcjpyZ2IoMTMsIDU4LCA3Mik7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yYWRpby1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnJlZC1sYWJlbCB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxcbn1cXG5cXG4ub3JhbmdlLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgXFxufVxcblxcbi55ZWxsb3ctbGFiZWwge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3VibWl0LXRhc2sge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3Byb2plY3RQb3B1cH0gZnJvbSAnLi9wcm9qZWN0LXBvcHVwLmpzJztcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGVja1BvcHVwKCk7XG59KTtcblxuY29uc3QgY2hlY2tQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQtbGFiZWwnKTtcbiAgICBpZiAoaW5wdXRMYWJlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdFBvcHVwKCk7XG4gICAgfVxufSIsImltcG9ydCB7dGFza1BvcHVwfSBmcm9tICcuL3Rhc2tQb3B1cC5qcyc7XG5pbXBvcnQge3Byb2plY3RzfSBmcm9tICcuL3Byb2plY3QtZGF0YS5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2stY2xhc3MuanMnO1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXBvcHVwJyk7XG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrUG9wdXAoKTtcbiAgICB9XG4gICAgLy8gYnV0dG9uIHNob3VsZCBub3QgYmUgYWxsb3dlZCB0byBiZSBwcmVzc2VkIGlmIGlucHV0cyBhcmUgZW1wdHkuXG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrKTtcbn0pLCA1MDBcbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soYXJnKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJyk7ICAgIFxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpO1xuXG4gICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEdWVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGl2Jyk7XG4gICAgICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURpdik7XG5cbiAgICAgICAgY29uc3QgdGFza0JvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYm90dG9tLWRpdicpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCb3R0b21EaXYpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MtaW5wdXQnKTtcblxuICAgICAgICB0YXNrQm90dG9tRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1pbnB1dCcpO1xuXG4gICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgndGFzay1idG5zLWRpdicpO1xuICAgICAgICB0YXNrQm90dG9tRGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay1idG4nKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2stYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBidG5EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICBpZihhcmcgaW5zdGFuY2VvZiBUYXNrKSB7XG4gICAgICAgICAgICBkaXNwbGF5VGFza1ZhbHVlcyh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrRHVlRGF0ZSwgdGFza0R1ZURpdiwgYXJnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlUmFkaW9Db2xvcnMocmFkaW9JbnB1dC52YWx1ZSwgdGFza0R1ZURpdilcbiAgICAgICAgICAgIHNldFZhbHVlcyh0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrRHVlRGF0ZSwgcmFkaW9JbnB1dCwgdGFza0lucHV0LCBkZXNjSW5wdXQsIGRhdGVJbnB1dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlcyAodGFzaywgZGVzYywgZGF0ZSwgcmFkaW8sIHRhc2tJbnB1dCwgZGVzY0lucHV0LCBkYXRlSW5wdXQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdCgpO1xuICAgIHRhc2sudGV4dENvbnRlbnQgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHJhZGlvLnZhbHVlKTtcbiAgICBwcm9qZWN0LmFkZFRhc2sodGFza0lucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcmFkaW8udmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0NvbG9ycyAocHJpb3JpdHksIHRhc2tEdWVEaXYpe1xuICAgIGlmIChwcmlvcml0eSA9PSAncmVkJykge1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3JlZC1sYWJlbCcpO1xuICAgICAgICB0YXNrRHVlRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PSAnb3JhbmdlJykge1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ29yYW5nZS1sYWJlbCcpO1xuICAgICAgICB0YXNrRHVlRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PSAneWVsbG93Jykge1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3llbGxvdy1sYWJlbCcpXG4gICAgICAgIHRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrVmFsdWVzICh0aXRsZSwgZGVzYywgZGF0ZSwgdGFza0R1ZURpdiwgb2JqKXtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2M7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICAgIGNyZWF0ZVJhZGlvQ29sb3JzKG9iai5wcmlvcml0eSwgdGFza0R1ZURpdik7XG59XG4gXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRpdGxlJyk7XG4gICAgZm9yKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpe1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBtYWluVGl0bGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9ICBcbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlVGFza307IiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2opID0+IHtcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FyZCcpO1xuICAgIFxuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcblxuICAgIHByb2plY3RDYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvai50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qLnRhc2tzW2ldKVxuICAgICAgICBjcmVhdGVUYXNrKHByb2oudGFza3NbaV0pO1xuICAgIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QtY2xhc3MuanMnO1xuaW1wb3J0IHtwcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LWRhdGEuanMnO1xuaW1wb3J0IHtkaXNwbGF5UHJvamVjdH0gZnJvbSAnLi9kaXNwbGF5LXByb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRGaXJzdFByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9ICdGaXJzdCBQcm9qZWN0JztcbiAgICBjb25zdCBwcm9qID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWVzJyk7XG4gICAgcHJvamVjdEVsLnRleHRDb250ZW50ID0gJ0ZpcnN0IFByb2plY3QnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsKTtcblxuICAgIGNvbnN0IG1haW5UaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRpdGxlLWRpdicpO1xuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSAnRmlyc3QgUHJvamVjdCc7XG4gICAgbWFpblRpdGxlRGl2LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICBwcm9qZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2opO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdFBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcG9wdXAnKTtcbiAgICBwcm9qZWN0UG9wdXBEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuO1xufSIsImltcG9ydCBhZGRGaXJzdFByb2plY3QgZnJvbSBcIi4vZmlyc3QtcHJvamVjdFwiOycuL2ZpcnN0LXByb2plY3QuanMnO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG5jb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbmNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5zaWRlYmFyVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuXG5jb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWRpdicpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RGl2KTtcblxuY29uc3QgcHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bi1kaXYnKTtcbmFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkRpdik7XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcbmFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG5wcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wb3B1cCcpO1xuYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbmNvbnN0IG1haW5UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpblRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUtZGl2Jyk7XG5tYWluLmFwcGVuZENoaWxkKG1haW5UaXRsZURpdik7XG5cbmFkZEZpcnN0UHJvamVjdCgpO1xuXG5jb25zdCBtYWluQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1idG5zLWRpdicpO1xubWFpblRpdGxlRGl2LmFwcGVuZENoaWxkKG1haW5CdG5zRGl2KTtcblxuY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0Jztcbm1haW5CdG5zRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5kZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbm1haW5CdG5zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbmNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG5tYWluLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcbmFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbm1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5jb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7IiwiaW1wb3J0IHtwcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LWRhdGEnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLWNsYXNzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBlZGl0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBkZWxldGUobmFtZSkge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC1jbGFzcy5qcyc7XG5pbXBvcnQge3Byb2plY3RzfSBmcm9tICcuL3Byb2plY3QtZGF0YS5qcyc7XG5cbmNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG5lZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtYWluVGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZS1kaXYnKTtcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGl2Jyk7XG4gICAgbWFpblRpdGxlRGl2LnByZXBlbmQoZWRpdERpdik7XG5cbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRJbnB1dC5jbGFzc0xpc3QuYWRkKCdlZGl0LWlucHV0Jyk7XG4gICAgZWRpdElucHV0LnZhbHVlID0gbWFpblRpdGxlLnRleHRDb250ZW50O1xuICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdElucHV0KTtcblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoJ2RvbmUtYnRuJyk7XG4gICAgZG9uZUJ0bi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuXG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvaiA9IGdldFByb2ooKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEVsID0gZ2V0UHJvakVsKHByb2opO1xuICAgICAgICBwcm9qLmVkaXQoZWRpdElucHV0LnZhbHVlKTtcblxuICAgICAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBtYWluVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gZWRpdElucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0RWwudGV4dENvbnRlbnQgPSBlZGl0SW5wdXQudmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9KVxufSlcblxuY29uc3QgZ2V0UHJvaiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10aXRsZScpO1xuICAgIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvai5uYW1lID09PSBtYWluVGl0bGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9qRWwgPSAocHJvaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWVzJyk7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0RWwgb2YgcHJvamVjdEVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0RWwudGV4dENvbnRlbnQgPT0gcHJvai5uYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBFbDogJywgcHJvamVjdEVsKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0RWw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC1jbGFzcy5qcyc7XG5pbXBvcnQge3Byb2plY3RzfSBmcm9tICcuL3Byb2plY3QtZGF0YS5qcyc7XG5pbXBvcnQge2Rpc3BsYXlQcm9qZWN0fSBmcm9tICcuL2Rpc3BsYXktcHJvamVjdC5qcyc7XG5cbmZ1bmN0aW9uIHByb2plY3RQb3B1cCgpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBvcHVwJyk7XG5cbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQtbGFiZWwnKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKVxuICAgIHBvcHVwLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWVzJyk7XG4gICAgcHJvamVjdEVsLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0RWwpO1xuXG4gICAgcHJvamVjdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdFBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcG9wdXAnKTtcbiAgICBwcm9qZWN0UG9wdXBEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQge3Byb2plY3RQb3B1cH07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGVkaXQoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCIvLyBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2VkaXQtdGFzay1idG4nKTtcbi8vIGVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgICBcblxuLy8gfSkiLCJjb25zdCB0YXNrUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wb3B1cC5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJyk7XG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChwb3B1cCk7XG5cbmNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xucG9wdXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3B1cC10aXRsZScpO1xucG9wdXBUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5wb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKTtcblxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbnRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJy8nKTtcbnBvcHVwLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xudGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG50YXNrLnRleHRDb250ZW50ID0gJ1Rhc2s6JztcbnRhc2tEaXYuYXBwZW5kQ2hpbGQodGFzayk7XG5cbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG50YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xudGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdXQnKTtcbnRhc2tJbnB1dC50eXBlID0gJ3RleHQnO1xudGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuXG5jb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjRGl2KTtcblxuY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbmRlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbmRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbmNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5kZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2MtaW5wdXQnKTtcbmRlc2NJbnB1dC50eXBlID0gJ3RleHQnO1xuZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG5jb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbmRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTonO1xuZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5kYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1pbnB1dCcpO1xuZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5kYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbmNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5wcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG5wcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xucHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG5jb25zdCByYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmFkaW8tY29udGFpbmVyJyk7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcik7XG5cbmNvbnN0IHJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucmVkRGl2LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWRpdicpO1xucmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmVkRGl2KTtcblxuY29uc3QgcmVkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucmVkSW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8nKTtcbnJlZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdyYWRpby1pbnB1dCcpO1xucmVkSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZWQnKTtcbnJlZElucHV0LnR5cGUgPSAncmFkaW8nO1xucmVkRGl2LmFwcGVuZENoaWxkKHJlZElucHV0KTtcblxuY29uc3QgcmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yZWQuY2xhc3NMaXN0LmFkZCgncmVkLWxhYmVsJyk7XG5yZWREaXYuYXBwZW5kQ2hpbGQocmVkKTtcblxuY29uc3Qgb3JhbmdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5vcmFuZ2VEaXYuY2xhc3NMaXN0LmFkZCgncmFkaW8tZGl2Jyk7XG5yYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcmFuZ2VEaXYpO1xuXG5jb25zdCBvcmFuZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5vcmFuZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpO1xub3JhbmdlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3JhZGlvLWlucHV0Jyk7XG5vcmFuZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ29yYW5nZScpO1xub3JhbmdlSW5wdXQudHlwZSA9ICdyYWRpbyc7XG5vcmFuZ2VEaXYuYXBwZW5kQ2hpbGQob3JhbmdlSW5wdXQpO1xuXG5jb25zdCBvcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm9yYW5nZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UtbGFiZWwnKTtcbm9yYW5nZURpdi5hcHBlbmRDaGlsZChvcmFuZ2UpO1xuXG5jb25zdCB5ZWxsb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnllbGxvd0Rpdi5jbGFzc0xpc3QuYWRkKCdyYWRpby1kaXYnKTtcbnJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHllbGxvd0Rpdik7XG5cbmNvbnN0IHllbGxvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnllbGxvd0lucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvJyk7XG55ZWxsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmFkaW8taW5wdXQnKTtcbnllbGxvd0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAneWVsbG93Jyk7XG55ZWxsb3dJbnB1dC50eXBlID0gJ3JhZGlvJztcbnllbGxvd0Rpdi5hcHBlbmRDaGlsZCh5ZWxsb3dJbnB1dCk7XG5cbmNvbnN0IHllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xueWVsbG93LmNsYXNzTGlzdC5hZGQoJ3llbGxvdy1sYWJlbCcpO1xueWVsbG93RGl2LmFwcGVuZENoaWxkKHllbGxvdyk7XG5cbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC10YXNrJyk7XG5hZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xufTtcblxuZXhwb3J0IHt0YXNrUG9wdXB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hcHAuY3NzJztcbmltcG9ydCAnLi9ob21lLmpzJztcbmltcG9ydCAnLi9jcmVhdGVUYXNrLmpzJztcbmltcG9ydCAnLi9jcmVhdGVQcm9qZWN0LmpzJztcbmltcG9ydCAnLi9wcm9qZWN0LWVkaXQtZGVsZXRlLmpzJztcbmltcG9ydCAnLi90YXNrLWVkaXQtZGVsZXRlLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=