{
    // promise

    type Person = {
        id: number;
        name: string;
    }

    const createPromise = (): Promise<Person> => {
        return new Promise<Person>((resolve, reject)=> {
            const data: Person = {id: 100, name: 'Holston'};
            if (data){
                resolve(data);
            } else {
                reject('failed to load data');
            }
        });
    }

    // calling the createPromise function
    const showData = async (): Promise<Person> => {
        const data: Person = await createPromise();
        return data;
    }
    
    showData().then(data => console.log(data));
}