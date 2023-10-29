import { motion } from 'framer-motion'

const Presentation = (PresentationDatas) => {
    return (
        <section className="section" id="presentation">
            <h2 className="section__title">{ PresentationDatas.title }</h2>
            <motion.div 
                initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8}} className="description__presentation"
                itemScope itemType="http://schema.org/LocalBusiness">
                <div className="description__reflocal" itemProp = "address" itemType = "https://schema.org/PostalAddress" >   
                    <p>{ PresentationDatas.description }</p><br></br>
                    <span itemProp = "streetAddress"> Adresse : {PresentationDatas.address}, </span>
                    <span itemProp = "postalCode" > {PresentationDatas.postalCode} </span> 
                    <span itemProp = "addressLocality" > {PresentationDatas.addressLocality} </span><br></br>
                    <span itemProp = "telephone"> Téléphone : {PresentationDatas.telephone}</span><br></br>
                    <span itemProp="openingHours" content={PresentationDatas.openingHours}> Horaires : {PresentationDatas.openingHoursDesciption}</span>
                </div>
            </motion.div> 
        </section>
    )
}

export default Presentation