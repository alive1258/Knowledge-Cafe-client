import React from "react";

const Question = () => {
  return (
    <div className="container px-10 py-10">
      <div>
        <p className="lg:text-2xl">
          Q.1. What is the different of props and state?
        </p>

        <p>
          <span className="lg:text-2xl">props:</span>
          <br />
          (1). Props are immutable. <br />
          (2). Props are read-only. <br />
          (3). Props allow you to pass data from one component to other
          components as an argument. <br />
          (4).Props are used to communicate between components. <br />
          (5).Props can be accessed by the child component.
        </p>
        <p>
          <span className="lg:text-2xl">State:</span> <br />
          (1).State is mutable. <br />
          (2).State changes can be asynchronous. <br />
          (3).State holds information about the components. <br />
          (4).States can be used for rendering dynamic changes with the
          component. <br />
          (5). State cannot be accessed by child components.
        </p>
      </div>
      <div className="mt-8">
        <p className="lg:text-2xl">Q.2.How dose useState Works ?</p>
        <p>
          <span className="lg:text-2xl">useState:</span>
        </p>
        <p>
          useState is React Hook that allows you to add state to a functional
          component. It returns an array with two values: the current state and
          a function to update it. The Hook takes an initial state value as an
          argument and returns an updated state value whenever the setter
          function is called. The useState hook is used for storing variables
          that are part of your application's state and will change as the user
          interacts with your website
        </p>
      </div>
      <div className="mt-8">
        <p className="lg:text-2xl">Q.3.How dose useEffect Works ?</p>
        <p>
          <span className="lg:text-2xl">useEffect:</span>
        </p>
        <p>
          useEffect hook is part of React’s Hooks API. The core principle of
          this hook is to let you perform side effects in your functional
          components. The useEffect hook is a smooth combination of React’s
          lifecycle methods like componentDidMount, componentDidUpdate and
          componentWillUnmount. According to React documentation, the useEffect
          hook was developed to overcome some challenges posed by the life cycle
          methods of ES6 class components.{" "}
        </p>
      </div>

      <div className="mt-8">
        <p className="lg:text-2xl">Q.4.How dose React Works ?</p>
        <p>
          <span className="lg:text-2xl">React:</span>
        </p>
        <p>
          ReactJS is one of the most popular JavaScript libraries for mobile and
          web application development. Created by Facebook, React contains a
          collection of reusable JavaScript code snippets used for user
          interface (UI) building called components. React components work
          similarly to JavaScript functions as they accept arbitrary inputs
          called properties or props. It's possible to have as many components
          as necessary without cluttering your code
        </p>
      </div>
    </div>
  );
};

export default Question;
