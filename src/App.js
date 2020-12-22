import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Casts from './components/Casts/Casts';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/casts'>
            <Casts />
          </Route>
          <Route path='/castDetails/:char_id'>
            <CharacterDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
