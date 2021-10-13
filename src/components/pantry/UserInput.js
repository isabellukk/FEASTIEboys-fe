import React from 'react'
import { useState } from 'react'
import PantryResults from './PantryResults'

function Input() {

    const [input, setInput] = useState("")
    const [saveState, setSaveState] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSaveState(input)
        setInput('');
    }

    return (
        <div>
            <div className="userInputContainer">
                <form onSubmit={handleSubmit} className="userForm">
                    <label className="userLabel">Enter the ingredients you have for dinner</label><br />
                    <input className="userSelect" value={input} onChange={handleChange} type='text' placeholder="What's in your pantry?" />
                    <div>
                        <input type="submit" value="Submit" className="userInputSubmit" />
                    </div>
                </form>
            </div>
            {saveState && <PantryResults saveState={saveState} />}
        </div>
    )
}

export default Input
