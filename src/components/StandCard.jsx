import React from 'react'
import { Link } from 'react-router-dom'

const StandCard = (props) => {

  return (
    <div>
      <Link to={"/festivals/"+props.stand.festival+"/stand/"+props.stand._id}>
        <h3>{props.stand.name}</h3>
      </Link>
      <p>{props.stand.description}</p>
    </div>
  )
}

export default StandCard