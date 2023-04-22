import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"
import {useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {categoria} = useParams()

  console.log(categoria)

  useEffect(() => {
    if (!categoria) {
      mFetch()
      // .then(res=> res.json() )
      .then((resultado) => {
        setProductos(resultado)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
    }else{
      mFetch()
      // .then(res=> res.json() )
      .then((resultado) => {
        setProductos(resultado.filter(producto => producto.categoria === categoria ))
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
    }
   
  }, [categoria])

 

  //map
  return (
    isLoading ?
           <h2>cargando...</h2>
      :
  
    <ItemList productos={productos} />   
  )
}

export default ItemListContainer