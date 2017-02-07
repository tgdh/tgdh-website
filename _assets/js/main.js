import { $, $$ } from './modules/Bling';
import { url, sayHi } from './modules/Temp';
import Dog from './modules/Dog';

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');
console.log(snickers);
console.log(sunny);
console.log(url);
sayHi('test');
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
