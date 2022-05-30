import React, { useState } from 'react';
import ContactInfo from '../Components/contact/contactInfo';
import ContactProjet from '../Components/contact/contactProjet';
import github from '../Assets/images/dev_social_github'
import linkedin from '../Assets/images/dev_social_linkedin'
import instagram from '../Assets/images/dev_social_instagram'

const Contact = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(true)
    const [projetIsOpen, setProjetIsOpen] = useState(false)

    const openFastForm = () =>{
        setInfoIsOpen(true)
        setProjetIsOpen(false)
    }

    const openLongform = () => {
        setInfoIsOpen(false)
        setProjetIsOpen(true)
    }

//Créer un event onClick sur les titre h4 pour ouvrir la div destination et fermer la current div si ouverte

    return (
        <section className='contact'>
            <div className="contact__container">
                <div className='contact__container__header'>
                    <h3 className='contact__container__header__title' id="contact"><span>Prendre</span> contact avec moi</h3>

                    <div className='contact__container__header__social'>
                        
                        <img src={github} alt="découvrir mon github" width="25%" height="auto" className='social__image__hover'/>
                        <img src={linkedin} alt="découvrir mon github" width="25%" height="auto" className='social__image__hover'/>
                        <img src={instagram} alt="découvrir mon github" width="25%" height="auto" className='social__image__hover'/>
                    </div>
                </div>

                <div className='contact__container__body'>
                    <h4 className='contact__container__body__title' onClick={openFastForm}><span>Contact</span> rapide pour des informations</h4>
                    <ContactInfo isOpen={infoIsOpen} />

                    <h4 className='contact__container__body__title' onClick={openLongform}><span>Formulaire</span> de contact pour projet</h4>
                    <ContactProjet isOpen={projetIsOpen} />
                </div>
                
                <div className='contact__container__footer'>
                    {/*Faire une FaQ centrer en dessous des formulaires */}
                    Quel est mon tarifs pour des projets ? <br />
                    Je suis disponible pour un projet et mon tarif moyen journalier est de 400 chf / jours <br />
                        <br />
                    Est-ce que je peux m'occuper de créer un design ? <br />
                    Je propose ce service, mais ce sont mes partnaires qui s'en occupe <br />

                    Quel est mon tarifs pour des projets ? <br />
                    Je suis disponible pour un projet et mon tarif moyen journalier est de 400 chf / jours <br />
                        <br />
                    Est-ce que je peux m'occuper de créer un design ? <br />
                    Je propose ce service, mais ce sont mes partnaires qui s'en occupe <br />

                    Quel est mon tarifs pour des projets ? <br />
                    Je suis disponible pour un projet et mon tarif moyen journalier est de 400 chf / jours <br />
                        <br />
                    Est-ce que je peux m'occuper de créer un design ? <br />
                    Je propose ce service, mais ce sont mes partnaires qui s'en occupe <br />

                    Quel est mon tarifs pour des projets ? <br />
                    Je suis disponible pour un projet et mon tarif moyen journalier est de 400 chf / jours <br />
                        <br />
                    Est-ce que je peux m'occuper de créer un design ? <br />
                    Je propose ce service, mais ce sont mes partnaires qui s'en occupe <br />
                </div>
            </div>
            
        </section>
    );
};

export default Contact;

// Contact rapide via Email pour des informations

// Contact plus précis par mon gestionnaire de projets