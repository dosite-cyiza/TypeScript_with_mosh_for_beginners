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

let employee :{
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
console.log(employee)

