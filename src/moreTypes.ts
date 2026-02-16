let response: any = '42';

let numericLength: number = (response as string).length;

/**
 * (response as string)  --> this is known as forcefull type assertion
 * It assert the type of variable forcefully.
 * Type assertion is a way to tell the TypeScript compiler:
 * “Treat this value as a specific type".
 * It only affects compile-time type checking.
 * It does not change the value at runtime.
 * Type assertion tells the compiler to treat a value as a specific type.
 * By doing so allow's the use of the Method's related to the datatype.
 */

type Book = {
  name: string;
};

let bookString = '{"name": "Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book; //asset the bookObject as string

console.log(bookObject);

// const InputElement = document.getElementById('username') as HTMLInputElement;

let value: any;
value = 'Chai';
value = [1, 2, 3];
value = 2.5;
// value.toUpperCase();

let newValue: unknown;
newValue = 'Chai';
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === 'string') {
  newValue.toUpperCase();
} else if (typeof newValue === 'number') {
  console.log(`newValue is  a 'number'`);
} else {
  console.log(`newValue is array`);
}

console.log(newValue);

/**
 * Type Checks in try-catch block
 */
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log('Error:', error);
}

const data: unknown = 'chai aur code';
const strData: string = data as string;
//If only data liye to wo error deta isliye data ko as a string lena padhta

/**
 *
 * @type never
 */

type Role = 'admin' | 'user';

function redirectBasedOnRole(role: Role): void {
  if (role === 'admin') {
    console.log('Redirecting to admin dashboard');
    return;
  }
  if (role === 'user') {
    console.log('Redirecting to user dashboard');
    return;
  }
  role; //here role's datatype is never 
}


/**
 * Some Functions are made to never stop working. 'never' Type is used there for the infinite loop of such Functions
 * 
 * for eg:- Server's that are constantly waiting for the next request to handle
 */

function neverReturn(): never {
     while(true){}
}