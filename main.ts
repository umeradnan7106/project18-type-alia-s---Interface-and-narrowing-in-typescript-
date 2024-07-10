

function divide(a:number, b:number){
    let ans = 0
    ans = a/b
    
    if (b==0){
        return null
    }
    return ans
}
console.log(divide(10,0))

let a = divide(10,6)
if(a == null){
    console.log("Syntax Errror")
}
else{ 
console.log(a)
}



// =================== Narrowing in TypeScript (step04) ===================

// union = undefined


let password:string | number;
password = "Umer";
console.log(password.toUpperCase())
password = 687;
console.log(password.toFixed(3))


let number = Math.random() > 0.5 ? "umer" : 60; // ternary operator

if(typeof number === "number"){
    number.toFixed(3);
}
else{
    number.toUpperCase();
}





// =========== difference between type alia's & Interface  (Step05) ===========

type Person = {
    name: string
}
interface iPerson {
    name: string
}

let person : iPerson ={
    name: "malinga",
}

// 2nd example

interface Deal1{
    food: string,
}
interface Deal2{
    food: string,
    drink: string,
}

let wahidOrder: Deal1 = {
    food: "Biryani",
}
let tahaOrder: Deal2 = {
    food: "Biryani",
    drink: "ishting"
}

// stale object case

let wahidTable: Deal1 = wahidOrder; // can pass extra properties  

// fresh object case 

let wahidTableFResh: Deal1 = {
    food: "Burger",
    // drink: "ishting",  // can't pass extra properties
}

// stale object case
let tahaTable: Deal2 = tahaOrder; // can pass extra properties

let tahaTableFresh: Deal2 = {
    food: "Burger",
    drink: "ishting",  // can't pass extra properties
}

