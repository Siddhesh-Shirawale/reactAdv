let a: number;
let b: boolean;
let c: string;

type User = {
  name: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: 'Siddhesh',
  lastName: 'Shirawale',
  age: 29,
  isAdmin: true,
};

type MathFunc = (a: number, b: number) => number;

// const mul = (a: number, b: number): number => a * b;
const mul: MathFunc = (a, b) => a * b; // Using types in above function

const sum: MathFunc = (a, b) => a + b;

/// Interface

interface Vehicle {
  name: string;
  model: number;
  company: string;
}

const truck: Vehicle = {
  name: 'Leyland',
  model: 2020,
  company: 'Ashok',
};

interface Car extends Vehicle {
  type: string;
}

// Or we can put type?: string in Vehicle interface

const car: Car = {
  name: 'Mustang',
  model: 2022,
  company: 'Ford',
  type: 'Sports',
};

// Parametric types with generics

let d: Array<string>;
// OR

// <T = defaultType>  OR only <T> but we can change later // We can take any letter instead of T
interface Insects<T = boolean> {
  name: string;
  canFly: T;
}

const insect1: Insects = {
  name: 'butterfly',
  canFly: true,
};
// Can change the generics
const insect2: Insects<number> = {
  name: 'Ant',
  canFly: 0,
};

// generics with functions

const insectsArray: Insects[] = [insect1, insect1];

function firstInsect(insectsArray: Insects[]): Insects {
  return insectsArray[0];
}
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
getFirst<Insects>(insectsArray);

/// Type Intersection

type PrimaryTeacher<> = {
  subject: string;
};

type SecondaryTeacher<T = boolean, S = number> = {
  class: number;
  alsoPrimary: T;
  standards?: S[];
};

// eslint-disable-next-line prettier/prettier
type SpecialTeacher<T = boolean, S = number> = PrimaryTeacher & SecondaryTeacher<T, S>; // Type intersection

const Ramesh: SpecialTeacher = {
  subject: 'Maths',
  standards: [4, 5, 6, 7, 8, 9, 10],
  class: 10,
  alsoPrimary: true,
};

/// Unknown, Never and Tuple

const logFunction = (data: unknown): never => {
  // never type our function never reach end point
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  throw new Error('Bad!');
};
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
logFunction(arr1);

// Tuple
type Role = 'admin' | 'user' | 'vendor';
type TupleRole = [Role, Role];

const userRole: TupleRole = ['admin', 'user'];

///////// Utility types

// readonly

type Laptop = {
  readonly name: string;
  generation?: number;
};
const asus: Laptop = {
  name: 'Scar',
  generation: 12,
};
// asus.name = 'Strix Scar'; // Cannot assign to 'name' because it is a read-only property

// Mark all readonly
type LaptopReadonly = Readonly<Laptop>;

// Mark all required
type LaptopRequired = Required<Laptop>; // So question mark in generation? will turn to required

// Mark Partial

type LaptopPartial = Partial<Laptop>; //Now all properties are optional

// Both readonly and required
type LaptopReadRequired = Readonly<Required<Laptop>>;

////////////////////////////////////////////////////////////////

interface DepartmentsForRoles {
  depName: string;
  lvl: number;
}

type PermissionsRequired = 'admin' | 'employee' | 'manager';

const DepsForRoles: Record<PermissionsRequired, DepartmentsForRoles> = {
  admin: {
    depName: 'FrontEnd',
    lvl: 10,
  },
  employee: {
    depName: 'Technical Support',
    lvl: 5,
  },
  manager: {
    depName: 'FrontEnd',
    lvl: 7,
  },
};

// Omit
type Bird = {
  name: string;
  color: number;
};

type OmitBirdColor = Omit<Bird, 'color'>; // color is removed from Bird as type

//Exclude from Union
type OmitManagerPermission = Exclude<PermissionsRequired, 'manager'>;

/////// Return Type

// type BasicFunction = () => string;
type BasicFunction = () => string[];

// type getFirstReturnType = ReturnType<() => string>;
type getFirstReturnType = ReturnType<BasicFunction>;

/////////////////////////////////// A S S I G N M E N T

// Types comparator
type Equals<A, B> = A extends B ? (B extends A ? 'success' : never) : never;

// Base type
type Person = {
  name: string;
  surname: string;
  isOnline: boolean;
  permissions: number[];
};

// Test 1

// Type that you need to make
type PersonWithNonRequired = {
  name?: string;
  surname?: string;
  isOnline?: boolean;
  permissions?: number[];
};

// Use UtilityTypes to make it equal PersonWithNonRequired
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type FixMePersonWithNonRequired = Partial<Person>;

// ShouldPass must be equal "success"
type ShouldPass = Equals<PersonWithNonRequired, FixMePersonWithNonRequired>;

// Test 2

type PartiallyPersonWithBoolPermissions = {
  name: string;
  surname?: string;
  isOnline?: boolean;
  permissions?: boolean[];
};

// Use UtilityTypes to make it equal PartiallyPersonWithBoolPermissions
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type FixMePartiallyPersonWithBoolPermissions =
  | Pick<Person, 'name'>
  | Partial<Pick<Person, 'permissions' | 'isOnline'>>
  | { permissions?: boolean[] };

// ShouldPass2 must be equal "success"
type ShouldPass2 = Equals<
  PartiallyPersonWithBoolPermissions,
  FixMePartiallyPersonWithBoolPermissions
>;
