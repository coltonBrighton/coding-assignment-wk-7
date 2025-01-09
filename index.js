// ----------------------------
// | Coding assignment week 7 |
// ----------------------------

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
/* Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let ageMinus = ages[ages.length - 1] - ages[0];
console.log("Subtracted age:", ageMinus);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(57);
console.log("Ages after pushing new value:", ages);
let ageMinusAfterPush = ages[ages.length - 1] - ages[0];
console.log("Subtracted age: ", ageMinusAfterPush);

// Use a loop to iterate through the array and calculate the average age. Print result to console
let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumAges += ages[i];
}
let average = sumAges / ages.length;
console.log("Average ages:", average);

/* Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
*/
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalLetters = 0;
for (let name of names) {
  totalLetters += name.length;
}
let averageLength = totalLetters / names.length;
console.log("Average name length: ", averageLength);
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let namesConcat = " ";
for (let name of names) {
  namesConcat += name + " ";
  console.log("Concatenated Names:", namesConcat);
}

// 3. How do you access the last element of any array?
console.log("Last ages array element:", ages[ages.length - 1]);

// 4. How do you access the first element of any array?
console.log("First ages array element:", ages[0]);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
// and add the length of each name to the nameLengths array.
// For example:
//     let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//     let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];
for (let name of names) {
  nameLengths.push(name.length);
  console.log("Length of names in names array:", nameLengths);
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let lengthSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  lengthSum += nameLengths[i];
  console.log("Sum of elements in nameLengths array: ", lengthSum);
}

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
// to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
const concatenatedWord = (word, n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
};
console.log("Concatenated Word:", concatenatedWord("Hello", 3));

/* 8. Write a function that takes two parameters, firstName and lastName, and returns a full 
name. The full name  should be the first and the last name separated by a space. 
*/
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("My full name is:", fullName("Billy", "Bob"));

/* 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
 */
let nums1 = [100, 200, 300, 400];
let nums2 = [1, 2, 3, 4];
const numsSumArray = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result > 100) {
    return true;
  } else {
    return false;
  }
};
console.log(
  "The sum of number in the array is greater than 100:",
  numsSumArray(nums1)
);
console.log(
  "The sum of number in the array is greater than 100:",
  numsSumArray(nums2)
);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let avgArray = [20, 50, 73, 2, 4, 6];
const numsAvgArray = (array) => {
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  let average = arraySum / array.length;
  return average;
};
console.log("Average of elements in avgArray:", numsAvgArray(avgArray));

/* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
 */
let array1 = [200, 30, 500, 600, 796];
let array2 = [2, 3, 5, 6, 7];
const greaterAvg = (arr1, arr2) => {
  // average for arr1
  let arr1Sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1Sum += arr1[i];
  }
  let arr1Avg = arr1Sum / arr1.length;
  console.log("Array 1 average is:", arr1Avg); // test to ensure for loop averages array elements

  //average for arr2
  let arr2Sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    arr2Sum += arr2[i];
  }
  let arr2Avg = arr2Sum / arr2.length;
  console.log("Array 2 average is:", arr2Avg); // test to ensure for loop averages array elements

  // arr1Avg = numsAvgArray(arr1) | calls numsAvgArray function to calcluate averages would replace the 2 for loops used
  // arr2Avg = numsAvgArray(arr2) | calls numsAvgArray function to calcluate averages would replace the 2 for loops used

  if (arr1Avg > arr2Avg) {
    return true;
  } else {
    return false;
  }
};
console.log(
  "The first array average is greater than the second array average:",
  greaterAvg(array1, array2)
); // first test case
console.log(
  "The first array average is greater than the second array average:",
  greaterAvg(array2, array1)
); // second test case

/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 */
const willBuyDrink = (isHotOutside, moneyInPocket) => {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  }
  return false;
};
console.log("I will buy a drink:", willBuyDrink(true, 11)); // both true | returns true
console.log("I will buy a drink:", willBuyDrink(false, 11)); // first case false, second case true | returns false
console.log("I will buy a drink:", willBuyDrink(false, 9)); // both false | returns false
console.log("I will buy a drink:", willBuyDrink(true, 10)); // first case true, second case false | returns false

/* 13. Create a function of your own that solves a problem. In comments, 
write what the function does and why you created it.
*/
// Function to determine if it is the weekend or if animal litterboxes/backyard/cages are clean.
// I created it because I have 5 animals I care for. It is important they get cleaned on a strict schedule.

const animalCleaningDay = (isWeekend, isClean) => {
  while (isWeekend || isClean === false) {
    return true;
  }
  return false;
};
console.log(
  "I will clean up after the animals today",
  animalCleaningDay(false, false)
); // check if both paramaters are false | returns true
console.log(
  "I will clean up after the animals today",
  animalCleaningDay(true, true)
); // check if both parameters are true | returns true
console.log(
  "I will clean up after the animals today",
  animalCleaningDay(false, true)
); // check first parameter is false second parameter is true | returns false
console.log(
  "I will clean up after the animals today",
  animalCleaningDay(true, false)
); // check first false and second parameter is true | returns true
