import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisatioons.json'
import { motion } from 'framer-motion'

const Realisations = () => {
    return (
        <section id='realisations'>
            <h2 className='section__title'>Réalisations</h2>
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName='my-masonry-grid__column'>
                {
                    ((RealisationsDatas).map((RealisationDatas, id) =>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="my-masonry-grid__div" key={id}>
                            <img className='my-masonry-grid__img' src={RealisationDatas.img} alt={RealisationDatas.alt}/>
                            <p className='my-masonry-grid__p'>{RealisationDatas.title}</p>
                        </motion.div>
                    ))                
                }
            </Masonry>
        </section>

    )
}

export default Realisations