import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NewForm = (props) => {

  let history = useHistory();

  const redirect = () => {
  history.push('/recipes')
  }
  const [input, setInput] = useState({
    name: "",
    description: "",
    ingredients: [],
    // ingredientsNum: 1,
    // numberOfFields: 1,
    // currentFieldId: "",
    directions: "",
    img: ""
  })



// Fetch (POST+CREATE)
  const addItem = async (data) => {
    try {
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      }
      const createdItem = await fetch("http://localhost:9000/recipes", configs)
      const parsedItem = await createdItem.json()
      props.history.push('/recipes')
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(input)
  }

  return (
    <form onSubmit={handleSubmit}>
           <label htmlFor='name'>Name</label>
           <input name='name' id='name' value={input.name} onChange={handleChange} />

           <label htmlFor='description'>Description</label>
           <input name='description' id='description' value={input.description} onChange={handleChange} />

           <label htmlFor='ingredients'>Ingredients</label>
           <input name='ingredients' id='ingredients' value={input.ingredients} onChange={handleChange} />

           <label htmlFor='directions'>Directions</label>
           <input name='directions' id='directions' value={input.directions} onChange={handleChange} />

           <label htmlFor='img'>Img Url</label>
           <input name='img' id='img' value={input.img} onChange={handleChange} />

         <input type="submit" value="submit" />

       </form>
  )

}

export default NewForm;
