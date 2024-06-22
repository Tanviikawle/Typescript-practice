//Type Alias

//Without type alias
// let employee1: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date)=> void
// }={
//     id: 1,
//     name: 'Chibi',
//     retire: (date: Date)=>{
//         console.log(date)
//     }
// }

//With type alias
// type Employee = {
//     readonly id: number;
//     name: string;
//     retire: (date: Date)=> void
// }

// let employee2: Employee ={
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date)=>{
//         console.log(date);
//     }
// }
//We can create another employee without repeating structure of object each time instead using just 'Employee'.


//Union types
//Using '|' we can create union type.
// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if(typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');

//Intersection types
//Another technique for combining types in intersection.
//Instead of '|' use '&'

// type Draggable = {
//     drag: ()=> void
// };

// type Resizable = {
//     resize: ()=> void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: ()=>{},
//     resize: ()=>{}
// }


//Literal types(exact,spcific)
// let quantity: 50 | 100 = 50;

 //or using type alias

//  type Quantity = 50 | 100
//  let quantity: Quantity = 100

//Nullable types
// function greet(name:string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!')
// }
// greet(null);

//Optional chaining(?.)
//  function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()};
//  }

//Without using optional chaining

//  let customer = getCustomer(0);
//  if(customer !== null && customer!== undefined)
//     console.log(customer.birthday);

//Using optional chaining - optional property access operator

// let customer = getCustomer(0);
// console.log(customer?.birthday?.getFullYear())

//Optional element access operator
//customers?.[0]

//Optional call

// let log: any = null;
//or we can assign log a function which console log message which uis passed as parameter.
// let log: any = (message: string)=> console.log(message)
// log?.('a');

//Nullish coalescing operator - value can be null or undefined
// let speed: number | null=null;

//without coasealing operator
// let ride = {
//     speed: speed !== null ? speed : 30
// }

//without coasealing operator
// let ride = {
//     speed: speed !== null ?? 30
// }

//Type assertion
//  let phone = document.getElementById('phone') as HTMLInputElement;
//  phone.value

//The unkown type

//without using unknown type - insead using any
// function render(document: any){
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

//using unkown type

// function render(document: unknown){
    //because of unknown me need to do type narrowing
    //typeof only works for primitive types.
    //so for other types we use 'instanceof'
//     if(typeof document === 'string')
//         document.toUpperCase();
//     if(document instanceof WordDocument)
//         document.move();
// }


//The never type
//not used that often
//used to denote that function never retuns for example if function have infinite loop within it.
// function processEvents(): never {
//     while (true){
//         //some task or ead message from queue
//     }
// }
// processEvents()
// console.log('Hello world');

// example-2
//If we don't use never then it will set functions return type as void and will not detect unreachable code.
// function reject(message: string): never{
//     throw new Error(message);
// }

// reject('...')
// console.log('Hello world')

//In the following example because of never it will detect unreachable code.

// function reject(message: string): never{
//     throw new Error(message);
// }

// reject('...')
// console.log('Hello world');


