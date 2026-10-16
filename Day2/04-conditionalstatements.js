// **************If Statement *****************

let number =10
if (number >0)
    {
        console.log("The number is positive")
    }

    // Result : The number is positive

//********************If Else Statement **********

let age =17
if ( age>=18)
{
    console.log("You can vote")
}
else
{
    console.log(" You cannot vote")
}
// Result : You cannot vote 

// **************** if   else if  else (Multiple conditions )**********
// The first true conditions executes rest are skipped 

// Example : Grade System 
let score =85
if (score >=95)
{
    console.log("Grade A")
}
else if (score >=85)
    console.log("Grade B")
else if (score >=75)
    console.log ("Grade C")
else 
{
    console.log("Grade F")
}
 
// Result : Grade B

// *******************SWITCH Statements (Multiple Fixed Choices)********************
// It is used when you have multiple cases to compare with a single variable
// The break statement prevents execution from continuing to the next case

let day="Sunday"
switch(day){
    case "Monday":
        console.log("Start of the week")
    break
    case "Wednesday":
        console.log(" Mid week")
    break
    case "Sunday":
        console.log("Its PlayWright Training day")
        break
    default:
        console.log("Its like another day")
}
//Result : Its PlayWright Training day

