import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Link } from 'react-router-dom'
import myApi from '../service/service'

const Festivals = () => {

  const [ festivals, setFestivals ] = useState([])

  const { user } = useContext(AuthContext)

  // get all the festivals from the API
  useEffect(() => {
    myApi
      .getAllFestivals()
      .then(res => setFestivals(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='festivals'>
    {
      festivals.map(festival => {
        return <Link to={"/festivals/"+festival._id}>
          <div>
            <img id="festivalBanner" src={festival.picture}/>
          </div>
        </Link>
      })
    }
    {
      user && user.userType === "admin"
      ?   <Link to="/festivals/create">
            <button className='create'>Create a Festival</button>
          </Link>
      : null
    }
    </div>
  )
}

export default Festivals