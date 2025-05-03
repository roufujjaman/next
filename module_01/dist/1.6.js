"use strict";
// Named Function
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}
// Arrow Function
const addArrow = (num1, num2) => num1 + num2;
// Object -> Function -> Method
const User = {
    name: 'Juliette',
    balance: 0,
    addBalance(amount) {
        return this.balance + amount;
    }
};
// array
const arr = [1, 2, 3];
const arrSquared = arr.map((element) => element * element);
