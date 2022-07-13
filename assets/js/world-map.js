'use strict';

(function() {
    console.log("script loaded");

    let pin = document.querySelector('.pin'); // only 1 pin so far

    pin.addEventListener('mouseover', (evt) => {
        console.log(evt.target.toString());
    })
})();