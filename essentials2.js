//Smallest number in an array

function smallElement(arr) {
  return arr.sort((a, b) => a - b)[0]
}

console.log(smallElement([3, 6, 9, 2, 1]))
console.log(smallElement([63, 90, 900, 21, 11]))


//Largest number in an array

function largestElement(arr) {
  return [...arr].sort((a, b) => b - a)[0]
}

console.log(largestElement([12, 344, 54, 900, 2330]));


//Anagram
function anagram(str1, str2) {
  const split1 = str1.toLowerCase().split('').sort().join('')
  const split2 = str2.toLowerCase().split('').sort().join('')


  return split1 === split2 ? `Anagram` : `Not an anagram`

}

console.log(anagram('Listen', 'silEnt'));
console.log(anagram('Listen', 'silEst'));


//Sum of all elements

function sumElements(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumElements([1, 2, 3, 4, 5]));


//Average of all the elements from an array

function avg(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return (sum / arr.length)
}

console.log(avg([1, 2, 3, 4, 5]));
console.log(avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//Remove duplicates from an array

function removeDuplicate(arr) {
  return [...new Set(arr)]
}

console.log(removeDuplicate([1, 2, 3, 3, 4, 5]));


const arr = [1, 2, 3, 3, 4, 5, 5]
