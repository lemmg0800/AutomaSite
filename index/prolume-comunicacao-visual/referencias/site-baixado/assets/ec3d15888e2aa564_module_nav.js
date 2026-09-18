if($('.l-nav').length) {
    // vars
    var nav_scrollInit = 0;
    var nav_classActive = 'is-active';
    var nav_el = {
        body: $('body'),
        hamburguer: $('.c-hamburguer'),
        mask: $('.l-nav__maskMenu'),
        nav: $('.l-nav'),
        navContentHero: $('.l-nav__contentHero'),
        liWithOneLevelSubMenu: $('.liWithOneLevelSubMenu > a'),
        liWithTwoLevelsSubMenu: $('.liWithTwoLevelsSubMenu > a'),
        liWithoutSubMenu: $('.liWithoutSubMenu > a'),
        firstSubMenu: $('.firstSubMenu'),
        secondSubMenu: $('.secondSubMenu'),
        openSecondSubMenu: $('.openSecondSubMenu'),
    };

    // functions
    function showMask() {
        nav_el.mask.addClass(nav_classActive);
    }
    function hideMask() {
        nav_el.mask.removeClass(nav_classActive);
    }
    function closeAllSubMenus() {
        nav_el.liWithOneLevelSubMenu.parent('li').removeClass(nav_classActive);
        nav_el.liWithTwoLevelsSubMenu.parent('li').removeClass(nav_classActive);
    }
    function overflowBlocked() {
        nav_el.body.addClass('u-overflowBlocked');
    }
    function overflowFree() {
        nav_el.body.removeClass('u-overflowBlocked');
    }
    function closeNavContent() {
        nav_el.navContentHero.removeClass(nav_classActive);
    }
    function openNavContent() {
        nav_el.navContentHero.addClass(nav_classActive);
    }
    function inactiveHamburguer() {
        nav_el.hamburguer.removeClass(nav_classActive);
    }
    function activeHamburguer() {
        nav_el.hamburguer.addClass(nav_classActive);
    }

    function closeAllMenuItens() {
        hideMask();
        closeAllSubMenus();
        overflowFree();
        closeNavContent();
        inactiveHamburguer();
    }
    function openAllMenuItens() {
        showMask();
        overflowBlocked();
        openNavContent();
        activeHamburguer()
    }

    // effect on scroll
    $(window).on('scroll', function(event) {
        var scrollBody = $(this).scrollTop();

        // scroll up to 99
        if (scrollBody > 99) {
            nav_el.nav.addClass('scrolled');
        } else {
            nav_el.nav.removeClass('scrolled');
        }

        // middle class
        if (scrollBody > 600) {
            nav_el.nav.addClass('hidden');
            nav_el.nav.addClass('scrolledMiddle');
        } else {
            nav_el.nav.removeClass('hidden');
            nav_el.nav.removeClass('scrolledMiddle');
        }

        // scroll up or down
        if (scrollBody < nav_scrollInit) {
            nav_el.nav.removeClass('hidden');
            nav_el.nav.addClass('scrolledUp');
            nav_el.nav.removeClass('scrolledDown');
        } else {
            nav_el.nav.removeClass('scrolledUp');
            nav_el.nav.addClass('scrolledDown');
        }

        // close menus on hidden nav
        if(nav_el.nav.hasClass('hidden')) {
            closeAllMenuItens();
        }

        // reference var
        nav_scrollInit = scrollBody;
    });
    $(window).on('load', function(event) {
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            nav_el.nav.addClass('scrolled');
        } else {
            nav_el.nav.removeClass('scrolled');
        }
    });

    // open/close/menus/submenus/hamburguer on clicks
    nav_el.hamburguer.on('click', function() {
        if ($(this).hasClass(nav_classActive)) {
            closeAllMenuItens();
        } else {
            openAllMenuItens();
        }
    });
    nav_el.mask.on('click', function() {
        closeAllMenuItens()
    });
    nav_el.liWithoutSubMenu.on('click', function() {
        closeAllMenuItens();
    });
    nav_el.firstSubMenu.children('li').on('click', function() {
        if(!$(this).hasClass('openSecondSubMenu')) {
            closeAllMenuItens();
        }
    });
    nav_el.secondSubMenu.children('li').on('click', function() {
        closeAllMenuItens();
    });

    // open/close with swipe
    if(nav_el.nav.hasClass('l-nav--touchEnabled')) {
        if(is.touchDevice()) {
            document.addEventListener('touchstart', handleTouchStart, false);
            document.addEventListener('touchmove', handleTouchMove, false);
            var xDown = null;
            var yDown = null;
            function getTouches(evt) {
                // browser API
                return evt.touches ||
                    // jQuery
                    evt.originalEvent.touches;
            }
            function handleTouchStart(evt) {
                const firstTouch = getTouches(evt)[0];
                xDown = firstTouch.clientX;
                yDown = firstTouch.clientY;
            }
            function handleTouchMove(evt) {
                if ( ! xDown || ! yDown ) {
                    return;
                }

                var xUp = evt.touches[0].clientX;
                var yUp = evt.touches[0].clientY;
                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
                    if (xDiff > 0) {
                        // left swipe
                        toggleHamburguer_swiperLeft();
                    } else {
                        // right swipe
                        toggleHamburguer_swiperRight();
                    }
                } else {
                    // if ( yDiff > 0 ) {
                    //     // up swipe
                    // } else {
                    //     // down swipe
                    // }
                }
                // reset
                xDown = null;
                yDown = null;
            }
            function toggleHamburguer_swiperRight() {
                nav_el.hamburguer.removeClass(nav_classActive);
                nav_el.mask.removeClass(nav_classActive);
                nav_el.navContentHero.removeClass(nav_classActive);
                //nav_el.nav.removeClass('hidden');
                overflowFree();
                hideMask();
                console.log('right');
            }
            function toggleHamburguer_swiperLeft() {
                nav_el.hamburguer.addClass(nav_classActive);
                nav_el.mask.addClass(nav_classActive);
                nav_el.navContentHero.addClass(nav_classActive);
                nav_el.nav.removeClass('hidden');
                overflowBlocked();
                showMask();
                console.log('left');
            }
        }
    }
}

// for navs with sub menus
if ($('.l-nav--withSubMenus').length) {
    // open close submenus with clicks
    nav_el.liWithOneLevelSubMenu.on('click', function (event) {
        event.preventDefault();
        if (is.mobile()) {
            // mobile
            $(this).parent('li').toggleClass(nav_classActive);
            $(this).parent('li').children('a').toggleClass(nav_classActive);
            showMask();
        } else {
            // desktop
            nav_el.liWithOneLevelSubMenu.parent('li').removeClass(nav_classActive);
            nav_el.liWithTwoLevelsSubMenu.parent('li').removeClass(nav_classActive);
            $(this).parent('li').addClass(nav_classActive);
            showMask();
        }
    });
    nav_el.liWithTwoLevelsSubMenu.on('click', function (event) {
        event.preventDefault();
        if (is.mobile()) {
            // mobile
            $(this).parent('li').toggleClass(nav_classActive);
            $(this).parent('li').children('a').toggleClass(nav_classActive);
            showMask()
        } else {
            // desktop
            nav_el.liWithOneLevelSubMenu.parent('li').removeClass(nav_classActive);
            nav_el.liWithTwoLevelsSubMenu.parent('li').removeClass(nav_classActive);
            $(this).parent('li').addClass(nav_classActive);
            showMask()
        }
    });
    nav_el.openSecondSubMenu.on('click', function(event) {
        // event.preventDefault();
        if (is.mobile()) {
            $(this).children('.secondSubMenu').toggleClass(nav_classActive);
        } else {
            // desktop
            nav_el.secondSubMenu.removeClass(nav_classActive);
            $(this).children('.secondSubMenu').addClass(nav_classActive);
        }
    });
}