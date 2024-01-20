// Js behavior when use operators with boolean

var a = +true;
var b = +false;
var c = 5 * false;
var d = 5 * true;

// true will be act like 1 when we use with operators
console.log(a, b, c, d);

var x = !'Banana';
// string will be act like boolean when we use with operators
console.log(x);
