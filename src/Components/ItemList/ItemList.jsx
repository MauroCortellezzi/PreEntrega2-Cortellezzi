import { Link } from "react-router-dom"
import Item from "../Item/Item"


const ItemList = ({ productos }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>

            {productos.map( producto => <Item key={producto.id} {...producto} />
                )
            }

        </div>
    )
}

export default ItemList