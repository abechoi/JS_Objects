/*
	OBJECTS

	Tasks:

	1. Create an object named user with 2 variables, name and surname.
		Name should be "John" and surname should be "Smith", change name 
		to "Pete", then remove the name property.

	2. Write the function isEmpty(obj) which returns true if the object
		is empty, false otherwise.

	3. Write a function to sum up all the properties of an object.

	4. Create a function multiplyNumeric( obj ) that multiples all numberic properties by 2.


// 1. Create an object named user...
let user = {};

user.name = "John";
user.surName = "Smith";
user.name = "Pete";
delete user.name;

// 2. Write the function isEmpty(obj)...
let obj = {
	name: "John",
};

function isEmpty( obj ){

	for( let key in obj ){
		return false;
	}
	return true;
}

alert( isEmpty(obj) );

// 3. Write a function to sum up all the properties of an object.
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function addSalaries( obj ){

	let sum = 0;

	for( let key in obj ){
		sum += obj[key];
	}
	alert( sum );
}

addSalaries( salaries );
*/

// 4. Create a function multiplyNumeric( obj )
let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

function multiplyNumeric( obj ){

	for( let key in obj ){
		if ( typeof obj[key] == 'number' ){ 
			obj[key] *= 2; 
		}
	}
	return obj;
}

multiplyNumeric( menu );



