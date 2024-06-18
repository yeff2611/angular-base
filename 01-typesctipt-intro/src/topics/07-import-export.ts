
import { Product, taxCalculation } from './06-function-desctructuring'
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Samsung',
        price: 200,
    },
];

const tax = 0.15;
const [total, taxes] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total', total);
console.log('Tax', taxes);

