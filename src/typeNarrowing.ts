/**Type Narrowing
 *
 * Type narrowing is the process of narrowing down the type of a variable based on the value it holds.
 */

function getChai(kind: string | number) {
  if (typeof kind === 'string') {
    return `I like ${kind} Chai`;
  }
  return `I like ${kind} cups of Chai`;
}

console.log(getChai('Masala'));
console.log(getChai(10));

/**Using type narrowing to check if a variable is undefined
 *
 * In the example below, the function `serveChai` is declared with a parameter `msg` of type `string | undefined`.
 * This means that `msg` can either hold a string value or be undefined.
 * The function checks if `msg` is undefined and returns a different message accordingly.
 * "?" is used to make the parameter optional
 */
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `No message provided`;
}

console.log(serveChai(undefined));

//doing exhaustive checking of the type of the variable

function orderChai(size: 'small' | 'medium' | 'large' | number) {
  if (typeof size === 'number') {
    return `Serving ${size} cups of Chai`;
  }
  return `Serving ${size} Chai`;
}
console.log(orderChai('small'));

/* Using instance of to check the type of the variable */

class KulhadChai {
  serve() {
    return 'Serving Kulhad Chai';
  }
}
class Cutting {
  serve() {
    return 'Serving Cutting Chai';
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
  return chai.serve();
}
console.log(serve(new Cutting()));

/* Using type guards to check the type of the variable

 * Type guards are functions that return a boolean value and are used to check the type of a variable.
 * In the example below, the function `isChaiOrder` is declared with a parameter `obj` of type `any`.
 * This means that `obj` can be of any type.
 * The function checks if `obj` is an object and has a `type` property of type `string` and a `quantity` property of type `number`.
 * If `obj` is an object and has a `type` property of type `string` and a `quantity` property of type `number`, the function returns `true`.
 * Otherwise, the function returns `false`.
 */

type ChaiOrder = {
  type: string;
  quantity: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.type === 'string' &&
    typeof obj.quantity === 'number'
  );
}

function serveOrder(order: ChaiOrder | string) {
  if (isChaiOrder(order)) {
    return `Serving ${order.type} ${order.quantity} cups of Chai`;
  }
  return `Serving ${order} Chai`;
}

const order = serveOrder({ type: 'Masala', quantity: 2 });
console.log(order);

type MasalaChai = { type: 'Masala'; spicelevel: number };
type GingerChai = { type: 'ginger'; amount: number };
type ElaichiChai = { type: 'elaichi'; quantity: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case 'Masala':
      return 'Masala Chai';
      break;
    case 'ginger':
      return 'Ginger Chai';
      break;
    case 'elaichi':
      return 'Elaichi Chai';
      break;
    default:
      return 'Invalid Input';
      break;
  }
}

const Order = MakeChai({ type: 'elaichi', quantity: 10 });
console.log(Order);

function brew(order: MasalaChai | GingerChai) {
  if ('spicelevel' in order) {
    return `Brew 'Masala Chai'`;
  } else {
    return `Brew 'Ginger Chai'`;
  }
}

const result = brew({ type: 'Masala', spicelevel: 10 });
console.log(result);

