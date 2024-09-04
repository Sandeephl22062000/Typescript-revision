type Person = {
  name: string;
  age: number;
};

type Human = {
  gender: string;
  address: string;
  birthDate: string;
};

// intersection types
type UpdatedHuman = Person & Human;

const human: UpdatedHuman = {
  name: "sandeep",
  age: 21,
  gender: "male",
  address: "park city",
  birthDate: "22/06/2000",
};

console.log({ human });

// type guard
type UnknownHuman = Person | Human;

function printHuman(human: UnknownHuman) {
  if ("age" in human) {
    console.log(`the age of the human is ${human.age}`);
  }
  if ("gender" in human) {
    console.log(`the gender of the human is ${human.gender}`);
  }
}
printHuman(human);

//descriminated unions
interface Bird {
  type: "Bird";
  flyingSpeed: number;
}

interface Horse {
  type: "Animal";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const inputValue = document.getElementById("ïnput-class")!;

(inputValue as HTMLInputElement).value = "enter your name";


