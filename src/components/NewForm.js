import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import { getUserToken } from '../utils/authToken.js'


const NewForm = (props) => {
  const { userId } = useParams()

  let history = useHistory();

  const redirect = () => {
  history.push(`/${userId}/recipes`)
  }
  const [input, setInput] = useState({
    name: "",
    description: "",
    ingredients: [],
    directions: "",
    img: ""
  })


  const addItem = async (data) => {
    try {
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${getUserToken}`
        },
      }
      const createdItem = await fetch(`http://localhost:9000/${userId}/recipes`, configs)
      const parsedItem = await createdItem.json()
      props.history.push(`/${userId}/recipes`)
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput("")
    addItem(input)
  }

  return (

    <div className="card">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSpirit">
          <Form.Label htmlFor="name">Name of Recipe: </Form.Label>
          <Form.Control type="text" name='name' id='name' value={input.name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text" as="textarea" name='description' id='description' value={input.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSpirit">
          <Form.Label htmlFor="ingredients">List of Ingredients: </Form.Label>
          <Form.Control type="text" name='ingredients' id='ingredients' value={input.ingredients} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
          <Form.Label>Directions: </Form.Label>
          <Form.Control type="text" as="textarea" name='directions' id='directions' value={input.directions} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name='img' value={input.img} onChange={handleChange} />
        </Form.Group>

        <div className="cancel-submit">
          <Button onClick={redirect}>Back</Button>
          <Button variant="success" type="submit">Submit</Button>
        </div>
    </Form>

    </div>

)

}

export default NewForm;
