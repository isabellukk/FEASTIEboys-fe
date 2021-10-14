import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import { getUserToken } from '../utils/authToken.js'

function RecipeLists(props) {

  const [recipes, setRecipes] = useState([])
  const { userId } = useParams()

  const getRecipes = async () => {
          try {
            const configs = {
              method: "GET",
              body: JSON.stringify(),
              headers: {
                "Content-Type": "application/JSON",
                "Authorization": `bearer ${getUserToken()}`
              }
            }
              const recipes = await fetch(`http://localhost:9000/${userId}/recipes`, configs);
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
          <Link to={`/${userId}/recipes/${item._id}`}>{item.name}</Link>
          <img src={item.img} width="100px" />
        </div>
               ))}

        <button><Link to={`/${userId}/recipes/new`}>Add a Recipe</Link></button>

    </div>

  </div>


    </>
)
}

export default RecipeLists;
