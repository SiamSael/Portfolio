
import {useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const Realisation = (RealisationDatas) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    const background = document.getElementById('root');

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
          html.style.overflow = isOpen ? "hidden" : "auto";
        }
      }, [isOpen]);
  
    if (isOpen) {
        background.className='background';
    } else {
        background.className='';
    }

    function closeModal() {
        toggleOverlay();
        const modal = document.querySelector('.modal');
        modal.remove();
    }

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity:1}} transition={{duration : 1}} className="modal">
            <span className='modal__close'><i className="fa-solid fa-xmark" onClick={() => closeModal()}></i></span>
            <h2 className="section__title">{RealisationDatas.title}</h2>
            <img className="modal__img" src={process.env.PUBLIC_URL + RealisationDatas.img} alt={RealisationDatas.alt}/>
            <div>
                <h3 className="modal__subtitle">{RealisationDatas.description}</h3>
                <ul>
                    {
                        ((RealisationDatas.missions).map((mission, id) =>
                            <li key={id}>
                                {mission.description}
                            </li>
                        ))                
                    }
                </ul>
                <p className="modal__p"><a href={RealisationDatas.lienCode} target="_blank" rel="noopener noreferrer"> {RealisationDatas.isCodeAccess ? "retrouver le code source de ce projet ici !" : "Lien vers le site"}</a></p>
            </div>
        </motion.section>
    )
}

export default Realisation