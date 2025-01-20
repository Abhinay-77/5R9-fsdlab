const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');


console.log(Symbol.keyFor(globalSymbol1));
console.log(Symbol.keyFor(globalSymbol2));


console.log(globalSymbol1 === globalSymbol2);


//differences
/*
1.`Symbol()` creates a unique symbol every time it is called, even if the description is the same.
2.`Symbol.for()`looks up a global symbol registry and returns the same symbol for the given key if it already exists, or creates a new one if not.
3.Symbols created with `Symbol()` are not shared across different parts of the program.
4.Symbols created with `Symbol.for()` are shared globally, meaning they can be accessed by any code using the same key.
5.`Symbol()` is independent, while `Symbol.for()` provides global symbol sharing.

*/
