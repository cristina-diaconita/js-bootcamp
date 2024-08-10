// ### 1. **Reverse a String**

// **Problem:**
// Write a function that takes a string as input and returns the string reversed.

// **Example:**

// ```jsx
// Input: "hello"
// Output: "olleh"

// ```

const solution = (word) => {
    let newArray = []
    for (let i = word.length - 1; i>=0; i--){
       
        newArray.push(word[i])
      
    }
    return newArray.join("")
}

console.log("solution: " + solution("hello"))