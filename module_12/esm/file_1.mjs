// const {a, add, b} = require("./file_02");
// const {a: a3, add: add3,b: b3} = require("./file_03");
import {a, b, add} from "./file_2.mjs";
import {a as a3, b as b3, add as add3} from './file_3.mjs';

import m from './file_2.mjs';
import n from './file_3.mjs';

console.log(a);
console.log(add(a, a));

console.log(add3(a3, b3));

const t = {
    n: 500,
    m: 250
};

console.log(m);
console.log(n);