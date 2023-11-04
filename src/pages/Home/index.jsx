import Banner from "../../components/Banner"
import BannerDatas from "../../utils/datas/banner.json"
import Presentation from "../../components/Presentation"
import PresentationDatas from "../../utils/datas/presentation.json"
import Realisations from "../../components/Realisations"
import Activities from "../../components/Activities"
import Contact from "../../components/Contact"
import Competences from "../../components/Competences"


const Home = () => {
    return (
        <main>
            <Banner {...BannerDatas} /> 
            <Presentation {...PresentationDatas} />
            <Realisations />
            <Activities />
            <Competences />
            <Contact />
        </main>
    )
}

export default Home