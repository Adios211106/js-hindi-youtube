// for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // here the callback function is anonymous and val(can be any name) is parameter which takes each element of array one by one due to forEach applied on coding array
//     console.log(val); //
// } )

// coding.forEach( (item) => { // using anonymous arrow function
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // also can write the function inside forEach directly
// In the above we are referencing the function printMe without parentheses because we are passing the function itself as a parameter, not calling or executing it immediately.

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr); // prints element, index and whole array for each iteration
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )