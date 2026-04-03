TypeScript Inventory Tracker

Overview
This project is a simple object-oriented inventory tracker built with TypeScript. It distinguishes between PhysicalProduct and DigitalProduct, calculates applicable taxes, and manages inventory using modular design.

The purpose of this lab is to reinforce core object-oriented programming (OOP) concepts:
Inheritance
Encapsulation
Abstraction
Polymorphism

It also demonstrates how TypeScript enhances these concepts through:
Strong typing
Interfaces
Type narrowing

Features
Supports multiple product types:
Physical products (with weight)
Digital products (with file size)
Calculates tax based on product type
Type-safe design using TypeScript
Scalable architecture for adding new product types
Modular structure for better organization

How It Works

Products are defined using interfaces and/or classes.
Each product type has unique properties:

  Physical → weight
  Digital → fileSize
A utility function (taxCalculator) determines tax rules based on product type using TypeScript type narrowing.
An array of mixed products is processed to demonstrate functionality.

Example Usage
or (let i = 0; i < products.length; i++) {
    console.log(products[i].displayDetails(), taxCalculator(products[i]), "The final price including tax is $" + products[i].getPriceWithTax());
    if ("weight" in products[i]){
        console.log("and it weighs " + products[i].getWeight());
    }
    else
        console.log("and it has a file size of " + products[i].getFileSize());
}


Critical Thinking Questions
1. How does TypeScript enforce type safety in this object-oriented program?
TypeScript enforces type safety by requiring all objects to conform to defined interfaces or class structures. In this program:
The Product type is a union of PhysicalProduct and DigitalProduct
Each type has clearly defined properties and types
The compiler ensures that only valid properties are accessed
Additionally, TypeScript uses type narrowing (e.g., weight in product) to safely determine the exact type at runtime. This prevents errors such as accessing properties that do not exist on a given object.


2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
Inheritance allows both product types to share common properties such as:
sku
name
price
Instead of rewriting these fields in multiple places, a base class (e.g., Product) can define them once. The specialized classes (PhysicalProduct and DigitalProduct) then extend this base class and add only their unique properties (weight or fileSize).
This reduces duplication by:
Centralizing shared logic
Improving maintainability
Making updates easier (change once, apply everywhere)

3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
Encapsulation helps control how data is accessed and modified.
Benefits include:
Data protection: Prevents unintended modification of internal state
Controlled access: Only exposes what is necessary
Improved maintainability: Internal changes do not break external code
Clear structure: Makes the code easier to understand
Access modifiers:
public → accessible anywhere
private → only within the class
protected → accessible within the class and subclasses
In this project, encapsulation ensures that product data is handled safely and consistently.

4. If you had to add a new type of product (e.g., SubscriptionProduct), how would polymorphism make this extension straightforward?
Polymorphism allows different product types to be treated uniformly while still having unique behavior.
To add a SubscriptionProduct, you could:
Create a new class or interface with its own properties (e.g., duration, monthlyFee)
Extend the base Product class (if using inheritance)
Update the union type:
   type Product = PhysicalProduct | DigitalProduct | SubscriptionProduct;
Update logic (like taxCalculator) to handle the new type
Because all products share a common structure, existing code (like loops or inventory management) does not need to change—only the new behavior is added.
This makes the system:
Scalable
Flexible
Easy to extend without breaking existing functionality


Key Takeaways

TypeScript strengthens OOP concepts with static typing
Property-based type narrowing is a powerful alternative to explicit type fields
Clean architecture makes the system easy to scale and maintain
OOP principles help organize and simplify complex logic

Future Improvements
 Add inventory quantity tracking
Implement persistence (database or local storage)
Add UI for interacting with products
Expand product types (subscriptions, services, bundles)


Author

Fabiola Aurelien



