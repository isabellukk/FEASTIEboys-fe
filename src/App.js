import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import EditForm from './components/EditForm'
import NewForm from './components/NewForm'
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recipes" component={RecipeLists} />
          <Route exact path="/recipes/new" render={(routerProps)=><NewForm {...routerProps}/>}/>
            <Route exact path="/recipes/:id/edit" component={EditForm} />
      </Switch>
    </Router>



    </div>
  )
}

export default App;
