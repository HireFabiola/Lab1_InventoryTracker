import { Product } from './Product.js';

class DigitalProduct extends Product{
    fileSize: number;

    getPriceWithTax():{
        return this.price;
    }

    get fileSize(){
        return `${this.fileSize} megabytes`;
    }
}