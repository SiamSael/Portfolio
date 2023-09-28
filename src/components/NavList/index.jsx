import navCategories from '../../utils/datas/navCategories.json'
import NavElt from '../NavElt'

const NavList = () => {
    return (
        <ul className="header__nav--ul">
            {(navCategories).map(navCategory => NavElt(navCategory))}
        </ul>
    )
}

export default NavList