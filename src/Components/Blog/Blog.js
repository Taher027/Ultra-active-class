import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='Blog_content'>
            <h2>How does react work?
            </h2>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
            <h2>What are the difference between props and state?</h2>
            <p>In props, The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components.</p>
            <p>In state, The Data is passed within the component only. State can be used only with the state components/class component (Before 16.0). State is both read and write.</p>

            <h2>Without load data what can we do with useState?</h2>
            <p>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>

        </div>
    );
};

export default Blog;