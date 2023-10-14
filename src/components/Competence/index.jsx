const Competence = (competence, id) => {
    return (
        <div className="activities__activity" key={id}>
            <img className="activities__activity--img" src={competence.img} alt={competence.alt}/>
        </div>
    )
}

export default Competence