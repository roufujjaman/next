{
    // inheritence
    class Person {
        public name: string;
        public age: number;
        public address: string;
        
        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        describe(): void {
            console.log(`This is ${this.name}, and ${this.age} years old, From ${this.address}`);
        }
    }

    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }

        describeDesignation(){
            console.log(`${this.name} is appointed as ${this.designation}`);
        }
    }

    const teacher = new Teacher('Alan', 26, 'Narail', 'Sr. Teacher');
    teacher.describe();
    teacher.describeDesignation();
}