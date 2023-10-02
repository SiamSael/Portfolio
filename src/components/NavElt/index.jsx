const NavElt = (navCategory, id) => {
    return (
        <li key={id} className="header__nav--li">
            <a href={navCategory.id}>{navCategory.title}</a>
        </li>
    )
} 

export default NavElt