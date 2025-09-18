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
        case "electronics":
            product.price *= 0.8;
            break; 
        case "apparel"
        product.price *= 0.85;
        break;
        case "grocieries":
        case "household" :
            product.price *= 0.9;
            break;
        default:
            break;    



            
        
