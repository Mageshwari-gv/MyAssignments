// ---------- Example 1: Length of the last word (split approach) ----------
function lengthOfLastWord(s) {
  // 1. Split the string into an array of words
  const words = s.split(" ");

  // 2. Find the last word in the array
  const lastWord = words[words.length - 1];

  // 3. Calculate the length of this word
  return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));
// Output: 5


// ---------- Example 2: Length of the last word (handles extra spaces) ----------
function lengthOfLastWordTrimmed(s) {
  // 1. Trim the string (removes leading and trailing spaces)
  const trimmed = s.trim();

  // 2. Split the string into words
  const words = trimmed.split(" ");

  // 3. Identify the last word
  const lastWord = words[words.length - 1];

  // 4 & 5. Calculate its length and return it
  return lastWord.length;
}

console.log(lengthOfLastWordTrimmed("   fly me to the moon  "));
// Output: 4


// ---------- Example 3: Anagram check ----------
function isAnagram(str1, str2) {
  // 1. Remove spaces and convert to the same case
  const clean1 = str1.replace(/\s/g, "").toLowerCase();
  const clean2 = str2.replace(/\s/g, "").toLowerCase();

  // 2. Sort the characters
  const sorted1 = clean1.split("").sort().join("");
  const sorted2 = clean2.split("").sort().join("");

  // 3 & 4. Compare the sorted strings and return the result
  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));
// Output: true

console.log(isAnagram("hello", "world"));
// Output: false