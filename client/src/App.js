import { useState, useEffect } from 'react';
import myApi from './api/Api';

function App() {
  const [users, setUsers] = useState({});

  console.log(process.env.NODE_ENV);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await myApi.get('users/all');
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getUsers();
  }, []);

  const renderUsers = () => {
    return Object.keys(users).map((userId) => {
      return (
        <div key={userId}>
          <h3>{`user ${userId}`}</h3>
          <p>{`cash=${users[userId].cash}, credit=${users[userId].credit}`}</p>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <h1>All users</h1>
      <div>
        { renderUsers() }
      </div>
    </div>
  );


}

export default App;
