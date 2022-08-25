function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `${algumNome}, tudo bem ?`
    }

    return(
        <>
        {nome && (
            <div>
                <p>Saudação, {nome}, seja bem vindo(a)!!!</p>
                <p>{gerarSaudacao(nome)}</p>
            </div>
                )
        }
        </>
    )
}

export default Saudacao