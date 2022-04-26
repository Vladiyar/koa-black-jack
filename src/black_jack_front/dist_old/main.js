/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Deck.js":
/*!*********************!*\
  !*** ./src/Deck.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deck\": () => (/* binding */ Deck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Deck = /*#__PURE__*/function () {\n  function Deck() {\n    _classCallCheck(this, Deck);\n\n    _defineProperty(this, \"cardDeck\", []);\n\n    this.createDeck();\n  }\n\n  _createClass(Deck, [{\n    key: \"createDeck\",\n    value: function createDeck() {\n      var cardValues = {\n        J: 10,\n        Q: 10,\n        K: 10,\n        A: 11\n      };\n      var cardSuits = ['spaces', 'clubs', 'hearts', 'diamonds'];\n      var arrayOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];\n\n      for (var i = 0; i < cardSuits.length; i++) {\n        for (var j = 0; j < arrayOfCards.length; j++) {\n          var card = [cardSuits[i], arrayOfCards[j]];\n          typeof arrayOfCards[j] === 'string' ? card.splice(1, 0, cardValues[arrayOfCards[j]]) : null;\n          this.cardDeck.push(card);\n        }\n      }\n\n      var shuffleArray = function shuffleArray(array) {\n        for (var _i = array.length - 1; _i > 0; _i--) {\n          var _j = Math.floor(Math.random() * (_i + 1));\n\n          var temp = array[_i];\n          array[_i] = array[_j];\n          array[_j] = temp;\n        }\n      };\n\n      shuffleArray(this.cardDeck);\n    }\n  }, {\n    key: \"addCard\",\n    value: function addCard() {\n      return this.cardDeck.pop();\n    }\n  }]);\n\n  return Deck;\n}();\n\n//# sourceURL=webpack://task_3/./src/Deck.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deck */ \"./src/Deck.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    _defineProperty(this, \"isGameStarted\", false);\n\n    _defineProperty(this, \"gameState\", 0);\n\n    _defineProperty(this, \"players\", void 0);\n\n    _defineProperty(this, \"card\", void 0);\n\n    this.card = new _Deck__WEBPACK_IMPORTED_MODULE_0__.Deck();\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    this.players = args; // for (let i = 0; i < this.players.length; i++) {\n    //     addCard();\n    //     addCard();\n    //     nextPlayer();\n    // }\n    // this.isGameStarted = true;\n  }\n\n  _createClass(Game, [{\n    key: \"nextPlayer\",\n    value: function nextPlayer() {\n      this.gameState !== this.players.length - 1 ? this.gameState++ : this.gameState = 0;\n\n      if (this.isGameStarted) {\n        if (this.gameState === 0) {\n          var winner = {\n            highestHand: 0,\n            winnerName: ''\n          };\n\n          for (var i = 0; i < this.players.length; i++) {\n            winner['highestHand'] < this.players[i].handValue && this.players[i].handValue <= 21 ? (winner['highestHand'] = this.players[i].handValue, winner['winnerName'] = 'player ' + i) : null;\n          }\n\n          return winner;\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=webpack://task_3/./src/Game.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    _defineProperty(this, \"isCanDraw\", true);\n\n    _defineProperty(this, \"isPlayerDraw\", false);\n\n    _defineProperty(this, \"handValue\", 0);\n\n    _defineProperty(this, \"cardsArray\", []);\n  }\n\n  _createClass(Player, [{\n    key: \"drawCard\",\n    value: function drawCard(cardDescription) {\n      if (this.isCanDraw) {\n        this.cardsArray.push(cardDescription);\n        var tmpValue = 0;\n        cardDescription[1] === 11 ? this.handValue + 11 > 21 ? tmpValue = 1 : tmpValue + 11 : tmpValue = cardDescription[1];\n        return this.handValue += tmpValue;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=webpack://task_3/./src/Player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\nvar g = new _Game__WEBPACK_IMPORTED_MODULE_0__.Game(new _Player__WEBPACK_IMPORTED_MODULE_1__.Player(), new _Player__WEBPACK_IMPORTED_MODULE_1__.Player());\nvar gameArea = document.getElementById(\"game-area\");\n\nfunction createPlayerTable(playersArray) {\n  for (var i = 0; i < playersArray.length; i++) {\n    var player = document.createElement('div');\n    var playerName = document.createElement('div');\n    var playerHand = document.createElement('div');\n    var playerScore = document.createElement('div');\n    player.setAttribute(\"id\", \"player-\" + i);\n    playerName.setAttribute(\"id\", \"name-\" + i);\n    playerHand.setAttribute(\"id\", \"hand-\" + i);\n    playerScore.setAttribute(\"id\", \"score-\" + i);\n    player.className += \"player\";\n    playerName.className += \"player-name\";\n    playerHand.className += \"player-hand\";\n    playerScore.className += \"player-score\";\n    player.appendChild(playerName).innerText = \"player \" + i;\n    player.appendChild(playerHand);\n    player.appendChild(playerScore);\n    gameArea.appendChild(player);\n  }\n}\n\ncreatePlayerTable(g.players);\n\nfunction startPlayerTurn() {\n  var element = document.getElementById(\"player-\" + g.gameState);\n  element.style.borderColor = \"green\";\n  element.style.boxShadow = \"0 0 20px green\";\n}\n\nfunction stopPlayerTurn() {\n  var element = document.getElementById(\"player-\" + g.gameState);\n  element.style.borderColor = \"#575757\";\n  element.style.boxShadow = \"none\";\n}\n\nvar gameCardSuits = {\n  spaces: '♠',\n  clubs: '♣',\n  hearts: '♥',\n  diamonds: '♦'\n};\n\nfunction addCard() {\n  g.players[g.gameState].drawCard(g.card.addCard()) > 21 ? g.players[g.gameState].isCanDraw = false : null;\n  document.getElementById('score-' + g.gameState).innerText = g.players[g.gameState].handValue; // setInterval(() => {g.players[g.gameState].handValue > 21 ? document.getElementById('score-' + g.gameState).innerText = 'Overdrawn': null}, 1000)\n\n  var playerHand = document.getElementById('hand-' + g.gameState);\n  var card = document.createElement(\"div\");\n  var cardSuitTop = document.createElement(\"div\");\n  var cardValue = document.createElement(\"div\");\n  var cardSuitBottom = document.createElement(\"div\");\n  card.className += \"card\";\n  playerHand.className = \"player-hand\";\n\n  for (var i = 0; i < g.players[g.gameState].cardsArray.length; i++) {\n    cardSuitTop.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];\n    cardValue.innerText = g.players[g.gameState].cardsArray[i][2] ? g.players[g.gameState].cardsArray[i][2] : g.players[g.gameState].cardsArray[i][1];\n    cardSuitBottom.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];\n    g.players[g.gameState].cardsArray[i][0] === 'diamonds' || g.players[g.gameState].cardsArray[i][0] === 'hearts' ? card.style.color = \"red\" : card.style.color = \"black\";\n    card.appendChild(cardSuitTop);\n    card.appendChild(cardValue);\n    card.appendChild(cardSuitBottom);\n    playerHand.appendChild(card);\n  } // document.getElementById('card-suit-top'+g.gameState).innerText = gameCardSuits[g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][0]];\n  // document.getElementById('card-value'+g.gameState).innerText = g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][2] ? g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][2] : g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][1];\n  // document.getElementById('card-suit-bottom'+g.gameState).innerText = gameCardSuits[g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][0]];\n\n\n  if (!g.players[g.gameState].isCanDraw) {\n    g.players[g.gameState].isPlayerDraw = false;\n    var element = document.getElementById(\"player-\" + g.gameState);\n    element.style.boxShadow = \"none\";\n    element.style.borderColor = \"red\";\n    nextPlayer();\n  }\n}\n\nfunction nextPlayer() {\n  g.players[g.gameState].isCanDraw ? stopPlayerTurn() : null;\n  var winner = g.nextPlayer();\n\n  if (g.isGameStarted) {\n    startPlayerTurn();\n  }\n\n  if (winner && winner['highestHand'] === 0) {\n    document.getElementById('winner-info').innerText = \"It's a draw\";\n    document.getElementById('module-window').className = \"open-window\";\n    return;\n  }\n\n  if (winner) {\n    document.getElementById('winner-info').innerText = 'Won ' + winner['winnerName'] + ' with ' + winner['highestHand'];\n    document.getElementById('module-window').className = \"open-window\";\n  }\n}\n\nfor (var i = 0; i < g.players.length; i++) {\n  addCard();\n  addCard();\n  nextPlayer();\n}\n\ng.isGameStarted = true;\nstartPlayerTurn();\n\nfunction restart() {\n  location.reload();\n}\n\nvar buttonAddCard = document.getElementById('hit');\nvar buttonNextPlayer = document.getElementById('stand');\nvar cardBack = document.getElementById('card-back');\nvar buttonPlayAgain = document.getElementById('play-again');\nbuttonAddCard.addEventListener(\"click\", addCard);\nbuttonNextPlayer.addEventListener(\"click\", nextPlayer);\ncardBack.addEventListener(\"click\", addCard);\nbuttonPlayAgain.addEventListener(\"click\", restart);\n\n//# sourceURL=webpack://task_3/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist_old/cjs.js!./node_modules/sass-loader/dist_old/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist_old/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist_old/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist_old/runtime/api.js */ \"./node_modules/css-loader/dist_old/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist_old/runtime/getUrl.js */ \"./node_modules/css-loader/dist_old/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/card-back.png */ \"./src/images/card-back.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".open-window {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  position: fixed;\\n  background-color: rgba(50, 95, 50, 0.9);\\n  color: #fff;\\n  font-size: 5.3em;\\n  width: 90%;\\n  height: 90%;\\n  left: 5%;\\n  top: 5%;\\n  z-index: 1;\\n}\\n.open-window .play-again {\\n  width: 200px;\\n  height: 100px;\\n  margin-top: 300px;\\n  font-size: 0.5em;\\n  border: 5px solid red;\\n}\\n.open-window .play-again:hover {\\n  background: rgb(106, 0, 255);\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\n.module-window {\\n  display: none;\\n}\\n\\n.container {\\n  display: flex;\\n  height: 100vh;\\n  width: 100%;\\n}\\n.container .game-area {\\n  display: flex;\\n  width: 70%;\\n  height: 100%;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n@media only screen and (max-width: 800px) {\\n  .container .game-area {\\n    flex-direction: column;\\n    width: 50%;\\n  }\\n}\\n.container .game-area .player {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  flex-direction: column;\\n  background-color: #ccc;\\n  height: 300px;\\n  width: 500px;\\n  margin: 20px;\\n  color: #000;\\n  font-size: 3em;\\n  border: 5px solid #575757;\\n}\\n@media only screen and (max-width: 800px) {\\n  .container .game-area .player {\\n    width: 200px;\\n    font-size: 30px;\\n  }\\n}\\n.container .game-area .player .player-name {\\n  align-items: start;\\n  margin-left: -90px;\\n}\\n.container .game-area .player .player-hand {\\n  display: flex;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n@media only screen and (max-width: 800px) {\\n  .container .game-area .player .player-hand {\\n    width: 200px;\\n  }\\n}\\n.container .game-area .player .player-hand .card {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  background-color: #fff;\\n  border-radius: 5px;\\n  height: 100px;\\n  width: 75px;\\n  font-size: 30px;\\n  margin-right: 10px;\\n}\\n.container .game-area .player .player-hand .card :first-child {\\n  margin-right: 40px;\\n}\\n.container .game-area .player .player-hand .card :last-child {\\n  transform: rotate(180deg);\\n  margin-left: 40px;\\n}\\n.container .sidebar {\\n  display: flex;\\n  position: fixed;\\n  right: 0;\\n  justify-content: center;\\n  align-items: center;\\n  width: 30%;\\n  height: 98%;\\n  flex-direction: column;\\n  border: 5px solid green;\\n}\\n@media only screen and (max-width: 800px) {\\n  .container .sidebar {\\n    align-items: baseline;\\n    border: none;\\n    right: 20px;\\n  }\\n}\\n.container .sidebar .card-back {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  height: 200px;\\n  width: 150px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n.container .sidebar .button {\\n  height: 30px;\\n  width: 150px;\\n}\\n.container .sidebar button:first-of-type {\\n  margin-top: 30px;\\n  margin-bottom: 15px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task_3/./src/scss/main.scss?./node_modules/css-loader/dist_old/cjs.js!./node_modules/sass-loader/dist_old/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist_old/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://task_3/./node_modules/css-loader/dist_old/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist_old/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://task_3/./node_modules/css-loader/dist_old/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist_old/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task_3/./node_modules/css-loader/dist_old/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist_old/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist_old/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist_old/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist_old/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist_old/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist_old/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist_old/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist_old/cjs.js!../../node_modules/sass-loader/dist_old/cjs.js!./main.scss */ \"./node_modules/css-loader/dist_old/cjs.js!./node_modules/sass-loader/dist_old/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task_3/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist_old/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task_3/./node_modules/style-loader/dist_old/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/card-back.png":
/*!**********************************!*\
  !*** ./src/images/card-back.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26c8a4ad07c72b00df43.png\";\n\n//# sourceURL=webpack://task_3/./src/images/card-back.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;