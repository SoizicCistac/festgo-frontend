import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import myApi from '../service/service'
import StandCard from '../components/StandCard'


const Festival = () => {
  const [ festival, setFestival ] = useState('')
  const [ allStand, setAllStand ] = useState([])
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

    myApi
      .getAllStands()
      .then((res) => {
        setAllStand(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const filteredStands = allStand.filter((stand => stand.festival === id))

  const handleClick = async () => {
    try {
      await myApi.deleteFestival(params.id)
      navigate('/festivals')
    } catch (error) {
      console.error(error)
    }
  }
  let dateBeginning, dateEnd
if (festival) {
  console.log(festival.dateBeginning)
   dateBeginning = new Date(festival.dateBeginning).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
   dateEnd = new Date(festival.dateEnd).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

}


  console.log(filteredStands)
  return (
    <div>
        <h1>{festival.name}</h1>
        <p>From {dateBeginning} to {dateEnd}</p>
        {
          filteredStands.map(stand => {
            return (<StandCard stand={stand}/>)
          })
        }

  <Link to={"/festivals/"+id+"/edit"}>
    <button>Edit Festival</button>
  </Link>

  <Link to="/stand/create">
    <button>Add a stand</button>
  </Link>

  <button onClick={handleClick}>Delete festival</button>
    </div>
  )
}

export default Festival