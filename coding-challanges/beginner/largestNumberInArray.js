// ### 3. **Find the Largest Number in an Array**

// **Problem:**
// Write a function that finds the largest number in an array of numbers.

// **Example:**
// Input: [1, 2, 3, 4, 5]
// Output: 5

// Input: [10, 5, 100, 1]
// Output: 100


// declari si intiializezi o variabila
// iterezi peste arr
// verifici daca exista o valoare mai mare decat variabila ta
//          => daca da, actualizezi variabila cu nr gasit

const solution = (arr) => {
    let myVar = 0 
    for(let i = 0; i<= arr.length - 1; i ++){
        if(arr[i] > myVar){
            myVar = arr[i]
        }
    }
    return myVar
}

const arrTest = [1, 2, 40, 6, 7, 12]
console.log(solution(arrTest), "check number")