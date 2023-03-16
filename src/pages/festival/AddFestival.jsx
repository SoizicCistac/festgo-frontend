import React, { useState } from 'react'
import myApi from '../../service/service'
import { useNavigate } from 'react-router-dom'

const AddFestival = () => {
    const [ name, setName ] = useState('')
    const [ dateBeginning, setDateBeginning ] = useState('')
    const [ dateEnd, setDateEnd ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ pictureFile, setPictureFile ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("picture", pictureFile)
        const {data: { picture }} = await myApi.addImage(formData)

        const festivalToCreate = {
            name,
            dateBeginning,
            dateEnd,
            location,
            picture
        }

        const res = await myApi.createFestival(festivalToCreate)

        navigate('/festivals')
    }

  return (
    <div className='createFestival'>
        <h2>Create a festival</h2>
        <form onSubmit={handleSubmit}>
            <div className='createFestivalForm'>
                <label className="label" htmlFor="name">Name of the Festival</label>
                <input value={name} type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>

                <label className="label" htmlFor="dateBeginning">From</label>
                <input value={dateBeginning} type="date" name="dateBeginning" id="dateBeginning" onChange={(event) => setDateBeginning(event.target.value)}/>

                <label className="label" htmlFor="dateEnd">To</label>
                <input value={dateEnd} type="date" name="dateEnd" id="dateEnd" onChange={(event) => setDateEnd(event.target.value)}/>

                <label className="label" htmlFor="location">At</label>
                <input value={location} type="text" name="location" id="location" onChange={(event) => setLocation(event.target.value)}/>

                <label className="label" htmlFor="picture">Picture</label>
                <input type="file" name="picture" id="picture" onChange={(event) => setPictureFile(event.target.files[0])}/>
            </div>

            <button className='create'>Create</button>
        </form>

    </div>
  )
}

export default AddFestival