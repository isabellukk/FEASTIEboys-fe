import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import RecipeDetail from './components/RecipeDetail'
import EditForm from './components/EditForm'
import NewForm from './components/NewForm'
import NavBar from './components/NavBar'
import Pantry from './components/pantry/Pantry'
import InspirationStation from './components/InspirationStation'

import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function App() {
  return (
    <div className="App">
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/recipes" component={RecipeLists} />
        <Route exact path="/recipes/new" render={(routerProps)=><NewForm {...routerProps}/>}/>
        <Route exact path="/pantry" component={Pantry} />
        <Route exact path="/inspiration" component={InspirationStation} />



        <Route exact path="/recipes/:id/edit" component={EditForm} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
      </Switch>
    </Router>



    </div>
  )
}

export default App;
