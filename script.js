

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




