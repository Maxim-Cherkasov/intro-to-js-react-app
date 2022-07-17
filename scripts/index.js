import '../node_modules/jquery/dist/jquery.js';
/*
We initially stored a reference to this section in 
a variable and then accessed its
property using the variable.
This is particularly useful when we have multiple properties
to alter. Hence, it is always a good programming practice to store references
in variables if you are going to need it multiple times.
*/
var ResultContainer = document.getElementById("ResultContainer");
ResultContainer.innerHTML = "Setting up the environment!";

// Here we use a function declaration while the
// omitting a name of a function is allowed for Function Expressions.

// Rest parameter

// Rest parameter helps us club (обьединить) multiple function input parameters
// into a single array

/*
function sum(...inputs) {
   var result = 0;
   for(let i of inputs) {
      result += i;
   }
   return result;
}
ResultContainer.innerHTML = sum(5, 10, 5, 5);
*/

/*
function sum(input1, input2, ...remainingInputs) {
   var result = input1 + input2;
   for(let i of remainingInputs) {
      result += i;
   }
   return result;
}
ResultContainer.innerHTML = sum(10, 5, 5, 5);
*/

// Destructuring and Spread sintax

/*
helps us destructure an input array
into multiple variables
*/

/*
let fruits = ['Apple', 'Watermelon', 'Grapes'];

let [fruit1, ,fruit2] = fruits;

ResultContainer.innerHTML = fruit2;
*/

/*
let fruits = ['Apple', 'Watermelon', 'Grapes',
   'Guava'];

let [fruit, ...OtherFruits] = fruits;

ResultContainer.innerHTML = OtherFruits;
*/

/*
The preceding piece of code will give you “Watermelon, Grapes, Guava” as output
because the rest parameter syntax will assign all the remaining array elements to the
“OtherFruits” variable
*/

// Objects can be destructured in a similar way with arrays 

/*
let fruits = {fruit1: 'Apple', fruit2: 'Watermelon'}
let {fruit1, fruit2} = fruits;
ResultContainer.innerHTML = fruit1;
*/

// Destructuring in functions

/*
Instead of collecting input parameters and clubbing it into an array, it
will destructure the array of input parameters and assign the values to the variables
mentioned in the function declaration
*/

/*
function sum(a, b, c) {
   return a + b + c;
}

let input = [5,9,6];
ResultContainer.innerHTML = sum(...input);
*/

// Control loops

/*
for (let i=0; i<8; i++) {
   if (i==1) {
      continue; //considered true and skip 1
   }
   console.log("i:" + i);
   if (i==4) {
      break; //considered true and stop on 4
   }
}
*/
// output is i=0, i=2, i=3, i=4

// forEach
// basic syntax

/*
   ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) =>{
   ResultContainer.innerHTML = `${item} is at index ${index} in ${array}`
   })
*/

// ES6 syntax

/*
   let fruits = ['Apple', 'Grapes', 'Watermelon'];
   fruits.forEach((fruit, index, array) => {
   console.log(index + ':' + fruit + array);
   })
*/

// While 
// While the condition is truthy, the code from the loop body is executed.

// while basic syntax

/*
   let i = 3;
   while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
   alert( i );
   i--;
   }
*/

/*
   let fruits = ['Apple', 'Grapes', 'Watermelon'];
   let i = 0;
   while (i < fruits.length) {
   console.log(i + ': ' + fruits[i]);
   i++;
   }
*/

// Do...while
// The loop will first execute the body, then check the condition,
// and, while it’s truthy, execute it again and again
// should only be used when you want the body of the loop
// to execute at least once regardless of the condition being truthy

/*
   let i = 0;
   do {
   alert( i );
   i++;
   } while (i < 3);
*/

/*
   let fruits = ['Apple', 'Grapes', 'Watermelon'];
   let i = 0;
   do {
   console.log(i + ': ' + fruits[i]);
   i++;
   } while (i < fruits.length);
*/

// Type Conversion

/*
let input = [5, 9, 6];
console.log("Type Of [5, 6, 9]: " + typeof(input));
console.log("Type of [5, 9, 6]: " + typeof(input.toString()));
console.log("Type of '2': " + typeof((2)));
console.log("'True' to Number: " + Number(true));
console.log("'Hi' to Boolean: " + Boolean('hi'));
console.log("'NaN' to Number: " + Boolean(NaN));
console.log("'' to Boolean: " + Boolean(''));
console.log("'0' to Boolean: " + Boolean('0'));
*/

// Operators

/*
Assignment Operators

Assignment operators are used to assign values to operands. “=” operator assigns the
value of right operand to the left operand, “+=” operator adds the value of right operand
to left operand and assigns it to left operand, “–=” operator subtracts the value of right
operand from left operand and assigns it to left operand, “∗=” operator multiplies the
value of both operands and assigns it to left operand, “/=” operator divides the value
of left operand to right operand and assigns it to left operand, and lastly, “%=” operand
calculates the modulus after dividing left operand by right operand and assigns it to left
operand.
*/

/*
(!=) - Inequality. It's a Comparison operator.
(!) - NOT. A Logical operator that is used to negate
the boolean value that is returned.
*/

/*
var a = 16;
var b = 17;

console.log('Arithmetic Operators');
console.log('16 + 2 = ' + (16 + 2));
console.log('17 % 2 = ' + (17 % 2)); //1

console.log('Comparison Operators');
console.log('1 == "1" ' + ('1' == 1));
console.log('1 === "1" ' + ('1' === 1));
console.log('1 != 2 ' + (1 != 2)); //true

console.log('Assignment Operators');
console.log('16 += 2 ' + (a += 2));
console.log(a); //18
console.log('17 %= 2 ' + (b %= 2));
console.log(b); //1

console.log('Logical Operators');
console.log('true || false: ' + (true || false));
*/

/*
In classical programming, the logical OR is meant
to manipulate boolean values only. If any of its
arguments are true, it returns true, otherwise it returns false.
*/

// Most of the time, OR || is used in an if statement
// to test if any of the given conditions is true.
// For example :

/*
let hour = 9;

if (hour < 10 || hour > 18) {
   alert( 'The office is closed.' );
}

//We can pass more conditions:

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
*/

/*
console.log(('true && false: ' + (true && false)));
console.log(typeof(true));
*/

/*
In classical programming, AND returns true if
   both operands are truthy and false otherwise:
*/

//console.log('!true: ' + (!true));

// Ternary Operator

/*
Ternary operator is made up of three parts: condition, body 1, and body 2. Condition
and body 1 are separated by “?” operator, whereas both the bodies are separated by “:”
operator. Body 1 will be executed if the condition is true, whereas body 2 will be executed
if the condition is false
*/

/*
The syntax is:
let result = condition*if-true* ? *return*value1 : value2*else*;
*/

/*
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
   accessAllowed = true;
} else {
   accessAllowed = false;

alert(accessAllowed);
*/

// Multiple '?'
/*
let age = prompt('age ?', 18);

let message = (age < 3) ? 'Hi, baby!' :
   (age < 18) ? 'Hello' :
   age < 100 ? 'Greetings' :
   'What an unusual age';

   alert(message);
*/

// FUNCTIONS
/*
function fun()
{
   console.log('Regular JS Function.');
}

let functionExpr = function() {
   console.log('Function Expression');
}

let arrFunction = () => {
   console.log('Arrow Function');
}

fun();
functionExpr();
arrFunction();
*/

// res

/*
var increment = (function () {
   var counter = 0;
   return function () {
      counter += 1;
      console.log(counter);
   }
})();

increment();
increment();
increment();

var count = counter;
console.log(count);
*/

/*
function makeCounter() {
   let count = 0;

   return function() {
      return count++;
   };
}

let counter = makeCounter();

alert(counter);
*/

/*
A variable is a property of a special internal object
associated with the currently executing block/function/script

Working with variables is actually working with
the properties of that object

A function is also a value, the difference is
that Function declaration is instantly fully initialized
unlike let, that is unusable till the declaration
*/

/*
function makeCounter() {
   let count = 0;

   return function() {
     return count++;
   };
 }

 let counter = makeCounter();
 console.log(counter());
 console.log(counter());
*/

// Arrays

// var fruits = ['Watermelon', 'Lemon', 'Apple'];

// We can also store other objects inside an array. For instance, consider the
// following example:

/*
var fruits = ['Watermelon', 'Grapes'];

fruits[2] = {
   "Apple1": "Red apple",
   "Apple2": "Green apple"
};
console.log(fruits);
*/


//var fruits = ['Watermelon', 'Grapes', 'Lemons'];
/*
console.log('Array: ' + fruits.toString());
console.log(fruits);
*/

// The items are sorted as strings by default.
/*
fruits.sort();
console.log("Sorted Array: " + fruits.toString());
*/

// forEach
/*
arr.forEach(function(item, index, array) {
  // ... do something with item
});
*/

/*
console.log('forEach:');
fruits.forEach(element => {
   console.log(element);
})
*/

// push
/*
fruits.push('Strawberry');
console.log('Push: ' + fruits.toString());
*/

// Pop -  removes the last value from the array.

/*
fruits.pop();
console.log('Pop: ' + fruits.toString());
*/

// Shift - removes the first value

/*
fruits.shift();
console.log('Shift: ' + fruits.toString());
*/

// Unshift - This method adds a new element to the array at
// the first index and shifts the remaining
// values by one index.

/*
fruits.unshift('Apple')
console.log('Unshift: ' + fruits.toString());
*/

// Array.isArray(arr)
//  – This method returns true if “arr”
// is an array.

// console.log('isArray? ' + Array.isArray(fruits));

// Concationation - 
//This method is used to concatenate two arrays:
// arr1 and arr2
/*
var moreFruits = ['Strawberry'];
fruits = fruits.concat(moreFruits);
console.log('Concatenate: ' + fruits.toString());
*/

/* The str.split(delim) method
splits the string into an array
by the given delimiter delim

Here, we split by a comma followed by space:
*/

/*
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
*/

/* The call arr.join(glue) does the reverse to split. It creates a string of arr
items joined by glue between them.
*/

/*
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
*/

// arr.splice

// The arr.splice method is a
// swiss army knife for arrays.
// It can do everything: insert, 
// remove and replace elements.

// arr.splice(start[, deleteCount, elem1, ..., elemN])

/*
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
*/

// fruits.splice(0, 0, 'Guava');
// console.log('Splice: ' + fruits.toString());

// Slice

// The syntax is:
// arr.slice([start], [end])

/*
var top3fruits = fruits.slice(1,2);
console.log('Slice: ' + top3fruits.toString());
*/

// Classes and Modules

/*
   classes help us create constructor functions

   to instantiate an object of the class, we use the new keyword.

   class Dog
   {
   }
   let dog = new Dog();
*/

/*
class Dog {
   constructor(id) { // adding some properties to our class
      this.id = id;
   }
}

let dog = new Dog(100); // object of the class
console.log(dog.id);

dog.id = 200;
console.log(dog.id);

dog.id = 300;
console.log(dog.id);
*/

// Inheritance

/*
class Animal {
   constructor(type) {
      this.type = type;
   }
   getType() {
      return this.type;
   }
}

class Dog extends Animal {
   constructor() {
      super('dog');
   }
}

let dog = new Dog();
console.log(dog.getType());
*/

// Modules

/*
import { Animal } from './modules/Animals.js';

let dog = new Animal('dog');
console.log(dog.getType());
*/

// Creating a Local Server

// DOM Modification

/*
var header = document.getElementsByTagName("h1");
var body = document.getElementById("ResultContainer");
var footer = document.getElementsByClassName("Footer");

console.log(header);
console.log(body);
console.log(footer);
*/

/*
var header = document.getElementsByTagName("h1");
header[0].textContent = "Header Text from JS";
header[0].setAttribute('isHeader', 'True');
header[0].style.border = '2px solid black';
console.log(header[0]);
*/

/*
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);
*/

// Error handling

/*
try {
   throw new Error('Custom Developer Error');
}
catch(e) {
   console.log('ERROR: ' + e.message);
}
*/

/*
try{
   var fruit = new Fruit();
  }
  catch(e){
   console.log('ERROR: ' + e.message);
  }
  console.log('rest of the code!');
*/

// HTTP Requests

/*
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
   if (request.readyState == 4 && request.status == 200) {
      console.log(request.response);
   }
}

request.open('GET', 'https://api.github.com/users/msthakkar121');
request.send();
*/

// jquery instead

/*
import '../node_modules/jquery/dist/jquery.js';

$.get("https://api.github.com/users/msthakkar121", data => console.log(data));
*/

// Promises

/*
let promise = new Promise(function(resolve, reject) {
   setTimeout(resolve, 100, 'Resolved');
   //setTimeout(reject, 100, 'Rejected');
});

promise.then (
   value => console.log('Success: ' + value),
   error => console.log('Error: ' + error)
);
*/

/*
//$.get("https://api.github.com/users/msthakkar121", data => console.log(data));
//The preceding piece of code can be rewritten using promise as follows:

let promise = $.get("https://api.github.com/users/msthakkar100");

promise.then(
   data => console.log(data),
   error => console.log(error)
  );
*/

// Immutability

/*
Immutability is the property of an object,
due to which you cannot change its value
once it is defined. In order to modify
the value of such objects, you have to create a new
object and assign it to the same name.
*/

/*
const root = ReactDOM.createRoot(
   document.getElementById('root')
 );

 function tick() {
   const element = (
     <div>
       <h1>Hello, world!</h1>
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
     </div>
   );
   root.render(element);
 }

 setInterval(tick, 1000);
*/


// Purity
// A pure function
// never modifies the values of input parameters.

// No matter how many times you call the next function,
// it will always return the sum of parameters. 
/*
function add(a, b) {
   return a + b;
}
*/

// Impure function:

// The output of the preceding function depends
// on time and, hence, will be different
// every time you invoke it.

// Sometimes, you might want to get some inputs from the outside world or
// make some changes to the external environment. In such cases, we use impure functions.
// In React, a component is referred to as a pure component if its output depends only
// on its props (function inputs). If the state of the component is involved in computing its
// output, the component is said to be impure.

/*
function GetTodayDate() {
   const date = new Date();
   return date;
}
*/








