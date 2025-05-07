{
    // utility types

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    
    // Pick
    type NameAge = Pick<Person, 'name' | 'age'>;
    
    // Omit
    type ContactInfo = Omit<Person, 'name' | 'age'>;

    // Required
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
    type PersonReadOnly = Readonly<Person>;
    const person: PersonReadOnly = {
        name: 'Juliett',
        age: 35,
        contactNo: '1123'
    }

    // Record
    // type myObj = {
    //     a: string,
    //     b: string
    // }

    type myObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {};

    const obj: myObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
    }
}