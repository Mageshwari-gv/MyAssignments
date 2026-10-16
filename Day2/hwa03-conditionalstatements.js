/* Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript 
 
Hints to Solve:  
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For 
`runTests`, use a `switch` statement to handle different `testType` values, including a default case. */


function launchBrowser(browserName)    {    
if (browserName==="Chrome"){
    console.log("Launching Chrome browser")
}
else {
    console.log("Launch " + browserName +" browser")
}
}
launchBrowser("Chrome") 


function runtests(testType)    {
switch (testType)
    {
        case ("Smoke"):
            console.log ("Smoketest")
            break
        case ("Sanity"):
            console.log("Sanity")
            break
        case ("Regression"):
            console.log("Regression")
            break
        default: 
            console.log ("Smoke")
    }
}
    let testType="Sanity"
runtests(testType) 


/* Result : 
Launching Chrome browser
Sanity */
