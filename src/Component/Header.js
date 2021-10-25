import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'task Manager',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
