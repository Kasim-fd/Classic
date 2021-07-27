$(document).ready(function() {
    // Trigger The Nice Scroll
    $('html').niceScroll({
        zindex: "9999",
        cursorcolor: "#18bb9b",
        cursorwidth: "11px",
        cursorborder: "1px solid transparent"
    });

    // The Bergur Menu
    const menu = $('.menu');
    const nav = $('.links');
    
    menu.on('click', function() {
        menu.toggleClass('open');
        nav.slideToggle(700)
    });

    $(window).resize(function() {
        if ($('body').width() < 991) {
            nav.slideUp(1);
        } else {
            nav.slideDown();
        }
    });

    // The Active Class On Links
    const links = $('.links li');

    links.on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('section')).offset().top
        }, 500);
    });


    // The Background Slider
    
    const sliderBackground = $('.header');
    const prevBtn = $('#prev');
    const nextBtn = $('#next');
    
    let counterOne = 1;
    let index = 0;
    
    function nextSlide() {
        sliderBackground.css({
            backgroundImage: `url(imgs/0${counterOne + 1}.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
        });
        counterOne++;
        index++;
        clearInterval(backgroundIntr);
        nextTimer();
    
        if (counterOne > 5) {
            sliderBackground.css({
                backgroundImage: `url(imgs/01.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            });
            counterOne = 1;
            index = 0
        }
    }
    
    function prevSlide() {
        sliderBackground.css({
            backgroundImage: `url(imgs/0${counterOne - 1}.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed'
        });
        counterOne--;
        index--;
        clearInterval(backgroundIntr);
        nextTimer();
        
        if (counterOne < 1) {
            sliderBackground.css({
                backgroundImage: `url(imgs/05.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            });
            counterOne = 5;
            index = 4;
        }
    
        if (index < 0) {
            sliderBackground.css({
                backgroundImage: `url(imgs/05.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            });
            counterOne = 5;
            index = 4;
        }
    }
    
    nextBtn.on('click', () => {
        nextSlide()
    });
    
    prevBtn.on('click', () => {
        prevSlide();
    });
    
    function nextTimer() {
        backgroundIntr = setInterval(() => {
            sliderBackground.css({
                backgroundImage: `url(imgs/0${counterOne + 1}.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            });
            counterOne++;
            index++;
        
            if (counterOne > 5) {
                sliderBackground.css({
                    backgroundImage: `url(imgs/01.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed'
                });
                counterOne = 1;
                index = 0
            }
        }, 7000);
    }
    
    nextTimer();

    // The Team
    const teamImgs = $('.team .img-box .overlay');

    teamImgs.on('click', function() {
        $(this).addClass('active').removeClass('unactive').parent().siblings().children().removeClass('active').addClass('unactive');
    });

    // The Testimonials

    const carousel = $('.img-carousel');
    const sliderInd = $('.inds li');
    
    var counter = 1;
    var op_index = 0;
    
    carousel.scrollLeft(0);
    
    sliderInd.each(function() { $(this).removeClass('active') });
    sliderInd.eq(op_index).addClass('active');
    
    sliderInd.click(function() {
        carousel.scrollLeft(700 * $(this).data('number'), 0)

        $(this).addClass('active').siblings().removeClass('active');
    
        op_index = $(this).data('index');
        counter = $(this).data('index') + 1;
    
        clearInterval(nextTime);
        nextSlide();
    });
    
    function next() {
        if (counter >= carousel.children().length) {
            counter = 1;
            op_index = 0;
            $('.inds li').first().click();
        } else {
            counter++;
            op_index++;
            $('.inds li').eq(op_index).click();
        }
    
        sliderInd.each(function() { $(this).removeClass('active') });
        sliderInd.eq(op_index).addClass('active');
    }
    
    function nextAnything() {
        nextTime = setInterval(() => {
            next();
        }, 7000);
    }
    
    nextAnything();
    
    window.addEventListener('resize', () => {
        previosCall = setTimeout(() => {
            carousel.scrollLeft(-700);
        }, 100);
    });

    // The Portfolio

    const portBtns = $('.portfolio .buttons button');

    portBtns.on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.portfolio .container').hide().removeClass('active');
        $($(this).data('port')).fadeIn(500).css('display', 'flex').addClass('active');
    });

    // The Portfolio Imgs Overlay

    const portImgs = $('.portfolio .port-img .overlay');

    portImgs.on('click', function() {
        $(this).addClass('active').removeClass('unactive').parent().siblings().children().removeClass('active').addClass('unactive');
    });

    // Scroll To Top Button

    const topBtn = $('.up');

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1100) {
            topBtn.fadeIn(500).css('display', 'flex');
        } else {
            topBtn.fadeOut(500);
        }
    });

    topBtn.click(function() {
        $('html').animate({ scrollTop: '0' }, 700)
    });
});