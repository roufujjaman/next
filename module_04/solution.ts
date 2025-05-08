function formatString(input: string, toUpper?: boolean): string {
    if (!toUpper) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

type Item = {
    title: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[] {
    const higherRatedBooks: Item[] = items.filter((item: Item) => item.rating >= 4);
    return higherRatedBooks;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray: T[] = [];
    arrays.forEach((array: T[]) => newArray.push(...array));
    return newArray;
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value === 'string'){
        return value.length;
    } else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    let product: Product | null = null;
    products.forEach((item: Product) => {
        if (product) {
            if (item.price > product.price){
                product = item;
            }
        } else {
            product = item;
        }
    })

    return product;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
    if (day == 4 || day == 5){
        return "Weekend";
    } else {
        return "Weekday";
    }
}

async function squareAsync(num: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if(num > 0){
            num = num * num;
            setInterval(()=>resolve(num), 1000);
        } else {
            reject(new Error('Negative number not allowed'));
        }
    })
}