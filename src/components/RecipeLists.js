import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';





function RecipeLists(props) {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
          try {
              const recipes = await fetch('http://localhost:9000/recipes');
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
      {recipes && recipes.map(item => (
        <div className='item' key={item._id}>
          <Link to={`/recipes/${item._id}`}>{item.name}</Link>
        </div>
               ))}

        <button><Link to={`/recipes/new`}>Add a Recipe</Link></button>
      </div>
    </>
)
}

export default RecipeLists;
