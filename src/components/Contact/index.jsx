const Contact = () => {
    return (
        <section id="contact">
            <h2 className='section__title'>Contact</h2>
            <form className="contact" action="mailto:ambrebidault@orange.fr" method="post">
                <label className="contact__label" htmlFor="nom">Nom</label>
                <input className="contact__input"type="text" name="nom" id="nom"/>
                <label className="contact__label" htmlFor="email">Email</label>
                <input className="contact__input" type="email" name="email" id="email"/>
                <label className="contact__label" htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
        </section>
    )
}

export default Contact