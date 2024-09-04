"use strict";
const human = {
    name: "sandeep",
    age: 21,
    gender: "male",
    address: "park city",
    birthDate: "22/06/2000",
};
console.log({ human });
function printHuman(human) {
    if ("age" in human) {
        console.log(`the age of the human is ${human.age}`);
    }
    if ("gender" in human) {
        console.log(`the gender of the human is ${human.gender}`);
    }
}
printHuman(human);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Animal":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log({ speed });
}
moveAnimal({ type: "Animal", runningSpeed: 123 });
//type casting
// const inputValue = document.getElementById("input-class")!;
// const inputValue = document.getElementById("input-class")! as HTMLInputElement;
const inputValue = document.getElementById("ïnput-class");
inputValue.value = "enter your name";
