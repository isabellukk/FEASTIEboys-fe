import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import RecipeDetail from './components/RecipeDetail'
import EditForm from './components/EditForm'
import NewForm from './components/NewForm'
import IngredientsForm from './components/IngredientsForm'
import NavBar from './components/NavBar'
import Pantry from './components/pantry/Pantry'
import InspirationStation from './components/InspirationStation'
import Login from './components/Login'
import Register from './components/Register'

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
        <Route exact path="/:userId/home" component={HomePage} />
        <Route exact path="/:userId/recipes" component={RecipeLists} />
        <Route exact path="/:userId/recipes/new" render={(routerProps)=><NewForm {...routerProps}/>}/>
        <Route exact path="/:userId/pantry" component={Pantry} />
        <Route exact path="/:userId/inspiration" component={InspirationStation} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />


      // <Route exact path="/recipes/ingredients" render={(routerProps)=><IngredientsForm {...routerProps}/>}/>

        <Route exact path="/:userId/recipes/:id/edit" component={EditForm} />
        <Route exact path="/:userId/recipes/:id" component={RecipeDetail} />
      </Switch>
    </Router>



    </div>
  )
}

export default App;
