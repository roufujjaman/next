{
    // union type
    type Skill = 'html' | 'css' | 'javascript' | 'typescript' | 'python' | 'go';

    const developer1: Skill = 'python';


    // intersection types
    type Person = {
        name: string;
        age: number;
    }

    type Employee = {
        employeeId: number;
        skill: Skill[];
    }

    type Staff = Person & Employee;

    const user1: Staff = {
        name: 'Juliett',
        age: 31,
        employeeId: 300,
        skill: ['css', 'python']
    }
}