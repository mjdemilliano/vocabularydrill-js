/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	(function () {
	  var cards = __webpack_require__(1);
	  var icard = 0;
	  var flipstate = 0;
	  var wordElement = document.querySelector(".word");
	  var pronounciationElement = document.querySelector(".pronounciation");
	
	  function render() {
	    wordElement.innerHTML = cards[icard][flipstate === 0 ? 'a' : 'b'];
	    pronounciationElement.innerHTML = flipstate === 0 ? cards[icard].p : "";
	  }
	
	  function flip() {
	    flipstate = 1 - flipstate;
	    render();
	  }
	
	  function next() {
	    icard = Math.floor(Math.random() * cards.length);
	    flipstate = Math.random() >= 0.5 ? 1 : 0;
	    render();
	  }
	
	  function init() {
	    document.querySelectorAll('button[data-rel="flip"]').forEach(function (btn) {
	      btn.addEventListener('click', flip);
	    });
	    document.querySelectorAll('button[data-rel="next"]').forEach(function (btn) {
	      btn.addEventListener('click', next);
	    });
	    next();
	  }
	
	  init();
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
		{
			"a": "تعریف",
			"p": "ta`rif",
			"b": "compliment",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تعریفی",
			"p": "ta`rifi",
			"b": "a compliment",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "داشتن",
			"p": "dāŝtan",
			"b": "to have",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "نداشت",
			"p": "nadāŝt",
			"b": "it did not have",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تعریفی نداشت",
			"p": "ta`rifi nadāŝt",
			"b": "nothing to write home about (lit: it did not have a compliment)",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "چطور",
			"p": "cetour",
			"b": "how",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "مگه",
			"p": "mage",
			"b": "but",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "چطور مگه؟",
			"p": "cetour mage?",
			"b": "But why? How come?",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "هیچ",
			"p": "hic",
			"b": "none; nil",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "کار",
			"p": "kār",
			"b": "work, job, activity",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خاسّ",
			"p": "xāss",
			"b": "special, specific",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "کردن",
			"p": "kardan",
			"b": "to do",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "نکردم",
			"p": "nakardam",
			"b": "i didn't do",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تو",
			"p": "tu",
			"b": "in",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خونه",
			"p": "xune",
			"b": "house, home",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "موندن",
			"p": "mundan",
			"b": "to stay",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تلویزیون",
			"p": "televizion",
			"b": "television",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تماشا",
			"p": "tamāŝā",
			"b": "watching",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تماشا کردن",
			"p": "tamāŝā kardan",
			"b": "to watch (lit: to do watching)",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بودن",
			"p": "budan",
			"b": "to be",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بود",
			"p": "bud",
			"b": "(it) was",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "نبود",
			"p": "nabud",
			"b": "(it) wasn't",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "برای",
			"p": "barāye",
			"b": "for",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شام",
			"p": "ŝām",
			"b": "dinner",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "از",
			"p": "az",
			"b": "from",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "سوپرمارکت",
			"p": "supermārket",
			"b": "supermarket",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "ساندویچ",
			"p": "sāndevic",
			"b": "sandwich",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "پیتزا",
			"p": "pitzā",
			"b": "pizza",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خریدن",
			"p": "xaridan",
			"b": "to buy",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خریدم",
			"p": "xaridam",
			"b": "i bought",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خوردن",
			"p": "xordan",
			"b": "to eat",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خوردم",
			"p": "xordam",
			"b": "i ate",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "دوست",
			"p": "dust",
			"b": "friend",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "دوستم",
			"p": "dustam",
			"b": "my friend",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "جورد",
			"p": "xord",
			"b": "(s/he) ate",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بعد",
			"p": "ba`d",
			"b": "then, afterwards",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تا",
			"p": "tā",
			"b": "until",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "صبح",
			"p": "sobh",
			"b": "morning",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شطرنج",
			"p": "ŝatranj",
			"b": "chess",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بازی کردن",
			"p": "bāzi kardan",
			"b": "to play",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بردن",
			"p": "bordan",
			"b": "to win",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بردی",
			"p": "bordi",
			"b": "you won",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "یا",
			"p": "yā",
			"b": "or",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "باختن",
			"p": "bāxtan",
			"b": "to lose",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "باختی",
			"p": "bāxti",
			"b": "you lost",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "مساوی",
			"p": "mosāvi",
			"b": "equal",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شدن",
			"p": "ŝodan",
			"b": "to become",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "مساوی شدیم",
			"p": "mosāvi ŝodim",
			"b": "we drew (lit: we became equal)",
			"r": "Colloquial Persian - Unit 4"
		}
	];

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map