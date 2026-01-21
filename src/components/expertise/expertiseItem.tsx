import { useEffect, useRef } from 'react';
import { sampleExpertiseOption, type IExpertiseOption } from './expertiseOptions';
import './expertiseItem.css';
import { useTranslation } from 'react-i18next';
const sampleFunc = (option:IExpertiseOption) =>{console.log(option)};
export const ExpertiseItem = ({option=sampleExpertiseOption, onSelected=sampleFunc}) => {
    const { i18n } = useTranslation();
    const divRef = useRef(null);
    useEffect(()=>{
        if (divRef.current) {
            const div:HTMLDivElement = divRef.current;
            div.style.setProperty('--expertise-item-img', `url("${option.Url}")`);
        }
    },[divRef]);
  return (
    <div className='expertise-item' ref={divRef} onClick={()=>onSelected(option)}>
        <h3>{i18n.language === 'es' ? option.Title.es : option.Title.en}</h3>
        <div></div>
        <div className='expertise-item-tags-container'>
            <div className='expertise-item-tags'>{option.Tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
        </div>
    </div>
  )
}
