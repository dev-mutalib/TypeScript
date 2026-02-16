const chaiFlavours: string[] = ['Masala', 'Adrak'];
const chaiPrice: number[] = [10, 20];

/**
 * You can define Array like this as well
 */
const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};

/* Array of object */

const menu: Chai[] = [
  { name: 'Masala', price: 15 },
  { name: 'Adrak', price: 20 },
];

/**
 * ReadOnly Array
 * Array that you can define it but not reassign it or modify it
 */

const cities: readonly string[] = ['Delhi', 'Jaipur'];

/* Multi-dimensional Array */

//For 2-dimensional Array
const table: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// Tuple - A fixed-size array with specific types at each position

// Example 1: Student information [name, age, grade]
const student: [string, number, string] = ['John', 20, 'A'];

// Example 2: Coordinate [x, y]
const coordinates: [number, number] = [10, 20];

// Example 3: Employee record [id, name, department, isActive]
const employee: [number, string, string, boolean] = [
  1,
  'Sarah',
  'Engineering',
  true,
];

// Accessing tuple elements
console.log(student[0]); // 'John'
console.log(coordinates[1]); // 20

// Destructuring tuples
const [name, age, grade] = student;
console.log(`${name} is ${age} years old and got grade ${grade}`);

// Key difference from array:
// - Array: let scores: number[] = [1, 2, 3, 4]; (any number of items)
// - Tuple: let coords: [number, number] = [1, 2]; (exactly 2 items)

//tuple with optional value
const userInfo: [string, number, boolean?] = ['Abdul Mutalib', 105];
console.log(userInfo);

//ReadOnly tuples
const location: readonly [string, number] = ['Nanded', 20.102121];
console.log(location);

//Named tuples
const user: [name: string, age: number] = ['Abdul Mutalib', 20];
console.log(user);

/* 
===========================================================================
ENUMS IN TYPESCRIPT - EXPLAINED IN SIMPLE LANGUAGE
===========================================================================

What is an Enum?
----------------
An enum (short for "enumeration") is a way to define a set of named constants.
Think of it like a list of related items that don't change - like days of the 
week, directions, or status types.

Why use Enums?
--------------
Instead of using magic numbers or strings throughout your code, enums let you
use meaningful names that make your code easier to read and maintain.

Example: Instead of doing this:
  status = 1  // What does 1 mean?

You can do this:
  status = OrderStatus.Active  // Much clearer!

===========================================================================
1. NUMERIC ENUMS
===========================================================================

Basic numeric enum - values start from 0 by default
*/

enum Direction {
  North, // 0
  South, // 1
  East, // 2
  West, // 3
}

// Using the enum
const myDirection: Direction = Direction.North;
console.log(myDirection); // Output: 0
console.log(Direction[0]); // Output: "North" (reverse mapping)

// Numeric enum with custom starting value
enum Status {
  Pending = 1,
  Active, // 2
  Completed, // 3
  Cancelled, // 4
}

const orderStatus: Status = Status.Active;
console.log(orderStatus); // Output: 2

// Numeric enum with custom values (not sequential)
enum Permission {
  Read = 4,
  Write = 2,
  Execute = 1,
}

const userPermission: Permission = Permission.Read;
console.log(userPermission); // Output: 4

/* 
===========================================================================
2. STRING ENUMS
===========================================================================

String enums - each member must have a string value
*/

enum DayOfWeek {
  Monday = 'MON',
  Tuesday = 'TUE',
  Wednesday = 'WED',
  Thursday = 'THU',
  Friday = 'FRI',
  Saturday = 'SAT',
  Sunday = 'SUN',
}

const today: DayOfWeek = DayOfWeek.Monday;
console.log(today); // Output: "MON"

// Practical example with mixed values
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
  BadRequest = 'Bad Request',
  Unauthorized = 'Unauthorized',
}

function getStatusMessage(status: HttpStatus): string {
  return `Status: ${status}`;
}

console.log(getStatusMessage(HttpStatus.OK)); // Output: "Status: 200"
console.log(getStatusMessage(HttpStatus.NotFound)); // Output: "Status: 404"

/* 
===========================================================================
3. CONST ENUMS
===========================================================================

Const enums are optimized - they get removed during compilation
Use 'const' keyword for better performance
*/

const enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

// During compilation, this gets inlined to: "RED"
const favoriteColor: Color = Color.Red;
console.log(favoriteColor); // Output: "RED"

/* 
===========================================================================
4. HETEROGENEOUS ENUMS (Mixed types)
===========================================================================

You can mix string and numeric values, but it's not recommended
*/

enum MixedEnum {
  No = 0,
  Yes = 'YES',
}

/* 
===========================================================================
5. PRACTICAL EXAMPLES
===========================================================================

Example 1: Order Processing System
*/

enum OrderStatus {
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCELLED',
}

const myOrder: OrderStatus = OrderStatus.Shipped;

// Check status with a function
function isOrderActive(status: OrderStatus): boolean {
  return status !== OrderStatus.Cancelled && status !== OrderStatus.Delivered;
}

console.log(`Order status: ${myOrder}`); // Output: "SHIPPED"
console.log(`Is active: ${isOrderActive(myOrder)}`); // Output: "true"

/* 
Example 2: User Roles
*/

enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Employee = 'EMPLOYEE',
  Guest = 'GUEST',
}

type User = {
  name: string;
  role: UserRole;
};

const users: User[] = [
  { name: 'Alice', role: UserRole.Admin },
  { name: 'Bob', role: UserRole.Employee },
  { name: 'Charlie', role: UserRole.Guest },
];

function hasAdminAccess(role: UserRole): boolean {
  return role === UserRole.Admin;
}

users.forEach((user) => {
  const access: string = hasAdminAccess(user.role)
    ? 'Full Access'
    : 'Limited Access';
  console.log(`${user.name} (${user.role}): ${access}`);
});

/* 
Example 3: Game States
*/

enum GameState {
  NotStarted = 'NOT_STARTED',
  Playing = 'PLAYING',
  Paused = 'PAUSED',
  GameOver = 'GAME_OVER',
}

let currentState: GameState = GameState.NotStarted;

function startGame(): void {
  currentState = GameState.Playing;
  console.log('Game started!');
}

function pauseGame(): void {
  currentState = GameState.Paused;
  console.log('Game paused!');
}

function endGame(): void {
  currentState = GameState.GameOver;
  console.log('Game over!');
}

// Using the game states
console.log(`Initial state: ${currentState}`); // "NOT_STARTED"
startGame();
console.log(`Current state: ${currentState}`); // "PLAYING"
pauseGame();
console.log(`Current state: ${currentState}`); // "PAUSED"
endGame();
console.log(`Current state: ${currentState}`); // "GAME_OVER"

/* 
===========================================================================
KEY POINTS TO REMEMBER
===========================================================================

1. Enums help you organize related constant values with meaningful names
2. Numeric enums auto-increment (0, 1, 2...) unless you set starting value
3. String enums are more human-readable but require explicit values
4. Use 'const enum' for better performance (inlined at compile time)
5. Enums are great for representing fixed sets of options like:
   - Days of week
   - Status values
   - User roles
   - Direction
   - Colors
   - HTTP status codes

===========================================================================
*/
