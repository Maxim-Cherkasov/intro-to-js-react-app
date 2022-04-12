var ResultContainer = document.getElementById("ResultContainer");
ResultContainer.innerHTML = "Setting up the environment!";

/*
We initially stored a reference to this section in 
a variable and then accessed its
property using the variable.
This is particularly useful when we have multiple properties
to alter. Hence, it is always a good programming practice to store references
in variables if you are going to need it multiple times.
*/

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

