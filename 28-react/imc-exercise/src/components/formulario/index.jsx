import { useState, useEffect } from "react"

import styles from './formulario.module.css'
import tabela from "../../assets/classificacaoIMC.webp"

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado,setResultado] = useState(null);

    const classificacoes = [
        { limite: 18.5, categoria: "Abaixo do peso" },
        { limite: 24.9, categoria: "Peso normal" },
        { limite: 29.9, categoria: "Sobrepeso" },
        { limite: 34.9, categoria: "Obesidade grau 1" },
        { limite: 39.9, categoria: "Obesidade grau 2" },
        { limite: Infinity, categoria: "Obesidade grau 3" }
    ];

    const calcularIMC = () => {
        const imc = (peso / altura**2).toFixed(1);
        const categoria = classificacoes.find(item => imc <= item.limite).categoria;
        setResultado({imc: imc, categoria}) //Objeto com imc do usuario e sua categoria
    };

    return (
        <div className="container">
            <h1 className={styles.title}>Calculadora de IMC</h1>
            <img className={styles.tabela} src={tabela} alt="Classificação IMC" />
            <form>
                <input type="number" placeholder="Peso (kg)" onChange={evento => setPeso(evento.target.value)} />
                <input type="number" placeholder="Altura (m)" step={0.01} onChange={({ target }) => setAltura(target.value)} />
                <button type="button" onClick={calcularIMC}>Calcular IMC</button>
            </form>

            {resultado && (
                <div className="resultado">
                    <p><strong>IMC: {resultado.imc}</strong></p>
                    <p><strong>Classificação: {resultado.categoria}</strong></p>
                </div>
            )}
        </div>
    )
}

export default Formulario