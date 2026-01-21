import { useTranslation } from 'react-i18next';
import { useCheckMobile } from '../../utils/useCheckMobile';
import { ExpertiseItem } from './expertiseItem';
import './expertise.css';
import { expertiseOptions, type IExpertiseOption } from './expertiseOptions';
import { useEffect, useRef, useState } from 'react';
import { LeftArrowIcon } from '../../icons/leftArrowIcon';

export const Expertise = () => {
    const [expertiseOption, setExpertiseOption] = useState<IExpertiseOption | null>(null);
    const { t, i18n } = useTranslation();
    const { isMobile } = useCheckMobile();
    const divRef = useRef(null);
    useEffect(()=>{
        if(divRef.current && expertiseOption) {
            const div:HTMLDivElement = divRef.current;
            div.style.setProperty('--expertise-selected-img', `url("${expertiseOption.Url}")`);
        }
    },[divRef, expertiseOption])
  return (
    <section className='expertise-container'>
        <h1>{t('my-expertise')}</h1>
        <div className='expertise-cont-body'>
            {(!isMobile && !expertiseOption) && <div className='expertise-body'>
                <div className='expertise-section-top'>
                    <ExpertiseItem option={expertiseOptions[0]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[1]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[2]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                </div>
                <div className='expertise-section-down'>
                    <ExpertiseItem option={expertiseOptions[3]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[4]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                </div>
            </div>}
            {(!isMobile && expertiseOption) && <div className='expertise-detail' ref={divRef}>
                <div className='expertise-go-back-container' onClick={()=>setExpertiseOption(null)}>
                    <div><LeftArrowIcon/></div>
                    <label>{t('back')}</label>
                </div>
                <div className='expertise-detail-container'>
                    <h2>{(i18n.language === 'es') ? expertiseOption.Title.es : expertiseOption.Title.en}</h2>
                    <p>{(i18n.language === 'es') ? expertiseOption.Description.es : expertiseOption.Description.en}</p>
                    <div>{expertiseOption.Tags.map((tag, index)=><span key={index}>{tag}</span>)}</div>
                </div>
            </div>}
            {(isMobile && !expertiseOption) && <div className='expertise-body-mobile'>
                <div className='expertise-section-top-mobile'>
                    <ExpertiseItem option={expertiseOptions[0]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[1]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[2]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                    <ExpertiseItem option={expertiseOptions[3]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                </div>
                <div className='expertise-section-down-mobile'>
                    <ExpertiseItem option={expertiseOptions[4]} onSelected={(_option)=>setExpertiseOption(_option)}/>
                </div>
            </div>}
            {(isMobile && expertiseOption) && <div className='expertise-detail-mobile' ref={divRef}>
                <div className='expertise-go-back-container' onClick={()=>setExpertiseOption(null)}>
                    <div><LeftArrowIcon/></div>
                    <label>{t('back')}</label>
                </div>
                <div className='expertise-detail-container-mobile'>
                    <h2>{(i18n.language === 'es') ? expertiseOption.Title.es : expertiseOption.Title.en}</h2>
                    <p>{(i18n.language === 'es') ? expertiseOption.Description.es : expertiseOption.Description.en}</p>
                    <div>{expertiseOption.Tags.map((tag, index)=><span key={index}>{tag}</span>)}</div>
                </div>
            </div>}
        </div>
    </section>
  )
}
