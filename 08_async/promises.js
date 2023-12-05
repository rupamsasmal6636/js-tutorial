// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise creation:
const promiseOne = new Promise(function (resolve, reject) {
    // Do any async task like: DB call, Network call, cryptography
    // so here we are just creating an async task manually by setTimeOut()
    setTimeout(() => {
        console.log('Asnyc task1 is completed');
        resolve(); // it's connecting resolve with .then()
    }, 2000);
})
// Promise consumption:
promiseOne.then(function () {
    console.log('promise1 resolved');
})

// we also can create a promise without storing it in any variable
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task2 is completed');
        resolve();
    }, 1000);
}).then(function () {
    console.log('promise2 resolved');
})

// we can pass value through resolve() to then()
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 3 is completed');
        resolve({ usename: "Rupam", id: 123 });
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user);
    console.log('promise3 resolved');
})

// now learn about error
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error = false;
        let error = true;
        if (!error) {
            let user = { name: "Rupam", email: "rupam@gmail.com", phone: 123456789 }; // suppose we are getting data from database
            resolve(user); // now passing user
        } else {
            reject("Error! Something went wrong.");
        }
    }, 1000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.name; // this return will go to next .then()
}).then((username) => {
    console.log(username);
}).catch((errorMessage) => { // this is to handle error/reject
    console.log(errorMessage);
}).finally(() => console.log("The promise is either resolved or rejected")) // either resolved or reject, it will be surely executed


// handling resolve/reject using async await:
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            let user = { name: "Rupam", skill: "JS" };
            resolve(user);
        } else {
            reject("Error! Something went wrong.");
        }
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    // if we don't use try-catch then we are not handling reject(), so it will through error. so it's must to use it using try-catch
}
consumePromiseFive() // need to call this function manually



// Practice: getting data from url
// 1. using async await: [old school]
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // note: fetch is also return promise
        const data = await response.json() // this will also take more time, so await is needed
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}
getAllUsers();


// 2. Using fetch .then() .catch(): 
fetch('https://api.github.com/users/rupamsasmal6636')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    
    
// Uploading JSON data:
const data = { username: "example" };
// 1. using async await
async function postJSON(data) {
    try {
        const response = await fetch("https://example.com/profile", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

postJSON(data);

// 2. using then() catch()
function postJSON2(data) {
    fetch("https://example.com/profile", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

postJSON2(data);
/* 
Why the fetch data is showing first at console??
There is separate queue called fetch-queue / micro-task-queue / priority-queue (VIP)

* working mechanism of fetch():

            response = fetch('something.com')
                       /  \
                      /    \
                     /      \
[Private: no access]/        \ [Web browser/node Api will handle and give]
Reserve space in memory       Network request
onFulfilled[]   <------|           /   \                                                       ________________
onRejection[]   <---|  |______working  Not working[request jachhei na]                        | Global Memory  |
   (data)           |_________________________|                                               |________________|
     \|/                                                                                              /|\
      |________________________________________________________________________________________________|

Note: Even Status 404 will go to onFulfilled memory/resolve because it atleast giving some response
*/
