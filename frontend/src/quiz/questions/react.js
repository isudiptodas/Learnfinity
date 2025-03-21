export const easyLevel = [
    {
      question: "What is React?",
      option1: "A JavaScript library for building user interfaces",
      option2: "A backend framework",
      option3: "A database management tool",
      option4: "A programming language",
      ans: "A JavaScript library for building user interfaces"
    },
    {
      question: "Which company developed React?",
      option1: "Google",
      option2: "Facebook (Meta)",
      option3: "Microsoft",
      option4: "Amazon",
      ans: "Facebook (Meta)"
    },
    {
      question: "Which syntax is used to write React components?",
      option1: "HTML",
      option2: "JSX",
      option3: "CSS",
      option4: "Python",
      ans: "JSX"
    },
    {
      question: "How do you create a functional component in React?",
      option1: "function MyComponent() {}",
      option2: "class MyComponent extends React.Component {}",
      option3: "def MyComponent():",
      option4: "new MyComponent()",
      ans: "function MyComponent() {}"
    },
    {
      question: "Which hook is used to handle state in React?",
      option1: "useState",
      option2: "useEffect",
      option3: "useReducer",
      option4: "useRef",
      ans: "useState"
    },
    {
      question: "Which command is used to create a new React app?",
      option1: "npx create-react-app my-app",
      option2: "npm install react",
      option3: "react new my-app",
      option4: "node create my-app",
      ans: "npx create-react-app my-app"
    },
    {
      question: "Which file is the entry point of a React application?",
      option1: "index.js",
      option2: "App.js",
      option3: "main.js",
      option4: "script.js",
      ans: "index.js"
    },
    {
      question: "Which method is used to render a component in React?",
      option1: "ReactDOM.render()",
      option2: "React.render()",
      option3: "Component.render()",
      option4: "renderComponent()",
      ans: "ReactDOM.render()"
    },
    {
      question: "What is the purpose of props in React?",
      option1: "To manage component state",
      option2: "To pass data between components",
      option3: "To update the DOM",
      option4: "To add event listeners",
      ans: "To pass data between components"
    },
    {
      question: "What does React use to update the UI efficiently?",
      option1: "Real DOM",
      option2: "Virtual DOM",
      option3: "Shadow DOM",
      option4: "Web Workers",
      ans: "Virtual DOM"
    }
  ];
  
  export const mediumLevel = [
    {
      question: "Which hook is used to perform side effects in React?",
      option1: "useState",
      option2: "useEffect",
      option3: "useContext",
      option4: "useReducer",
      ans: "useEffect"
    },
    {
      question: "What is a higher-order component (HOC) in React?",
      option1: "A function that returns another function",
      option2: "A function that takes a component and returns a new component",
      option3: "A built-in React component",
      option4: "A component that manages global state",
      ans: "A function that takes a component and returns a new component"
    },
    {
      question: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
      option1: "componentWillMount",
      option2: "componentDidMount",
      option3: "componentWillUpdate",
      option4: "componentDidUpdate",
      ans: "componentDidMount"
    },
    {
      question: "What does the useContext hook do?",
      option1: "Manages global state",
      option2: "Creates a new component",
      option3: "Performs side effects",
      option4: "Handles routing",
      ans: "Manages global state"
    },
    {
      question: "What is the purpose of useRef in React?",
      option1: "To manage state",
      option2: "To reference DOM elements or persist values across renders",
      option3: "To create a new component",
      option4: "To handle side effects",
      ans: "To reference DOM elements or persist values across renders"
    },
    {
      question: "What will happen if you update a state inside useEffect without dependencies?",
      option1: "It will cause an infinite loop",
      option2: "It will only run once",
      option3: "It will throw an error",
      option4: "Nothing will happen",
      ans: "It will cause an infinite loop"
    },
    {
      question: "Which statement is true about React fragments?",
      option1: "They help group multiple elements without adding extra DOM nodes",
      option2: "They are mandatory in React components",
      option3: "They replace div elements",
      option4: "They are the same as arrays",
      ans: "They help group multiple elements without adding extra DOM nodes"
    },
    {
      question: "Which hook is used for performance optimization in React?",
      option1: "useState",
      option2: "useEffect",
      option3: "useMemo",
      option4: "useRef",
      ans: "useMemo"
    },
    {
      question: "What does the useReducer hook do?",
      option1: "Manages complex state logic",
      option2: "Handles API requests",
      option3: "Performs side effects",
      option4: "Manages UI styling",
      ans: "Manages complex state logic"
    },
    {
      question: "How can you prevent unnecessary re-renders in React?",
      option1: "Using useCallback and useMemo",
      option2: "Using only functional components",
      option3: "Avoiding hooks",
      option4: "Removing JSX elements",
      ans: "Using useCallback and useMemo"
    },
    {
      question: "What is the main purpose of React portals?",
      option1: "To enable component reusability",
      option2: "To render elements outside the parent DOM hierarchy",
      option3: "To manage state more efficiently",
      option4: "To replace Redux",
      ans: "To render elements outside the parent DOM hierarchy"
    },
    {
      question: "Which of the following is NOT a valid way to handle events in React?",
      option1: "Using inline event handlers",
      option2: "Using event listeners directly on the DOM",
      option3: "Using arrow functions in event handlers",
      option4: "Using class methods",
      ans: "Using event listeners directly on the DOM"
    },
    {
      question: "Why is it recommended to use keys in lists?",
      option1: "To uniquely identify elements and optimize re-rendering",
      option2: "To add CSS styles",
      option3: "To improve browser performance",
      option4: "To make JSX work",
      ans: "To uniquely identify elements and optimize re-rendering"
    },
    {
      question: "Which of the following is a controlled component in React?",
      option1: "A component that manages its own state internally",
      option2: "A component that relies on React state for form inputs",
      option3: "A component that does not use props",
      option4: "A component that never re-renders",
      ans: "A component that relies on React state for form inputs"
    },
    {
      question: "What does the Strict Mode in React do?",
      option1: "Identifies potential problems in an application",
      option2: "Disables rendering of components",
      option3: "Improves performance",
      option4: "Removes all warnings",
      ans: "Identifies potential problems in an application"
    },
    {
      question: "Which function is used to update state in class components?",
      option1: "this.setState()",
      option2: "useState()",
      option3: "setUpdate()",
      option4: "changeState()",
      ans: "this.setState()"
    },
    {
      question: "What is the default behavior of useEffect?",
      option1: "Runs after every render",
      option2: "Runs only on the first render",
      option3: "Runs before rendering",
      option4: "Runs only on unmount",
      ans: "Runs after every render"
    },
    {
      question: "Which of these can be used for global state management in React?",
      option1: "useState",
      option2: "useEffect",
      option3: "useContext",
      option4: "useMemo",
      ans: "useContext"
    },
    {
      question: "What is React's reconciliation process?",
      option1: "The process of comparing Virtual DOM with Real DOM and updating changes",
      option2: "The process of merging multiple state updates",
      option3: "The process of handling event delegation",
      option4: "A debugging tool in React",
      ans: "The process of comparing Virtual DOM with Real DOM and updating changes"
    },
    {
      question: "What is the role of React.StrictMode?",
      option1: "Prevents rendering issues in production",
      option2: "Detects potential problems in components",
      option3: "Boosts rendering speed",
      option4: "Prevents state updates",
      ans: "Detects potential problems in components"
    }
  ];
  
  export const hardLevel = [
    {
      question: "What is the difference between useMemo and useCallback?",
      option1: "useMemo returns a memoized function, useCallback returns a memoized value",
      option2: "useMemo returns a memoized value, useCallback returns a memoized function",
      option3: "Both return memoized functions",
      option4: "Both return memoized values",
      ans: "useMemo returns a memoized value, useCallback returns a memoized function"
    },
    {
      question: "How does React Fiber improve performance?",
      option1: "By blocking the main thread",
      option2: "By breaking rendering work into smaller units",
      option3: "By using class components",
      option4: "By removing the virtual DOM",
      ans: "By breaking rendering work into smaller units"
    },
    {
      question: "What is the purpose of React.lazy?",
      option1: "To improve component styling",
      option2: "To lazy load components dynamically",
      option3: "To avoid using hooks",
      option4: "To manage global state",
      ans: "To lazy load components dynamically"
    },
    {
      question: "Why is useLayoutEffect sometimes preferred over useEffect?",
      option1: "It runs synchronously after render but before the screen updates",
      option2: "It always runs asynchronously",
      option3: "It is deprecated",
      option4: "It has better performance",
      ans: "It runs synchronously after render but before the screen updates"
    },
    {
      question: "What is the difference between context API and Redux?",
      option1: "Context API is built into React, Redux is an external library",
      option2: "Redux is simpler than Context API",
      option3: "Context API is only for small applications",
      option4: "Redux does not support middleware",
      ans: "Context API is built into React, Redux is an external library"
    },
    {
      question: "How does React handle concurrent rendering?",
      option1: "Using React Fiber to schedule updates in priority order",
      option2: "By rendering components synchronously",
      option3: "By blocking the main thread",
      option4: "By using Redux for state management",
      ans: "Using React Fiber to schedule updates in priority order"
    },
    {
      question: "What is the difference between a controlled and uncontrolled component?",
      option1: "Controlled components use state, uncontrolled components use refs",
      option2: "Uncontrolled components cannot be used in React",
      option3: "Controlled components use refs, uncontrolled components use state",
      option4: "There is no difference",
      ans: "Controlled components use state, uncontrolled components use refs"
    },
    {
      question: "Why is reconciliation important in React?",
      option1: "It determines how React updates the DOM efficiently",
      option2: "It prevents JavaScript errors",
      option3: "It handles event delegation",
      option4: "It speeds up component mounting",
      ans: "It determines how React updates the DOM efficiently"
    },
    {
      question: "Which of the following is true about React Server Components?",
      option1: "They reduce JavaScript sent to the client",
      option2: "They replace React hooks",
      option3: "They are used for animations",
      option4: "They are only used with Next.js",
      ans: "They reduce JavaScript sent to the client"
    },
    {
      question: "What is suspense in React?",
      option1: "A way to handle asynchronous rendering and data fetching",
      option2: "A new React hook",
      option3: "A function to optimize component updates",
      option4: "A replacement for useState",
      ans: "A way to handle asynchronous rendering and data fetching"
    },
    {
      question: "Why is useReducer sometimes preferred over useState?",
      option1: "For managing complex state logic",
      option2: "For improving component styling",
      option3: "For handling API requests",
      option4: "For replacing Redux",
      ans: "For managing complex state logic"
    },
    {
      question: "What is hydration in React?",
      option1: "Reusing server-rendered HTML on the client",
      option2: "Adding watermarks to components",
      option3: "Improving hydration levels in React apps",
      option4: "A process of updating Redux state",
      ans: "Reusing server-rendered HTML on the client"
    },
    {
      question: "Why should you avoid modifying state directly in React?",
      option1: "It causes React to crash",
      option2: "It does not trigger re-renders",
      option3: "It is only a recommendation",
      option4: "It is slower than modifying state directly",
      ans: "It does not trigger re-renders"
    },
    {
      question: "What happens when a function component returns null?",
      option1: "Nothing is rendered in the DOM",
      option2: "React throws an error",
      option3: "It crashes the application",
      option4: "React removes the component",
      ans: "Nothing is rendered in the DOM"
    },
    {
      question: "How does React handle synthetic events?",
      option1: "It wraps native events to provide consistent behavior",
      option2: "It prevents all event bubbling",
      option3: "It disables event listeners",
      option4: "It makes event handling asynchronous",
      ans: "It wraps native events to provide consistent behavior"
    }
  ];
  