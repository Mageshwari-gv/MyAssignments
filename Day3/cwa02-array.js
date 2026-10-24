const nums = [2, 4, 5, 2, 1, 2];
const k = 2;
function countOccurrences(nums, k) {
  let count = 0;                       // 1. Initialize count to 0

  for (let i = 0; i < nums.length; i++) {   // 2. Loop through the array
    if (nums[i] === k) {                    // 3. If the element equals k...
      count++;                              //    ...increment count
    }
  }

  return count;                        // 4. Return the count
}
console.log(countOccurrences(nums, k)); 