import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'



function RecipeLists() {

  const [recipes, setRecipes] = useState([])



  const getRecipes = async () => {
          try {
              const recipes = await fetch('https://feastieboys.herokuapp.com/recipes');
              const parsedRecipes = await recipes.json();
              setRecipes(parsedRecipes);
          } catch (error) {
              console.log(error)
          }
      }

      useEffect(() => {
          getRecipes();
      },[]);

  return (
    <>

  <div className="recipePage">
    <div className="allRecipes">
      <div className="recipeContainer">


      {recipes && recipes.map(item => (

        <div className='item' key={item._id}>
          <div className="itemCard">
          <Link to={`/recipes/${item._id}`}>{item.name}</Link>
          <img src={item.img} width="200px" />
        </div>

        </div>
      ))}




      </div>


    </div>
    <a href={`/recipes/new`} className="listButton" role="button">Back</a>


  </div>


    </>
)
}

export default RecipeLists;
