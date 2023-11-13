import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisations.json'
import { motion } from 'framer-motion'
import Realisation from '../Realisation';
import { render } from '@testing-library/react';

const Realisations = () => {

    function openModal(RealisationDatas) {
        render(<Realisation {...RealisationDatas}/>);
    }
    return (
        <section id='realisations'>
            <h2 className='section__title'>Réalisations</h2>
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName='my-masonry-grid__column'>
                {
                    ((RealisationsDatas).map((RealisationDatas, id) =>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="my-masonry-grid__div" key={id} onClick={() => openModal(RealisationDatas)}>
                            <img className='my-masonry-grid__img' src={process.env.PUBLIC_URL + RealisationDatas.img} alt={RealisationDatas.alt}/>
                            <p className='my-masonry-grid__p'>{RealisationDatas.title}</p>
                        </motion.div>
                    ))                
                }
            </Masonry>
        </section>
    )
}

export default Realisations