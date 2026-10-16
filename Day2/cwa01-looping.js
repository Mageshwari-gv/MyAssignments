/* Assignment Details:  
Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
Assignment Requirements:  
 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode 
 2. Call that function from the javascript  
Hints to Solve:  
Use the modulo operator for odd number detection and a for loop to iterate values from 1 to 25 
Expected Outcome:  
Upon completion, you should be able to:  - Understand and implement looping statements using Javascript
 */ 

function printOddNumbers(){
    for (let i=0; i<=25; i++)
    {
        if (i%2 !=0)
            console.log(i)
    }        
}
printOddNumbers()

/* Result:
1
3
5
7
9
11
13
15
17
19
21
23
25 */