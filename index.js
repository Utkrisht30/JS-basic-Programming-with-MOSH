console.log('hello world');

// let name = "utkrisht";
// console.log(name);


// let firstName = 'Utkrisht';lastName='singh';
// console.log(firstName, lastName);

const interestRate=03;
//interestRate=1;

// for a const declared variable we cannot change the value
console.log(interestRate);


let name = 'Utkrisht'; //string literal
let age = '18'; //number literal
let isApproved = false; // boolean literal
let firstName = undefined;
let selectedColor= null;


//js is a dynamic language, this means the stuff can be changed during runtime
// all numbers are of type number

// declaring objects//

let person = {
    name: 'Utkrisht',
    age: 18 
}

console.log(person);

//Dot notation

person.name = 'John';
console.log(person.name);

//bracket notation
//bracket notation is useful when the user is selecting something in runtime
person['name']= 'Mary';
console.log(person.name);


//Arrays

let selectedColors = [ 'red', 'blue' ];
//the length of arrays in js is dynamic
selectedColors[2] = 'green';
//the objects also are dynamic, type independant
selectedColors[3] = 1;
console.log(selectedColors);

//Functions

function greet(name, _lastName)
{
    console.log('hello '  + name + ' ' + _lastName);

}

greet('John', 'smith');
