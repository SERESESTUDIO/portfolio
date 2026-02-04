import { useTranslation } from 'react-i18next';
import './footer.css';
import { LinkedingIcon } from '../../icons/linkedingIcon';
import { EmailIcon } from '../../icons/emailIcon';
import { PhoneIcon } from '../../icons/phoneIcon';
import { MapIcon } from '../../icons/mapIcon';

export const Footer = () => {
    const { t } = useTranslation();
  return (
    <section className='footer-container' id='contact'>
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
                    <span>.Net-core</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>GDScript</span>
                    <span>PHP</span>
                    <span>Node-js</span>
                    <span>Express-js</span>
                    <span>React-js</span>
                    <span>Sequelize</span>
                    <span>Three-js</span>
                    <span>Phaser-js</span>
                    <span>PostgresQL</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                </div>
                <div>
                    <span>Tailwind</span>
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>After-effetcs</span>
                    <span>Premiere-pro</span>
                    <span>Maya3D</span>
                    <span>Blender</span>
                    <span>Moho</span>
                    <span>Krita</span>
                    <span>Unity</span>
                    <span>Rogue-engine</span>
                    <span>Godot</span>
                    <span>Reazon</span>
                    <span>Cubase</span>
                    <span>FMOD</span>
                    <span>Docs</span>
                    <span>Excel</span>
                </div>
                <div>
                    <span>Sketchup</span>
                    <span>Jira</span>
                    <span>Trello</span>
                    <span>Git</span>
                    <span>Github</span>
                    <span>AWS</span>
                    <span>Digital-Ocean</span>
                    <span>Jenkins</span>
                    <span>IA-Studio</span>
                    <span>Copilot</span>
                    <span>Eleven-labs</span>
                    <span>Windows</span>
                    <span>Linux</span>
                    <span>Mac-Ios</span>
                    <span>Android</span>
                    <span>Figma</span>
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
