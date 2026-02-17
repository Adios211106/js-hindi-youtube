// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } ) // return value of forEach is always undefined because forEach is used for side effects and does not return a new array or any value. It simply executes the provided function once for each array element and does not accumulate results. If you want to create a new array based on the original, you should use the map method instead of forEach.

// console.log(values);

const nums = [1, 2, 3, 4, 5]

const Nums = nums.filter( (num) => num > 2 ) // filter method returns a new array containing only the elements that satisfy the provided condition. Here, it will return [3, 4, 5] because those are the elements in the nums array that are greater than 2.

const newNums = nums.filter( (num) => { // also can write () => () or () => value
    num > 2
})
console.log(newNums); // filter method returns a new array containing only the elements that satisfy the provided condition. Here, it will return an empty array because the callback function does not explicitly return a value due to {} scope, resulting in undefined for each element. Since undefined is treated as falsy, no elements will be included in the new array. To fix this, you should return the condition directly:

const newNumsCorrected = nums.filter( (num) => {
    return num > 2
})

// const newNums = []

// myNums.forEach( (num) => { // using forEach to do the same as above
//     if (num > 2) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);