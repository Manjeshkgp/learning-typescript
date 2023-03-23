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

// type User = {
//   name: string; // required
//   age: number; // required
//   address?: string; // this ? makes this property as optional
// };

// const user: User = {
//   name: "Mk",
//   age: 2,
// };

// const login = (
//   userData: User
// ): User /*It defines the return type, default is void*/ => {
//   return userData;
// };

// console.log(login({ name: "Sample", age: 4, address: "something" }));

// type ID = number | string;

// const UserID: ID = "84r7yfh";

/* Interfaces */

// interface Transaction {
//   payerAccNo: number;
//   payeeAccNo: number;
// }

// const transaction1: Transaction = {
//   payeeAccNo: 092387,
//   payerAccNo: 239847,
// };

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const bankAccount: BankAccount = {
//   accountHolder: "John Doe",
//   accountNumber: 368246,
//   balance: 9000,
//   isActive: true,
//   transactions: [
//     transaction1,
//     { payeeAccNo: 846782930, payerAccNo: 090329489 },
//   ],
// };

/* Extend */

// interface Book {
//     name:string;
//     price:number;
// }

// const book:Book ={
//     name:"Atomic Habbits",
//     price:900
// }

// interface Ebook extends Book {
//     fileSize:number;
//     format:string;
// }
// interface AudioBook extends Ebook {
//     duration:number;
// }

// const songBook:AudioBook = {
//     name:"Songs",
//     price:800,
//     fileSize:90,
//     format:"pdf",
//     duration:120
// }

/* Automatic Merging */

// interface Book {
//     name:string;
//     price:number;
// }

// interface Book {
//     pages:number
// }

// const book:Book = {
//     name:"",
//     price:0,
//     pages:0
// }

// /* Unions */
// type ID = number | string;
// /* Narrowing */
// function printId(id:ID) {
//     if(typeof id==="string"){
//     console.log(id.toUpperCase())
//     }else{
//     console.log(id)
//     }
// }

// printId(1)

// function getFirstThree (x:string | number[]) {
//     return x.slice(0,3)
// }

// console.log(getFirstThree([1,2,3,4,5,6,7,8]))

/* Generics */

// function logString(arg:string){
//     console.log(arg);
//     return arg;
// }

// function logNumber(arg:number){
//     console.log(arg);
//     return arg;
// }

// function logArray(arg:any[]){
//     console.log(arg);
//     return arg;
// }

// function logAnything<T>(arg:T,):T{
//     console.log(arg);
//     return arg;
// }

// logString("logged in");
// logNumber(3);
// logArray([8,null,"83js"]);
// logAnything(true);

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// interface Player {
//   name: string;
//   age: number;
// }

// const people:HasAge[] = [{ age: 30 }, { age: 90 }, { age: 70 }, { age: 60 }];
// const Players: Player[] = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 40 },
//   { name: "Jack", age: 50 },
// ];
// getOldest(Players);

// // //Assertion
// // const person = getOldest(Players) as Player;

// const person = getOldest(Players)

interface IPost {
  title: string;
  description: string;
  id: number;
}
interface IUser {
  id: number;
  name: string;
  age: number;
}

// const fetchPostData = async(path:string):Promise<IPost[]>=>{
//     const response = await fetch(`http://example.com/${path}`);
//     return response.json();
// }

// const fetchUserData = async(path:string):Promise<IUser[]>=>{
//     const response = await fetch(`http://example.com/${path}`);
//     return response.json();
// }

const fetchData = async <Result>(path: string): Promise<Result> => {
  const response = await fetch(`http://example.com/${path}`);
  return response.json();
};

// (async()=>{
//     const posts = await fetchPostData("posts");
//     return posts[0].title
// })();

// (async()=>{
//     const users = await fetchUserData("users");
//     return users[0].name
// })();

(async () => {
  const users = await fetchData<IUser[]>("users");
  users[0].age
})();
