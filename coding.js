// 🔹 Challenge 1: Reverse Words in a Sentence
// Problem:
// Write a function that takes a sentence and
// reverses the order of the words, but not the characters

Example:

Input: "I love coding"

Output: "coding love I"


function reverseSentence(string) {
  const words = string.split(' ')
  console.log(words.length);
  let arr = []

  for (let i = words.length - 1; i >= 0; i--) {
    arr.push(words[i])
  }

  console.log(arr.join(' '));

}

// // reverseSentence('I love javascript and python')

// // // 🔹 Challenge 4: Palindrome Checker
// // // Problem:
// // // Write a function that checks if a string is a palindrome(
// // // reads the same forward and backward).Ignore spaces and capitalization.


// // // function palindromeChecker(str) {
// // //   const splitting = str.split('')
// // //   const reverseSplitting = str.split('').reverse()

// // //   if (splitting.join('') === reverseSplitting.join('')) {
// // //     console.log('Its a palindrome');
// // //   } else {
// // //     console.log('Its not a palindrome');
// // //   }
// // // }


// // function palindromeChecker(str) {
// //   const clean = str.toLowerCase().replace(/[^a-z]/g, '')
// //   return clean === clean.split('').reverse().join('') ? 'Palindrome' : 'Not a palindrome'
// // }

// // console.log(palindromeChecker('racecar'));
// // console.log(palindromeChecker('malayalam'));
// // console.log(palindromeChecker('rfeef'));

// // palindromeChecker('racecar')
// // palindromeChecker('malayalam')
// // palindromeChecker('racecarss')

// // //   Example:

// // // Input: "Racecar"

// // // Output: true

// // // 🔹 Challenge 5: FizzBuzz(Classic)
// // // Problem:
// // // Print numbers from 1 to 100.

// // // For multiples of 3, print "Fizz".

// // // For multiples of 5, print "Buzz".

// // // For multiples of both 3 and 5, print "FizzBuzz".


// // function fizzBuzz(num) {
// //   if (num % 3 == 0 && num % 5 == 0) {
// //     return 'FizzBuzz'
// //   } else if (num % 3 == 0) {
// //     return 'Fizz'
// //   } else if (num % 5 == 0) {
// //     return 'Buzz'
// //   } else {
// //     return `${num} can't be handled `
// //   }
// // }
// // console.log(fizzBuzz(30));
// // console.log(fizzBuzz(27));
// // console.log(fizzBuzz(91));




// Challenge 2: Find the First Non - Repeating Character
// Problem:
// Given a string, return the first character that does not repeat.If all characters repeat, return null.

//   Example:

// Input: "swiss"

// Output: "w"

// 🔹 Challenge 3: Two Sum
// Problem:
// Given an array of numbers and a target sum
// , return the indices of the two numbers that add up to the target.

//   Example:

// Input: [2, 7, 11, 15], target = 9

// Output: [0, 1](because 2 + 7 = 9)


function twoSum(arr, target) {
  let sum = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    res.push(i)
    if (sum == target) {
      return res
    }

  }
}

console.log(twoSum([2, 7, 10, 15], 19));




// function missingNumber(arr) {
//   let sort = arr.sort((a, b) => a - b);

//   let res = [];
//   for (let i = 0; i < sort.length; i++) {
//     if
//   }
// }

console.log(missingNumber([0, 1, 2, 4, 5]))
console.log(missingNumber([1, 2, 5, 3]))


// const arr1 = [1, 2, 5, 3]

// console.log(arr1.sort((a, b) => a - b))

















function anagram(str1, str2) {
  const num = str1.split('').map(char => char.charCodeAt(0) - 96).sort((a, b) => a - b)
  const num2 = str2.split('').map(char => char.charCodeAt(0) - 96).sort((a, b) => a - b)

  const res = arraysEquals(num, num2)
  if (res) {
    console.log('Anagram')
  } else {
    console.log('Not anagram');
  }
}

function arraysEquals(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])
}
anagram('hello', 'worlds')
anagram('listen', 'silent')

const str1 = 'listen'
const str2 = 'silent'

const num = str1.split('').map(char => char.charCodeAt(0) - 96).sort((a, b) => a - b)
const num3 = str2.split('').map(char => char.charCodeAt(0) - 96).sort((a, b) => a - b)

const sort = num.sort((a, b) => a - b)
const sort2 = num3.sort((a, b) => a - b)

console.log(sort);
console.log(sort2);


function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])
}

console.log(arraysEqual(sort, sort2));
arraysEqual(sort, sort2)