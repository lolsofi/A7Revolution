const JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".topLine__toggle-block--js"), 
	modalCall() {

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
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		const linkModal = document.querySelectorAll('.link-modal');
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
 

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>')

		}
	},

	// /modalCall
	toggleMenu() {
		if (this.btnToggleMenuMobile) {
			this.btnToggleMenuMobile.forEach(element => {
				element.addEventListener('click', () => {
					console.log(1);
					this.btnToggleMenuMobile.forEach(element => element.classList.toggle("on"));
					this.menuMobile.classList.toggle("active");
					document.body.classList.toggle("fixed");
					return false;
				});
			});
		}
	},
 
	mobileMenu() {
		this.toggleMenu(); 
		if (this.tnToggleMenuMobile) {
			window.addEventListener('resize', () => {
				if (window.matchMedia("(min-width: 992px)").matches) {
					// this.toggleMenu(); 
				}
			}, { passive: true });
		}
	},
	// /mobileMenu
};
const $ = jQuery;

function eventHandler() {
	JSCCommon.modalCall(); 
	JSCCommon.inputMask();
	JSCCommon.ifie(); 
	JSCCommon.mobileMenu();
 
	let btnShow = document.querySelectorAll('.form-wrap__btn--show');
	if (btnShow) {
		btnShow.forEach(function (el) {
			
			el.addEventListener('click', function () {
				
				let input = this.parentNode.querySelector(`input`)
				if (this.classList.contains('active')) {
					this.classList.remove('active')
					input.type = "password"
				}
				else {
					this.classList.add('active')
					input.type = "text"
					
				}
			})
		})
	}

	const btnPrice = document.querySelectorAll(".sPrice__btn");
	const btnNotPrice = document.querySelectorAll('[href="#modal-order"]:not(.sPrice__btn)');
	const selectTarif = document.querySelector("#modal-order select");

	// установить тариф
	if (btnPrice) {
		btnPrice.forEach(function (e) {
			e.addEventListener('click', function () {
				let data = this.dataset.tarif; 
				selectTarif.value = data;
			})
		})
	}
	/// сбросить тариф
	if (btnNotPrice) {
		btnNotPrice.forEach(function (e) {
			e.addEventListener('click', function () {
				let data = selectTarif.querySelector('option').value;
				selectTarif.value = data;
			})
		})
	}
 


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
