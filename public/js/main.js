/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./app/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// Объявление модуля
	var myModale = function () {
	    var _sync1$owlCarousel, _sync2$owlCarousel;

	    // Инициализирует наш модуль
	    var init = function init() {
	        _setUpListners();
	    };

	    var _setUpListners = function _setUpListners() {
	        $('#load__popUp').on('click', _showModal); //откритые модального окна
	        $('#close__popup').on('click', _closeModal); //закрытие модального окна
	    };

	    //работает с модальным окном
	    var _showModal = function _showModal(ev) {
	        console.log('открытие модального окна');
	        ev.preventDefault();

	        $('.block__modal').toggleClass('flex');
	    };

	    // закрытие модального окна
	    var _closeModal = function _closeModal(ev) {
	        console.log('Закрытие модального окна');
	        ev.preventDefault();

	        $('.block__modal').removeClass('flex');
	    };

	    // OWL скритпт для работы со слайдером
	    //=============== 
	    var sync1 = $('#sync1');
	    var sync2 = $('#sync2');
	    var slidesPerPage = 4; //globaly define number of elements per page
	    var syncedSecondary = true;

	    sync1.owlCarousel((_sync1$owlCarousel = {
	        items: 1,
	        loop: true,
	        dots: false,
	        slideSpeed: 2000,
	        autoplay: true
	    }, _defineProperty(_sync1$owlCarousel, 'loop', true), _defineProperty(_sync1$owlCarousel, 'margin', 10), _sync1$owlCarousel));

	    sync2.owlCarousel((_sync2$owlCarousel = {
	        items: 3,
	        loop: true,
	        dots: false
	    }, _defineProperty(_sync2$owlCarousel, 'loop', true), _defineProperty(_sync2$owlCarousel, 'margin', 10), _sync2$owlCarousel));

	    sync2.on('initialized.owl.carousel', function () {
	        sync2.find(".owl-item").eq(0).addClass("current");
	    }).owlCarousel({
	        items: slidesPerPage,
	        dots: true,
	        nav: true,
	        smartSpeed: 200,
	        slideSpeed: 500,
	        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	        responsiveRefreshRate: 100
	    }).on('changed.owl.carousel', syncPosition2);

	    function syncPosition(el) {
	        //if you set loop to false, you have to restore this next line
	        //var current = el.item.index;

	        //if you disable loop you have to comment this block
	        var count = el.item.count - 1;
	        var current = Math.round(el.item.index - el.item.count / 2 - .5);

	        if (current < 0) {
	            current = count;
	        }
	        if (current > count) {
	            current = 0;
	        }

	        //end block

	        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
	        var onscreen = sync2.find('.owl-item.active').length - 1;
	        var start = sync2.find('.owl-item.active').first().index();
	        var end = sync2.find('.owl-item.active').last().index();

	        if (current > end) {
	            sync2.data('owl.carousel').to(current, 100, true);
	        }
	        if (current < start) {
	            sync2.data('owl.carousel').to(current - onscreen, 100, true);
	        }
	    }

	    function syncPosition2(el) {
	        if (syncedSecondary) {
	            var number = el.item.index;
	            sync1.data('owl.carousel').to(number, 100, true);
	        }
	    }

	    sync2.on("click", ".owl-item", function (e) {
	        e.preventDefault();
	        var number = $(this).index();
	        sync1.data('owl.carousel').to(number, 300, true);
	    });

	    // Возвращаем объект (публичные методы)
	    return {
	        init: init
	    };
	}();

	// Вызов модуля
	myModale.init();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYjZiNmQwNzUzMzBmODRkNDMzOT84MDUxIiwid2VicGFjazovLy9hcHAvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2FwcC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYjZiNmQwNzUzMzBmODRkNDMzOSIsIi8vINCe0LHRitGP0LLQu9C10L3QuNC1INC80L7QtNGD0LvRj1xyXG52YXIgbXlNb2RhbGUgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YIg0L3QsNGIINC80L7QtNGD0LvRjFxyXG4gICAgbGV0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IF9zZXRVcExpc3RuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJyNsb2FkX19wb3BVcCcpLm9uKCdjbGljaycsIF9zaG93TW9kYWwpOyAvL9C+0YLQutGA0LjRgtGL0LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICAgICAgICAkKCcjY2xvc2VfX3BvcHVwJykub24oJ2NsaWNrJywgX2Nsb3NlTW9kYWwpOyAvL9C30LDQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8v0YDQsNCx0L7RgtCw0LXRgiDRgSDQvNC+0LTQsNC70YzQvdGL0Lwg0L7QutC90L7QvFxyXG4gICAgbGV0IF9zaG93TW9kYWwgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L7RgtC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCcpO1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5ibG9ja19fbW9kYWwnKS50b2dnbGVDbGFzcygnZmxleCcpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gICAgbGV0IF9jbG9zZU1vZGFsID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAnKTtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKCcuYmxvY2tfX21vZGFsJykucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBPV0wg0YHQutGA0LjRgtC/0YIg0LTQu9GPINGA0LDQsdC+0YLRiyDRgdC+INGB0LvQsNC50LTQtdGA0L7QvFxyXG4gICAgLy89PT09PT09PT09PT09PT0gXHJcbiAgICBsZXQgc3luYzEgPSAkKCcjc3luYzEnKTtcclxuICAgIGxldCBzeW5jMiA9ICQoJyNzeW5jMicpO1xyXG4gICAgbGV0IHNsaWRlc1BlclBhZ2UgPSA0OyAvL2dsb2JhbHkgZGVmaW5lIG51bWJlciBvZiBlbGVtZW50cyBwZXIgcGFnZVxyXG4gICAgbGV0IHN5bmNlZFNlY29uZGFyeSA9IHRydWU7XHJcblxyXG4gICAgc3luYzEub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVTcGVlZDogMjAwMCxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICB9KVxyXG5cclxuICAgIHN5bmMyLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMyxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgIH0pXHJcblxyXG4gICAgc3luYzJcclxuICAgICAgICAub24oJ2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3luYzIuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogc2xpZGVzUGVyUGFnZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAyMDAsXHJcbiAgICAgICAgICAgIHNsaWRlU3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgc2xpZGVCeTogc2xpZGVzUGVyUGFnZSwgLy9hbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc2xpZGUgYnkgMSwgdGhpcyB3YXkgdGhlIGFjdGl2ZSBzbGlkZSB3aWxsIHN0aWNrIHRvIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBzZWNvbmQgY2Fyb3VzZWxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAxMDBcclxuICAgICAgICB9KS5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBzeW5jUG9zaXRpb24yKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzeW5jUG9zaXRpb24oZWwpIHtcclxuICAgICAgICAvL2lmIHlvdSBzZXQgbG9vcCB0byBmYWxzZSwgeW91IGhhdmUgdG8gcmVzdG9yZSB0aGlzIG5leHQgbGluZVxyXG4gICAgICAgIC8vdmFyIGN1cnJlbnQgPSBlbC5pdGVtLmluZGV4O1xyXG5cclxuICAgICAgICAvL2lmIHlvdSBkaXNhYmxlIGxvb3AgeW91IGhhdmUgdG8gY29tbWVudCB0aGlzIGJsb2NrXHJcbiAgICAgICAgdmFyIGNvdW50ID0gZWwuaXRlbS5jb3VudCAtIDE7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBNYXRoLnJvdW5kKGVsLml0ZW0uaW5kZXggLSAoZWwuaXRlbS5jb3VudCAvIDIpIC0gLjUpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudCA8IDApIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudCA+IGNvdW50KcKgIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2VuZCBibG9ja1xyXG5cclxuICAgICAgICBzeW5jMlxyXG4gICAgICAgICAgICAuZmluZChcIi5vd2wtaXRlbVwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJjdXJyZW50XCIpXHJcbiAgICAgICAgICAgIC5lcShjdXJyZW50KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgIHZhciBvbnNjcmVlbiA9IHN5bmMyLmZpbmQoJy5vd2wtaXRlbS5hY3RpdmUnKS5sZW5ndGggLSAxO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHN5bmMyLmZpbmQoJy5vd2wtaXRlbS5hY3RpdmUnKS5maXJzdCgpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIGVuZCA9IHN5bmMyLmZpbmQoJy5vd2wtaXRlbS5hY3RpdmUnKS5sYXN0KCkuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPiBlbmQpIHtcclxuICAgICAgICAgICAgc3luYzIuZGF0YSgnb3dsLmNhcm91c2VsJykudG8oY3VycmVudCwgMTAwLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBzdGFydCkge1xyXG4gICAgICAgICAgICBzeW5jMi5kYXRhKCdvd2wuY2Fyb3VzZWwnKS50byhjdXJyZW50IC0gb25zY3JlZW4sIDEwMCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbjIoZWwpIHtcclxuICAgICAgICBpZiAoc3luY2VkU2Vjb25kYXJ5KSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSBlbC5pdGVtLmluZGV4O1xyXG4gICAgICAgICAgICBzeW5jMS5kYXRhKCdvd2wuY2Fyb3VzZWwnKS50byhudW1iZXIsIDEwMCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN5bmMyLm9uKFwiY2xpY2tcIiwgXCIub3dsLWl0ZW1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG51bWJlciA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICBzeW5jMS5kYXRhKCdvd2wuY2Fyb3VzZWwnKS50byhudW1iZXIsIDMwMCwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHRitC10LrRgiAo0L/Rg9Cx0LvQuNGH0L3Ri9C1INC80LXRgtC+0LTRiylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxyXG4vLyDQktGL0LfQvtCyINC80L7QtNGD0LvRj1xyXG5teU1vZGFsZS5pbml0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9qcy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9