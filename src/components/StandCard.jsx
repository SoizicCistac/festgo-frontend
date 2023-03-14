import React from 'react'

const StandCard = (props) => {
  console.log("stand card", props)

  return (
    <div>
      <h3>{props.stand.name}</h3>
      <p>{props.stand.description}</p>
    </div>
  )
}

export default StandCard