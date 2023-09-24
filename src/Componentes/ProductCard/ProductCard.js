import React from "react";
import "./ProductCard.css"
import { FaCartPlus } from "react-icons/fa"
import propTypes from 'prop-types'
import FormatCurrency from "../../Utils/FormatCurrency";

function ProductCard ({data}){

    //desestruturando o "props" data
    //esses nomes: title, thumbnails e price são as chaves que vem da api.
    // foi colocado em uma const para não precisar digitar {data.price} por exemplo, ai digitamos somente {price}
    const {title, thumbnail, price} = data;


    return(

        <section className="product-card">
            <img 
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
                alt="product" 
                className="card-image"
            >
            </img>
            <div className="card-infos" >
                {/* <h2 className="card-price" > {price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} </h2> */}
                <h2 className="card-price" > {FormatCurrency(price)} </h2>
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



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////             HACK PARA PEGAR IMAGEM DE MAIOR QUALIDADE NA API NO ML            ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////              EXPLICANDO O REPLACE        //////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // EXPLICANDO O REPLACE COM RegEx DA IMAGEM THUMBNAIL (32 minutos de video da aula 3):
    // <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 

    // Na imagem, foi utilizado o replace, pois no final da chave da thumnail da api do ML, aparece "I.jpg" que da uma imagem de baixa qualidade, 
    // e ao trocar o I pelo W temos uma imagem de melhor qualidade. pra fazer essa alteração desejada usamos o replace, 
    // thumbnail.replace("I.jpg", "W.pjpg")
    // mas somente com o replace da forma descrita a cima não resolve todo o problema, pois ele substitui apenas o que for escrito "I.jpg"    
    // normalmente aparece o I.jpg no final da thumb da api, mas as vezes pode aparecer outra letra, como a letra O.jpg, 
    // então somente com o replace não irá funcionar.

    // Para contornar isso usa-se o REGEX.
    // thumbnail.replace(/\w\.jpg/gi, "W.jpg")

    // o g NO FINAL quer dizer que vai ser global (então vai ser na string inteira), e o i quer dizer que ele NÂO vai ser case sensitive
    // (A expressão em inglês case-sensitive significa que é sensível a letras maiúsculas e minusculas) 
    // e as informações vao dentro das 2 barras "//"

    // o \w quer dizer qualquer caractere, o ponto vai separado por barra, pois é um caractere especial, entao fica:
    //         \w = qualquer letra             +                 \. = adiciona o ponto               + jpg
    //  / \w\.jpg /gi
    // / \w\.jpg /gi, "W.jpg"
    // thumbnail.replace(/\w\.jpg/gi, "W.jpg")

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////                EXPLICANDO O METODO TOLOCALESTRING                        //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // EXPLICANDO O METODO TOLOCALESTRING UTILIZADO EM PRICE
    
    // Como price é uma string, então podemos utilizar o metodo toLocaleString pra poder formatar essa string.
    // primeiro passamos o formato, qu é pt-br
    // depois passamos um objeto com algumas propriedades, como estilo = que é uma moeda "currency", e depois a moeda = que é real "BRL"

    // <h2 className="card-price" > {price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} </h2>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////                EXPLICANDO A PROPRIEDADE PROPTYPES                        //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // O PropTypes é uma biblioteca que permite que você defina o tipo esperado para as props passadas para seus componentes 
    // React e ajuda a detectar erros de tipo durante o desenvolvimento.

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////                EXPLICANDO O METODO SHAPE                                 //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // A propriedade shape é usada para validar que uma prop é um objeto com uma estrutura de propriedades específica. 
    // Ela permite que você defina um objeto com chaves e valores correspondentes aos nomes e tipos das props que você espera.

    // import PropTypes from 'prop-types';

    // const MyComponent = ({ person }) => {
    // return (
    //     <div>
    //     <p>Name: {person.name}</p>
    //     <p>Age: {person.age}</p>
    //     </div>
    // );
    // };

    // MyComponent.propTypes = {
    // person: PropTypes.shape({
    //     name: PropTypes.string,
    //     age: PropTypes.number,
    // }),
    // };

    // export default MyComponent;


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
