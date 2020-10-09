wow = new WOW(
	{
		boxClass:     'wow',      // Класс блока
		animateClass: 'animated', // Добавляемый класс для анимации
		offset:       200,          // Отступ от нижнего края экрана
		mobile:       true,       // Отключение на мобилках
		live:         true        // Постоянно проверять наличие новых элементов WOW на странице.
	}
	)
	wow.init();

// class="wow" Класс для анимации
// class="slideInLeft" Класс из Animate CSS
// data-wow-duration="2s" Продолжительность
// data-wow-delay="5s" Задержка перед началом
// data-wow-offset="10" Отступ от нижнего края
// data-wow-iteration="10" Число раз, когда анимация повторяется