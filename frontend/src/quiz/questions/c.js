export const easyLevel = [
    {
        question: "Which of the following is a valid C variable name?",
        option1: "1variable",
        option2: "variable1",
        option3: "var 1",
        option4: "int",
        ans: "variable1"
    },
    {
        question: "Which data type is used to store a single character in C?",
        option1: "char",
        option2: "string",
        option3: "character",
        option4: "text",
        ans: "char"
    },
    {
        question: "What is the correct format specifier for printing an integer in C?",
        option1: "%c",
        option2: "%s",
        option3: "%d",
        option4: "%f",
        ans: "%d"
    },
    {
        question: "Which keyword is used to declare a constant variable in C?",
        option1: "final",
        option2: "const",
        option3: "define",
        option4: "static",
        ans: "const"
    },
    {
        question: "Which of the following is a looping construct in C?",
        option1: "for",
        option2: "repeat",
        option3: "foreach",
        option4: "loop",
        ans: "for"
    },
    {
        question: "What is the size of an `int` in C (assuming a 32-bit system)?",
        option1: "2 bytes",
        option2: "4 bytes",
        option3: "8 bytes",
        option4: "16 bytes",
        ans: "4 bytes"
    },
    {
        question: "Which function is used to read input from the user in C?",
        option1: "print()",
        option2: "input()",
        option3: "scanf()",
        option4: "get()",
        ans: "scanf()"
    },
    {
        question: "Which symbol is used for comments in C?",
        option1: "//",
        option2: "#",
        option3: "--",
        option4: "/* */",
        ans: "/* */"
    },
    {
        question: "Which header file is used for standard input/output functions in C?",
        option1: "<stdlib.h>",
        option2: "<stdio.h>",
        option3: "<math.h>",
        option4: "<string.h>",
        ans: "<stdio.h>"
    },
    {
        question: "Which operator is used for pointer dereferencing?",
        option1: "&",
        option2: "*",
        option3: "->",
        option4: "::",
        ans: "*"
    },
    {
        question: "What is the default return type of `main()` in C?",
        option1: "void",
        option2: "int",
        option3: "char",
        option4: "float",
        ans: "int"
    },
    {
        question: "What is the correct syntax to declare a pointer in C?",
        option1: "int *ptr;",
        option2: "int ptr*;",
        option3: "ptr int*;",
        option4: "int ptr;",
        ans: "int *ptr;"
    },
    {
        question: "Which function is used to allocate memory dynamically in C?",
        option1: "malloc()",
        option2: "alloc()",
        option3: "new()",
        option4: "create()",
        ans: "malloc()"
    },
    {
        question: "Which of the following is used to terminate a loop prematurely in C?",
        option1: "exit",
        option2: "return",
        option3: "break",
        option4: "continue",
        ans: "break"
    },
    {
        question: "Which function is used to print formatted output in C?",
        option1: "print()",
        option2: "display()",
        option3: "printf()",
        option4: "write()",
        ans: "printf()"
    }
];

export const mediumLevel = [
    {
        question: "What will be the output of the following code?\n`int a = 5, b = 2;\nprintf(\"%d\", a / b);`",
        option1: "2",
        option2: "2.5",
        option3: "Error",
        option4: "5/2",
        ans: "2"
    },
    {
        question: "Which of the following is NOT a valid storage class in C?",
        option1: "auto",
        option2: "register",
        option3: "static",
        option4: "mutable",
        ans: "mutable"
    },
    {
        question: "What is the output of the following?\n`char str[] = \"Hello\";\nprintf(\"%c\", str[1]);`",
        option1: "H",
        option2: "e",
        option3: "l",
        option4: "o",
        ans: "e"
    },
    {
        question: "Which of the following correctly declares a function in C?",
        option1: "func(int x);",
        option2: "int func(int x);",
        option3: "int func(x);",
        option4: "function func(int x);",
        ans: "int func(int x);"
    },
    {
        question: "Which operator is used to access the value of a variable using a pointer?",
        option1: "&",
        option2: "*",
        option3: "->",
        option4: "::",
        ans: "*"
    },
    {
        question: "What is the output of the following?\n`int a = 10;\nprintf(\"%d\", a++);`",
        option1: "9",
        option2: "10",
        option3: "11",
        option4: "Error",
        ans: "10"
    },
    {
        question: "Which function is used to compare two strings in C?",
        option1: "strcmp()",
        option2: "strcpy()",
        option3: "strlen()",
        option4: "strcat()",
        ans: "strcmp()"
    },
    {
        question: "How many times will the following loop execute?\n`for(int i = 0; i < 5; i++);`",
        option1: "4",
        option2: "5",
        option3: "0",
        option4: "Infinite",
        ans: "5"
    },
    {
        question: "Which of the following statements about pointers is true?",
        option1: "A pointer can store the address of another pointer.",
        option2: "Pointers cannot be null.",
        option3: "Pointers cannot be incremented or decremented.",
        option4: "Pointers do not store memory addresses.",
        ans: "A pointer can store the address of another pointer."
    },
    {
        question: "Which function is used to open a file in C?",
        option1: "file()",
        option2: "open()",
        option3: "fopen()",
        option4: "read()",
        ans: "fopen()"
    },
    {
        question: "What will be the output of `sizeof(char)` on most systems?",
        option1: "1",
        option2: "2",
        option3: "4",
        option4: "8",
        ans: "1"
    },
    {
        question: "Which loop is best suited for executing a block of code at least once?",
        option1: "for loop",
        option2: "while loop",
        option3: "do-while loop",
        option4: "switch-case",
        ans: "do-while loop"
    },
    {
        question: "Which function is used to dynamically allocate memory for an array in C?",
        option1: "malloc()",
        option2: "calloc()",
        option3: "realloc()",
        option4: "free()",
        ans: "calloc()"
    },
    {
        question: "What does `fprintf()` do in C?",
        option1: "Prints output to the console",
        option2: "Prints output to a file",
        option3: "Reads input from the user",
        option4: "Writes formatted data to memory",
        ans: "Prints output to a file"
    },
    {
        question: "Which of the following is true about recursion?",
        option1: "A function that calls itself",
        option2: "A function that executes indefinitely",
        option3: "A function that never returns",
        option4: "A function that uses loops",
        ans: "A function that calls itself"
    },
    {
        question: "What will be the output of `printf(\"%d\", 2 << 1);`?",
        option1: "1",
        option2: "2",
        option3: "4",
        option4: "8",
        ans: "4"
    },
    {
        question: "Which header file is needed for file handling in C?",
        option1: "<stdio.h>",
        option2: "<stdlib.h>",
        option3: "<file.h>",
        option4: "<string.h>",
        ans: "<stdio.h>"
    },
    {
        question: "Which of the following is a valid function signature?",
        option1: "void func()",
        option2: "void func",
        option3: "func() void",
        option4: "function func()",
        ans: "void func()"
    },
    {
        question: "What will be the output of `printf(\"%d\", sizeof(int*));` on a 64-bit system?",
        option1: "2",
        option2: "4",
        option3: "8",
        option4: "16",
        ans: "8"
    },
    {
        question: "Which of the following correctly represents a NULL pointer?",
        option1: "0",
        option2: "NULL",
        option3: "(void*)0",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following statements is true about arrays in C?",
        option1: "An array index starts from 1.",
        option2: "An array size must be declared at compile-time.",
        option3: "Arrays store elements in non-contiguous memory.",
        option4: "Arrays cannot be used with pointers.",
        ans: "An array size must be declared at compile-time."
    },
    {
        question: "What does `free(ptr);` do in C?",
        option1: "Frees allocated memory",
        option2: "Deletes a pointer variable",
        option3: "Makes a pointer NULL",
        option4: "Allocates new memory",
        ans: "Frees allocated memory"
    },
    {
        question: "What will be the output of the following code?\n`int x = 10;\nprintf(\"%d\", ++x);`",
        option1: "9",
        option2: "10",
        option3: "11",
        option4: "Error",
        ans: "11"
    },
    {
        question: "Which function is used to copy a string in C?",
        option1: "strcat()",
        option2: "strcpy()",
        option3: "strlen()",
        option4: "strcmp()",
        ans: "strcpy()"
    }
];

export const hardLevel = [
    {
        question: "What is the output of the following code?\n```c\nint x = 5;\nprintf(\"%d\", x++ + ++x);\n```",
        option1: "10",
        option2: "11",
        option3: "12",
        option4: "Undefined behavior",
        ans: "Undefined behavior"
    },
    {
        question: "Which of the following statements is true about `const int *ptr`?",
        option1: "ptr is a pointer to a constant integer",
        option2: "ptr is a constant pointer to an integer",
        option3: "ptr and the integer value cannot be modified",
        option4: "ptr is a constant pointer to a constant integer",
        ans: "ptr is a pointer to a constant integer"
    },
    {
        question: "Which sorting algorithm has the best worst-case time complexity?",
        option1: "Bubble Sort",
        option2: "Merge Sort",
        option3: "Quick Sort",
        option4: "Selection Sort",
        ans: "Merge Sort"
    },
    {
        question: "What will be the output of the following program?\n```c\nvoid func(int arr[]){\n   printf(\"%lu\", sizeof(arr));\n}\nint main(){\n   int arr[5] = {1,2,3,4,5};\n   func(arr);\n}\n```",
        option1: "20",
        option2: "5",
        option3: "4",
        option4: "8",
        ans: "8"
    },
    {
        question: "Which of the following is NOT a valid memory allocation function in C?",
        option1: "malloc()",
        option2: "calloc()",
        option3: "new()",
        option4: "realloc()",
        ans: "new()"
    },
    {
        question: "Which of the following is the correct way to declare a function pointer?",
        option1: "int *func(int, int);",
        option2: "int (*func)(int, int);",
        option3: "int func(int) *;",
        option4: "pointer int func(int, int);",
        ans: "int (*func)(int, int);"
    },
    {
        question: "What is the output of the following?\n```c\nint a = 5, b = 10;\nint *p1 = &a, *p2 = &b;\nprintf(\"%d\", *p1 + *p2);\n```",
        option1: "5",
        option2: "10",
        option3: "15",
        option4: "0",
        ans: "15"
    },
    {
        question: "Which of the following is NOT a valid way to free dynamically allocated memory?",
        option1: "free(ptr);",
        option2: "ptr = NULL;",
        option3: "delete ptr;",
        option4: "free(*ptr);",
        ans: "delete ptr;"
    },
    {
        question: "Which keyword in C is used to prevent function name-mangling in C++?",
        option1: "extern",
        option2: "static",
        option3: "register",
        option4: "volatile",
        ans: "extern"
    },
    {
        question: "Which function is used to seek a specific position in a file?",
        option1: "rewind()",
        option2: "fseek()",
        option3: "ftell()",
        option4: "fgetpos()",
        ans: "fseek()"
    },
    {
        question: "Which of the following is NOT true about a `union` in C?",
        option1: "A union can hold multiple values at once.",
        option2: "All members share the same memory location.",
        option3: "The size of a union is equal to the size of its largest member.",
        option4: "A union is useful for memory-efficient programs.",
        ans: "A union can hold multiple values at once."
    },
    {
        question: "What will be the output of the following?\n```c\nint x = 3;\nprintf(\"%d\", x << 2);\n```",
        option1: "3",
        option2: "6",
        option3: "12",
        option4: "1",
        ans: "12"
    },
    {
        question: "Which of the following is an example of undefined behavior in C?",
        option1: "Accessing an array out of bounds",
        option2: "Using an uninitialized pointer",
        option3: "Dividing by zero (integer division)",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following best describes the volatile keyword?",
        option1: "It prevents the compiler from optimizing a variable.",
        option2: "It makes a variable constant.",
        option3: "It prevents pointer dereferencing.",
        option4: "It allows a variable to be modified by multiple threads.",
        ans: "It prevents the compiler from optimizing a variable."
    },
    {
        question: "What will be the output of the following code?\n```c\nint a = 5;\nint *p = &a;\nint **q = &p;\nprintf(\"%d\", **q);\n```",
        option1: "5",
        option2: "Address of a",
        option3: "Address of p",
        option4: "Garbage value",
        ans: "5"
    }
];
