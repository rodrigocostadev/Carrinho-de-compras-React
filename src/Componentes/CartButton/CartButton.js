import React, { useContext } from "react";
import {GrCart} from "react-icons/gr"
import "./CartButton.css"
import AppContext from "../../Context/AppContext";

function CartButton (){

    const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext)
    return(
        <button 
        type="button" 
        className="cart_button"

        // No arquivo Provider o estado de iscartvisible esta false, então ao clicar ele vai negar o estado atual para true, 
        // ao clicar mais uma vez vai negar novamente, passando para false, assim abrindo e fechando o carrinho de compras
        onClick={() => setIsCartVisible(!isCartVisible)}>

            <GrCart></GrCart>

            {/* se cart itens for maior que 0, aparecera a quantidade de itens no carrinho */}
            { cartItens.length > 0 && <span className="cart-status">{cartItens.length}</span>}

            {/* <span className="cart-status">{cartItens.length}</span> */}
        </button>
    )
}

export default CartButton