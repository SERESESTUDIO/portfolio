import { useTranslation } from 'react-i18next';
import { DevicesIcon } from '../../icons/devicesIcon';
import { useEffect, useState } from 'react';
import './work.css';
import { workConfigs, type IWorkConfig } from './workConfig/workConfig';
import { WorkItem } from './workItem';

export const Work = () => {
    const [filter, setFilter] = useState('all');
    const [items, setItems] = useState<IWorkConfig[]>([]);
    const { t } = useTranslation();
    useEffect(()=>{
      let findingWorks:IWorkConfig[] = [];
      switch(filter) {
        case "all":
          findingWorks = workConfigs;
          break;
        case "Web-Development":
          workConfigs.map((work:IWorkConfig)=>{
            if(work.category.en === "Web-Development") findingWorks.push(work);
          })
          break;
        case "Video-Games":
          workConfigs.map((work:IWorkConfig)=>{
            if(work.category.en === "Video-Games") findingWorks.push(work);
          })
          break;
        case "Expiriences":
          workConfigs.map((work:IWorkConfig)=>{
            if(work.category.en === "Expiriences") findingWorks.push(work);
          })
          break;
      }
      setItems(findingWorks); 
    },[filter]);
  return (
    <section className='work-container' id='work'>
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
            <button onClick={()=>setFilter("Web-Development")} className={(filter === 'Web-Development') ? "work-filter-selected" : "work-filter-unselected"}>{t('web-development')}</button>
            <label>{"/"}</label>
            <button onClick={()=>setFilter("Video-Games")} className={(filter === 'Video-Games') ? "work-filter-selected" : "work-filter-unselected"}>{t('video-games')}</button>
            <label>{"/"}</label>
            <button onClick={()=>setFilter("Expiriences")} className={(filter === 'Expiriences') ? "work-filter-selected" : "work-filter-unselected"}>{t('expiriences')}</button>
        </div>
        <section className="gallery-container">
          {items.map((config, index) => (
            <WorkItem key={index} configuration={config} />
          ))}
        </section>
    </section>
  )
}
