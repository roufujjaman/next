"use strict";
{
    // type guard using instanceof
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`I am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log(`I am Meowing`);
        }
    }
    const dog = new Dog('Golden Retriver', 'dog');
    const cat = new Cat('Russina', 'Car');
    // cheking using a helper function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        // if(animal instanceof Dog){
        //     animal.makeBark();
        // } 
        // else if (animal instanceof Cat) {
        //     animal.makeMeow();
        // }
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimal(dog);
}
