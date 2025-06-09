let meuMap = new Map();

meuMap.set("nome", "Gustavo");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
};

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack")

console.log(meuMap)

////////////////////////////////////////////////////

const cpfs = new Set();

cpfs.add('39970258001')
cpfs.add('55822862098')
cpfs.add('57420825092')
cpfs.add('28671124002')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['gian', 'gustavo', 'pedro', 'alice', 'gustavo', 'alice']

const arrayComoSet = new Set([...array])

console.log(arrayComoSet)

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arraySemItensDuplicados)
