import UserList from './components/usersList/UsersList.component';
import Navbar from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" component={UserList}/>
      </Router>
    </div>
  );


}

export default App;
