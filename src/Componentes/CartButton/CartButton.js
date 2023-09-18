import React from "react";
import {GrCart} from "react-icons/gr"
import "./CartButton.css"

function CartButton (){
    return(
        <button type="button" className="cart_button">
            <GrCart></GrCart>
            <span className="cart-status">1</span>
        </button>
    )
}

export default CartButton