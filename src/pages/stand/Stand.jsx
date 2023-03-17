import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import myApi from '../../service/service'

const Stand = () => {
  const params = useParams()
  const [ oneStand, setOneStand ] = useState('')
  const [ products, setProducts ] = useState(null)
  const { idstand, id } = params
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    myApi
      .getOneStand(idstand)
      .then((res) => {
        setOneStand(res.data)
        setProducts(res.data.products)
      })
  }, [])


  const handleClick = async () => {
    try {
      await myApi.deleteStand(params.idstand)
      navigate(`/festivals/${id}`)
    } catch (error) {
      console.error(error)
    }
  }
  if(!oneStand || !products){
    return
}

  return (
    <div>
      <img className="standImg" src={"/assets/"+oneStand.standType+".jpeg"} alt={oneStand.standType} />
      <h2>{oneStand.name}</h2>
      <p className='standDescription'>{oneStand.description}</p>

      { products.length !== 0 && products.map((product) =>{
          return <div className='product'>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </div>
        })
      }

      {
        user && user.userType === "admin"
        ?
        <>
          <Link to={"/festivals/"+id+"/stand/"+idstand+"/edit"}>
            <button className='edit'>Edit Stand</button>
          </Link>

          <Link to={"/festivals/"+id+"/stand/"+idstand+"/addproduct"}>
            <button className='create'>Add a product</button>
          </Link>

          <button className='delete' onClick={handleClick}>Delete stand</button>
        </>
        : null
      }

    </div>
  )
}

export default Stand