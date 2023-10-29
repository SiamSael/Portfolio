import NavList from "../NavList"
import { motion } from 'framer-motion'

const Nav = () => {
    return (
        <motion.nav initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="header__nav"> 
            <NavList/>
        </motion.nav>
    )
}

export default Nav