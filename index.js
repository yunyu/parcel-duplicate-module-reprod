import Inferno from 'inferno';
import Component from 'inferno-component';

// Should print false
console.log(Inferno === Component);
// Should print object
console.log(typeof Inferno);
// Should print function
console.log(typeof Component);
