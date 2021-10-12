import React from 'react';
import styled from 'styled-components'

const StyledHomePage = styled.body`
  background-image: url("https://t4.ftcdn.net/jpg/02/84/99/73/360_F_284997371_syixKOVkyGxsD1wuzUnOxVZiCB2K3Lsl.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  color: white;
  display: flex;
  padding: 10%;
`

const StyledContents = styled.div`
  padding: 20%;
  border: 1px solid red;
`

function HomePage() {
  return (
<StyledHomePage>
    <div class="HomePageContents">
      <StyledContents>
      <h4>PANTRY</h4>
      <p>Let's play with what you got! <br />
      Simply type in what you have and we'll take care of the rest</p>

      <h4>INSPIRATION STATION</h4>
      <p>Lets get wild! <br />
      No idea what you want to eat? We got you covered by generating a random meal!</p>

      <h4>RECIPES</h4>
      <p>A collection of your top hits! <br /> Just log in and cook away</p>
  </StyledContents>
    </div>

    </StyledHomePage>

  )
}
export default HomePage;
