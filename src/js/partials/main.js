function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

$pagepilingSwitchNumber = 0;
var svgReady = false;

$(document).ready(function () {

	// Remove the # from the hash, as different browsers may or may not include it
	var hash = location.hash.replace('#', '');

	if (hash != '') {
		// Show the hash if it's set

		// Clear the hash in the URL
		location.hash = '';
	}

	// $("input[name='phone']").mask(" +7 (999) 999-99-99");

	$('img').attr({
		"ondrag": "return false",
		"ondragdrop": "return false",
		"ondragstart": "return false"
	})


	function vivusCallback(cinstance) {
		if (svgReady) {
			$(cinstance.parentEl).parent().addClass('promo-images-item--draw-end');
		}
	}

	var vivuses = [
		new Vivus('draw-1', { duration: 150, file: 'images/draw-1.svg', onPart:vivusCallback }, function(){}).reset().play(),
		new Vivus('draw-2', { duration: 150, file: 'images/draw-2.svg', onPart:vivusCallback }, function(){}).reset(),
		new Vivus('draw-3', { duration: 150, file: 'images/draw-3.svg', onPart:vivusCallback }, function(){}).reset(),
		new Vivus('draw-4', { duration: 150, file: 'images/draw-4.svg', onPart:vivusCallback }, function(){}).reset(),
	];

	svgReady = true;
	$('#pagepiling').pagepiling({
		//keyboardScrolling: false,
		direction: 'horizontal',
		menu: '#menu',
		animateAnchor: false,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		sectionsColor: [],
		navigation: {
			'position': 'right',
			'tooltips': ['Page 1', 'Page 2', 'Page 3', 'PAGe 4']
		},
		waitingAfterOnLeave: 6000,
		afterRender: function () {
			//	$('#pp-nav').addClass('custom');
		},

		onLeave: function (index, nextIndex, direction) {
			//Подготовим следующий слайд
			$('.pppage__inner').eq(nextIndex - 1).find('.container--promo').addClass('container--promo--hidden').removeClass('container--promo--go-to-left').addClass('container--promo--go-to-right');
			$('.pppage__inner').eq(nextIndex - 1).find('.promo-decorations').addClass('promo-decorations--hidden').removeClass('promo-decorations--go-to-left').addClass('promo-decorations--go-to-right');

			setTimeout(function () {
				$('.pppage__inner').eq(nextIndex - 1).find('.container--promo').removeClass('container--promo--hidden');
				$('.pppage__inner').eq(nextIndex - 1).find('.promo-decorations').removeClass('promo-decorations--hidden');
			}, 300);
			//Подготовим следующий слайд end


			$('body').addClass('body-pp--leaving');
			$('.site-header').addClass('site-header--transparent');
			setTimeout(function () {
				$('.site-header').addClass('site-header--hidden');
				//спрятана шапка

				$('.preloader-wrap').removeClass('preloader-wrap--hidden');
				setTimeout(function () {
					//спрятана шапка+0.3
					$('.pppage__inner').eq(index - 1).find('.container--promo').addClass('container--promo--go-to-left');
					setTimeout(function () {
						//спрятан текст
						setTimeout(function () {
							//спрятан текст+0.5

							$('.pppage__inner').eq(index - 1).find('.promo-decorations').addClass('promo-decorations--go-to-left');
							setTimeout(function () {
								//спрятана картинка
								setTimeout(function () {
									//спрятана картинка +0.2

									$('.pppage__inner').eq(index-1).removeClass('pppage__inner--active');
									$('.preloader-wrap').addClass('preloader-wrap--active');
								}, 200);
							}, 1500);
						}, 300);
					}, 1500);

				}, 300);
			}, 800);


			$pagepilingSwitchNumber += 1;
			//sleep(500);
			//alert(2);
		},
		afterLoad: function (anchorLink, index) {
			$('.pppage[data-anchor="' + anchorLink + '"]').find('.pppage__inner').addClass('pppage__inner--active');
			vivuses[index - 1].reset();
			$('.promo-images-item--draw-end').removeClass('promo-images-item--draw-end');

			$('.preloader-wrap').removeClass('preloader-wrap--active');

			setTimeout(function () {
				//$('.pppage[data-anchor="' + anchorLink+'"]').addClass('pppage--after-load').siblings().removeClass('pppage--after-load');

				$('.preloader-wrap').addClass('preloader-wrap--hidden');


				$('.pppage__inner').eq(index - 1).find('.container--promo').removeClass('container--promo--go-to-right');
				$('.pppage__inner').eq(index - 1).find('.promo-decorations').removeClass('promo-decorations--go-to-right');

				/*$('.pppage__inner').eq(index - 1).find('.container--promo').addClass('container--promo--hidden').removeClass('container--promo--go-to-left').addClass('container--promo--go-to-right');
				$('.pppage__inner').eq(index - 1).find('.promo-decorations').addClass('promo-decorations--hidden').removeClass('promo-decorations--go-to-left').addClass('promo-decorations--go-to-right');*/


				setTimeout(function () {
					//проявили справа текст и картинку
					$('.site-header').removeClass('site-header--transparent').removeClass('site-header--hidden');//подготавливаем отображение шапки
					setTimeout(function () {
						//подождали 0.3 и вкл шапку

						$('body').removeClass('body-pp--leaving');

						vivuses[index - 1].reset().play();//начинаем рисовать картинку

						$('.screen-switch__item').removeClass('screen-switch__item--active').eq(index - 1).addClass('screen-switch__item--active');//активируем новую картинку
						pagepilling_lock=false;
						setTimeout(function () {

							/*
							.addClass('container--promo--hidden').removeClass('container--promo--go-to-left')
							 */
							/*

								setTimeout(function () {
									$('.site-header').removeClass('site-header--transparent').removeClass('site-header--hidden');



									setTimeout(function () {
									}, 3000);//1500
								}, 1000);
	*/
						}, 9000);
					}, 300);
				}, 1500);
			}, 550);



			/*	if (index > 1) {
					$('#pp-nav').removeClass('custom');
				} else {
					$('#pp-nav').addClass('custom');
				}*/
		}
	});


	setTimeout(function(){
		$('.preloader-wrap video')[0].play();
	},1000);
	setTimeout(function(){
		$('.preloader-wrap video')[0].play();
	},2000);
});

