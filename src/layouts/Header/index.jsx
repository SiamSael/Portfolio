import memin from '../../images/memin.jpg'
import Nav from '../../components/Nav'

const Header = () => {
    return (
        <header className="header" id="accueil">
            <div>
                <a href="#accueil"><img className="header__logo" src={ memin } alt="logo de kasa" /></a>
            </div>
            <Nav />
        </header>
    )
}

export default Header