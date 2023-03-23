let NUM1=1

function calculate(num1,num2){
    return num1+num2;
}

console.log(calculate(NUM1,3))

function getTotal(numbers:Array<number>){
    return numbers.reduce((acc,item)=>{return acc+item},0)
}

console.log(getTotal([1,2,3,4]))


const user = {
    firstName:"John",
    lastName:"Doe",
    role:"React JS Developer"
}