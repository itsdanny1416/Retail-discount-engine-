let products = [
    { name: "laptop", category: "electronics", price: 1000, inventory: 5 },
    { name: "T-shirt", category: "apparel", price: 50, inventory: 10 },
    { name: "apple", category: "grocery", price: 2, inventory: 50 },
    { name: "pots", category: "household", price: 30, inventory: 20 },
    { name: "book", category: "other", price: 15, inventory: 25 },
];

// Apply category discounts
for (let product of products) {
    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = 0.2; // 20% off
            break;
        case "apparel":
            discount = 0.15; // 15% off
            break;
        case "grocery":
            discount = 0.05; // 5% off
            break;
        case "household":
            discount = 0.1; // 10% off
            break;
        default:
            discount = 0;
            break;
    }

    let promoPrice = product.price * (1 - discount);
    product.promoPrice = promoPrice.toFixed(2); // store as string with 2 decimal places
}

// Customer data
const customers = [
    { name: "Alice", type: "student", cart: [products[0]] },
    { name: "Bob", type: "senior", cart: [products[1]] },
    { name: "Charlie", type: "regular", cart: [products[2]] },
    { name: "Diana", type: "student", cart: [products[3]] },
];

// Print purchases
console.log("--- Customer Purchases ---");
for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let subtotal = 0;

    for (let item of customer.cart) {
        subtotal += Number(item.promoPrice); // convert string to number
        item.inventory--;
    }

    let customerDiscount = 0;
    switch (customer.type) {
        case "student":
            customerDiscount = 0.05;
            break;
        case "senior":
            customerDiscount = 0.07;
            break;
        default:
            customerDiscount = 0;
    }

    let finalTotal = subtotal * (1 - customerDiscount);
    console.log(`Customer ${i + 1} (${customer.name} - ${customer.type})`);
    console.log(`Total cost: $${finalTotal.toFixed(2)}`);
    console.log("---");
}

// Display example product
console.log("\\product example :)");
let exampleProduct = products[0];
for (let key in exampleProduct) {
    console.log(key + ": " + exampleProduct[key]);
}
console.log("---");

// Display all products
console.log("--- All Products ---");
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(key + ": " + value);
    }
    console.log("---");
}
