// ### 5. **Fibonacci Sequence**

// **Problem:**
// Write a function that returns the nth number in the Fibonacci sequence, where the sequence starts with 0 and 1.

// **Example:**
// Input: 5
// Output: 5

// Input: 10
// Output: 55

const solution = (number) => {
    let i = 1;
    let arr = [0, 1];
    while(number > i){
        arr[++i] = arr[i-1] + arr[i-2]
    }
    return arr[i]
}

console.log(solution(10))