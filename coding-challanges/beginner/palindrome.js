// ### 2. **Check for Palindrome**

// **Problem:**
// Write a function that checks if a given string is a palindrome (reads the same backward as forward).

// **Example:**

// ```jsx
// Input: "racecar"
// Output: true

// Input: "hello"
// Output: false

// ```

const reverse = (reverseWord) => {
    let newArray = []
    for (let i = reverseWord.length - 1; i >= 0; i--) {

        newArray.push(reverseWord[i])

    }
    return newArray.join("")
}

const solution = (word) => {
   return word === reverse(word)
}
console.log("Palindrome", solution("racecar"))
