/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

// Подключение файлов. При использовании gulp поменять "// @prepros-append" на "//="
// libs-settings/fancybox_settings.js
// libs-settings/mmenu_settings.js
// libs-settings/slick_settings.js
// libs-settings/wow_js_settings.js
// libs-settings/fullpage_settings.js
// libs-settings/tinyscrollbar-settings.js
// libs-settings/tooltipster-settings.js
// libs-settings/yandex-map-settings.js
// libs-settings/google-map-settings.js
// mailto-ajax.js

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
	myMenu($('.js-menu'));

	// Блок с высотой окна браузера
	// screenHeight($('#full-height'));

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
	// menuScroll($('#menu'));

	// Stiky menu // Липкое меню. При прокрутке добавляем класс stiky.
	// stikyMenu($('#header'));

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Табы
	// tabs($('#tabs'));

	// Аккордеон
	// accordeon($('#accordeon'));

	// matchHeight // Задание елементам одинаковой высоты
	// $('.match-height').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));
	
	// Модальное окно
	// Задать кнопке, по которой открывается окно класс ".modal-trigger" и атрибут "data-modal", с id окна.
	// Пример <button>(class="modal-trigger" data-modal="#modal-1")</button>
	// modal();

	// Открыть модальное окно
	// modalShow($('#modal-1'));

	// Закрыть модальное окно
	// modalHide($('#modal-1'));

	// Текст печатная машинка
	// textPrint($('#text-print'));

	// Анимация увеличения значения числа
	// countNumber($(".count-number"));

	// Делает активным пункт меню при скролле до блока
	// menuItemActive($("#menu_list"));

	// Изменение textarea при получении фокуса
	// focusTextarea($('textarea'));

	// Изменение поля ввода при клике по его контейнеру
	// focusInput($('.block_input'));

	// Запуск и остановка видео html5
	// videoControll($('.video'));

	// Инициализация fancybox
	// fancybox($('.fancy'));

	// Программное включение fancybox по клику
	// fancyboxProgramm($('#fancy'));

	// Инициализация fullpage
	// fullpage($('#fullpage'));

	// Инициализация mmenu
	// mmenu($('#mmenu'));

	// Инициализация slick слайдера
	// slider($('.slider'),$('.slider-for'));

	// Инициализация tinyscrollbar
	// tinyscrollbar($('#scrollbar1'));

	// Инициализация tooltipster
	// tooltipster($('.tooltip'));

	// Инициализация Яндекс карты
	// ymaps.ready(initYandexMap);

	// Инициализация Google карты
	// initGoogleMap();

	// Инициализация стилизуемого скроллбара
	// $('#scrollbar').scrollbar();

	// 3d эффект вращения элемента при наведении
	// rotate($('.card3d'));

	// Показать еще новости
	// limitBlock($('#news'));

	// Ограничение выводимых символов в блоке текста
	// function textLimit(blockText);

	// Паралакс относительно курсора мыши
	// направление - data-direction="x или y или xy"
	// интенсивность - data-intensity="3"
	// скорость в мс - data-speed="100"
	// parallaxMove($('.parallax-move'));

	// Отслеживание скролла окна браузера
	// $(window).scroll(function() {
	// 	// countNumber($(".count-number")); // Анимация увеличния значения числа
	// });

	// Отслеживание изменения ширины окна браузера
	// var heightResized = false;
	// $(window).resize(function() {
	// 	var windowWidth = $(window).width();
	// 	if (heightResized == windowWidth) {
	// 		return;
	// 	}
	// 	heightResized = windowWidth;
	// 	// fontResize(); // Резиновый сайт
	// 	// screenHeight(); // Блок с высотой окна браузера
	// 	// tooltipDisable(); // Отключение всплывающей подсказки
	// 	// sliderReinstall(); // Реинициализация слайдеров
	// });

	// Сделать левый отступ у страницы по ширине хедера
	// function pagePadding() {
	// 	var page = $('.page'),
	// 			header = $('.header'),
	// 			headerWidth = parseInt(header.outerWidth());
	// 	if ($(window).width() > breakSm) {
	// 		page.css('padding-left',headerWidth);
	// 	}
	// }
	// pagePadding();

	// Ленивая загрузка
	$('img').lazy();
	
});

// Мобильное меню
function myMenu(menu) {
	var menuBtn = menu.find('#menu-btn'),
			items = $('.menu_link'),
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
	menuItemToggleActive();
	console.log(item);
};

// // Блок с высотой окна браузера
// function screenHeight(fullHeight) {
//   fullHeight.css({
//       minHeight: $(window).height() + 'px'
//   });
// };

// // Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
// function menuScroll(menuItem) {
// 	menuItem.find('a[href^="#"]').click( function(){
// 		var scroll_el = $(this).attr('href'),
// 				time = 500;
// 		if ($(scroll_el).length != 0) {
// 		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, time);
// 			$(this).addClass('active');
// 		}
// 		return false;
// 	});
// };

// // Stiky menu // Липкое меню.
// function stikyMenu(header) {
// 	headerTop = header.offset().top;
// 	$(window).scroll(function(){
// 		if( $(window).scrollTop() > headerTop ) {
// 			header.addClass('stiky');
// 		} else {
// 			header.removeClass('stiky');
// 		}
// 	});
// };

// // Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в em)
// function fontResize() {
// 	var windowWidth = $(window).width();
// 		if (windowWidth >= breakSm) {
// 			var fontSize = windowWidth/19.05;
// 		} else if (windowWidth < breakSm) {
// 			// Без резины на мобилке
// 			var fontSize = 60;
// 			// С резиной на мобилке
// 			var fontSize = windowWidth/4.8;
// 	}
// 	$('body').css('fontSize', fontSize + '%');
// };

// // Табы
// function tabs(tabs) {
// 	var trigger = tabs.find('#tabs_triggers').children(),
// 			content = tabs.find('#tabs_content').children(),
// 			time = 300;
// 	content.filter('.hide').css({
// 		display: 'none'});
// 	trigger.click(function() {
// 		var $this = $(this),
// 				index = $this.index();
// 		if (!$this.hasClass('active')) {
// 			trigger.removeClass('active');
// 			$this.addClass('active');
// 			content.hide();
// 			content.eq(index).fadeIn(time);
// 		}
// 	});
// };

// Аккордеон
// function accordeon(accordeon, mobile) {
// 	var trigger = accordeon.find('.accordeon_trigger'),
// 			content = accordeon.find('.accordeon_content'),
// 			time = 300;
// 	if (!mobile) {
// 		mobile = false;
// 	};
// 	function contentDisplayNone() {
// 		if (mobile == true && $(window).width() < breakMd) {
// 			content.css({
// 				display: 'none'
// 			});
// 		}
// 		if (mobile == false) {
// 			content.css({
// 				display: 'none'
// 			});
// 		}
// 	};
// 	contentDisplayNone();
// 	$(window).resize(function() {
// 		contentDisplayNone();
// 	});
// 	trigger.on('click', function() {
// 		$this = $(this);
// 		if (mobile == true && $(window).width() < breakMd) {
// 			if (!$this.hasClass('active')) {
// 				trigger.removeClass('active');
// 				$this.addClass('active');
// 				content.stop().slideUp(time);
// 				$this.next('.accordeon_content').stop().slideDown(time).removeClass('hide');
// 			}else {
// 				$this.removeClass('active');
// 				$this.next('.accordeon_content').stop().slideUp(time).addClass('hide');
// 			}
// 		}
// 	});
// 	$(window).resize(function() {
// 		if (mobile == true && $(window).width() > breakMd) {
// 			trigger.removeClass('active');
// 			content.removeClass('hide')
// 				.attr('style', '');
// 		}
// 		else {
// 			content.addClass('hide')
// 		}
// 	});
// };

// // Модальное окно
// function modal(modal) {
// 	$('.modal-trigger').on('click', function() {
// 		var $this = $(this),
// 				data = $this.data('modal'),
// 				thisModal = $(data);
// 		modalShow(thisModal);
// 	});
// };
// // Открытие модального окна
// function modalShow(thisModal) {
// 	var html = $('html'),
// 			modalClose = thisModal.find($('.modal_close')),
// 			documentWidth = parseInt(document.documentElement.clientWidth),
// 			windowsWidth = parseInt(window.innerWidth),
// 			scrollbarWidth = windowsWidth - documentWidth;
// 	thisModal.show(0, function() {
// 		setTimeout(thisModal.addClass('open'),500);
// 	});
// 	html.addClass('lock').css('padding-right',scrollbarWidth);
// 	modalClose.on('click', function() {
// 		modalHide(thisModal);
// 	});
// 	thisModal.on('click', function(e) {
// 		if (thisModal.has(e.target).length === 0) {
// 			modalHide(thisModal);
// 		}
// 	});
// };
// // Закрытие модального окна
// function modalHide(thisModal) {
// 	var html = $('html');
// 	thisModal.removeClass('open');
// 	thisModal.hide();
// 	html.removeClass('lock').css('padding-right',0);
// };

// Текст печатная машинка
// function textPrint(block) {
// 	var textPrint = block,
// 		a = textPrint.text(),
// 		j = 0,
// 		c = a.length,
// 		time = 50;
// 	textPrint.text('');
// 	setInterval(function () {
// 		if (j<c) {
// 			textPrint.text(textPrint.text() + a[j]);
// 			j++;
// 		}
// 	},time);
// };

// Анимация увеличения значения числа
// var	countNumberStatus = true;
// function countNumber (block) {
// 	var scrollEvent = ($(window).scrollTop() > (block.position().top - 400)),
// 			valUp = block.data('val-up'),
// 			valTo = block.data('val-to'),
// 			valDuration = block.data('duration');
// 	if(scrollEvent && countNumberStatus) {
// 		$({numberValue: valUp}).animate({numberValue: valTo}, {
// 			duration: valDuration,
// 			easing: "swing",
// 			step: function(val) {
// 				block.html(Math.ceil(val));
// 			}
// 		});
// 		countNumberStatus = false;
// 	}
// };

// // Делает активным пункт меню при скролле до блока
// function menuItemActive(menu) {
// 	var lastId,
//   topMenu = menu,
//   topMenuHeight = topMenu.outerHeight(),
//   menuItems = topMenu.find("a"),
//   scrollItems = menuItems.map(function(){
//     var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//   });
// 	menuItems.click(function(e){
// 	  var href = $(this).attr("href"),
// 	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
// 	  $('html, body').stop().animate({ 
// 	      scrollTop: offsetTop
// 	  }, 300);
// 	  e.preventDefault();
// 	});
// 	$(window).scroll(function(){
// 	  var fromTop = $(this).scrollTop()+topMenuHeight;
// 	  var cur = scrollItems.map(function(){
// 	    if ($(this).offset().top < fromTop)
// 	      return this;
// 	  });
// 	  cur = cur[cur.length-1];
// 	  var id = cur && cur.length ? cur[0].id : "";
// 	  if (lastId !== id) {
// 	      lastId = id;
// 	      menuItems
// 	        .parent().removeClass("active")
// 	        .end().filter("[href='#"+id+"']").parent().addClass("active");
// 	  }                   
// 	});
// };

// // Изменение textarea при получении фокуса
// function focusTextarea(texarea) {
// 	texarea
// 	.focus(function() {
// 		$(this).addClass('class_name');
// 	})
// 	.blur(function() {
// 		if ($(this)[0].value == '') {
// 			$(this).removeClass('active');
// 		}
// 	});
// };

// // Изменение поля ввода при клике по его контейнеру
// function focusInput(conteinerInput) {
// 	conteinerInput.click(function() {
// 		input = conteinerInput.find('input');
// 		div.addClass('active');
// 		$(document).mouseup(function (e){
// 			if (!conteinerInput.is(e.target)
// 			    && conteinerInput.has(e.target).length === 0 && input.val() == '') {
// 				conteinerInput.removeClass('active');
// 			}
// 		});
// 	});
// };

// // Запуск и остановка видео html5
// var playing = false;
// function videoControll(videoConteiner) {
// 	videoConteiner.click(function() {
// 		var video = videoConteiner.find('video'),
// 				img = videoConteiner.find('img');
// 		img.css({
// 			display: 'none'});
// 		if (playing == false) {
// 			video.trigger('play');
// 			playing = true;
// 		}
// 		else {
// 			video.trigger('pause');
// 			playing = false;
// 		}
// 	});
// };

// 3d эффект вращения элемента при наведении
// function rotate(element) {
// 	var card = element,
// 			cardItem = card.find('.card3d_item');
// 	card.css({
// 		perspective: '1000px',
// 		'transform-style': 'preserve-3d'
// 	});
// 	cardItem.mousemove(function(event) {
// 		var $this = $(this),
// 				coordinateX = event.offsetX,
// 				coordinateY = event.offsetY,
// 				halfHeight = ($this.outerHeight()/2),
// 				halfWidth = $this.outerWidth()/2;
// 				console.log(halfWidth);
// 		$this.css({
// 			transition: '0.2s',
// 			transform: 'rotateX('+((coordinateY-halfHeight)/10)*-1+'deg) rotateY('+(coordinateX-halfWidth)/10+'deg)'
// 		});
// 	});
// 	cardItem.mouseout(function() {
// 		cardItem.css({
// 			transform: 'rotate(0)'});
// 	});
// };

// Паралакс относительно курсора мыши
// function parallaxMove(parallax) {
// 	var $window = $(window),
// 			direction = parallax.data('direction'),
// 			intensity = parallax.data('intensity'),
// 			speed = parallax.data('speed');
// 	if (!direction) {
// 		direction = 'xy';
// 	}
// 	if (!intensity) {
// 		intensity = 3;
// 	}
// 	if (!speed) {
// 		speed = 100;
// 	}
// 	parallax.css({transition: (speed/1000)+'s'});
// 	$window.mousemove(function(event) {
// 		var left = event.clientX,
// 				top = event.clientY,
// 				windowWidth = $window.width(),
// 				windowHeight = $window.height(),
// 				moveX = ((left-windowWidth/2)*intensity/100).toFixed(),
// 				moveY = ((top-windowHeight/2)*intensity/100).toFixed();
// 		inVisible(parallax);
// 		function inVisible(element) {
// 			var topScroll = $(document).scrollTop(),
// 					screenHeight = $(window).height(),
// 					bottomScroll = topScroll + screenHeight,
// 					elementHeight = element.height(),
// 					elementTop = element.offset().top,
// 					elementBottom = elementTop + elementHeight;
// 			if (elementTop < bottomScroll && elementBottom > topScroll) {
// 				if (direction == 'xy') {
// 					parallax.css({transform: 'translateX('+moveX+'px) translateY('+moveY+'px)'});
// 				}
// 				else if (direction == 'x') {
// 					parallax.css({transform: 'translateX('+moveX+'px)'});
// 				}
// 				else if (direction == 'y') {
// 					parallax.css({transform: 'translateY('+moveY+'px)'});
// 				}
// 			}
// 		};
// 	});
// };

// Показать еще новости
// function limitBlock(wrap, newsNum) {
// 	if (!newsNum) {
// 		newsNum = 3
// 	}
// 	var news = wrap.find('.limit-block'),
// 			parent = news.parent(),
// 			newsLimit = news.slice(0, newsNum),
// 			btn = wrap.find('.show-btn'),
// 			btnShow = btn.text(),
// 			btnHide = 'Скрыть',
// 			heightResized = false;
// 	width();
// 	$(window).resize(function() {
// 		var windowWidth = $(window).width();
// 		if (heightResized == windowWidth) {
// 			return;
// 		}
// 		heightResized = windowWidth;
// 		width();
// 	});
// 	function width() {
// 		if ($(window).width() <= breakSm) {
// 			news.remove();
// 			parent.append(newsLimit);
// 			btn.text(btnShow)
// 				.removeClass('active');
// 		}else {
// 			parent.append(news);
// 			btn.text(btnHide)
// 				.addClass('active');
// 		}
// 	};
// 	btn.click(function() {
// 		if (!btn.hasClass('active')) {
// 			parent.append(news);
// 			btn.text(btnHide)
// 				.addClass('active');
// 		}else {
// 			news.remove();
// 			parent.append(newsLimit);
// 			btn.text(btnShow)
// 				.removeClass('active');
// 		}
// 	});
// };

// Ограничение выводимых символов в блоке текста
// function textLimit(blockText) {
// 	var size = 47,
// 			textButton = 'читать',
// 			arr = new Array();
//   blockText.each(function(index){
//     var $el = $(this),
//     		html = $el.html();
//     arr.push(html);
//   	if( html.length > size) {
//   		$el.html(html.slice(0,size) + '...<a href="#" class="read-more-button" data-index="'+index+'">'+textButton+'</a>');
//   	}
//   });
//   $('.read-more-button').click(function() {
//   	var index = $(this).data('index');
//   	$(this).parent().text(arr[index]);
//   });
// };

// Вставляет svg в html, позволяет управлять цветом через css 
// $('img[src$=".svg"]').each(function(){
//   var $img = $(this);
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   $.get(imgURL, function(data) {
//     var $svg = $(data).find('svg');
//     if(typeof imgClass !== 'undefined') {
//       $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//     $svg = $svg.removeAttr('xmlns:a');
//     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//     }
//     $img.replaceWith($svg);
//   }, 'xml');
// });
//# sourceMappingURL=scripts.js.map