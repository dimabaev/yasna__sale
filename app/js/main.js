// Объявление модуля
var myModale = (() => {

    // Инициализирует наш модуль
    let init = () => {
        _setUpListners();
    };

    let _setUpListners = () => {
        $('#load__popUp').on('click', _showModal); //откритые модального окна
        $('#close__popup').on('click', _closeModal); //закрытие модального окна
    };


    //работает с модальным окном
    let _showModal = function (ev) {
        console.log('открытие модального окна');
        ev.preventDefault();

        $('.block__modal').toggleClass('flex');

    };

    // закрытие модального окна
    let _closeModal = function (ev) {
        console.log('Закрытие модального окна');
        ev.preventDefault();

        $('.block__modal').removeClass('flex');

    };


    // OWL скритпт для работы со слайдером
    //=============== 
    let sync1 = $('#sync1');
    let sync2 = $('#sync2');
    let slidesPerPage = 4; //globaly define number of elements per page
    let syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        slideSpeed: 2000,
        autoplay: true,
        loop: true,
        margin: 10,
    })

    sync2.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        loop: true,
        margin: 10,
    })

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count)  {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });



    // Возвращаем объект (публичные методы)
    return {
        init: init
    };

})();

// Вызов модуля
myModale.init();