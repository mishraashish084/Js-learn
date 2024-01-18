

let c=document.querySelector("#bulb")
let btn=document.querySelector("#btn1");
let flag=0;
 btn1.onclick=()=>{
    if(flag==0){
    bulb.style.backgroundColor="yellow";
    console.log("clicked");
    flag=1
 }
 else
 {
    bulb.style.backgroundColor="transparent";
    console.log("Again check");
    flag=0
 }

}