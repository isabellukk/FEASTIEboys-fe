import React from "react";
import ReactDOM from "react-dom";
import * as ReactBootstrap from 'react-bootstrap'



class IngredientsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [{ name: "" }]
    };
  }



  handleingredientNameChange = idx => evt => {
    const newingredients = this.state.ingredients.map((ingredient, sidx) => {
      if (idx !== sidx) return ingredient;
      return { ...ingredient, name: evt.target.value };
    });

    this.setState({ ingredients: newingredients });
  };

  handleSubmit = evt => {
    const { name, ingredients } = this.state;
  };

  handleAddingredient = () => {
    this.setState({
      ingredients: this.state.ingredients.concat([{ name: "" }])
    });
  };

  handleRemoveingredient = idx => () => {
    this.setState({
      ingredients: this.state.ingredients.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <h4>ingredients</h4>

        {this.state.ingredients.map((ingredient, idx) => (
          <div className="ingredient">
            <input
              type="text"
              placeholder={`ingredient #${idx + 1} name`}
              value={ingredient.name}
              onChange={this.handleingredientNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveingredient(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddingredient}
          className="small"
        >
          Add ingredient
        </button>
        <button>Incorporate</button>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<IngredientsForm />, rootElement);

export default IngredientsForm
