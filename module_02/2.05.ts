{
    // generics --> named function

    function createPair<S, N>(name: S, age: N): [S, N] {
        return [name, age];
    };

    const pair1 = createPair<number, number>(100, 200);
    console.log(pair1);

    const pair2 = createPair<string, number>('Juliett', 35);
    console.log(pair2)

    // generics --> anonymous function

    const createUser = <S, N>(name: S, age: N): [S, N] => [name, age];
    
    const user1 = createUser<string, number>('Medow', 55);
    const user2 = createUser<string, {age: number, level: number}>('Knox', {age: 45, level:99});
    console.log(user1);
    console.log(user2);
}