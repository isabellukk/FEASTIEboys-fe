import React, { useState } from 'react';
import { useParams, useHistory, useEffect } from 'react-router-dom';
import { getUserToken } from '../utils/authToken'
import { Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'


const NewRecipe = (props) => {
  console.log(getUserToken);
  const initialState = {
    name: '',
    description: '',
    ingredients: [],
    directions: '',
    img: ''
  }

  const [input, setInput] = useState(initialState)
  const { userId } = useParams()
  console.log(userId);

  // fetch for POST

  const newRecipe = async (data) => {
       try {
           const configs = {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                   "Content-Type": "application/json",
                   "Authorization": `bearer ${getUserToken()}`,
               }
           }
           const newRecipe = await fetch(`http://localhost:9000/${userId}/recipes`, configs)
           const parsed = await newRecipe.json()
           props.history.push(`/${userId}/recipes`)
       }catch(err){
           console.log(err)
       }
   }

    const handleChange = (e) => {
         setInput({...input, [e.target.name]: e.target.value})
     }

    const handleSubmit = (e) => {
         e.preventDefault()
         setInput(initialState)
         newRecipe(input)
    }

  return(

    <div className="newForm">
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3">

          <Form.Label htmlFor="name">Name of Recipe: </Form.Label>
          <Form.Control type="text" name='name' id='name' value={input.name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text" as="textarea" name='description' id='description' value={input.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="ingredients">List of Ingredients: </Form.Label>
          <Form.Control type="text" name='ingredients' id='ingredients' value={input.ingredients} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Directions: </Form.Label>
          <Form.Control type="text" as="textarea" name='directions' id='directions' value={input.directions} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name='img' value={input.img} onChange={handleChange} />
        </Form.Group>

        <div className="cancel-submit">
          <Button onClick={`/${userId}/recipes`}>Back</Button>
          <Button variant="success" type="submit">Submit</Button>
        </div>
    </Form>

    </div>

)

}

export default NewRecipe;
