'use strict';

(function() {
    // if updating default color also have to update
    // the world-map.html file (the #pins fill)
    const PIN_COLOR_DEFAULT = '#133667';
    const PIN_COLOR_HOVER = 'white';

    console.log("script loaded");

    let pin = document.querySelector('.pin'); // only 1 pin so far


    // mouseover: change color for now
    pin.addEventListener('mouseover', (evt) => {
        pin.style.fill = PIN_COLOR_HOVER;
    })

    // mouseout: reset hover color
    pin.addEventListener('mouseout', (evt) => {
        pin.style.fill = PIN_COLOR_DEFAULT;
    })

})();