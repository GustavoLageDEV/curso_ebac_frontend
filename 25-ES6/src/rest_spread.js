// Rest Operator

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    // console.log(arguments)
    return soma
}

console.log(`Funçao somar: ${somar(10,20,30,40)}`)

function somarComRest(...numeros) {
    const soma = numeros.reduce((total,numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma;
}

console.log(`Funçao somarComRest: ${somarComRest(10,20,30,40)}`)

// Spread Operator

const numeros = [1,2,3,4]

console.log(...numeros)

const timesDeFutebolSP = ['São Paulo','Santos','Palmeiras','Corinthians']
const timesDeFutebolRIO = ['Flamengo','Vasco','Botafogo','Fluminense']

const timesDeFutebol = timesDeFutebolSP.concat(timesDeFutebolRIO);

const timesDeFutebol1 = [...timesDeFutebolSP, ...timesDeFutebolRIO];


console.log(timesDeFutebol)

console.log(timesDeFutebol1)

const carroDaJulia = {
    modelo: "Corola",
    fabricante: "Toyota",
    motor: 1.6
}

const carroDoDavi = {
    ...carroDaJulia,
    motor: 2.0
}

console.log(carroDoDavi)

//  Desestruturaçao

// const motorJulia = carroDaJulia.motor;

const {motor: motorJulia} = carroDaJulia;
const {motor: motorDavi} = carroDoDavi;

console.log(`Motor da Julia: ${motorJulia}, Mototr do Davi: ${motorDavi}`)

const [item1,item2,item3, ...outrosTimes] = timesDeFutebol
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)