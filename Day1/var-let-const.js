// Redeclaration in var 
// Variables declared with var can be redelcared within same scope without error

var x=10
var x=20   // allowed
console.log("The value of x is",x) // Result: The value of x is 20

//Reassignemnt in var 
// Variables declared with var can be reassigned to a new value at any time

var y=20
y=30   // allowed
console.log("The reassigned value of y is",y) // Result : The reassigned value of y is 30

// *************************************************************************************
// Behavior of let keyword 

//Redeclaration in let 
//Variables declared with let CANNOT BE REDECLARED with same scope.

let x=10
let x=20
console.log(x)
/* Result:
let x=10
    ^

SyntaxError: Identifier 'x' has already been declared */

//Reassignment in let 
//Variables declared with let can be reassigned new values 
 
let y=40
y=50
console.log(y)  // Result: 50

// **********************************************************************************

// Behaviour of const keyword 
// Redeclaration in const 
// Variables declared with const cannot be redeclared in the same scope 

const x=18
const x=20
console.log(x)  // Result: SyntaxError: Identifier 'x' has already been declared

// Reassignment in const 
//Variables declared with const cannot be reassigned after their initial assignment.

const y=30
y=40
console.log(y) 
/* Result: const y=30
      ^

SyntaxError: Identifier 'y' has already been declared */


