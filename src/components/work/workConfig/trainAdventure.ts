import type { IWorkConfig } from "./workConfig";

export const TrainAdventure: IWorkConfig = {
  title: {
    es: "TrainAdventure (Videojuego web, multijugador, con creador de niveles)",
    en: "TrainAdventure (Web videogame, with levels creator)",
  },
  url: "/test_img/01.png",
  size: "large",
  id: "TrainAdventure",
  category: { en: "Web-Development", es: "Desarrollo-Web" },
  tags: [
    "Node-js",
    "Express-js",
    "Socket-io",
    "Sequelize",
    "PostgresQL",
    "React",
    "Phaser-js",
    "Typescript",
    "HTML",
    "CSS",
    "Digital-Ocean",
    "Github",
  ],
  officialPages: [
    {
      pageName: "Edutech",
      officialPage: "https://edutechca.com",
    },
    {
      pageName: "TrainMe",
      officialPage: "https://trainme.education",
    },
  ],
  blogs: [
    {
      units: [
        {
          title: { es: "TrainAdventure", en: "TrainAdventure" },
          property: { es: "(Edutech)", en: "(Edutech)" },
          legend: {
            es: "Videojuego / Desarrollo Web / Multijugador / FullStack / Diseño de juegos",
            en: "VideoGame / Web Development / Multiplayer / FullStack / GameDesign",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 0,
          paragraph: [
            {
              text: {
                es: "TrainAdventure no es solo un juego de plataformas lineal; es una solución de software diseñada para transformar la educación digital. El núcleo del proyecto reside en su capacidad para actuar como un 'contenedor inteligente' capaz de reproducir recursos incrustados de diversas fuentes y, lo más importante, comunicarse bidireccionalmente con la plataforma base para capturar y reportar datos de usuario en tiempo real.",
                en: "",
              },
              list: [],
            },
            {
              text: {
                es: "El objetivo principal fue gamificar contenido educativo denso, agrupándolo en un mundo jugable que fomenta la retención. Para elevar la propuesta, integramos un modo multijugador en línea y un creador de niveles, lo que permitió pasar de un contenido estático a una comunidad de creación continua.",
                en: "",
              },
              list: [],
            },
          ],
        },
        {
          title: { es: "", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "/test_img/01.png",
          videoUrl: "",
          embedUrl: "",
          imgH: 320,
          paragraph: [
            {
              text: { es: "", en: "" },
              list: [],
            },
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Trailer", en: "" },
          property: { es: "(Edutech)", en: "" },
          legend: {
            es: "Trailer oficial de TrainAdventure",
            en: "",
          },
          url: "",
          videoUrl: "/test_img/01.png",
          embedUrl: "",
          imgH: 520,
          paragraph: [],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "El Desafío: Flexibilidad y Alcance Universal", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 0,
          paragraph: [
            {
              text: {
                es: "El requerimiento de TrainMe era complejo: necesitaban una solución gamificada que pudiera albergar cualquier curso desarrollado por sus usuarios, manteniendo la estructura sólida y preestablecida de su LMS.",
                en: "",
              },
              list: [
                {
                  title: { es: "Público Objetivo:", en: "" },
                  paragraph: { es: "General, sin límites de edad.", en: "" },
                },
                {
                  title: { es: "Requisito Clave:", en: "" },
                  paragraph: {
                    es: "Versatilidad absoluta para cambiar la temática (visual y pedagógica) según las necesidades del curso específico.",
                    en: "",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Mi Rol como Líder de Proyecto y Estratega", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "Leyenda de la imagen",
            en: "",
          },
          url: "/test_img/01.png",
          videoUrl: "",
          embedUrl: "",
          imgH: 200,
          paragraph: [
            {
              text: {
                es: "Como líder, mi primera responsabilidad fue dar forma y estructura a la visión a través de un Game Design Document (GDD) robusto. Este documento fue la hoja de ruta para una ejecución en tres etapas críticas:",
                en: "",
              },
              list: [
                {
                  title: { es: "Single Player:", en: "" },
                  paragraph: {
                    es: "La base mecánica del juego de plataformas.",
                    en: "",
                  },
                },
                {
                  title: { es: "Multiplayer:", en: "" },
                  paragraph: {
                    es: "Implementación de la interacción social y competitiva.",
                    en: "",
                  },
                },
                {
                  title: { es: "Community Hub:", en: "" },
                  paragraph: {
                    es: "Desarrollo del editor de niveles para proporcionar autonomía al usuario final.",
                    en: "",
                  },
                },
              ],
            },
            {
              text: {
                es: "Durante la fase de pre-producción, trabajé estrechamente con el departamento de Mercadeo e Ilustración. Supervisé la creación de artes conceptuales, personajes y escenarios, asegurando que el estilo visual fuera homogéneo pero flexible, permitiendo que el juego se sintiera natural tanto en un entorno corporativo como en uno infantil.",
                en: "",
              },
              list: [],
            },
          ],
        },
        {
          title: { es: "Arquitectura Técnica: Diseño Hexagonal y Escalabilidad", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "Leyenda de la imagen",
            en: "",
          },
          url: "/test_img/01.png",
          videoUrl: "",
          embedUrl: "",
          imgH: 200,
          paragraph: [
            {
              text: {
                es: "Mientras se definía el arte, construí la arquitectura técnica desde cero. Para garantizar que TrainAdventure pudiera crecer sin comprometer el 'core', apliqué principios de Arquitectura Hexagonal.",
                en: "",
              },
              list: [
                {
                  title: { es: "Patrones de Diseño:", en: "" },
                  paragraph: {
                    es: "Utilicé una estructura de Manejador, Controlador y Agente. Esto permitió que los sistemas de programación fueran modulares, facilitando la adición de nuevas funcionalidades de forma independiente.",
                    en: "",
                  },
                },
                {
                  title: { es: "Stack Tecnológico:", en: "" },
                  paragraph: {
                    es: "Seleccioné tecnologías modernas (JavaScript, Node.js) que permitieran un flujo de trabajo ágil desde el backend hasta el frontend.",
                    en: "",
                  },
                }
              ],
            }
          ],
        },
        {
          title: { es: "Desarrollo y Despliegue \n (Full-Stack)", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "Leyenda de la imagen",
            en: "",
          },
          url: "/test_img/01.png",
          videoUrl: "",
          embedUrl: "",
          imgH: 200,
          paragraph: [
            {
              text: {
                es: "Una vez finalizada la planificación, asumí el desarrollo integral de la aplicación:",
                en: "",
              },
              list: [
                {
                  title: { es: "Backend & Frontend:", en: "" },
                  paragraph: { es: "Construcción completa del código. Desarrollando el proyecto desde el Backend, Hasta el Frontend, con las tecnologias propuestas, asegurando una conexión estable y rendimiento, tanto en single player como en multiplayer.", en: "" },
                },
                {
                  title: { es: "Infraestructura:", en: "" },
                  paragraph: {
                    es: "Gestioné el despliegue continuo (CI/CD) hacia AWS, donde configuré y levanté la instancia específica para el servidor multijugador, asegurando una latencia mínima para los usuarios.",
                    en: "",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Resultados y Evolución", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 0,
          paragraph: [
            {
              text: {
                es: "El proyecto no fue un lanzamiento único, sino una evolución constante que pasó de un MVP (Producto Mínimo Viable) a una plataforma robusta que sigue recibiendo contenido y funciones hoy en día.",
                en: "",
              },
              list: [],
            },
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Carrucel de imagenes", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "Leyenda de las imagenes",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 400,
          paragraph: [],
          carousel: ["/test_img/01.png", "/test_img/01.png", "/test_img/01.png", "/test_img/01.png"]
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Impacto en el Negocio:", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 0,
          paragraph: [
            {
              text: {
                es: "",
                en: "",
              },
              list: [
                {
                    title: { es: "Diferenciación:", en: "" },
                    paragraph: { es: "TrainAdventure se convirtió en el principal diferenciador de TrainMe, atrayendo a sectores educativos que buscaban una experiencia más amigable.", en: "" }
                },
                {
                    title: { es: "Rendimiento Técnico:", en: "" },
                    paragraph: { es: "Logramos un desempeño excepcional y tiempos de carga optimizados, garantizando la compatibilidad incluso en dispositivos móviles de gama baja, democratizando así el acceso al contenido educativo gamificado.", en: "" }
                }
              ],
            },
          ],
        },
      ],
    },
  ],
};
