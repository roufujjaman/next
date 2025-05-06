"use strict";
{
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal('Corgi', 'Dog', 'Ghew');
    const cat = new Animal('Persian', 'Car', 'Meow');
    dog.makeSound();
    cat.makeSound();
}
