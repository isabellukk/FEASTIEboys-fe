import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import LoginForm from './components/Login'
import RegisterForm from './components/RegisterForm'

import HomePage from './components/HomePage'
import RecipeLists from './components/RecipeLists'
import RecipeDetail from './components/RecipeDetail'
import EditForm from './components/EditForm'
import NewRecipe from './components/NewRecipe'
import Pantry from './components/pantry/Pantry'
import InspirationStation from './components/InspirationStation'

import NavBar from './components/NavBar'



const App = () => {

  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  return (
    <div className="App">


    <Router>
      <Route exact path="/*" render={( renderProps ) =><NavBar {...renderProps} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>}/>


      <Switch>



        <Route exact path="/" render={( renderProps )=><LoginForm {...renderProps} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>}/>

        <Route exact path="/register" render={( renderProps )=><RegisterForm {...renderProps} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>}/>

        <Route exact path="/:userId/home" render={( renderProps )=><HomePage {...renderProps} />}/>


      <Route exact path="/:userId/pantry" render={( renderProps )=><Pantry {...renderProps} />}/>

      <Route exact path="/:userId/inspiration"render={( renderProps )=><InspirationStation {...renderProps} />}/>

        <Route exact path="/:userId/recipes/" render={(routerProps) => <RecipeLists {...routerProps}/>}/>

        <Route exact path="/:userId/recipes/new" render={(routerProps) => <NewRecipe {...routerProps}/>}/>

        <Route exact path="/:userId/recipes/:id/edit" render={( routerProps ) => <EditForm {...routerProps} />}/>

        <Route exact path="/:userId/recipes/:id" render={( routerProps ) => <RecipeDetail {...routerProps} />}/>
      </Switch>
    </Router>



    </div>
  )
}

export default App;
