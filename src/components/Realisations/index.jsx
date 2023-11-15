import Masonry from 'react-masonry-css'
import RealisationsDatas from '../../utils/datas/realisations.json'
import Realisation from '../Realisation';

const Realisations = () => {
/*
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button onClick={() => setShowModal(true)}>
          Show modal using a portal
        </button>
        {showModal && createPortal(
          <Realisation onClose={() => setShowModal(false)} />,
          document.body
        )}
      </>
    );

/* 
    //if (showModal) {
        const modalNodeParent = document.getElementById('root')
        createPortal(
            <Realisation onClose={() => setShowModal(false)} {...RealisationsDatas}/>,
            modalNodeParent
        )
    //}
*/
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