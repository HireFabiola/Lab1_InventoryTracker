abstract class Product {
    sku: string;
    name: string;
    price: number;


    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
    return `Item ${this.sku} is ${this.name} and costs $${this.price}`;
    }

    abstract getPriceWithTax(): number;
    }
