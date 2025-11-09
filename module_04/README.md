## `Types` vs. `Interfaces`: Differences

In TypeScript, both `types` and `interfaces` allow you to define the shape of data, but they have subtle differences that affect when and how you should use them.

### `type`

- A type is a versatile way to define a new type alias for any valid TypeScript type (primitive, union, tuple, object, etc.).
- Can represent primitives, objects, arrays, tuples, unions, intersections, and more.
- Cannot be reopened to add new properties (unlike interface).

```typescript
// Primitive type alias
type myString = string;

// Object type
type Car = {
  name: string;
  year: number;
};

// Union type
type Skill = "html" | "css" | "javascript" | "typescript" | "python" | "go";

// Intersection type
type Person = { name: string; age: number };
type Employee = { employeeId: number; skills: Skill[] };
type Staff = Person & Employee;

const user1: Staff = {
  name: "Juliett",
  age: 31,
  employeeId: 300,
  skills: ["css", "python"],
};
```

#### ✅ Key advantages of type:

- Can create `unions` and `intersections`.
- Can alias any `type`, not just objects.
- Great for complex type manipulations.

### `Interface`

- Primarily used to define object shapes (properties and methods).
- Can be extended using extends or merged (declaration merging allows adding new properties later).

```typescript
interface User {
  id: number;
  name: string;
}

// Extending an interface
interface Employee extends User {
  employeeId: number;
  skills: Skill[];
}

const user2: Employee = {
  id: 1,
  name: "Alice",
  employeeId: 100,
  skills: ["typescript", "javascript"],
};
```

## `Union` and `Intersection` types in TypeScript

```typescript
// Union type: a role can be either "admin", "editor", or "viewer"
type Role = "admin" | "editor" | "viewer";

// Object type for basic user info
type User = {
  name: string;
  age: number;
};

// Object type for employee details
type Employee = {
  employeeId: number;
  skills: string[];
};

// Intersection type: an AdminEmployee must have properties of both User and Employee
type AdminEmployee = User & Employee & { role: Role };

// Example usage
const admin1: AdminEmployee = {
  name: "Alice",
  age: 28,
  employeeId: 101,
  skills: ["typescript", "react"],
  role: "admin", // union type ensures role is restricted to valid options
};

const editor1: AdminEmployee = {
  name: "Bob",
  age: 35,
  employeeId: 102,
  skills: ["css", "javascript"],
  role: "editor",
};
```

### ✅ Explanation:

### `Union` Type (Role)

- Limits the role property to specific values ("admin" | "editor" | "viewer").

### `Intersection` Type (AdminEmployee)

- Combines User + Employee + a role property.
- Ensures the object has all properties from multiple types.
- This pattern is useful for modeling complex objects like users in a system with different roles and attributes.
