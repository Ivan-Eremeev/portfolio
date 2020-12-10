//  Ivan Eremeev - 2020
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

// Брэйкпоинты js
var	breakXl = 1400,
		breakLg = 1200,
		breakMd = 1025,
		breakSm = 769,
		breakXs = 500;

$(document).ready(function () {			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	function myMenu(menu) {
		var menuBtn = menu.find('#menu-btn'),
				items = menu.find('a'),
				item = undefined,
				over = menu.find('#menu-over'),
				close = menu.find('#menu-close'),
				html = $('html'),
				scrollbarWidth;
		menuBtn.on('click', menuOpen);
		over.on('click', menuClose);
		close.on('click', menuClose);
		function menuOpen() {
			html.addClass('lock').css('padding-right',scrollbarWidth);
			menu.addClass('open');
			menuBtn.addClass('active');
		}
		function menuClose() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('active');
		}
		function scrollbarWidthCalc() {
			var documentWidth = parseInt(document.documentElement.clientWidth),
					windowsWidth = parseInt(window.innerWidth);
			scrollbarWidth = windowsWidth - documentWidth;
		}
		function menuItemToggleActive() {
			items.each(function () {
				if ($(this).hasClass('active')) {
					item = $(this)
				}
			})
			items.mouseenter(function () {
				if ($(this).hasClass('active')) {
					return undefined
				}else {
					item.removeClass('active')
				}
			})
			items.mouseleave(function () {
				if ($(this).hasClass('active')) {
					return undefined
				}else {
					item.addClass('active')
				}
			})
		}
		scrollbarWidthCalc();
		$(window).resize(scrollbarWidthCalc);
		// menuItemToggleActive();
	};
	myMenu($('.js-menu'));

	// Слайдер в отзывах
	function slider(slider) {
		if (slider.length) {
			slider.slick({
				slidesToShow: 1, // Сколько слайдов показывать на экране
				slidesToScroll: 1, // Сколько слайдов пролистывать за раз
				dots: true, // Пагинация
				arrows: true, // Стрелки
				infinite: false, // Зацикленное пролистывание
				swipe: true, // Перелистывание пальцем
				draggable: true, // Перелистывание мышью
				appendDots: '.testimonials_controlls',
				appendArrows: '.testimonials_controlls',
				prevArrow: '<div class="testimonials_arrow testimonials_arrow--prev">',
				nextArrow: '<div class="testimonials_arrow testimonials_arrow--next">'
			});
		}
	};
	slider($('.testimonials_slider'));

	// // Stiky menu // Липкое меню.
	function stikyMenu(header) {
		if (header.length) {
			stiky();
			$(window).scroll(function(){
				stiky();
			});
			function stiky() {
				if( $(window).scrollTop() > 0 ) {
					header.addClass('stiky');
				} else {
					header.removeClass('stiky');
				}
			}
		}
	};
	stikyMenu($('#header'));

	// Текст печатная машинка
	function textPrint(block) {
		var textPrint = block,
			a = textPrint.text(),
			j = 0,
			c = a.length,
			time = 80;
		textPrint.text('- ');
		setTimeout(() => {
			setInterval(function () {
				if (j<c) {
					textPrint.text(textPrint.text() + a[j]);
					j++;
				}
			},time);
		}, 500);
	};
	textPrint($('#text-print'));

	// Анимация в блоке навыков
	function animateSkills (block) {
		block.each(function () { 
			var scrollTop = false,
					countNumberStatus = true,
					countNum = $(this).find('.count-number'),
					line = $(this).find('.skills_line'),
					blockPosition = countNum.position().top,
					valUp = countNum.data('val-up'),
					valTo = countNum.data('val-to'),
					valDuration = countNum.data('duration');
			countNum.html(0);
			animate();
			$(window).scroll(function () {
				animate();
			}); 
			function animate() {
				scrollTop = $(window).scrollTop() + $(window).height();
				if(scrollTop > blockPosition && countNumberStatus) {
					$({numberValue: valUp}).animate({numberValue: valTo}, {
						duration: valDuration,
						easing: "swing",
						step: function(val) {
							countNum.html(Math.ceil(val));
						}
					});
					line.find('.skills_placeholder').animate({
						width: valTo + '%'
					},valDuration);
					countNumberStatus = false;
				}
			}
		});
	};
	animateSkills($(".skills_item"));

	// Aos libs init
	if ($('[data-aos]').length) {
		AOS.init({
			once: true,
		});	
	}

	// Простая проверка форм на заполненность и отправка аяксом
	function formSubmit() {
		$("[type=submit]").on('click', function (e){ 
			e.preventDefault();
			// Заводим переменные
			// Ищем родительскую фору для того чтобы манипулировать элементами находящимися только внутри неё
			var form = $(this).closest('.form');
			// Запоминаем путь к php обработчику формы
			var url = form.attr('action');
			// Собираем все данные с полей формы для отправки
			var form_data = form.serialize();
			// Выбираем все обязательные поля по атрибуту required
			var field = form.find('[required]');

			// Задаем количество пустых полей по умолчанию
			empty = 0;

			// Перебираем каждое обязательное поле
			field.each(function() {
				// Если поля пустые
				if ($(this).val() == "") {
					// Добавляем класс invalid
					$(this).addClass('invalid');
					// Увеличиваем счеткик пустых полей
					empty++;
				// Если поля не пустые
				} else {
					// Убираем класс invalid
					$(this).removeClass('invalid');
					// Добавляем класс valid если необходимо для стилизации
					$(this).addClass('valid');
				}  
			});

			// Можно проверить пересчет пустых полей в консоли
			// console.log(empty);

			// Если пустых полей больше 0
			if (empty > 0) {
				// Останавливаем работу скрипта запрещая отправку формы
				return false;
			// Если пустых полей нет
			} else {        
				// Запускаем отправку формы без перезагрузки страницы
				$.ajax({
					// Используем переменные в параметрах для отправки формы
					url: url,
					type: "POST",
					dataType: "html",
					data: form_data,
					// При успешной отправке
					// В аргумент response(произвольное название) можно записать и видеть результат ответа сервера
					success: function (response) {
						// console.log(response);
						// Дальше несколько вариантов
						// Открываем окно с сообщением
						modalShow($('#success'));
						// Открываем какую то страницу. как правило так называемую "страницу спасибо"
						// document.location.href = "success.html";
					},
					// При ошибке отправки
					error: function (response) {
						// console.log(response);
						// Тоже что нибудь делаем
						modalShow($('#error'));
						// Выводим в заготовленный блок какое то сообщение
						// $('#rezult').text('Проверте корректность заполнения полей формы.');
					}
				});
			}
		});
		// Убираем класс invalid valid при снятии фокуса если поле не пустое
		$('[required]').on('blur', function() {
			if ($(this).val() != '') {
				$(this).removeClass('invalid').removeClass('valid');
			}
		});
		// Если есть чекбокс с политикой можно отключать кнопку при снятом чекбоксе добавляя к кнопке атрибут disabled 
		// $('.form__privacy input').on('change', function(event) {
		// 	event.preventDefault();
		// 	var btn = $(this).closest('.form').find('.btn');
		// 	if ($(this).prop('checked')) {
		// 		btn.removeAttr('disabled');
		// 		// console.log('checked');
		// 	} else {
		// 		btn.attr('disabled', true);
		// 	}
		// });
	}
	formSubmit();

	// Модальное окно
	function modal(modal) {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var html = $('html'),
				modalClose = thisModal.find($('.modal_close')),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		thisModal.show(0, function() {
			setTimeout(thisModal.addClass('open'),500);
		});
		// html.addClass('lock').css('padding-right',scrollbarWidth);
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		var html = $('html');
		thisModal.removeClass('open');
		thisModal.hide();
		// html.removeClass('lock').css('padding-right',0);
	};
	modal();

	// Ленивая загрузка
	$('img').lazy();
	
});
//# sourceMappingURL=scripts.js.map