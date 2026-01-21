import { useEffect, useRef, useState } from 'react';
import { sampleWorkConfig } from './workConfig/workConfig';
import './workItem.css';
import { t } from 'i18next';

export const WorkItem = ({configuration=sampleWorkConfig}) => {
    const [isOver, setIsOver] = useState(false);
    const divRef = useRef(null);
    useEffect(()=>{
        if(divRef.current) {
            const div:HTMLDivElement = divRef.current;
            div.style.setProperty("--work-item-img", `url("${configuration.url}")`);
        }
    },[divRef])
  return (
    <a href={`/projects/${configuration.id}`} target='_blank' key={configuration.title} className={`grid-item ${configuration.size}`} onPointerEnter={()=>setIsOver(true)} onPointerLeave={()=>setIsOver(false)}>
      <div className='work-item-img' ref={divRef}></div>
      <div className='work-item-legend'>
        {(!isOver) && <h3>{configuration.title}</h3>}
        {(!isOver) && <label>{configuration.category}</label>}
        {(isOver) && <b>{t("view-project") + "..."}</b>}
      </div>
    </a>
  )
}
