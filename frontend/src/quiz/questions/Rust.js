export const easyLevel = [
    {
        question: "What is Rust primarily known for?",
        option1: "Garbage collection",
        option2: "Memory safety without garbage collection",
        option3: "Dynamic typing",
        option4: "Slow execution speed",
        ans: "Memory safety without garbage collection"
    },
    {
        question: "Which keyword is used to define a function in Rust?",
        option1: "def",
        option2: "function",
        option3: "fn",
        option4: "func",
        ans: "fn"
    },
    {
        question: "What is the correct way to declare a mutable variable in Rust?",
        option1: "let mut x = 10;",
        option2: "mut let x = 10;",
        option3: "let x = mut 10;",
        option4: "mutable x = 10;",
        ans: "let mut x = 10;"
    },
    {
        question: "What does `println!(\"Hello, world!\");` do?",
        option1: "Prints Hello, world! to the console",
        option2: "Declares a variable",
        option3: "Creates a new function",
        option4: "Defines a macro",
        ans: "Prints Hello, world! to the console"
    },
    {
        question: "Which of the following is NOT a valid Rust data type?",
        option1: "i32",
        option2: "f64",
        option3: "boolean",
        option4: "char",
        ans: "boolean"
    },
    {
        question: "How do you create a constant in Rust?",
        option1: "const VALUE = 10;",
        option2: "constant VALUE = 10;",
        option3: "let VALUE = 10;",
        option4: "value const = 10;",
        ans: "const VALUE = 10;"
    },
    {
        question: "Which keyword is used to return a value from a function in Rust?",
        option1: "return",
        option2: "ret",
        option3: "yield",
        option4: "None, Rust implicitly returns the last expression",
        ans: "None, Rust implicitly returns the last expression"
    },
    {
        question: "How do you declare an array in Rust?",
        option1: "let arr = [1, 2, 3, 4, 5];",
        option2: "let arr = (1, 2, 3, 4, 5);",
        option3: "let arr = {1, 2, 3, 4, 5};",
        option4: "array arr = [1, 2, 3, 4, 5];",
        ans: "let arr = [1, 2, 3, 4, 5];"
    },
    {
        question: "What does `cargo build` do?",
        option1: "Runs the Rust program",
        option2: "Compiles the Rust program",
        option3: "Formats the Rust code",
        option4: "Installs Rust libraries",
        ans: "Compiles the Rust program"
    },
    {
        question: "How do you create a new Rust project using Cargo?",
        option1: "cargo create project_name",
        option2: "cargo new project_name",
        option3: "rust new project_name",
        option4: "rustc create project_name",
        ans: "cargo new project_name"
    },
    {
        question: "Which operator is used for borrowing in Rust?",
        option1: "&",
        option2: "*",
        option3: "->",
        option4: "#",
        ans: "&"
    },
    {
        question: "What is the default integer type in Rust?",
        option1: "i8",
        option2: "u32",
        option3: "i32",
        option4: "i64",
        ans: "i32"
    },
    {
        question: "Which keyword is used to define a structure in Rust?",
        option1: "struct",
        option2: "class",
        option3: "object",
        option4: "interface",
        ans: "struct"
    },
    {
        question: "What is the purpose of the `match` keyword in Rust?",
        option1: "To define loops",
        option2: "To handle pattern matching",
        option3: "To declare variables",
        option4: "To create classes",
        ans: "To handle pattern matching"
    },
    {
        question: "What does `vec![]` do in Rust?",
        option1: "Creates an empty vector",
        option2: "Creates an empty array",
        option3: "Creates a tuple",
        option4: "Creates a struct",
        ans: "Creates an empty vector"
    },
    {
        question: "Which trait is implemented to allow a type to be printed using `println!`?",
        option1: "Display",
        option2: "Printable",
        option3: "ToString",
        option4: "Debug",
        ans: "Display"
    },
    {
        question: "What is the output of `println!(\"{} {}\", 5, 10);`?",
        option1: "5 10",
        option2: "10 5",
        option3: "Error",
        option4: "{} {}",
        ans: "5 10"
    },
    {
        question: "How do you declare a function that takes two integers and returns their sum in Rust?",
        option1: "fn sum(x: i32, y: i32) -> i32 { x + y }",
        option2: "def sum(x, y): return x + y",
        option3: "function sum(x, y) { return x + y }",
        option4: "fn sum(x: i32, y: i32) { return x + y }",
        ans: "fn sum(x: i32, y: i32) -> i32 { x + y }"
    },
    {
        question: "Which of the following is NOT a valid loop in Rust?",
        option1: "loop { ... }",
        option2: "while condition { ... }",
        option3: "for i in 0..10 { ... }",
        option4: "repeat { ... }",
        ans: "repeat { ... }"
    },
    {
        question: "What is ownership in Rust?",
        option1: "A feature that ensures memory safety without garbage collection",
        option2: "A method for defining classes",
        option3: "A way to access global variables",
        option4: "A keyword used for referencing variables",
        ans: "A feature that ensures memory safety without garbage collection"
    }
];

export const mediumLevel = [
    {
        question: "Which feature of Rust ensures memory safety without a garbage collector?",
        option1: "Ownership",
        option2: "Smart Pointers",
        option3: "Borrow Checker",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How do you explicitly return a value in Rust?",
        option1: "Use the `return` keyword",
        option2: "Make the last expression in the function body the return value",
        option3: "Use `return` or implicit return",
        option4: "Rust does not allow returning values",
        ans: "Use `return` or implicit return"
    },
    {
        question: "Which of the following is NOT a valid way to declare a tuple in Rust?",
        option1: "let t = (1, \"Hello\", 3.5);",
        option2: "let t = (1, 2, 3);",
        option3: "let t = [1, 2, 3];",
        option4: "let t: (i32, f64, char) = (10, 2.5, 'c');",
        ans: "let t = [1, 2, 3];"
    },
    {
        question: "What is the output of `let s = String::from(\"hello\"); println!(\"{}\", s.len());`?",
        option1: "5",
        option2: "6",
        option3: "Error: `s` is not mutable",
        option4: "None of the above",
        ans: "5"
    },
    {
        question: "Which method is used to get the length of a `Vec<T>` in Rust?",
        option1: "vec.len()",
        option2: "vec.length()",
        option3: "vec.count()",
        option4: "vec.size()",
        ans: "vec.len()"
    },
    {
        question: "What does `&mut` mean in Rust?",
        option1: "Immutable reference",
        option2: "Mutable reference",
        option3: "Raw pointer",
        option4: "Memory allocation",
        ans: "Mutable reference"
    },
    {
        question: "What is a trait in Rust?",
        option1: "A way to implement polymorphism",
        option2: "A function pointer",
        option3: "A method for memory management",
        option4: "A data structure",
        ans: "A way to implement polymorphism"
    },
    {
        question: "Which of the following correctly implements the `Clone` trait?",
        option1: "impl Clone for MyStruct { fn clone(&self) -> Self { MyStruct } }",
        option2: "impl MyStruct for Clone { fn clone(&self) -> Self { MyStruct } }",
        option3: "impl Clone MyStruct { fn clone(&self) -> Self { MyStruct } }",
        option4: "Clone impl MyStruct { fn clone(&self) -> Self { MyStruct } }",
        ans: "impl Clone for MyStruct { fn clone(&self) -> Self { MyStruct } }"
    },
    {
        question: "Which keyword is used to define an enum in Rust?",
        option1: "struct",
        option2: "type",
        option3: "enum",
        option4: "variant",
        ans: "enum"
    },
    {
        question: "What does `Option<T>` represent in Rust?",
        option1: "A pointer type",
        option2: "An enum for handling null values",
        option3: "A dynamic memory allocation wrapper",
        option4: "A function returning multiple values",
        ans: "An enum for handling null values"
    },
    {
        question: "What is the purpose of the `Result<T, E>` type in Rust?",
        option1: "To store values in a vector",
        option2: "To indicate a function that may return an error",
        option3: "To handle function recursion",
        option4: "To allocate memory",
        ans: "To indicate a function that may return an error"
    },
    {
        question: "How do you match against an `Option<T>` value?",
        option1: "Using an `if` statement",
        option2: "Using a `match` statement",
        option3: "Using `unwrap()` directly",
        option4: "None of the above",
        ans: "Using a `match` statement"
    },
    {
        question: "Which of the following is true about lifetimes in Rust?",
        option1: "They are used for memory allocation",
        option2: "They ensure references remain valid",
        option3: "They replace the need for pointers",
        option4: "They define scope of variables",
        ans: "They ensure references remain valid"
    },
    {
        question: "How do you create a new thread in Rust?",
        option1: "std::thread::spawn(|| { ... })",
        option2: "new Thread()",
        option3: "create_thread()",
        option4: "None of the above",
        ans: "std::thread::spawn(|| { ... })"
    },
    {
        question: "What does the `?` operator do in Rust?",
        option1: "Handles errors by propagating them",
        option2: "Performs division",
        option3: "Denotes an optional value",
        option4: "Calls a function",
        ans: "Handles errors by propagating them"
    },
    {
        question: "Which of the following correctly defines an `impl` block for a struct?",
        option1: "impl StructName { fn new() -> Self { StructName } }",
        option2: "impl for StructName { fn new() -> Self { StructName } }",
        option3: "class StructName { fn new() -> Self { StructName } }",
        option4: "struct StructName { fn new() -> Self { StructName } }",
        ans: "impl StructName { fn new() -> Self { StructName } }"
    },
    {
        question: "Which library is commonly used for asynchronous programming in Rust?",
        option1: "Tokio",
        option2: "Hyper",
        option3: "Futures",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "What is the difference between `Box<T>` and `Rc<T>`?",
        option1: "`Box<T>` allows single ownership, `Rc<T>` allows shared ownership",
        option2: "`Box<T>` is for garbage collection, `Rc<T>` is for memory allocation",
        option3: "`Rc<T>` is faster than `Box<T>`",
        option4: "`Box<T>` is thread-safe, `Rc<T>` is not",
        ans: "`Box<T>` allows single ownership, `Rc<T>` allows shared ownership"
    },
    {
        question: "Which of the following is used for multi-threaded reference counting?",
        option1: "Rc<T>",
        option2: "Arc<T>",
        option3: "Mutex<T>",
        option4: "Cell<T>",
        ans: "Arc<T>"
    },
    {
        question: "What does `std::mem::drop()` do?",
        option1: "Manually drops a variable",
        option2: "Allocates memory",
        option3: "Moves ownership",
        option4: "Returns a value from a function",
        ans: "Manually drops a variable"
    },
    {
        question: "Which function allows dynamic memory allocation in Rust?",
        option1: "Box::new()",
        option2: "malloc()",
        option3: "allocate()",
        option4: "std::mem::alloc()",
        ans: "Box::new()"
    },
    {
        question: "Which Rust feature prevents data races?",
        option1: "Ownership and borrowing",
        option2: "Garbage collection",
        option3: "Thread-safe variables",
        option4: "Global variables",
        ans: "Ownership and borrowing"
    },
    {
        question: "Which of the following statements about `HashMap<K, V>` is true?",
        option1: "It requires the `std::collections` module",
        option2: "It stores key-value pairs",
        option3: "Keys must implement `Eq` and `Hash`",
        option4: "All of the above",
        ans: "All of the above"
    }
];

export const hardLevel = [
    {
        question: "What is the primary purpose of Rust's lifetime specifier?",
        option1: "To indicate the duration of a variable in memory",
        option2: "To manage reference validity and prevent dangling pointers",
        option3: "To handle multi-threading synchronization",
        option4: "To allocate memory dynamically",
        ans: "To manage reference validity and prevent dangling pointers"
    },
    {
        question: "Which trait must be implemented to allow a struct to be used with the `?` operator?",
        option1: "From<T>",
        option2: "Try",
        option3: "Into<T>",
        option4: "FromResidual",
        ans: "FromResidual"
    },
    {
        question: "What is the key difference between `Pin<Box<T>>` and `Box<T>` in Rust?",
        option1: "`Pin<Box<T>>` prevents moving the underlying value",
        option2: "`Box<T>` allows mutation, `Pin<Box<T>>` does not",
        option3: "`Pin<Box<T>>` is garbage collected",
        option4: "`Box<T>` is used for thread-safe operations",
        ans: "`Pin<Box<T>>` prevents moving the underlying value"
    },
    {
        question: "What does `UnsafeCell<T>` allow in Rust?",
        option1: "Interior mutability in a safe manner",
        option2: "Shared mutable access in safe Rust",
        option3: "Memory allocation without borrowing rules",
        option4: "Unchecked memory operations",
        ans: "Interior mutability in a safe manner"
    },
    {
        question: "Which of the following correctly implements an asynchronous function in Rust?",
        option1: "async fn my_function() -> Result<(), ()> { Ok(()) }",
        option2: "fn async my_function() -> Result<(), ()> { Ok(()) }",
        option3: "fn my_function() async -> Result<(), ()> { Ok(()) }",
        option4: "async my_function() -> Result<(), ()> { Ok(()) }",
        ans: "async fn my_function() -> Result<(), ()> { Ok(()) }"
    },
    {
        question: "Which of the following best describes Rust’s type erasure in trait objects?",
        option1: "It removes the type information at runtime",
        option2: "It allows dynamic dispatch without knowing the concrete type",
        option3: "It prevents the need for generics in Rust",
        option4: "It compiles out unused code paths",
        ans: "It allows dynamic dispatch without knowing the concrete type"
    },
    {
        question: "Which method is required to implement the `Future` trait in Rust?",
        option1: "poll",
        option2: "await",
        option3: "resolve",
        option4: "future",
        ans: "poll"
    },
    {
        question: "What is the difference between `Rc<T>` and `Arc<T>`?",
        option1: "`Rc<T>` is single-threaded, while `Arc<T>` is thread-safe",
        option2: "`Rc<T>` allows mutation, while `Arc<T>` does not",
        option3: "`Arc<T>` is reference counted, while `Rc<T>` is not",
        option4: "`Rc<T>` supports atomic operations, while `Arc<T>` does not",
        ans: "`Rc<T>` is single-threaded, while `Arc<T>` is thread-safe"
    },
    {
        question: "Which of the following best describes Rust's `Send` and `Sync` traits?",
        option1: "`Send` allows moving across threads, `Sync` allows shared access",
        option2: "`Sync` allows moving across threads, `Send` allows shared access",
        option3: "`Send` prevents data races, `Sync` ensures thread safety",
        option4: "`Send` and `Sync` are only used in `async` functions",
        ans: "`Send` allows moving across threads, `Sync` allows shared access"
    },
    {
        question: "What happens when an `Rc<T>` has zero references left?",
        option1: "The value is automatically deallocated",
        option2: "A panic occurs",
        option3: "It enters a dangling state",
        option4: "It leaks memory",
        ans: "The value is automatically deallocated"
    },
    {
        question: "Which of the following correctly describes Rust’s `Box<T>`?",
        option1: "A heap-allocated smart pointer",
        option2: "A reference-counted pointer",
        option3: "A raw pointer without safety guarantees",
        option4: "A thread-safe shared pointer",
        ans: "A heap-allocated smart pointer"
    },
    {
        question: "What does `std::mem::transmute<T>` do?",
        option1: "Performs an unchecked type conversion",
        option2: "Moves a value from stack to heap",
        option3: "Erases type information",
        option4: "Forces a memory reallocation",
        ans: "Performs an unchecked type conversion"
    },
    {
        question: "What does `RefCell<T>` provide in Rust?",
        option1: "Runtime borrow checking",
        option2: "Compile-time borrow checking",
        option3: "Multi-threaded reference counting",
        option4: "Low-level unsafe memory access",
        ans: "Runtime borrow checking"
    },
    {
        question: "How does Rust prevent iterator invalidation?",
        option1: "By enforcing strict borrowing rules",
        option2: "By using garbage collection",
        option3: "By making all iterators immutable",
        option4: "By automatically copying values",
        ans: "By enforcing strict borrowing rules"
    },
    {
        question: "Which Rust feature allows function calls to return early?",
        option1: "Early returns with `return`",
        option2: "The `?` operator",
        option3: "Both `return` and `?`",
        option4: "Rust does not support early returns",
        ans: "Both `return` and `?`"
    },
    {
        question: "What is the purpose of `std::ptr::null()`?",
        option1: "Creates a null pointer safely",
        option2: "Dynamically allocates memory",
        option3: "Frees unused heap memory",
        option4: "Checks if a pointer is valid",
        ans: "Creates a null pointer safely"
    },
    {
        question: "What happens when a Rust program encounters an integer overflow in debug mode?",
        option1: "The program panics",
        option2: "The value wraps around",
        option3: "Rust ignores it",
        option4: "It gets converted to a floating-point number",
        ans: "The program panics"
    },
    {
        question: "Which of the following allows atomic reference counting in Rust?",
        option1: "Rc<T>",
        option2: "Arc<T>",
        option3: "Cell<T>",
        option4: "Mutex<T>",
        ans: "Arc<T>"
    },
    {
        question: "What does `std::mem::forget()` do in Rust?",
        option1: "Prevents a value from being dropped",
        option2: "Moves memory from stack to heap",
        option3: "Reclaims leaked memory",
        option4: "Erases lifetime information",
        ans: "Prevents a value from being dropped"
    },
    {
        question: "What is the primary use of `Cell<T>` in Rust?",
        option1: "To provide interior mutability for copy types",
        option2: "To allow atomic memory operations",
        option3: "To enable thread-safe shared ownership",
        option4: "To allocate memory on the stack",
        ans: "To provide interior mutability for copy types"
    }
];
