import React, { useEffect, useState } from "react";
import "./Products.css"
import FetchProducts from "../../Api/FetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        //de acordo com o array de dependencias vazio,"apos o fechamento dessas chaves" a função fetch rodara somente uma vez

        //se a função fetchProducts rodar, THEN = "então" pega a resposta e passa para o array de produtos do useState
        FetchProducts("iphone").then((response) => {
            setProducts(response)
            // console.log(products)
        })
    },[])

    

    return(
        <section className="products container" > 


        {
            products.map((product) => <ProductCard key={product.id} data={product}></ProductCard>)
        }

        
        </section>
    )

    // return(
    //     <section className="products container" > 
    //         {products.map((product) => <p key={product.title}>{product.title}</p>)}
    //     </section>
    // )
}

export default Products