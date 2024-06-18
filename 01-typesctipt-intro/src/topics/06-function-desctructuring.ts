export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 250.2
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 300.5
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//mandamos argumento de tipo objeto, se recomienda cuando se envía mas de 3 argumentos a una función
// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })
    return [total, total * tax]
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax
// })

// const [total, taxTotal] = result

// console.log('Total', total);
// console.log('Tax', taxTotal);

// export { default Product };