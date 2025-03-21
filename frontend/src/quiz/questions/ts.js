export const easyLevel = [
    {
        question: "What is TypeScript?",
        option1: "A JavaScript library",
        option2: "A superset of JavaScript",
        option3: "A database management system",
        option4: "A CSS framework",
        ans: "A superset of JavaScript"
    },
    {
        question: "Which extension is used for TypeScript files?",
        option1: ".js",
        option2: ".jsx",
        option3: ".ts",
        option4: ".tsx",
        ans: ".ts"
    },
    {
        question: "Which keyword is used to define a variable in TypeScript?",
        option1: "let",
        option2: "var",
        option3: "const",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How do you define a number type variable in TypeScript?",
        option1: "let num: number = 10;",
        option2: "let num = number 10;",
        option3: "number num = 10;",
        option4: "num: number = 10;",
        ans: "let num: number = 10;"
    },
    {
        question: "Which TypeScript feature allows defining types for function parameters?",
        option1: "Type Inference",
        option2: "Type Annotations",
        option3: "TypeScript does not support this",
        option4: "Dynamic Typing",
        ans: "Type Annotations"
    },
    {
        question: "How do you define an array of strings in TypeScript?",
        option1: "let arr: string[] = ['a', 'b', 'c'];",
        option2: "let arr: [string] = ['a', 'b', 'c'];",
        option3: "let arr: array<string> = ['a', 'b', 'c'];",
        option4: "let arr: {string} = ['a', 'b', 'c'];",
        ans: "let arr: string[] = ['a', 'b', 'c'];"
    },
    {
        question: "Which TypeScript feature allows defining custom data structures?",
        option1: "Interfaces",
        option2: "Classes",
        option3: "Types",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "What will be the output of the following TypeScript code?\n```typescript\nlet a: any = 10;\nconsole.log(a.toUpperCase());\n```",
        option1: "10",
        option2: "Error",
        option3: "undefined",
        option4: "'10' in uppercase",
        ans: "Error"
    },
    {
        question: "How do you define a function in TypeScript?",
        option1: "function add(a: number, b: number): number { return a + b; }",
        option2: "def add(a: number, b: number): number { return a + b; }",
        option3: "add = function(a: number, b: number): number { return a + b; }",
        option4: "let add: function(a, b) -> number { return a + b; }",
        ans: "function add(a: number, b: number): number { return a + b; }"
    },
    {
        question: "What does the 'readonly' keyword do in TypeScript?",
        option1: "Prevents a property from being modified after initialization",
        option2: "Makes a variable constant",
        option3: "Defines a getter-only property",
        option4: "Ensures a property is private",
        ans: "Prevents a property from being modified after initialization"
    },
    {
        question: "How do you enable strict type checking in TypeScript?",
        option1: "Using 'strict: true' in tsconfig.json",
        option2: "Using '--strict' flag when compiling",
        option3: "Both 1 and 2",
        option4: "TypeScript does not support strict checking",
        ans: "Both 1 and 2"
    },
    {
        question: "Which utility type makes all properties of an object optional?",
        option1: "Required<T>",
        option2: "Partial<T>",
        option3: "Readonly<T>",
        option4: "Pick<T, K>",
        ans: "Partial<T>"
    },
    {
        question: "What is the default visibility of class members in TypeScript?",
        option1: "public",
        option2: "private",
        option3: "protected",
        option4: "readonly",
        ans: "public"
    },
    {
        question: "Which TypeScript keyword is used to inherit from a class?",
        option1: "inherits",
        option2: "extends",
        option3: "implements",
        option4: "super",
        ans: "extends"
    },
    {
        question: "How do you define a tuple in TypeScript?",
        option1: "let user: [string, number] = ['Alice', 25];",
        option2: "let user = ['Alice', 25];",
        option3: "let user: tuple = ['Alice', 25];",
        option4: "let user: (string, number) = ['Alice', 25];",
        ans: "let user: [string, number] = ['Alice', 25];"
    },
    {
        question: "How do you compile a TypeScript file?",
        option1: "tsc filename.ts",
        option2: "node filename.ts",
        option3: "typescript filename.ts",
        option4: "npm start filename.ts",
        ans: "tsc filename.ts"
    },
    {
        question: "Which of the following is true about interfaces in TypeScript?",
        option1: "They can define object shapes",
        option2: "They support optional properties",
        option3: "They allow method signatures",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following TypeScript types allows values of any type?",
        option1: "string",
        option2: "any",
        option3: "number",
        option4: "boolean",
        ans: "any"
    },
    {
        question: "How do you install TypeScript globally using npm?",
        option1: "npm install typescript",
        option2: "npm install -g typescript",
        option3: "tsc install",
        option4: "install typescript globally",
        ans: "npm install -g typescript"
    },
    {
        question: "Which of the following statements about TypeScript is false?",
        option1: "TypeScript is developed by Microsoft",
        option2: "TypeScript supports static typing",
        option3: "TypeScript can be directly run in a browser",
        option4: "TypeScript can be compiled to JavaScript",
        ans: "TypeScript can be directly run in a browser"
    }
];

export const mediumLevel = [
    {
        question: "What is the correct way to define a union type in TypeScript?",
        option1: "let value: string | number;",
        option2: "let value: (string, number);",
        option3: "let value: [string, number];",
        option4: "let value = string | number;",
        ans: "let value: string | number;"
    },
    {
        question: "What does the 'never' type represent in TypeScript?",
        option1: "A type that never holds any value",
        option2: "A type for functions that never return",
        option3: "A type that represents undefined values",
        option4: "Both 1 and 2",
        ans: "Both 1 and 2"
    },
    {
        question: "How can you ensure a function parameter cannot be null in TypeScript?",
        option1: "Use 'strictNullChecks' in tsconfig.json",
        option2: "Use the '!' non-null assertion",
        option3: "Explicitly check for null before using the value",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which TypeScript utility type makes all properties of an object required?",
        option1: "Partial<T>",
        option2: "Required<T>",
        option3: "Readonly<T>",
        option4: "Pick<T, K>",
        ans: "Required<T>"
    },
    {
        question: "What is the difference between 'type' and 'interface' in TypeScript?",
        option1: "'interface' is extendable while 'type' is not",
        option2: "'type' is used for functions, 'interface' is used for objects",
        option3: "They are completely identical",
        option4: "'interface' can be merged, 'type' cannot",
        ans: "'interface' can be merged, 'type' cannot"
    },
    {
        question: "How do you define a readonly array in TypeScript?",
        option1: "const arr: readonly number[] = [1, 2, 3];",
        option2: "const arr: number[] = readonly [1, 2, 3];",
        option3: "readonly const arr: number[] = [1, 2, 3];",
        option4: "const arr: number readonly [] = [1, 2, 3];",
        ans: "const arr: readonly number[] = [1, 2, 3];"
    },
    {
        question: "Which of the following TypeScript features supports multiple inheritances?",
        option1: "Classes",
        option2: "Interfaces",
        option3: "Types",
        option4: "All of the above",
        ans: "Interfaces"
    },
    {
        question: "How do you prevent object properties from being changed in TypeScript?",
        option1: "Using 'readonly' keyword",
        option2: "Using 'const' when defining the object",
        option3: "Using 'Object.freeze()'",
        option4: "Both 1 and 3",
        ans: "Both 1 and 3"
    },
    {
        question: "How do you enforce that an object has a specific set of properties?",
        option1: "Using an interface",
        option2: "Using a type alias",
        option3: "Both 1 and 2",
        option4: "It is not possible in TypeScript",
        ans: "Both 1 and 2"
    },
    {
        question: "What will be the output of the following TypeScript code?\n```typescript\nlet message: string | null = null;\nconsole.log(message.length);\n```",
        option1: "0",
        option2: "null",
        option3: "Runtime error",
        option4: "Undefined",
        ans: "Runtime error"
    },
    {
        question: "Which TypeScript feature allows type safety while working with dynamic objects?",
        option1: "Generics",
        option2: "Enums",
        option3: "Type Assertion",
        option4: "Type Guards",
        ans: "Type Guards"
    },
    {
        question: "What is the correct syntax for defining a generic function in TypeScript?",
        option1: "function identity<T>(arg: T): T { return arg; }",
        option2: "function identity(arg: T): T { return arg; }",
        option3: "function identity<T>(arg): T { return arg; }",
        option4: "function identity<T>(arg: T) { return arg; }",
        ans: "function identity<T>(arg: T): T { return arg; }"
    },
    {
        question: "Which TypeScript utility type removes 'readonly' from object properties?",
        option1: "Partial<T>",
        option2: "Required<T>",
        option3: "Mutable<T>",
        option4: "Mutable<T> is not a standard utility",
        ans: "Mutable<T> is not a standard utility"
    },
    {
        question: "How can you create a mapped type in TypeScript?",
        option1: "Using 'keyof' and 'in'",
        option2: "Using 'extends' and 'implements'",
        option3: "Using 'typeof' and 'instanceof'",
        option4: "Using 'map<T>' function",
        ans: "Using 'keyof' and 'in'"
    },
    {
        question: "Which TypeScript utility type picks specific properties from an object?",
        option1: "Partial<T>",
        option2: "Omit<T, K>",
        option3: "Pick<T, K>",
        option4: "Extract<T>",
        ans: "Pick<T, K>"
    },
    {
        question: "What does the '!' operator do in TypeScript?",
        option1: "Asserts a value is not null or undefined",
        option2: "Negates a boolean value",
        option3: "Marks a variable as a required field",
        option4: "Declares a variable",
        ans: "Asserts a value is not null or undefined"
    },
    {
        question: "What is the purpose of 'declare' keyword in TypeScript?",
        option1: "To define a variable without assigning a value",
        option2: "To declare ambient types for external JavaScript libraries",
        option3: "To specify that a variable should be globally available",
        option4: "To create a TypeScript interface",
        ans: "To declare ambient types for external JavaScript libraries"
    },
    {
        question: "How do you ensure a TypeScript function always returns a string?",
        option1: "function greet(): string { return 'Hello'; }",
        option2: "function greet(): 'string' { return 'Hello'; }",
        option3: "function greet() { return 'Hello' as string; }",
        option4: "function greet() -> string { return 'Hello'; }",
        ans: "function greet(): string { return 'Hello'; }"
    },
    {
        question: "How do you define an optional function parameter in TypeScript?",
        option1: "function greet(name?: string) {}",
        option2: "function greet(?name: string) {}",
        option3: "function greet(name: string | optional) {}",
        option4: "function greet(name: string = undefined) {}",
        ans: "function greet(name?: string) {}"
    }
];

export const hardLevel = [
    {
        question: "What will be the output of the following TypeScript code?\n```typescript\ntype A = { x: number };\ntype B = { y: string };\ntype C = A & B;\nconst obj: C = { x: 10 };\nconsole.log(obj);\n```",
        option1: "{ x: 10 }",
        option2: "Compilation Error",
        option3: "{ x: 10, y: undefined }",
        option4: "{ x: 10, y: '' }",
        ans: "Compilation Error"
    },
    {
        question: "Which TypeScript feature allows you to define object properties with computed keys?",
        option1: "Mapped Types",
        option2: "Index Signatures",
        option3: "Template Literal Types",
        option4: "Computed Property Names",
        ans: "Computed Property Names"
    },
    {
        question: "What is the correct way to infer return types using TypeScript conditional types?",
        option1: "`type InferReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`",
        option2: "`type InferReturnType<T> = T extends () => infer R ? R : any;`",
        option3: "`type InferReturnType<T> = T extends Function ? infer R : never;`",
        option4: "`type InferReturnType<T> = T extends (args: any[]) => infer R ? R : undefined;`",
        ans: "`type InferReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`"
    },
    {
        question: "What is a key characteristic of a discriminated union in TypeScript?",
        option1: "It consists of objects that share a common property",
        option2: "It prevents type narrowing",
        option3: "It allows multiple interfaces to be merged",
        option4: "It does not support type safety",
        ans: "It consists of objects that share a common property"
    },
    {
        question: "Which TypeScript feature ensures that function overloading maintains type safety?",
        option1: "Function signatures",
        option2: "Literal types",
        option3: "Generic constraints",
        option4: "Tuple types",
        ans: "Function signatures"
    },
    {
        question: "What will be the output of the following TypeScript code?\n```typescript\ntype T1 = { a: string };\ntype T2 = { a: number };\ntype T3 = T1 & T2;\nconst obj: T3 = { a: 'hello' };\nconsole.log(obj);\n```",
        option1: "{ a: 'hello' }",
        option2: "Compilation Error",
        option3: "{ a: 42 }",
        option4: "Runtime Error",
        ans: "Compilation Error"
    },
    {
        question: "What does 'satisfies' do in TypeScript?",
        option1: "Ensures an expression conforms to a type without altering its inferred type",
        option2: "Forces a value to match a type exactly",
        option3: "Performs runtime validation of types",
        option4: "Replaces type assertions",
        ans: "Ensures an expression conforms to a type without altering its inferred type"
    },
    {
        question: "Which TypeScript utility type allows you to exclude certain keys from a type?",
        option1: "Pick<T, K>",
        option2: "Omit<T, K>",
        option3: "Exclude<T, K>",
        option4: "Extract<T, K>",
        ans: "Omit<T, K>"
    },
    {
        question: "What is the correct way to create a strongly-typed tuple that enforces a structure?",
        option1: "`const tuple: [string, number] = ['hello', 42];`",
        option2: "`const tuple: [string, number, boolean] = ['hello', 42];`",
        option3: "`const tuple: (string | number)[] = ['hello', 42];`",
        option4: "`const tuple: readonly [string, number] = ['hello', 42];`",
        ans: "`const tuple: [string, number] = ['hello', 42];`"
    },
    {
        question: "Which TypeScript feature allows type narrowing inside conditional checks?",
        option1: "Type Guards",
        option2: "Union Types",
        option3: "Type Assertions",
        option4: "Type Aliases",
        ans: "Type Guards"
    },
    {
        question: "Which of the following statements about TypeScript enums is correct?",
        option1: "Enums can only hold numeric values",
        option2: "Enums are type-safe and prevent invalid values",
        option3: "Enums cannot be iterated over",
        option4: "Enums must have explicit values assigned",
        ans: "Enums are type-safe and prevent invalid values"
    },
    {
        question: "What does 'infer' do in a conditional type?",
        option1: "Infers the type of a variable at runtime",
        option2: "Extracts a type from a generic parameter",
        option3: "Prevents type widening",
        option4: "Restricts a variable to a specific set of values",
        ans: "Extracts a type from a generic parameter"
    },
    {
        question: "How does TypeScript handle excess properties in object literals?",
        option1: "It throws a runtime error",
        option2: "It allows the object but ignores extra properties",
        option3: "It gives a compile-time error if no index signature exists",
        option4: "It allows extra properties only for interfaces",
        ans: "It gives a compile-time error if no index signature exists"
    },
    {
        question: "What is the key difference between 'keyof' and 'typeof' in TypeScript?",
        option1: "'keyof' extracts the keys of an object type, while 'typeof' retrieves the runtime type",
        option2: "'typeof' extracts the keys of an object type, while 'keyof' retrieves the runtime type",
        option3: "Both are the same in TypeScript",
        option4: "Neither can be used in type manipulation",
        ans: "'keyof' extracts the keys of an object type, while 'typeof' retrieves the runtime type"
    },
    {
        question: "Which statement best describes TypeScript declaration merging?",
        option1: "Interfaces with the same name are automatically merged",
        option2: "Classes with the same name are merged",
        option3: "Types and interfaces can merge",
        option4: "Only functions can merge declarations",
        ans: "Interfaces with the same name are automatically merged"
    }
];
