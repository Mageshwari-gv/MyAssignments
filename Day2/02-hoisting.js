//Hoisting -> Its a simple mechanism where Javascript interpreter moves the variable and function declarations at the top of the code block

//Hoisting in var *******
//Variables declared with var are hoisted to the top of their function or global scope, but they are initialized as undefined

console.log(a)
var a=100
//Result : undefined 

//Hoisting in let *********
//Variables declared with let are hoisted, but they are not initialized.
//Accessing them before their declaration results in a ReferenceError.

console.log(b)
let b=100
/* Result:
console.log(b)
            ^

ReferenceError: Cannot access 'b' before initialization */

//Hoisting in const ***************
//Variables declared with const are hoisted, but they are not initialized.
//Accessing them before their declaration results in a ReferenceError

console.log(c)
const c=200
/* Result:
console.log(c)
            ^

ReferenceError: Cannot access 'c' before initialization */
