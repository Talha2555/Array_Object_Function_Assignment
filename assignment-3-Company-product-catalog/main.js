//Assignment 3: Company Product Catalog
//Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var inventory = [];
var item1 = {
    name: "Dell laptop i5 5th Generation ",
    model: "XPS 13",
    cost: 50000,
    quantity: 10
};
var item2 = {
    name: "Alto",
    model: "suzuki",
    cost: 700000,
    quantity: 3
};
var item3 = {
    name: "RED mi note 8",
    model: "Xiaomi",
    cost: 30000,
    quantity: 6
};
inventory.push(item1, item2, item3);
console.log(inventory);
//acsess the proper the property through variable
var acsesProperty = inventory[2].quantity;
console.log("Here i acsses the property of third object which is the quantity of Red mi note 8  inside array :", acsesProperty);
//Acses the property of second items through template litrals
console.log(" the name of my second item is ".concat(inventory[1].name, " and its price is ").concat(inventory[1].cost));
//----Exploring more---
var newItem = {
    name: "CD 70",
    model: "honda",
    cost: 80000,
    quantity: 1
};
inventory.push(newItem);
console.log("the name of my new item is ".concat(inventory[3].name, " and the model is ").concat(inventory[3].model, " and the cost is ").concat(inventory[3].cost));
