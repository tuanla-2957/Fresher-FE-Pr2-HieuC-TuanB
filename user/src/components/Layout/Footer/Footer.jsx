import React from 'react';
import './Footer.scss'
import { contacts, infos } from './data.js'
import ContactBlock from '../../UI/Contact-block/ContactBlock';
import InfoBlock from '../../UI/Info-block/InfoBlock'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='footer-top'>
                        <div className='footer__title'>
                            <span className='text__title text__title--bold me-2'>FOLLOW US</span>
                            <span className='text__title'>TO GET A DISCOUNT</span>
                        </div>
                        <div className='footer__contact'>
                            <ContactBlock contacts={contacts} />
                        </div>
                    </div>
                    <div className='footer-bot'>
                        <div className='footer__text'>
                            &copy; Copyrights CodexThemes
                        </div>
                        <div className='footer__Info'>
                            <InfoBlock  infos={infos}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
