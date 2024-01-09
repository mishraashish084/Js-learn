const user={
    username: "Ashish",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
   

}
// user.welcomeMessage()
// user.username="Amit"
// user.welcomeMessage()
// console.log(this)
function chai()
{
    let username="A"
    console.log(this.username)
}
console.log(chai())


const addTwo=(num1,num2)=> {
    return num1+num2
}
console.log(addTwo(3,4))

const add=(num1,num2)=> (num1+num2)
console.log(add(4,5))