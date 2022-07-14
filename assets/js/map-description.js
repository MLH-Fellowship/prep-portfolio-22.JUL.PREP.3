'use strict';

(function () {
    // if updating default color also have to update
    // the world-map.html file (the #pins fill)
    const PIN_COLOR_DEFAULT = '#133667';
    const PIN_COLOR_HOVER = 'white';

    // Pins are displayed on the world map (the circles)
    let pins = Array.from(document.querySelectorAll('.pin'));
    // Map cards are initially hidden and displayed when a relevant
    // pin is clicked
    let map_cards = Array.from(document.querySelectorAll('.map-card'));

    pins.forEach((pin) => {
        // mouseover: change color
        pin.addEventListener('mouseover', () => {
            pin.style.fill = PIN_COLOR_HOVER;
        });

        // mouseout: reset hover color
        pin.addEventListener('mouseout', () => {
            pin.style.fill = PIN_COLOR_DEFAULT;
        });

        // click: display fellows that this pin holds in
        // its data-fellow attribute
        pin.addEventListener('click', () => {
            // hide all cards first
            map_cards.forEach((card) => card.setAttribute('hidden', true));
            // dataset is strings seperated by spaces
            // we need this to be an array
            let fellow_arr = pin.dataset.fellow.split(' ');
            // find cards that have same data-fellow as the pin
            let fellow_cards = map_cards.filter((card) =>
                fellow_arr.includes(card.dataset.fellow)
            );
            // show the relevant cards
            fellow_cards.forEach((card) => card.removeAttribute('hidden'));
        });
    });
})();
