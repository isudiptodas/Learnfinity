export const easyLevel = [
    {
        question: "What is the correct way to declare a JavaScript variable?",
        option1: "var myVar = 5;",
        option2: "variable myVar = 5;",
        option3: "v myVar = 5;",
        option4: "let = myVar 5;",
        ans: "var myVar = 5;"
    },
    {
        question: "Which keyword is used to define a constant variable in JavaScript?",
        option1: "var",
        option2: "let",
        option3: "const",
        option4: "static",
        ans: "const"
    },
    {
        question: "How do you write a comment in JavaScript?",
        option1: "// This is a comment",
        option2: "/* This is a comment */",
        option3: "-- This is a comment",
        option4: "Both 1 and 2",
        ans: "Both 1 and 2"
    },
    {
        question: "What will `console.log(typeof 42)` print?",
        option1: "'number'",
        option2: "'string'",
        option3: "'object'",
        option4: "'undefined'",
        ans: "'number'"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        option1: "Number",
        option2: "Boolean",
        option3: "Character",
        option4: "Object",
        ans: "Character"
    },
    {
        question: "What is the correct way to check if a variable is an array?",
        option1: "typeof myArray",
        option2: "myArray.isArray()",
        option3: "Array.isArray(myArray)",
        option4: "myArray instanceof Array",
        ans: "Array.isArray(myArray)"
    },
    {
        question: "Which operator is used for strict equality comparison?",
        option1: "==",
        option2: "===",
        option3: "=",
        option4: "!=",
        ans: "==="
    },
    {
        question: "What is the result of `console.log('5' + 2);`?",
        option1: "52",
        option2: "7",
        option3: "Error",
        option4: "'5 + 2'",
        ans: "52"
    },
    {
        question: "Which function is used to print something to the console?",
        option1: "console.log()",
        option2: "print()",
        option3: "log.console()",
        option4: "document.write()",
        ans: "console.log()"
    },
    {
        question: "What does `NaN` stand for in JavaScript?",
        option1: "Not a Number",
        option2: "Null and Nothing",
        option3: "Number and Null",
        option4: "New and Null",
        ans: "Not a Number"
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        option1: "null",
        option2: "0",
        option3: "undefined",
        option4: "NaN",
        ans: "undefined"
    },
    {
        question: "Which function converts a string to an integer?",
        option1: "parseInt()",
        option2: "Number()",
        option3: "parseFloat()",
        option4: "String.toInteger()",
        ans: "parseInt()"
    },
    {
        question: "What will `Boolean('false')` return?",
        option1: "false",
        option2: "true",
        option3: "null",
        option4: "undefined",
        ans: "true"
    },
    {
        question: "Which loop will always execute at least once?",
        option1: "for loop",
        option2: "while loop",
        option3: "do-while loop",
        option4: "foreach loop",
        ans: "do-while loop"
    },
    {
        question: "Which method removes the last element from an array?",
        option1: "shift()",
        option2: "pop()",
        option3: "splice()",
        option4: "delete()",
        ans: "pop()"
    },
    {
        question: "How do you declare a function in JavaScript?",
        option1: "function myFunc() {}",
        option2: "def myFunc() {}",
        option3: "func myFunc() {}",
        option4: "method myFunc() {}",
        ans: "function myFunc() {}"
    },
    {
        question: "How do you find the length of a string in JavaScript?",
        option1: "str.length",
        option2: "str.size()",
        option3: "length(str)",
        option4: "size(str)",
        ans: "str.length"
    },
    {
        question: "What will `console.log(2 ** 3)` output?",
        option1: "6",
        option2: "8",
        option3: "16",
        option4: "Error",
        ans: "8"
    },
    {
        question: "Which of the following is a falsy value?",
        option1: "'false'",
        option2: "0",
        option3: "'0'",
        option4: "[]",
        ans: "0"
    },
    {
        question: "What will `console.log(1 + '1')` print?",
        option1: "11",
        option2: "2",
        option3: "Error",
        option4: "undefined",
        ans: "11"
    }
];

export const mediumLevel = [
    {
        question: "What will be the output of `console.log(typeof NaN);`?",
        option1: "'undefined'",
        option2: "'NaN'",
        option3: "'number'",
        option4: "'null'",
        ans: "'number'"
    },
    {
        question: "How do you prevent a function from modifying an object in JavaScript?",
        option1: "Use `const`",
        option2: "Use `Object.freeze()`",
        option3: "Use `let` instead of `var`",
        option4: "Use `Object.preventChanges()`",
        ans: "Use `Object.freeze()`"
    },
    {
        question: "What does `map()` return in JavaScript?",
        option1: "A new array",
        option2: "The same array",
        option3: "An object",
        option4: "Nothing",
        ans: "A new array"
    },
    {
        question: "What is the purpose of `bind()` method in JavaScript?",
        option1: "To call a function immediately",
        option2: "To permanently bind `this` to a function",
        option3: "To execute a function after some time",
        option4: "To remove a function's scope",
        ans: "To permanently bind `this` to a function"
    },
    {
        question: "What will be the output of `console.log(!!'false');`?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "null",
        ans: "true"
    },
    {
        question: "Which method is used to remove the first element from an array?",
        option1: "pop()",
        option2: "shift()",
        option3: "splice()",
        option4: "slice()",
        ans: "shift()"
    },
    {
        question: "How do you deep clone an object in JavaScript?",
        option1: "Using `Object.assign()`",
        option2: "Using `JSON.parse(JSON.stringify(obj))`",
        option3: "Using `cloneObject()` method",
        option4: "Using `obj.clone()`",
        ans: "Using `JSON.parse(JSON.stringify(obj))`"
    },
    {
        question: "What will `console.log(1 == '1' && 1 === '1');` return?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "null",
        ans: "false"
    },
    {
        question: "How do you check if an object has a specific property?",
        option1: "object.hasOwnProperty('prop')",
        option2: "object.includes('prop')",
        option3: "object.exist('prop')",
        option4: "object.contains('prop')",
        ans: "object.hasOwnProperty('prop')"
    },
    {
        question: "What does `setTimeout(() => console.log('Hello'), 0);` do?",
        option1: "Executes immediately",
        option2: "Executes after all synchronous code",
        option3: "Executes only after 1 second",
        option4: "Throws an error",
        ans: "Executes after all synchronous code"
    },
    {
        question: "What will `console.log([] + []);` return?",
        option1: "'[]'",
        option2: "'undefined'",
        option3: "'' (empty string)",
        option4: "Error",
        ans: "'' (empty string)"
    },
    {
        question: "How can you merge two arrays in JavaScript?",
        option1: "array1.concat(array2)",
        option2: "array1.merge(array2)",
        option3: "array1 + array2",
        option4: "array1.join(array2)",
        ans: "array1.concat(array2)"
    },
    {
        question: "What does the `reduce()` function return?",
        option1: "A single value",
        option2: "A new array",
        option3: "An object",
        option4: "Nothing",
        ans: "A single value"
    },
    {
        question: "How do you remove duplicate values from an array?",
        option1: "Using `new Set(array)`",
        option2: "Using `array.unique()`",
        option3: "Using `array.filter()`",
        option4: "Using `array.map()`",
        ans: "Using `new Set(array)`"
    },
    {
        question: "What will `console.log(typeof null);` output?",
        option1: "'null'",
        option2: "'object'",
        option3: "'undefined'",
        option4: "'string'",
        ans: "'object'"
    },
    {
        question: "Which of these is NOT a primitive data type in JavaScript?",
        option1: "String",
        option2: "Boolean",
        option3: "Object",
        option4: "Number",
        ans: "Object"
    },
    {
        question: "How do you check if an array is empty?",
        option1: "array === []",
        option2: "array.length === 0",
        option3: "array == null",
        option4: "array.empty()",
        ans: "array.length === 0"
    },
    {
        question: "What will `console.log('3' - 1);` return?",
        option1: "2",
        option2: "'2'",
        option3: "Error",
        option4: "'31'",
        ans: "2"
    },
    {
        question: "What will `console.log([] == false);` return?",
        option1: "true",
        option2: "false",
        option3: "Error",
        option4: "undefined",
        ans: "true"
    },
    {
        question: "What will `console.log(typeof function() {});` return?",
        option1: "'function'",
        option2: "'object'",
        option3: "'undefined'",
        option4: "'null'",
        ans: "'function'"
    }
];

export const hardLevel = [
    {
        question: "What will `console.log([] + {});` return?",
        option1: "'[object Object]'",
        option2: "'{}'",
        option3: "'[objectObject]'",
        option4: "Error",
        ans: "'[object Object]'"
    },
    {
        question: "What is the output of `console.log({} + []);`?",
        option1: "'[object Object]'",
        option2: "'0'",
        option3: "Error",
        option4: "'[objectObject]'",
        ans: "'[object Object]'"
    },
    {
        question: "What will `console.log(typeof NaN === 'number');` return?",
        option1: "true",
        option2: "false",
        option3: "Error",
        option4: "'NaN'",
        ans: "true"
    },
    {
        question: "How does JavaScript handle function hoisting?",
        option1: "Only function declarations are hoisted",
        option2: "Both function declarations and expressions are hoisted",
        option3: "Only function expressions are hoisted",
        option4: "Neither declarations nor expressions are hoisted",
        ans: "Only function declarations are hoisted"
    },
    {
        question: "What will be the output of `console.log(0.1 + 0.2 === 0.3);`?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "NaN",
        ans: "false"
    },
    {
        question: "How do you check if a variable is an array?",
        option1: "typeof array === 'array'",
        option2: "array instanceof Array",
        option3: "typeof array === 'object'",
        option4: "Array.isArray(array)",
        ans: "Array.isArray(array)"
    },
    {
        question: "What will `console.log(1 < 2 < 3);` return?",
        option1: "true",
        option2: "false",
        option3: "Error",
        option4: "undefined",
        ans: "true"
    },
    {
        question: "What will `console.log(3 > 2 > 1);` return?",
        option1: "true",
        option2: "false",
        option3: "Error",
        option4: "undefined",
        ans: "false"
    },
    {
        question: "What will `console.log([] == ![]);` return?",
        option1: "true",
        option2: "false",
        option3: "Error",
        option4: "undefined",
        ans: "true"
    },
    {
        question: "Which of the following is the correct way to create a private variable in JavaScript?",
        option1: "Using a closure",
        option2: "Using `var` inside a function",
        option3: "Using `this.privateVariable`",
        option4: "Using `let` outside of a function",
        ans: "Using a closure"
    },
    {
        question: "What will be the output of `console.log(null == undefined);`?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "null",
        ans: "true"
    },
    {
        question: "Which of the following will NOT create an infinite loop?",
        option1: "`while(true) {}`",
        option2: "`for(;;) {}`",
        option3: "`setTimeout(function() { while(true) {} }, 0);`",
        option4: "`setInterval(function() { while(true) {} }, 0);`",
        ans: "`setTimeout(function() { while(true) {} }, 0);`"
    },
    {
        question: "What will `console.log(typeof([]));` return?",
        option1: "'object'",
        option2: "'array'",
        option3: "'undefined'",
        option4: "'null'",
        ans: "'object'"
    },
    {
        question: "What will `console.log([1, 2, 3] + [4, 5, 6]);` return?",
        option1: "'1,2,34,5,6'",
        option2: "'[1, 2, 3, 4, 5, 6]'",
        option3: "Error",
        option4: "'1,2,34,5,6'",
        ans: "'1,2,34,5,6'"
    },
    {
        question: "What will `console.log(!!null);` return?",
        option1: "true",
        option2: "false",
        option3: "undefined",
        option4: "Error",
        ans: "false"
    }
];
