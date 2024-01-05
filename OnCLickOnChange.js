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




//onBlur Event
import React, { useState } from 'react';

const BlurExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleBlur = () => {
    console.log('Input field lost focus');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Type something"
      />
    </div>
  );
};

export default BlurExample;
