import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const CartWidget = () => {
  return (
    <div >
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black " />
        <strong>0</strong>
    </div>
  )
}

export default CartWidget
