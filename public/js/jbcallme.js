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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function ($, window, document, undefined) {
	    var pluginName = 'jbcallme',
	        defaults = {
	        no_name: false,
	        no_tel: false,
	        no_submit: false,
	        title: '\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A',
	        action_url: '/jbcallme/postmaster.php',
	        success: '\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E',
	        fail: '\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E',
	        fields: {},
	        postfix: "default"
	    };

	    function Plugin(element, options) {
	        this.element = element;
	        this.options = $.extend({}, defaults, options);

	        this._defaults = defaults;
	        this._name = pluginName;

	        this.init();
	    }

	    Plugin.prototype.init = function () {

	        return this.build();
	    };
	    Plugin.prototype.build = function () {
	        function merge(obj1, obj2) {
	            var obj3 = {};
	            for (var key in obj1) {
	                obj3[key] = obj1[key];
	            }
	            for (var key in obj2) {
	                obj3[key] = obj2[key];
	            }
	            return obj3;
	        }
	        var _this = this;
	        if (!$("#jbCallme_overlay").length) {
	            $('<div id="jbCallme_overlay" class="jbCallme_overlay"></div>').appendTo($("body"));
	        }
	        if (!$("#jbCallme_" + this.options.postfix).length) {
	            $('<div id="jbCallme_' + this.options.postfix + '" class="jbCallme"><div class="jb_title">' + this.options.title + '</div><a title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" class="jb_close">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</a><form class="jb_form" onsubmit="yaCounter41405084.reachGoal (\'knopkazvonok\'); return true;"></form><div class="jb_success">' + this.options.success + '</div><div class="jb_progress"></div><div class="jb_fail">' + this.options.fail + '</div></div>').appendTo($("body"));

	            this.$success = $('.jb_success').hide();
	            this.$fail = $('.jb_fail').hide();
	            this.$progress = $('.jb_progress').hide();
	            this.$overlay = $('#jbCallme_overlay');
	            this.$overlay = $('#jbCallme_overlay');
	            this.$container = $("#jbCallme_" + this.options.postfix);
	            // this.$container.append($('<a/>').html('\u00a9 \u006a\u0062\u0043\u0061\u006c\u006c\u004d\u0065').attr('\u0068\u0072\u0065\u0066','\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u006a\u0062\u0063\u0061\u006c\u006c\u006d\u0065\u002e\u0072\u0075').attr('\u0074\u0061\u0072\u0067\u0065\u0074','\u005f\u0062\u006c\u0061\u006e\u006b').addClass("jb_dev"));
	            this.$form = this.$container.find(".jb_form");
	            var options = {};
	            if (!this.options.no_name) {
	                options.name = {
	                    required: true,
	                    placeholder: '\u0412\u0430\u0448\u0435 \u0438\u043C\u044F',
	                    type: "text"
	                };
	            }
	            if (!this.options.no_tel) {
	                options.tel = {
	                    required: true,
	                    placeholder: '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430',
	                    type: "text"
	                };
	            }
	            this.options.fields = merge(options, this.options.fields);
	            if (!this.options.no_submit) {
	                this.options.fields.submit = {
	                    value: '\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A',
	                    type: 'submit'
	                };
	            }
	            if (!this.options.fields.action) {
	                this.options.fields.action = {
	                    value: "callme",
	                    type: 'hidden'
	                };
	            }
	            $.each(this.options.fields, function (index, value) {
	                var form_input = '';
	                if (value.type && value.type == 'textarea') {
	                    form_input = '<textarea ' + (value.required ? 'required="required" ' : '') + (value.class ? 'class="' + value.class + '" ' : '') + (value.placeholder ? 'placeholder="' + value.placeholder + '" ' : '') + 'name="' + index + '">' + (value.value ? 'value="' + value.value + '" ' : '') + '</textarea>';
	                } else if (value.type && value.type == 'select') {
	                    form_input = '<select ' + (value.class ? 'class="' + value.class + '" ' : '') + 'name="' + index + '">';
	                    form_input += value.placeholder ? '<option disabled="disabled">' + value.placeholder + '</option>' : '';
	                    for (var i = 0; i < value.options.length; i++) {
	                        form_input += '<option value="' + value.options[i] + '">' + value.options[i] + '</option>';
	                    }

	                    form_input += '</select>';
	                } else {
	                    form_input = '<input ' + (value.required ? 'required="required" ' : '') + (value.placeholder ? 'placeholder="' + value.placeholder + '" ' : '') + (value.class ? 'class="' + value.class + '" ' : '') + (value.value ? 'value="' + value.value + '" ' : '') + 'type="' + (value.type && jQuery.inArray(value.type, ["submit", "hidden", "text", "email", "date", "color"]) >= 0 ? value.type : 'text') + '" name="' + index + '" />';
	                }

	                $((value.type != 'hidden' ? '<div class="jb_input">' + (value.label ? '<label>' + value.label + '</label>' : '') : '') + form_input + (value.type != 'hidden' ? '</div>' : '')).appendTo(_this.$form);
	            });

	            this.$container.hide().find(".jb_close").on('click', function () {
	                _this.end();
	                return false;
	            });
	            this.$overlay.hide().on('click', function () {
	                _this.end();
	                return false;
	            });
	            this.$form.on('submit', function () {
	                _this.submit();
	                return false;
	            });
	        }
	        $(_this.element).on('click', function () {
	            _this.show();
	            return false;
	        });
	    };
	    Plugin.prototype.submit = function () {
	        var _this = this;
	        _this.$container.find('.jb_progress').show();
	        _this.$container = $("#jbCallme_" + this.options.postfix);
	        _this.$container.find('form').hide();
	        $.ajax({
	            type: "POST",
	            url: this.options.action_url,
	            data: this.$form.serialize(),
	            success: function success(data) {
	                _this.$container.find('.jb_progress').hide();
	                if (data == '200') {
	                    _this.$container.find('.jb_success').show();
	                } else {
	                    _this.$container.find('.jb_fail').show();
	                }
	            },
	            error: function error() {
	                _this.$container.find('.jb_progress').hide();
	                _this.$container.find('.jb_fail').show();
	            }
	        });
	        setTimeout(function () {
	            _this.end();
	        }, 3000);
	        return false;
	    };
	    Plugin.prototype.end = function () {
	        this.$overlay = $('#jbCallme_overlay').fadeOut();
	        this.$container = $(".jbCallme").fadeOut();
	        $('#jbCallme_' + this.options.postfix).find('form')[0].reset();
	        $('.jbCallme .jb_success, .jbCallme .jb_fail').hide();
	        $('.jbCallme form').show();
	    };
	    Plugin.prototype.show = function () {
	        this.$other = $('.jbCallme:not(#jbCallme_' + this.options.postfix + ')').hide();
	        this.$overlay = $('#jbCallme_overlay').fadeIn();
	        $('#jbCallme_' + this.options.postfix).find('form')[0].reset();
	        element = $(this.element);
	        $("#jbCallme_" + this.options.postfix).find('input,textarea').each(function () {
	            if (element.data($(this).attr('name'))) {
	                $(this).val(element.data($(this).attr('name')));
	            }
	        });
	        this.$container = $("#jbCallme_" + this.options.postfix).show();
	    };
	    $.fn[pluginName] = function (options) {
	        return this.each(function () {
	            if (!$.data(this, 'plugin_' + pluginName)) {
	                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
	            }
	        });
	    };
		})(jQuery, window, document);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamJjYWxsbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2I2YjZkMDc1MzMwZjg0ZDQzMzkiLCJ3ZWJwYWNrOi8vL2FwcC9qcy9qYmNhbGxtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2FwcC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYjZiNmQwNzUzMzBmODRkNDMzOSIsIihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgcGx1Z2luTmFtZSA9ICdqYmNhbGxtZScsXHJcbiAgICAgICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIG5vX25hbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBub190ZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBub19zdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1xcdTA0MWVcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzZFxcdTA0NGJcXHUwNDM5IFxcdTA0MzdcXHUwNDMyXFx1MDQzZVxcdTA0M2RcXHUwNDNlXFx1MDQzYScsXHJcbiAgICAgICAgICAgIGFjdGlvbl91cmw6ICcvamJjYWxsbWUvcG9zdG1hc3Rlci5waHAnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAnXFx1MDQyMVxcdTA0M2VcXHUwNDNlXFx1MDQzMVxcdTA0NDlcXHUwNDM1XFx1MDQzZFxcdTA0MzhcXHUwNDM1IFxcdTA0M2VcXHUwNDQyXFx1MDQzZlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M2JcXHUwNDM1XFx1MDQzZFxcdTA0M2UnLFxyXG4gICAgICAgICAgICBmYWlsOiAnXFx1MDQyMVxcdTA0M2VcXHUwNDNlXFx1MDQzMVxcdTA0NDlcXHUwNDM1XFx1MDQzZFxcdTA0MzhcXHUwNDM1IFxcdTA0M2RcXHUwNDM1IFxcdTA0M2VcXHUwNDQyXFx1MDQzZlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M2JcXHUwNDM1XFx1MDQzZFxcdTA0M2UnLFxyXG4gICAgICAgICAgICBmaWVsZHM6IHt9LFxyXG4gICAgICAgICAgICBwb3N0Zml4OiBcImRlZmF1bHRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBsdWdpbk5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoKTtcclxuICAgIH07XHJcbiAgICBQbHVnaW4ucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlKG9iajEsb2JqMil7XHJcbiAgICAgICAgICAgIHZhciBvYmozID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmoxKSB7IG9iajNba2V5XSA9IG9iajFba2V5XTsgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqMikgeyBvYmozW2tleV0gPSBvYmoyW2tleV07IH1cclxuICAgICAgICAgICAgcmV0dXJuIG9iajM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCEkKFwiI2piQ2FsbG1lX292ZXJsYXlcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJzxkaXYgaWQ9XCJqYkNhbGxtZV9vdmVybGF5XCIgY2xhc3M9XCJqYkNhbGxtZV9vdmVybGF5XCI+PC9kaXY+JykuYXBwZW5kVG8oJChcImJvZHlcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISQoXCIjamJDYWxsbWVfXCIgKyB0aGlzLm9wdGlvbnMucG9zdGZpeCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJzxkaXYgaWQ9XCJqYkNhbGxtZV8nICsgdGhpcy5vcHRpb25zLnBvc3RmaXggKyAnXCIgY2xhc3M9XCJqYkNhbGxtZVwiPjxkaXYgY2xhc3M9XCJqYl90aXRsZVwiPicgKyB0aGlzLm9wdGlvbnMudGl0bGUgKyAnPC9kaXY+PGEgdGl0bGU9XCJcXHUwNDE3XFx1MDQzMFxcdTA0M2FcXHUwNDQwXFx1MDQ0YlxcdTA0NDJcXHUwNDRjXCIgY2xhc3M9XCJqYl9jbG9zZVwiPlxcdTA0MTdcXHUwNDMwXFx1MDQzYVxcdTA0NDBcXHUwNDRiXFx1MDQ0MlxcdTA0NGM8L2E+PGZvcm0gY2xhc3M9XCJqYl9mb3JtXCIgb25zdWJtaXQ9XCJ5YUNvdW50ZXI0MTQwNTA4NC5yZWFjaEdvYWwgKFxcJ2tub3BrYXp2b25va1xcJyk7IHJldHVybiB0cnVlO1wiPjwvZm9ybT48ZGl2IGNsYXNzPVwiamJfc3VjY2Vzc1wiPicgKyB0aGlzLm9wdGlvbnMuc3VjY2VzcyArICc8L2Rpdj48ZGl2IGNsYXNzPVwiamJfcHJvZ3Jlc3NcIj48L2Rpdj48ZGl2IGNsYXNzPVwiamJfZmFpbFwiPicgKyB0aGlzLm9wdGlvbnMuZmFpbCArICc8L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbygkKFwiYm9keVwiKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRzdWNjZXNzID0gJCgnLmpiX3N1Y2Nlc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGZhaWwgPSAkKCcuamJfZmFpbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSAkKCcuamJfcHJvZ3Jlc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCcjamJDYWxsbWVfb3ZlcmxheScpO1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnI2piQ2FsbG1lX292ZXJsYXknKTtcclxuICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyID0gJChcIiNqYkNhbGxtZV9cIiArIHRoaXMub3B0aW9ucy5wb3N0Zml4KTtcclxuICAgICAgICAgICAvLyB0aGlzLiRjb250YWluZXIuYXBwZW5kKCQoJzxhLz4nKS5odG1sKCdcXHUwMGE5IFxcdTAwNmFcXHUwMDYyXFx1MDA0M1xcdTAwNjFcXHUwMDZjXFx1MDA2Y1xcdTAwNGRcXHUwMDY1JykuYXR0cignXFx1MDA2OFxcdTAwNzJcXHUwMDY1XFx1MDA2NicsJ1xcdTAwNjhcXHUwMDc0XFx1MDA3NFxcdTAwNzBcXHUwMDNhXFx1MDAyZlxcdTAwMmZcXHUwMDZhXFx1MDA2MlxcdTAwNjNcXHUwMDYxXFx1MDA2Y1xcdTAwNmNcXHUwMDZkXFx1MDA2NVxcdTAwMmVcXHUwMDcyXFx1MDA3NScpLmF0dHIoJ1xcdTAwNzRcXHUwMDYxXFx1MDA3MlxcdTAwNjdcXHUwMDY1XFx1MDA3NCcsJ1xcdTAwNWZcXHUwMDYyXFx1MDA2Y1xcdTAwNjFcXHUwMDZlXFx1MDA2YicpLmFkZENsYXNzKFwiamJfZGV2XCIpKTtcclxuICAgICAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuJGNvbnRhaW5lci5maW5kKFwiLmpiX2Zvcm1cIik7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLm5vX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubmFtZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcXHUwNDEyXFx1MDQzMFxcdTA0NDhcXHUwNDM1IFxcdTA0MzhcXHUwNDNjXFx1MDQ0ZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubm9fdGVsKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRlbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcXHUwNDFkXFx1MDQzZVxcdTA0M2NcXHUwNDM1XFx1MDQ0MCBcXHUwNDQyXFx1MDQzNVxcdTA0M2JcXHUwNDM1XFx1MDQ0NFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZpZWxkcyA9IG1lcmdlKG9wdGlvbnMsIHRoaXMub3B0aW9ucy5maWVsZHMpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5ub19zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5maWVsZHMuc3VibWl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzYVxcdTA0MzBcXHUwNDM3XFx1MDQzMFxcdTA0NDJcXHUwNDRjIFxcdTA0MzdcXHUwNDMyXFx1MDQzZVxcdTA0M2RcXHUwNDNlXFx1MDQzYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmllbGRzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZpZWxkcy5hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY2FsbG1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmVhY2godGhpcy5vcHRpb25zLmZpZWxkcywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1faW5wdXQgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUgPT0gJ3RleHRhcmVhJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1faW5wdXQgPSAnPHRleHRhcmVhICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUucmVxdWlyZWQgPyAncmVxdWlyZWQ9XCJyZXF1aXJlZFwiICcgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuY2xhc3MgPyAnY2xhc3M9XCInICsgdmFsdWUuY2xhc3MgKyAnXCIgJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5wbGFjZWhvbGRlciA/ICdwbGFjZWhvbGRlcj1cIicgKyB2YWx1ZS5wbGFjZWhvbGRlciArICdcIiAnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWU9XCInICsgaW5kZXggKyAnXCI+JysodmFsdWUudmFsdWUgPyAndmFsdWU9XCInICsgdmFsdWUudmFsdWUgKyAnXCIgJyA6ICcnKSsnPC90ZXh0YXJlYT4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUgPT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtX2lucHV0ID0gJzxzZWxlY3QgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5jbGFzcyA/ICdjbGFzcz1cIicgKyB2YWx1ZS5jbGFzcyArICdcIiAnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWU9XCInICsgaW5kZXggKyAnXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV9pbnB1dCArPSB2YWx1ZS5wbGFjZWhvbGRlciA/ICc8b3B0aW9uIGRpc2FibGVkPVwiZGlzYWJsZWRcIj4nK3ZhbHVlLnBsYWNlaG9sZGVyKyc8L29wdGlvbj4nIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV9pbnB1dCArPSAnPG9wdGlvbiB2YWx1ZT1cIicrdmFsdWUub3B0aW9uc1tpXSsnXCI+Jyt2YWx1ZS5vcHRpb25zW2ldKyc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1faW5wdXQgKz0gJzwvc2VsZWN0Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1faW5wdXQgPSAnPGlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUucmVxdWlyZWQgPyAncmVxdWlyZWQ9XCJyZXF1aXJlZFwiICcgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUucGxhY2Vob2xkZXIgPyAncGxhY2Vob2xkZXI9XCInICsgdmFsdWUucGxhY2Vob2xkZXIgKyAnXCIgJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5jbGFzcyA/ICdjbGFzcz1cIicgKyB2YWx1ZS5jbGFzcyArICdcIiAnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLnZhbHVlID8gJ3ZhbHVlPVwiJyArIHZhbHVlLnZhbHVlICsgJ1wiICcgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndHlwZT1cIicgKyAodmFsdWUudHlwZSAmJiBqUXVlcnkuaW5BcnJheSh2YWx1ZS50eXBlLCBbXCJzdWJtaXRcIiwgXCJoaWRkZW5cIiwgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJkYXRlXCIsIFwiY29sb3JcIl0pID49IDAgPyB2YWx1ZS50eXBlIDogJ3RleHQnKSArICdcIiBuYW1lPVwiJyArIGluZGV4ICsgJ1wiIC8+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCh2YWx1ZS50eXBlICE9ICdoaWRkZW4nID8gJzxkaXYgY2xhc3M9XCJqYl9pbnB1dFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUubGFiZWwgPyAnPGxhYmVsPicgKyB2YWx1ZS5sYWJlbCArICc8L2xhYmVsPicgOiAnJykgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1faW5wdXQgK1xyXG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZS50eXBlICE9ICdoaWRkZW4nID8gJzwvZGl2PicgOiAnJykpLmFwcGVuZFRvKF90aGlzLiRmb3JtKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIuaGlkZSgpLmZpbmQoXCIuamJfY2xvc2VcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZW5kKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lbmQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChfdGhpcy5lbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNob3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBsdWdpbi5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5maW5kKCcuamJfcHJvZ3Jlc3MnKS5zaG93KCk7XHJcbiAgICAgICAgX3RoaXMuJGNvbnRhaW5lciA9ICQoXCIjamJDYWxsbWVfXCIgKyB0aGlzLm9wdGlvbnMucG9zdGZpeCk7XHJcbiAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5maW5kKCdmb3JtJykuaGlkZSgpOyAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMuYWN0aW9uX3VybCxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy4kZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5maW5kKCcuamJfcHJvZ3Jlc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSAnMjAwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRjb250YWluZXIuZmluZCgnLmpiX3N1Y2Nlc3MnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRjb250YWluZXIuZmluZCgnLmpiX2ZhaWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5maW5kKCcuamJfcHJvZ3Jlc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kY29udGFpbmVyLmZpbmQoJy5qYl9mYWlsJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmVuZCgpXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFBsdWdpbi5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCcjamJDYWxsbWVfb3ZlcmxheScpLmZhZGVPdXQoKTtcclxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAkKFwiLmpiQ2FsbG1lXCIpLmZhZGVPdXQoKTtcclxuICAgICAgICAkKCcjamJDYWxsbWVfJyArIHRoaXMub3B0aW9ucy5wb3N0Zml4KS5maW5kKCdmb3JtJylbMF0ucmVzZXQoKTtcclxuICAgICAgICAkKCcuamJDYWxsbWUgLmpiX3N1Y2Nlc3MsIC5qYkNhbGxtZSAuamJfZmFpbCcpLmhpZGUoKTtcclxuICAgICAgICAkKCcuamJDYWxsbWUgZm9ybScpLnNob3coKTtcclxuXHJcbiAgICB9O1xyXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJG90aGVyID0gJCgnLmpiQ2FsbG1lOm5vdCgjamJDYWxsbWVfJyArIHRoaXMub3B0aW9ucy5wb3N0Zml4ICsgJyknKS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJyNqYkNhbGxtZV9vdmVybGF5JykuZmFkZUluKCk7XHJcbiAgICAgICAgJCgnI2piQ2FsbG1lXycgKyB0aGlzLm9wdGlvbnMucG9zdGZpeCkuZmluZCgnZm9ybScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgZWxlbWVudCA9ICQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAkKFwiI2piQ2FsbG1lX1wiICsgdGhpcy5vcHRpb25zLnBvc3RmaXgpLmZpbmQoJ2lucHV0LHRleHRhcmVhJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihlbGVtZW50LmRhdGEoJCh0aGlzKS5hdHRyKCduYW1lJykpKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykudmFsKGVsZW1lbnQuZGF0YSgkKHRoaXMpLmF0dHIoJ25hbWUnKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gJChcIiNqYkNhbGxtZV9cIiArIHRoaXMub3B0aW9ucy5wb3N0Zml4KS5zaG93KCk7XHJcbiAgICB9O1xyXG4gICAgJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIHBsdWdpbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3BsdWdpbl8nICsgcGx1Z2luTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGx1Z2luKHRoaXMsIG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9qcy9qYmNhbGxtZS5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==