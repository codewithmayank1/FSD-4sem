// concurrency
// define concurency 
// concurrency is the ability of a system to run multiple tasks simultaneously
// callback means
// callback is a function that is passed as an argument to another function and is executed after the completion of that function

// function dosomething() {
//     callback ();
//     function sayHello() {
//         console.log("Hello World!");
//     }
//     function sayGoodbye() {
//         console.log("Goodbye World!");
//     }
// }

// function judge(grade) {
//     switch (true) { 
//         case grade == "A":
//             console.log("Excellent superb champ!");
//             break;
//         case grade == "B":
//             console.log("Good need to work hard!");
//             break;
//         case grade == "C":
//             console.log("Average so study instead of playing!");
//             break;
//         case grade == "D":
//             console.log("Poor so you need to fix your time table!");
//             break;
//         default:
//             console.log("Invalid grade!");
//             break;
//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }


// getGrade(85, judge); 

// setInterval(encourage, 500);
// function encourage (){
//     console.log("You can do it! Keep going!");
//     console.log("You are doing great! Keep it up!");
    
// }

//PROMISES
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is a way to handle asynchronous operations in JavaScript. It allows you to write cleaner and more readable code by avoiding callback hell.
// when resolve() is called, the promise is fulfilled and the value is passed to the then() method.
// when reject() is called, the promise is rejected and the error is passed to the catch() method.




//ASYNCHRONOUS OPERATON - Asynchronous operations in JavaScript are tasks that run in the background without blocking the main program flow
 
// let promise = new Promise(function (resolve, reject) {
//     let x = 10;
//     let y = 20;

//     if (x > y) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
// });

// promise
//     .then(function (value) {
//         console.log("Success:", value);
//     })
//     .catch(function (error) {
//         console.log("Error:", error);
//     });

// const promise = new Promise((resolve, reject) => {
//     resolve ("Success!");
//     // reject ("Error!");
// }
// );
// promise
//     .then((value) => {
//         console.log(value); // Success!
//  })
//     .catch((error) => {
//         console.log(error); // Error!
//     });
//     promise
//      .then((value) => {   
//          console.log(value); // Success!
//      })
//      .catch((error) => {
//          console.log(error); // Error!
//     });

//ASYNC/AWAIT
// Async/await is a way to write asynchronous code in a more synchronous style. It allows you to use the await keyword to wait for a promise to be resolved or rejected before moving on to the next line of code. This makes it easier to read and understand the code, especially when dealing with multiple asynchronous operations.
// Async/await is built on top of promises, so you still need to use promises to handle asynchronous operations. However, async/await makes it easier to work with promises by allowing you to write code that looks more like synchronous code.
// Await is used to wait for a promise to be resolved or rejected. It can only be used inside an Async function. When you use await, the code will pause until the promise is resolved or rejected, and then it will continue executing the rest of the code.
// Async keyword is used to define an asynchronous function. An asynchronous function always returns a promise, even if you don't explicitly return one. The await keyword is used to wait for a promise to be resolved or rejected before moving on to the next line of code. When you use await, the code will pause until the promise is resolved or rejected.
//CALLBACK
// A callback is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are often used in asynchronous programming to handle the result of an asynchronous operation. In JavaScript, callbacks are commonly used with functions like setTimeout, setInterval, and event listeners.
// Callbacks can be used to handle the result of an asynchronous operation, such as an API call or a database query. When the operation is complete, the callback function is called with the result of the operation. This allows you to write code that can handle the result of the operation without blocking the main program flow.

// function dosomething(callback) {
//     callback();
//  }
 
//  function sayHello() {
//      console.log("Hello");
//  }
 
//  function sayGoodbye() {
//      console.log("Goodbye");
//  }
 
//  dosomething(sayHello); 
//  dosomething(sayGoodbye);
 
// function saysomething(x) {
//     return  new Promise(resolve => {
//       setInterval  (() => {
//         resolve ("something"+ x);
//       }, 2000);
//     });
// }

// async function talk(x) {
//     const words = await saysomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

            
// function saysomething(x) {
//     return  new Promise(resolve => {
//       setInterval  (() => {
//         resolve ("something"+ x);
//       }, 2000);
//     });
// }

// async function talk(x) {
//     const words =  saysomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

// EVENT LOOP
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by using an event-driven, asynchronous programming model. 
// It is responsible for executing code, collecting and processing events, and executing queued sub-tasks.
//  The event loop continuously checks the call stack and the message queue, and if the call stack is empty, it will take the first message from the queue and push it onto the call stack, which will then execute it. 
// This allows JavaScript to handle multiple tasks concurrently without blocking the main thread.
// The event loop is a key part of the JavaScript runtime environment and is what makes JavaScript a single-threaded, non-blocking language.
//  It allows JavaScript to handle asynchronous operations, such as network requests and timers, without blocking the main thread. 
// This makes it possible to build responsive and interactive web applications that can handle multiple tasks at once without freezing or slowing down the user interface.

// define THREAD
// A thread is a sequence of instructions that can be executed independently by a CPU.
//  In JavaScript, threads are used to perform tasks in the background without blocking the main thread.
// Dfference between thread and event loop
// The main difference between a thread and an event loop is that a thread is a separate execution context that can run concurrently with other threads, while an event loop is a single-threaded mechanism that handles asynchronous operations in a non-blocking way.

//CALL STACK AND CALL BACK QUEUE
// The call stack is a data structure that keeps track of the execution context of the JavaScript code.
//  It is used to manage function calls and returns.
//  When a function is called, it is pushed onto the call stack, and when it returns, it is popped off the call stack.
//  The call stack is a LIFO (Last In First Out) data structure, which means that the last function that was called will be the first one to return.
// callback queue is a data structure that holds messages or events that are waiting to be processed by the event loop.
//  It is used to manage asynchronous operations and events that are waiting to     


// console.log("HI THERE!");
// addEventListener(4,5);
// function add(x,y){
//     return x+y ; 
// }


// console.log("Hi there!");
// setTimeout(() => console.log("Sorry mai late hogya!"), 1000);
// function add(x,y){
//     return x+y ; 
// }

// jab tak call stack empty nahi hoga tab tak event loop wait karega
// jab call stack empty hoga tab event loop callback queue se message uthayega aur call stack me daal dega
// after every action the event loop will check the call stack for work first
// jab call stack empty hojayega 

// console.log("Hi there!");
// setTimeout(() => console.log("Sorry mai late hogya!"), 0);
 