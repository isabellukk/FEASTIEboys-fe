import { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const Drink = () => {
  const [drink, setDrink] = useState([]);

  const fetchDrink = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDrink(data.drinks);
  };

  useEffect(() => {
    fetchDrink();
  }, []);

  return (
    <>
      <div className="button button-drink">
        <button
          onClick={() => {
            return fetchDrink();
          }}
          className="buttonDrink"
        >
          Click for random cocktail!
        </button>
      </div>
      <br />
      <div className="drinksM">
        {drink.map((cocktail) => {
          const {
            strSource,
            idDrink,
            strDrink,
            strInstructions,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
          } = cocktail;

          return (
            <div key={idDrink}>
              <div className="page">
                <div className="drinkScroll">
                  <div className="box">
                    <a href={strSource}>
                      <img src={strDrinkThumb} width="60%" alt="" />
                    </a>
                  </div>
                  <div className="drinkInstructions">
                    <h1>
                      <b>{strDrink}</b>
                    </h1>
                    <div className="drinkInfo">
                      <h4>
                        <b>Ingredients</b>
                      </h4>

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
                      </td>
                      <h4>
                        <b>Instructions</b>
                      </h4>
                      <p className="drinks">{strInstructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Drink;
