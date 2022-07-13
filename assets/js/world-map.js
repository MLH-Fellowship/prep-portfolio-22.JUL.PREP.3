'use strict';

(function () {
    console.log('script loaded');

    // if updating default color also have to update
    // the world-map.html file (the #pins fill)
    const PIN_COLOR_DEFAULT = '#133667';
    const PIN_COLOR_HOVER = 'white';

    let pins = Array.from(document.querySelectorAll('.pin'));

    pins.forEach((pin) => {        
        // mouseover: change color for now
        pin.addEventListener('mouseover', () => {
            pin.style.fill = PIN_COLOR_HOVER;
            console.log(pin.dataset.fellow);
        });

        // mouseout: reset hover color
        pin.addEventListener('mouseout', () => {
            pin.style.fill = PIN_COLOR_DEFAULT;
        });
    });
})();
