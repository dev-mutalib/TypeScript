//interface only makes the structure of object. They do not add data in it.

interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: 'masala',
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const shop: Shop = { id: 10, name: 'Cafe Chai' };

interface DiscountCalucator {
  (price: number): number;
}
const apply50: DiscountCalucator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log('Start');
  },
  stop() {
    console.log('Stop');
  },
};

//index signature

interface ChaiRating {
  [flavour: string]: number;
}

const rating: ChaiRating = {
  masala: 4.5,
  ginger: 5,
};

//if there are two interface with same name then they merge together
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Mutalib',
  age: 20,
  //You must write the value of both user interface to satisfy the conditon
};

//interface can be extended
interface A {
  a: string;
}
interface B {
  b: number;
}

interface C extends A, B {
  c: string;
} //inheriting the properties of both A & B interface's

const demon: C = {
  a: 'A',
  b: 1,
  c: 'C',
};
