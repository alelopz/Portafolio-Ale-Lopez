// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            // Cerrar menú móvil si está abierto
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            // Scroll suave
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Fallback para navegadores que no soportan scroll-behavior
            if (!('scrollBehavior' in document.documentElement.style)) {
                const targetPosition = target.offsetTop - 80; // Ajuste para navbar
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            console.warn('No se encontró el elemento:', targetId);
        }
    });
});

// Función específica para el botón Inicio
document.addEventListener('DOMContentLoaded', function () {
    const inicioLink = document.querySelector('a[href="#inicio"]');
    if (inicioLink) {
        inicioLink.addEventListener('click', function (e) {
            e.preventDefault();

            // Cerrar menú móvil si está abierto
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            // Scroll al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Efecto de scroll en la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores del formulario
        const formData = new FormData(this);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const asunto = formData.get('asunto');
        const mensaje = formData.get('mensaje');

        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido', 'error');
            return;
        }

        // Simular envío (aquí puedes integrar con un servicio real)
        showNotification('Enviando mensaje...', 'info');

        setTimeout(() => {
            showNotification('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
            this.reset();
        }, 2000);
    });
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Mostrar con animación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Botón de cerrar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Efecto de escritura en el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Aplicar efecto de escritura al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Contador de habilidades (efecto visual)
function animateCounters() {
    const counters = document.querySelectorAll('.skill-category li');

    counters.forEach(counter => {
        const target = counter;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    target.style.opacity = '1';
                    target.style.transform = 'translateX(0)';
                }
            });
        });

        observer.observe(target);

        // Estilos iniciales
        target.style.opacity = '0';
        target.style.transform = 'translateX(-20px)';
        target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
}

// Inicializar contadores
document.addEventListener('DOMContentLoaded', animateCounters);

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading para imágenes (cuando las agregues)
function lazyLoadImages() {
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

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Smooth reveal para secciones
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Agregar clase reveal a elementos que quieras animar
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.section-title, .about-content, .projects-grid, .timeline, .contact-content');
    elementsToReveal.forEach(el => el.classList.add('reveal'));
});

// Efecto de hover en las tarjetas de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Navegación por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Cerrar menú móvil si está abierto
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Mejorar accesibilidad
document.addEventListener('DOMContentLoaded', () => {
    // Agregar atributos ARIA
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.setAttribute('aria-label', `Navegar a sección ${link.textContent}`);
    });

    // Agregar skip link para accesibilidad
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10001;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Agregar ID al contenido principal
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
});

// ========================================
// GALERÍA DE PROYECTOS
// ========================================

// Configuración de imágenes por proyecto
const projectImages = {
    'poo-csharp': {
        title: 'Programación Orientada a Objetos en C#',
        images: [
            'assets/images/projects/poo-csharp/1.jpg',
            'assets/images/projects/poo-csharp/2.jpg',
            'assets/images/projects/poo-csharp/3.jpg'
        ]
    },
    'reserva-cine': {
        title: 'Reserva de Cine (POO en C#)',
        images: [
            'assets/images/projects/reserva-cine/1.jpg',
            'assets/images/projects/reserva-cine/2.jpg',
            'assets/images/projects/reserva-cine/3.jpg',
            'assets/images/projects/reserva-cine/3.jpg',
            'assets/images/projects/reserva-cine/5.jpg'
        ]
    },
    'true-beauty': {
        title: 'True Beauty - Página Web',
        images: [
            'assets/images/projects/true-beauty/1.jpg',
            'assets/images/projects/true-beauty/2.jpg',
            'assets/images/projects/true-beauty/3.jpg',
            'assets/images/projects/true-beauty/4.jpg'
        ]
    },
    'carrito': {
        title: 'Sistema de Pedidos con Carrito',
        images: [
            'assets/images/projects/carrito/1.jpg',
            'assets/images/projects/carrito/2.jpg',
            'assets/images/projects/carrito/3.jpg'
        ]
    },
    'restaurante': {
        title: 'Sistema Restaurante (Proyecto Grupal)',
        images: [
            'assets/images/projects/restaurante/1.jpg',
            'assets/images/projects/restaurante/2.jpg',
            'assets/images/projects/restaurante/3.jpg',
            'assets/images/projects/restaurante/4.jpg',
            'assets/images/projects/restaurante/5.jpg'
        ]
    }
};

// Variables globales de la galería
let currentProject = null;
let currentImageIndex = 0;
let galleryModal = null;
let galleryMainImg = null;
let galleryThumbnails = null;
let galleryTitle = null;
let galleryCounter = null;
let galleryPrev = null;
let galleryNext = null;
let galleryClose = null;

// Inicializar galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});

function initializeGallery() {
    // Obtener elementos del DOM
    galleryModal = document.getElementById('galleryModal');
    galleryMainImg = document.getElementById('galleryMainImg');
    galleryThumbnails = document.getElementById('galleryThumbnails');
    galleryTitle = document.getElementById('galleryTitle');
    galleryCounter = document.getElementById('galleryCounter');
    galleryPrev = document.getElementById('galleryPrev');
    galleryNext = document.getElementById('galleryNext');
    galleryClose = document.getElementById('galleryClose');

    // Agregar event listeners a los botones de galería
    document.querySelectorAll('.gallery-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = trigger.getAttribute('data-project');
            openGallery(projectId);
        });
    });

    // Event listeners para controles de la galería
    if (galleryClose) {
        galleryClose.addEventListener('click', closeGallery);
    }

    if (galleryPrev) {
        galleryPrev.addEventListener('click', () => navigateImage(-1));
    }

    if (galleryNext) {
        galleryNext.addEventListener('click', () => navigateImage(1));
    }

    // Cerrar galería al hacer clic en el overlay
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal || e.target.classList.contains('gallery-overlay')) {
                closeGallery();
            }
        });
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (galleryModal && galleryModal.classList.contains('active')) {
            switch (e.key) {
                case 'Escape':
                    closeGallery();
                    break;
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowRight':
                    navigateImage(1);
                    break;
            }
        }
    });
}

function openGallery(projectId) {
    const project = projectImages[projectId];

    if (!project || !project.images || project.images.length === 0) {
        console.warn('No se encontraron imágenes para el proyecto:', projectId);
        showNotification('No hay imágenes disponibles para este proyecto', 'info');
        return;
    }

    currentProject = projectId;
    currentImageIndex = 0;

    // Actualizar título
    if (galleryTitle) {
        galleryTitle.textContent = project.title;
    }

    // Cargar primera imagen
    loadImage(project.images[0]);

    // Generar miniaturas
    generateThumbnails(project.images);

    // Actualizar contador
    updateCounter();

    // Mostrar modal
    if (galleryModal) {
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    // Actualizar visibilidad de botones de navegación
    updateNavigationButtons(project.images.length);
}

function closeGallery() {
    if (galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll del body
    }

    // Limpiar variables
    currentProject = null;
    currentImageIndex = 0;
}

function loadImage(imageSrc) {
    if (galleryMainImg) {
        // Mostrar loading
        galleryMainImg.style.opacity = '0.5';

        // Crear nueva imagen para preload
        const img = new Image();
        img.onload = () => {
            galleryMainImg.src = imageSrc;
            galleryMainImg.style.opacity = '1';
        };
        img.onerror = () => {
            console.error('Error al cargar la imagen:', imageSrc);
            galleryMainImg.style.opacity = '1';
            showNotification('Error al cargar la imagen', 'error');
        };
        img.src = imageSrc;
    }
}

function generateThumbnails(images) {
    if (!galleryThumbnails) return;

    // Limpiar miniaturas existentes
    galleryThumbnails.innerHTML = '';

    images.forEach((imageSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'gallery-thumbnail';
        if (index === currentImageIndex) {
            thumbnail.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Imagen ${index + 1}`;
        img.loading = 'lazy';

        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            loadImage(imageSrc);
            updateThumbnails();
            updateCounter();
        });

        galleryThumbnails.appendChild(thumbnail);
    });
}

function updateThumbnails() {
    const thumbnails = galleryThumbnails.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function navigateImage(direction) {
    if (!currentProject) return;

    const project = projectImages[currentProject];
    if (!project || !project.images) return;

    currentImageIndex += direction;

    // Circular navigation
    if (currentImageIndex < 0) {
        currentImageIndex = project.images.length - 1;
    } else if (currentImageIndex >= project.images.length) {
        currentImageIndex = 0;
    }

    loadImage(project.images[currentImageIndex]);
    updateThumbnails();
    updateCounter();
}

function updateCounter() {
    if (!currentProject) return;

    const project = projectImages[currentProject];
    if (!project || !project.images) return;

    if (galleryCounter) {
        galleryCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
    }
}

function updateNavigationButtons(totalImages) {
    if (galleryPrev && galleryNext) {
        // Los botones siempre están visibles para navegación circular
        galleryPrev.style.display = 'flex';
        galleryNext.style.display = 'flex';
    }
}

// Función para agregar nuevas imágenes a un proyecto
function addProjectImages(projectId, images) {
    if (projectImages[projectId]) {
        projectImages[projectId].images = [...projectImages[projectId].images, ...images];
    } else {
        projectImages[projectId] = {
            title: 'Proyecto',
            images: images
        };
    }
}

// Función para actualizar el título de un proyecto
function updateProjectTitle(projectId, title) {
    if (projectImages[projectId]) {
        projectImages[projectId].title = title;
    }
} 