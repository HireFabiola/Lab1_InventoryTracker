import { Product } from './Product.js';

class DigitalProduct extends Product {

    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    getFileSize(): string {
        return `${this.fileSize} megabytes`;
    }
}
let testProduct = new DigitalProduct("1225754", "test3", 10.00, 15);
console.log(testProduct.getPriceWithTax());
console.log(testProduct.getFileSize());
console.log(testProduct.displayDetails());