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

const promise = new Promise((resolve, reject) => {
    resolve ("Success!");
    // reject ("Error!");
}
);
promise
    .then((value) => {
        console.log(value); // Success!
 })
    .catch((error) => {
        console.log(error); // Error!
    });