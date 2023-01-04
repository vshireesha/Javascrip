//person constrator
// function Person(name, age) {
//   this.name = "name";
//   this.age = age;
// }

// const shireesha = new Person("shireesha", 28);
// const obireedy = new Person("obireddy");
// console.log(shireesha.age);
// var today = new Date(); //date object
// var current_date = today.getDate();
// var current_month = today.getMonth() + 1; //Month starts from 0
// var current_year = today.getFullYear();

// alert(current_date + "/" + current_month + "/" + current_year);

// var today = new Date();
// var current_date = today.getDate();
// var current_month = today.getMonth() + 1;
// var current_year = today.getFullYear();

// alert(current_date + "/" + current_month + "/" + current_year);
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.new() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }
// //Get Full name
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// const john = new Person("john", "Doe", 8 / 12 / 1994);
// const obi = new Person("obi", "Reddy", "july 28 1989");
// console.log(obi);

// console.log(john.calculateAge());
// console.log(obi.getFullName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.greeting = function () {
//   return `Hello There ${this.firstName}${this.lastName}`;
// };
// const person1 = new Person("siri", "Reddy");

// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }
// // inherit the person protype method

// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype.constructor = Customer;

// const customer1 = new Customer("Tom", "smath", "7093221721", "Standard");

// console.log(customer1);

// // custmar greeting

// Customer.prototype.greeting = function () {
//   return `Hello There ${this.firstName}${this.lastName} Welcome to our Company`;
// };

// console.log(customer1.greeting());

class Person {
  constrator(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `hello this is ${this.firstName} ${this.lastName}`;
  }
}

const sirisha = new Person("sirisha", "ObiReddy");

sirisha.greeting();
console.log(sirisha);
