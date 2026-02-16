/* 
================================================================================
OBJECT-ORIENTED PROGRAMMING (OOP) IN TYPESCRIPT - SIMPLE EXPLANATION
================================================================================

Think of OOP like creating blueprints for real-world objects. Just like how
architects use blueprints to build houses, programmers use classes (blueprints)
to create objects (things in your program).

Imagine you want to create a video game with multiple characters. Instead of
creating each character from scratch every time, you create a "blueprint" (class)
and then use it to create as many characters as you want!

================================================================================
1. CLASS - The Blueprint
================================================================================

A class is like a recipe or a blueprint. It tells the computer WHAT an object
should have and WHAT it can do, but it's not the actual object itself.

Simple Example:
---------------
Think of a class like a cookie cutter. The cutter (class) is just a shape,
but you can use it to make many actual cookies (objects)!

Real-World Example:
-------------------
A "Car" class is like a car factory blueprint. It defines:
- What parts a car should have (wheels, engine, doors)
- What a car can do (drive, stop, honk)

But the blueprint itself isn't a car - it's just instructions to build one!

Syntax:
*/
// This is a class - it's a blueprint for creating objects
class Car {
  // Properties (what the car HAS)
  brand: string = '';
  color: string = '';
  speed: number = 0;

  // Method (what the car CAN DO)
  drive(): void {
    console.log('The car is driving!');
  }
}

/*
================================================================================
2. CONSTRUCTOR - Creating the Actual Object
================================================================================

The constructor is a special method that runs when you CREATE an object from
a class. It's like the "construction phase" where the actual object is built!

Simple Example:
---------------
Think of a birthday cake:
- The recipe (class) tells you what ingredients to use
- The constructor is like actually mixing those ingredients and baking the cake

Real-World Example:
-------------------
When you order a pizza:
- The pizza place has a "pizza blueprint" (class)
- When you call and order, they use the blueprint to CREATE your specific pizza
- The act of creating your pizza is the "constructor"

Syntax:
*/
class Person {
  name: string;
  age: number;

  // This is the constructor - it runs when we create an object
  constructor(name: string, age: number) {
    this.name = name; // 'this' refers to the current object being created
    this.age = age;
  }

  // Method
  sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old!`,
    );
  }
}

// Creating objects (using the constructor)
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old!
person2.sayHello(); // Output: Hello, my name is Bob and I'm 30 years old!

/*
================================================================================
3. PROPERTIES - Storing Data
================================================================================

Properties are variables that belong to a class. They store information about
the object.

Simple Example:
---------------
A book has properties like:
- title (string)
- author (string)  
- pages (number)

Real-World Example:
-------------------
A student in a school has:
- name
- grade
- studentID
- subjects they're taking
*/
class Book {
  // Properties - data about the book
  title: string;
  author: string;
  pages: number;
  isRead: boolean;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false; // default value
  }

  // Method to mark book as read
  markAsRead(): void {
    this.isRead = true;
    console.log(`You finished reading "${this.title}"!`);
  }
}

const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
console.log(`Book: ${myBook.title} by ${myBook.author}`); // Book: The Great Gatsby by F. Scott Fitzgerald
myBook.markAsRead(); // You finished reading "The Great Gatsby"!

/*
================================================================================
4. METHODS - Actions the Object Can Perform
================================================================================

Methods are functions inside a class that define what the object can DO.

Simple Example:
---------------
A dog can:
- bark()
- eat()
- sleep()

Real-World Example:
-------------------
A bank account can:
- deposit() - add money
- withdraw() - take out money
- checkBalance() - see how much money is there
*/
class BankAccount {
  // Property
  balance: number;
  ownerName: string;

  constructor(ownerName: string, initialBalance: number = 0) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  // Methods - actions this object can perform
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log('Not enough money!');
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  }

  checkBalance(): void {
    console.log(`${this.ownerName}'s balance: $${this.balance}`);
  }
}

const aliceAccount = new BankAccount('Alice', 1000);
aliceAccount.checkBalance(); // Alice's balance: $1000
aliceAccount.deposit(500); // Deposited $500. New balance: $1500
aliceAccount.withdraw(200); // Withdrew $200. New balance: $1300

/*
================================================================================
5. INHERITANCE - Reusing and Extending Classes
================================================================================

Inheritance allows a class to inherit properties and methods from another class.
It's like a child inheriting traits from their parents!

Simple Example:
---------------
If you have a "Fruit" class, you can create:
- Apple class (inherits from Fruit)
- Orange class (inherits from Fruit)
- Banana class (inherits from Fruit)

All of these will automatically have fruit properties, plus their own!

Real-World Example:
-------------------
In a company:
- "Employee" is the parent class (has name, salary, department)
- "Manager" inherits from Employee (adds: manages team)
- "Developer" inherits from Employee (adds: knows programming languages)
- "Designer" inherits from Employee (adds: knows design tools)
*/
// Parent class (the blueprint)
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // All animals can eat
  eat(): void {
    console.log(`${this.name} is eating...`);
  }

  // All animals can sleep
  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }
}

// Child class - inherits from Animal
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    // Call the parent constructor
    super(name, age);
    this.breed = breed;
  }

  // Dog-specific method
  bark(): void {
    console.log('Woof! Woof!');
  }

  // Override the eat method (polymorphism!)
  eat(): void {
    console.log(`${this.name} the dog is eating kibble...`);
  }
}

// Another child class
class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  // Cat-specific method
  meow(): void {
    console.log('Meow!');
  }

  // Override sleep for cats
  sleep(): void {
    console.log(`${this.name} the cat is sleeping on the couch...`);
  }
}

const myDog = new Dog('Buddy', 3, 'Golden Retriever');
myDog.eat(); // Buddy the dog is eating kibble...
myDog.sleep(); // Buddy is sleeping...
myDog.bark(); // Woof! Woof!

const myCat = new Cat('Whiskers', 2);
myCat.eat(); // Whiskers is eating...
myCat.meow(); // Meow!

/*
================================================================================
6. ENCAPSULATION - Protecting Data
================================================================================

Encapsulation is about hiding the internal details of an object and only
exposing what's necessary. It's like a TV remote - you press buttons (public),
but you don't need to know how it works inside (private)!

Simple Example:
---------------
A bank ATM:
- You can see the screen and keypad (public)
- You can't see the internal mechanics (private)

Real-World Example:
-------------------
A coffee machine:
- Public: Buttons to press, cup holder
- Private: Internal pipes, heating element, wiring

In TypeScript, we use these keywords:
- public: can be accessed from anywhere (default)
- private: can only be accessed within the class
- protected: can be accessed within the class and its children
*/
class BankAccountPrivate {
  // Private property - can't be accessed directly from outside
  private _balance: number;
  public ownerName: string;

  constructor(ownerName: string, initialBalance: number) {
    this.ownerName = ownerName;
    this._balance = initialBalance;
  }

  // Public method to get balance (controlled access)
  public getBalance(): number {
    return this._balance;
  }

  // Public method to deposit (with validation)
  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited $${amount}`);
    } else {
      console.log('Invalid amount!');
    }
  }

  // Public method to withdraw (with validation)
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew $${amount}`);
    } else {
      console.log('Invalid amount or insufficient funds!');
    }
  }
}

const privateAccount = new BankAccountPrivate('John', 500);

// This works - using public methods
privateAccount.deposit(100);
console.log('Balance:', privateAccount.getBalance()); // Balance: 600

// This WON'T work - can't access private property directly
// console.log(privateAccount._balance); // Error!

/*
================================================================================
7. POLYMORPHISM - Same Method, Different Behavior
================================================================================

Polymorphism means "many forms". It's when different classes use the same
method but behave differently.

Simple Example:
---------------
Think of a "makeSound" method:
- Dog.makeSound() → "Woof!"
- Cat.makeSound() → "Meow!"
- Cow.makeSound() → "Moo!"

Same method name, different behavior!

Real-World Example:
-------------------
A "draw" method:
- In a Circle class: draws a circle
- In a Square class: draws a square
- In a Triangle class: draws a triangle
*/
// Base class
class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // Method that will be different for each shape
  draw(): void {
    console.log('Drawing a shape...');
  }
}

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  // Same method, different behavior!
  draw(): void {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
  }
}

class Square extends Shape {
  side: number;

  constructor(color: string, side: number) {
    super(color);
    this.side = side;
  }

  // Same method, different behavior!
  draw(): void {
    console.log(`Drawing a ${this.color} square with side ${this.side}`);
  }
}

const circle = new Circle('red', 5);
const square = new Square('blue', 10);

circle.draw(); // Drawing a red circle with radius 5
square.draw(); // Drawing a blue square with side 10

/*
================================================================================
8. ABSTRACTION - Hiding Complex Implementation
================================================================================

Abstraction means showing only the essential features while hiding the
complex details. It's like driving a car - you use pedals and steering wheel
without needing to understand the complex engine mechanics!

Simple Example:
---------------
A smartphone:
- You see: screen, buttons, apps (abstraction)
- You don't see: complex circuits, code, electrical signals

Real-World Example:
-------------------
When you send a text message:
- You type message and press send
- You DON'T need to know how it converts to signals, finds tower, etc.
*/
// Abstract class - defines what subclasses MUST have
abstract class Vehicle {
  // Abstract method - subclasses MUST implement this
  abstract start(): void;
  abstract stop(): void;

  // Regular method with default implementation
  honk(): void {
    console.log('Beep! Beep!');
  }
}

class CarVehicle extends Vehicle {
  brand: string = 'Generic Car';

  start(): void {
    console.log(`${this.brand} engine started with key ignition`);
  }

  stop(): void {
    console.log(`${this.brand} engine stopped`);
  }
}

class Motorcycle extends Vehicle {
  start(): void {
    console.log('Motorcycle started with kick or button');
  }

  stop(): void {
    console.log('Motorcycle stopped');
  }
}

const myCar = new CarVehicle();
myCar.start(); // Generic Car engine started with key ignition
myCar.honk(); // Beep! Beep!
myCar.stop(); // Generic Car engine stopped

const myBike = new Motorcycle();
myBike.start(); // Motorcycle started with kick or button
myBike.honk(); // Beep! Beep!
myBike.stop(); // Motorcycle stopped

/*
================================================================================
SUMMARY - OOP CONCEPTS IN A NUTSHELL
================================================================================

1. CLASS: A blueprint for creating objects (like a cookie cutter)
2. CONSTRUCTOR: The method that creates an actual object from the blueprint
3. PROPERTIES: Variables that store information about an object
4. METHODS: Functions that define what an object can do
5. INHERITANCE: When a class gets features from another class (child inherits from parent)
6. ENCAPSULATION: Hiding internal details and protecting data (like a capsule)
7. POLYMORPHISM: Same method name, different behavior (like many shapes)
8. ABSTRACTION: Hiding complex details, showing only what's necessary

Think of OOP like organizing a kitchen:
- CLASS: The recipe book
- OBJECT: An actual dish made from a recipe
- CONSTRUCTOR: The cooking process
- PROPERTIES: Ingredients
- METHODS: Cooking techniques
- INHERITANCE: A variation of a recipe
- ENCAPSULATION: A closed container protecting food
- POLYMORPHISM: Different dishes using the same technique
- ABSTRATION: Following a recipe without knowing the science

================================================================================
*/
