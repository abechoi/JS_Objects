/**
 *  PROFILE LOOKUP
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

    for( var i = 0; i < contacts.length; ++i ){
        
        // Match the firstname property of an object to name argument.
        if( contacts[i].firstName === name ){
            // Check the object properties for the prop argument.
            if( contacts[i].hasOwnProperty(prop) ){
                // Return the property if it exists
                return contacts[i][prop];
            }
            else{
                // If not, return this:
                return "No such property";
            }

        }
    }
    // If the contact has not been found in the for loop, return this:
    return "No such contact";

}


console.log( lookUpProfile("Akira", "likes") );