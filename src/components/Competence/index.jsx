import ProgressBar from "../ProgressBar";

const Competence = (competence, id) => {
    const value = competence.value

    return (
        <div className="activities__activity" key={id}>
            <img className="activities__activity--img" src={competence.img} alt={competence.alt}/>
            <ProgressBar value ={value}/>
        </div>
    )
}

export default Competence