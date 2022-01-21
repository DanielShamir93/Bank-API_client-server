import UserList from './components/usersList/UsersList.component';
import Navbar from './components/navbar/Navbar.component';
import AddUser from './components/addUser/AddUser.component';
import UserAccount from './components/userAccount/UserAccount.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={UserList}/>
        <Route path="/add-user" exact component={AddUser}/>
        <Route path="/user-account" exact component={UserAccount}/>
      </Router>
    </div>
  );


}

export default App;
