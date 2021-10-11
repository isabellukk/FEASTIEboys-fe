import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'

function DataList(props) {
    const str = props.entrees
    const [dataId, setDataId] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let queryStr = str.trim().replace(/,/gi, '').split(' ').join(',+')
        const fetchEntrees = async () => {
            try {
                setLoading(true)
                const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=cb1c464d94f142c08b156c5beddade8b&ingredients=${queryStr}&number=10`)
                if (fetchData.data.length !== 0) {
                    const dataArr = await fetchData.data
                    const dataIdArr = dataArr.map((item) => {
                        return item.id
                    })
                    // 4e345a393bbd462182c89705d3914f24 //

                    // db254b5cd61744d39a2deebd9c361444 //
                    // cb1c464d94f142c08b156c5beddade8b //

                    const fetchDataId = async () => {
                        try {
                            let containerArr = []
                            for await (const item of dataIdArr) {
                                const recipeId = await axios.get(`https://api.spoonacular.com/recipes/${item}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`)
                                containerArr.push(recipeId.data)
                            }
                            await setDataId(containerArr)

                        }
                        catch (error) {
                            setDataId(['Nothing came up :/ '])
                        }
                    }
                    fetchDataId()
                } else {
                    setDataId(['None found, try again! It will be worth it I swear'])
                }
            }
            catch (error) {
                alert(error)
            }
        }
        fetchEntrees()
    }, [str])

    return (
        <div>
          {loading && <ReactBootstrap.Spinner animation="border" variant="warning" />}
            <div>
                {dataId.map((item, index) => {
                    if (dataId.length === 10) {
                        return (
                            <div href={item.sourceUrl} target="_blank" key={item.id}>
                                <img src={item.image} alt="Recipe" />
                                <h1>{item.title}</h1>
                                <a href={item.spoonacularSourceUrl} target='_blank' rel="noreferrer"><button>Click for Recipe</button></a>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index}>
                                <h1>{dataId[0]}</h1>
                            </div>
                        )
                    }
                })}
            </div>
        </div>

    )


}

export default DataList