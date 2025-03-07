/**
 * Hoisting in JavaScript
 *
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
 *
 * Example of Variable Hoisting:
 */

console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

/**
 * Example of Function Hoisting:
 */

myFunction(); // Output: "Hello, World!"

function myFunction() {
    console.log("Hello, World!");
}

/**
 * Important Notes:
 * - Only the declarations are hoisted, not the initializations.
 * - Hoisting applies to both variables declared with var and function declarations.
 * - Variables declared with let and const are not hoisted in the same way and will result in a ReferenceError if accessed before declaration.
 */
