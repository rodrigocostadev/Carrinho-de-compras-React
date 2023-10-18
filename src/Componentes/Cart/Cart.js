import React, { useContext } from "react";
import './Cart.css'
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";
import FormatCurrency from "../../Utils/FormatCurrency";

function Cart(){

    const{ cartItens, isCartVisible } = useContext(AppContext)

    // PEGANDO O PREÇO TOTAL DO CARRINHO (de forma explicativa):
    // const cartPrices = cartItens.map(cartItenValue => cartItenValue.price )
    // let totalPrice = 0
    // for( let i = 0; i< cartPrices.length; i++){
    //     totalPrice += cartPrices[i]
    // }

    // PEGANDO O PREÇO TOTAL DO CARRINHO DE UMA MANEIRA MAIS EFICAZ:
    const totalPrice = cartItens.reduce((acumulator, item) => item.price + acumulator, 0) 
    // acumulator inicia com 0, por isso ele fica la no final

    // console.log(cartItens)
    console.log(totalPrice)

    return(
        <section className={ `cart ${isCartVisible? 'cart-active' : ''}`} >
            <div className="cart-itens" >
                { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} ></CartItem>)}
            </div>
            <div className="cart-resume" > {FormatCurrency(totalPrice)}</div>
        </section>
    )
}

export default Cart