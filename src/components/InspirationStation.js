import react from 'react'
import Meal from './Meal'
import * as ReactBootstrap from 'react-bootstrap'


function InspirationStation() {
  return (
    <>
      <div className="inspirationContainer">

        <h4>
          Welcome to the inspiration station, click the button to generate a random meal.
        </h4>


        <Meal />


      </div>

    </>
  )
}

export default InspirationStation
