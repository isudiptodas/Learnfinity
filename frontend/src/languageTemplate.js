export const languageTemplates = {
  javascript: `// JavaScript Hello World Example\nconsole.log("Hello, World!");`,
  typescript: `// TypeScript Hello World Example\ntype Greeting = string;\nconst greet: Greeting = "Hello, World!";\nconsole.log(greet);`,
  cpp: `#include<iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  python: `# Python Hello World Example\nprint("Hello, World!")`,
  csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`,
  rust: `fn main() {\n    println!("Hello, World!");\n}`,
  go: `// Go Hello World Example\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
  php: `<?php\n// PHP Hello World Example\necho "Hello, World!";\n?>`
};


export const languageVersions = [
  {
    "language": "typescript",
    "version": "5.0.3",
    "runtime": "deno"
},

{
  "language": "javascript",
  "version": "18.15.0",
  "runtime": "deno"
},

{
  "language": "c",
  "version": "10.2.0",
  "runtime": "gcc"
},

{
  "language": "cpp",
  "version": "10.2.0",
  "runtime": "gcc"
},

{
  "language": "go",
  "version": "1.16.2",
},

{
  "language": "java",
  "version": "15.0.2",
},

{
  "language": "csharp",
  "version": "6.12.0",
  "runtime": "mono"
},

{
  "language": "php",
  "version": "8.2.3",
},

{
  "language": "python",
  "version": "3.10.0",
},

{
  "language": "rust",
  "version": "1.68.2",
},
];

export const monacoLanguage = {

}