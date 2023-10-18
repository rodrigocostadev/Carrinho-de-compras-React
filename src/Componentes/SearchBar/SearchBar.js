import React from "react";
import { BsSearch } from "react-icons/bs"
import "./SearchBar.css"
import { useState } from "react";
import FetchProducts from "../../Api/FetchProducts";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";

function SearchBar(){

    const[ searchValue, setSearchValue] = useState("")

    // com essa const abaixo tenho acesso a qualquer propriedade dos elementos pais, que no caso foi a propriedade name que foi
    // disponibilizada la no arquivo PROVIDER
    const {setProducts, setLoading} = useContext(AppContext)

    const handleSearch = async (event) => {

        // metodo preventDefault evita que a pagina seja recarregada
        event.preventDefault()
        setLoading(true)
        const products = await FetchProducts(searchValue)
        // console.log(products)
        setProducts(products)
        setLoading(false)
        setSearchValue("")
        // alert("teste")
    }

    // function handleSearch(event) {
    //     event.preventDefault()
    //     alert("teste")
    // }

    return(
        <form className="search-bar" onSubmit={handleSearch}>
            <input 
                type="search" 
                value={searchValue}
                placeholder="Buscar Produtos" 
                className="search_input"
                onChange={({target}) => setSearchValue(target.value)}
                required>                                    
            </input>
            <button type="submit" className="search_button">
                <BsSearch></BsSearch>
            </button>                    
        </form>
    )
}

export default SearchBar