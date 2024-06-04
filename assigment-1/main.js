//Assignment 1: Building Your Friend List
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
var people = {
    friends: []
};
var person1 = {
    firstName: "wajid",
    lastName: "Ali",
    id: 567
};
var person2 = {
    firstName: "sana",
    lastName: "junejo",
    id: 443
};
var person3 = {
    firstName: "Haider",
    lastName: "Ali",
};
people.friends.push(person1, person2, person3);
console.log("Peoples Objects:", people.friends);
