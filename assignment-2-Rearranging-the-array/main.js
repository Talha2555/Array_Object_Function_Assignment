//Assignment no 2- Rearranging the array
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var stringArray = scrambledArray.map(function (elements) { return String(elements); });
console.log("Converted arrays to string:", stringArray);
//using push
stringArray.push("extra");
console.log("After push:", stringArray);
//using pop()
stringArray.pop();
console.log("After pop:", stringArray);
//using unshift 
stringArray.unshift("one");
console.log("After unshift:", stringArray);
//using shith()
stringArray.shift();
console.log("After shift:", stringArray);
//using split on the third element 
var newArray = stringArray[2].split("");
console.log("Character array of third element:", newArray);
//using join method to join array
var joinArray = stringArray.join(" ");
console.log("Joined array into a string", joinArray);
// o Split elements into character arrays (optional).
var splitElement = stringArray[3].split('');
console.log(splitElement);
var splitEleIntoChars = newArray.concat(splitElement);
console.log(splitEleIntoChars);
//Dersired order ; i am a student of GIAIC
var desiredOrder = ['I', "am", 'a ', 'student', 'of', 'GIAIC'];
//Create a temporary array to rearrange element
var tempArray = [];
//Rearrange elements in the desired order
//Rearrange elements in the desired order
tempArray.push(stringArray[7]); // "I"
tempArray.push(stringArray[4]); // "am"
tempArray.push(stringArray[5]); // "a"
tempArray.push(stringArray[0]); // "student"
tempArray.push(stringArray[1]); // "of"
tempArray.push(stringArray[6]); // "GIAIC"
// Join the rearranged elements into a single string
var finalResult = tempArray.join(' ');
console.log("Final result:", finalResult);
