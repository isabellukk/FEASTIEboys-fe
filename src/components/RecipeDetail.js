import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { getUserToken } from '../utils/authToken.js'

function RecipeDetail(props) {
    const [recipes, setRecipes] = useState({})
    const { userId } = useParams()

    const getRecipe = async (id) => {
      try {
        const configs = {
          method: "GET",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/JSON",
            "Authorization": `bearer${getUserToken()}`
          }
        }
        const foundRecipe = await fetch(`http://localhost:9000/${userId}/recipes/${id}`, configs)
        const parsedRecipe = await foundRecipe.json()
        console.log(parsedRecipe)
        setRecipes(parsedRecipe)

      } catch (err) {
        console.log(err);
      }

    };
    useEffect(() => {
        getRecipe({})
    }, []);

    return (
        <>

        <h1>Details</h1>
            <img src={recipes.img} />
            <p>Name: {recipes.name}</p>
            <p>Description: {recipes.description}</p>
            <p>Ingredients: {recipes.ingredients}</p>
            <p>Directions: {recipes.directions}</p>

            <button><Link to={`/${userId}/recipes/`}>Go back</Link></button>
            <button><Link to={`/${userId}/recipes/${recipes._id}/edit`}>Edit</Link></button>
        </>
    )
};
export default RecipeDetail
