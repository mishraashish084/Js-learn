const myArr=[1,2,4,6,7,8,9]
console.log(myArr[2]);
myArr.push(5)
myArr.unshift(0)
console.log(myArr.includes(0))
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof myArr)
console.log(typeof newArr)
console.log(myArr.splice(2, 2));
//let index = myArr.indexOf(7); // 4
//let doubledArr = myArr.map(function(element) {
  //  return element * 2;
 // });
  // doubledArr is now [2, 4, 8, 12, 14, 16, 18]
  console.log(Array.isArray("Ashish"))
  console.log(Array.from("Ashish"))
  console.log(Array.from({name: "simran"}))
