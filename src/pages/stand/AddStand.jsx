import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myApi from '../../service/service'

const AddStand = () => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ festival, setFestival ] = useState('')
  const [ standType, setStandType ] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()


  useEffect(() => {
    myApi
      .getOneFestival(id)
      .then((res) => setFestival(res.data))
  }, [])

  const handleSubmit = async (event) => {
      event.preventDefault()

      const standToCreate = {
          name,
          description,
          festival: festival._id,
          standType
      }

      const res = await myApi.createStand(standToCreate)

      navigate(`/festivals/${festival._id}`)
  }

  return (
    <div className='createStand'>
      <h2>Add a stand for {festival.name}</h2>

      <form onSubmit={handleSubmit}>
        <div className='createStandForm'>
          <label className="label" htmlFor="name">Name of the stand</label>
          <input value={name} type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>

          <label className="label" htmlFor="description">Description</label>
          <input value={description} type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)}/>
          
          <select value={standType} name="standType" id="standType" onChange={event => setStandType(event.target.value)}>
            <option disabled selected="selected">Please choose</option>
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

        <button className='create'>Create</button>
      </form>
    </div>
  )
}

export default AddStand