const JsUser= {
    name: "Ashish",
    age: 26,
    location: "Dublin",
    email: "mishraashishgmailcom",
    isLoggedIn: false

}
console.log(JsUser.name)
JsUser.age=34
console.log(JsUser["age"])
Object.freeze(JsUser)
console.log(JsUser.location)


JsUser.greeting = function () {
    console.log("Hello User");
    return "Greetings from JsUser.greeting!";
}

JsUser.greetingTwo = function () {
    console.log(`Hello 2nd User, ${this.email}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
