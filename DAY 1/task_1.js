////////////////// 1 //////////////////
var users = [
    { fName: 'John', lName: 'Doe' },
    { fName: 'Jane', lName: 'Doe' }
];

users.forEach(user => {
    console.log(user.fName, user.lName);
});


////////////////// 2 //////////////////
var users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 }
];

let total = 0;

users.forEach(user => {
    total = total + user.age;
});
console.log(total);


////////////////// 3 //////////////////
var user=[1,2,3]
var multi=user.map(user=>user *2);
console.log(multi);



////////////////// 4 //////////////////

var names = ['john', 'JANE', 'doe'];

var capital = names.map(name => name.toUpperCase());

console.log(capital); // Expected Output: ['JOHN', 'JANE', 'DOE']

////////////////// 5 //////////////////

var numbers = [1, 2, 3, 4, 5, 6];

var even = numbers.filter(number => number % 2 === 0);

console.log(even); // Expected Output: [2, 4, 6]


////////////////// 6 //////////////////

var users = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 23 }
];

var adultUsers = users.filter(user => user.age > 18);

console.log(adultUsers); 


////////////////// 7 //////////////////

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Expected Output: [1, 2, 3, 4, 5, 6]



////////////////// 8 //////////////////

var original = ['a', 'b', 'c'];

var copie = [...original];

console.log(copie); // Expected Output: ['a', 'b', 'c']
