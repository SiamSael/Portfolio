import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisatioons.json'

const Realisations = () => {
    return (
        <section id='realisations'>
            <h2 className='section__title'>Réalisations</h2>
            <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName='my-masonry-grid_column'>
                {
                    ((RealisationsDatas).map((RealisationDatas, id) =>
                        <div className="my-masonry-grid_div" key={id}>
                            <img src={RealisationDatas.img} alt={RealisationDatas.title}/>
                            <p>{RealisationDatas.title}</p>
                        </div>
                    ))                
                }
            </Masonry>
        </section>

    )
}

export default Realisations