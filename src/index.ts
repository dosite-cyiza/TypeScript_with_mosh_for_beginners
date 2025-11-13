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

