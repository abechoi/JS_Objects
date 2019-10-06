/*
        DESTRUCTURING - Examples of destructuring assignments
        
        1. Destructuring assignments from an object
        2. Destructuring assignments from a nested object
        3. Destructuring assignments from arrays 
        4. Destructuring assignments with rest operators
 */

 // 1. Destructuring assignments from an object
const AVG_TEMPERATURES = { today: 77.5,tomorrow: 79};

        function getTempOfTmrw(avgTemperatures) {
            "use strict";
            // change code below this line

            const { tomorrow: tempOfTomorrow } = avgTemperatures;
            // change code above this line
            return tempOfTomorrow;
        }

        console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


// 2. Destructuring assignments from a nested object
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow: { max: maxOfTomorrow}} = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// 3. Destructuring assignments from arrays
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [ a, b ] = [ b, a ]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// 4. Destructuring assignments with rest operators
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];