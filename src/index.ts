//Any
function documents (document: any):any{
    console.log(document);
}
console.log(documents("hello"))
// Array
let numbers = [];
numbers =['a','b']
numbers =[1,2,3]
console.log(numbers)
let results = numbers.forEach((n)=> n.toFixed(2))
console.log(results)
// tuple
let user : [number,string] = [1,"ella"]
user.push(1)
user.push(8)

console.log(user)

// Enum

const enum Size {Small=1,Medium,Large}
let mySize:Size = Size.Medium
console.log(mySize) //output is 2

/* When you tried to run this code it is going to throw error that says that (TypeScript is 
not supported in strip-only mode)*/

// Functions

function calculateTax (income:number,taxYear?:number):number{
    if((taxYear || 2022 )> 2025)
        return income*5
    return income *3
}
console.log(calculateTax(50000000,2020))

// Objects

let employe :{
    id:number,
   readonly name:string,
   retire:(date:Date) => void
}
= {
    id:1,
    name:"cyiza",
    retire:(date:Date)=>{
        console.log(date)
    }
}
console.log(employe)

// Type aliases
type Employee = {
    
    id:number,
    readonly name:string,
    retire:(date:Date) => void
}

let employee : Employee = {
    id:1,
    name:"cyiza",
    retire:(date:Date)=>{
        console.log(date)
    }
}
console.log(employee)

// Union Types

function kgToLbs(weight: number | string){
    // Narrowing (This is process that help to specify the type)

    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight)*8

}
console.log(kgToLbs(10))
console.log(kgToLbs('10'))

// Type intersection

type Draggable = {
    drag:() => void
}

type Resizable ={
    resize :() =>void
}

type UIWidget = Draggable & Resizable

let textbox : UIWidget ={
    drag: () =>{},
    resize: () => {}
}
console.log(textbox)

// Literal type

// literal (exact,spaecific)
type Quantity = 50 | 100
let quantity : Quantity = 50
console.log(quantity)


type Gender = 'Male' | 'Female'
let gender : Gender = 'Female'
console.log(gender)

//Nullable type

function greet (name:string | null | undefined){
    if (name)
    console.log(name.toUpperCase())
else
    console.log("Hola")
}
console.log(greet(undefined))

// Optional chaining

type Customer = {
    birthday?:Date
};

function getCustomer (id:number) :Customer | null | undefined {
    return id === 0? null : {birthday:new Date()}
}
let customer = getCustomer(3);
// if(customer !== null && customer !== undefined) /* in the easy way we can remove this if statement
                                                    //  then use this following way: 
 //Optional property access operator. 
console.log(customer?.birthday?.getFullYear()) // This (?.) is called optional property access operator.

// Optional element access operator (This is useful when you are working with arrays)
let consumers:number[] |null = [2]
// if(consumers !== null && consumers !== undefined)
console.log(consumers?.[0])

//Optional call

let log :any = null
log?.('a')

// Exercises

/*
**Question 1: Description:**

Create a function that takes two numbers as parameters and returns
 their sum. Ensure proper type annotations for parameters and return type.

 **Expected Behavior:**

- Input: `addNumbers(5, 10)`
- Output: `15`
- Input: `addNumbers(3.5, 2.5)`
- Output: `6`

*/

function addNumber(x:number, y:number):number{
    return x + y
}
console.log(addNumber(10,5))
console.log(addNumber(3.5,2.5))

/*
**Question 2: Description:**

Create a function that accepts either a string or a number as input 
and returns a message describing what type it received. Use union types to enforce this.
**Expected Behavior:**

- Input: `describeInput("hello")`
- Output: `"You provided a string: hello"`
- Input: `describeInput(42)`
- Output: `"You provided a number: 42"`

*/

function describeInput( par: number | string){
    if(typeof par == "string"){
        return `You provided a string: ${par}`
    }
    else{
        return `You provided a number: ${par}`
    }
}
console.log(describeInput("hello"))
console.log(describeInput(4))

/*
Create an interface called

```
User
```

with properties for name (string), age (number), and email (string). 
Then refactor the function below to add proper types for the parameters and return type

**Starter Code:**

```
// Define the User interface here

function introduceUser(user) {
  return `Hello, my name is ${user.name}, I am ${user.age} years old,
   and my email is ${user.email}`;
}

```

**Expected Behavior:**

- Input: `{ name: "Alice", age: 28, email: "alice@example.com" }`
- Output: `"Hello, my name is Alice, I am 28 years old, and my email is alice@example.com"`
*/

interface User{
    name:string,
    age:number,
    email:string
}
function introduceUser(user:User):string{
    return `Hello my name is ${user.name}, I am ${user.age} years old, and my email is${user.email}`
}
console.log(introduceUser({ name: "Alice", age: 28, email: "alice@example.com" }))

/* **Question 4: Description:**

Create an

```
enum
```

called

```
Status
```

with values for "Active", "Inactive", and "Pending". Write a function that accepts a Status and returns a descriptive message based on the status value.

**Starter Code:**

```tsx
// Define the Status enum here

function getStatusMessage(status) {
  // Your code here
}

```

**Expected Behavior:**

- Input: `getStatusMessage(Status.Active)`
- Output: `"The item is currently active"`
- Input: `getStatusMessage(Status.Pending)`
- Output: `"The item is pending review"` */

enum Status{Active="active",Inactive="inactive",Pending="Pending"}

function getStatusMessage(status:Status):string{
    return `The item is currently ${status}`
}
console.log(getStatusMessage(Status.Active))

/*
**Description:**

Create a generic function called

```
getFirstElement
```

that accepts an array of any type and returns the first element. The return type should match the input array's element type.

**Starter Code:**

```tsx
// Write a generic function that returns the first element of an array
function getFirstElement(arr) {
  //   ...
}

```

**Expected Behavior:**

- Input: `getFirstElement([1, 2, 3])`
- Output: `1`
- Input: `getFirstElement(["a", "b", "c"])`
- Output: `"a"`
- Input: `getFirstElement([{ id: 1 }, { id: 2 }])`
- Output: `{ id: 1 }`
 */

function getFirstElement <T>(arr:T[]):T | undefined{
    return arr[0]
}
console.log(getFirstElement([1,2,3]))
console.log(getFirstElement(["a", "b", "c"]))
console.log(getFirstElement([{ id: 1 }, { id: 2 }]))


/*
## Question 6: Intersection Types

**Description:**
Create two interfaces: `Employee` with properties `name` and 
`employeeId`, and `Manager` with property `teamSize`. Create 
an intersection type `ManagerEmployee`
 and write a function that describes a manager employee.

 // Define Employee interface
// Define Manager interface
// Define ManagerEmployee type

function describeManagerEmployee(me) {
  return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
**Expected Behavior:**

- Input: `{ name: "Bob", employeeId: 123, teamSize: 5 }`
- Output: `"Bob (ID: 123) manages a team of 5 people"`
 */

interface Employee2 {
    name: string,
    employeeId: number,

}
interface Manager{
    teamSize:number
}

type managerEmployee = Employee2 & Manager
function describeManagerEmployee(me:managerEmployee):string {
  return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }))

/*
## Question 7: Function Types

**Description:**
Create a type alias for a function that takes two numbers and returns a number. 
Use this type to create a function that applies a mathematical operation to two numbers.

**Starter Code:**

```tsx
// Define a missing TypeScript types

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

```

**Expected Behavior:**

- Input: `applyOperation(10, 5, add)`
- Output: `15`
- Input: `applyOperation(10, 5, multiply)`
Output: 50
 */

type mathematicalOperation = (a:number,b:number) => number 

function applyOperation(a:number,b:number,operation:mathematicalOperation){
    return operation(a,b)
}

const add =(x:number,y:number) =>x + y
const multiply=(x:number,y:number) =>x * y

console.log(applyOperation(3,4,add))
console.log(applyOperation(3,4,multiply))

/*
symbol type
*/

const uniqueKey:symbol = Symbol("Description")

const obj ={
    [uniqueKey]:'This is unique property'
}
console.log(obj[uniqueKey])

/*
Unkown
type narrowing 
type assertion

Example
*/
let myUnknown:unknown = "hello"
myUnknown =67.00
// console.log(myUnknown.toFixed(2)) // Error: Object is of type 'unknown'.

//type narrowing
if(typeof myUnknown === "number"){
    myUnknown.toFixed(2)
}
// console.log(myUnknown)

// type assertion

console.log((myUnknown as number).toFixed(2))

// Type casting

// Imagine 'apiResponse' is a value of type 'unknown' or 'any'
// coming from an external source.
const apiResponse: unknown = {
  idn: 123,
  name: "Alice",
  email: "alice@example.com",
};

// Define an interface for the expected user data
interface Users {
  idn: number;
  name: string;
  email: string;
}

// Type cast 'apiResponse' to the 'User' interface
const user2: Users = apiResponse as Users;

// Now, 'user' is treated as a 'User' object, and you can access its properties
// with type safety and auto-completion.
console.log(user2.idn); 
console.log(user2.name); // Output: Alice
console.log(user2.email); // Output: alice@example.com

// Attempting to access a non-existent property would result in a type error:
// console.log(user.address); // Error: Property 'address' does not exist on type 'User'.



// Object type

   const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};  
console.log(car)

/// index signatures
interface UserAges {
  [name: string]: number;
}

const ages: UserAges = {
  "Alice": 30,
  "Bob": 25,
};

/// You can dynamically add new properties
ages.Charlie = 28;
console.log(ages)


//// optional property
const car1: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car1.mileage = 2000;
console.log(car1)

/*
Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.
*/

 function evenOrOdd(n:number):string {
 return (n % 2 === 0)? "Even":"Odd"
}
console.log(evenOrOdd(8))

/*
Multiple of 3 or 5
*/
function solution(number: number) {
    let sum:number = 0
   for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    return sum;
}
console.log(solution(10))


///////Declaration merging
// First declaration
interface Person {
  name: string;
  age: number;
}

// Second declaration with the same name
interface Person {
  address: string;
  email: string;
}

// TypeScript merges them into:
// interface Person {
// name: string;
// age: number;
// address: string;
// email: string;
// }

const person: Person = {
  name: "John",
  age: 30,
  address: "123 Main St",
  email: "john@example.com"
};

console.log(person);

// Intefaces

interface Rectangle {
    height: number,
    width:number
}
const rectangle:Rectangle ={
    height:20,
    width:30
}

console.log(rectangle)
// interace merging

interface Animal{
    name:string
}
interface Animal{
    age:number
}
const dog:Animal ={
    name:"Fido",
    age:5
}
console.log(dog)

// Extending intefaces
interface Rectangles {
    height:number,
    width: number
}
interface ColoredRectagle extends Rectangles{
    color:string
}
const coloredRectagle:ColoredRectagle ={
    height:60,
    color:"red",
    width:70
}
console.log(coloredRectagle)

// Ts Classes
class Person{
    name:string
    constructor (name:string){
        this.name = name
    }
}
const girl= new Person("Jane")
console.log(girl)

