import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return(
        <>
            <p>Marca do Veículo:</p>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item