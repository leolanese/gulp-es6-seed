import { install } from 'source-map-support';
install();

console.log([1,2,3].map(x => x * x));
const s = Symbol();
console.log(s);



throw new Error('Test!');
