{
    type UserType = {
        name: string;
        age: number;
    }
    
    type UserTypeWithRole = UserType & {role: string};
    
    const user1: UserTypeWithRole = {
        name: 'juliett',
        age: 31,
        role: 'sheriff'
    }
    
    // interface
    interface User {
        name: string;
        age: number;
    }

    // extends
    interface UserWithRole extends User{
        role: string;
    }

    const user2: UserWithRole = {
        name: 'Knox',
        age: 45,
        role: 'engineer'
    }

    console.log(user1)
    console.log(user2)

    // js --> object , array 
    interface Roll {
        [index: number] : number
    }

    const roll: Roll = [1, 2, 3]

    // type Add = (n: number, m: number) => number;
    interface Add {
        (n: number, m: number) : number
    }

    const add: Add = (num1, num2) => num1 + num2

    console.log(add)
}