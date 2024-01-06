const name="Ashish"// one way to declare string
const repoCount= 50

console.log(name+ repoCount+ "Mishra")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName= new String('American');//2nd way to declare
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.substring(1,4))
const newstr="  ascd    "
console.log(newstr.trim())
const url="https://ashish.com/ashish%20Mishracom"
console.log(url.replace('%20','-'))
console.log(url.includes('new'))