/**
 * Union types in TypeScript
 *
 * Union types allow a variable to hold values of multiple types.
 * The pipe symbol (|) is used to define a union type.
 * In the example below, the variable `subscribers` can hold either a number or a string.
 */

let subscribers: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window';
airlineSeat = 'aisle';

const orders = ['12', '20', '28', '42'];

/**Using union type to allow variable to be string or undefined
 *
 * In the example below, the variable `currentOrder` is declared with a union type of `string | undefined`.
 * This means that `currentOrder` can either hold a string value or be undefined.
 * This is useful in scenarios where a variable may not have a value assigned initially.
 */

let currentOrder: string | undefined;

for (const order of orders) {
  if (order === '28') {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);

/* Any type in TypeScript
 * The `any` type is the most permissive type in TypeScript. A variable of type `any` can hold values of any type,
 * and TypeScript will not perform any type checking on it. This can be useful in certain scenarios, such as when
 * working with dynamic data or migrating JavaScript code to TypeScript. However, using `any` can also lead to
 * potential runtime errors, so it should be used sparingly and with caution.
 */

let randomValue: any = 10;
randomValue = 'Hello';
randomValue = true;
