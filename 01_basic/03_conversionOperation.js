let score ="33ab"
console.log(typeof score);
console.log(typeof (score))

let value = Number(score)//typecasting
console.log(typeof value);
console.log(value)


//"33" =>33
//"33ab"=>Nan but type is number
// if score=null=>0

//let isLoggedIn=1
//let bool= Boolean(isLoggedIn)
//console.log(bool)
let isLoggedIn= null
let bool=Boolean(isLoggedIn)
console.log(bool)