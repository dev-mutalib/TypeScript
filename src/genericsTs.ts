//Both interface and generics are template.
//Generic makes the code reusable
//With generics we can pass different datatypes in the same function
// for eg:

function wrapInArray<Type>(item: Type): Type[] {
  return [item];
}

wrapInArray('Cup'); //string
wrapInArray(2); //number
wrapInArray(true); //boolean
wrapInArray(['masala', 'black Tea']); //array
wrapInArray({ name: 'User' }); //object

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair('masala', 'chai'); //string, string
pair('masala', 20); //string, number
pair(10, 'tea'); //number, string
pair({}, []); //object, array

//generic interface
interface Box<Type> {
  content: Type;
}

const numberBox1: Box<string> = { content: '10' };
const numberBox2: Box<number> = { content: 520 };

interface ApiPromise<Type> {
  status: number;
  data: Type;
}

const res: ApiPromise<{}> = {
     status: 200,
     data: {
          "name": "Abdul Mutalib",
          "_id": "Ue345D1157F54g",
          "message": "Hello"
     }
}

console.log(res)