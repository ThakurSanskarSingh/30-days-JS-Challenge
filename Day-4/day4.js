for(var i =1;i<=10;i++){
    console.log(i);
}

for(var i = 1;i<=10;i++){
    console.log(5*i);
}
let sum =0;
let count = 1;
while (count <= 5) {
 sum = sum + count;
  count++;
}
console.log(sum)

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log("*")

    }
    console.log("\n")
}
var i;
for(i=1;i<=10;i++){
    if(i==5) continue
    console.log(i);
    
}
for(i=1;i<=10;i++){
    if(i==7) break
    console.log(i)
}