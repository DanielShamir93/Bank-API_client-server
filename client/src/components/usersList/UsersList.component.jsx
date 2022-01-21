import { useState, useEffect } from 'react';
import myApi from '../../api/Api';
import User from '../user/User.component';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await myApi.get('/all');
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getUsers();
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <User key={user._id} user={user}/>
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
