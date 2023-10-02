import navCategories from '../../utils/datas/navCategories.json'
import NavElt from '../NavElt'

const NavList = () => {
    return (
        <ul className="header__nav--ul">
            {(navCategories).map((navCategory, id)=> NavElt(navCategory, id))}
        </ul>
    )
}

export default NavList