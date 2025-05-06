"use strict";
{
    // inheritence
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        describe() {
            console.log(`This is ${this.name}, and ${this.age} years old, From ${this.address}`);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        describeDesignation() {
            console.log(`${this.name} is appointed as ${this.designation}`);
        }
    }
    const teacher = new Teacher('Alan', 26, 'Narail', 'Sr. Teacher');
    teacher.describe();
    teacher.describeDesignation();
}
