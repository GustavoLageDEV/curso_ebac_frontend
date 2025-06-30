import "./perfil.css"

const Perfil = () => {
    const usuario = {
        nome: "Gustavo Lage",
        avatar: 'https://github.com/GustavoLageDEV.png'
    } 

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil