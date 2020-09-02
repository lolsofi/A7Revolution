"use strict";

var JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".topLine__toggle-block--js"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>');
		}
	},
	// /modalCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (this.btnToggleMenuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					console.log(1);

					_this.btnToggleMenuMobile.forEach(function (element) {
						return element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active");

					document.body.classList.toggle("fixed");
					return false;
				});
			});
		}
	},
	mobileMenu: function mobileMenu() {
		this.toggleMenu();

		if (this.tnToggleMenuMobile) {
			window.addEventListener('resize', function () {
				if (window.matchMedia("(min-width: 992px)").matches) {// this.toggleMenu(); 
				}
			}, {
				passive: true
			});
		}
	} // /mobileMenu

};
var $ = jQuery;

function eventHandler() {
	JSCCommon.modalCall();
	JSCCommon.inputMask();
	JSCCommon.ifie();
	JSCCommon.mobileMenu();
	var btnShow = document.querySelectorAll('.form-wrap__btn--show');

	if (btnShow) {
		btnShow.forEach(function (el) {
			el.addEventListener('click', function () {
				var input = this.parentNode.querySelector("input");

				if (this.classList.contains('active')) {
					this.classList.remove('active');
					input.type = "password";
				} else {
					this.classList.add('active');
					input.type = "text";
				}
			});
		});
	}
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}