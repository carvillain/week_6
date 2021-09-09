//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foods(object){
    for(let i = 0; i < Object.keys(object).length; i++){
        console.log(Object.keys(object)[i])
        console.log(Object.values(object)[i])
    }
}
console.log(foods(person3))
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printInfo = () => {
        return `${this.name} is a ${this.age} year old ${this.gender}.`
    }

    birthday = () => {
        let new_age = this.age++;
        return `${this.name} has just turned ${new_age}, tell them HAPPY BIRTHDAY!`
    }
}
let owen = new Person('Owen', 29, 'male');


console.log(owen)
console.log(owen.printInfo())
console.log(owen.birthday())
console.log(owen.birthday())
console.log(owen.birthday())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordLength = (word) => {
    return new Promise( (resolve, reject) => {
        if (word.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

wordLength('supercalifragilisticexpealidocious')

.then( (result) => {
    console.log(`Big Word ${result}`)
})

.catch( (result) => {
    console.log(`Small word ${result}`)
})

