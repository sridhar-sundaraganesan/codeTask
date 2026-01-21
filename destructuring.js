const person = {
  name: 'Janani Prabhuvasan',
  age: 28,
  phoneNumber: 7305835567
}

// const printName = (personData) => console.log(personData.name);

// printName(person)

const printName = ({ name, age }) => console.log(name, age);

printName(person)


const { name, age } = person

console.log(name, age);


const hobbies = ['Driving', 'Studying', 'Movies']

const [hobb1, hobb2] = hobbies;

console.log(hobb1, hobb2);