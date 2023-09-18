import React from "react";
import { BsSearch } from "react-icons/bs"
import "./SearchBar.css"
import { useState } from "react";

function SearchBar(){

    const[ searchValue, setSearchValue] = useState("")

    return(
        <form className="search-bar">
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