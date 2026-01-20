// function wordValue(words) {
//   return words
//     .split('')
//     .map(char => char.charCodeAt(0) - 96)
//     .reduce((sum, val) => sum + val, 0)
// }
// console.log(wordValue('love'));



const str = 'love'

const vowels = ['a', 'e', 'i', 'o', 'u']

if (str.split('').includes(vowels)) {
  console.log('hi');
}


function constants(words) {

  const vowels = ['a', 'e', 'i', 'o', 'u']

  return words
    .split('')
    .map(char => {
      if (vowels.includes(char)) {
        return 0
      } else {
        return char.charCodeAt(0) - 96
      }
    })
    .reduce((sum, val) => sum + val, 0)
}


console.log(constants('love'));