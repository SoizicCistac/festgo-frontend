import React, { useState, useEffect } from 'react'
import myApi from '../../service/service'
import { useNavigate, useParams } from 'react-router-dom'

const EditFestival = () => {
    const [ name, setName ] = useState('')
    const [ dateBeginning, setDateBeginning ] = useState('')
    const [ dateEnd, setDateEnd ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ pictureFile, setPictureFile ] = useState('')
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
      myApi
        .getOneFestival(params.id)
        .then(res => {
            setName(res.data.name)
            setDateBeginning(res.data.dateBeginning.slice(0,10))
            setDateEnd(res.data.dateEnd.slice(0,10))
            setLocation(res.data.location)
        })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        if (pictureFile) {
            formData.append("picture", pictureFile)
            const {data: { picture }} = await myApi.addImage(formData)
            const festivalToUpdate = {
                name,
                dateBeginning,
                dateEnd,
                location,
                picture
            }
            const res = await myApi.updateFestival(params.id, festivalToUpdate)
        } else {
            const festivalToUpdate = {
                name,
                dateBeginning,
                dateEnd,
                location
            }
            const res = await myApi.updateFestival(params.id, festivalToUpdate)
        }
        

        navigate('/festivals')
    }

  return (
    <div>
        <h2>Update {name}</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name of the Festival</label>
                <input value={name} type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="dateBeginning">From</label>
                <input value={dateBeginning} type="date" name="dateBeginning" id="dateBeginning" onChange={(event) => setDateBeginning(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="dateEnd">To</label>
                <input value={dateEnd} type="date" name="dateEnd" id="dateEnd" onChange={(event) => setDateEnd(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="location">At</label>
                <input value={location} type="text" name="location" id="location" onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="picture">Picture</label>
                <input type="file" name="picture" id="picture" onChange={(event) => setPictureFile(event.target.files[0])}/>
            </div>

            <button>Update</button>
        </form>

    </div>
  )
}

export default EditFestival