import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function RecipeLists(props) {

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

  <div>


    <div>


      {recipes && recipes.map(item => (
        <div className='item' key={item._id}>
          <Link to={`/recipes/${item._id}`}>{item.name}</Link>
          <img src={item.img} width="100px" />
        </div>
               ))}

        <button><Link to={`/recipes/new`}>Add a Recipe</Link></button>

    </div>

  </div>


    </>
)
}

export default RecipeLists;
