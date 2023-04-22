

export const ItemDetail = ({producto}) => {
  return (
    <>
    <div className="row">
      <div className="col">
        <img src={producto.foto} className="w-50" alt="imagen" />
        <h3>Nombre: {producto.name} </h3>
        <h3>Precio: {producto.price} </h3>
        <h3>Categoria: {producto.categoria} </h3>
        <h3>Stock: {producto.stock} </h3>
      </div>
      <div className="col">

      </div>

    </div>
    
    
    </>
  )
}
