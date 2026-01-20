// //Spread and rest operator

// const hobbies = ['Sports', 'Cooking']

// // const copiedArray = hobbies.slice();
// // console.log(copiedArray);


// // const copiedArray = [hobbies]

// // console.log(copiedArray);

// const copiedArray = { ...hobbies }
// console.log(copiedArray);


// const person = {
//   firstName: 'Janani',
//   lastName: 'Prabhuvasan',
//   age: 22
// }

// const copiedPerson = { ...person }
// console.log(copiedPerson);


// //Rest operator

// const toArray = (...ar) => {
//   return ar
// }

// console.log(toArray(1, 2, 3, 4, 5));


// const add = (...arr) => arr.reduce((res, val) => res + val, 0)
// console.log(add(8, 3, 4, 5));