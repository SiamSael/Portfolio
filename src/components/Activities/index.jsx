import Activity from "../Activity"
import ActivitiesDatas from "../../utils/datas/activities.json"

const Activities = () => {
    return (
        <section id='activities'>
            <h2 className='section__title'>Activités</h2>
            <div className="activities">
                {(ActivitiesDatas).map((activity, id)=> Activity(activity, id))}
            </div>
        </section>
    )
}

export default Activities;