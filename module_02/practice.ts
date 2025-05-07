{
    function person(name: string, age: number, role: 'admin' | 'user' | 'guest'): void {
        console.log(name, age, role);
    }

    person('Julioett', 35, 'admin');

    type Person = {
        name: string,
        address: string,
        hairColor: string,
        eyeColor: string,
        income: number,
        expense: number,
        hobbies: string[],
        familyMembers: object,
        job: object,
        maritalStatus: string,
        friends: string[]
    }

    interface Book {
        name: string,
        year: number,
        pages: number,
        author: string,
    }

    interface Megazine {
        name: string,
        year: number,
        pages: number
        month: number,
    }

    type BookOrMegazine = Book | Megazine;
    type BookAndMegazine = Book & Megazine;
    
    const t: BookOrMegazine = {
        name: 'asf',
        year: 2025,
        pages: 100,
        author: 'dusk',
    }

    const revStr = (val: string): string => {
        return val.split('').reverse().join('');
    }
    console.log(revStr('juliett'));

    const sum = (...nums: number[]): number => {
        let sum = 0;
        nums.forEach((val: number) => sum += val);
        return sum; 
    }

    console.log(sum(10, 20, 30));

    const reversString = (val: string): string => {
        return val.split('').reverse().join('');
    }

    console.log(reversString('hello'));


}