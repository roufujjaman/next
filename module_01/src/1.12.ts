{
    const searchName = (val: string | null) => {
        if (val) {
            console.log('searching');
        } else {
            console.log('nothing to search');
        }
    };

    searchName(null);


    const getSpeedInMeterPerSecond = (val: unknown) => {
        if (typeof val === 'number'){
            const converted = (val * 1000) / 3600;
            console.log(converted);
        } else if (typeof val === 'string') {
            const [num, unit] = val.split(" ");
            console.log(num)
        } else {
            console.log('wrong input')
        }
    }

    getSpeedInMeterPerSecond('1000');


    // never
    function throwError(msg: string): never {
        throw new Error(msg);
    }

    throwError('a random error occured')

}