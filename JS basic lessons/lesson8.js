//Functions - used to irganize code into reusable peaces

//Declarative functions. Can be colled before the declaration (order)
function NameOfFunction(){
    console.log("My code works!")
    console.log("I have no idea why...")
};

NameOfFunction()

//Anonimus function. If try to call before declaration will error.
let MagicHappens = function(){
    console.log("But if it works, don't touch it.")
}
 MagicHappens()

 //Arrow function. Like anonimus function, but without need to add'function' word.
 let Wizard = () =>{
    console.log("It's advanced magic.")
 }

 Wizard()

 //Function with parameters

 function Christmas(name){
    console.log(name)
 }
 Christmas("Ho-Ho-Ho")

 //returning functions
 function MultiplayByTwo(number){
    let result = number*2
    return result
 }
 let myResult = MultiplayByTwo(9)
 console.log(myResult)

 //import function
import { OutsideFunction } from "../Helpers/consoleLog.js"
OutsideFunction()