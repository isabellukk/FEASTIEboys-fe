import React, { useState } from 'react';

const NewForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    ingredients: "",
    directions: "",
    img: ""
  })

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(input)
  }

// Fetch (POST+CREATE)
  const addItem = async(data) => {
    try {
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content=Type": "application/json"
        }
      }
      await fetch("http://localhost:9000/recipes", configs)
    } catch (error) {
      console.log(error);
      props.history.push('/recipes/new')
    }
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

       </form>
  )

}

export default NewForm;
