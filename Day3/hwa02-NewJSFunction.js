// ---------- Task 1: Function Declaration ----------
function userProfile(name) {
  console.log(`Hello, ${name}!`);
}

userProfile("Alice");
// Output: Hello, Alice!


// ---------- Task 2: Arrow Function ----------
const double = (num) => num * 2;

console.log(double(5));
// Output: 10


// ---------- Task 3: Anonymous Function ----------
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);
// Output (after 2 seconds): This message is delayed by 2 seconds


// ---------- Task 4: Callback Function ----------
function getUserData(callback) {
  // Simulate fetching data with a 3-second delay
  setTimeout(function () {
    callback("Call Back Function");
  }, 3000);
}

getUserData(function (message) {
  console.log(message);
});
// Output (after 3 seconds): Call Back Function

