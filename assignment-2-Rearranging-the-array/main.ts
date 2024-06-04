//Assignment no 2- Rearranging the array

// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC","I"]

let stringArray= scrambledArray.map(elements=>String(elements))
console.log("Converted arrays to string:",stringArray);

//using push
stringArray.push("extra")
console.log("After push:",stringArray); // ["student", "of", "true", "123", "am", "a", "GIAIC", "I", "extra"]

//using pop()
stringArray.pop()
console.log("After pop:",stringArray);// ["student", "of", "true", "123", "am", "a", "GIAIC", "I", 

//using unshift 
stringArray.unshift("one")
console.log("After unshift:",stringArray);  //["one", "of", "true", "123", "am", "a", "GIAIC", "I"]


//using shith()
stringArray.shift()
console.log("After shift:",stringArray);//[, "of", "true", "123", "am", "a", "GIAIC", "I"]

//using split on the third element 
let newArray=  stringArray[2].split("")
console.log("Character array of third element:",newArray); //["t", "r", "u", "e"]

//using join method to join array
let joinArray= stringArray.join(" ")
console.log("Joined array into a string",joinArray); // "first of true 123 am a GIAIC I"


// o Split elements into character arrays (optional).
let splitElement = stringArray[3].split('')
console.log(splitElement);
let splitEleIntoChars= newArray.concat(splitElement)
console.log(splitEleIntoChars);

//Dersired order ; i am a student of GIAIC
const desiredOrder= ['I',"am",'a ','student','of','GIAIC']

//Create a temporary array to rearrange element

let tempArray:string[]=[]
//Rearrange elements in the desired order
 //Rearrange elements in the desired order
tempArray.push(stringArray[7]); // "I"
tempArray.push(stringArray[4]); // "am"
tempArray.push(stringArray[5]); // "a"
tempArray.push(stringArray[0]); // "student"
tempArray.push(stringArray[1]); // "of"
tempArray.push(stringArray[6]); // "GIAIC"

// Join the rearranged elements into a single string
let finalResult = tempArray.join(' ');
console.log("Final result:", finalResult);