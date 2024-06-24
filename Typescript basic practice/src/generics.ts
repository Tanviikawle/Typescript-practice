//Generic classes
class KeyValuePair<K,V>{
    constructor(public key: K ,public value: V){}
}
let pair = new KeyValuePair<string,string>('1','a')
//or
let another = new KeyValuePair('param1','param2')

//Generic functions
function WrapInArray<T>(value:T){
    return [value]
}

let number = WrapInArray(1)

    //Same Implementation inside class
        class ArrayUtils{
            static WrapInArray<T>(value:T){
                return [value]
            }
        }
        let yetAnother = ArrayUtils.WrapInArray('s')

//Generic Interfaces
interface Result<T>{
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T>{
    console.log(url)
    return {data:null , error:null}
}

interface User{
    username: string;
}

let result = fetch<User>('url')

//Generic Constraints
class newPerson{
    constructor(public name: string){}
}

class Customer extends newPerson{  
}

function echo<T extends newPerson>(value: T):T{
    return value
}

echo({name: 'a'})
echo(new newPerson('a'))
echo(new Customer('a'))

//Extending Generic classes

interface Product{
    title: string;
    price: number 
}

class Store<T>{
    _objects: T[] = [];
    add(obj:T):void{
        this._objects.push(obj)
    }
}

let store2 = new Store<Product>();
store2._objects = [];

//passing generic type parameter
class CompressibleStore<T> extends Store<T>{
    compress(){}
}

let store = new CompressibleStore<Product>()

//restricting the generic type parameter
class SearchableStore<T extends {name: string}>extends Store<T>{
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

//fix the generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(category: string): Product[]{
        return [];
    }
}

//The keyof operator

//type mapping