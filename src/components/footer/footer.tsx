import { useTranslation } from 'react-i18next';
import './footer.css';
import { LinkedingIcon } from '../../icons/linkedingIcon';
import { EmailIcon } from '../../icons/emailIcon';
import { PhoneIcon } from '../../icons/phoneIcon';
import { MapIcon } from '../../icons/mapIcon';

export const Footer = () => {
    const { t } = useTranslation();
  return (
    <section className='footer-container'>
        <div className='footer-summary'>
            <h3>{t('proffesional-summary')}</h3>
            <label>{t('footer-tags')}</label>
            <p>{t('proffesional-description')}</p>
            <div className='footer-summary-link-container'>
                <div className='footer-summary-link'><LinkedingIcon/><a target='_blank' href="https://linkedin.com/in/alexander-g%C3%B3mez-avila-74147b224">Linkeding</a></div>
                <div className='footer-summary-link'><EmailIcon/><a>{`${t('email')}: alex.250893@hotmail.com`}</a></div>
            </div>
        </div>
        <div className='footer-list'>
            <h3>{t('footer-list-title')}</h3>
            <div className='footer-list-body'>
                <div>
                    <span>C#</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                </div>
                <div>
                    <span>C#</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                </div>
                <div>
                    <span>C#</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                    <span>Javascript</span>
                </div>
            </div>
        </div>
        <div className='footer-contact'>
            <div className='footer-phone footer-item-container'>
                <h3>{t('phone-number')}</h3>
                <PhoneIcon/>
                <label>+506 84733808</label>
            </div>
            <div className='footer-location footer-item-container'>
                <h3>{t('location')}</h3>
                <MapIcon/>
                <label>San Jose, Costa Rica</label>
            </div>
        </div>
    </section>
  )
}
