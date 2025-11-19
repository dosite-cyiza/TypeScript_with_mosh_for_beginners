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

