// READY
$(document).ready(function() {
	var deviceSizeW = $('body').width();
	if (deviceSizeW > 1170) {

		// Declaração do full page JS
		// Mudança de cor do NAV
		// 
		$(function(){
			$('#fullpage').fullpage({
				sectionSelector: '.page',
				scrollOverflow: true,
				menu: '#menu',
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5'], //home, portfolio, servicos, sobre, contato
				navigation: 'true',
				navigationPosition: 'left',
				afterRender: function(){$('#pp-nav').addClass('custom');},
				afterLoad: function(anchorLink, index){
					if (index == 1) {
						$('nav').removeClass();
						$('nav').addClass('nav_header');
						$('#home').focus();
					} 
					else if(index == 2) {
						$('nav, #fp-nav').removeClass().addClass('left');
						$('nav, #fp-nav').addClass('nav_portfolio');
						$('#portfolio').focus();
					} 
					else if(index == 3) {
						$('nav, #fp-nav').removeClass().addClass('left');
						$('nav, #fp-nav').addClass('nav_servicos');
						$('#servicos').focus();
					} 
					else if(index == 4) {
						$('nav, #fp-nav').removeClass().addClass('left');
						$('nav, #fp-nav').addClass('nav_sobre');
						$('#sobre').focus();
					} 
					else if (index == 5) {
						$('nav, #fp-nav').removeClass().addClass('left');
						$('nav, #fp-nav').addClass('nav_contato');
						$('#contato').focus();
					}
				}
			});
		});

		// Link para o portfolio
		$('#servicos .fakeLink').on('click', function(e){
			e.preventDefault();
            CarregaFotos($(this).attr('data-filter'));
			$.fn.fullpage.moveTo('page2', 1);
			 $('.slimScrollBar').slimScroll({scrollTo:'0px'});
		});

		// Link para o contato
		$('.headerPage .linkHeader').on('click', function(e){
	        e.preventDefault();
			$.fn.fullpage.moveTo('page5', 1);
		});

		// Setas para passar os serviços
		$('#servicos .buttonR').on('click', function() {
			var scrollPosition = $('.servicesList').scrollLeft();
			$('.servicesList').scrollLeft(scrollPosition + 100)
		});
		$('#servicos .buttonL').on('click', function() {
			var scrollPosition = $('.servicesList').scrollLeft();
			$('.servicesList').scrollLeft(scrollPosition - 100)
		});


	} else {
		// Inicia o modo responsivo
		$('body').addClass('responsiveMode');
		$('.maxRow').removeClass().removeAttr('class');
		$('.page').addClass('active');

		// Ajustes no nav
		$('nav').appendTo('body');
		$('body').on('scroll', function() {
			// var scrollT = $('body').scrollTop();
			// $('nav').css('top', scrollT);
		});

		// Slide header
		// $('.headerPage').prependTo(".slideHeaders");
		// $('.slideHeaders').slick({
		// 	dots: true,
		// 	arrows: false,
		// 	speed: 300,
		// 	infinite: false,
		// 	slidesToScroll: 1,
		// });

		$('.fakeLink').on('click', function() {	
            CarregaFotos($(this).attr('data-filter'));
            scrollServicos = $(".headerPage .contentBox_middle").height();
            console.log(scrollServicos);
			$('html, body').animate({
				scrollTop: scrollServicos - 60
			}, 800);
		});
	}


	// Continuação // Ready
	$('.slideHeaders').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		//autoplay: false,
  		autoplaySpeed: 4000,
		speed: 300,
		infinite: true,
		slidesToScroll: 1,
        pauseOnHover: false
	});
});

// Slide - sobre
$('.slideSobre').slick({
	dots: true,
	arrows: false,
	speed: 300,
	infinite: false,
	slidesToScroll: 1,
});

// Clique nas categorias de portfolio
/*$('#filters button, .fakeLink').on('click', function() {
	var check = $(this).attr('data-filter');
	if (check == 'all-itens') {
		$('.captionsCategories span.active').html('<strong>Exibindo</strong> Todos os projetos');
	} else {		
		var categoriesCaptions = $(this).attr('data-filter').replace('.', '');
		var contentSpan = $(".captionsCategories span[data-filter="+categoriesCaptions+"]").html();
		$('.captionsCategories span.active').html(contentSpan);
		$("#filters button").removeClass('active');
		$(this).addClass('active');
	}
});*/

// contato
$('#contato input, #contato textarea').on('focusin', function() {
	$(this).parent().addClass('active');
});
$('#contato input, #contato textarea').on('focusout', function() {
	$('#contato input, #contato textarea').parent().removeClass('active');
});
var $grid;
$(window).on('load',function () {
    // grid portfolio
    $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        sortBy: 'random',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    setTimeout(function() {
        $grid.isotope('shuffle');
    }, 1000);
});


// filtro
/*
var filterFns = {
	numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	},
	ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	}
};
$('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});
*/
$('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    CarregaFotos(filterValue);
});

function CarregaFotos(filterValue){
    if (filterValue == 'all-itens') {
        $('.captionsCategories span.active').html('<strong>Exibindo</strong> Todos os projetos');
    } else {
        var contentSpan = $(".captionsCategories span[data-filter="+filterValue+"]").html();
        $('.captionsCategories span.active').html(contentSpan);
        $("#filters button").removeClass('active');
        $(this).addClass('active');
    }

    $('.filtr-container').addClass('loading');
    $.ajax({
        type: "POST",
        data: {filter: filterValue},
        url: "ajax-portifolio.php",
        success: function (result) {
            $grid.isotope('destroy');
            $(".grid").html(result);


            var imgs = $(".element-item img"); // busca imagens pela tag img
            var imgs_conta = imgs.length; // conta o número de imagens
            var conta = 0; // seta um contador
            // aqui eu crio um event load para cada imagem
            imgs.each(function(i,e){
                e.onload = function(){
                    conta++; // quando a imagem é carregada, incremento o contador
                   
                    // se o contador alcançar o número de imagens, chamo a função
                    if(conta == imgs_conta){
                        $('.grid').isotope({
                            itemSelector: '.element-item',
                            layoutMode: 'masonry',
                            sortBy: 'random',
                            percentPosition: true,
                            masonry: {
                                columnWidth: '.grid-sizer'
                            }
                        });

                        setTimeout(function () {
                            $('.filtr-container').removeClass('loading');
                        },1000);
                    };
                }
            });
        }
    });
}


// Hash alternativa ao fullpage
$(window).on('load', function() {
	var urlHash = document.location.hash;
	var checkIfFullPageOrSectionLink = urlHash.split('page');
	if(checkIfFullPageOrSectionLink[0] == '#') {
		checkResult = 'fpLink';
		switch (urlHash) {
			case '#page1':
				history.pushState('Home','Duo Comunicação','#home');
				$('html, body').animate({scrollTop: $('#home').offset().top}, 800);
				break;
			case '#page4':
				history.pushState('Sobre','Duo Comunicação','#sobre');
				$('html, body').animate({scrollTop: $('#sobre').offset().top}, 800);
				break;
			case '#page3':
				history.pushState('Serviços','Duo Comunicação','#servicos');
				$('html, body').animate({scrollTop: $('#servicos').offset().top}, 800);
				break;
			case '#page2':
				history.pushState('Portfolio','Duo Comunicação','#portfolio');
				$('html, body').animate({scrollTop: $('#portfolio').offset().top}, 800);
				break;
			case '#page5':
				history.pushState('Contato','Duo Comunicação','#contato');
				$('html, body').animate({scrollTop: $('#contato').offset().top}, 800);
				break;
			default:
				history.pushState('Home','Duo Comunicação','#home');
				break;
		}
	} else if (urlHash == '') {
		checkResult = 'urlPrimary';
	} else {
		checkResult = 'sectionLink';
		$('html, body').animate({scrollTop: $(urlHash).offset().top}, 800);
	}
});

$('.telMask').focusout(function () {
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if (phone.length > 10) {
        element.mask("(99) 99999-999?9");
    } else {
        element.mask("(99) 9999-9999?9");
    }
}).trigger('focusout');

$("#formContato").validate({
    submitHandler: function (form) {
        //SUBMIT form
        $(form).ajaxSubmit({
            //target: 'status-envio',
            beforeSubmit: function () {
                $('#status-envio').show();
                $('#status-envio').html('<span class="loading active"> Enviando, aguarde...</span>');
                $('#bt-contato').attr('disabled', true);
            },
            success: function (result) {
                result = result.split('|');
                if (result[0].length == 1){
                    if(parseInt(result[0]) == 1){
                        $('#status-envio').html(result[1]);
                        setTimeout(function(){
                            $('#bt-contato').attr('disabled',false);
                            $("#formContato .field").html('').val('');
                            $("#formContato .field").removeClass('error');
                            $('#status-envio').hide();
                            $('#status-envio').empty();
                        },2000);
                    }
                }else{
                    $('#bt-contato').attr('disabled',false);
                    $('#status-envio').html(result);
                    setTimeout(function () {
                        $('#status-envio').hide();
                        $('#status-envio').empty();
                        $('#bt-contato').attr('disabled', false);
                    }, 3000);
                }
            }
        });
    }
});

// RESIZE

// recarrega a página caso for redimensionado acima de 1200px ded largura
// isso previne erros no fullpage.js
$(window).on('resize', function() {
	var deviceSizeW = $('body').width();
	if (deviceSizeW > 1170) {
		location.reload(true);
	}
});