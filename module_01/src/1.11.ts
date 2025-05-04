{
    // ternary operator
    const age: number = 16;
    const isAdult = age >= 18? 'Adult': 'Not Adult';
    
    console.log(isAdult)
    
    // nulish coalescing
    const isAuthenticated = null;
    const res = isAuthenticated ?? 'guest';
    const res2 = isAuthenticated? 'authenticated': 'guest';
    
    console.log({res})
    console.log({res2})    
    
    // optional chaining
    type User = {
        name: string,
        address: {
            silo: number;
            level: number;
        }
    }

    const user: User = {
        name: 'Juliett',
        address: {
            silo: 18,
            level: 99
        }
    }

    const userLevel = user?.address?.house ?? 'unavailable';
    console.log({userLevel});
}