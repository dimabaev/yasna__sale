// Объявление модуля
var myModale = (() => {

    // Инициализирует наш модуль
    let init = () => {
        _setUpListners();
    };

    let _setUpListners = () => {

    };

    // Возвращаем объект (публичные методы)
    return {
        init: init
    };

})();

// Вызов модуля
myModale.init();