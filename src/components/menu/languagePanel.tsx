import { useState } from 'react';
import './languagePanel.css';
import { useTranslation } from 'react-i18next';
export const LanguagePanel = ({onClose=()=>{}}) => {
    const {t, i18n } = useTranslation();
    const [ language ] = useState(i18n.language);
    const changeLanguage = (lang:string) => {
        window.localStorage.setItem('language', lang);
        i18n.changeLanguage(lang);
        onClose();
    }
  return (
    <div className="language-panel">
        <button onClick={()=>changeLanguage("en")} className={(language === "en") ? "language-panel-button-selected" : "language-panel-button-unselected"}>{t('english')}</button>
        <button onClick={()=>changeLanguage("es")} className={`${(language === "es") ? "language-panel-button-selected" : "language-panel-button-unselected"} menu-panel-rounded`}>{t('spanish')}</button>
    </div>
  )
}
