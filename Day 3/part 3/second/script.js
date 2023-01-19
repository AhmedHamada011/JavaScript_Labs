users = ["ahmed","mohammed","samy","asmaa"];


// method 1
// concat
// concat two arrays

console.log("concat() method");
var newUsers = ["hassan","said"];

var totalUsers = users.concat(newUsers);
console.log(totalUsers);

// method 2
// indexOf
// get first index of given element

console.log("indexOf() method");
var userIndex = users.indexOf("asmaa");

console.log(userIndex);

// method 3
// join
// Joins all elements of an array into a string.

console.log("join() method");
usersString = users.join(", ");

console.log(usersString);

// method 4
// lastIndexOf
// get last index of given element
users = ["ahmed","mohammed","samy","asmaa", "ahmed"];

console.log("lastIndexOf() method");

userIndex = users.lastIndexOf("ahmed")
console.log(userIndex);


// method 5
// push
// add element at the end of the array

console.log("push() method");

users.push("samar");

console.log(users);


// method 6
// pop
// remove element from the end of the array

console.log("pop() method");

users.pop();

console.log(users);


// method 7
// shift
// remove first element from the array

console.log("shift() method");

users.shift();

console.log(users);


// method 8
// sort
// sort the array in place

console.log("sort() method");

users.sort();

console.log(users);


// method 9
// unshift
// add element to the front array 

console.log("unshift() method");

users.unshift("fares");

console.log(users);



// method 10
// reverse
// reverse the array in place

console.log("reverse() method");

users.reverse();

console.log(users);