import { TrainAdventure } from "./trainAdventure";
interface ILanguage {
    es: string;
    en: string;
}
export interface IParagraph {
    text: ILanguage;
    list: IList[]
}
export interface IUnit {
    title: ILanguage;
    legend: ILanguage;
    property: ILanguage;
    paragraph: IParagraph[];
    url: string;
    videoUrl: string;
    embedUrl: string;
    imgH: number;
}
export interface IBlog {
    units:IUnit[];
}
export interface IList {
    title: ILanguage;
    paragraph: ILanguage;
}
export const sampleUnit:IUnit = {
    title: {es:"", en: ""},
    legend: {es:"", en: ""},
    property: {es:"", en: ""},
    paragraph: [],
    url: "",
    videoUrl: "",
    embedUrl: "",
    imgH: 0,
}
interface IOfficialPage {
    pageName: string;
    officialPage: string;
}
export interface IWorkConfig {
    title:ILanguage;
    url:string;
    size: 'small' | 'tall' | 'wide' | 'large';
    id:string;
    category: ILanguage;
    blogs: IBlog[];
    tags: string[];
    officialPages: IOfficialPage[];
}
export const sampleWorkConfig: IWorkConfig = {
    title: { es: "", en: "" },
    url: '',
    size: 'small',
    id: '',
    category: { es: "", en: "" },
    blogs: [],
    tags:[],
    officialPages: []
}
export const workConfigs: IWorkConfig[] = [
    TrainAdventure
];