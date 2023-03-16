import React, { useState, useEffect } from 'react'
import myApi from '../../service/service'
import { useNavigate, useParams } from 'react-router-dom'

const EditStand = () => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ festival, setFestival ] = useState('')
  const [ standType, setStandType ] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    myApi
      .getOneStand(params.idstand)
      .then((res) => {
        setName(res.data.name)
        setDescription(res.data.description)
        setFestival(res.data.festival)
        setStandType(res.data.standType)
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const standToUpdate = {
        name,
        description,
        festival: festival._id,
        standType
    }

    const res = await myApi.updateStand(params.idstand, standToUpdate)

    console.log("edit stand", standToUpdate)

    navigate(`/festivals/${festival._id}`)
}


  return (
    <div className='editStand'>

      <h2>Edit stand {name} for {festival.name}</h2>

      <form onSubmit={handleSubmit}>
        <div className='editStandForm'>
          <label className="label" htmlFor="name">Name of the stand</label>
          <input value={name} type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
          <label className="label" htmlFor="description">Description</label>
          <input value={description} type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)}/>
          <select value={standType} name="standType" id="standType" onChange={event => setStandType(event.target.value)}>
            <option disabled value="-1">Please choose</option>
            <option value="burger">Burger</option>
            <option value="drinks">Drinks</option>
            <option value="noodles">Noodles</option>
            <option value="pizza">Pizza</option>
            <option value="salads">Salads</option>
            <option value="sushi">Sushi</option>
            <option value="yakitori">Yakitori</option>
            <option value="default">Other</option>
          </select>
        </div>

        <button className='edit'>Update</button>
      </form>
    </div>
  )
}

export default EditStand