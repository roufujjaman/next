"use strict";
{
    // Polymorphism
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, widht) {
            super();
            this.height = height;
            this.width = widht;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const circle = new Circle(20);
    const square = new Rectangle(100, 100);
    console.log(circle.getArea());
    console.log(square.getArea());
}
