import React, { useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'

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
      <div className="button">
        <button onClick={() => fetchFood()} className="btn">
          Click for a random meal!
        </button>
        <h6> </h6>
      </div>
      <br />
      <section className="meals">

        {food.map((dish) => {

          const {idMeal,
            strMeal, strInstructions, strMealThumb, strSource, strTags, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10} = dish

          return (
            <div className="inspiration-scroll" key={idMeal}>
              <div>
                <h3><b>{strMeal}</b></h3>


              <img src={strMealThumb} width="35%"/>



                  <h6>  </h6>

                  <h4><b>Ingredients:</b></h4>
                  <h6> </h6>
                  <td>
                  <td>
                    <b>{strMeasure1}</b> {strIngredient1}
                  </td>
                  <td>
                    <b>{strMeasure2}</b> {strIngredient2}
                  </td>
                  <td>
                    <b>{strMeasure3}</b> {strIngredient3}
                  </td>
                  <td>
                    <b>{strMeasure4}</b> {strIngredient4}
                  </td>
                  <td>
                    <b>{strMeasure5}</b> {strIngredient5}
                  </td>
                  <td>
                    <b>{strMeasure6}</b> {strIngredient6}
                  </td>
                  <td>
                    <b>{strMeasure7}</b> {strIngredient7}
                  </td>
                  <td>
                    <b>{strMeasure8}</b> {strIngredient8}
                  </td>
                  <td>
                    <b>{strMeasure9}</b> {strIngredient9}
                  </td>
                  <td>
                    <b>{strMeasure10}</b> {strIngredient10}
                  </td>
                  </td>

              </div>
              <div>
                <h6> </h6>
                <h4><b>Instructions:</b></h4>
                <h6> </h6>
                <p className="instructions">{strInstructions}</p>

              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Meal
