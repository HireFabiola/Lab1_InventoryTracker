// Define the product types
interface PhysicalProduct {
    name: string;
    price: number;
    weight: number;
}

interface DigitalProduct {
    name: string;
    price: number;
    fileSize: number;
}

//Create the union type
type Product = PhysicalProduct | DigitalProduct;

// Return price accordingly
export function taxCalculator(product: Product): string {
    if ("weight" in product) {
        return "Tax is 10%";
    } else if ("fileSize" in product) {
        return "This product has zero tax";
    }
    return "Unknown product type";
}
