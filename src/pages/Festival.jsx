import React, { useState, useEffect } from 'react'
import StandCard from '../components/StandCard'
import { useNavigate, useParams, Link } from 'react-router-dom'
import myApi from '../service/service'

const Festival = () => {
  const [ festival, setFestival ] = useState('')
  const params = useParams()
  const navigate = useNavigate()
  const { id } = params

  useEffect(() => {
    myApi
      .getOneFestival(id)
      .then((res) => {
        setFestival(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
        <h1>{festival.name}</h1>

      {/* <StandCard/> */}

  <Link to={"/festivals/"+id+"/edit"}>
    <button>Edit Festival</button>
  </Link>
    </div>
  )
}

export default Festival