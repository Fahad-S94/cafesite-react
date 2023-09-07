import Cart from "../features/cart/Cart";
import SubHeader from "../components/SubHeader";

const CartPage = () => {
    return (
        <div>
            <SubHeader current="Cart"/>
            <Cart />
        </div>
    )
}


export default CartPage