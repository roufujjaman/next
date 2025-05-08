### `Types` vs. `Interfaces`: Differences

While `types` and `interfaces` in TypeScript share similarities in many use cases, they also have distinct differences.

In TypeScript, a `type` is used to define the data type of any basic type or object. It can also serve as an alias for existing types. Essentially, `type` can represent any single or multiple primitive types, including all TypeScript types and objects.

```typescript
type myString = string;

type myCar = {
  name: string;
  year: number;
};
```

An `interface` in TypeScript, on the other hand, is primarily used to define the structure of objects. Although both type and `interface` can be used to describe objects, `interface` has some unique capabilities and is generally preferred for defining the shape of objects.

```typescript
interface User {
  id: number;
  name: string;
}
```

### `union` and `intersection` `types` in TypeScript

`union` example:

```typescript
// union type
type Skill = "html" | "css" | "javascript" | "typescript" | "python" | "go";
const developer1: Skill = "python";
```

`intersection` example:

```typescript
// intersection type
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  skill: Skill[];
};

type Staff = Person & Employee;

// Since Staff is an intersection of Person and Employee, the user1: Staff object must contain all the fields from both types.
const user1: Staff = {
  name: "Juliett",
  age: 31,
  employeeId: 300,
  skill: ["css", "python"],
};
```
