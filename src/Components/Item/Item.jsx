import { Link } from "react-router-dom"


const Item = ({ id, foto, name, price, categoria }) => {
  return (
    <div key={id} className="card w-25">
                    <Link to={`/detail/${id}`}>
                        <img src={foto} className="card-img-top" alt="imagen" />
                    </Link>

                    <div className="card-body">
                        <h6>Nombre:{name}</h6>
                        <label>Precio: {price}</label>
                        <label>Categoria: {categoria}</label>
                    </div>
                    {/* <div className="card-footer">
                                         <button className="btn btn-outline-dark">Detalle</button>
                                       </div> */}
                </div>
  )
}

export default Item