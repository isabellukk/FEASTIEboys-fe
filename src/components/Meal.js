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
      <section className="meals">

        {food.map((dish) => {

          const {
            idMeal,
            strMeal,
            strInstructions,
            strMealThumb,
            strSource,
            strTags,
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
            strMeasure10,
          } = dish

          return (
            <article key={idMeal}>
              <div>
                <h5>
                {strMeal}
                </h5>


              <img src={strMealThumb} alt={strMeal} width="55%"/>



                  <h6>  </h6>

                  <h3><b>Ingredients:</b></h3>
                  <h6> </h6>
                  <ul>
                  <ul>
                    {strMeasure1} {strIngredient1}
                  </ul>
                  <ul>
                    {strMeasure2} {strIngredient2}
                  </ul>
                  <ul>
                    {strMeasure3} {strIngredient3}
                  </ul>
                  <ul>
                    {strMeasure4} {strIngredient4}
                  </ul>
                  <ul>
                    {strMeasure5} {strIngredient5}
                  </ul>
                  <ul>
                    {strMeasure6} {strIngredient6}
                  </ul>
                  <ul>
                    {strMeasure7} {strIngredient7}
                  </ul>
                  <ul>
                    {strMeasure8} {strIngredient8}
                  </ul>
                  <ul>
                    {strMeasure9} {strIngredient9}
                  </ul>
                  <ul>
                    {strMeasure10} {strIngredient10}
                  </ul>
                  </ul>

              </div>
              <div>
                <h6> </h6>
                <h3><b>Instructions</b></h3>
                <h6> </h6>
                <p className="instructions">{strInstructions}</p>

              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Meal
