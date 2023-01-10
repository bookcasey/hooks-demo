import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Users useEffect ran');
    const abortController = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: abortController.signal
        });
        const users = await response.json();
        setUsers(users);

      } catch (e) {
        if (e.name === 'AbortError') { }
        else { throw e; }
      }
    }
    fetchUsers();

    // This will run when component is unmounted
    return () => {
      console.log('Cleanup function ran');
      abortController.abort();
    }
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.username}</li>)}
    </ul>
  )
}

export default Users;