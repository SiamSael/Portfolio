import { motion } from 'framer-motion'

const Banner = (bannerDatas) => {
    return (
        <motion.section initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}className="banner" id="accueil">
            <img className="banner__img" src={ bannerDatas.img } alt="paysage"/>
            <h1 className="banner__title">{ bannerDatas.title }</h1>
        </motion.section>
    )
}

export default Banner