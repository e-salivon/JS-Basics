//loops (цикл)
//for loop 
// for(statment1; statment2; statnent3){

//}

//statment1 - initial statment
//statment2 - condition when we stop
//statment3 - what will be done after evry cycle

for(let x=0; x<5; x=x+1){
    console.log("Need more coffee")
}

//for of loop (used when we need to go throw array (массив))
let drinkType = ["Cappuccino", "Americano", "Latte"]
for(let drink of drinkType){
    console.log("and "+drink)
    if(drink == "Americano"){
        break
    }
}

// forEach
drinkType.forEach(drink =>{
    console.log(drink)
})