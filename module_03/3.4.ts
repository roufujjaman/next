{
    // type guard using instanceof
    class Animal {
        public name: string;
        public species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`I am making sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }

        makeBark(){
            console.log(`I am barking`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }

        makeMeow(){
            console.log(`I am Meowing`);
        }
    }

    const dog = new Dog('Golden Retriver', 'dog');
    const cat = new Cat('Russina', 'Car');

    // cheking using a helper function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        // if(animal instanceof Dog){
        //     animal.makeBark();
        // } 
        // else if (animal instanceof Cat) {
        //     animal.makeMeow();
        // }
        if(isDog(animal)){
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeow();
        } else {
            animal.makeSound();
        }
    }

    getAnimal(dog);
}