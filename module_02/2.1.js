"use strict";
{
    // type assertion
    let anything;
    anything = 'Juliette Nichols';
    anything.toUpperCase();
    // anything as number
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 1000;
            return `${converted} gm`;
        }
        else if (typeof value === 'number') {
            return `${value * 1000} gm`;
        }
    };
    const result = kgToGm(31);
    console.log(result);
    try {
        // try something here
    }
    catch (error) {
        console.log(error.message);
    }
}
