const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Important note for fetch
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. 
// For fetch check vid "https://youtu.be/Rive84an6Lc?si=tl7ezHXyV2okz6hV"


// promise.all
// yes this is also available, kuch reading aap b kro.

// The key difference is how they handle rejections among the input promises. Promise.all() is "all or nothing" and fails immediately if any promise rejects, while Promise.allSettled() waits for all promises to complete (settle), regardless of whether they resolve or reject. 
//
// Promise.all()
// Promise.all() takes an iterable of promises and returns a single promise that: 
// Resolves with an array of all the fulfilled values if and only if all of the input promises are fulfilled. The order of values in the array corresponds to the order of promises in the input iterable.
// Rejects immediately with the reason of the first promise that rejects. The results of any other concurrently running promises are discarded, and the overall process stops. 

// Best Used When:
// All tasks are crucial for the overall operation to succeed (e.g., fetching multiple configuration files needed to render a page).
// You need a "fail-fast" mechanism.
// You are confident all promises will likely succeed. 

// Promise.allSettled()
// Promise.allSettled() takes an iterable of promises and returns a single promise that: 
// Always resolves when all input promises have settled (either fulfilled or rejected).
// The resolved value is an array of objects, each describing the outcome of a promise in the input order. Each object has a status string ('fulfilled' or 'rejected') and either a value (if fulfilled) or a reason (if rejected).
// It never rejects itself (unless there is an unexpected error in your code, like a syntax error in the callback). 

// Best Used When:
// You want to run multiple independent operations and need the final result of every promise, even if some fail (e.g., sending status updates to multiple logging endpoints).
// Partial success is acceptable, and failures shouldn't stop the entire process.
// You need to report the outcome (success or failure) of each individual promise. 