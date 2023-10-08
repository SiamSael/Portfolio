import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisatioons.json'

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
                        <div className="my-masonry-grid__div" key={id}>
                            <img className='my-masonry-grid__img' src={RealisationDatas.img} alt={RealisationDatas.alt}/>
                            <p className='my-masonry-grid__p'>{RealisationDatas.title}</p>
                        </div>
                    ))                
                }
            </Masonry>
        </section>

    )
}

export default Realisations