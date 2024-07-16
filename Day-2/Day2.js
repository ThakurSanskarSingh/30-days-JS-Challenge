let a = 5 , b = 6;
const sum = a +b ;
const sub = a-b;
const multiply = a*b;
const divide = a/b;
const remainder = a%b;
console.log(sub)
console.log(sum)
console.log(multiply)
console.log(divide)

console.log(remainder)



a += 3;
b -= 2;
console.log(a)
console.log(b)

let compare =  a>b;
console.log(compare)
a= 2 , b=2;
let compare3 = a===b;
console.log(compare3)

a = 5 , b = 3;

if(a > b && a!=0){
    console.log("and operator")
} else if(a==b || a <b){
    console.log("or operator")
}

a > 0 ? console.log("a is greater than 0") : console.log("a is smaller than 0")
