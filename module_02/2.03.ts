{
    // generic type

    
    // const levels: number[] = [2, 4, 5];
    const levels: Array<number> = [2, 4, 5];
    
    // const roles: string[] = ['engineer', 'doctor', 'porter', 'miner'];
    const roles: Array<string> = ['engineer', 'doctor', 'porter', 'miner'];
    
    // const boolArray: boolean[] = [true, false, false];
    const boolArray: Array<boolean> = [true, false, false];
    
    type GenericArray<T> = Array<T>;
    const users: GenericArray<string> = ['Holston', 'Juliett'];

    console.log(users);

    const sheriffs: GenericArray<{name: string}> = [
        {name: 'Juliett'},
        {name: 'Holston'}
    ]

    console.log(sheriffs)

    // generic tuple
    type GenericTuple<X, Y> = [X, Y];
    
    const people: GenericTuple<string, string> = ['Alison', 'Holston'];

    const userWithId: GenericTuple<number, {name: string, age: number}> = [
        151, {name: 'Holston', age: 45}
    ]

    console.log(userWithId);
}