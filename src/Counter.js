import { useEffect } from "react";

function Counter({ count, incrementCount }) {
  console.log('When does like 4 run?'); // Any props/state change

  useEffect(() => {
    // document.title = `Count: ${count}`;
    console.log('When does line 8 run?'); // Make some code run ONE time.
  }, [count]);

  // No array, means the code will run every render.
  // * Empty array, means the code will run once when loaded.
  // Array with items, code will run when items change

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default Counter;