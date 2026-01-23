import { useTranslation } from 'react-i18next';
import './expirience.css';
import { expirienceConfig } from './experienceConfig';
import { ExpirienceItem } from './expirienceItem';
import { useState } from 'react';

export const Expirience = () => {
    const [itemSelected, setItemSelected] = useState<number>(1);
    const { t } = useTranslation();
  return (
    <section className='expirience-container' id='experience'>
        <h1>{t("proffesional-expirience")}</h1>
        <div className='space'></div>
        {expirienceConfig.map((expirience, index) => <ExpirienceItem key={index} configuration={expirience} actualIndex={itemSelected} myIndex={index + 1} onReturn={(value)=>setItemSelected(value)}/>)}
    </section>
  )
}
