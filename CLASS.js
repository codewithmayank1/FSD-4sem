// WHat are classes in java script=>Blue pirnt or template for object creation
// Adbvantages
// 1. Code reusability
// 2. Easy to maintain
//oops features
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction
// 5. Data hiding
// Object is a collection of properties and methods(key and value pair)
// let dog={
//     dogname:"dog",
//     dogage:10,
//     dogcolor:"black",
//     dogbreed:"german shephard",
//     dogweight:10,
// }
// console.log(dog.dogname);
// console.log(dog.dogage);
// console.log(dog.dogcolor);
// console.log(dog.dogbreed);

// Constructor characteristics

// 1. Constructor name should be capitalized
// 2. Constructor should be called with new keyword
// 3. Constructor should be called with new keyword
// 4. Constructor should be called with new keyword
// This keyword
// Difference between this.prop and prop
// 1. this.prop is a property of the object and prop is a local variable

// class Classname{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;

//     }
// }
// let obj=new Classname("value1","value2");
// let obj2=new Classname("value3","value4");
// console.log(obj.prop1);
// console.log(obj.prop2);
// console.log(obj2.prop1);
// console.log(obj.prop1);
// console.log(obj.prop2);
// // console.log(obj.prop3); //undefined
// // // console.log(obj.prop4); //undefined
// function Dog(dogname,dogage,dogcolor,dogbreed,dogweight){
//     this.dogname=dogname;
//     this.dogage=dogage;
//     this.dogcolor=dogcolor;
//     this.dogbreed=dogbreed;
//     this.dogweight=dogweight;

// }
// let dog1=  new Dog("dog1",10,"black","german shephard",10);
// console.log(dog1.dogname);
// console.log(dog1.dogage);
// console.log(dog1.dogcolor);
// console.log(dog1.dogbreed);
// console.log(dog1.dogweight);
// this is used for object creation
// It  is convention to  start the classanme in capitalization
// class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let person1=new person("Nishkarsh","Pandey");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// console.log("Hello",person1.firstname,person1.lastname,"Nice to meet you");
// Methods orther than constructor

// Methods are the function in the class containing data and functions(methods)
// No need of function keyworrd in mtehods and can directly start with the name of the method
//Coinstruyctor is udes to initialize the object and methods are used to perform the operations on the object
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
//     compliment(){
//         console.log("You are doing great",this.firstname,this.lastname);
//     }
// }
// let person1=new Person("Mayank","Maurya");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// person1.greet();
// person1.compliment();

// class person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
//     }
// }

//PROPERTIES
//IT sometimes called as attributes or fields
//IT is used to store the data of the object
//IT is used to define the state of the object

// constructor(firstname,lastname){
//     if(firstname.startsWith("N")){
//         this.firstname=firstname;

// } else{
//         console.log("Firstname should start with N")
//     }
//     this.lastname=lastname;
// }

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname= firstname;
//         this.#lastname=lastname;

//     }
//     get firstname(){
//         return this.#firstname;

//     }
//     set firstname(firstname) {
//         this.#firstname=firstname;

//     }
//     get lastname(){
//         return this.#lastname
//     }
// }

//INHERITANCE
// it means reusability of code, matlb aisa code jo sari class me comon ho
// it is a concept that allows a class to inherit the properties and methods of another class
// it is used to create a new class from an existing class

// class vehicle{
//     constructor(brand,model,year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }
//     move(){
//         console.log("moving at",this.speed,"km/h");
//     }
//     accelerate(amount){
//         this.currentspeed+=amount;
//     }
// }

// class motorcycle extends vehicle {
//     constructor(color,currentspeed,fuel,maxspeed) {
//         super(color,maxspeed,currentspeed);
//         this.fuel=this.fuel;
//     }
//     dowheelie(){
//         console.log("driving on one wheel");
//     }
// }

// let motor  = new motorcycle("red",0,10,"gasoline");
// console.log(motor.color);
// motor.accelerate(20);
// motor.move();

// class person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
//   }
// }

//PROtotypes
// It is a property of the object which is used to add new properties and methods to the object
// It is used to add new properties and methods to the object without modifying the object itself

// class person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hello", this.firstname, this.lastname, "Nice to meet you");
//   }
// }

// person.prototype.introduce = function () {
//   console.log("Hi", this.firstname, "Nice to meet you");
// }
// let p=new person("Nishkarsh", "Pandey");

//MAPS
// It is a collection of key-value pairs
// It is used to store the data in the form of key-value pairs
//map is a pre defined clas

//create  a map
// const fruits = new MediaCapabilities([
//   ["apples" , 500],
//   ["bananas" , 1000],
//   ["oranges" , 2000],
//   ["grapes" , 3000],

// ])
// //set map values
// constfruits = new Map([
//   fruits.set("apples" , 500),
//   fruits.set("bananas" , 1000),
//   fruits.set("oranges" , 2000),
//   fruits.set("grapes" , 3000),
// ])

// the setb method can also be used to change existing map values
//the get() method gets the value of a key in a map
// it returns undefined if the key does not exist in the map
// it returns the value of the key if the key exists in the map

// typeof returns object;
// typeof fruits
// it returns object because maps are objects
// difference beteen objects and maps
// 1. Maps are iterable and objects are not iterable
// 2. Maps are ordered and objects are not ordered
// 3. Maps can have any type of key and objects can only have strings as keys
// 4. Maps are more efficient than objects
// 5. Maps are more flexible than objects

// javascript map methods
// fruits.size;
// it returns the size of the map
// fruits.delete("apples");
// it deletes the key-value pair from the map
// fruits.clear();
// it clears the map
// fruits.has("apples");
// it returns true if the key exists in the map and false if the key does not exist in the map
//list all entires in the map
// let text = "";
// fruits.forEach(function(value, key) {
//   text  += key + " " + value + "\n";
// })

//MAP.ENTRIES
// it returns an iterator object with the [key, value] pairs in the map
// let text  = "";
// for(const x of fruits.entries()) {
//   text += x + "\n";
// }
// //sum of all values
// let sum = 0;
// for (const x of fruits.values()) {
//   sum += x;
// }
//  File name: HelloWorld.java

// crseate a object
// const apples = {name : "apples"};
// const bananas   = {name : "bananas"};
// const oranges = {name : "oranges"};

// //create a map
// const fruits = new Map();
// //add new elements to the map
// fruits.set(apples, 500);
// fruits.set(bananas, 1000);

// fruits.set(oranges, 2000);

// //create an aarray of objects
// const fruitsArray = [
//   {name : "apples", quantity : 500},
//   {name : "bananas", quantity : 1000},
//   {name : "oranges", quantity : 2000}
//   {name : "grapes", quantity : 3000},

// ];

//JAVASCIPT DESTRUCTURING
// It is a syntax that allows us to extract values from arrays and objects and assign them to variables

//create an object

// const person = {
//     firstname: "Mayank",
//     lastname: "Maurya",
//     age: 20,    
// };
// //destructuring the object
// let{firstname,lastname,age}=person;
// console.log(firstname);
// console.log(lastname);
// console.log(age); //undefined

// //destructuring is not only used for objects but also for arrays

// //create an object
// const   person1 = {
//     firstname: "Mayank",
//     lastname: "Maurya",
//     age: 20,    
// };
// let{lastname:name}=person1;
// console.log(name); //Mayank


// //create a string
// let Name = "GurukulTheSchools"
// //destructuring
// let[a1,a2,a3,a4,a5]=Name;
// console.log(a1); //G
// console.log(a2); //u

//create an array
// const fruits = ["apples", "bananas", "oranges", "grapes"];
// let[fruit1,,,fruit2]=fruits;
//  console.log(fruit1,fruit2); //apples and grapes

//  const fruits = ["apples", "bananas", "oranges", "grapes"];
// let{[0]:fruit1, [1]:fruit2}=fruits;
//  console.log(fruit1,fruit2); //apples and grapes

 //create a rest property
// const numbers = [10,20,30,40,50,60,70];
//  const[a,b, ...rest] = numbers
//  console.log(a);
//  console.log(b);
//  console.log(rest);

 //create a map
//  const fruits = new Map([
//  ["apples", 500],
//  ["banana",100],
//  ["grapes",300]
// ]);

// let text = "";
// for(const[key,value]of fruits){
//     text += key + "is"+ value;
// }


// let firstname   =   "john";
// let lastname = "cartor";
// [firstname, lastname = lastname,firstname];

//  let x =5;
//  let z = Math.pow(x,2);


//javascript array includes

// const fruits = ["banana", "orange", "grapes", "mango"];
// console.log(fruits.includes("mango")); // true
// console.log(fruits.includes("banana", 3)); // false, because it starts searching from index 3
 
// console.log(fruits.includes("banana", -2)); // true, because it starts searching from index -2

// Trailing commas in arrays


//a trailing comma is a comma that comes after the last element in an array or object
// It is used to make the code more readable and easier to maintain

// const array = [
//     "one",
//     "two",  
//     "three",,  //not more than one comma
// ];
// console.log(array); // ["one", "two", "three"]
// console.log(array.length); 

//SPARSE ARRAY
// It is an array that has empty slots in it

// const sparsearray  = [1, 2, , 4, 5];
// console.log(sparsearray); // [1, 2, <1 empty item>, 4, 5]

// const person = {
//     firstname: "Mayank",
//     lastname: "Maurya",
//     age : 20,
// }
//  const {firstname,lastname,age} = person;
//  console.log(firstname); //Mayank

//  const person = {
//  firstname: "Mayank",
//     ,
//     age : 20,  //undefined or syntax error
// }

