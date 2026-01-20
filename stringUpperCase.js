function upperCase(s) {
  const res = s.toUpperCase().replaceAll(':', ' ').replaceAll(';', ' ').split(' ')

  let lastName = [];
  let firstName = []
  let finalResult = []
  for (let i = 0; i < res.length; i++) {
    if (i % 2 !== 0) {
      lastName.push(res[i])
    } else if (i % 2 == 0) {
      firstName.push(res[i])
    }
  }

  for (let i = 0; i < lastName.length; i++) {
    finalResult.push(`(${lastName[i]}, ${firstName[i]})`)
  }
  return finalResult.join('')
}


console.log(upperCase("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))



