### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript library for building user interfaces. It allows a developer to create fast user interfaces for websites and applications.It was developed and is maintained by Facebook.
- What is Babel?
    Babel is a JavaScript compiler that allows developers to use next-generation JavaScript features.
- What is JSX?
    JSX stands for Javascript XML. It allows us to use html in react.
- How is a Component created in React?
    There are two main ways to create components in React: functional components and class components. 
- What are some difference between state and props?
    Props are used to pass data from a parent component, while state is used to manage date in that component.
- What does "downward data flow" refer to in React?
    The passing of data or functions via props from parent to child components.
- What is a controlled component?
    Components that have their state and behavior controlled by their parent components.
- What is an uncontrolled component?
    Components that manage their own state internally.
- What is the purpose of the `key` prop when rendering a list of components?
    To help react differentiate between the items and perform updated more efficiently.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    It would not be stable since the array can mutate and indices can shift around.
- Describe useEffect.  What use cases is it used for in React components?
    Allows you to perform side effects in your components. Tells react that your components needs to do something after render.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    Is a hook that allows you to persist values between renders. A change to a ref value does not cause a rerender of a component. 
- When would you use a ref? When wouldn't you use one?
    To pass an argument to a method by reference. When you can does someing declaratively.
- What is a custom hook in React? When would you want to write one?
    A custom hook in React is a JavaScript function that utilizes React hooks to enable the reuse of logic across different components. When you have an app that is bg enough to reuse code, it allows for the app to keep pages small and organized.