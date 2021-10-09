import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recipes" component={RecipeLists} />
      </Switch>
    </Router>



    </div>
  )
}

export default App;
