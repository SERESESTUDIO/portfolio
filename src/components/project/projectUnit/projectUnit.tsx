import { useTranslation } from "react-i18next";
import { sampleUnit } from "../../work/workConfig/workConfig";
import './projectUnit.css';
import { useEffect, useRef, useState } from "react";

export const ProjectUnit = ({unit=sampleUnit}) => {
    const [title, setTitle] = useState<string>("");
    const [property, setProperty] = useState<string>("");
    const [legend, setLegend] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [embed, setEmbed] = useState<string>("");
    const [paragraphs, setParagraphs] = useState<string[]>([]);
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
                    const txtArr:string[] = [];
                    unit.paragraph.map(txt=>{
                        txtArr.push(txt.es);    
                    });
                    setParagraphs(txtArr);
                    break;
                case "en":
                    setTitle(unit.title.en);
                    setProperty(unit.property.en);
                    setLegend(unit.legend.en);
                    const txtArrEn:string[] = [];
                    unit.paragraph.map(txt=>{
                        txtArrEn.push(txt.en);    
                    });
                    setParagraphs(txtArrEn);
                    break;
            }
        }
    },[i18n.language]);
  return (
    <div className="unit">
        {(title != "") && <div className="unit-title"><h3>{title}</h3><label>{property}</label></div>}
        {(legend != "") && <span>{legend}</span>}
        {(url != "") && <div className="unit-img" ref={divRef}></div>}
        {(video != "") && <video src={video} controls ref={vidRef}/>}
        {(embed != "") && <iframe src={embed} allowFullScreen ref={embRef}/>}
        {(paragraphs.length > 0) && paragraphs.map((paragraph, index)=><p key={index}>{paragraph}</p>)}
    </div>
  )
}
