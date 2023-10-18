import React, { useContext, useEffect, useState } from "react";
import "./Products.css"
import FetchProducts from "../../Api/FetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../Context/AppContext";

function Products(){

    const{products, setProducts,loading,setLoading} = useContext(AppContext)

    // Estado criado para controlar quando o load vai aparecer e quando vai sumir
    // TRANSFERIDO PARA O PROVIDER
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        //de acordo com o array de dependencias vazio,"apos o fechamento dessas chaves" a função fetch rodara somente uma vez

        //se a função fetchProducts rodar, THEN = "então" pega a resposta e passa para o array de produtos do useState
        FetchProducts("iphone").then((response) => {
            setProducts(response)

            // após carregar os produtos, a animação de load é cancelada com setLoading(false)
            setLoading(false)
            // console.log(products)
        })
    },[])

    

    // Return: se loading for verdadeiro, retorna a animação de loading, se não "OU" retorna os produtos.
    // retorna loading enquanto as informaçoes ainda não carregaram, 
    //após carregar e o estado de setLoading estar como falso, mostrara os produtos
    return(
        (loading && <Loading></Loading>) ||

        (<section className="products container" >     
        {
            products.map((product) => <ProductCard key={product.id} data={product}></ProductCard>)
        }        
        </section>)
    )

    // return(
    //     <section className="products container" > 
    //         {products.map((product) => <p key={product.title}>{product.title}</p>)}
    //     </section>
    // )
}

export default Products