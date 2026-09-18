// function showMessageOnIE() {
//     var ieDetectEl = $('#w_ieDetect');
//     var ieDetectEl__mask = $('#w_ieDetect__mask');
//     var ieDetectEl__unlock = $('.w_ieDetect__unlockSite');
//
//     if (is.ie()) {
//         // block overflow and show modal
//         $('body').css('overflow', 'hidden');
//         ieDetectEl.removeClass('u-dnone').addClass('is-visible');
//         ieDetectEl__mask.removeClass('u-dnone').addClass('is-visible');
//
//         // hide modal and mask
//         ieDetectEl__unlock.on('click', function() {
//             $(this).remove();
//             ieDetectEl__mask.remove();
//             ieDetectEl.removeClass('is-visible');
//             ieDetectEl.addClass('is-fixed');
//             $('body').css('overflow-y', 'auto');
//             $('body').css('overflow-x', 'hidden');
//         });
//     } else {
//         ieDetectEl.remove();
//         ieDetectEl__mask.remove();
//     }
// }
//
// $(window).on('load', showMessageOnIE());


function showMessageOnIE(warnLevel) {
    // warnLevel = 1 -> Remover aviso
    // warnLevel = 2 -> Recolher aviso
    // warnLevel = 3 -> Bloquear navegação

    var ieDetectEl = $('#w_ieDetect');
    var ieDetectEl__mask = $('#w_ieDetect__mask');
    var ieDetectEl__unlock = $('.w_ieDetect__unlockSite');

    if (is.ie()) {
        console.log('IE DETECTED')
        if(warnLevel == 1) {
            $('body').css('overflow', 'hidden');
            ieDetectEl.removeClass('u-dnone').addClass('is-visible');
            ieDetectEl__mask.removeClass('u-dnone').addClass('is-visible');

            ieDetectEl__unlock.on('click', function() {
                ieDetectEl.remove();
                ieDetectEl__mask.remove();
                $('body').css('overflow-y', 'auto');
                $('body').css('overflow-x', 'hidden');
            });
        }
        if(warnLevel == 2) {
            //block overflow and show modal
            $('body').css('overflow', 'hidden');
            ieDetectEl.removeClass('u-dnone').addClass('is-visible');
            ieDetectEl__mask.removeClass('u-dnone').addClass('is-visible');

            // hide modal and mask
            ieDetectEl__unlock.on('click', function() {
                $(this).remove();
                ieDetectEl__mask.remove();
                ieDetectEl.removeClass('is-visible');
                ieDetectEl.addClass('is-fixed');
                $('body').css('overflow-y', 'auto');
                $('body').css('overflow-x', 'hidden');
            });
        }
        if(warnLevel == 3) {
            $('nav').remove();
            $('header').remove();
            $('footer').remove();
            $('main').remove();
            ieDetectEl__unlock.remove();
            $('body').css('overflow', 'hidden');
            ieDetectEl.removeClass('u-dnone').addClass('is-visible');
            ieDetectEl__mask.removeClass('u-dnone').addClass('is-visible');
        }
    } else {
        ieDetectEl.remove();
        ieDetectEl__mask.remove();
    }
}
$(window).on('load', showMessageOnIE(1));