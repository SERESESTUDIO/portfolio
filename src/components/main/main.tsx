import { useTranslation } from 'react-i18next';
import { FrontPageIcon } from '../../icons/frontPageIcon';
import './main.css';
import { DownArrowIcon } from '../../icons/downArrowIcon';
const cv = {
    en: 'https://drive.google.com/file/d/1d4p3mMMZTMv98IbuBqZRLu9AAX3ATq50/view?usp=sharing',
    es: 'https://drive.google.com/file/d/1DlFE9F3ghoZYqGUifqzpngWZKp_z5Bma/view?usp=sharing'
}
export const Main = () => {
    const { i18n } = useTranslation();
  return (
    <section className='main-container'>
        <div className='main-front-page'><FrontPageIcon/></div>
        <h1>Alexander Gómez Ávila</h1>
        <h6>Fullstack, web, Apps, video games</h6>
        <a href={(i18n.language === 'es') ? cv.es : cv.en} target="_blank">{`< Curricul Vitae >`}</a>
        <div className='down-mark'>
            <div><DownArrowIcon/></div>
        </div>
    </section>
  )
}
