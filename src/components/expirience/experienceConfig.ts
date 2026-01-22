interface ILanguage {
  es: string;
  en: string;
}
export interface IExperience {
  role: ILanguage;
  company: ILanguage;
  date: ILanguage;
  location: ILanguage;
  site: string;
  description: ILanguage;
  logo: string;
  tags: string[];
}
export const sampleExperience: IExperience = {
  role: { es: "", en: "" },
  company: { es: "", en: "" },
  date: { es: "", en: "" },
  location: { es: "", en: "" },
  site: "",
  description: { es: "", en: "" },
  logo: "",
  tags: [],
};
export const expirienceConfig: IExperience[] = [
  {
    role: { es: "", en: "VideoGame Developer - Fullstack Web Developer" },
    company: { es: "", en: "Edutech of Central America" },
    date: { es: "", en: "2023 - Present" },
    location: { es: "Cartago, Costa Rica", en: "Cartago, Costa Rica" },
    site: "edutechca.com",
    description: { es: "", en: "Engineered a series of interactive projects from initial concept to full implementation using Unity3D, Phaser.js, and Three.js. Integrated projects into TrainMe LMS and TrainMe Games platform." },
    logo: "/test_img/tiky.png",
    tags: ["Javascript", "Typescript", "Unity3D", "Phaser.js", "Three.js", "Web Development", "VideoGames"],
  },
  {
    role: { es: "", en: "VideoGame Developer - Fullstack Web Developer" },
    company: { es: "", en: "Edutech of Central America" },
    date: { es: "", en: "2023 - Present" },
    location: { es: "Cartago, Costa Rica", en: "Cartago, Costa Rica" },
    site: "edutechca.com",
    description: { es: "", en: "Engineered a series of interactive projects from initial concept to full implementation using Unity3D, Phaser.js, and Three.js. Integrated projects into TrainMe LMS and TrainMe Games platform." },
    logo: "/test_img/tiky.png",
    tags: ["Javascript", "Typescript", "Unity3D", "Phaser.js", "Three.js", "Web Development", "VideoGames"],
  },
  {
    role: { es: "", en: "VideoGame Developer - Fullstack Web Developer" },
    company: { es: "", en: "Edutech of Central America" },
    date: { es: "", en: "2023 - Present" },
    location: { es: "Cartago, Costa Rica", en: "Cartago, Costa Rica" },
    site: "edutechca.com",
    description: { es: "", en: "Engineered a series of interactive projects from initial concept to full implementation using Unity3D, Phaser.js, and Three.js. Integrated projects into TrainMe LMS and TrainMe Games platform." },
    logo: "/test_img/tiky.png",
    tags: ["Javascript", "Typescript", "Unity3D", "Phaser.js", "Three.js", "Web Development", "VideoGames"],
  }
];
