//onClick event
import React from 'react';

const ClickExample = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickExample;




//onChange Event
import React, { useState } from 'react';

const ChangeExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default ChangeExample;


