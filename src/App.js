
import React from 'react';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import Temperature from './components/Temperature/Temperature.jsx';
import Length from './components/Length/Length.jsx'
import Volume from './components/Volume/Volume.jsx'
import Home from './pages/Home/Home.jsx';


function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/temp" exact component={Temperature}/>
            <Route path="/length" exact component={Length}/>
            <Route path="/volume" exact component={Volume}/>
          </Switch>
        </Router>
      </div>    
          
  );
}

export default App;

