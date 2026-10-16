/* Assignment Details: 
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
differently when printed. 
Assignment Requirements: 
1. Declare a const name as browserVersion (global) 
2. Assign value as Chrome 
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then 
5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
6. Call that function from the javascript
Hints to Solve: - Use 'var' first as block variable and then convert that as 'let' - Confirm how it works 
Expected Outcome: 
Upon completion, you should be able to: - Understand the concepts of var, let and const and the hoisting principles
 */

const browserVersion="chrome"  //Declare a const name as browserVersion (global) & Assign value as Chrome 
function getBrowserVersion()   //Create a function by name getBrowserVersion
{
if(browserVersion==="chrome")  //Create if condition inside function to check if browser is chrome
{
var browserVersion="Firefox"    //Declare a local variable (browserVersion) using var
}    
console.log(browserVersion)     //and print that variable inside function (outside block) 
}
getBrowserVersion()             //Call that function from the javascript

/* Result :
undefined */

// ========================================================================================= 

const browserVersion="chrome"  //Declare a const name as browserVersion (global) & Assign value as Chrome 
function getBrowserVersion()   //Create a function by name getBrowserVersion
{
if(browserVersion==="chrome")  //Create if condition inside function to check if browser is chrome
{
let browserVersion="Firefox"    //Declare a local variable (browserVersion) using let
}    
console.log(browserVersion)     //and print that variable inside function (outside block) 
}
getBrowserVersion()             //Call that function from the javascript

// Result:  chrome
