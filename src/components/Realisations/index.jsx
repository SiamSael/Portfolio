import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisations.json'
import Realisation from '../Realisation';

const Realisations = () => {
    return (
        <section id='realisations'>
            <h2 className='section__title'>Réalisations</h2>
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName='my-masonry-grid__column'>
                {
                    ((RealisationsDatas).map((RealisationDatas, id) =>
                        <Realisation key={id} {...RealisationDatas} />
                    ))                
                }
            </Masonry>
        </section>
    )
}

export default Realisations