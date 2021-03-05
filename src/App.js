import React from 'react';
import Navbar from './components/Navbar';
import './Main.scss';
import {BrowserRouter as Router, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
