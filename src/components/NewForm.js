import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap'

const NewForm = (props) => {
  let history = useHistory();
  const redirect = () => {
    history.push('/recipes')
  }
  const [input, setInput] = useState({name: "", description: "", ingredients: [], directions: "", img: ""})

  const addItem = async (data) => {
    try {
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const createdItem = await fetch("https://feastieboys.herokuapp.com/recipes", configs)
      props.history.push('/recipes')
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(input)
  }

  return (<div className="listRecipe">
    <div className="newForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label htmlFor="name">Name of Recipe:
          </Form.Label>
          <Form.Control type="text" name='name' id='name' value={input.name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
          <Form.Label>Description:
          </Form.Label>
          <Form.Control type="text" as="textarea" name='description' id='description' value={input.description} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicIngredients">
          <Form.Label htmlFor="ingredients">List of Ingredients:
          </Form.Label>
          <Form.Control type="text" as="textarea" name='ingredients' id='ingredients' value={input.ingredients} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
          <Form.Label>Directions:
          </Form.Label>
          <Form.Control type="text" as="textarea" name='directions' id='directions' value={input.directions} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name='img' value={input.img} onChange={handleChange}/>
        </Form.Group>

        <div className="cancel-submit">
          <Button onClick={redirect}>Back</Button>
          <Button variant="success" type="submit">Submit</Button>
        </div>

      </Form>
    </div>
  </div>)
}

export default NewForm;
