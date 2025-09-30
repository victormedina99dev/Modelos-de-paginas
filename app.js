document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.querySelector('.dots-container');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // 1. Crear los indicadores (dots)
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
    }

    const dots = document.querySelectorAll('.dot');

    // Función principal para mover el carrusel
    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1; // Volver al final
        } else if (index >= totalSlides) {
            index = 0; // Volver al inicio
        }

        currentIndex = index;
        
        // Mueve el contenedor completo para mostrar la diapositiva correcta
        const offset = -currentIndex * 100;
        wrapper.style.transform = `translateX(${offset}vw)`;

        // Actualiza la clase 'active' de los dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Inicializar: mostrar el primer dot como activo
    goToSlide(0);

    // 2. Eventos de los botones de navegación
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // 3. (Opcional) Navegación con teclas de flecha
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
        }
    });
});