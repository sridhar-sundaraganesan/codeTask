// // console.log('Hello from nodejssss');


// const fs = require('fs')

// fs.writeFileSync('hellowwww.txt', 'Hello from nodejssss')



//Reqtire arrow function

// let name = 'Janani'
// let age = 22
// let hobby = 'Sports'

// const summarizeUser = (userName, userAge, userHobby) => {
//   return `Name is ${userName}, Age is ${userAge} and Hobby is ${userHobby}`
// }

// console.log(summarizeUser(name, age, hobby));




// const person = {
//   name: 'JANANI PRABHUVASAN',
//   age: 22,
//   hobby: true,
//   greetings: function () {
//     console.log('The username is ' + this.name);
//   }
// }



// person.greetings()



const hobbies = ['sports', 'cooking']

// for (let hobby of hobbies) {
//   console.log(hobby)
// }


console.log(hobbies.map(hobby => {
  return hobby.slice(0, 1)
}));

console.log(hobbies);