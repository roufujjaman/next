"use strict";
function formatString(input, toUpper) {
    if (!toUpper) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
function filterByRating(items) {
    const higherRatedBooks = items.filter((item) => item.rating >= 4);
    return higherRatedBooks;
}
function concatenateArrays(...arrays) {
    const newArray = [];
    arrays.forEach((array) => newArray.push(...array));
    return newArray;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    let product = null;
    products.forEach((item) => {
        if (product) {
            if (item.price > product.price) {
                product = item;
            }
        }
        else {
            product = item;
        }
    });
    return product;
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day == 6) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
const x = getDayType(Day.Monday); // Output: "Weekday"
const y = getDayType(Day.Sunday); // Output: "Weekend"
console.log(x);
console.log(y);
