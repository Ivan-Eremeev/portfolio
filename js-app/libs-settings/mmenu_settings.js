function mmenu(menu) {
	menu.mmenu({
		navbar: {
			title: '' // Заголовок меню
		},
		extensions: [
			"fx-menu-slide", // Скользящее меню
			// "fx-menu-fade", // Исчезающее меню
			// "fx-menu-zoom", // Увеличивающееся меню
			// "fx-panels-none", // Пункты меню без эффекта
			"fx-listitems-slide", // Скользящие пункты меню
			// "fx-listitems-drop", // Пункты меню с эффектом выпадания
			// "fx-panels-slide-up", // Скользящие пункты меню вверх
			// "fx-panels-zoom", // Увеличивающиеся пункты меню
			// "pagedim-white", // Светлая оверпанель
			"pagedim-black", // Темная оверпанель
			"position-right", // Меню справа
			// "position-top", // Меню сверху
			// "position-bottom", // Меню снизу
			// "position-front", // Меню открывается поверх страницы
			"position-back", // Страница сдвигается вместе с меню
			"theme-dark", // Темная тема
			// "theme-white", // Светлая тема
			// "theme-black", // Черная тема
			"border-full", // Бордер во всю ширину
			// "border-offset", // Бордер с отступом
			// "border-none", // Бордер отсутствует
			// "fullscreen", // Меню во всю ширину окна
			// "listview-justify", // Распределяет все пункты по высоте одинаково
			// "multiline", // Длинный текст не обрезается
			// "popup", // Меню попап
			"shadow-page", // Тень от страницы
			"shadow-panels", // Тень от панели меню
			// "tileview", // Пункты меню - плитки
		],
		// "dropdown": true, // Тултип меню
		// "dividers": { // Разделение пунктов по алфавиту
		// 	"add": true
		// },
		// "sectionIndexer": true, // Алфавит сбоку от меню
		// columns: true, // Подменю открывается рядом с меню
		// "autoHeight": true, // Высота по контенту
		// "iconPanels": true, // Подменю открывается над меню не во всю ширину
		// "counters": true, // Показывает колличество пунктов подменю
		// "navbars": [
			// { // Поле поиска
			// 	"position": "top",
			// 	"content": [
			// 		"searchfield"
			// 		// '<input type="text">'
			// 	]
			// },
			// { // Табы
			// 	"position": "top",
			// 	"type": "tabs",
			// 	"content": [
			// 		"<a href='#panel-menu'>Menu</a>",
			// 		"<a href='#panel-language'>Language</a>"
			// 	]
			// },
			// {
			// 	"position": "top",
			// 	"content": [
			// 		"breadcrumbs", // Навигация (хлебные крошки)
			// 		"close" // Кнопка закрыть меню
			// 	]
			// },
			// {
			// 	"position": "top" // Делает заголовок меню нескользящим
			// },
			// {
			// 	"position": "bottom", // Панель внизу "например с иконками соцсетей"
			// 	"content": [
			// 		"<a class='fa fa-envelope' href='#/'></a>",
			// 		"<a class='fa fa-twitter' href='#/'></a>",
			// 		"<a class='fa fa-facebook' href='#/'></a>"
			// 	]
			// }
		// ]
	},{
		clone: true
	});

	var menuBtn = $('#menu-btn');
	var apiMmenu = $('#mm-mmenu').data('mmenu');
	menuBtn.click(function() {
		menuBtn.addClass('is-active');
		setTimeout(function() {
			apiMmenu.open();
		}, 150);
	});
	apiMmenu.bind('close:finish', function() {
		menuBtn.removeClass('is-active');
	});
};