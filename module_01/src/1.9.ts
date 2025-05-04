{
    // type alias
    type People = {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string;
    } 
    
    const juliett: People = {
        name: "Juliett",
        age: 50,
        gender: 'Female',
        contactNo: '01567851',
        address: 'Silo Level-1'
    }

    const knox: People = {
        name: 'Knox',
        age: 41,
        gender: 'Male',
        contactNo: '123215',
        address: 'Silo Level-99'
    }

    // alias single type
    type UserName = string;
    type IsSheriff = boolean;
    
    const userName: UserName = 'juliett';
    const isSheriff: IsSheriff = true;


    // alias arrow function
    type Add = (num1: number, num2: number) => number;

    const add: Add = (x, y) => x + y;

}