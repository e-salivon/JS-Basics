//objects and arrays

//objects

let choise = {
    drink: "cappuccino",
    size: "middle",
    additions: ["milk", "sugar", "lemon"]
};
choise.size = "large";
console.log(`${choise.size} ${choise.drink}`); //это не кавычки, а символ под эскейп

//arrays

let drinkType = ["Cappuccino", "Americano", "Latte"];
drinkType[1] = "Espresso"
drinkType[3] = "Flat White"
console.log(drinkType[3])
console.log(choise.additions[2])