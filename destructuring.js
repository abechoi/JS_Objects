/*
        FREE CODE CAMP - ES6: Use Destructuring Assignment to Assign Variables from Objects
        Examples of destructuring assignments...
 */

 // Destructuring Assignment from an object
const AVG_TEMPERATURES = { today: 77.5,tomorrow: 79};

        function getTempOfTmrw(avgTemperatures) {
            "use strict";
            // change code below this line

            const { tomorrow: tempOfTomorrow } = avgTemperatures;
            // change code above this line
            return tempOfTomorrow;
        }

        console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


// Destructuring Assignment from a nested object
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