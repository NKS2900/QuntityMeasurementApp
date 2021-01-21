
import React from 'react';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import Temperature from './components/Length/Temperature/Temperature.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/temp" component={Temperature}/>
          </Switch>
        </Router>
      </div>    
          
  );
}

export default App;

