import Darkmode from 'drkmd-js';

(function () {
    'use strict';

    (function () {
      // Load ICONS
      const fileName = 'icons.svg';
      const elementId = 'js-svg-' + fileName.replace('.svg', '');
      const ajax = new XMLHttpRequest();
      ajax.open('GET', `./assets/svg/${fileName}`, true);
      ajax.send();
      ajax.onload = function () {
        if (document.getElementById(elementId)) return;
        const div = document.createElement('div');
        div.id = elementId;
        div.style.display = 'none';
        div.innerHTML = ajax.responseText;
        document.body.appendChild(div);
      };
    })();
})();
