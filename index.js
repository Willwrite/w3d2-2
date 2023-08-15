// //Code Along

// let dudes = ["bob", "jerry", "brandon"] 
// let dudes.push("Spock", "Kirk", "Khaaaaaaaaaaan");

// //Didn't finish function one



// let fruits = [ "apple", "grapes", "plum", "pear"  ];

// let firstFruit = fruits[0];
// let lastFruit = fruits[fruits.length-1]

// for (let i=0; i<fruits.length; i++) {
//     let theFruitAtThisIndex = fruits[i];
//     if (theFruitAtThisIndex == "graps") {
//         console
//     })
//     console.log(theFruitAtThisIndex);
// }
// console.log(lastFruit);
// // can use forEach() ec fruits.forEach
// // give function to for.Each method
// // example 
// fruits.forEach((eachFruit) => {
//     console.log(eachFruit);
//     // will output/return every fruit in the array
// })
// //forEach returns undefined


// //Use Map example
// //.map will oop though the array AND return a new array// ["APPLE", "GRAPES", "PLUM", "PEAR"]
// fruits.map((fruit) => {
//     return fruit.toUpperCase(); //apple
// })

// let myNEwArrry =  fruits.map((fruit) => {
//     return fruitToUpperCase();
// })

// ["APPLE", "GRAPES", "PLUM", "PEAR"]


// fruit.push("grapes");

// fruit.unshift("plum");

// //omly arrays can use push()
// //Iwant to delete the oldest shift
// fruit.shift()

// fruit.pop();
// // remove from the ensd of the list
// // almost every thing in JS returns things 
// // const doSomething = () => { consile loof }
// // doSomething()
// // returns the thing removed from the array

// console.log(fruit);

// let grades = [80, 50, 90, 45, 87];
// //the class got extrra credit, so everyone got some extra points
// // [85, 55, 95, 50, 92]

// let newGrades = 
// grades.map((points) =>  {
//     return points+5
// })
// console.log(grades, newGrades);





// //
// let shoppingList = ["apples", "Milk", "Bread", "Eggs"];

// const readList = (array) => {

//     array.forEach((item) => {
//         console.log(item);
//     })
// };

// readList(shoppingList);

// // camn return the array or loop the items in the array


// readList([12, 8, 33, 5565]);
//
let shoppingList = ["apples", "Milk", "Bread", "Eggs"];

const readList = (array) => {

    array.forEach((item) => {
        console.log(item);
    })
};

readList(shoppingList);

// write a function that will remove somehting from the list
//for loop
//or
//forEach Loop
// This is the key one

// for ieacgh [item, index]
const removeFromList = (someArray, itemToRemove) => {
    array.forEach((thing, index) => {
        if (thing === itemToRemove) {
            //this is the thing we want to take out
            array.splice(index, 1)

        }
    })

};

removeFromList(shoppingList, "Milk");

// to remove something from an array you need to know the index
 // check of theitem has the same data type as what ever is in the array

// #3 on the list  - add something to the list - need a vaariable our side of the array that can be changed - we only want strings for our array

const addToList = (array, itemToAdd) => {
    // check if this thing is already in the array - keep track as we go through the arrays - 
    if (typeof itemToAdd === "string" ) {
        return
    }
    //let isInArray = false;
    let ShouldAdd = true;
    array.forEach((thing) => {
        if (thing === itemToAdd || typeof itemToAdd !== typeof thing) {
            ShouldAdd = false;
        }
    })
    
    // only make this check after we finish looping
    
    if (!ShouldAdd) {
        array.push(itemToAdd)
    }
}

addToList(shoppingList, "Bagel", 5)
console.log(shoppingList)

// Next Important Example
// "Falsey" "" False, null, undefined, 0 
// and 
// "Truthy" "hello", 1, 56, arrays, nan 

// Next assignment
// write a High Scores tracker

// #1
// let highcores = [1024, 876, 1500, 720, 950];
// highScores.push(2000)

// #2
// const removeScores = (scoreToRemove) => {
//     highScore.forEach((score, index) => {
//         if (score === scoreToRemove) {
//             highScore.splice(index, 1);
//         } 
//     })
// }
// let indexOfThing = highScoress.indexof720


// removeScores(1500)
// console;length.log(highScores);

//-30-