//Longest word in sentence


function longWord(sentence) {
  const arr = sentence.split(' ')

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].length)
  }

  return res
}

console.log(longWord('Hi Janani Prabhuvasan'))
console.log(longWord('Hi Sridhar Sundaraganesan'))
console.log(longWord('twittersnapfacebook sundaraganesan'));
console.log(longWord('Hi uu'))





function duckDuckGoose(players, goose) {

  let res = [];
  for (let i = 1; i <= players.length; i++) {

  }

}


console.log(duckDuckGoose([a, b, c, d], 1))


