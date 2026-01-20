// String Challenges


// Compress a string: "aaabbc" → "a3b2c1".


// // Write a function to reverse a string.

// function reverse(name) {
//   return name.split('').reverse().join('')
// }

// console.log(reverse('janani'));


// // Write a function to check if a string is a palindrome.
// function palindromeCheck(words) {
//   const split = words.toLowerCase().split('').reverse().join('')
//   return split === words.toLowerCase() ? `${words} is a Palindrome.` : `${words} is not a Palindrome.`
// }

// console.log(palindromeCheck('madam'))
// console.log(palindromeCheck('Madam'))
// console.log(palindromeCheck('malayalam'))
// console.log(palindromeCheck('janani'))

// Count the number of vowels in a string.

// function vowelCounter(words) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   let count = 0
//   for (let word of words.toLowerCase()) {
//     if (vowels.includes(word)) {
//       count++
//     }
//   }
//   return count;
// }
// console.log(vowelCounter('Ace'));
// console.log(vowelCounter('janani'));
// console.log(vowelCounter('aeroplane'));


//find the factorial of a number

// function factorial(num) {
//   let res = 1;
//   for (let i = 1; i <= num; i++) {
//     res *= i
//   }
//   return res;
// }
// console.log(factorial(5));
// console.log(factorial(6));


// // Reverse words in a sentence
// function reverseSentence(words) {
//   return words.split(' ').reverse().join(' ')
// }

// console.log(reverseSentence('I love Javascript'));



// //Sort array in ascending order

// function ascArr(arr) {
//   return arr.sort((a, b) => a - b)
// }

// console.log(ascArr([1, 3, 7, 2, 3, 6]));


// //Sort array in descneding order


// function desArr(arr) {
//   return arr.sort((a, b) => b - a)
// }

// console.log(desArr([3, 4, 1, 6, 8, 1, 5, 7]));


// //Ascengin order

// function arrOrder(arr) {
//   return arr.sort((a, b) => a.localeCompare(b))
// }

// console.log(arrOrder(['Janani', 'Sridhar', 'Arivasan']));


// //Descending order of strings

// function descArray(arr) {
//   return arr.sort((a, b) => b.localeCompare(a))
// }

// console.log(descArray(['Sundaraganesan', 'Arivasan', 'Janani', 'Sridhar']));


//