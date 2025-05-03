// Named Function
function add(num1: number = 0, num2: number = 0): number{
    return num1 + num2;
}

// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object -> Function -> Method
const User = {
    name: 'Juliette',
    balance: 0,
    addBalance(amount:number): number{
        return this.balance + amount
    }
}

// array
const arr: number[] = [1, 2, 3];
const arrSquared: number[] = arr.map((element: number) => element * element);