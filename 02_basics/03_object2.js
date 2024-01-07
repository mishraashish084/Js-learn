//const tinderUser= new Object()
// Using direct assignment within the object declaration
const tinderUser = {
    id: "123abc",
    name: "Shame",
    isLoggedIn: false
  };
  
 // console.log(tinderUser);
  const regularUser={
    email:"some@agmail.com",
     fullName:{
        UseName: "Amit",
        lastName:"Mishra"

    }

  }
  //console.log(regularUser.fullName)
  const obj1={1: "a", 2: "b"}
  const obj2={3: "c", 4: "d"}
  //const obj3= Object.assign(obj1,obj2)
  const obj3= {...obj1, ... obj2}
 // console.log(obj3)
 const Users=[
    {
        id:1,
        email:"asfg@",
        name:"Ashish"
    },
    {
        id:2,
        email:"aman@",
        name:"Ashu"
    },
    {
        id:3,
        email:"as@",
        name:"Modi"
    },

 ]
 console.log(Users[1].email)
 console.log(tinderUser) 
 console.log(Object.values(Users[1]))