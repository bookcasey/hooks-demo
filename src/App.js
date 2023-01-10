import { useState } from 'react';
import Counter from './Counter';
import Users from './Users';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [usersVisible, setUsersVisible] = useState(false);

  const incrementCount = () => {
    setCount(oldCount => oldCount + 1);
  }

  return (
    <div className="App">
      <h1>My App</h1>
      <Counter
        count={count}
        incrementCount={incrementCount}
      />

      <button onClick={() => setUsersVisible(!usersVisible)}>Toggle users</button>
      {usersVisible ? <Users /> : ''}
    </div>
  );
}

export default App;
