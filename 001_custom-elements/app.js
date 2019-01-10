'use strict'

import HelloWorld from './components/helloworld.js';

var el = document.createElement('hello-world');
el.name = 'Hassen';
document.getElementById('app').appendChild(el);

// Dynamic imports only work in Chrome
// Uncomment
// import('./components/helloworld.js').then(helloworld => {
//     var el = new helloworld.HelloWorld;
//     el.name = 'Hassen';
//     document.getElementById('app').appendChild(el);
// })