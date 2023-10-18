import React, { useContext } from "react";
import { BsCartDashFill } from 'react-icons/bs';
import "./CartItem.css"
import FormatCurrency from "../../Utils/FormatCurrency";
import propTypes from 'prop-types'
import AppContext from "../../Context/AppContext";

function CartItem({data}){

    const { cartItens, setCartItens } = useContext(AppContext)
    const{ id, thumbnail, title, price} = data

    const handleRemoveItem = () => {
        // vai filtrar os produtos com id diferente do id do produto que eu cliquei para remover
        const updatedItens = cartItens.filter((item) => item.id != id )
        // depois de filtrar vai atualizar o array com os produtos sem o produto que eu cliquei para remover
        setCartItens(updatedItens)
    }

    return(
        <section className="cart-item">
            <img 
            src={thumbnail} 
            alt="imagem do produto" 
            className="cart-item-image" ></img>

            <div className="cart-item-content">
                <h3 className="cart-item-title" >{title}</h3>
                <h3 className="cart-item-price" >{FormatCurrency(price)}</h3>

                <button 
                type="button" 
                className="button-remove-item"
                onClick={ handleRemoveItem} > <BsCartDashFill /> </button>
            </div>
        </section>
    )
}

export default CartItem

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;