
import CompetencesDatas from "../../utils/datas/competences.json"
import Competence from "../Competence";
import { motion } from 'framer-motion'

const Competences = () => {
    return (
        <section id='skills'>
            <h2 className='section__title'>Compétences</h2>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="activities">
                {(CompetencesDatas).map((competence, id)=> Competence(competence, id))}
            </motion.div>
        </section>
    )
}

export default Competences;