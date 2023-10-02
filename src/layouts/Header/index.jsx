import memin from '../../images/memin.jpg'
import Nav from '../../components/Nav'

const Header = () => {
    return (
        <header className="header">
            <a href="#accueil"><img className="header__logo" src={ memin } alt="Ambre Bidault" /></a>
            <Nav />
        </header>
    )
}

export default Header