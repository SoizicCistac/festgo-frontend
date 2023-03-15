import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import myApi from '../../service/service'
import StandCard from '../../components/StandCard'


const Festival = () => {
  const [ festival, setFestival ] = useState('')
  const [ allStand, setAllStand ] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const { id } = params

  const { user } = useContext(AuthContext)

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
   dateBeginning = new Date(festival.dateBeginning).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
   dateEnd = new Date(festival.dateEnd).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

}
  return (
    <div>
      <div className="festivalInfo">
        <h2>{festival.name}</h2>
        <p>From {dateBeginning} to {dateEnd}</p>
      </div>

      <div className='festivalStands'>
        {
          filteredStands.map(stand => {
            return (<StandCard stand={stand}/>)
          })
        }
      </div>
        

  {
    user && user.userType === "admin"
    ?
    <>
      <Link to={"/festivals/"+id+"/edit"}>
        <button className='edit'>Edit Festival</button>
      </Link>

      <Link to={"/festivals/"+id+"/stand/create"}>
        <button className='create'>Add a stand</button>
      </Link>

      <button className='delete' onClick={handleClick}>Delete festival</button>
    </>
    : null
  }
  
    </div>
  )
}

export default Festival