import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Home from './pages/HomeComponent';
import Educatiom from './pages/Education';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skill from './pages/Skills';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { greeting } from './Name';
import ReactGA from 'react-ga';
import RouteChangeTracker from './components/RouteChangeTracker';

function App() {
  useEffect(() => {
    document.title = `${greeting.full_name}'s Portfolio`
  }, [])
  
  const TRACKING_ID = "UA-93560938-2";
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/education' component={Educatiom}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/skill' component={Skill}></Route>
          <Route path="" component={NotFound} />
        </Switch>
        <RouteChangeTracker />
      </Router>
    </div>
  );
}

export default App;
