import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import RecipeDetail from './components/RecipeDetail'
import EditForm from './components/EditForm'
import NewForm from './components/NewForm'
import IngredientsForm from './components/IngredientsForm'
import NavBar from './components/NavBar'
import Pantry from './components/pantry/Pantry'
import { useState, useEffect } from 'react'
import './App.css';
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

      <Route exact path="/recipes/ingredients" render={(routerProps)=><IngredientsForm {...routerProps}/>}/>

        <Route exact path="/recipes/:id/edit" component={EditForm} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
      </Switch>
    </Router>



    </div>
  )
}

export default App;
