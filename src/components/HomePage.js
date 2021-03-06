import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homePageContents col">
      <div className="homePageStyle">
        <div className="mediaHome">
          <h1 className="homeLink">
            <b>
              <Link to={`/pantry`}>PANTRY</Link>
            </b>
          </h1>
          <p>
            <h4>
              Let's play with what you got!
              <br />
              Simply type in what you have and we'll take care of the rest
            </h4>
          </p>
        </div>
        <div className="mediaHome">
          <h1 className="homeLink">
            <b>
              <Link to={`/inspiration`}>INSPIRATION STATION</Link>
            </b>
          </h1>
          <p>
            <h4>
              Lets get wild!
              <br />
              No idea what you want to eat? We got you covered by generating a
              random meal!
            </h4>
          </p>
        </div>
        <div className="mediaHome homeRecipe">
          <h1 className="home-Link">
            <b>
              <Link to={`/recipes`}>RECIPES</Link>
            </b>
          </h1>
          <p>
            <h4>
              A collection of your top hits!
              <br />
              Just log in and cook away
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
