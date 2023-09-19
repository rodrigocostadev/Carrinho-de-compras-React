import React from "react";
import "./ProductCard.css"
import { FaCartPlus } from "react-icons/fa"
// import propTypes from "prop-types"

function ProductCard ([data]){

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////// HACK PARA PEGAR IMAGEM DE MAIOR QUALIDADE NA API NO ML   /////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////q

    // Na hora de pegar uma imagem do endpoint da api do ML, temos a chave thumbnail, normalmente ela vem com a letra I no final "antes de jpg"
    //no qual temos uma imagem pequena.   "http://http2.mlstatic.com/D_854454-MLB71449093832_092023-I.jpg"
    // ao alterar a letra I para W conseguimos pegar uma imagem de maior qualidade.
    // <img src="https://http2.mlstatic.com/D_854454-MLB71449093832_092023-W.jpg" alt="product" className="card-image" ></img>


    // return(

    //     <section className="product-card">
    //         <img src="https://http2.mlstatic.com/D_854454-MLB71449093832_092023-W.jpg" alt="product" className="card-image" ></img>
    //         <div className="card-infos" >
    //             <h2 className="card-price" > R$ 37.900 </h2>
    //             <h2 className="card-title" > Cb 650 F </h2>
    //         </div>
    //         <button type="button" className="button-add-cart" > 
    //             <FaCartPlus></FaCartPlus>
    //         </button>
    //     </section>

    // )


    //desestruturando o "props" data
    const {title, thumbnail, price} = data;


    return(

        <section className="product-card">
            <img src={thumbnail} ></img>
            <div className="card-infos" >
                <h2 className="card-price" > {price} </h2>
                <h2 className="card-title" > {title} </h2>
            </div>
            <button type="button" className="button-add-cart" > 
                <FaCartPlus></FaCartPlus>
            </button>
        </section>


    )

}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;


// 28 minutos de video, desenvolvendo um carrinho de compras com react aula 3