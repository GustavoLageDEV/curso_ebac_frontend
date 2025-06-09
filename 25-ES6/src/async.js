function funcMuitoPesado() {
    let execucoes = 0

    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }

    return execucoes
}

const funcMuitoPesadoPromise = new Promise((resolve,reject) => {
    try {
        let execucoes = 0

        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }

        resolve(execucoes)
    } catch(e) {
        reject("Deu erro na iteração dos números")
    }
})

// console.log("Inicio")
// console.log(funcMuitoPesado());
// funcMuitoPesadoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
// console.log("Fim")

async function execucaoPrincipal() {
    console.log("Inicio")
    
    // await funcMuitoPesadoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('GustavoDEV',123545).then(resultado => {
        console.log(resultado);
    })
    
    try {
        const resultado = await funcMuitoPesadoPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log("Fim")
}

const promiseComParametros = (login,senha) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)

    })
} 

execucaoPrincipal()

