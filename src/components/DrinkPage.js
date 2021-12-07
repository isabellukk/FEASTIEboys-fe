import React from 'react'
import Drink from './Drink'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'




function DrinkPage() {
  return (
    <>
    <div className="drinkPageStyle">

    <div className="drinkContents">

  <div>
    <div className="drinkMargin">
    <h1>
      <b>That's the Spirit!</b>
    </h1>

    </div>

    <div className="scrollDrink">
      <Drink/>
    </div>

  </div>
</div>

</div>

</>
  )
}

export default DrinkPage
