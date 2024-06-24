//While creating a class intypescript we use semicolon after defining each property in class and also all the properties need to initialise as well using constructor method.

//Creating a class in typescript
//  class Account{
//     readonly id: number;
//     owner: string;
//     balance: number;
//     //creating optional property
//     nickname?: string;
//     constructor(id: number,owner: string, balance: number){
//         this.id = id;
//         this.balance = balance;
//         this.owner = owner;
//     }
//     deposite(amount:number):void{
//         if (amount<=0)
//             throw new Error('Invalid amount')
//         this.balance += amount
//     }
//  }

 //How to create an object using above class

// let account = new Account(1,"Tio" , 0) 
// account.deposite(-100)
// console.log(account.balance)

//Access modifiers , all the properties of class are public by default.
//private properties are prefixed with underscore '_'.

//so redefining above class using access modifiers

class Account{
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string

    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }

    deposite(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount')
        this._balance += amount;
    }

    //getter
    get balance():number{
        return this._balance;
    }

    //setter
    set balance(value: number){
        if(value <=0)
            throw new Error('Invalid Balance')
        this._balance = value
    }
}

// we can also use access modifiers with methods of an object.

//Index signatures

class SeatAssignments{
    [seatNumbers: string]: string;
}

let seats = new SeatAssignments()
seats.A1 = 'Tio'
seats.A2 = 'Rio'
seats.A3 = 'Vaish'

//STATIC PROPERTY : Static property is a property which belongs to a class not to an object . Hence we have only one instance of static property in a memory.

class Ride{
    private static _activeRides : number = 0;

    start(){
        Ride._activeRides ++;
    }

    stop(){
        Ride._activeRides ++;
    }

    static get activeRides(): number{
        return Ride._activeRides
    }
}

let ride1 = new Ride()
let ride2 = new Ride()
console.log(Ride.activeRides);

//Inheritance

class Person{
    constructor(public firstNAme: string ,public lastName: string){}

    get fullName(){
        return this.firstNAme + ' ' + this.lastName
    }

    walk(){
        console.log('Walking')
    }
}

class Student extends Person{
    constructor (public studentId: number ,firstName: string ,lastName: string){
        super(firstName , lastName);
    }

    takeTest(){
        console.log('Taking a test.')
    }

}


//Method override
class Teacher extends Person{
    constructor(firstName: string , lastName: string){
        super(firstName,lastName);
    }
    override get fullName(){
        // return 'Professor ' + this.firstNAme + ' ' + this.lastName ;
        //or
        return 'Professor ' + super.fullName ;
    }
}

//Polymorphism
function printNames(people: Person[]){
    for (let person of people)
        console.log(person.fullName)
}

printNames([
    new Student(1,'John','Smith'),
    new Teacher('Anna','Demelo')
])


//Abstract : not complete , abstrct methods are methods with no plementation.
//Abstract methods should be only exist within abstract classes
abstract class Shape{
    constructor(public color:string){}

    abstract render():void
}

class Circle extends Shape{
    constructor(public radius: number, color: string){
        super(color);
    }
    override render(): void {
        console.log('Rendering a circle.')
    }
}

//Interfaces
interface Calendar{
    name: string;
    addEvent():void;
    removeEvent():void;
}

interface CloudCalendar extends Calendar{
    sync():void;
}



class GoggleCalendar implements Calendar{
    
    constructor(public name:string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}