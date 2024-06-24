"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Invalid Balance');
        this._balance = value;
    }
}
class SeatAssignments {
}
let seats = new SeatAssignments();
seats.A1 = 'Tio';
seats.A2 = 'Rio';
seats.A3 = 'Vaish';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides++;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
console.log(Ride.activeRides);
class Person {
    constructor(firstNAme, lastName) {
        this.firstNAme = firstNAme;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstNAme + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test.');
    }
}
class Teacher extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Anna', 'Demelo')
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle.');
    }
}
class GoggleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=classes&Instances.js.map