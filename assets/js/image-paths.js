// ========================================
// CONFIGURACIÓN DE RUTAS DE IMÁGENES
// ========================================
// Centraliza todas las rutas de imágenes para facilitar la gestión

const IMAGE_PATHS = {
    // ========================================
    // IMÁGENES DE PERFIL
    // ========================================
    profile: {
        main: "assets/images/profile/alejandro-lopez.jpg",
        avatar: "assets/images/profile/avatar.jpg",
        hero: "assets/images/backgrounds/hero-bg.jpg"
    },

    // ========================================
    // IMÁGENES DE PROYECTOS
    // ========================================
    projects: {
        pooCsharp: "assets/images/projects/poo-csharp.jpg",
        trueBeauty: "assets/images/projects/true-beauty.jpg",
        carrito: "assets/images/projects/carrito.jpg",
        restaurante: "assets/images/projects/restaurante.jpg"
    },

    // ========================================
    // LOGOS Y ICONOS
    // ========================================
    logos: {
        utn: "assets/images/logos/utn-logo.png",
        colegio: "assets/images/logos/colegio-loret-logo.png",
        github: "assets/images/logos/github-logo.png",
        linkedin: "assets/images/logos/linkedin-logo.png"
    },

    // ========================================
    // IMÁGENES DE FONDO
    // ========================================
    backgrounds: {
        hero: "assets/images/backgrounds/hero-bg.jpg",
        about: "assets/images/backgrounds/about-bg.jpg",
        projects: "assets/images/backgrounds/projects-bg.jpg",
        contact: "assets/images/backgrounds/contact-bg.jpg"
    },

    // ========================================
    // IMÁGENES DE TECNOLOGÍAS
    // ========================================
    technologies: {
        csharp: "assets/images/tech/csharp-logo.png",
        dotnet: "assets/images/tech/dotnet-logo.png",
        sqlserver: "assets/images/tech/sqlserver-logo.png",
        html5: "assets/images/tech/html5-logo.png",
        css3: "assets/images/tech/css3-logo.png",
        javascript: "assets/images/tech/javascript-logo.png",
        php: "assets/images/tech/php-logo.png",
        mysql: "assets/images/tech/mysql-logo.png",
        bootstrap: "assets/images/tech/bootstrap-logo.png",
        git: "assets/images/tech/git-logo.png",
        visualstudio: "assets/images/tech/visualstudio-logo.png"
    }
};

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

// Función para obtener la ruta de una imagen
function getImagePath(category, name) {
    if (IMAGE_PATHS[category] && IMAGE_PATHS[category][name]) {
        return IMAGE_PATHS[category][name];
    }
    console.warn(`Imagen no encontrada: ${category}.${name}`);
    return "assets/images/placeholder.jpg"; // Imagen por defecto
}

// Función para verificar si una imagen existe
function imageExists(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path;
    });
}

// Función para precargar imágenes importantes
function preloadImages() {
    const importantImages = [
        IMAGE_PATHS.profile.main,
        IMAGE_PATHS.projects.pooCsharp,
        IMAGE_PATHS.projects.trueBeauty,
        IMAGE_PATHS.projects.carrito,
        IMAGE_PATHS.projects.restaurante
    ];

    importantImages.forEach(path => {
        const img = new Image();
        img.src = path;
    });
}

// Función para aplicar lazy loading a imágenes
function applyLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Función para actualizar dinámicamente las imágenes
function updateImages() {
    // Actualizar imagen de perfil
    const profileImage = document.querySelector('.image-placeholder');
    if (profileImage && IMAGE_PATHS.profile.main) {
        profileImage.innerHTML = `
            <img src="${IMAGE_PATHS.profile.main}" alt="Alejandro López - Desarrollador Full Stack" class="profile-image">
        `;
    }

    // Actualizar imágenes de proyectos
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach((container, index) => {
        const projectKeys = Object.keys(IMAGE_PATHS.projects);
        if (projectKeys[index]) {
            const projectKey = projectKeys[index];
            const imagePath = IMAGE_PATHS.projects[projectKey];
            if (imagePath) {
                container.innerHTML = `
                    <img src="${imagePath}" alt="Imagen del proyecto" class="project-image-img">
                `;
            }
        }
    });
}

// ========================================
// EXPORTACIÓN
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { IMAGE_PATHS, getImagePath, imageExists, preloadImages, applyLazyLoading, updateImages };
} else {
    // Para uso en navegador
    window.IMAGE_PATHS = IMAGE_PATHS;
    window.getImagePath = getImagePath;
    window.imageExists = imageExists;
    window.preloadImages = preloadImages;
    window.applyLazyLoading = applyLazyLoading;
    window.updateImages = updateImages;
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Precargar imágenes importantes
    preloadImages();

    // Aplicar lazy loading
    applyLazyLoading();

    // Actualizar imágenes dinámicamente
    updateImages();
});

console.log('✅ Configuración de imágenes cargada correctamente');
console.log('📁 Las imágenes se cargan desde: assets/images/');
console.log('👨‍💻 Portafolio de Alejandro López');
