//Annotation
let sales: number = 123_456_789;
let numbers: number[] = [1,2,3];

//Tuples
let user: [number,string] = [1,'Chibi'];

//Enums
enum Size {Small=1,Medium,Large};

//Functions
function calculateTax(income: number): number {
    return income * .2;
}

//Objects

let employee: {
    id: number;
    name: string;
    retire: (date: Date)=>Date
} = {
    id: 1,
    name: 'Chibi',
    retire: (date: Date)=>{return date},
};