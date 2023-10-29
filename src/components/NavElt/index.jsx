import { motion } from 'framer-motion'

const NavElt = (navCategory, id) => {
    return (
        <motion.li whileHover={{ scale: 1.2 }} key={id} className="header__nav--li">
            <a href={navCategory.id}>{navCategory.title}</a>
        </motion.li>
    )
} 

export default NavElt