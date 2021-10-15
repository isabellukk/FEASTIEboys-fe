import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import { getUserToken } from '../utils/authToken'

const RecipeLists = (props) => {

  const [recipe, setRecipe] = useState([])
  const history = useHistory()
  const [show, setShow] = useState(false)
  const { userId } = useParams()
  console.log(userId);

  const getRecipes = async () => {
          try {
            console.log(getUserToken());
            const configs = {
              method: "GET",
              body: JSON.stringify(),
              headers: {
                "Content-Type": "application/JSON",
                "Authorization": `bearer ${getUserToken()}`
              }
            }
              const allRecipes = await fetch(`http://localhost:9000/${userId}/recipes`, configs);
              console.log(allRecipes);
              const parsedRecipes = await allRecipes.json();
              setRecipe(parsedRecipes);
          } catch (error) {
              console.log(error)
          }
      }

const handleClick = path => history.push(path)
const handleShow = () => setShow(true)


  return (
    <>

  <div className="RecipeLists">


    <div>


      {recipe && recipe.map(item => (
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
