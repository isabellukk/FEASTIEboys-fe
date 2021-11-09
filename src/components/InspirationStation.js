import React from 'react'
import Meal from './Meal'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Styles = styled.body `
  background-image: url("https://www.foodbymaria.com/wp-content/uploads/2020/07/FoodByMaria_Feb2020_MJay.jpg");
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 150vh;

  font-family: 'Open Sans Condensed', sans-serif;
`

function InspirationStation() {
  return (<> < Styles > <div className="inspirationPage"></div>
  <div className="inspirationContainer">
    <div className="scootDown">
    <h4>
      <b>Welcome to the Inspiration Station!</b>
      <br/>
      <i>Click the button to generate a random meal</i>
    </h4>
    </div>

    <div className="scroll">
      <Meal/>
    </div>

  </div> < /Styles>
    </ >)
}

export default InspirationStation
