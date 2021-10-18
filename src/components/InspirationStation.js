import React from 'react'
import Meal from './Meal'
import styled from 'styled-components'

const Styles = styled.body `
  background-image: url("https://www.foodbymaria.com/wp-content/uploads/2020/07/FoodByMaria_Feb2020_MJay.jpg");
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 150vh;
  max-height: 120vh;
  padding-bottom: 32%;
  margin-bottom: 10%;
  font-family: 'Open Sans Condensed', sans-serif;
`

function InspirationStation() {
  return (<> < Styles > <div className="inspirationPage"></div>
  <div className="inspirationContainer">

    <h4>
      <b>Welcome to the Inspiration Station!</b>
      <br/>
      Click the button to generate a random meal.
    </h4>

    <div className="scroll">
      <Meal/>
    </div>

  </div> < /Styles>
    </ >)
}

export default InspirationStation
