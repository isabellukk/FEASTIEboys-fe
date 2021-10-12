import React from 'react'
import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="inspiration" data-slide-to="0" class="active"></li>
    <li data-target="recipes" data-slide-to="1"></li>
    <li data-target="pantry" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/6692160/pexels-photo-6692160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />

        <h4>PANTRY</h4>
        <p>Let's play with what you got! <br />
        Simply type in what you have and we'll take care of the rest</p>
    </div>




    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.pinimg.com/736x/94/64/ec/9464ec8e6c7dc9f45d2955d4126e5a68.jpg" alt="Second slide" />

        <h4>INSPIRATION STATION</h4>
        <p>Lets get wild! <br />
        No idea what you want to eat? We got you covered by generating a random meal!</p>

    </div>




    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.pinimg.com/originals/9b/bf/8c/9bbf8c92490d60ef7968acdd666b8c10.jpg" alt="Third slide" />
        <h4>RECIPES</h4>
        <p>A collection of your top hits! <br /> Just log in and cook away</p>
    </div>
  </div>


  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  );
}

export default ControlledCarousel
