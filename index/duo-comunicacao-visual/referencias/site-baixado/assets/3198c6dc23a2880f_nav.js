// // Menu Principal
// // Abrir menu responsivo
$('.hamburguer').on('click', function(event) {
	if ($(this).hasClass('active')) {
		overflowFree();
	} else {
		overflowBlocked();
	}
	$('#menu').toggleClass('active');
	$('.hamburguer').toggleClass('active');
	$('nav').toggleClass('nav_sobre');
});

// Fechar menu responsivo
$('#menu li').on('click', function(event) {
	$('#menu').removeClass('active');
	$('.hamburguer').removeClass('active');
	$('nav').removeClass('nav_sobre');

	var urlLi = $(this).children('a').attr('href');
	console.log('data-link '+urlLi);

	switch (urlLi) {
		case '#page1':
		$('html, body').animate({scrollTop: $('#home').offset().top}, 800);
		break;
		// case '#page2':
		// $('html, body').animate({scrollTop: $('#home').offset().top}, 800);
		// break;
		// case '#page3':
		// $('html, body').animate({scrollTop: $('#home').offset().top}, 800);
		// break;
		case '#page4':
		$('html, body').animate({scrollTop: $('#sobre').offset().top}, 800);
		break;
		case '#page3':
		$('html, body').animate({scrollTop: $('#servicos').offset().top}, 800);
		break;
		case '#page2':
		$('html, body').animate({scrollTop: $('#portfolio').offset().top}, 800);
		break;
		case '#page5':
		$('html, body').animate({scrollTop: $('#contato').offset().top}, 800);
		break;
		default:
		$('html, body').animate({scrollTop: $('#home').offset().top}, 800);
		break;
	}

	overflowFree();
});	