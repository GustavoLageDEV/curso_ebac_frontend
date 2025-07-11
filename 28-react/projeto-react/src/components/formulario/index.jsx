import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O componente finalizou')
        }
    });

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('Nota da matéria A mudou para: ' + materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value) Faz com que nome = ao estado atual do input
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }
    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
            {materiaA}
            {materiaB}
            {materiaC}
        </form>
    )
}

export default Formulario