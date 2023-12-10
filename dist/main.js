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
    align-items: center;
    gap: 10px;
    color:rgb(127, 162, 173);
    font-size: 1.2rem;
    font-weight: 700;
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

.main-title {
    color: rgb(208, 231, 237);
    font-size: 2.5rem;
    margin: 0;
}

.project-due-date {
    color:rgb(208, 231, 237);
    font-size: 1.5rem;
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

.task-priority {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background-color: red;
}

/* task popup styles */
.task-popup {
    background-color: rgb(208, 231, 237);
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

.task-input {
    border: none;
    border-bottom: 1px solid rgb(13, 58, 72);
    height: 1.3rem;
    font-family: 'Mina', sans-serif;
    background-color:rgb(208, 231, 237);
}

.checkbox-container {
    display: flex;
    justify-content: space-between;
}

.checkbox-div {
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
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n    margin: 0;\n    font-family: 'Mina', sans-serif;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 300px auto;\n    grid-template-rows: 100px auto;\n}\n\n/* header styles */\n.header {\n    background-color: rgb(127, 162, 173);\n    width: 100vw;\n    height: 100px;\n    margin: 0;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    margin: 0;\n    color: rgb(13, 58, 72);\n    font-size: 3rem;\n    margin: 0 20px;\n}\n\n/* sidebar styles */\n.sidebar {\n    background-color: rgb(208, 231, 237);\n    height: 100vh;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 20px 20px 50px;\n    box-sizing: border-box;\n    grid-column: 1 / 2;\n}\n\nh2 {\n    color: rgb(13, 58, 72);\n    margin: 10px;\n    font-size: 2rem;\n    position: relative;\n    right: 30px;\n}\n\n.add-project-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color:rgb(127, 162, 173);\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.create-icon {\n    height: 36px;\n    width: 36px;\n    background-color: rgb(127, 162, 173);\n    border: none;\n}\n\n.project-names {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 8px 0;\n}\n\n/* main styles */\n.main {\n    background-color: rgb(13, 58, 72);\n    padding: 30px 50px;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.main-title-div {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    margin: 0;\n}\n\n.main-title {\n    color: rgb(208, 231, 237);\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.project-due-date {\n    color:rgb(208, 231, 237);\n    font-size: 1.5rem;\n}\n\n.add-task-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0;\n    margin-left: 30px;\n    margin-bottom: 30px;\n}\n\n.add-task-btn {\n    background-color: rgb(13, 58, 72);\n    border: none;\n    color:rgb(127, 162, 173);\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n/* project styles */\n.main-content {\n    display: flex;\n    gap: 50px;\n}\n\n.project-card {\n    width: 700px;\n    height: 400px;\n    background-color: rgb(127, 162, 173);\n    border: 10px solid rgb(208, 231, 237);\n    border-radius: 20px;\n}\n\n.task {\n    border-bottom: 2px solid rgb(208, 231, 237);\n    padding: 15px;\n}\n\n.task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-due-div {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.task-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    padding: 0;\n}\n\n.task-desc {\n    margin: 0;\n    margin-left: 10px;\n}\n\n.task-due-date {\n    margin: 0;\n}\n\n.task-priority {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: red;\n}\n\n/* task popup styles */\n.task-popup {\n    background-color: rgb(208, 231, 237);\n    width: 250px;\n    height: 400px;\n    padding: 20px;\n    box-sizing: border-box;\n    border: 5px solid rgb(127, 162, 173);\n    border-radius: 20px;\n}\n\n.popup-title {\n    font-weight: 400;\n    font-size: 1.3rem;\n    margin: 0;\n    margin-bottom: 10px;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-input {\n    border: none;\n    border-bottom: 1px solid rgb(13, 58, 72);\n    height: 1.3rem;\n    font-family: 'Mina', sans-serif;\n    background-color:rgb(208, 231, 237);\n}\n\n.checkbox-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.checkbox-div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.red-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: red; \n}\n\n.orange-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: orange; \n}\n\n.yellow-label {\n    width: 12px;\n    height: 12px;\n    border: none;\n    border-radius: 50%;\n    background-color: yellow;\n}\n\n.submit-task {\n    align-self: center;\n    background-color: rgb(13, 58, 72);\n    font-family: 'Mina', sans-serif;\n    color:rgb(208, 231, 237);\n    border: 2px solid rgb(127, 162, 173);\n    border-radius: 15px;\n    width: 80px;\n    height: 25px;\n    padding: 5px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPopup */ "./src/taskPopup.js");
/* harmony import */ var _taskPopup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_taskPopup__WEBPACK_IMPORTED_MODULE_0__);


const addTaskBtn = document.querySelector('.add-task-btn');

// when button is clicked, create a popup that lets us add a task.
addTaskBtn.addEventListener('click', (_taskPopup__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_create_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/create.svg */ "./src/icons/create.svg");


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

const createIcon = document.createElement('img');
createIcon.classList.add('create-icon');
// createIcon.src = getCreateIcon;
addProjectDiv.appendChild(createIcon);

const addProject = document.createElement('p');
addProject.classList.add('add-project');
addProject.textContent = 'Add Project';
addProjectDiv.appendChild(addProject);

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

const task = document.createElement('div');
task.classList.add('task');
projectCard.appendChild(task);

const taskHeader = document.createElement('div');
taskHeader.classList.add('task-header');
task.appendChild(taskHeader);

const taskTitle = document.createElement('h3');
taskTitle.classList.add('task-title');
taskTitle.textContent = 'First Task';
taskHeader.appendChild(taskTitle);

const taskDueDiv = document.createElement('div');
taskDueDiv.classList.add('task-due-div');
taskHeader.appendChild(taskDueDiv);

const taskDesc = document.createElement('p');
taskDesc.classList.add('task-desc');
taskDesc.textContent = 'This is my task description.';
task.appendChild(taskDesc);

const taskDueDate = document.createElement('p');
taskDueDate.classList.add('task-due-date');
taskDueDate.textContent = '12/27';
taskDueDiv.appendChild(taskDueDate);

const taskPriority = document.createElement('div');
taskPriority.classList.add('task-priority');
taskDueDiv.appendChild(taskPriority);

// create default project for todos to be added to
// create project button to create new projects
// create todos button to create new todos
// drag and drop to change todos placement?


/***/ }),

/***/ "./src/taskPopup.js":
/*!**************************!*\
  !*** ./src/taskPopup.js ***!
  \**************************/
/***/ (() => {

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
popup.appendChild(taskForm);

const taskDiv = document.createElement('div');
taskDiv.classList.add('task-div');
taskForm.appendChild(taskDiv);

const task = document.createElement('label');
task.classList.add('task-label');
task.textContent = 'Task:';
taskDiv.appendChild(task);

const taskInput = document.createElement('input');
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
descInput.classList.add('task-input');
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
dateInput.classList.add('task-input');
dateInput.type = 'date';
dateDiv.appendChild(dateInput);

const priorityDiv = document.createElement('div');
priorityDiv.classList.add('task-div');
taskForm.appendChild(priorityDiv);

const priority = document.createElement('label');
priority.classList.add('task-label');
priority.textContent = 'Priority:';
priorityDiv.appendChild(priority);

const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');
priorityDiv.appendChild(checkboxContainer);

const redDiv = document.createElement('div');
redDiv.classList.add('checkbox-div');
checkboxContainer.appendChild(redDiv);

const redInput = document.createElement('input');
redInput.classList.add('checkbox');
redInput.type = 'checkbox';
redDiv.appendChild(redInput);

const red = document.createElement('div');
red.classList.add('red-label');
redDiv.appendChild(red);

const orangeDiv = document.createElement('div');
orangeDiv.classList.add('checkbox-div');
checkboxContainer.appendChild(orangeDiv);

const orangeInput = document.createElement('input');
orangeInput.classList.add('checkbox');
orangeInput.type = 'checkbox';
orangeDiv.appendChild(orangeInput);

const orange = document.createElement('div');
orange.classList.add('orange-label');
orangeDiv.appendChild(orange);

const yellowDiv = document.createElement('div');
yellowDiv.classList.add('checkbox-div');
checkboxContainer.appendChild(yellowDiv);

const yellowInput = document.createElement('input');
yellowInput.classList.add('checkbox');
yellowInput.type = 'checkbox';
yellowDiv.appendChild(yellowInput);

const yellow = document.createElement('div');
yellow.classList.add('yellow-label');
yellowDiv.appendChild(yellow);

const addBtn = document.createElement('btn');
addBtn.classList.add('submit-task');
addBtn.textContent = 'Add';
taskForm.appendChild(addBtn);

/***/ }),

/***/ "./src/icons/create.svg":
/*!******************************!*\
  !*** ./src/icons/create.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c59174103fba0f44c90.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RUFBOEUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFV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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0R0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLmNzcz9hNjcyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tQb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0bztcbn1cblxuLyogaGVhZGVyIHN0eWxlcyAqL1xuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW46IDAgMjBweDtcbn1cblxuLyogc2lkZWJhciBzdHlsZXMgKi9cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDUwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzMHB4O1xufVxuXG4uYWRkLXByb2plY3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY3JlYXRlLWljb24ge1xuICAgIGhlaWdodDogMzZweDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvamVjdC1uYW1lcyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4vKiBtYWluIHN0eWxlcyAqL1xuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTgsIDcyKTtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLm1haW4tdGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucHJvamVjdC1kdWUtZGF0ZSB7XG4gICAgY29sb3I6cmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkLXRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBwcm9qZWN0IHN0eWxlcyAqL1xuLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YXNrIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIwOCwgMjMxLCAyMzcpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stZHVlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YXNrLWRlc2Mge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRhc2stZHVlLWRhdGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhc2stcHJpb3JpdHkge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogdGFzayBwb3B1cCBzdHlsZXMgKi9cbi50YXNrLXBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucG9wdXAtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YXNrLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi50YXNrLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFzay1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XG4gICAgaGVpZ2h0OiAxLjNyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jaGVja2JveC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnJlZC1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBcbn1cblxuLm9yYW5nZS1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcbn1cblxuLnllbGxvdy1sYWJlbCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uc3VibWl0LXRhc2sge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XG4gICAgZm9udC1mYW1pbHk6ICdNaW5hJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNywgMTYyLCAxNzMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xcbn1cXG5cXG4vKiBoZWFkZXIgc3R5bGVzICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLyogc2lkZWJhciBzdHlsZXMgKi9cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCA1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6IHJnYigxMywgNTgsIDcyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOnJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jcmVhdGUtaWNvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDhweCAwO1xcbn1cXG5cXG4vKiBtYWluIHN0eWxlcyAqL1xcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWFpbi10aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgICBjb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1kdWUtZGF0ZSB7XFxuICAgIGNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6cmdiKDEyNywgMTYyLCAxNzMpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogcHJvamVjdCBzdHlsZXMgKi9cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAxNjIsIDE3Myk7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDgsIDIzMSwgMjM3KTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kdWUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YXNrLWRlc2Mge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiB0YXNrIHBvcHVwIHN0eWxlcyAqL1xcbi50YXNrLXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjMxLCAyMzcpO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnBvcHVwLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTMsIDU4LCA3Mik7XFxuICAgIGhlaWdodDogMS4zcmVtO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDgsIDIzMSwgMjM3KTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNoZWNrYm94LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucmVkLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXFxufVxcblxcbi5vcmFuZ2UtbGFiZWwge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyBcXG59XFxuXFxuLnllbGxvdy1sYWJlbCB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zdWJtaXQtdGFzayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1OCwgNzIpO1xcbiAgICBmb250LWZhbWlseTogJ01pbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjpyZ2IoMjA4LCAyMzEsIDIzNyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjcsIDE2MiwgMTczKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrUG9wdXAgZnJvbSAnLi90YXNrUG9wdXAnO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuXG4vLyB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkLCBjcmVhdGUgYSBwb3B1cCB0aGF0IGxldHMgdXMgYWRkIGEgdGFzay5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrUG9wdXApOyIsImltcG9ydCBnZXRDcmVhdGVJY29uIGZyb20gJy4vaWNvbnMvY3JlYXRlLnN2Zyc7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5zaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSk7XG5cbmNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtZGl2Jyk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpO1xuXG5jb25zdCBjcmVhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jcmVhdGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1pY29uJyk7XG4vLyBjcmVhdGVJY29uLnNyYyA9IGdldENyZWF0ZUljb247XG5hZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUljb24pO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5hZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5jb25zdCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5maXJzdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lcycpO1xuZmlyc3RQcm9qZWN0LnRleHRDb250ZW50ID0gJ0ZpcnN0IFByb2plY3QnO1xuc2lkZWJhci5hcHBlbmRDaGlsZChmaXJzdFByb2plY3QpO1xuXG5jb25zdCBtYWluVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlLWRpdicpO1xubWFpbi5hcHBlbmRDaGlsZChtYWluVGl0bGVEaXYpO1xuXG5jb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW4tdGl0bGUnKTtcbm1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdGaXJzdCBQcm9qZWN0Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG5jb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnByb2plY3REdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZHVlLWRhdGUnKTtcbnByb2plY3REdWVEYXRlLnRleHRDb250ZW50ID0gJzEyLzI5Jztcbm1haW5UaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG5cbmNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG5tYWluLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG5jb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYWRkVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWljb24nKTtcbmFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0ljb24pO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5hZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5tYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG5jb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbnByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRhc2spO1xuXG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG50YXNrLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xudGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbnRhc2tUaXRsZS50ZXh0Q29udGVudCA9ICdGaXJzdCBUYXNrJztcbnRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuY29uc3QgdGFza0R1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza0R1ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kaXYnKTtcbnRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURpdik7XG5cbmNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG50YXNrRGVzYy50ZXh0Q29udGVudCA9ICdUaGlzIGlzIG15IHRhc2sgZGVzY3JpcHRpb24uJztcbnRhc2suYXBwZW5kQ2hpbGQodGFza0Rlc2MpO1xuXG5jb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbnRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gJzEyLzI3JztcbnRhc2tEdWVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XG50YXNrRHVlRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cbi8vIGNyZWF0ZSBkZWZhdWx0IHByb2plY3QgZm9yIHRvZG9zIHRvIGJlIGFkZGVkIHRvXG4vLyBjcmVhdGUgcHJvamVjdCBidXR0b24gdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuLy8gY3JlYXRlIHRvZG9zIGJ1dHRvbiB0byBjcmVhdGUgbmV3IHRvZG9zXG4vLyBkcmFnIGFuZCBkcm9wIHRvIGNoYW5nZSB0b2RvcyBwbGFjZW1lbnQ/XG4iLCJjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcG9wdXAnKTtcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5wb3B1cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLXRpdGxlJyk7XG5wb3B1cFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbnBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpO1xuXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xucG9wdXAuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG5jb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG50YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbnRhc2sudGV4dENvbnRlbnQgPSAnVGFzazonO1xudGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrKTtcblxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XG50YXNrSW5wdXQudHlwZSA9ICd0ZXh0JztcbnRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG5cbmNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG5kZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5kZXNjRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuXG5jb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdXQnKTtcbmRlc2NJbnB1dC50eXBlID0gJ3RleHQnO1xuZGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG5jb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5kYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbmRhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTonO1xuZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XG5kYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbmRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbnByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5wcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbmNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKTtcbnByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcblxuY29uc3QgcmVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yZWREaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZGl2Jyk7XG5jaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChyZWREaXYpO1xuXG5jb25zdCByZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yZWRJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xucmVkSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG5yZWREaXYuYXBwZW5kQ2hpbGQocmVkSW5wdXQpO1xuXG5jb25zdCByZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJlZC5jbGFzc0xpc3QuYWRkKCdyZWQtbGFiZWwnKTtcbnJlZERpdi5hcHBlbmRDaGlsZChyZWQpO1xuXG5jb25zdCBvcmFuZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm9yYW5nZURpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1kaXYnKTtcbmNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKG9yYW5nZURpdik7XG5cbmNvbnN0IG9yYW5nZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbm9yYW5nZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5vcmFuZ2VJbnB1dC50eXBlID0gJ2NoZWNrYm94Jztcbm9yYW5nZURpdi5hcHBlbmRDaGlsZChvcmFuZ2VJbnB1dCk7XG5cbmNvbnN0IG9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3JhbmdlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZS1sYWJlbCcpO1xub3JhbmdlRGl2LmFwcGVuZENoaWxkKG9yYW5nZSk7XG5cbmNvbnN0IHllbGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xueWVsbG93RGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWRpdicpO1xuY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVsbG93RGl2KTtcblxuY29uc3QgeWVsbG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xueWVsbG93SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbnllbGxvd0lucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xueWVsbG93RGl2LmFwcGVuZENoaWxkKHllbGxvd0lucHV0KTtcblxuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG55ZWxsb3cuY2xhc3NMaXN0LmFkZCgneWVsbG93LWxhYmVsJyk7XG55ZWxsb3dEaXYuYXBwZW5kQ2hpbGQoeWVsbG93KTtcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXRhc2snKTtcbmFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hcHAuY3NzJztcbmltcG9ydCAnLi9ob21lLmpzJztcbmltcG9ydCAnLi9jcmVhdGVUYXNrLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=