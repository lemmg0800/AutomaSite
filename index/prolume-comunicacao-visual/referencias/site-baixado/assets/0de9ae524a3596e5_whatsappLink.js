// this var have an options, elements and others things of the module
var wppl = {
    el: $('.wppLink'),
    icon: $('.wppLink__roundedIcon'),
    infos: $('.wppLink__infos'),
    form: $('.wppLink__form'),
    formBtn: $('#btnWhats'),
    close: $('.wppLink__close')
};

const number = wppl.formBtn.attr('data-numero');

// this var have an options and parameters of the link
var wppl__parts = {
    link_mobile: 'http://api.whatsapp.com/',
    link_web: 'https://web.whatsapp.com/',
    phone: 'send?phone=',
    msg: 'text='
};

// make the final link
wppl.icon.on('click', function() {
    if (is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry() || is.mobile()) {
        // MOBILE VERSION
        if (!wppl.el.hasClass('wppLink--withForm')) {
            window.open(wppl__parts.link_mobile + wppl__parts.phone + number, '_blank');
        } else {
            toggleForm();
        }
    } else {
        // WEB VERSION
        if (!wppl.el.hasClass('wppLink--withForm')) {
            window.open(wppl__parts.link_web + wppl__parts.phone + number, '_blank');
        } else {
            toggleForm();
        }
    }
});
wppl.formBtn.on('click', function(e) {
    var userName = $('#formWhats_nome').val();
    var userMsg = $('#formWhats_mensagem').val();
    userFullMsg = 'Olá, me chamo *' + userName + '* E tenho essa mensagem: *' + userMsg + '*';
    if (is.iphone() || is.androidPhone() || is.windowsPhone() || is.blackberry() || is.mobile()) {
        window.open(wppl__parts.link_mobile + wppl__parts.phone + number + '&' + wppl__parts.msg + userFullMsg, '_blank');
    } else {
        window.open(wppl__parts.link_web + wppl__parts.phone + number + '&' + wppl__parts.msg + userFullMsg, '_blank');
    }
});
function toggleForm() {
    wppl.form.toggleClass('is-active');
    wppl.form.removeClass('u-dnone');
}
wppl.close.on('click', function() {
    wppl.form.removeClass('is-active');
});

// check modifiers and remove useless elements
if (wppl.el.hasClass('wppLink--hideNumber')) {$('.wppLink .wppNumber').remove();}
if (wppl.el.hasClass('wppLink--hideCaption')) {$('.wppLink .wppCaption').remove();}
if (wppl.el.hasClass('wppLink--onlyIcon')) {$('.wppLink .wppLink__infos').remove();}
if (!wppl.el.hasClass('wppLink--withForm')) {$('.wppLink .wppLink__form').remove();}

// check dispositive and remove useless elements
if(is.mobile()){
    // removeCaption
    $('.wppLink .wppCaption').remove();
    if (!wppl.el.hasClass('wppLink--hideNumber')) {
        wppl.el.addClass('wppLink--hideCaption');
    }

    if (wppl.el.hasClass('wppLink--disableFormInMobile')) {
        wppl.form.remove();
        wppl.el.removeClass('wppLink--withForm');
    }
}