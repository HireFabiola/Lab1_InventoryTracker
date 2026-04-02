class PhysicalProduct extends Product{
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number):{
        this.weight = number;
    }

    getPriceWithTax():{
         return this.price * (1.10);
    }

    get Weight():{
        return $`{this.weight} kg`;
    }
}