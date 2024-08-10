// ### 4. **Sum of All Numbers in an Array**

// **Problem:**
// Write a function that calculates the sum of all numbers in an array.

// **Example:**
// Input: [1, 2, 3, 4, 5]
// Output: 15


// Input: [10, 20, 30]
// Output: 60

const solution = (arr) => {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i]
    }
    return sum

}

const sumArr = [1, 2, 3, 10]

console.log("Total number:", solution(sumArr))