import { useEffect, useState } from 'react';
import { Menu } from '../menu/menu';
import { workConfigs, type IWorkConfig } from '../work/workConfig/workConfig';
import { ProjectUnit } from './projectUnit/projectUnit';
import { useTranslation } from 'react-i18next';
import { ImgPopUp } from '../imgPopUp/imgPopUp';
import './project.css';

export const Project = () => {
    const [config, setConfig] = useState<IWorkConfig | null>(null);
    const [img, setImg] = useState<string>("");
    const { t } = useTranslation();
    useEffect(()=>{
        const project_id:string = window.location.href.split('/').reverse()[0];
        if(project_id) {
            const workConfig:IWorkConfig = workConfigs.filter(conf=>conf.id === project_id)[0];
            if(workConfig) {
                setConfig(workConfig);
            }
        }
    },[]);
    const onRedirect = (link:string) => {
        window.location.href = link;
    }
  return (
    <>
        <Menu route='work' redirect={true}/>
        <div className='projects-body'>
            <div className='up-navi'>
                <button onClick={()=>onRedirect("/work")}>{t('work')}</button>
                <span>/</span>
                <button onClick={()=>onRedirect(`/work/${config?.id}`)}>{config?.id}</button>
            </div>
            {config?.blogs.map((blog, index)=><div key={index} className={`project-blog ${(blog.units.length === 1) ? "x1" : (blog.units.length === 2) ? "x2" : "x3"}`}>
                {(blog.units.length >= 1) && <ProjectUnit unit={blog.units[0]} onImgPress={(_img)=>setImg(_img)}/>}
                {(blog.units.length >= 2) && <ProjectUnit unit={blog.units[1]} onImgPress={(_img)=>setImg(_img)}/>}
                {(blog.units.length >= 3) && <ProjectUnit unit={blog.units[2]} onImgPress={(_img)=>setImg(_img)}/>}
            </div>)}
            <h3>{t('official-page')}</h3>
            <div>
                {config?.officialPages.map((page, index)=><div key={index} className='official-resource'>
                    <label>{`${page.pageName}:`}</label>
                    <a target='_blank' href={page.officialPage}>{page.officialPage}</a>
                </div>)}
            </div>
            <h3>{t('technologies')}</h3>
            <div className='projects-tags-container'>
                {config?.tags.map((tag, index)=><span key={index}>{tag}</span>)}
            </div>
        </div>
        {(img != "") && <ImgPopUp url={img} onClose={()=>setImg("")}/>}
    </>
  )
}
