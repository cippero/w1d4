// 1
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
	return (`${name} is pretty cool.`);
}

// 2
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
	return num*num;
}

// 3
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (char) => {
	if (char[1] !== undefined){
		return "More than one letter";
	} else {
		return /[aeiou]/i.test(char);
	}
}

// 4
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (word1, word2) => {
	let lengArray = [word1.split('').length, word2.split('').length];
	return (lengArray);
}

// 5
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (strArray) => {
	myArray = [];
	for (let i = 0; i<strArray.length; i++){
		myArray.push(strArray[i].length);
	}
	return myArray;
}

// 6
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = (num1, num2, num3) => {
	let sortedArr = [num1, num2, num3].sort((a,b) =>{
		return a-b;
	});
	return sortedArr[sortedArr.length-1];
}

// 7
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (word) => {
	myVal = "";
	word.forEach((val) => {
		if (val.length > myVal.length){
			myVal = val;
		}
	})
	return myVal;
}

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// 8
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

const transmogrify = (num1, num2, num3) => {
	return Math.pow(num1*num2, num3);
}

// 9
// Project Euler problem #2

// Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
const fibonacci = (num) => {
	let numbers = [];
	let numsFibo = [];
	let evenNumbers = [];
	for(let i = 1; i<=num; i++){
		numbers.push(i);
		numsFibo.push(numbers.reduce((accumulator, currentVal) => {
			return accumulator + currentVal;
		}));
		if (i % 2 === 0){
 			evenNumbers.push(i);
 		}
	}
	let evenNumsSum = evenNumbers.reduce((accumulator, currentVal) => {
		return accumulator + currentVal;
	})
	console.log(`The Fibonnaci sequence of the numbers under ${num} is ${numsFibo}`);
	console.log(`The even numbers in the Fibonnaci sequence of the numbers under ${num} are ${evenNumbers}`);
	console.log(`The sum of the even numbers in the Fibonnaci sequence of the numbers under ${num} is ${evenNumsSum}`);
}
// Adjust the function to push the even numbered values into an array.

// Adjust the function to return the summed value of the array.

// Find the sum of the even numbered values that do not exceed four million.



//console.log(fibonacci(10));