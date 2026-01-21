function add(num1, num2) {
  const split1 = num1.toString().split('');
  const split2 = num2.toString().split('');

  let res = [];

  for (let j = split2.length; j >= 0; j--) {
    res.push(Number(split1[j]) + Number(split2[j]))
  }


  let ans = res.join('').replace('NaN', '').split('')


  const lastElement = ans.slice(-1)
  // console.log(lastElement);

  const final = `${ans.pop()}${ans}`.split(' ').join('')
  return Number(final.replaceAll(',', ''))

}


console.log(add(16, 18))
console.log(add(4999, 4999))


console.log('Splitting the array')