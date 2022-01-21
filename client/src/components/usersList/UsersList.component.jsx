import { useState, useEffect } from 'react';
import myApi from '../../api/Api';
import User from '../user/User.component';
import './usersList.styles.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [isUserChanged, setIsUserChanged] = useState(false);

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
  }, [isUserChanged]);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <User 
          key={user._id} 
          user={user} 
          isUserChanged={isUserChanged} 
          setIsUserChanged={setIsUserChanged}
        />
      );
    });
  }

  return (
    <div className="Users-list">
      <div className="gallery">
        { renderUsers() }
      </div>
    </div>
  );


}

export default App;
