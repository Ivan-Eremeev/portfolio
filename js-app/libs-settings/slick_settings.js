function slider(slider,sliderFor) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderFor, // Связь со слайдерами
    dots: true, // Пагинация
    arrows: true, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    centerMode: false, // Задает класс .slick-center слайду в центре
    focusOnSelect: true, // Выбрать слайд кликом
    infinite: false, // Зацикленное пролистывание
    vertical: false, // Вертикальный слайдер
    rtl: false, // Слайды листаются справа налево
    centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    swipe: true, // Перелистывание пальцем
    draggable: true, // Перелистывание мышью
    responsive: [ // Адаптация
      {
      breakpoint: 992,
        settings: {
          arrows: false,
        }
      },
      {
      breakpoint: 720,
        settings: {
          arrows: false,
        }
      }
    ]
    // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
  });
  
  sliderFor.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
    asNavFor: slider // Связь со слайдерами
  });

  // Кастомные кнопки "вперед" "назад"
  $('.sliderButton_prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.sliderButton_next').click(function() {
    slider.slick('slickNext');
  });
};

// Добавляем кастомную пагинацию в слайдер
function addDotsInPagination(sliderB, sliderPagination) {
  var sliderCount = sliderB.find('.js-slider-slide');
  for (var i = 1; i < sliderCount.length + 1; i++) {
    var dot = $('<div class="slider-pagination_dot"></div>');
    dot.text(i);
    sliderPagination.append(dot);
  };
  // Вызов слайдера нужно делать после добавления пагинации
  slider();
};

// Инициализация слайдеров на десктопе и мобилке
function sliderReinstall() {
  if (window.matchMedia("(max-width: 769px)").matches) {
    $('.slick-initialized').slick('unslick');
  }
  else {
    $('.slick-initialized').slick('unslick');
    sliderInit($('.slider'), $('.slider-for'));
  }
}

// $('.your-slider').slick('unslick'); // Уничтожить слайдер