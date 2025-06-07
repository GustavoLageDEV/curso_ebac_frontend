const minhaFuncao = () => {
    console.log("Diz olá")
}

minhaFuncao()

const minhaFuncao2 = () => {
    return "Diz olá"
}

const minhaFuncao3 = () => "Diz olá"

minhaFuncao()

console.log(minhaFuncao2())

minhaFuncao3()

const retornaCarro = () => ({
    modelo: "Corola",
    fabricante: "Toyota"
}) 

console.log(retornaCarro())