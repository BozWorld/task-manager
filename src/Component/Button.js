import PropTypes from 'prop-types'

const Button = ({ color, text,onClick }) => {
     return <button  className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
}

/* const ButtonStyle = {
    color: 'red',
    backgroundColor: 'blue',
} */

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
