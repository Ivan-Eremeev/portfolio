function fancybox(fancy) {
  fancy.fancybox({
    toolbar  : true, // Кнопки "закрыть" и "зум"
    smallBtn : false, // Маленькая кнопка "закрыть"
    loop: false, // Зацикленный просмотр
    protect: false, // Отключить щелчок правой кнопкой мыши
    buttons: [ // Кнопки в верхней панели
      "zoom",
      // "slideShow",
      // "fullScreen",
      // "download",
      // "thumbs",
      "close"
    ],
  });
};

// Создание галереи программно и открытие при клике по элементу
function fancyboxProgramm(fancy) {
  fancy.on('click', function() {
    $.fancybox.open( $('.fancy'), {
      loop: false,
      toolbar  : true,
      buttons: [ // Кнопки в верхней панели
        "zoom",
        // "slideShow",
        // "fullScreen",
        // "download",
        // "thumbs",
        "close"
      ],
    });
  });
};