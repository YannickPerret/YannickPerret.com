import React, { useState } from 'react';
import ContactInfo from '../Components/contact/contactInfo';
import ContactProjet from '../Components/contact/contactProjet';

const Contact = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(true)
    const [projetIsOpen, setProjetIsOpen] = useState(false)

//Créer un event onClick sur les titre h4 pour ouvrir la div destination et fermer la current div si ouverte

    return (
        <div className='contact'>
            <div className="contact__container">
                <div className='contact__container__header'>
                    <h3 className='contact__container__header__title' id="contact"><span>Prendre</span> contact avec moi</h3>

                    <div className='contact__container__header__social'>
                        <p>Github</p>
                        <p>Linkedin</p>
                        <p>Instagram</p>
                    </div>
                </div>

                <div className='contact__container__body'>
                    <h4 className='contact__container__body__title'><span>Contact</span> rapide pour des informations</h4>
                    <ContactInfo isOpen={infoIsOpen} />

                    <h4 className='contact__container__body__title'><span>Formulaire</span> de contact pour projet</h4>
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
            
        </div>
    );
};

export default Contact;

// Contact rapide via Email pour des informations

// Contact plus précis par mon gestionnaire de projets