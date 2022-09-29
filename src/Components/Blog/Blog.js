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

        </div>
    );
};

export default Blog;