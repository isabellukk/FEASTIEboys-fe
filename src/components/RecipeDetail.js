import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function RecipeDetail(props) {
    const currentId = props.match.params.id
    const [recipes, setRecipes] = useState({})
    const getRecipe = async (id) => {
        const foundRecipe = await fetch('http://localhost:9000/recipes/' + id)
        const parsedRecipe = await foundRecipe.json()
        console.log(parsedRecipe)
        setRecipes(parsedRecipe)
    };
    useEffect(() => {
        getRecipe(currentId)
    }, []);

    return (
        <>

        <h1>Details</h1>
            <img src={recipes.img} />
            <p>Name: {recipes.name}</p>
            <p>Description: {recipes.description}</p>
            <p>Ingredients: {recipes.ingredients}</p>
            <p>Directions: {recipes.directions}</p>

            <button><Link to={`/recipes/`}>Go back</Link></button>
            <button><Link to={`/recipes/${recipes._id}/edit`}>Edit</Link></button>
        </>
    )
};
export default RecipeDetail
