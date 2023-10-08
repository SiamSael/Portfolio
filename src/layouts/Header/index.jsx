import memin from '../../images/memin.jpg'
import Nav from '../../components/Nav'

const Header = () => {
    return (
        <header className="header" id="accueil">
            <img className="header__logo" src={ memin } alt="Ambre Bidault" />
            <Nav />
            <a href="#accueil" className="header__ref"><i className="fa-solid fa-arrow-up"></i></a>
        </header>
    )
}

export default Header