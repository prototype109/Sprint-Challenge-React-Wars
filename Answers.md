# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library created by Facebook that solves the issue of having your javascript small enough that it only does what it has to by putting them in their own self contained components so less things can go wrong and make the code easier to debug. Also React uses declarative programming where we have a function we just call to do what we need to do and not worry about the underlying functionality behind the function call.

1. What does it mean to think in react?

It means to think of the webpage that one is working on as a whole as a collection of small components that create a fully functional website that can have parts that are easily reusable to add to another webpage with minimal changes.

1. Describe state.

State is the current render of our page and it's components that can change on some update at re-renders the current state.

1. Describe props.

Props are objects that are passed into a component as attributes that can be accessed within the component as "props.[key]".

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are outside updates/changes to our code that can be asynchronous and have to be dealt with using the useEffect() function that can update our code when neccessary.
