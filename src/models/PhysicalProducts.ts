import { Product } from './Product.js';

class PhysicalProduct extends Product {

    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    
    getPriceWithTax(): number {
        return this.price * (1.10);
    }

    getWeight(): string {
        return `${this.weight} kg`;
    }

}

let testProduct = new PhysicalProduct("1225754", "test2", 10.00, 2.5);
console.log(testProduct.getPriceWithTax());
console.log(testProduct.getWeight());
console.log(testProduct.displayDetails());