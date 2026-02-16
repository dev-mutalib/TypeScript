const chai = {
  name: 'Masala Chai',
  price: 20,
  isHot: true,
};

/* {
  name: string;
  price: number;
  isHot: boolean;
}; 
 * TypeScript to this behind the scene
*/

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: 'Masala Chai',
  price: 20,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[]; //in TypeScript array this 'string[]' denote as array
};

const adrakChai: Tea = {
  name: 'Adrak Chai',
  price: 30,
  ingredients: ['ginger', 'tea leaves'],
};

type Cup = { size: string };
let samllCup: Cup = { size: '200ml' };
let bigCup = { size: '500ml', material: 'Steel' };

samllCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 4, beans: 'Arabica' };
const chaiBrew: Brew = coffee;

/**
 * @desc
 * TypeScript checks if an object has at least the required properties with compatible types. It doesn't care about extra properties.
 *
 * This is called structural typing or duck typing
 */

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: 'Abdul Mutalib',
  password: 'abdul@123',
};

/* Splitting data types */
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  item: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

/**
 * "Partial" type make's allows the updation or usage of a single property in types
 * "Partial<Chai>" ==> means passing "Chai" data type in "Partial" data type
 *
 * for eg:-
 */

const updateChai = (updates: Partial<Chai>) => {
  console.log('updating chai with', updates);
};

updateChai({ price: 25 }); //It allows a single value
updateChai({ isHot: false });
updateChai({}); // It also allows the empty object

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

/**
 * By using "Required" type, it make compulsory to have all properties in function
 */

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({ name: 'Abdul', quantity: 40 });

type Coffee = {
  name: string;
  price: number;
  isHot: boolean;
  ingredient: string[];
};

/**
 * "Pick" allow karta hai unhi properties pick karne ka jinse hame kaam hai.
 * We get to decide which data to pick or not
 */

type BasicChaiInfo = Pick<Coffee, 'name' | 'price'>;

const ChaiInfo: BasicChaiInfo = {
  name: 'lemon tea',
  price: 30,
};

/**
 * "Omit" secret or koi ek property ko Omit/remove karke kaam ata hai
 */

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredient: string[];
};

type PublicChai = Omit<NewChai, 'secretIngredient'>;
