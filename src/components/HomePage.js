import React from 'react';
import styled from 'styled-components'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'




function HomePage() {
  return (
    <div className="homePageContents">
      <div className="homePageStyle">

      <h2 className="homeLink"><b><Link to={`/pantry`}>PANTRY</Link></b></h2>
      <p>Let's play with what you got! <br />
      Simply type in what you have and we'll take care of the rest</p>

    <h2 className="homeLink"><b><Link to={`/inspiration`}>INSPIRATION STATION</Link></b></h2>
      <p>Lets get wild! <br />
      No idea what you want to eat? We got you covered by generating a random meal!</p>

    <h2 claassName="homeLink"><b><Link to={`/recipes`}>RECIPES</Link></b></h2>
      <p>A collection of your top hits! <br /> Just log in and cook away</p>
    </div>
    </div>

  )
}
export default HomePage;
