import { useState } from 'react';

// Define your custom hook
export const useCustomElement = () => {
  const [count, setCount] = useState(0);

  // Function to handle the click event and update the count
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // JSX element returned by the hook
  const element = (
    <div>
      <h2>Custom JSX Element</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );

  // Return the JSX element and any other values you may need
  return { element, count };
};
