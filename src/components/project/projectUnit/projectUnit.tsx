import { useTranslation } from "react-i18next";
import { sampleUnit, type IParagraph } from "../../work/workConfig/workConfig";
import './projectUnit.css';
import { useEffect, useRef, useState } from "react";

const emptyFunc = (data:any)=>{console.log(data)}
export const ProjectUnit = ({unit=sampleUnit, onImgPress=emptyFunc}) => {
    const [title, setTitle] = useState<string>("");
    const [property, setProperty] = useState<string>("");
    const [legend, setLegend] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [embed, setEmbed] = useState<string>("");
    const { i18n } = useTranslation();
    const divRef = useRef(null);
    const vidRef = useRef(null);
    const embRef = useRef(null);
    useEffect(()=>{
        if(divRef.current) {
            const div:HTMLDivElement = divRef.current;
            div.style.setProperty("--unit-img", `url("${url}")`);
            div.style.setProperty("--unit-img-height", `${unit.imgH}px`);
        }
    },[divRef, url]);
    useEffect(()=>{
        if(vidRef.current) {
            const vid:HTMLVideoElement = vidRef.current;
            vid.style.setProperty("--unit-video-height", `${unit.imgH}px`);
        }
    },[video, vidRef]);
    useEffect(()=>{
        if(embRef.current) {
            const vid:HTMLVideoElement = embRef.current;
            vid.style.setProperty("--unit-embed-height", `${unit.imgH}px`);
        }
    },[embed, embRef]);
    useEffect(()=>{
        if(i18n.language) {
            setUrl(unit.url);
            setVideo(unit.videoUrl);
            setEmbed(unit.embedUrl);
            switch(i18n.language) {
                case "es":
                    setTitle(unit.title.es);
                    setProperty(unit.property.es);
                    setLegend(unit.legend.es);
                    break;
                case "en":
                    setTitle(unit.title.en);
                    setProperty(unit.property.en);
                    setLegend(unit.legend.en);
                    break;
            }
        }
    },[i18n.language]);
  return (
    <div className="unit">
        {<div className="unit-title"><h3>{title}</h3><label>{property}</label></div>}
        {(legend != "") && <b>{legend}</b>}
        {(url != "") && <div className="unit-img" ref={divRef} onClick={()=>onImgPress(url)}></div>}
        {(video != "") && <video src={video} controls ref={vidRef}/>}
        {(embed != "") && <iframe src={embed} allowFullScreen ref={embRef}/>}
        {(unit.paragraph.length > 0) && unit.paragraph.map((paragraph, index)=><div className="p" key={index}>{(i18n.language === "es") ? paragraph.text.es : paragraph.text.en}
            {(paragraph.list.length > 0) && <ul>
            {paragraph.list.map((item, index)=><li key={index}>
                <div className="list-p p">
                  <span style={{ fontWeight: 'bold' }}>{(i18n.language === "es") ? item.title.es : item.title.en}</span> 
                  {' '} 
                  <span>{(i18n.language === "es") ? item.paragraph.es : item.paragraph.en}</span>
                </div>
            </li>)}    
        </ul>}
        </div>)}
    </div>
  )
}
