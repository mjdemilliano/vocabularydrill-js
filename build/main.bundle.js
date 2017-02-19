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
	  var cardSets = {
	    persian: __webpack_require__(1),
	    russian: __webpack_require__(2)
	  };
	  var cards;
	  var icard = 0;
	  var flipstate = 0;
	  var wordElement = document.querySelector(".word");
	  var pronounciationElement = document.querySelector(".pronounciation");
	  var menuElement = document.querySelector('nav.menu');
	  var menuButton = document.querySelector('button.menu');
	
	  function loadCardSet(cardSet) {
	    cards = cardSets[cardSet];
	    icard = 0;
	    next();
	  }
	
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
	
	  function openMenu() {
	    menuElement.style.transform = 'translateX(0px)';
	  }
	
	  function closeMenu() {
	    menuElement.style.transform = '';
	  }
	
	  function init() {
	    document.querySelectorAll('button[data-rel="flip"]').forEach(function (btn) {
	      btn.addEventListener('click', flip);
	    });
	    document.querySelectorAll('button[data-rel="next"]').forEach(function (btn) {
	      btn.addEventListener('click', next);
	    });
	    loadCardSet('persian');
	
	    // Menu.
	    menuButton.addEventListener('click', function (event) {
	      openMenu();
	      event.stopPropagation();
	      event.preventDefault();
	    });
	    menuElement.addEventListener('click', function (event) {
	      var cardSet = event.target.dataset.cardSet;
	      loadCardSet(cardSet);
	      event.preventDefault();
	      event.stopPropagation();
	      closeMenu();
	    });
	    document.addEventListener('click', function (event) {
	      closeMenu();
	    });
	
	    // Navigation by keys.
	    document.addEventListener('keydown', function (event) {
	      if (event.keyCode === 39) {
	        next();
	      } else if (event.keyCode === 32) {
	        flip();
	      }
	    });
	  }
	
	  init();
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = [
		{
			"a": "سلام",
			"p": "salām",
			"b": "hello",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "صبح",
			"p": "sob(h)",
			"b": "morning",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "بهخیر",
			"p": "be-xeir",
			"b": "may it be good",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "صبح بهخیر",
			"p": "sob(h) be-xeir",
			"b": "good morning",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "خدا",
			"p": "xodā",
			"b": "God",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "حافظ",
			"p": "hāfez",
			"b": "protector",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "خدا حافظ",
			"p": "xodā hāfez",
			"b": "goodbye",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "روز",
			"p": "ruz",
			"b": "day",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "ظهر",
			"p": "zohr",
			"b": "noon",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "عصر",
			"p": "asr",
			"b": "(late) afternoon",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "سفر",
			"p": "safar",
			"b": "journey",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "بفرمایید",
			"p": "befarmāyid",
			"b": "go ahead / what can I do for you?",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "ببخشید",
			"p": "bebaxŝid",
			"b": "sorry, forgive me",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "تلفن",
			"p": "telefon",
			"b": "telephone (call)",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "مرسی",
			"p": "mersi",
			"b": "thanks",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "الو",
			"p": "alou",
			"b": "hello (telephone)",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "دکتر",
			"p": "doktor",
			"b": "doctor",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "ایشون",
			"p": "iŝun",
			"b": "s/he (polite), they",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "خانمِ",
			"p": "xānom-e",
			"b": "Ms/Mrs",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "پیغام",
			"p": "peiqām",
			"b": "message",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "هدیه",
			"p": "hedye",
			"b": "present, gift",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "بسته",
			"p": "baste",
			"b": "parcel, gift",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "بلیت",
			"p": "belit",
			"b": "ticket",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "من",
			"p": "man",
			"b": "I",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "تو",
			"p": "to",
			"b": "you (inf.)",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "او",
			"p": "u",
			"b": "he, she",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "آن",
			"p": "ān",
			"b": "it, that",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "ما",
			"p": "mā",
			"b": "we",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "شما",
			"p": "ŝomā",
			"b": "you (formal, pl.)",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "آنها",
			"p": "ānhā",
			"b": "they",
			"r": "Colloquial Persian - Unit 1"
		},
		{
			"a": "جان",
			"p": "jān",
			"b": "dear",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چطوری",
			"p": "ceto(u)ri",
			"b": "how're you (inf.)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "نیستم",
			"p": "nistam",
			"b": "I'm not",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چطورند",
			"p": "ceto(u)rand",
			"b": "how's s/he (formal)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "مامان",
			"p": "māmān",
			"b": "mum, mom",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خوبند",
			"p": "xuband",
			"b": "s/he's well (formal)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خانواده",
			"p": "xānevāde",
			"b": "family",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "همه",
			"p": "hame",
			"b": "all",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کم",
			"p": "kam",
			"b": "little",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "جسته",
			"p": "xaste",
			"b": "tired",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "زندگی",
			"p": "zendegi",
			"b": "life",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "تنبل",
			"p": "tanbal",
			"b": "lazy",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "فعلاً",
			"p": "fe'lan",
			"b": "for now",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خوش حال",
			"p": "xoŝ-hāl",
			"b": "happy",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "اینجا",
			"p": "injā",
			"b": "here",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "گرسنه",
			"p": "gorosne",
			"b": "hungry",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چرا",
			"p": "cerā",
			"b": "why",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چند",
			"p": "cand",
			"b": "how many",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کِی",
			"p": "kei",
			"b": "when",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کدوم",
			"p": "kodum",
			"b": "which",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چگونه",
			"p": "cegune",
			"b": "how (lit.)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کو",
			"p": "ku",
			"b": "where is it? (col.)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چند تا",
			"p": "cand tā",
			"b": "how many (col.)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چند وقت",
			"p": "cand vaqt",
			"b": "how long",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چقدر",
			"p": "ceqadr",
			"b": "how much",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "اسم",
			"p": "esm",
			"b": "name",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چی",
			"p": "ci",
			"b": "what",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "چیه",
			"p": "cie",
			"b": "what's",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خوشوقت",
			"p": "xoŝ-vaqt",
			"b": "pleased",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "حال",
			"p": "hāl",
			"b": "health",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "این",
			"p": "in",
			"b": "this",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "آقا",
			"p": "āqā",
			"b": "sir, gentleman",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کی",
			"p": "ki",
			"b": "who",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "اون",
			"p": "un",
			"b": "that",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "پدر",
			"p": "pedar",
			"b": "father",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "ماشاءاللّ'",
			"p": "māŝā(a)llāh",
			"b": "May God preserve him",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خوشتیپ",
			"p": "xoŝ-tib",
			"b": "handsome",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خانم",
			"p": "xanom",
			"b": "lady",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "مادر",
			"p": "mādar",
			"b": "mother",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "کامپیوتر",
			"p": "kāmpiuter",
			"b": "computer",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "آدرس",
			"p": "ādres",
			"b": "address",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "شماره تلفن",
			"p": "ŝomāre telefon",
			"b": "telephone number",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "تاریخ",
			"p": "tārix",
			"b": "date",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "تارخ تولّد",
			"p": "tārix-e tavallod",
			"b": "date of birth",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "و",
			"p": "va (col. o)",
			"b": "and",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بابا",
			"p": "bābā",
			"b": "dad",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "ماشین",
			"p": "māŝin",
			"b": "car",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "مو",
			"p": "mu",
			"b": "hair",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "لباس",
			"p": "lebās",
			"b": "clothes, dress",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بو",
			"p": "bu",
			"b": "smell",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "خونه",
			"p": "xune",
			"b": "house",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بد",
			"p": "bad",
			"b": "bad",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بلند",
			"p": "boland",
			"b": "long",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بزرگ",
			"p": "bozorg",
			"b": "large",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "مشکی",
			"p": "meŝki",
			"b": "black",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "بور",
			"p": "bur",
			"b": "blond(e)",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "شیک",
			"p": "ŝik",
			"b": "chic",
			"r": "Colloquial Persian - Unit 2"
		},
		{
			"a": "زن",
			"p": "zan",
			"b": "woman",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "نه",
			"p": "na",
			"b": "no",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "ملّیّت",
			"p": "melliyat",
			"b": "nationality",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "چی",
			"p": "ci",
			"b": "what",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "چیه",
			"p": "cie",
			"b": "what's",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "بریتانیایی",
			"p": "beritāniāyi",
			"b": "British",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "متأهّل",
			"p": "mota`ahhel",
			"b": "married",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "بله",
			"p": "bale",
			"b": "yes",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "خانم",
			"p": "xānom",
			"b": "wife, madam",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "کجا",
			"p": "kojā",
			"b": "where",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "کجایی",
			"p": "kojāyi",
			"b": "where from",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "هم",
			"p": "ham",
			"b": "too, also",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "محلّ",
			"p": "mahall",
			"b": "place, location",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "کجاست",
			"p": "kojāst",
			"b": "where's",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "لندن",
			"p": "landan",
			"b": "London",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "سرگرمی",
			"p": "sargarmi",
			"b": "hobby",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "سرگرمیها",
			"p": "sargarmihā",
			"b": "hobbies",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "موسیقی",
			"p": "musiqi",
			"b": "music",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "ورزش",
			"p": "varzeŝ",
			"b": "sport",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "مطالهه",
			"p": "motāle`e",
			"b": "reading",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "کار",
			"p": "kār",
			"b": "job, work",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "گارمند",
			"p": "kārmand",
			"b": "(civil) servant",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "خیابان",
			"p": "xiābān",
			"b": "street",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "پالک",
			"p": "pelāk",
			"b": "(house) number",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "نخستوزیر",
			"p": "noxost-vazir",
			"b": "Prime Minister",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "متشکّر",
			"p": "mot(a)ŝakker",
			"b": "thankful, grateful",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "آقای",
			"p": "āqā-ye",
			"b": "Mr.",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "همکار",
			"p": "hamkār",
			"b": "colleague",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "ایشون",
			"p": "iŝun",
			"b": "he, she (pol)",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "خوشوقت",
			"p": "xoŝvaqt",
			"b": "pleased",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "آپارتمان",
			"p": "āpārtemān",
			"b": "apartment, flat",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "قشنگ",
			"p": "qaŝang",
			"b": "nice, pretty",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "دارید",
			"p": "dārid",
			"b": "you have",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "داشتن (دار)",
			"p": "dāŝtan (dār)",
			"b": "to have",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "لطف",
			"p": "lotf",
			"b": "kindness",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۰",
			"p": "طفر - sefr",
			"b": "0",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱",
			"p": "یک - yek",
			"b": "1",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۲",
			"p": "دو - do",
			"b": "2",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۳",
			"p": "سه - se",
			"b": "3",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۴",
			"p": "چهار - c(ah)ār",
			"b": "4",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۵",
			"p": "پنج - panj",
			"b": "5",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۶",
			"p": "شش - ŝeŝ",
			"b": "6",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۷",
			"p": "هفت - haft",
			"b": "7",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۸",
			"p": "هشت - haŝt",
			"b": "8",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۹",
			"p": "هن - no",
			"b": "9",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۰",
			"p": "ده - dah",
			"b": "10",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۱",
			"p": "یازده - yāzdah",
			"b": "11",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۲",
			"p": "دوازده - davāzdah",
			"b": "12",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۳",
			"p": "سیزده - sizdah",
			"b": "13",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۴",
			"p": "چهارده - c(ah)ārdah",
			"b": "14",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۵",
			"p": "پانزده - pānzdah (punzdah)",
			"b": "15",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۶",
			"p": "شانزده - ŝānzdah (ŝunzdah)",
			"b": "16",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۷",
			"p": "هفده - hefdah (hivdah)",
			"b": "17",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۸",
			"p": "هجده - hejdah (hiĝdah)",
			"b": "18",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۹",
			"p": "نوزده - nuzdah",
			"b": "19",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۲۰",
			"p": "بیست - bist",
			"b": "20",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۲۱",
			"p": "بیست و یک - bist o yek",
			"b": "21",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۳۰",
			"p": "سی - si",
			"b": "30",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۴۰",
			"p": "چهل - c(eh)el",
			"b": "40",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۵۰",
			"p": "پنجاه - panjāh",
			"b": "50",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۶۰",
			"p": "شطت - ŝast",
			"b": "60",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۷۰",
			"p": "هفتاد - haftād",
			"b": "70",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۸۰",
			"p": "هشتاد - haŝtad",
			"b": "80",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۹۰",
			"p": "نود - navad",
			"b": "90",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۰۰",
			"p": "طد - sad",
			"b": "100",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۲۰۰",
			"p": "دویست - devist (divist)",
			"b": "200",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۳۰۰",
			"p": "سیطد - sisad",
			"b": "300",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۴۰۰",
			"p": "چهارطد - c(ah)ārsad",
			"b": "400",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۵۰۰",
			"p": "پانطد",
			"b": "pānsad (punsad)",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۶۰۰",
			"p": "ششطد - ŝeŝsad",
			"b": "600",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۷۰۰",
			"p": "هفتطد - haf(t)sad",
			"b": "700",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۸۰۰",
			"p": "هشتطد - haŝ(t)sad",
			"b": "800",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۹۰۰",
			"p": "نهطد - nohsad",
			"b": "900",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۰۰۰",
			"p": "هزار - hezār",
			"b": "1,000",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "۱۰۰۰۰۰۰",
			"p": "میلیون - milyun",
			"b": "1,000,000",
			"r": "Colloquial Persian - Unit 3"
		},
		{
			"a": "شذبه",
			"p": "ŝanbe",
			"b": "Saturday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "یکشنبه",
			"p": "yek-ŝanbe",
			"b": "Sunday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "دوشنبه",
			"p": "do-ŝanbe",
			"b": "Monday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "سهشنبه",
			"p": "se-ŝanbe",
			"b": "Tuesday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "چهارشنبه",
			"p": "c(ah)ār-ŝanbe",
			"b": "Wednesday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "پنجشنبه",
			"p": "panj-ŝanbe",
			"b": "Thursday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "جمعه",
			"p": "jom`e",
			"b": "Friday",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "آخر",
			"p": "āxar",
			"b": "end",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "هفته",
			"p": "hafte",
			"b": "week",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "آخر هفته",
			"p": "āxar-e hafte",
			"b": "weekend",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خوش",
			"p": "xoŝ",
			"b": "pleasant(ly)",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "گذشتن (گذر)",
			"p": "gozaŝtan (gozar)",
			"b": "to pass",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بله",
			"p": "bale",
			"b": "yes",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "جا",
			"p": "jā",
			"b": "place",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "جاتون",
			"p": "jātun",
			"b": "your place",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خالی",
			"p": "xāli",
			"b": "vacant",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بودن",
			"p": "budan",
			"b": "to be",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خوب",
			"p": "xob",
			"b": "so",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "چهکار",
			"p": "ce-kār",
			"b": "what activity",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "کردن",
			"p": "kardan",
			"b": "to do",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "کجا",
			"p": "kojā",
			"b": "where",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "رفتن",
			"p": "raftan",
			"b": "to go",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شب",
			"p": "ŝab",
			"b": "night, evening",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "سینما",
			"p": "sinemā",
			"b": "cinema",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "یک",
			"p": "yek",
			"b": "one, a, an",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "فیلم",
			"p": "film",
			"b": "film",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "ایرانی",
			"p": "irāni",
			"b": "Iranian",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "دیدن",
			"p": "didan",
			"b": "to see",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خوب",
			"p": "xub",
			"b": "good",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "کمدی",
			"p": "komedi",
			"b": "comedy",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خیلی",
			"p": "xeili",
			"b": "a lot, very",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "خندیدن",
			"p": "xandidan",
			"b": "to laugh",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بعد از ظهر",
			"p": "ba`d-az-zohr",
			"b": "afternoon",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "مهمون",
			"p": "mehmun",
			"b": "guest",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "جشن",
			"p": "jaŝn",
			"b": "celebration",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "تولّد",
			"p": "tavallod",
			"b": "birth(day)",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "پسر",
			"p": "pesar",
			"b": "son, boy",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بهبه!",
			"p": "bah-bah!",
			"b": "wow!",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "مبارک",
			"p": "mobārak",
			"b": "blessed",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "ممنون",
			"p": "mamnun",
			"b": "(I'm) grateful, thank you",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "غذا",
			"p": "qazā",
			"b": "food",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "چطور",
			"p": "cetour",
			"b": "how",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "عالی",
			"p": "āli",
			"b": "excellent",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "دستپخت",
			"p": "dast-poxt",
			"b": "cooking, cuisine",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شوهر",
			"p": "ŝouhar",
			"b": "husband",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "البته",
			"p": "albatte",
			"b": "of course",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "بدون",
			"p": "bedun-e",
			"b": "without",
			"r": "Colloquial Persian - Unit 4"
		},
		{
			"a": "شک",
			"p": "ŝak",
			"b": "doubt",
			"r": "Colloquial Persian - Unit 4"
		},
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
			"a": "اما، مگه",
			"p": "ammā, mage",
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
		{
			"a": "случай",
			"p": "",
			"b": "case",
			"r": "Stefan"
		}
	];

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map