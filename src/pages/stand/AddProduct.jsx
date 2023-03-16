import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import myApi from '../../service/service'

const AddProduct = () => {
    const [ stand, setStand ] = useState('')
    // const [ products, setProducts ] = useState([])
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState(0)
    const params = useParams()
    const { id, idstand } = params
    const navigate = useNavigate()

    useEffect(() => {
        myApi
            .getOneStand(idstand)
            .then((res) => {
                setStand(res.data)
                // setProducts(res.data)
            })
    }, [])

    console.log("stand addproduct", stand)

    const handleSubmit = async (event) => {
        event.preventDefault()
  
        const productToUpdate = 
            {
                name,
                price
            }
    
  
        console.log("add product", productToUpdate)
        const res = await myApi.addProduct(idstand, productToUpdate)
  
        navigate(`/festivals/${id}/stand/${idstand}`)
    }



  return (
    <div className='createProduct'>
        <h2>Add Product for {stand.name} stand</h2>
    
        <form onSubmit={handleSubmit}>
            <div className='createProductForm'>
                <label className="label" htmlFor="name">Name of the stand</label>
                <input value={name} type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
                <label className="label" htmlFor="price">Price</label>
                <input value={price} type="number" name="price" id="price" onChange={(event) => setPrice(event.target.value)}/>
            </div>

            <button className='create'>Add</button>
        </form></div>


  )
}

export default AddProduct