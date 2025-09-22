//coding challenge 4 
//Retial Discount Engine: Dynamic Pricing Engine for Retail Products

let products = [
    { name: "laptop", category: "electronics", price : 1000, inventory: 5},
    { name: "T-shirt", category: "apparel", price : 50, invenotory: 10},
    { name: "apple", category: "grocery", price : 2, invenotory: 50},
    { name: "pots", category: "household", price : 30, invenotory: 20},
    { name : "book", category : "other", price : 15, invenotory: 25},
];

for (let product of products) {
    let discount= 0;

    switch (product.category) {
        case "electronics":
            discount = 0.8
            break; 

        case "apparel":
            discount = 0.85;
            break;

        case "grocery":
            discount = 0.95;
            break;  
        case "household":
            discount = 0.9;
            break;
        default:
            discount = 0
            break;
    }
    let promoPrice = product.price * (1-discount);
    product.promoPrice = promoPrice.toFixed(2);
};

let customerType = "regular"; 
  let customerDiscount = 0;

    if (customerType === "student") {
        customerDiscount = 0.05;
    } else if (customerType === "senior") {
        customerDiscount = 0.07;
    } else {
        customerDiscount = 0;
    };
    
    let customer = [
        { name: "Alice", type: "student", cart: [products[0]]}, 
        { name: "Bob", type: "senior", cart: [products[1]]},
        { name: "Charlie", type: "regular", cart: [products[2]]},
        {name: "Diana", type: "student", cart: [products[3]]},
    ];


console.log("--- Customer Purchases ---");
for (let i = 0; i < customerTypes.length; i++)   {
    let customer = customers[i];
    let subtotal = 0;

    for(let item of customer.cart) {
        subtotal += item.promoPrice * 1;
        item.inventory --;
    
    }
    customerType = customer.type;
    if (customerType === "student") {
        customerDiscount = 0.05;
    } else if (customerType === "senior") {
        customerDiscount = 0.07;
    } else {
        customerDiscount = 0;
    }

let finalTotal = subtotal * (1-customerDiscount);
console.log(`Customer ${i+1} (${customer.name} (${customer.type})`);
console.log(`Total cost: $${finalTotal.toFixed(2)}`);
console.log("---");
};




console.log("\\product example :)");
let exampleProduct =  products[0];
for (let key in exampleProduct) {
    console.log(`${key}: ${exampleProduct[key]}`);
    console.log("---");
};

console.log("--- All Products ---");
for( let product of products) {
    let entries = object.entries(product);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
    console.log("---");
};

