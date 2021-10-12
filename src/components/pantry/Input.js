import React from 'react'
import { useState } from 'react'
import PantryResults from './PantryResults'
import styled from 'styled-components'

const InputBody = styled.body`


  background-image: url("https://images.pexels.com/photos/6692128/pexels-photo-6692128.jpeg");

`

function Input() {
    const [input, setInput] = useState("")
    const [entrees, setEntrees] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEntrees(input)
        setInput('');
    }


    return (
      <InputBody>
        <div className="card-container">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label>Input the ingredients you have! We'll take care of the rest :)</label><br />
                    <input value={input} onChange={handleChange} type='text' placeholder="What's in that pantry of yours?" />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            {entrees && <PantryResults entrees={entrees} />}
        </div>
        </InputBody>
    )
}

export default Input
