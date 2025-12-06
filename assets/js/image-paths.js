// ========================================
// CONFIGURACIÓN DE RUTAS DE IMÁGENES
// ========================================
// Centraliza todas las rutas de imágenes para facilitar la gestión
//
// RECOMENDACIONES DE TAMAÑO DE IMÁGENES:
// ========================================
// Imágenes de proyectos (blog.jpg, poo-csharp.jpg, etc.):
//   - Tamaño recomendado: 800x500 píxeles (relación 16:10)
//   - Tamaño mínimo: 600x400 píxeles
//   - Tamaño máximo: 1200x750 píxeles (para pantallas grandes)
//   - Formato: JPG (mejor compresión) o WebP (mejor calidad/tamaño)
//   - Peso recomendado: 100-300 KB por imagen
//   - Las imágenes se mostrarán con object-fit: cover en un contenedor de 250px de altura
//   - Relación de aspecto: 16:10 o 4:3 funcionan mejor

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
        blog: "assets/images/projects/blog.jpg",
        pooCsharp: "assets/images/projects/poo-csharp.jpg",
        reservaCine: "assets/images/projects/reserva-cine.jpg",
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
    // Mapeo manual de proyectos según el orden en el HTML
    const projectMapping = [
        'blog',        // 1. Pagina web de blogs
        'pooCsharp',   // 2. Gestion de productos en C#
        'reservaCine', // 3. Reserva de Cine (POO en C#)
        'trueBeauty'   // 4. True Beauty - Página Web
    ];

    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach((container, index) => {
        if (projectMapping[index]) {
            const projectKey = projectMapping[index];
            const imagePath = IMAGE_PATHS.projects[projectKey];
            if (imagePath) {
                // Verificar si la imagen existe antes de cargarla
                imageExists(imagePath).then(exists => {
                    if (exists) {
                        // Verificar si ya tiene una imagen o solo el placeholder
                        const existingImg = container.querySelector('img');
                        if (!existingImg) {
                            // Crear la imagen
                            const img = document.createElement('img');
                            img.src = imagePath;
                            img.alt = `Imagen del proyecto ${index + 1}`;
                            img.loading = 'lazy';

                            // Manejar errores de carga
                            img.onerror = () => {
                                console.warn(`Error al cargar imagen: ${imagePath}`);
                                // Mantener el placeholder si falla la carga
                                if (!container.querySelector('.project-placeholder')) {
                                    const placeholder = document.createElement('div');
                                    placeholder.className = 'project-placeholder';
                                    placeholder.innerHTML = '<i class="fas fa-image"></i>';
                                    container.appendChild(placeholder);
                                }
                            };

                            // Reemplazar el placeholder con la imagen
                            const placeholder = container.querySelector('.project-placeholder');
                            if (placeholder) {
                                placeholder.remove();
                            }
                            container.appendChild(img);
                        } else {
                            // Si ya existe, solo actualizar el src
                            existingImg.src = imagePath;
                        }
                    } else {
                        console.warn(`Imagen no encontrada: ${imagePath}`);
                    }
                });
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
