const FetchProducts = async (query) => { //função assincrona que recebe uma query e passa para o fetch "item a ser pesquisado"

    // await foi utilizado para aguardar o retorno do fetch
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)

    //precisamos extrair os dados no formato JSON do retorno do fetch "Resposta a requisição"
    const data = await response.json()

    //ao visitar o endpoint do mercado livre, no objeto json do endpoint, temos a chave results, que é só o que precisamos para o nosso projeto
    // ja que mostraremos somente os resultados
    return data.results

}

export default FetchProducts