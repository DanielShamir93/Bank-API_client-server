import { useState, useEffect } from 'react';
import myApi from '../../api/Api';
import User from '../user/User.component';
import './usersList.styles.scss';

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
    <div className="Users-list">
      <p className="users-list-titles">All Users</p>
      <div className="gallery">
        { renderUsers() }
      </div>
    </div>
  );


}

export default App;
