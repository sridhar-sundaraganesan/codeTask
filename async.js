// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!')
//   }, 1500)
// }


// setTimeout(() => {
//   console.log('Timer Done!!');
//   fetchData(text => console.log(text))
// }, 2000)

// console.log('Hello World');
// console.log('Sync way');








const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done')
    }, 1500)
  })
  return promise;
}


setTimeout(() => {
  console.log('Timer is done!!!');
  fetchData().then(text => console.log(text))
}, 2000)








console.log('Hello world');
console.log('Hi World');