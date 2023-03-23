// let NUM1=1

// function calculate(num1,num2){
//     return num1+num2;
// }

// console.log(calculate(NUM1,3))

// function getTotal(numbers:Array<number>){
//     return numbers.reduce((acc,item)=>{return acc+item},0)
// }

// console.log(getTotal([1,2,3,4]))


// const user = {
//     firstName:"John",
//     lastName:"Doe",
//     role:"React JS Developer"
// }


/* Type alias */

type User = {
    name:string; // required
    age:number; // required
    address?:string // this ? makes this property as optional
}

const user:User = {
    name:"Mk",
    age:2,
}

const login = (userData:User):User /*It defines the return type, default is void*/ => {
    return userData
}

console.log(login({name:"Sample",age:4,address:"something"}))


type ID = number | string;

const UserID:ID = "84r7yfh"