import { sampleProject } from "./sample";
interface ILanguage {
    es: string;
    en: string;
}
export interface IUnit {
    title: ILanguage;
    legend: ILanguage;
    property: ILanguage;
    paragraph: ILanguage[];
    url: string;
    videoUrl: string;
    embedUrl: string;
    imgH: number;
}
export interface IBlog {
    units:IUnit[];
}
export const sampleUnit:IUnit = {
    title: {es:"", en: ""},
    legend: {es:"", en: ""},
    property: {es:"", en: ""},
    paragraph: [],
    url: "",
    videoUrl: "",
    embedUrl: "",
    imgH: 0
}
export interface IWorkConfig {
    title:ILanguage;
    url:string;
    size: 'small' | 'tall' | 'wide' | 'large';
    id:string;
    category: ILanguage;
    blogs: IBlog[];
}
export const sampleWorkConfig: IWorkConfig = {
    title: { es: "", en: "" },
    url: '',
    size: 'small',
    id: '',
    category: { es: "", en: "" },
    blogs: []
}
export const workConfigs: IWorkConfig[] = [
    sampleProject
];