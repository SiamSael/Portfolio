
const Presentation = (PresentationDatas) => {
    return (
        <section className="section" id="presentation">
            <h2 className="section__title">{ PresentationDatas.title }</h2>
            <p className="description__presentation">{ PresentationDatas.description }</p>
        </section>
    )
}

export default Presentation