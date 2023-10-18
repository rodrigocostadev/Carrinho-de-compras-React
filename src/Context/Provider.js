import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

function Provider({children}){

    const [products, setProducts] = useState([])

    // Estado criado para controlar quando o load vai aparecer e quando vai sumir
    const [loading, setLoading] = useState(true)

    // Estado criado para gerenciar as modificações no carrinho de compras
    const [cartItens, setCartItens] = useState([])

    // Estado criado para mostrar ou não o carrinho de compras
    const [isCartVisible, setIsCartVisible] = useState(false)


    const value = {
        products, 
        setProducts,
        loading,
        setLoading,
        cartItens,
        setCartItens,
        isCartVisible,
        setIsCartVisible
    }

    return(
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}

export default Provider

// proptypes.any por que recebe varios tipos de dados como imagem, string, numeros e objetos
Provider.propTypes = {
    children: propTypes.any
}.isRequired


   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////                EXPLICANDO A PROPRIEDADE PROPTYPES  ANY                   //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // O PropTypes é uma biblioteca que permite que você defina o tipo esperado para as props passadas para seus componentes 
    // React e ajuda a detectar erros de tipo durante o desenvolvimento.

    //Utilizar PropTypes.any em React pode ser necessário em situações em que você deseja aceitar qualquer tipo de valor para uma 
    // determinada prop. É uma maneira de definir que uma prop pode ter qualquer tipo de dado, seja um número, uma string, um objeto, 
    // uma função, ou até mesmo um componente React.

    // Embora seja uma prática comum usar PropTypes mais específicos para validar os tipos de propriedades, como PropTypes.string, 
    // PropTypes.number, PropTypes.object, etc., existem situações em que PropTypes.any pode ser apropriado:

    // 1 Flexibilidade: Se você está construindo um componente altamente flexível que deve aceitar diferentes tipos de dados 
    // para uma prop específica, PropTypes.any permite que você faça isso sem restringir os tipos de valores aceitáveis.

    // 2 Integração com APIs externas: Quando você está interagindo com APIs externas que podem fornecer uma variedade de tipos de 
    // dados para uma prop, PropTypes.any pode ser útil para evitar erros de tipo.

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////