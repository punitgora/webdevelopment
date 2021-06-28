console.log("Hey, World");

// functions in js
function sum1(x,y){
    return x+y;
}

let sum2 = function(x,y){
    return x+y;
}
let sum3 = (x,y) => x+y;
//high order function -> fun that operates on fun and return fun
let sum4 = function(x) {
    return function(y) {
        return x+y;
    }
}

let sum5 = x => y => x+y;

console.log(sum1(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));
console.log(sum4(1)(2));
console.log(sum5(1)(2));

let array = [1,2,3,4,5];

array.forEach(x=>console.log(x));