import { useEffect, useState } from 'react';
import { Menu } from '../menu/menu';
import { workConfigs, type IWorkConfig } from '../work/workConfig/workConfig';
import { ProjectUnit } from './projectUnit/projectUnit';
import './project.css';

export const Project = () => {
    const [config, setConfig] = useState<IWorkConfig | null>(null);
    useEffect(()=>{
        const project_id:string = window.location.href.split('/').reverse()[0];
        if(project_id) {
            const workConfig:IWorkConfig = workConfigs.filter(conf=>conf.id === project_id)[0];
            if(workConfig) {
                setConfig(workConfig);
            }
        }
    },[]);
  return (
    <>
        <Menu route='work'/>
        <div className='projects-body'>
            {config?.blogs.map((blog, index)=><div key={index} className={`project-blog ${(blog.units.length === 1) ? "x1" : (blog.units.length === 2) ? "x2" : "x3"}`}>
                {(blog.units.length >= 1) && <ProjectUnit unit={blog.units[0]}/>}
                {(blog.units.length >= 2) && <ProjectUnit unit={blog.units[1]}/>}
                {(blog.units.length >= 3) && <ProjectUnit unit={blog.units[2]}/>}
            </div>)}
        </div>
    </>
  )
}
