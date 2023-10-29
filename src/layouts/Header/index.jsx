import memin from '../../images/memin.jpg'
import Nav from '../../components/Nav'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="header" id="accueil">
            <motion.img className="header__logo" src={ memin } alt="Ambre Bidault" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}}/>
            <Nav />
            <motion.a whileHover={{ scale: 1.5 }}href="#accueil" className="header__ref"><i className="fa-solid fa-arrow-up"></i></motion.a>
        </header>
    )
}

export default Header