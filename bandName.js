function bandNameGenerator(str) {
  if (str[0] != str[str.length - 1]) {
    console.log(`The ${str[0].toUpperCase()}${str.slice(1)}`);
  } else {
    console.log(str[0].toUpperCase() + str.slice(1) + str.slice(1));
  }
}


bandNameGenerator('sandles')
bandNameGenerator('knife')
bandNameGenerator('birch')
bandNameGenerator('tart')
bandNameGenerator('bed')
bandNameGenerator('janani')
bandNameGenerator('alaska')


