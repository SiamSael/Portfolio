import Banner from "../../components/Banner"
import BannerDatas from "../../utils/datas/banner.json"
import Presentation from "../../components/Presentation"
import PresentationDatas from "../../utils/datas/presentation.json"
import Realisations from "../../components/Realisation"


const Home = () => {
    return (
        <main>
            <Banner {...BannerDatas} /> 
            <Presentation {...PresentationDatas} />
            <Realisations />
        </main>
    )
}

export default Home