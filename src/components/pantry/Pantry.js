import React from 'react'
import Input from './Input'
import { useEffect } from 'react'
import styled from 'styled-components'

const Content = styled.body`
  background-image: url("https://images.pexels.com/photos/6692128/pexels-photo-6692128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  padding: 25%;

`

const InputStyle = styled.div`
  background-color: none;
`

function Pantry() {
    useEffect(() => {
    }, [])

    return (


      <div >

        <Content>

            <h1>What's In Your Pantry?</h1>
            <InputStyle>
            <Input />
            </InputStyle>




      </Content>

      </div>
    )
}

export default Pantry
