var user = {
    name: "ahmed",
    email: "ahmed@test.com",
    password: "test",
    phone: "010"
};

// method 1
// Object.keys()
// reterive keys of object

console.log("Object.keys()");

var keys = Object.keys(user);

console.log(user);

// method 2
// Object.entries()
// reterive key and value of object
console.log("Object.entries()");
console.log(Object.entries(user));

// method 3
// Object.assign()
// copy value of object to another object

console.log("Object.assign()");
var clonedUser = Object.assign({},user);

console.log(clonedUser);

// method 4
// Object.create()
// create new object

console.log("Object.create()");
createdObject = Object.create({
    name:"created",
    email:"test@test.com"
});

console.log(createdObject);


// method 5
// Object.getOwnPropertyNames()
// return object properties as array
console.log("Object.getOwnPropertyNames()");

console.log(Object.getOwnPropertyNames(user));

// method 6
// Object.hasOwn()
// check if object has specific property

console.log("Object.hasOwn()");

console.log(Object.hasOwn(user,"email"));


// method 7
// Object.is()
// check if two values are the same
console.log("Object.is()");


console.log(Object.is("foo", "bar")); // false
console.log(Object.is("25", "25")); // true


// method 8
// Object.freeze()
// make the object readOnly
console.log("Object.freeze()");


const obj = {
    prop: 50
};

Object.freeze(obj);

obj.prop = 33;

console.log(obj.prop); // Expected output: 50


// method 9
// Object.isExtensible()
// check if the object is Extensible or not

console.log("Object.isExtensible()");

const obj2 = {
    prop: 50
};

console.log(Object.isExtensible(obj2)); // true

Object.freeze(obj2);


console.log(Object.isExtensible(obj2)); // false

// method 10
// Object.values()
// get object values

console.log("Object.values()");

console.log(Object.values(user)); // false

