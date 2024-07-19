function checkSum (a) {
if(a%2 == 0){

    console.log("A is even")
}
else {
    console.log("a is odd")
}
}

function cslcSq (a) {
    let square = a*a;
    console.log(square)
}

//function expression allows to create function inisde any expression

let max = function (a,b) {
    if(a>b){
        console.log(`${a} is greater`)
    }
    else {
        console.log(`${b} is greater`)
    }

}

let concatenated = function(str1,str2){
   return(str1.concat(str2))
     
}
let result = concatenated("Hello","World")
console.log(result)

let sum = (a,b) => {
    return(a+b)
}
let sumResult = sum(5,4)
console.log(sumResult)

let checkChar = (str,char) => {
    return(
    str.includes(char)
    )
}
let charResult = checkChar("Hello", "w")
console.log(charResult)


let product = (a,b=5) => {
    return a*b;
}
let productResult  = product(5)
console.log(productResult)

let greet = (name,age=18) => {
return (` good morning ${name} of ${age}` )
}
let mssg = greet("Aviral")
console.log(mssg)


let highFunction = (n,func) => {
for(let i = 0;i<n;i++){
    func()
}
}

let sayJai = () => {
    console.log("Jai Shree ram")
}
highFunction(7,sayJai)


let secHiioghFunc = (func1,func2,val) => {
return func2(func1(val))
}

let add5 = (num) => {
    return num + 5
}
let mulBy5 = (num) => {
    return num * 5
}
let finalResult = secHiioghFunc(add5,mulBy5,5)
console.log(finalResult)