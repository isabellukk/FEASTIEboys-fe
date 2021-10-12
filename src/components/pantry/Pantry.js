import React from 'react'
import Input from './Input'
import { useEffect } from 'react'
import styled from 'styled-components'

const ContentInput = styled.body`
  background-image: url("https://images.pexels.com/photos/6692128/pexels-photo-6692128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  padding: 50vh;
`;

const Transparent = styled.div`
  padding-top: 4%;
  background-color: transparent;
`

function Pantry() {
    useEffect(() => {
    }, [])

    return (

      <ContentInput>
        <div className="card">
          <div className="card-container">
            <Transparent>
            <h1>What's In Your Pantry?</h1></Transparent>
            <Input />
          </div>
        </div>
      </ContentInput>

    )
}

export default Pantry
