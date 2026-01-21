import { useTranslation } from 'react-i18next';
import { DevicesIcon } from '../../icons/devicesIcon';
import { useState } from 'react';
import './work.css';
import { workConfigs } from './workConfig/workConfig';
import { WorkItem } from './workItem';

export const Work = () => {
    const [filter, setFilter] = useState('all');
    const { t } = useTranslation();
  return (
    <section className='work-container'>
        <div className='work-intro-container'>
            <div className='work-intro-left'>
                <h1>{t('my-work')}</h1>
                <p>{t('my-work-description')}</p>
            </div>
            <div className='work-intro-right'>
                <DevicesIcon/>
            </div>
        </div>
        <div className='work-filter'>
            <label>{t('filter-by')+":"}</label>
            <button onClick={()=>setFilter("all")} className={(filter === 'all') ? "work-filter-selected" : "work-filter-unselected"}>{t('all')}</button>
            <label>{"/"}</label>
            <button onClick={()=>setFilter("web-development")} className={(filter === 'web-development') ? "work-filter-selected" : "work-filter-unselected"}>{t('web-development')}</button>
            <label>{"/"}</label>
            <button onClick={()=>setFilter("video-games")} className={(filter === 'video-games') ? "work-filter-selected" : "work-filter-unselected"}>{t('video-games')}</button>
            <label>{"/"}</label>
            <button onClick={()=>setFilter("expiriences")} className={(filter === 'expiriences') ? "work-filter-selected" : "work-filter-unselected"}>{t('expiriences')}</button>
        </div>
        <section className="gallery-container">
          {workConfigs.map((config, index) => (
            <WorkItem key={index} configuration={config} />
          ))}
        </section>
    </section>
  )
}
