import React from 'react';
import NavigationBar from './components/NavigationBar';
import './Main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Footer from './components/Footer';
import Success from './components/pages/Success';





function App() {
  return (
    <>
      <Router>
<div className="app-container">

        <NavigationBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/> 
          <Route path="/services" exact component={Services}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path='/success' component={Success} />
        </Switch>
        <Footer />
        </div>
      </Router>

    </>
  );
}

export default App;
