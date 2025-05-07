{
    // Polymorphism
    class Shape {
        getArea(): number{
            return 0;
        }
    }

    class Circle extends Shape{
        public radius: number;
        
        constructor(radius: number){
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        public height: number;
        public width: number;
        constructor(height: number, widht: number){
            super();
            this.height = height;
            this.width = widht;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const circle: Circle = new Circle(20);
    const square: Rectangle = new Rectangle(100, 100);

    console.log(circle.getArea());
    console.log(square.getArea());
}