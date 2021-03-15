import React from 'react';
import Navbar from './components/Navbar';
import './Main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Promotions from './components/pages/Promotions';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/> 
          <Route path="/services" exact component={Services}/>
          <Route path="/promotions" exact component={Promotions}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
