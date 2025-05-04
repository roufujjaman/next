"use strict";
var _a, _b;
{
    // ternary operator
    const age = 16;
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);
    // nulish coalescing
    const isAuthenticated = null;
    const res = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    const res2 = isAuthenticated ? 'authenticated' : 'guest';
    console.log({ res });
    console.log({ res2 });
    const user = {
        name: 'Juliett',
        address: {
            silo: 18,
            level: 99
        }
    };
    const userLevel = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.house) !== null && _b !== void 0 ? _b : 'unavailable';
    console.log({ userLevel });
    // const test = true?true 0;
}
