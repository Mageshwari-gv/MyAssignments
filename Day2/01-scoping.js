/* // Scoping in var *******************************************************************
/* var is function scoped, meaning it is accessible throughout the function where it is declared,even before its declaration due to hoisting 
However it is not blockscoped, so it can "leak" outside block statements like if or for. */

if (true)
{
    var z=50
}
console.log(z)   // accessible outside the block
// Result : 50

// Scoping in let *******************************************************************
// let is block-scoped, meaning it is only accessible within the block, statement, or expression where it is defined

if (true)
{
    let x=30
    console.log(x)   
}
console.log(x) 

/* Result:
30
ReferenceError: x is not defined */

//Scoping in const***********************************
//const is block-scoped, meaning it is only accessible within the block, statement, or expression where it is defined

if (true)
{
    const y=98
    console.log(y)   
}
console.log(y)

/* Result : 
98
ReferenceError: y is not defined */
