/*
    FILTER() MAP() REDUCE()
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line

  // const squaredIntegers = arr.filter( num => num > 0 && num % parseInt(num) === 0).map( num => Math.pow(num,2));
  //    OR...

  arr = arr.filter( (num) => num > 0 && num % parseInt(num) == 0); // => returns element above zero and num divided by num should not have a remainder.
  arr = arr.map( (num) => Math.pow( num, 2) ); // => returns each element squared.
  arr = arr.reduce( myFunc ); // => returns the first element added by the rest.

  // change code above this line
  return arr;
};

function myFunc(total, num) {
    return total - num;
}

// test your code
console.log(squareList(realNumberArray));

// Map function example with a template literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);