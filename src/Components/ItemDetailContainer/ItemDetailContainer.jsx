import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"


export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)

    // estado para guardar un producto
const {pid} = useParams()

useEffect(()=>{
mFetch(pid)
.then(resp => setProducto(resp) )
.catch(err=> console.log(err))
.finally(()=> setIsLoading(false))
},[])

    //UseEffect traer un producto por pid llamando api, guardar en el estado
console.log(pid)

  return (
    <div>
      {isLoading ? 
      <h2>Cargando...</h2>
      :
        <ItemDetail producto={producto}/>
      }
    </div>
  )
}
