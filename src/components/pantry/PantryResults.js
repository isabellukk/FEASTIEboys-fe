import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'

function DataList(props) {
  const str = props.entrees
  const [dataId, setDataId] = useState([])
  const [loading, setLoading] = useState(false)
  // const YOUR_APP_ID = "98AE43C9";
  // const YOUR_APP_KEY = "5dadbe216d63560310fe00f37bd98dec"

  useEffect(() => {
    let queryStr = str.trim().replace(/,/gi, '').split(' ').join(',+')
    const fetchEntrees = async () => {
      try {
        setLoading(true)
        const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${queryStr}&number=1`)
        if (fetchData.data.length !== 0) {
          const dataArr = await fetchData.data
          const dataIdArr = dataArr.map((item) => {
            return item.id
          })

          const fetchDataId = async () => {
            try {
              let containerArr = []
              for await(const item of dataIdArr) {
                const recipeId = await axios.get(`https://api.spoonacular.com/recipes/${item}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`)
                containerArr.push(recipeId.data)
              }
              await setDataId(containerArr)
              setLoading(false)

            } catch (error) {
              setDataId(['Nothing came up :/ '])
            }
          }
          fetchDataId()
        } else {
          setDataId(['None found, try again! It will be worth it I swear'])
        }
      } catch (error) {
        alert(error)
      }
    }
    fetchEntrees()
  }, [str])

  return (<div>
    {loading && <ReactBootstrap.Spinner animation="border" variant="warning"/>}
    <div className="randomItems">
      {
        dataId.map((item, index) => {
          if (dataId.length === 1) {
            return (<div href={item.sourceUrl} target="_blank" key={item.id}>
              <img src={item.image} width="250px" alt=""/>
              <h3>{item.title}</h3>
              <a href={item.spoonacularSourceUrl} target='_blank' rel="noreferrer">
                <button className="btn">Click for Recipe</button>
              </a>
            </div>)
          } else {
            return (<div key={index}>
              <h1>{dataId[0]}</h1>
            </div>)
          }
        })
      }
    </div>
  </div>)

}

export default DataList
