const firstName = "Jacob";
const lastName = "Ladder";
const age = 48;
const str = "It always seems impossible until it's done";
const tags = "photos, design, restoration, digital";
let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Sham ";
val += "Tastic";

val = "Aye up, they call me " + firstName + " and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index of
val = firstName.indexOf("b");
val = lastName.lastIndexOf("d");

//Char at
val = firstName.charAt("4");

// Get last char
val = firstName.charAt(firstName.length - 1);

// Substrings
val = firstName.substring(2, 4);

// Slice
val = firstName.slice(2, 4);
val = firstName.slice(-4);

// Split
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("done", "won");

// Includes
val = str.includes("Its");
val = str.includes("It");

console.log(val);
