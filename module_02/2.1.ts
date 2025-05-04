{
    // type assertion
    let anything: any;

    anything = 'Juliette Nichols';
    
    (anything as string).toUpperCase();

    
    // anything as number
    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === 'string'){
            const converted = parseFloat(value) * 1000;
            return `${converted} gm`;
        } else if (typeof value === 'number'){
            return `${value * 1000} gm`;
        }
    }

    const result = kgToGm(31) as number;
    console.log(result)

    // for try catch

    type CustomError = {
        message: string;
    }

    try {
        // try something here
    } catch(error){
        console.log((error as CustomError).message);
    }
}