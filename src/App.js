import HomePage from './components/HomePage';
import RecipeLists from './components/RecipeLists';
import RecipeDetail from './components/RecipeDetail';
import EditForm from './components/EditForm';
import NewForm from './components/NewForm';
import NavBar from './components/NavBar';
import Pantry from './components/pantry/Pantry';
import InspirationStation from './components/InspirationStation';
import DrinkPage from './components/DrinkPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact="exact" path="/" component={HomePage} />

          <Route exact="exact" path="/recipes" component={RecipeLists} />
          <Route
            exact="exact"
            path="/recipes/new"
            render={(routerProps) => <NewForm {...routerProps} />}
          />
          <Route exact="exact" path="/pantry" component={Pantry} />
          <Route
            exact="exact"
            path="/inspiration"
            component={InspirationStation}
          />
          <Route exact="exact" path="/cocktails" component={DrinkPage} />
          <Route exact="exact" path="/recipes/:id/edit" component={EditForm} />
          <Route exact="exact" path="/recipes/:id" component={RecipeDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
