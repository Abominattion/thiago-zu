const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    const btn = document.getElementById('btn-mobile');
    btn.classList.toggle('active');
    const active = btn.classList.contains('active');
}

/////////
const btnMobile2 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu2);

function toggleMenu2(event) {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav-mobile');
    const active = nav.classList.contains('nav-mobile');
}

//////
/////////
const btnMobile3 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu3);

function toggleMenu3(event) {
    const nav = document.getElementById('body');
    nav.classList.toggle('dark-body');
    const active = nav.classList.contains('dark-body');
}

(function($) {
    "use strict";

    var $navbar = $("#sticky"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("header-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("header-fixed").clearQueue().animate({
                top: "0"
            }, 0);
        }
    });
    

})(jQuery, undefined);

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Mudar para active o menu de acordo com a área
$('section').each(function(){
	var height = $(this).height(),
			offsetTop = $(this).offset().top,
			menuHeight = $('header').innerHeight(),
			id = $(this).attr('id'),
			$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(debounce(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active-link');
		} else {
			$itemMenu.removeClass('active-link');
		}
	}, 0));
});

// Scroll Up
$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollSmooth", "auto");
    });

});