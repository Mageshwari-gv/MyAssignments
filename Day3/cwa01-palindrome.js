let str ='playwright'
let str1=str.split("")
let rev =""
for (let i=str1.length -1 ;i>=0 ; i--)
{
    rev = rev.concat(str1[i])
}
console.log ("Reversedstring is", rev)
if (str===rev)
{
    console.log('The given string is a palindrome');
}
else
{
    console.log ("The given string is not palindrome")
}


