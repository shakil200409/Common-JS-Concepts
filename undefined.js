// 1.Undefined type 1
let a;
// console.log(a);

// 2. undefined type 2
function sum(a, b) {
  const total = a + b;
}

const result = sum(5, 2);
// console.log(result);

// Undefined type 3
function multiply(a, b, c) {
  const mult = a * b * c;
  console.log(a, b, c, mult);
}

// multiply(2,5)

// Undefined type 4
function add(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a+b;
}

// console.log(add(2,6));


/* Undefined type 5*/
const person = {id: 1, name: 'Kodom Ali', age: 40};
// console.log(person.age, person.salary);


/* Undefined type 6 */
const numbers = [1,5,6,8,24];

/* Undefined type 7 */
//You shouldn't use delete to remove an item from an array, use splice instead
/*delete numbers[1];
console.log(numbers);

// console.log(numbers[1], numbers[2], numbers[6]);


/* Undefined type 8 */
const name = undefined;

// console.log(name);


/**
 * When you need to keep an variable(const) which has not set any value, use null instead of undefined
 */

const khali = null;
console.log(khali);