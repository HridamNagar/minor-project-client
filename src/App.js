import HomePage from './Pages/Homepage';
import Register from './Pages/RegisterPage';
import FacultyLogin from './Pages/FacultyLoginPage';
import { SLogin } from './Pages/LoginPage';
import RegisterFaculty from './Pages/RegisterFacultyPage';
import Update from './Pages/UpdatePage';
import Search from './Pages/SearchPage';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={SLogin} />
      <Route exact path='/update' component={Update} />
      <Route exact path='/registerfaculty' component={RegisterFaculty} />
      <Route exact path='/facultylogin' component={FacultyLogin} />
      <Route exact path='/search' component={Search} />
    </div>
  );
}

export default App;
