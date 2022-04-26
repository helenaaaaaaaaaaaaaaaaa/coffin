
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.mobile-menu').toggleClass('mobile-menu--visible');
		$('.site-header').toggleClass('site-header--mobile-menu-opened');
		$('body').toggleClass('body-fixed');
	});

	/*
	var headerBtn = document.querySelector(".header__btn");
	headerBtn.addEventListener("click", function (){
		document.querySelector(".menu__list").classList.toggle("menu__list--visible");
	})
	 */
/*	const burger = document.querySelector('.burger');
	burger.addEventListener('click', () =>{
		burger.classList.toggle('burger_active');
	}); */
});
