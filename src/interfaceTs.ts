/**
 * @interface
 * An interface defines the shape (structure) of an object.
 *
 * It specifies:
 *  > What properties an object must have
 *  > Their types
 *  > Optional properties
 *  > Method signatures
 *
 * It is used only at compile time for type checking.
 */

// This is interface
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Abdul Mutalib',
  age: 20,
};

console.log(user);

/**
 * With interface You can reuse structure
 * It inforces structure. Making it ideal for repeated usage
 */

//Interface with Optional properties
interface Product {
  name: string;
  price: number;
  description?: string;
}
//description here is Optional because of '?'

//Interface with Readonly property
interface Account {
  readonly id: number;
  balace: number;
}

//Interface with function
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;

//Interface with Method
interface Person {
  name: string;
  greet(): void;
}

const User: Person = {
  name: 'Abdul',
  greet() {
    console.log('Hello');
  },
};
