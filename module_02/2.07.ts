{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        yacht: string;
    }

    // type Owner = 'bike' | 'car' | 'yacht';
    type Owner = keyof Vehicle;

    const person: Owner = 'car';

    const user = {
        name: 'juliett',
        age: 31,
        address: 'level-99'
    }

    function getValByKey<X, Y extends keyof X>(obj: X, key: Y): X[Y]{
        return obj[key];
    }

    console.log(getValByKey(user, 'address'));

}