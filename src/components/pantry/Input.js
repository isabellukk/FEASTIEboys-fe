import React from 'react'
import {useState} from 'react'
import PantryResults from './PantryResults'

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
    <div className="pantryForm">
      <div>
        <form onSubmit={handleSubmit}>
          <br/>
          <input value={input} onChange={handleChange} type='text' placeholder="What's in your pantry?"/>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
      {entrees && <PantryResults entrees={entrees}/>}
    </div>
  )}

export default Input
