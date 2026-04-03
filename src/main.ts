import { taxCalculator } from "./utils/taxCalculator.js";
import { Product } from "./models/Product.js";
import { PhysicalProduct } from "./models/PhysicalProducts.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

const products = [
    new PhysicalProduct("SKU001", "Laptop", 1200, 2.5),
    new DigitalProduct("SKU002", "E-book", 15, 5),
    new PhysicalProduct("SKU003", "Desk Chair", 250, 15),
    new DigitalProduct("SKU004", "Music Album", 10, 300),
    new PhysicalProduct("SKU005", "Monitor", 300, 4.2),
    new DigitalProduct("SKU006", "Online Course", 99, 1500),
    new PhysicalProduct("SKU007", "Keyboard", 80, 0.9),
    new DigitalProduct("SKU008", "Software License", 199, 50),
    new PhysicalProduct("SKU009", "Smartphone", 999, 0.4),
    new DigitalProduct("SKU010", "Video Game Download", 60, 8000)
];


for (let i = 0; i < products.length; i++) {
    console.log(products[i].displayDetails(), taxCalculator(products[i]), "The final price including tax is $" + products[i].getPriceWithTax());
    if ("weight" in products[i]){
        console.log("and it weighs " + products[i].getWeight());
    }
    else
        console.log("and it has a file size of " + products[i].getFileSize());
}