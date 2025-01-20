const symbol1 = Symbol('property');
const symbol2 = Symbol('property');

const obj = {
  [symbol1]: 'This is the value for symbol1',
  [symbol2]: 'This is the value for symbol2'
};

console.log(obj[symbol1]);
console.log(obj[symbol2]);

console.log(symbol1 === symbol2);