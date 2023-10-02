const Banner = (bannerDatas) => {
    return (
        <section className="banner" id="accueil">
            <img className="banner__img" src={ bannerDatas.img } alt="paysage"/>
            <h1 className="banner__title">{ bannerDatas.title }</h1>
        </section>
    )
}

export default Banner