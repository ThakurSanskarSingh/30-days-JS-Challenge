let book = {
    "title" : "Why I Killed MG",
    "author" : "Nathuram Godse",
    "year" : "1948"
}
console.log(book.title)

console.log(Object.entries(book))

let book2 = {"year" : "1947"}
Object.assign(book,book2)
console.log(book)

let user = {
    name : "sanskar",
    age : "18",
    caste : "Thakur",
    
 thisMethod() {
    console.log(this.name)
}
}


for(let key in user){
    console.log(key)
    // console.log(user[key])
}
user.thisMethod()
