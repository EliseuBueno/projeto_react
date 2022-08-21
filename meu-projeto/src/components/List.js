import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1990}/>
                <Item marca="Ford" ano_lancamento={1989}/>
                <Item marca="Renault" ano_lancamento={2000}/>
            </ul>
        </>
    )
}

export default List