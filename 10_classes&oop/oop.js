const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this // implicit return for this is available, so not necessary to write
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) // if new wasn't used for both users, then userTwo would overwrite userOne when we log userOne
console.log(userOne.constructor); // gives reference to User function 
//console.log(userTwo);

// notes for new keyword (constru)
// 1. The new keyword creates a new object called instance.
// 2. It sets the prototype of the new object to the constructor function's prototype and calls the constructor function with the new object as its context (this). 
// 3. It binds the this keyword(the context) to the new object.
// 4. It returns the new object (unless the constructor returns a different object).

// also new cleans out the constructor function's scope when logged like when userOne is logged without new, userOne will not have access to the constructor's scope(which contains a lot of stuff, similar to console.log(this) done in browser's console)


// check about instanceOf on mdn 