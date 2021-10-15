import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getRecipeToEdit = async (id) => {
        try {
            const id = props.match.params.id;
            const foundRecipe = await fetch(`https://feastieboys.herokuapp.com/recipes/${id}/edit`)
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

        const updateRecipe = await fetch("https://feastieboys.herokuapp.com/recipes" + id, configs)
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
            const deleteRecipe = await fetch('https://feastieboys.herokuapp.com/recipes' + id, {
                method: 'DELETE',
            })
            console.log(deleteRecipe);
            const parsedDeletedRecipe = await deleteRecipe.json();
            props.history.push('/recipes')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (

              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor='name'>Name</label>
                      <input name='name' id='name' value={input.name} onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor='description'>Description </label>
                      <input name='description' id='description' value={input.description } onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor='ingredients'>Ingredients</label>
                      <input name='ingredients' id='ingredients' value={input.ingredients} onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor='directions'>Directions</label>
                      <input name='directions' id='directions' value={input.directions} onChange={handleChange} />
                  </div>


                  <div>
                      <label htmlFor='img'>Img URL</label>
                      <input name='img' id='img' value={input.img} onChange={handleChange} />
                  </div>

                  <div>

                      <input type='submit' value='Confirm Changes' />
                      <button onClick={() => deleteRecipe(input._id)}>Trash</button>
                      < br />
                      <button><Link to={`/recipes/`}>Go back</Link></button>

                  </div>

              </form>
            )}
        </div>
    )
}



export default EditForm
