
function FormatCurrency (value){
    return value.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
}

// const FormatCurrency = (value, currency) => {
//     return value.toLocaleString('pt-br', {style: 'currency', currency})
// }

export default FormatCurrency