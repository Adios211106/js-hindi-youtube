const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, In BigInt-> 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", "anything inside double or single quotes", [], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Also some stuff asked in interviews or in cp(competitive programming)
// false === 0 // true
// false == '' // true
// 0 == '' // true
// null == undefined // true
// null === undefined // false
// OR(||) operator : returns first truthy value or last falsy value
// AND(&&) operator : returns first falsy value or last truthy value
// eg for AND and OR
// const userName = "";
// const defaultName = "Guest";
// // Explanation:
// // userName ("") is falsy. The operator moves to the next operand.
// // defaultName ("Guest") is truthy.
// // The operation short-circuits and returns "Guest".
// const displayUserName = userName || defaultName;
// console.log(displayUserName); // Output: "Guest"

// const userAge = 25;
// const message = "User is old enough to vote.";
// // Explanation:
// // userAge (25) is truthy (non-zero). The operator moves to the next operand.
// // message ("User...") is truthy.
// // All values were truthy, so the operation returns the last truthy value: the message string.
// const statusMessage = userAge && message;
// console.log(statusMessage); // Output: "User is old enough to vote."

// const userAge = 25;
// const message = "User is old enough to vote.";
// // Explanation:
// // userAge (25) is truthy (non-zero). The operator moves to the next operand.
// // message ("User...") is truthy.
// // All values were truthy, so the operation returns the last truthy value: the message string.
// const statusMessage = userAge && message;
// console.log(statusMessage); // Output: "User is old enough to vote."



// Nullish Coalescing Operator (??): null undefined // performs a safe check only for null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")