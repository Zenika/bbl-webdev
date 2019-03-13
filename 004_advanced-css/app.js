'use strict'

import './styles.css';

import './components/modal/modal.js';
import './components/helloworld/helloworld.js';
import './components/csstest/csstest.js';

var el = document.createElement('hello-world');
el.name = 'Hassen';
document.getElementById('app').appendChild(el);

el = document.createElement('css-test');
document.getElementById('app').appendChild(el);

// Dynamic / asynchronous imports only work in Chrome or with Webpack
// Uncomment to try it out and see the differences
// Promise.all([
//     import('./components/modal/modal.js'),
//     import('./components/helloworld/helloworld.js'),
//     import('./components/csstest/csstest.js')
// ]).then(imports => {
//     var el = new imports[1].default;
//     el.name = 'Hassen';
//     document.getElementById('app').appendChild(el);

//     el = document.createElement('css-test');
//     document.getElementById('app').appendChild(el);
// });