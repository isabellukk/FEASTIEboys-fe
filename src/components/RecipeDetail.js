import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'


function RecipeDetail(props) {
    const currentId = props.match.params.id
    const [recipes, setRecipes ] = useState({})

    const getRecipe = async (id) => {
        const foundRecipe = await fetch('https://feastieboys.herokuapp.com/recipes/' + id)
        const parsedRecipe = await foundRecipe.json()
        console.log(foundRecipe)
        setRecipes(parsedRecipe)



    };
    useEffect(() => {
        getRecipe(currentId)
    }, []);

    return (
        <>
      <div className="listRecipe">
        <div className="recipeDetails">
        <div className="tableInfo">
        <h1>{recipes.name}</h1>

          <img src={recipes.img} width="300px" />


          <table class="table table-hover">

            <tbody>

              <tr>
                <th scope="row">Description: </th>
                <td align="left">{recipes.description}</td>
              </tr>

              <tr>
                <th scope="row">Ingredients: </th>
                <td align="left">{recipes.ingredients}</td>
              </tr>

              <tr>
                <th scope="row">Directions: </th>
                <td align="left">{recipes.directions}</td>
              </tr>


            </tbody>

          </table>



        </div>
        <div className="cancel-submit">
          <a href={`/recipes/`} class="btn btn-info" role="button">Back to Recipes</a>
          <a href={`/recipes/${currentId}/edit`} class="btn btn-warning" role="button">Edit Recipe</a>
        </div>
        </div>
      </div>
        </>
    )
};
export default RecipeDetail
