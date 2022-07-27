import PropTypes from 'prop-types'

function Item({nome, idade}){
    return(
        <>
            <p>{nome} - {idade} anos</p>
        </>
    )
}

Item.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number
}

export default Item