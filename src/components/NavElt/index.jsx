const NavElt = (navCategory) => {
    return (
        <li className="header__nav--li">
            <a href={navCategory.id}>{navCategory.title}</a>
        </li>
    )
} 

export default NavElt