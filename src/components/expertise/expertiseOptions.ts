interface IText {
    es:string,
    en:string
}
export interface IExpertiseOption {
    Title:IText,
    Description:IText,
    Url:string,
    Tags:string[]
}
export const sampleExpertiseOption:IExpertiseOption = {
    Title: {
        es: "",
        en: ""
    },
    Description: {
        es: "",
        en: ""
    },
    Url: "",
    Tags: []
}

export const expertiseOptions:IExpertiseOption[] = [
    {
        Title: {
            es: "Backend",
            en: "Backend"
        },
        Description: {
            es: "Desarrollo de servidores y APIs robustas y escalables utilizando Node.js, Express y bases de datos SQL y NoSQL.",
            en: "Development of robust and scalable servers and APIs using Node.js, Express, and SQL and NoSQL databases."
        },
        Url: "/img/backend.png",
        Tags: ["Node", "Express", "Sequelize", "MongoDB", "PostgreSQL", ".Net core", "PHP"]
    },
    {
        Title: {
            es: "Frontend",
            en: "Frontend"
        },
        Description: {
            es: "Creacion de interfaces de usuario interactivas y responsivas con React, TypeScript y frameworks modernos de CSS.",
            en: "Creation of interactive and responsive user interfaces with React, TypeScript, and modern CSS frameworks."
        },
        Url: "/img/frontend.png",
        Tags: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
        Title: {
            es: "VideoGames",
            en: "VideoGames"
        },
        Description: {
            es: "Desarrollo de videojuegos utilizando Unity y C#, creando experiencias inmersivas y atractivas para diversas plataformas.",
            en: "Video game development using Unity and C#, creating immersive and engaging experiences for various platforms."
        },
        Url: "/img/videogames.png",
        Tags: ["Unity", "C#", "Phaser", "Three-js", "Javascript", "Typescript", "Godot", "GDScript", "GameDesign", "Reason", "Cubase", "FMOD"]
    },
    {
        Title: {
            es: "Computacion en la nube",
            en: "Cloud Computing"
        },
        Description: {
            es: "Implementacion y gestion de soluciones en la nube utilizando servicios como AWS y Digital Ocean para escalabilidad y eficiencia.",
            en: "Implementation and management of cloud solutions using services like AWS and Digital Ocean for scalability and efficiency."
        },
        Url: "/img/cloud.png",
        Tags: ["AWS", "Digital Ocean", "Docker", "Jenkins", "Git", "Github", "Jira"]
    },
    {
        Title: {
            es: "Arte 2D y 3D",
            en: "2D and 3D Art"
        },
        Description: {
            es: "Creacion de modelos 3D, texturas y arte conceptual utilizando herramientas como Blender, Maya y Photoshop.",
            en: "Creation of 3D models, textures, and concept art using tools like Blender, Maya, and Photoshop."
        },
        Url: "/img/art.png",
        Tags: ["Photoshop", "Krita", "Moho", "Premiere", "after-effects", "Illustrator", "Maya", "Blender", "Sketchup"]
    }
]