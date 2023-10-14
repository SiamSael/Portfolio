
import CompetencesDatas from "../../utils/datas/competences.json"
import Competence from "../Competence";

const Competences = () => {
    return (
        <section id='skills'>
            <h2 className='section__title'>Compétences</h2>
            <div className="activities">
                {(CompetencesDatas).map((competence, id)=> Competence(competence, id))}
            </div>
        </section>
    )
}

export default Competences;