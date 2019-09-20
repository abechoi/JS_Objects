/*
	QUEUE
	1. push() - adds new element into a queue as the last element.
	2. pop()  - removes last element in a queue then returns it.
	3. unshift() - adds new element into a queue as the first element.
	4. shift()   - removes first element in a queue then returns it.
*/


let queue = [1,2,3,4,5];

alert("queue: " + JSON.stringify(queue));

// Push 6 as the last element.
queue.push(6);
alert("queue.push(6): " + JSON.stringify(queue));

// Pop 6 out.
queue.pop();
alert("queue.pop(): " + JSON.stringify(queue));

// Unshift 0 as the first element.
queue.unshift(0);
alert("queue.unshift(0): " + JSON.stringify(queue));

// Shift 0 out.
queue.shift();
alert("queue.shift(): " + JSON.stringify(queue));