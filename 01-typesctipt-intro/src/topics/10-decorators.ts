
function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Propety';
        hello = 'override'
    }
}



@classDecorator
class superClass {
    public myProperty: string = '123abc';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(superClass);

const myClass = new superClass()
console.log(myClass);

