import React from 'react';
import './QnA.css';

const Qna = () => {
    return (
        <div>
            <div className='answer'>
                <h2>Question: How React Works</h2>
                <h3>Answer:</h3>
                <p>React is a efficient JavaScript library for building user interfaces. The Real DOM represents the entire UI of the web applications. The Real DOM virtual representation is called Virtual DOM. React uses virtual DOM to enhance its performance. Virtual DOM stores a representation of the UI in memory. Whenever something is change in the state/props, a new virtual DOM will be created and it will be compared the Real DOM. React only changes what needs to be changed.  </p>

            </div> 
               
            <div className='answer'>
                <h2>Question: Props Vs State</h2>

                <h2>Props:</h2>
                <p>1. Props are read only.</p>
                <p>2. Props can not be modified.</p>
                <p>3. Props are immutable.</p>
                <p>4. Props can be accessed by the child component.</p>
                <p>5. Stateless component can have props.</p>

                <h2>State:</h2>
                <p>1. State changes can be asynchronous.</p>
                <p>2. State can be modified using (this.setState).</p>
                <p>3. State are mutable.</p>
                <p>4. State cannot be accessed by child components.</p>
                <p>5. Stateless component can not have state.</p>

            </div>
        </div>
    );
};

export default Qna;