import Activity from "../Activity"
import ActivitiesDatas from "../../utils/datas/activities.json"
import { motion } from 'framer-motion'

const Activities = () => {
    return (
        <section id='activities'>
            <h2 className='section__title'>Activités</h2>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="activities">
                {(ActivitiesDatas).map((activity, id)=> Activity(activity, id))}
            </motion.div>
        </section>
    )
}

export default Activities;