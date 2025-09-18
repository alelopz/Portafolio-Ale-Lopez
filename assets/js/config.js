// ========================================
// CONFIGURACIÓN DEL PORTAFOLIO - ALEJANDRO LÓPEZ
// ========================================
// Archivo centralizado para personalizar fácilmente el portafolio

const PORTFOLIO_CONFIG = {
    // ========================================
    // INFORMACIÓN PERSONAL
    // ========================================
    personal: {
        name: "Alejandro López",
        title: "Desarrollador Full Stack",
        subtitle: "Programador Orientado a Objetos",
        description: "Desarrollador apasionado por crear soluciones tecnológicas innovadoras. Especializado en desarrollo web full-stack, con experiencia en tecnologías modernas como C#, .NET Core, SQL Server y desarrollo web frontend.",
        longDescription: "Soy un programador orientado a objetos con sólidos conocimientos en C++, C#, SQL y desarrollo web. Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre pensando en la experiencia del usuario final. Motivado por el aprendizaje constante y la aplicación práctica de nuevas tecnologías para aportar valor a los proyectos y equipos de trabajo.",
        email: "aalejandrolopezz023@gmail.com",
        phone: "01168033438",
        location: "El Palomar, Buenos Aires, Argentina",
        address: "Laurena Ferrari 871, Buenos Aires, 1684, Argentina"
    },

    // ========================================
    // ENLACES SOCIALES
    // ========================================
    social: {
        github: "https://github.com/alelopz",
        linkedin: "#", // Agregar cuando tengas perfil
        twitter: "#", // Agregar cuando tengas perfil
        email: "mailto:aalejandrolopezz023@gmail.com"
    },

    // ========================================
    // HABILIDADES TÉCNICAS
    // ========================================
    skills: {
        languages: {
            title: "Lenguajes de Programación",
            items: [
                "C",
                "C++",
                "C#",
                "SQL",
                "PHP"
            ]
        },
        web: {
            title: "Tecnologías Web",
            items: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "jQuery",
                "AJAX"
            ]
        },
        frameworks: {
            title: "Frameworks y Librerías",
            items: [
                ".NET Core",
                "Bootstrap"
            ]
        },
        databases: {
            title: "Bases de Datos",
            items: [
                "SQL Server",
                "MySQL"
            ]
        },
        tools: {
            title: "Herramientas y IDEs",
            items: [
                "Visual Studio",
                "Visual Studio Code",
                "Git & GitHub",
                "SQL Server Management Studio",
                "Microsoft Office"
            ]
        },
        paradigms: {
            title: "Paradigmas de Programación",
            items: [
                "Programación Orientada a Objetos",
                "Programación Estructurada",
                "Arquitectura de Software"
            ]
        }
    },

    // ========================================
    // PROYECTOS
    // ========================================
    projects: [
        {
            id: "poo-csharp",
            title: "Programación Orientada a Objetos en C#",
            description: "Conjunto de aplicaciones desarolladas aplicando principios de POO en C#, que incluyen sistemas de gestión para diferentes contextos (agencia de turismo, colegio, sala de ensayos, tornados y facultad). Cada proyecto cuenta con lógica de negocio implementada, manejo de clases, herencia y encapsulamiento.",
            technologies: ["C#", ".NET", "POO", "SQL Server"],
            image: "assets/images/projects/poo-csharp.jpg",
            github: "https://github.com/alelopz/Programacion-orientada-a-objetos.git",
            demo: "#",
            features: [
                "Sistemas de gestión para múltiples contextos",
                "Implementación de principios POO",
                "Manejo de clases y herencia",
                "Lógica de negocio robusta"
            ]
        },
        {
            id: "reserva-cine",
            title: "Reserva de Cine (POO en C#)",
            description: "Aplicación de consola para gestionar reservas de cine aplicando principios de POO: clases, encapsulamiento y validaciones.",
            technologies: ["C#", ".NET", "POO"],
            image: "assets/images/projects/reserva-cine.jpg",
            github: "https://github.com/alelopz/reservaCine.git", // repo público
            demo: "#",
            features: [
                "Gestión de salas, funciones y reservas",
                "Validaciones y manejo de errores",
                "Modelo orientado a objetos (Cine, Función, Boleto)"
            ]
        },
        {
            id: "true-beauty",
            title: "True Beauty - Página Web",
            description: "Sitio web informativo y responsivo dedicado a la serie coreana True Beauty, con diseño atractivo, integración de imágenes y secciones interactivas. Desarrollado utilizando Bootstrap para maquetado y CSS personalizado para estilos únicos.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            image: "assets/images/projects/true-beauty.jpg",
            github: "https://github.com/alelopz/TrueBeauty.git",
            demo: "#",
            features: [
                "Diseño responsivo y atractivo",
                "Integración de imágenes",
                "Secciones interactivas",
                "Optimizado para móviles"
            ]
        },
        {
            id: "carrito-pedidos",
            title: "Sistema de Pedidos con Carrito",
            description: "Aplicación web que permite a los clientes agregar productos al carrito, enviar pedidos y solicitar atención de un mozo. Incluye conexión a base de datos para el registro y gestión de pedidos, con interfaz intuitiva para el usuario.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            image: "assets/images/projects/carrito.jpg",
            github: "https://github.com/alelopz/Carrito.git",
            demo: "#",
            features: [
                "Carrito de compras funcional",
                "Sistema de pedidos",
                "Conexión a base de datos",
                "Interfaz intuitiva"
            ]
        },
        {
            id: "sistema-restaurante",
            title: "Sistema Restaurante (Proyecto Grupal)",
            description: "Versión mejorada del sistema de pedidos, desarrollada en equipo. Permite a los clientes escanear un código QR en la mesa para acceder al menú digital, seleccionar productos, enviar pedidos a la cocina y solicitar atención. Incluye módulo de gestión para meseros, cajeros y administradores, con conexión a base de datos para control de pedidos, pagos e inventario. Utiliza AJAX para redirecciones y actualizaciones dinámicas sin recargar la página, e incorpora la API de Mercado Pago para pagos electrónicos.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX", "Mercado Pago API"],
            image: "assets/images/projects/restaurante.jpg",
            github: "https://github.com/constanzamz/sistema-restaurante.git",
            demo: "#",
            features: [
                "Código QR para acceso al menú",
                "Sistema de pedidos avanzado",
                "Módulos de gestión para personal",
                "Integración con Mercado Pago",
                "Actualizaciones dinámicas con AJAX"
            ]
        }
    ],

    // ========================================
    // EXPERIENCIA LABORAL
    // ========================================
    experience: [
        {
            title: "Desarrollador Full Stack Junior",
            company: "Freelance / Proyectos Personales",
            period: "2021 - Presente",
            description: "Desarrollo de aplicaciones web y sistemas de gestión utilizando tecnologías modernas. Implementación de soluciones personalizadas para diferentes necesidades empresariales.",
            technologies: ["C#", ".NET Core", "SQL Server", "HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        }
    ],

    // ========================================
    // EDUCACIÓN
    // ========================================
    education: [
        {
            degree: "Tecnicatura Universitaria en Programación",
            institution: "Universidad Tecnológica Nacional",
            location: "Haedo, Buenos Aires",
            period: "2016 - 2021",
            status: "Finalizado",
            description: "Especialización en desarrollo de software y sistemas distribuidos. Formación integral en programación orientada a objetos, bases de datos y desarrollo web."
        },
        {
            degree: "Bachiller en Ciencias Sociales",
            institution: "Colegio Nuestra Señora del Loret",
            location: "El Palomar, Buenos Aires",
            period: "2010 - 2015",
            status: "Finalizado",
            description: "Educación secundaria con orientación en ciencias sociales."
        }
    ],

    // ========================================
    // CERTIFICACIONES
    // ========================================
    certifications: [
        {
            name: "Desarrollo Web Full Stack",
            issuer: "Autodidacta",
            date: "2021 - Presente",
            description: "Aprendizaje continuo en tecnologías web modernas y mejores prácticas de desarrollo."
        }
    ],

    // ========================================
    // IDIOMAS
    // ========================================
    languages: [
        {
            name: "Español",
            level: "Nativo",
            proficiency: 100
        },
        {
            name: "Inglés",
            level: "Intermedio (B1)",
            proficiency: 70
        }
    ],

    // ========================================
    // COMPETENCIAS
    // ========================================
    competencies: [
        "Resolución de problemas complejos",
        "Trabajo en equipo",
        "Adaptabilidad a nuevas tecnologías",
        "Atención al detalle y buenas prácticas de código",
        "Aprendizaje continuo",
        "Comunicación efectiva"
    ],

    // ========================================
    // CONFIGURACIÓN DEL SITIO
    // ========================================
    site: {
        title: "Alejandro López - Desarrollador Full Stack",
        description: "Portafolio profesional de Alejandro López, desarrollador full stack especializado en C#, .NET Core y desarrollo web moderno.",
        keywords: "desarrollador, full stack, C#, .NET Core, programación orientada a objetos, Buenos Aires, Argentina",
        author: "Alejandro López",
        theme: {
            primaryColor: "#2563eb",
            secondaryColor: "#7c3aed",
            accentColor: "#f59e0b",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"
        }
    }
};

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

// Función para obtener información personal
function getPersonalInfo() {
    return PORTFOLIO_CONFIG.personal;
}

// Función para obtener habilidades
function getSkills() {
    return PORTFOLIO_CONFIG.skills;
}

// Función para obtener proyectos
function getProjects() {
    return PORTFOLIO_CONFIG.projects;
}

// Función para obtener experiencia
function getExperience() {
    return PORTFOLIO_CONFIG.experience;
}

// Función para obtener educación
function getEducation() {
    return PORTFOLIO_CONFIG.education;
}

// Función para obtener idiomas
function getLanguages() {
    return PORTFOLIO_CONFIG.languages;
}

// Función para obtener competencias
function getCompetencies() {
    return PORTFOLIO_CONFIG.competencies;
}

// Función para obtener configuración del sitio
function getSiteConfig() {
    return PORTFOLIO_CONFIG.site;
}

// Función para obtener enlaces sociales
function getSocialLinks() {
    return PORTFOLIO_CONFIG.social;
}

// ========================================
// EXPORTACIÓN
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PORTFOLIO_CONFIG,
        getPersonalInfo,
        getSkills,
        getProjects,
        getExperience,
        getEducation,
        getLanguages,
        getCompetencies,
        getSiteConfig,
        getSocialLinks
    };
} else {
    // Para uso en navegador
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
    window.getPersonalInfo = getPersonalInfo;
    window.getSkills = getSkills;
    window.getProjects = getProjects;
    window.getExperience = getExperience;
    window.getEducation = getEducation;
    window.getLanguages = getLanguages;
    window.getCompetencies = getCompetencies;
    window.getSiteConfig = getSiteConfig;
    window.getSocialLinks = getSocialLinks;
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ Configuración del portafolio cargada correctamente');
    console.log('👨‍💻 Portafolio de:', PORTFOLIO_CONFIG.personal.name);
    console.log('📧 Contacto:', PORTFOLIO_CONFIG.personal.email);
    console.log('🌍 Ubicación:', PORTFOLIO_CONFIG.personal.location);
}); 