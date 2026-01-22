interface ILanguage {
  es: string;
  en: string;
}
interface IMilestone {
  title: ILanguage;
  description: ILanguage;
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
  milestones: IMilestone[];
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
  milestones: []
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
    milestones: [
      {
        title: { es: "", en: "Interactive Web Projects" },
        description: { es: "", en: "Developed multiple interactive web projects using Phaser.js and Three.js, enhancing user engagement and learning experiences." }
      },
      {
        title: { es: "", en: "Unity3D Game Development" },
        description: { es: "", en: "Created educational games in Unity3D, focusing on both gameplay mechanics and educational content delivery."}
      }
    ]
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
    milestones: [
      {
        title: { es: "", en: "Interactive Web Projects" },
        description: { es: "", en: "Developed multiple interactive web projects using Phaser.js and Three.js, enhancing user engagement and learning experiences." }
      },
      {
        title: { es: "", en: "Unity3D Game Development" },
        description: { es: "", en: "Created educational games in Unity3D, focusing on both gameplay mechanics and educational content delivery."}
      }
    ]
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
    milestones: [
      {
        title: { es: "", en: "Interactive Web Projects" },
        description: { es: "", en: "Developed multiple interactive web projects using Phaser.js and Three.js, enhancing user engagement and learning experiences." }
      },
      {
        title: { es: "", en: "Unity3D Game Development" },
        description: { es: "", en: "Created educational games in Unity3D, focusing on both gameplay mechanics and educational content delivery."}
      }
    ]
  }
];
