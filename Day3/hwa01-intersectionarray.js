/**
 * Returns the intersection of two arrays of numbers,
 * with no duplicate elements in the result.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} Elements present in both arrays, each appearing once.
 */
function intersection(arr1, arr2) {
  const result = [];

  // Loop through each element of arr1
  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];

    // Keep it only if it's in arr2 AND not already in the result
    if (arr2.includes(current) && !result.includes(current)) {
      result.push(current);
    }
  }

  return result;
}

// ---------- Example calls ----------

// 1. Typical case: some elements in common
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]

// 2. No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));
// Output: []

// 3. All elements common
console.log(intersection([1, 2, 3], [3, 2, 1]));
// Output: [1, 2, 3]

// 4. Duplicates in the inputs (result must not repeat values)
console.log(intersection([1, 2, 2, 3, 3, 3], [2, 3, 3, 4]));
// Output: [2, 3]

// 5. Edge case: one empty array
console.log(intersection([], [1, 2, 3]));
// Output: []

// 6. Edge case: negative numbers and zero
console.log(intersection([-1, 0, 5, 7], [0, 7, -1, 9]));
// Output: [-1, 0, 7]