import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const StyledRecipesBack = styled.body`
  background-image: url("https://image.freepik.com/free-photo/healthy-ingredient-baking-utensil-white-background_23-2148123800.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`

const StyledRecipes = styled.div`

  display: flex;
  justify-content: center;
  padding: 20%;
  border: 1px solid red;
`




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


<StyledRecipesBack>
  <div>
<StyledRecipes>

    <div>


      {recipes && recipes.map(item => (
        <div className='item' key={item._id}>
          <Link to={`/recipes/${item._id}`}>{item.name}</Link>
          <img src={item.img} width="100px" />
        </div>
               ))}

        <button><Link to={`/recipes/new`}>Add a Recipe</Link></button>

    </div>
  </StyledRecipes>
  </div>
  </StyledRecipesBack>

    </>
)
}

export default RecipeLists;
