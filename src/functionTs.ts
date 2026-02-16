/**
 * In the makeChai(). It accepts the argument that are in string and number datatype.
 */
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai('Masala', 2);

/**
 * getChaiPrice(): number {}. This statement define's that the function is expecting a number in return
 */

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

/**
 * Void type does not return any datatype.
 * Mainly used for log type function's.
 * Used if the function is not returning any type of data
 */
function logChai(): void {
  console.log('Hello from function with void type');
}

/**
 * Function's with Optional parameter's.
 * '?' is used to represent if Optional.
 * mainly optional parameter's are written in the END of the function. It is a industry standart practice
 */

function orderChai(type?: string) {}

function createChai(order: {
  type: string;
  sugar: number;
  size: 'small' | 'large';
}): number {
  return 4;
}
