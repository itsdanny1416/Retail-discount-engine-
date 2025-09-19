//coding challenge 4 
//Retial Discount Engine: Dynamic Pricing Engine for Retail Products

let products = [
    { name: "laptop", category: "eletronics", price : 1000, invenotory: 5},
    { name: "T-shirt", category: "aparel", price : 50, invenotory: 10},
    { name: "apple", category: "grocery", price : 2, invenotory: 50},
    { name: "pots", category: "household", price : 30, invenotory: 20},
    { name : "book", category : "other", price : 15, invenotory: 25},
];

for (let product of products) {
    switch (product.category) {
        case "eletronics":
            product.price *= 0.8;
            break; 
        case "aparel":
            product.price *= 0.85;
            break;
        case "grocery":
        case "household":
            product.price *= 0.9;
            break;
        default:
            break;
    }
}

function applyCustomerDiscount(total, customerType) {
    if (customerType === "student") {
        return total * 0.95; 
    } else if (customerType === "senior") {
        return total * 0.93;
    } else {        
        return total;
    }
}

const customerTypes = ["student", "senior", "regular"];

for (let i = 0; i < 3; i++)   {
    let total = 0;
    for (let product of products) {
        total += product.price;
          product.invenotory -= 1; 
    }
    total = applyCustomerDiscount(total, customerType);
    console.log(`Total for ${customerType}: $${total.toFixed(2)}`);
}

            
total =applyCustomerDiscount(total, customerType);
console.log(`Cutomer ${customerType} Total : $${total.toFixed(2)}`);

duct = products [0];
n examplepProduct {
    ${key}: ${examplepProduct[key]  }
    
    ct of products{
        =Object.entries(product);
        y, value of entries {
        g(`${key}: ${value}`);
            
        "---");
   