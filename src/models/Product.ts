class Product {
    sku: string;
    name: string;
    price: number;


    constructor(sku: string, name: string, price: number) {
        this.sku = string;
        this.name = string;
        this.price = number;
    }

    displayDetails(): {
    return `Item ${this.sku} is ${this.name} and costs $${this.price}`;
    }

    getPriceWithTax(taxRate):{
         return this.price * (taxRate + 1);
    }
}