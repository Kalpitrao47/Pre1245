//What is a Callback function in Javascript?
//When u call a function and you pass inside another function is known as a callback function.
// example1:
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})
//example2:
setTimeout(function(){
    console.log("timer");
},5000)



//In React, a callback function is a function that is passed as a parameter to another function or component. 
// It is often used to handle events or to pass data from a child component to a parent component. 
// Here's an example of using a callback function in a React component:
//example1: Call function in React
import React from 'react';

const ParentComponent = () => {
  // Callback function to be passed to the child component
  const handleButtonClick = () => {
    alert('Button in Child Component clicked!');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
};

const ChildComponent = ({ onButtonClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
};

export default ParentComponent;


//example2: Call function in React
import React, { useState } from 'react';

const ParentComponent = () => {
  const [childData, setChildData] = useState('');

  // Callback function to handle data from the child component
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onDataReceived={handleChildData} />
      <p>Data from Child Component: {childData}</p>
    </div>
  );
};

const ChildComponent = ({ onDataReceived }) => {
  const sendDataToParent = () => {
    const data = 'Hello from Child!';
    // Call the callback function to send data to the parent component
    onDataReceived(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ParentComponent;
