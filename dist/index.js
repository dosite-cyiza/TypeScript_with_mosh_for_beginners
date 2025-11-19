"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function documents(document) {
    console.log(document);
}
console.log(documents("hello"));
let numbers = [];
numbers = ['a', 'b'];
numbers = [1, 2, 3];
console.log(numbers);
let results = numbers.forEach((n) => n.toFixed(2));
console.log(results);
let user = [1, "ella"];
user.push(1);
user.push(8);
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) > 2025)
        return income * 5;
    return income * 3;
}
console.log(calculateTax(50000000, 2020));
let employe = {
    id: 1,
    name: "cyiza",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employe);
let employee = {
    id: 1,
    name: "cyiza",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 8;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
let textbox = {
    drag: () => { },
    resize: () => { }
};
console.log(textbox);
let quantity = 50;
console.log(quantity);
let gender = 'Female';
console.log(gender);
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
console.log(greet(undefined));
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(3);
console.log(customer?.birthday?.getFullYear());
let consumers = [2];
console.log(consumers?.[0]);
let log = null;
log?.('a');
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(10, 5));
console.log(addNumber(3.5, 2.5));
function describeInput(par) {
    if (typeof par == "string") {
        return `You provided a string: ${par}`;
    }
    else {
        return `You provided a number: ${par}`;
    }
}
console.log(describeInput("hello"));
console.log(describeInput(4));
function introduceUser(user) {
    return `Hello my name is ${user.name}, I am ${user.age} years old, and my email is${user.email}`;
}
console.log(introduceUser({ name: "Alice", age: 28, email: "alice@example.com" }));
//# sourceMappingURL=index.js.map