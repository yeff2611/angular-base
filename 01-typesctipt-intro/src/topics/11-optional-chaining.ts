

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Yefferson'
}

const passenger2: Passenger = {
    name: 'Alejandra',
    children: ['Samuel', 'Diana']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || `0 hijos`;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2)