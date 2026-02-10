import type { IWorkConfig } from "./workConfig";

export const TrainMeGames: IWorkConfig = {
  title: {
    es: "TrainMe Games (SaaS)",
    en: "TrainMe Games (SaaS)",
  },
  url: "/img/TrainMeGames/background-new.webp",
  size: "small",
  id: "TrainMeGames",
  category: { en: "Web-Development", es: "Desarrollo-Web" },
  tags: [
    "Node-js",
    "Express-js",
    "Sequelize",
    "PostgresQL",
    "React",
    "Phaser-js",
    "Unity",
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
      pageName: "TrainMe Games",
      officialPage: "https://trainme.games",
    },
  ],
  blogs: [
    {
      units: [
        {
          title: { es: "", en: "" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "/img/TrainMeGames/background-new.webp",
          videoUrl: "",
          embedUrl: "",
          imgH: 250,
          paragraph: [
            {
              text: { es: "", en: "" },
              list: [],
            },
          ],
        },
        {
          title: { es: "TrainMe Games", en: "TrainMe Games" },
          property: { es: "(TrainMe-Edutech)", en: "(TrainMe-Edutech)" },
          legend: {
            es: "Desarrollo Web / FullStack / Diseño de juegos",
            en: "Web Development / FullStack / Game Design",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 0,
          paragraph: [
            {
              text: {
                es: "TrainMe Games es una plataforma de servicios de contenido diseñada como un 'puerto' de recursos interactivos. Su función principal es servir como el motor detrás del LMS TrainMe, permitiendo el consumo de experiencias educativas dinámicas de forma independiente.",
                en: "TrainMe Games is a content services platform designed as a 'hub' for interactive resources. Its primary function is to serve as the engine behind the TrainMe LMS, enabling the independent consumption of dynamic educational experiences.",
              },
              list: [],
            },
            {
              text: {
                es: "Actualmente, la plataforma alberga 24 videojuegos funcionales, cada uno equipado con un editor personalizado que permite a los usuarios modificar tanto el contenido pedagógico como la estética, sin alterar la mecánica base del recurso.",
                en: "Currently, the platform hosts 24 functional video games, each equipped with a custom editor that allows users to modify both pedagogical content and aesthetics without altering the resource's core mechanics.",
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
          title: { es: "El Desafío: Independencia y Escalabilidad", en: "The Challenge: Independence and Scalability" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 250,
          paragraph: [
            {
              text: {
                es: "El proyecto nació de una necesidad técnica crítica: independizar los recursos interactivos del core del LMS. Debido a que cada juego requiere una base de datos asociada para gestionar estados y resultados de forma individual, mantenerlos dentro de la misma infraestructura central generaba cuellos de botella.",
                en: "The project was born from a critical technical need: to decouple interactive resources from the LMS core. Since each game requires an associated database to manage states and results individually, keeping them within the same central infrastructure created bottlenecks.",
              },
              list: [],
            },
            {
              text: {
                es: "La solución fue diseñar una aplicación tipo SaaS que no solo sirviera a la plataforma interna, sino que tuviera la versatilidad de ofrecer sus servicios a terceros de manera autónoma.",
                en: "The solution was to design a SaaS-type application that not only served the internal platform but also had the versatility to offer its services to third parties autonomously.",
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
          title: { es: "Liderazgo y Arquitectura Técnica", en: "Leadership and Technical Architecture" },
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
                es: "Como responsable integral del proyecto , gestioné el ciclo de vida completo: desde la conceptualización hasta el desarrollo del código fuente (full-stack) y el despliegue en servidor.",
                en: "As the project lead, I managed the entire lifecycle: from conceptualization to source code development (full-stack) and server deployment.",
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
          title: { es: "Flujo de la pagina", en: "Page Flow" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 300,
          paragraph: [],
          carousel: [
            "/img/TrainMeGames/01.PNG",
            "/img/TrainMeGames/02.PNG",
            "/img/TrainMeGames/03.PNG",
            "/img/TrainMeGames/04.PNG",
            "/img/TrainMeGames/05.PNG",
            "/img/TrainMeGames/06.PNG",
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Especificaciones del Stack:", en: "Stack Specifications:" },
          property: { es: "", en: "" },
          legend: {
            es: "",
            en: "",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 300,
          paragraph: [
            {
              text: { es: "", en: "" },
              list: [
                {
                  title: { es: "Base de Datos:", en: "Database:" },
                  paragraph: {
                    es: "Implementación de PostgreSQL para una gestión relacional de datos robusta.",
                    en: "PostgreSQL implementation for robust relational data management.",
                  },
                },
                {
                  title: { es: "Arquitectura de API Híbrida:", en: "Hybrid API Architecture:" },
                  paragraph: {
                    es: "Utilicé REST API para el control de usuarios (roles y permisos) y el flujo primario de la aplicación. Implementé Apollo (GraphQL) para exponer una capa de datos tipo grafo. Esta se habilitó con documentación incrustada para facilitar que desarrolladores externos integren los recursos en sus propias apps.",
                    en: "I used REST API for user control (roles and permissions) and the primary application flow. I implemented Apollo (GraphQL) to expose a graph-like data layer. This was enabled with embedded documentation to facilitate external developers integrating the resources into their own apps.",
                  },
                },
                {
                  title: { es: "Interoperabilidad:", en: "Interoperability:" },
                  paragraph: {
                    es: "Desarrollé conexiones bajo el protocolo LTI 1.3 para la integración con PowerSchool y habilité rutas directas vía Deep Linking para cualquier otro LMS del mercado.",
                    en: "I developed connections under the LTI 1.3 protocol for PowerSchool integration and enabled direct routes via Deep Linking for any other LMS on the market.",
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
          title: { es: "Portafolio de Juegos y Mecánicas", en: "Game Portfolio and Mechanics" },
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
                es: "Dentro del ecosistema se desarrollaron 24 recursos que siguen operativos, clasificados en dos niveles de complejidad: 1. arcades, los cuales ons juegos con mecanicas simples y autocomclusivos, 2. Experiencias complejas, los cuales son juegos que llevan mas de una mecanica, y un tiempo de desaroolo mas extenso y complejo que los anteriores. A continuacion se listaran todos los juegos desarrollados a la fecha para TrainMe Games: ",
                en: "Within the ecosystem, 24 resources were developed and remain operational, classified into two levels of complexity: 1. Arcades, which are games with simple, self-contained mechanics; 2. Complex Experiences, which are games featuring multiple mechanics and a more extensive and complex development time. Below are all the games developed to date for TrainMe Games:",
              },
              list: [
                {
                  title: { es: "Arcade y clasicos", en: "Arcade and Classics" },
                  paragraph: {
                    es: "Busca la coincidencia, Categorizar, Crucigrama, Palabra faltante, Pares igulaes, Persecución en el laberinto, Rompecabezas, Lecturas cortas con audio, Linea del tiempo, Concurso, Rueda del azar, Sopa de letras, Tarjetas flash, Une los pares, Si,no/Verdadero,falso, Diagrama de etiquetado, Audio Quiz, Deletreo con audio, Libro interactivo, Pizarra interactiva",
                    en: "Match Up, Categorize, Crossword, Missing Word, Matching Pairs, Maze Chase, Puzzle, Short Readings with Audio, Timeline, Quiz, Wheel of Fortune, Word Search, Flashcards, Connect the Pairs, Yes/No / True/False, Labeling Diagram, Audio Quiz, Spelling with Audio, Interactive Book, Interactive Whiteboard",
                  },
                },
                {
                  title: { es: "Experiencias complejas", en: "Complex Experiences" },
                  paragraph: {
                    es: "TrainNopoly, TrainAdventure",
                    en: "TrainNopoly, TrainAdventure",
                  },
                },
              ],
            }
          ],
        },
        {
          title: { es: "Catalogo de juegos", en: "Game Catalog" },
          property: { es: "", en: "" },
          legend: {
            es: "Aqui podras ver todo el contenido en recursos creados para TrainMe Games",
            en: "Here you can view all the content and resources created for TrainMe Games",
          },
          url: "",
          videoUrl: "",
          embedUrl: "",
          imgH: 100,
          paragraph: [],
          carousel: [
            "/img/TrainMeGames/games/01.PNG",
            "/img/TrainMeGames/games/02.PNG",
            "/img/TrainMeGames/games/03.PNG",
            "/img/TrainMeGames/games/04.PNG",
            "/img/TrainMeGames/games/05.PNG",
            "/img/TrainMeGames/games/06.PNG",
            "/img/TrainMeGames/games/07.PNG",
            "/img/TrainMeGames/games/08.PNG",
            "/img/TrainMeGames/games/09.PNG",
            "/img/TrainMeGames/games/10.PNG",
            "/img/TrainMeGames/games/11.PNG",
            "/img/TrainMeGames/games/12.PNG",
            "/img/TrainMeGames/games/13.PNG",
            "/img/TrainMeGames/games/14.PNG",
            "/img/TrainMeGames/games/15.PNG",
            "/img/TrainMeGames/games/16.PNG",
            "/img/TrainMeGames/games/17.PNG",
            "/img/TrainMeGames/games/18.PNG",
            "/img/TrainMeGames/games/19.PNG",
            "/img/TrainMeGames/games/20.PNG",
            "/img/TrainMeGames/games/21.PNG",
            "/img/TrainMeGames/games/22.PNG",
          ],
        },
      ],
    },
    {
      units: [
        {
          title: { es: "Resultados e Impacto Técnico", en: "Results and Technical Impact" },
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
                es: "La finalización con éxito de TrainMe Games transformó la operatividad de la empresa:",
                en: "The successful completion of TrainMe Games transformed the company's operations:",
              },
              list: [
                {
                  title: { es: "Alcance:", en: "Reach:" },
                  paragraph: {
                    es: "Conexión y servicio estable para más de 5,000 usuarios.",
                    en: "Stable connection and service for more than 5,000 users.",
                  },
                },
                {
                  title: { es: "Eficiencia Operativa:", en: "Operational Efficiency:" },
                  paragraph: {
                    es: "Al independizar los recursos del LMS principal, se agilizó el mantenimiento y se eliminó el riesgo de afectación cruzada durante actualizaciones críticas.",
                    en: "By decoupling resources from the main LMS, maintenance was streamlined, and the risk of cross-impact during critical updates was eliminated.",
                  },
                },
                {
                  title: { es: "Versatilidad de Despliegue:", en: "Deployment Versatility:" },
                  paragraph: {
                    es: "La plataforma se integró exitosamente en entornos educativos de alto nivel como Schoology y PowerSchool, demostrando una compatibilidad técnica superior.",
                    en: "The platform was successfully integrated into high-level educational environments such as Schoology and PowerSchool, demonstrating superior technical compatibility.",
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
          title: { es: "Trailer juegos", en: "Game Trailer" },
          property: { es: "(TrainMe)", en: "(TrainMe)" },
          legend: {
            es: "Creador de juegos incrustado en la aplicacion TrainMe",
            en: "Game creator embedded in the TrainMe application",
          },
          url: "",
          videoUrl: "",
          embedUrl: "https://www.youtube.com/embed/HCy5ML7a5KU?si=BYkdVzgoHFfPYN4T",
          imgH: 500,
          paragraph: [],
        },
      ],
    },
  ],
};