import { motion } from 'framer-motion'
import ModalRealisation from '../ModalRealisation'
import { createPortal } from 'react-dom';
import { useState, useEffect }  from 'react'

const Realisation = (RealisationDatas) => {

    const [showModal, setShowModal] = useState(false);
    const background = document.getElementById('root'); 
    
    if (showModal) {
        background.className='background';
    } else {
        background.className='';
    }

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
          html.style.overflow = showModal ? "hidden" : "auto";
        }
    }, [showModal]);
    
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="my-masonry-grid__div" onClick={() => !showModal && setShowModal(true)}>
            <img className='my-masonry-grid__img' src={process.env.PUBLIC_URL + RealisationDatas.img} alt={RealisationDatas.alt}/>
            <p className='my-masonry-grid__p'>{RealisationDatas.title}</p>
            {showModal && createPortal(
                <ModalRealisation RealisationDatas={RealisationDatas} onClose={() => {setShowModal(false)}} />,
                document.body
            )}
        </motion.div>
    )
}


export default Realisation