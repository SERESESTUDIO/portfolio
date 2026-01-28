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
  milestones: [],
};
export const expirienceConfig: IExperience[] = [
  {
    role: {
      es: "Desarrollador Full Stack y Desarrollador de Videojuegos",
      en: "Full Stack Developer & Game Developer",
    },
    company: { es: "Edutech Centroamérica", en: "Edutech of Central America" },
    date: { es: "2023 - Presente", en: "2023 - Present" },
    location: { es: "Cartago, Costa Rica", en: "Cartago, Costa Rica" },
    site: "edutechca.com",
    description: {
      es: "Responsable del diseño y ejecución técnica de más de 24 proyectos interactivos y videojuegos integrados en las plataformas TrainMe LMS y TrainMe Games. Durante 4 años, lideré el ciclo de vida completo de desarrollo utilizando Unity3D, Phaser.js y Three.js, destacando la creación de una plataforma multijugador con editor de niveles personalizado. En el ámbito de infraestructura, desarrollé una arquitectura SaaS en Node.js que soporta a más de 5,000 usuarios, gestionando la migración crítica de AWS a Digital Ocean y automatizando la entrega continua (CI/CD) de los servicios y APIs.",
      en: "Responsible for the technical design and execution of 24+ interactive projects and video games integrated into the TrainMe LMS and TrainMe Games platforms. Over 4 years, I led the full development lifecycle using Unity3D, Phaser.js, and Three.js, notably creating a multiplayer platform with a custom level editor. Regarding infrastructure, I developed a Node.js SaaS architecture supporting over 5,000 users, managing a critical migration from AWS to Digital Ocean and automating CI/CD pipelines for all services and APIs.",
    },
    logo: "/test_img/tiky.png",
    tags: [
      "Javascript",
      "Typescript",
      "C#",
      "HTML",
      "CSS",
      "node-js",
      "Express-js",
      "sequelize",
      "Mongo-db",
      "PostgresQL",
      "React",
      "Unity",
      "Phaser-js",
      "Three-js",
      "Rogue-Engine",
      "Github",
      "AWS",
      "Digital-Ocean",
      "Jenkins",
      "Jira",
      "Photoshop",
      "Illustrator",
      "Premiere-Pro",
      "Krita",
      "Maya3D",
      "Blender",
      "Moho",
    ],
    milestones: [
      {
        title: {
          es: "Desarrollo de Proyectos Interactivos y Videojuegos:",
          en: "Interactive Project & Video Game Development:",
        },
        description: {
          es: "Diseñé e implementé una serie de proyectos interactivos desde el concepto inicial hasta la ejecución completa utilizando Unity3D, Phaser.js y Three.js. Integré estos proyectos en TrainMe LMS y la plataforma TrainMe Games.",
          en: "Engineered a series of interactive projects from initial concept to full implementation using Unity3D, Phaser.js, and Three.js. Integrated projects into TrainMe LMS and TrainMe Games platform.",
        },
      },
      {
        title: { es: "Desarrollo Web:", en: "Web Development:" },
        description: {
          es: "Desarrollé una aplicación web fullstack con CI/CD utilizando Node.js. Estructure una aplicación puente SaaS para gestionar contenido interactivo, manejando aproximadamente 5.000 usuarios hasta la fecha.",
          en: "Developed a full-stack web application with CI/CD using Node.js. Architected a SaaS bridge application to manage interactive content, handling approximately 5,000 users.",
        },
      },
      {
        title: {
          es: "Nube, Infraestructura y Arquitectura:",
          en: "Cloud, Infrastructure & Architecture:",
        },
        description: {
          es: "Gestioné cuentas de Amazon Web Services (AWS) y ejecuté con éxito la migración a Digital Ocean. Establecí integración continua para todos los servicios, APIs y bases de datos.",
          en: "Managed AWS accounts and executed migration to Digital Ocean. Established continuous integration for all services, APIs, and databases.",
        },
      },
      {
        title: { es: "Diseño de Videojuegos:", en: "Video Game Design:" },
        description: {
          es: "Diseñé y desarrollé 24 videojuegos funcionales en 4 años, generando mecánicas, arte 2D y 3D, sonido y despliegue. Proyecto Clave: Plataforma multijugador en línea con un creador de niveles personalizado gestionado vía API.",
          en: "Designed and developed 24 functional video games, overseeing mechanics, art, sound, and deployment. Key Project: Online multiplayer platformer with a custom level creator.",
        },
      },
    ],
  },
  {
    role: {
      es: "Desarrollador de Videojuegos (Servicios Profesionales)",
      en: "Game Developer (Professional Services)",
    },
    company: { es: "Wow Emotions", en: "Wow Emotions" },
    date: { es: "Presente", en: "2023 – Present" },
    location: { es: "San José, Costa Rica", en: "San José, Costa Rica" },
    site: "wowemotions.com",
    description: {
      es: "En Wow Emotions, suministré servicios profesionales para el desarrollo de experiencias digitales multiplataforma, diseñando y ejecutando aplicaciones de Realidad Virtual (VR), Realidad Aumentada (AR), Android y entornos web con three js, phaser y React. Como proveedor técnico, entregué proyectos de alto rendimiento optimizados para eventos en vivo con tráfico masivo y aseguré la continuidad operativa del software existente mediante el mantenimiento de sistemas legados. Mi trabajo incluyó la modernización de su ecosistema tecnológico a través de la migración de versiones de Unity y la refactorización de código, logrando reducir la deuda técnica y elevar los estándares de estabilidad para sus productos finales.",
      en: "At Wow Emotions, I provided professional services for the development of multiplatform digital experiences, designing and executing Virtual Reality (VR), Augmented Reality (AR), Android, and web applications using Three.js, Phaser, and React. As a technical provider, I delivered high-performance projects optimized for live events with massive traffic and ensured the operational continuity of existing software through legacy system maintenance. My work included modernizing their technological ecosystem by migrating Unity versions and refactoring code, successfully reducing technical debt and raising stability standards for their final products.",
    },
    logo: "/img/wowemotions-logo.webp",
    tags: [
      "C#",
      ".Net-core",
      "Unity",
      "Phaser-js",
      "Node-js",
      "Express-js",
      "React-js"
    ],
    milestones: [
      {
        title: {
          es: "Desarrollo de Experiencias Digitales:",
          en: "Digital Experience Development:",
        },
        description: {
          es: "Creé diversas experiencias digitales en múltiples plataformas, incluyendo Realidad Virtual (VR), Realidad Aumentada (AR), Android y aplicaciones web en línea utilizando Unity3D y React. Entregué proyectos de alto rendimiento para eventos en vivo con tráfico significativo.",
          en: "Engineered experiences for VR, AR, Android, and web applications using Unity3D and React. Delivered high-performance projects for live events with significant traffic.",
        },
      },
      {
        title: { es: "Mantenimiento y Optimización de Proyectos:", en: "Project Maintenance & Optimization:" },
        description: {
          es: "Realicé mantenimiento integral de proyectos legados, asegurando la estabilidad y el rendimiento a largo plazo. Migré versiones de Unity y resolví deuda técnica mediante refactorización de código.",
          en: "Performed maintenance on legacy projects, migrated Unity versions, and resolved technical debt through code refactoring.",
        },
      }
    ],
  },
  {
    role: {
      es: "Coordinador de Instalaciones",
      en: "Installation Coordinator",
    },
    company: { es: "Helvex", en: "Helvex" },
    date: { es: "2020 – 2021", en: "2020 – 2021" },
    location: { es: "San Jose, Costa Rica", en: "San Jose, Costa Rica" },
    site: "helvex.com/cr",
    description: {
      es: "Realicé estudios detallados de uso de materiales que resultaron en una reducción del 20% en el desperdicio mediante la optimización y monitoreo del flujo de trabajo en fabricación. Coordiné de extremo a extremo la logística de despacho e instalación de productos personalizados, gestionando integralmente la compra de insumos y el control de inventarios de materias primas para asegurar la continuidad de la producción y el cumplimiento de los plazos de entrega.",
      en: "I conducted detailed material usage studies that resulted in a 20% reduction in waste by optimizing and monitoring the manufacturing workflow. I coordinated the end-to-end logistics for the dispatch and installation of custom products, providing integral management of raw material procurement and inventory control to ensure production continuity and the fulfillment of delivery deadlines.",
    },
    logo: "/img/helvex-logo.webp",
    tags: [
      "Excel",
      "Docs",
      "Sketchup"
    ],
    milestones: [
      {
        title: {
          es: "Análisis y Optimización de Fabricación:",
          en: "Manufacturing Analysis & Optimization:",
        },
        description: {
          es: "Realicé estudios de uso de materiales que redujeron el desperdicio en un 20% mediante la mejora del monitoreo del flujo de trabajo.",
          en: "Conducted material-use studies that reduced waste by 20% through improved workflow monitoring.",
        },
      },
      {
        title: { es: "Instalación y Logística:", en: "Installation & Logistics:" },
        description: {
          es: "Coordiné de extremo a extremo el despacho e instalación de puertas personalizadas. Gestioné la compra e inventario de materias primas.",
          en: "Coordinated end-to-end dispatch and installation of custom doors. Managed procurement and inventory of raw materials.",
        },
      }
    ],
  },
];
