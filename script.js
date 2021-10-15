

function pizzaOven(crust, sauce, cheese, toppings){
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["X2 pepperoni", "sausage", "linguesa", "canadian bacon", "ham"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin", "white", ["mozzarella"], ["chicken", "bacon", "spinach", "olives"]);
console.log(pizza4);


function randomPizza(crust, sauce, cheese, toppings){
    var pizza = {};
    pizza.crustType = crust[Math.floor(Math.random() * crust.length)];
    pizza.sauceType = sauce[Math.floor(Math.random() * sauce.length)];
    pizza.cheese = cheese[Math.floor(Math.random() * cheese.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}

var rPizza = randomPizza(["Hand Tossed","Thick","Flat","Braided","Deep Dish","Thin"],["Traditional","White","BBQ","Spicy","No sauce"],["Mozzarella","Colby Jack","Mexican","Cheddar","Swiss","Pepper Jack"],["Onions","Tomatoes","Olives","Pineapple","Bacon","Sausage","Pepperoni","Ham"]);
console.log(rPizza);