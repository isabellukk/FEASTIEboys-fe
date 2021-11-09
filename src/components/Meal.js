import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setFood(data.meals)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
    <div className="landscapeButton">
    <div className="button">
      <button onClick={() => fetchFood()} className="btn">
    Click me!
  </button>
</div>
</div>
<br/>
<section className="meals">

    {
    food.map((dish) => {


      const {
        idMeal,
        strMeal,
        strInstructions,
        strMealThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10
      } = dish

      return (<div className="inspiration-scroll" key={idMeal}>
        <div>
          <h3>
            <b>{strMeal}</b>
          </h3>

          <img src={strMealThumb} width="35%" alt=""/>

          <h6></h6>

          <h4>
            <b>Ingredients:</b>
          </h4>
          <h6></h6>
          <td>
            <td>
              <b>{strMeasure1}</b>
              &nbsp; {strIngredient1}
            </td>
            <td>
              <b>{strMeasure2}</b>
              &nbsp; {strIngredient2}
            </td>
            <td>
              <b>{strMeasure3}</b>
              &nbsp; {strIngredient3}
            </td>
            <td>
              <b>{strMeasure4}</b>
              &nbsp; {strIngredient4}
            </td>
            <td>
              <b>{strMeasure5}</b>
              &nbsp; {strIngredient5}
            </td>
            <td>
              <b>{strMeasure6}</b>
              &nbsp; {strIngredient6}
            </td>
            <td>
              <b>{strMeasure7}</b>
              &nbsp; {strIngredient7}
            </td>
            <td>
              <b>{strMeasure8}</b>
              &nbsp; {strIngredient8}
            </td>
            <td>
              <b>{strMeasure9}</b>
              &nbsp; {strIngredient9}
            </td>
            <td>
              <b>{strMeasure10}</b>
              &nbsp; {strIngredient10}
            </td>
          </td>

        </div>
        <div>
          <h6></h6>
          <h4>
            <b>Instructions:</b>
          </h4>
          <h6></h6>
          <p className="instructions">{strInstructions}</p>

        </div>
      </div>)
    })
  } < /section>
    </ >)
}

export default Meal
