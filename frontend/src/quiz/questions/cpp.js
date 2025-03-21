export const easyLevel = [
    {
        question: "Which of the following is the correct syntax to print 'Hello, World!' in C++?",
        option1: "printf(\"Hello, World!\");",
        option2: "cout << \"Hello, World!\";",
        option3: "System.out.println(\"Hello, World!\");",
        option4: "Console.WriteLine(\"Hello, World!\");",
        ans: "cout << \"Hello, World!\";"
    },
    {
        question: "Which header file is used for input and output operations in C++?",
        option1: "<stdio.h>",
        option2: "<conio.h>",
        option3: "<iostream>",
        option4: "<stdlib.h>",
        ans: "<iostream>"
    },
    {
        question: "What is the extension of a C++ source file?",
        option1: ".c",
        option2: ".cpp",
        option3: ".java",
        option4: ".py",
        ans: ".cpp"
    },
    {
        question: "Which of the following is used to terminate a loop in C++?",
        option1: "break",
        option2: "continue",
        option3: "stop",
        option4: "exit",
        ans: "break"
    },
    {
        question: "Which keyword is used to define a class in C++?",
        option1: "struct",
        option2: "class",
        option3: "define",
        option4: "object",
        ans: "class"
    },
    {
        question: "Which operator is used to access members of a class in C++?",
        option1: ".",
        option2: "->",
        option3: "::",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is NOT a fundamental data type in C++?",
        option1: "int",
        option2: "double",
        option3: "bool",
        option4: "string",
        ans: "string"
    },
    {
        question: "Which loop is guaranteed to execute at least once in C++?",
        option1: "for loop",
        option2: "while loop",
        option3: "do-while loop",
        option4: "None of the above",
        ans: "do-while loop"
    },
    {
        question: "Which function is used to get the length of a string in C++?",
        option1: "length()",
        option2: "size()",
        option3: "Both A and B",
        option4: "strlen()",
        ans: "Both A and B"
    },
    {
        question: "Which of the following is NOT a valid C++ variable name?",
        option1: "myVariable",
        option2: "_myVariable",
        option3: "2ndVariable",
        option4: "variable_2",
        ans: "2ndVariable"
    },
    {
        question: "Which symbol is used for comments in C++?",
        option1: "//",
        option2: "/* */",
        option3: "Both A and B",
        option4: "#",
        ans: "Both A and B"
    },
    {
        question: "Which of the following is used to dynamically allocate memory in C++?",
        option1: "malloc()",
        option2: "new",
        option3: "calloc()",
        option4: "alloc()",
        ans: "new"
    },
    {
        question: "Which feature allows C++ to define multiple functions with the same name but different parameters?",
        option1: "Function overriding",
        option2: "Function overloading",
        option3: "Polymorphism",
        option4: "Encapsulation",
        ans: "Function overloading"
    },
    {
        question: "What will be the output of the following code?\n```cpp\nint a = 10, b = 20;\nswap(a, b);\nprintf(\"%d %d\", a, b);\n```",
        option1: "10 20",
        option2: "20 10",
        option3: "Compilation error",
        option4: "Undefined behavior",
        ans: "Compilation error"
    },
    {
        question: "What is the default access specifier for members of a class in C++?",
        option1: "public",
        option2: "private",
        option3: "protected",
        option4: "None of the above",
        ans: "private"
    }
];

export const mediumLevel = [
    {
        question: "What is the difference between struct and class in C++?",
        option1: "No difference, both are the same",
        option2: "Members of a struct are public by default, whereas members of a class are private by default",
        option3: "A struct cannot have member functions",
        option4: "A class cannot have constructors",
        ans: "Members of a struct are public by default, whereas members of a class are private by default"
    },
    {
        question: "Which of the following best describes polymorphism in C++?",
        option1: "Ability of a function or object to take multiple forms",
        option2: "Hiding the implementation details of a class",
        option3: "Using multiple inheritance",
        option4: "Overloading constructors only",
        ans: "Ability of a function or object to take multiple forms"
    },
    {
        question: "Which keyword is used to prevent a function from being overridden in derived classes?",
        option1: "final",
        option2: "const",
        option3: "static",
        option4: "virtual",
        ans: "final"
    },
    {
        question: "Which of the following statements is true about virtual functions?",
        option1: "They must be defined inside the base class",
        option2: "They must be static",
        option3: "They allow dynamic binding at runtime",
        option4: "They cannot be overridden",
        ans: "They allow dynamic binding at runtime"
    },
    {
        question: "Which operator is used for dynamic memory allocation in C++?",
        option1: "alloc()",
        option2: "malloc()",
        option3: "new",
        option4: "calloc()",
        ans: "new"
    },
    {
        question: "What will be the output of the following code?\n```cpp\nint a = 5;\nint &b = a;\nb = 10;\nprintf(\"%d\", a);\n```",
        option1: "5",
        option2: "10",
        option3: "Compilation error",
        option4: "Undefined behavior",
        ans: "10"
    },
    {
        question: "What is the purpose of a copy constructor in C++?",
        option1: "To create a copy of an existing object",
        option2: "To initialize static variables",
        option3: "To free dynamically allocated memory",
        option4: "To override the default constructor",
        ans: "To create a copy of an existing object"
    },
    {
        question: "Which of the following can be overloaded in C++?",
        option1: "Member functions",
        option2: "Operators",
        option3: "Constructors",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which keyword is used to define an abstract class in C++?",
        option1: "virtual",
        option2: "abstract",
        option3: "interface",
        option4: "There is no specific keyword",
        ans: "There is no specific keyword"
    },
    {
        question: "Which of the following statements about destructors in C++ is true?",
        option1: "A class can have multiple destructors",
        option2: "A destructor must return an int",
        option3: "A destructor has the same name as the class, preceded by ~",
        option4: "A destructor cannot be virtual",
        ans: "A destructor has the same name as the class, preceded by ~"
    },
    {
        question: "What will be the output of the following code?\n```cpp\n#include<iostream>\nusing namespace std;\nint main() {\n    int a = 10;\n    cout << a++ * ++a;\n    return 0;\n}\n```",
        option1: "110",
        option2: "Undefined behavior",
        option3: "120",
        option4: "Compilation error",
        ans: "Undefined behavior"
    },
    {
        question: "Which of the following is NOT a valid C++ STL container?",
        option1: "vector",
        option2: "map",
        option3: "queue",
        option4: "tree",
        ans: "tree"
    },
    {
        question: "What does the following code do?\n```cpp\nint *ptr = new int(5);\ndelete ptr;\n```",
        option1: "Allocates memory for an integer and then releases it",
        option2: "Allocates memory but does not release it",
        option3: "Throws an error",
        option4: "Deletes the integer without allocating memory",
        ans: "Allocates memory for an integer and then releases it"
    },
    {
        question: "Which statement about function templates in C++ is true?",
        option1: "They can only be used for primitive data types",
        option2: "They allow writing generic code that works with any data type",
        option3: "They must be specialized before use",
        option4: "They cannot be used for class member functions",
        ans: "They allow writing generic code that works with any data type"
    },
    {
        question: "What will be the output of the following code?\n```cpp\nint a = 5, b = 10;\nswap(a, b);\nprintf(\"%d %d\", a, b);\n```",
        option1: "10 5",
        option2: "5 10",
        option3: "Compilation error",
        option4: "Undefined behavior",
        ans: "Compilation error"
    },
    {
        question: "Which operator cannot be overloaded in C++?",
        option1: "+",
        option2: "[]",
        option3: "::",
        option4: "==",
        ans: "::"
    },
    {
        question: "Which of the following statements is true about friend functions?",
        option1: "Friend functions can access private and protected members of a class",
        option2: "Friend functions are members of a class",
        option3: "Friend functions can only be called from within the class",
        option4: "Friend functions are inherited in derived classes",
        ans: "Friend functions can access private and protected members of a class"
    },
    {
        question: "Which of the following is NOT a feature of C++?",
        option1: "Encapsulation",
        option2: "Garbage Collection",
        option3: "Operator Overloading",
        option4: "Polymorphism",
        ans: "Garbage Collection"
    },
    {
        question: "What is the output of the following program?\n```cpp\nint x = 10;\nint &y = x;\ny = 20;\nprintf(\"%d\", x);\n```",
        option1: "10",
        option2: "20",
        option3: "Compilation error",
        option4: "Undefined behavior",
        ans: "20"
    }
];

export const hardLevel = [
    {
        question: "What happens if an exception is thrown in a constructor and not caught?",
        option1: "The object is constructed successfully",
        option2: "The program crashes",
        option3: "The destructor is called before the exception propagates",
        option4: "The partially created object is destroyed and the exception propagates",
        ans: "The partially created object is destroyed and the exception propagates"
    },
    {
        question: "Which of the following best describes the Diamond Problem in C++?",
        option1: "It occurs due to function overloading",
        option2: "It occurs due to ambiguous inheritance in multiple inheritance",
        option3: "It is a memory leak issue",
        option4: "It is a syntax error in function overriding",
        ans: "It occurs due to ambiguous inheritance in multiple inheritance"
    },
    {
        question: "Which of the following C++11 features allows you to move resources rather than copy them?",
        option1: "std::move",
        option2: "std::copy",
        option3: "std::swap",
        option4: "std::transfer",
        ans: "std::move"
    },
    {
        question: "Which of the following statements about smart pointers is true?",
        option1: "They help manage dynamic memory automatically",
        option2: "They are not part of the standard library",
        option3: "They do not support reference counting",
        option4: "They can only be used with arrays",
        ans: "They help manage dynamic memory automatically"
    },
    {
        question: "What is the main advantage of using `std::unique_ptr` over `std::shared_ptr`?",
        option1: "It allows multiple ownership of the same resource",
        option2: "It does not require reference counting, leading to better performance",
        option3: "It supports deep copies",
        option4: "It can be used in C++98",
        ans: "It does not require reference counting, leading to better performance"
    },
    {
        question: "What will be the output of the following code?\n```cpp\n#include<iostream>\nusing namespace std;\nclass A {\npublic:\n    A() { cout << \"A\"; }\n    ~A() { cout << \"B\"; }\n};\nint main() {\n    A *a = new A();\n    delete a;\n    return 0;\n}\n```",
        option1: "A",
        option2: "B",
        option3: "AB",
        option4: "No output due to memory leak",
        ans: "AB"
    },
    {
        question: "Which of the following is a valid reason for making a destructor virtual?",
        option1: "To ensure proper cleanup of derived class objects when deleted through a base class pointer",
        option2: "To prevent memory leaks in arrays",
        option3: "To improve performance",
        option4: "To disable inheritance",
        ans: "To ensure proper cleanup of derived class objects when deleted through a base class pointer"
    },
    {
        question: "Which of the following statements about `std::thread` in C++ is true?",
        option1: "Threads in C++ must always be joined before the program ends",
        option2: "Threads in C++ must always be detached before the program ends",
        option3: "C++ threads allow concurrent execution of functions",
        option4: "C++ threads must be created using `pthread_create`",
        ans: "C++ threads allow concurrent execution of functions"
    },
    {
        question: "Which of the following operators can NOT be overloaded?",
        option1: "++",
        option2: "->",
        option3: "new",
        option4: ".*",
        ans: ".*"
    },
    {
        question: "What will be the output of this program?\n```cpp\n#include <iostream>\nusing namespace std;\nclass Base {\npublic:\n    virtual void show() { cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { cout << \"Derived\"; }\n};\nint main() {\n    Base *b = new Derived();\n    b->show();\n    return 0;\n}\n```",
        option1: "Base",
        option2: "Derived",
        option3: "Compilation error",
        option4: "Undefined behavior",
        ans: "Derived"
    },
    {
        question: "Which of the following is NOT a valid iterator category in C++?",
        option1: "Random Access Iterator",
        option2: "Bidirectional Iterator",
        option3: "Circular Iterator",
        option4: "Input Iterator",
        ans: "Circular Iterator"
    },
    {
        question: "Which feature introduced in C++11 allows functions to return multiple values?",
        option1: "std::pair",
        option2: "std::tuple",
        option3: "std::array",
        option4: "std::map",
        ans: "std::tuple"
    },
    {
        question: "What will happen if an exception is thrown but not caught in a C++ program?",
        option1: "The program will terminate immediately",
        option2: "The program will catch it in `main()`",
        option3: "The program will return `EXIT_SUCCESS`",
        option4: "The exception will be silently ignored",
        ans: "The program will terminate immediately"
    },
    {
        question: "Which of the following is the best description of RAII (Resource Acquisition Is Initialization) in C++?",
        option1: "A design pattern that ensures resource allocation is tied to object lifetime",
        option2: "A mechanism to manually allocate memory in a program",
        option3: "A feature of C++ that allows overloading of new and delete",
        option4: "A debugging technique used to detect memory leaks",
        ans: "A design pattern that ensures resource allocation is tied to object lifetime"
    },
    {
        question: "What is the purpose of `std::enable_if` in C++?",
        option1: "To disable functions based on compile-time conditions",
        option2: "To check for runtime errors",
        option3: "To allow explicit specialization of templates",
        option4: "To optimize memory allocation",
        ans: "To disable functions based on compile-time conditions"
    }
];
