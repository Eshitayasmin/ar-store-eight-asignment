import React from 'react';
import './QnA.css';

const Qna = () => {
    return (
        <div>
            <div className='answer'>
                <h2>Question: How React Works?</h2>
                <h3>Answer:</h3>
                <p>React is a efficient JavaScript library for building user interfaces. The Real DOM represents the entire UI of the web applications. The Real DOM virtual representation is called Virtual DOM. React uses virtual DOM to enhance its performance. Virtual DOM stores a representation of the UI in memory. Whenever something is change in the state/props, a new virtual DOM will be created and it will be compared the Real DOM. React only changes what needs to be changed.  </p>

            </div> 
               
            <div className='answer'>
                <h2>Question: Props Vs State</h2>
             <div className='Question-two'>
               <div>
               <h2>Props:</h2>
                <p>1. Props are read only.</p>
                <p>2. Props can not be modified.</p>
                <p>3. Props are immutable.</p>
                <p>4. Props can be accessed by the child component.</p>
                <p>5. Stateless component can have props.</p>
               </div>

                <div>
                <h2>State:</h2>
                <p>1. State changes can be asynchronous.</p>
                <p>2. State can be modified using (this.setState).</p>
                <p>3. State are mutable.</p>
                <p>4. State cannot be accessed by child components.</p>
                <p>5. Stateless component can not have state.</p>
                </div>

            </div>

         </div>

         <div className='answer'>
            <h2>Question: How useState() works?</h2>
            <h3>Answer:</h3>
            <p>React have two types of components, one is class components and other is functional components. The useState() is a hook that allows state variables in functional components. The useState() hook takes an initial state. It returns variables and function. Variable is a initial state. Function is used for update initial state. </p>
         </div>
        </div>
    );
};

export default Qna;