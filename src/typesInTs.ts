/**
 * Type inference in TypeScript
 * 
 * In TypeScript, when you declare a variable and assign it a value,
 * the compiler infers the type of the variable based on the assigned value.
 * This is known as type inference.
 * 
 * In the example below, the variable `drink` is assigned a string value 'chai'.
 * TypeScript infers the type of `drink` to be `string`. Therefore, if you try to assign a value of a different type
 * (e.g., a number) to `drink`, TypeScript will raise a type error.
 */

let drink = 'chai';

let cups = Math.random() > 0.5 ? 10 : 5;

let channelName = 'ChaiaurCode';

let chaiFlavour = 'Masala Chai'
chaiFlavour = 'Ginger tea'

/**Type annotations in TypeScript
 * 
 * Type annotations allow you to explicitly specify the type of a variable, function parameter, or return value.
 * This is useful when you want to ensure that a variable can only hold values of a specific type.
 * In the example below, the variable `age` is explicitly annotated with the type `number`.
 * This means that `age` can only hold numeric values, and assigning a value of a different type (e.g., a string)
 * will result in a type error.    
 */

let age: number = 25;

let isStudent: boolean = true;
// isStudent = 'yes'; // This will raise a type error

function greet(name: string): string {
    return `Hello, ${name}!`;
}