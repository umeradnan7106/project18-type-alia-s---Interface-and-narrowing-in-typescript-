"use strict";
function divide(a, b) {
    let ans = 0;
    ans = a / b;
    if (b == 0) {
        return null;
    }
    return ans;
}
console.log(divide(10, 0));
let a = divide(10, 6);
if (a == null) {
    console.log("Syntax Errror");
}
else {
    console.log(a);
}
// Narrowing in TypeScript (step04)
// union = undefined
let password;
password = "Umer";
console.log(password.toUpperCase());
password = 687;
console.log(password);
let number = Math.random() > 0.5 ? "umer" : 60; // ternary operator
if (typeof number === "number") {
    number.toFixed(3);
}
else {
    number.toUpperCase();
}
let person = {
    name: "malinga",
};
let wahidOrder = {
    food: "Biryani",
};
let tahaOrder = {
    food: "Biryani",
    drink: "ishting"
};
// stale object case
let wahidTable = wahidOrder; // can pass extra property  
// fresh object case 
let wahidTableFResh = {
    food: "Burger",
    // drink: "ishting"
};
let tahaTable = tahaOrder;
