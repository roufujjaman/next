### `Types` `Interfaces` Diffrences

They are very similar in nature for most cases aslo they have some diffrances.

`type` in TypeScript is to define data type of any basic type to object.
also alias any types. `type` can be used for any single or miltiple primitive type including all TypeScript types and objects.

```typescript
type myString = string;

type myCar = {
  name: string;
  year: number;
};
```

`interface` in TypeScript is to defaine only object construct. Although, object can be defined by both `type` and `interface`.

```typescript
interface User = {
  id: number;
  name: string;
}
```

### `union` and `intersection` `types` in TypeScript

`union` esample

```typescript
// union type
type Skill = "html" | "css" | "javascript" | "typescript" | "python" | "go";
const developer1: Skill = "python";
```

```typescript
// intersection types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  skill: Skill[];
};

type Staff = Person & Employee;

const user1: Staff = {
  name: "Juliett",
  age: 31,
  employeeId: 300,
  skill: ["css", "python"],
};
```
