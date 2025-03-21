export const easyLevel = [
    {
      question: "What is Node.js primarily used for?",
      option1: "Building mobile apps",
      option2: "Backend development",
      option3: "Game development",
      option4: "AI modeling",
      ans: "Backend development"
    },
    {
      question: "Node.js is built on which JavaScript engine?",
      option1: "Chakra",
      option2: "SpiderMonkey",
      option3: "V8",
      option4: "JavaScriptCore",
      ans: "V8"
    },
    {
      question: "Which command is used to initialize a new Node.js project?",
      option1: "npm install",
      option2: "node init",
      option3: "npm init",
      option4: "node start",
      ans: "npm init"
    },
    {
      question: "Which file is used to manage project dependencies in a Node.js application?",
      option1: "package.json",
      option2: "index.js",
      option3: "config.js",
      option4: "server.js",
      ans: "package.json"
    },
    {
      question: "How do you import a module in Node.js?",
      option1: "import moduleName from 'module'",
      option2: "require('module')",
      option3: "include 'module'",
      option4: "load('module')",
      ans: "require('module')"
    },
    {
      question: "Which built-in module is used to create a server in Node.js?",
      option1: "fs",
      option2: "http",
      option3: "url",
      option4: "path",
      ans: "http"
    },
    {
      question: "Which command runs a Node.js file?",
      option1: "run node file.js",
      option2: "node file.js",
      option3: "npm start file.js",
      option4: "execute file.js",
      ans: "node file.js"
    },
    {
      question: "Which of the following is NOT a built-in module in Node.js?",
      option1: "fs",
      option2: "express",
      option3: "path",
      option4: "http",
      ans: "express"
    },
    {
      question: "What does 'npm' stand for?",
      option1: "Node Package Manager",
      option2: "Node Program Manager",
      option3: "New Package Manager",
      option4: "Next Programming Module",
      ans: "Node Package Manager"
    },
    {
      question: "How do you install a package using npm?",
      option1: "npm download package-name",
      option2: "npm get package-name",
      option3: "npm install package-name",
      option4: "node install package-name",
      ans: "npm install package-name"
    },
    {
      question: "Which method is used to read a file in Node.js?",
      option1: "fs.readFile()",
      option2: "fs.openFile()",
      option3: "fs.loadFile()",
      option4: "fs.getFile()",
      ans: "fs.readFile()"
    },
    {
      question: "Which module is used to work with file paths in Node.js?",
      option1: "fs",
      option2: "http",
      option3: "path",
      option4: "url",
      ans: "path"
    },
    {
      question: "Which framework is commonly used with Node.js for building web applications?",
      option1: "React",
      option2: "Vue",
      option3: "Express",
      option4: "Angular",
      ans: "Express"
    },
    {
      question: "Which method is used to create a simple HTTP server in Node.js?",
      option1: "http.createServer()",
      option2: "http.newServer()",
      option3: "http.initServer()",
      option4: "http.startServer()",
      ans: "http.createServer()"
    },
    {
      question: "Which of these statements about Node.js is TRUE?",
      option1: "Node.js runs only on Windows",
      option2: "Node.js is single-threaded",
      option3: "Node.js does not support JavaScript",
      option4: "Node.js is a front-end framework",
      ans: "Node.js is single-threaded"
    },
    {
      question: "How do you uninstall a package using npm?",
      option1: "npm remove package-name",
      option2: "npm delete package-name",
      option3: "npm uninstall package-name",
      option4: "npm erase package-name",
      ans: "npm uninstall package-name"
    },
    {
      question: "Which statement is correct about Node.js event-driven architecture?",
      option1: "It blocks execution until an event is triggered",
      option2: "It uses a single-threaded, non-blocking model",
      option3: "It runs each event in a separate thread",
      option4: "It does not support asynchronous programming",
      ans: "It uses a single-threaded, non-blocking model"
    },
    {
      question: "What is the default entry file for a Node.js application?",
      option1: "index.html",
      option2: "server.js",
      option3: "index.js",
      option4: "app.js",
      ans: "index.js"
    },
    {
      question: "Which method is used to write to a file in Node.js?",
      option1: "fs.appendFile()",
      option2: "fs.writeFile()",
      option3: "fs.addToFile()",
      option4: "fs.insertFile()",
      ans: "fs.writeFile()"
    },
    {
      question: "Which command lists all globally installed npm packages?",
      option1: "npm show -g",
      option2: "npm list -g",
      option3: "npm get -g",
      option4: "npm check -g",
      ans: "npm list -g"
    }
];

export const mediumLevel = [
    {
      question: "Which core module in Node.js is used to handle events?",
      option1: "fs",
      option2: "events",
      option3: "http",
      option4: "path",
      ans: "events"
    },
    {
      question: "How do you create an instance of an event emitter in Node.js?",
      option1: "new EventEmitter()",
      option2: "events.createEmitter()",
      option3: "require('events').EventEmitter()",
      option4: "new (require('events').EventEmitter)()",
      ans: "new (require('events').EventEmitter)()"
    },
    {
      question: "Which command is used to install a package as a development dependency?",
      option1: "npm install package-name",
      option2: "npm install package-name --save",
      option3: "npm install package-name --save-dev",
      option4: "npm install package-name --dev",
      ans: "npm install package-name --save-dev"
    },
    {
      question: "Which method is used to serve static files in Express.js?",
      option1: "app.use(express.static('folder-name'))",
      option2: "app.static('folder-name')",
      option3: "express.staticServe('folder-name')",
      option4: "app.staticFiles('folder-name')",
      ans: "app.use(express.static('folder-name'))"
    },
    {
      question: "How do you handle errors in an asynchronous function in Node.js?",
      option1: "Using try...catch",
      option2: "Using a callback function",
      option3: "Using .then() and .catch()",
      option4: "All of the above",
      ans: "All of the above"
    },
    {
      question: "What does 'req.params' store in Express.js?",
      option1: "Query parameters",
      option2: "Route parameters",
      option3: "Headers",
      option4: "Request body",
      ans: "Route parameters"
    },
    {
      question: "Which of the following is NOT a valid HTTP method?",
      option1: "GET",
      option2: "POST",
      option3: "FETCH",
      option4: "DELETE",
      ans: "FETCH"
    },
    {
      question: "What does 'req.body' store in Express.js?",
      option1: "Route parameters",
      option2: "Query parameters",
      option3: "Request payload",
      option4: "Headers",
      ans: "Request payload"
    },
    {
      question: "How do you start an Express.js server on port 3000?",
      option1: "app.run(3000)",
      option2: "app.start(3000)",
      option3: "app.listen(3000)",
      option4: "server.init(3000)",
      ans: "app.listen(3000)"
    },
    {
      question: "Which middleware function in Express.js is used to parse JSON request bodies?",
      option1: "express.urlencoded()",
      option2: "express.json()",
      option3: "express.text()",
      option4: "express.parse()",
      ans: "express.json()"
    },
    {
      question: "Which of the following is used to manage environment variables in a Node.js project?",
      option1: "dotenv",
      option2: "fs",
      option3: "path",
      option4: "http",
      ans: "dotenv"
    },
    {
      question: "Which module in Node.js is used for working with URLs?",
      option1: "path",
      option2: "fs",
      option3: "url",
      option4: "http",
      ans: "url"
    },
    {
      question: "Which package is used for hashing passwords in Node.js?",
      option1: "bcrypt",
      option2: "jsonwebtoken",
      option3: "cookie-parser",
      option4: "passport",
      ans: "bcrypt"
    },
    {
      question: "How can you read an environment variable in Node.js?",
      option1: "process.env.VARIABLE_NAME",
      option2: "env.get('VARIABLE_NAME')",
      option3: "config.get('VARIABLE_NAME')",
      option4: "settings.get('VARIABLE_NAME')",
      ans: "process.env.VARIABLE_NAME"
    },
    {
      question: "Which of the following is a correct way to handle CORS in Express.js?",
      option1: "app.use(cors())",
      option2: "app.use(cors({ origin: '*' }))",
      option3: "Manually set headers using res.setHeader()",
      option4: "All of the above",
      ans: "All of the above"
    },
    {
      question: "Which package is used for handling authentication in Node.js applications?",
      option1: "express-auth",
      option2: "passport",
      option3: "authenticator",
      option4: "session-handler",
      ans: "passport"
    },
    {
      question: "Which of the following statements about Node.js streams is TRUE?",
      option1: "Streams work only with HTTP requests",
      option2: "Streams read or write data sequentially in chunks",
      option3: "Streams are synchronous by default",
      option4: "Streams can only be used with the fs module",
      ans: "Streams read or write data sequentially in chunks"
    },
    {
      question: "Which package is commonly used for logging in Node.js applications?",
      option1: "winston",
      option2: "morgan",
      option3: "log4js",
      option4: "All of the above",
      ans: "All of the above"
    },
    {
      question: "Which Node.js module is used to create child processes?",
      option1: "worker_threads",
      option2: "cluster",
      option3: "child_process",
      option4: "events",
      ans: "child_process"
    }
];

export const hardLevel = [
    {
      question: "Which Node.js module is used for inter-process communication (IPC) between multiple worker processes?",
      option1: "child_process",
      option2: "cluster",
      option3: "worker_threads",
      option4: "events",
      ans: "cluster"
    },
    {
      question: "What is the purpose of the 'next()' function in Express.js middleware?",
      option1: "To call the next middleware in the stack",
      option2: "To terminate the request-response cycle",
      option3: "To send a response to the client",
      option4: "To restart the server",
      ans: "To call the next middleware in the stack"
    },
    {
      question: "How does the Node.js event loop prioritize tasks?",
      option1: "Process.nextTick() -> Microtasks -> Timers -> I/O Callbacks -> Check -> Close Callbacks",
      option2: "Microtasks -> Process.nextTick() -> Timers -> I/O Callbacks -> Check -> Close Callbacks",
      option3: "Timers -> Microtasks -> I/O Callbacks -> Check -> Close Callbacks -> Process.nextTick()",
      option4: "Microtasks -> Timers -> I/O Callbacks -> Check -> Close Callbacks -> Process.nextTick()",
      ans: "Process.nextTick() -> Microtasks -> Timers -> I/O Callbacks -> Check -> Close Callbacks"
    },
    {
      question: "Which method is used to prevent an application from crashing due to unhandled errors?",
      option1: "try...catch blocks",
      option2: "process.on('uncaughtException', callback)",
      option3: "Using async error handlers",
      option4: "All of the above",
      ans: "All of the above"
    },
    {
      question: "Which is the most secure way to store API keys in a Node.js application?",
      option1: "Hardcoding them in the code",
      option2: "Storing them in a .env file",
      option3: "Writing them in a JavaScript config file",
      option4: "Including them in the frontend JavaScript",
      ans: "Storing them in a .env file"
    },
    {
      question: "Which package can be used for rate limiting in an Express.js application?",
      option1: "express-rate-limiter",
      option2: "rate-limiter-express",
      option3: "express-rate-limit",
      option4: "rate-control",
      ans: "express-rate-limit"
    },
    {
      question: "How can you use Node.js to create an HTTPS server?",
      option1: "Using the https module with SSL certificates",
      option2: "Using the http module",
      option3: "Using the express module directly",
      option4: "Node.js does not support HTTPS",
      ans: "Using the https module with SSL certificates"
    },
    {
      question: "Which module is used for cryptographic operations in Node.js?",
      option1: "crypto",
      option2: "bcrypt",
      option3: "jsonwebtoken",
      option4: "secure-hash",
      ans: "crypto"
    },
    {
      question: "Which function can be used to schedule a task at the next available event loop iteration?",
      option1: "setImmediate()",
      option2: "setTimeout()",
      option3: "process.nextTick()",
      option4: "setInterval()",
      ans: "process.nextTick()"
    },
    {
      question: "Which type of stream allows both reading and writing in Node.js?",
      option1: "Writable Stream",
      option2: "Readable Stream",
      option3: "Duplex Stream",
      option4: "Transform Stream",
      ans: "Duplex Stream"
    },
    {
      question: "What is the best way to handle file uploads in a Node.js application?",
      option1: "Using the 'fs' module",
      option2: "Using the 'multer' package",
      option3: "Using the 'http' module",
      option4: "Directly storing files in a database",
      ans: "Using the 'multer' package"
    },
    {
      question: "Which package can be used to validate and sanitize user input in Express.js?",
      option1: "express-validator",
      option2: "validator.js",
      option3: "sanitize-input",
      option4: "security-checker",
      ans: "express-validator"
    },
    {
      question: "Which of the following can be used to debug a Node.js application?",
      option1: "console.log()",
      option2: "Node.js Debugger (node --inspect)",
      option3: "Chrome DevTools",
      option4: "All of the above",
      ans: "All of the above"
    },
    {
      question: "Which of the following statements about asynchronous programming in Node.js is TRUE?",
      option1: "Async/Await is built on top of Promises",
      option2: "Callbacks are the most modern way to handle asynchronous tasks",
      option3: "Blocking code is preferred over non-blocking code in Node.js",
      option4: "setTimeout() runs immediately",
      ans: "Async/Await is built on top of Promises"
    },
    {
      question: "What does the 'cluster' module do in Node.js?",
      option1: "Allows running multiple instances of an application to handle load",
      option2: "Manages dependencies between modules",
      option3: "Creates secure connections between databases",
      option4: "Optimizes event loop execution",
      ans: "Allows running multiple instances of an application to handle load"
    }
];
