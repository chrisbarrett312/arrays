let numbers = [1, 2, 3, 4, 5];
console.log("\nOriginal array:", numbers, "\n");

// pop(): Removes the last item from the array and returns it
let lastItem = numbers.pop();
console.log("Updated array:", numbers);
console.log("Popped item:", lastItem, "\n");

// push(): Adds an item to the array
console.log("Current array:", numbers);
numbers.push(5);
console.log("Updated array:", numbers, "\n");

// filter(): Creates a new array with only the elements from 'numbers' that satisfy the given condition.
const filteredNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Filtered numbers:", filteredNumbers, "\n");

// map(): Creates a new array by multiplying each element in 'numbers' by 2.
const multipliedNumbers = numbers.map((num) => num * 2);
console.log("Multiplied numbers:", multipliedNumbers, "\n");

// forEach(): Executes the provided function for each element in 'numbers', logging the current number.
numbers.forEach((num) => {
  console.log("Current number:", num);
});
console.log("");

// reduce(): Reduces the 'numbers' array to a single value by summing up all the elements.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum, "\n");

// some(): Checks if there is at least one even number in 'numbers'.
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log("Has even number:", hasEvenNumber, "\n");

// every(): Checks if all numbers in 'numbers' are greater than zero.
const allNumbersGreaterThanZero = numbers.every((num) => num > 0);
console.log("All numbers greater than zero:", allNumbersGreaterThanZero, "\n");

// find(): Finds the first number in 'numbers' that is greater than 3.
const foundNumber = numbers.find((num) => num > 3);
console.log("First number greater than 3:", foundNumber, "\n");

// sort(): Sorts the 'numbers' array in ascending order.
numbers = [2, 5, 3, 4, 1];
console.log("Unsorted array:", numbers);
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers, "\n");
