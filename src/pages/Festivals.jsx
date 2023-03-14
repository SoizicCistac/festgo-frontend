import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myApi from '../service/service'

const Festivals = () => {

  const [ festivals, setFestivals ] = useState([])

  useEffect(() => {
    myApi
      .getAllFestivals()
      .then(res => setFestivals(res.data))
      .catch(err => console.error(err))
  }, [])

  console.log("festivals", festivals)

  return (
    <div>Festivals

    {
      festivals.map(festival => {
        return <Link to={"/festivals/"+festival._id}>
          <div>
            <img id="festivalBanner" src={festival.picture}/>
          </div>
        </Link>
      })
    }
    <Link to="/festivals/create">
      <button>Create a Festival</button>
    </Link>
    
    </div>
  )
}

export default Festivals