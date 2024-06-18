
export class Person {
    // public name: string;
    // public address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }
    constructor(
        public name: string,
        private address: string = 'No address'
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'Colombia')
//     }
// }
export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person('Tony Stark', 'Colombia')
const ironMan = new Hero('IronMan', 50, 'Tony', tony);

console.log(ironMan);

