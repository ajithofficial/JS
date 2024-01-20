let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false

// new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

// When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true.

// However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.
