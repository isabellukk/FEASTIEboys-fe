import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import RecipeDetail from './RecipeDetail'
import { useParams } from "react-router-dom"




function EditForm(props) {
    console.log(props)
    const initialState = {
        name: '',
        description: '',
        ingredients: '',
        directions: '',
        img: ''
    }

    const [input, setInput] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false);
    const { id } = useParams()




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getRecipeToEdit = async (id) => {
        try {
            const id = props.match.params.id;
            const foundRecipe = await fetch("https://feastieboys.herokuapp.com/recipes/" + id)
            const parsedRecipe = await foundRecipe.json()
            setInput(parsedRecipe)
            setLoading(false)
            if (foundRecipe.status === 200) {
                const parsedRecipe = await foundRecipe.json();
                setInput(parsedRecipe)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const updateRecipe = async (id, data) => {
        const configs = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const updateRecipe = await fetch("https://feastieboys.herokuapp.com/recipes/" + id, configs)
        console.log(updateRecipe)
        const parsedUpdateRecipe = await updateRecipe.json();
        props.history.push('/recipes/')
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, description, ingredients, directions, img } = input;
        const recipesData = { name, description, ingredients, directions, img }
        updateRecipe(input._id, recipesData);
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }



    useEffect(() => {
        getRecipeToEdit()
    }, [])

    const deleteRecipe = async (id) => {
        try {
            const deleteRecipe = await fetch('https://feastieboys.herokuapp.com/recipes/' + id, {
                method: 'DELETE',
            })
            console.log(deleteRecipe);
            const parsedDeletedRecipe = await deleteRecipe.json();
            props.history.push('/recipes/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
      <div className="listRecipe">
        <div className="editForm">
          <h1>Editing {input.name} </h1>
            {loading ? (
                <h3>Loading...</h3>
            ) : (


              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
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
                  <a href={`/recipes/${id}`} class="btn btn-info" role="button">Back</a>
                  <Button variant="success" type="submit">Submit</Button>
                </div>

            </Form>

            )}
        </div>
      </div>

    )
}



export default EditForm
