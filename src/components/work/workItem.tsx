import { useEffect, useRef, useState } from 'react';
import { sampleWorkConfig } from './workConfig/workConfig';
import './workItem.css';
import { useTranslation } from 'react-i18next';

export const WorkItem = ({configuration=sampleWorkConfig}) => {
    const [isOver, setIsOver] = useState(false);
    const divRef = useRef(null);
    const { t, i18n } = useTranslation();
    useEffect(()=>{
        if(divRef.current) {
            const div:HTMLDivElement = divRef.current;
            div.style.setProperty("--work-item-img", `url("${configuration.url}")`);
        }
    },[divRef])
  return (
    <a href={`/work/${configuration.id}`} className={`grid-item ${configuration.size}`} onPointerEnter={()=>setIsOver(true)} onPointerLeave={()=>setIsOver(false)}>
      <div className='work-item-img' ref={divRef}></div>
      <div className='work-item-legend'>
        {(!isOver) && <h3>{(i18n.language === "es") ? configuration.title.es : configuration.title.en}</h3>}
        {(!isOver) && <label>{(i18n.language === "es") ? configuration.category.es : configuration.category.en}</label>}
        {(isOver) && <b>{t("view-project") + "..."}</b>}
      </div>
    </a>
  )
}
