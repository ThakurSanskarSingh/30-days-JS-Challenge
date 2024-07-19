let arr1 = [1,2,3,4,5]
console.log(arr1)
console.log(arr1[0] , arr1[4])

 arr1.push(6)
console.log(arr1)

 arr1.pop()
console.log(arr1)

arr1.shift
console.log(arr1)

arr1.unshift(0)
console.log(arr1)
//filter contains new arrr which meet applied conditions 
///filtr takes only that function which returns a boolean
//map methid works accordin to given funcion

let dblArr = arr1.map((n) => (n*n))
console.log(dblArr)

evennArr = arr1.filter((n) => (n%2==0))
console.log(evennArr)

let sumArr1 = arr1.reduce((sum,n) => (sum+n))
console.log(sumArr1)

for(let i=0;i < 6;i++){
    console.log(arr1[i])
}
arr1.forEach((n) => (console.log(arr1[n])))

let row = 4
let col = 4
let twoD = []
for(let i=0;i<row;i++){
    twoD.push(i)
    for(let j=0;j<col;j++){
        twoD.push(j)
    }
}
console.log(twoD)