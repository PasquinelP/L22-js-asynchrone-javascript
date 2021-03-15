/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve(`${number} is smaller than 10`);
    } else if (number > 10) {
      reject(`${number} is greater than 10`);
    }
  });
};

testNum(6)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));

testNum(12)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));


  /*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (words.every((word) => {
      return typeof word === "string";
    })) {
      resolve(sortWords(words.map((word) => {
        return word.toUpperCase();
      })));
    } else {
      reject("Not all values have strings");
    }
  });
};


const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("Not all values are strings");
    }
  });
};


const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

makeAllCaps(arrayOfWords)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));

  makeAllCaps(complicatedArray)
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));

    