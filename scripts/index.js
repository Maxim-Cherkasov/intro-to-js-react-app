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

//Destructuring and Spread sintax
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
function sum(a, b, c) {
   return a + b + c;
}

let input = [5,9,6];
ResultContainer.innerHTML = sum(...input);
*/

//Control loops
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
//output is i=0, i=2, i=3, i=4
*/
//forEach
//Basic syntax
/*
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) =>{
   ResultContainer.innerHTML = `${item} is at index ${index} in ${array}`
})
*/

//ES6
/*
let fruits = ['Apple', 'Grapes', 'Watermelon'];
fruits.forEach((fruit, index, array) => {
   console.log(index + ':' + fruit + array);
})
*/

//While 
/*
let fruits = ['Apple', 'Grapes', 'Watermelon'];
let i = 0;
while (i < fruits.length) {
   console.log(i + ': ' + fruits[i]);
   i++;
}
*/

//Do...while
/*
let fruits = ['Apple', 'Grapes', 'Watermelon'];
let i = 0;
do{
 console.log(i + ': ' + fruits[i]);
 i++;
}while (i < fruits.length);
*/
/*
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
*/
/*
The loop will first execute the body,
then check the condition, and, while it’s truthy,
 execute it again and again.

This form of syntax should only be used
when you want the body of the loop to execute at least once regardless of the condition being truthy.
Usually, the other form is preferred: while(…) {…}.
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

// Ternary Operator

/*
Ternary operator is made up of three parts: condition, body 1, and body 2. Condition
and body 1 are separated by “?” operator, whereas both the bodies are separated by “:”
operator. Body 1 will be executed if the condition is true, whereas body 2 will be executed
if the condition is false
*/

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
console.log(('true && false: ' + (true && false)));
console.log(typeof(true));
/*
In classical programming, AND returns true if
   both operands are truthy and false otherwise:
*/




















