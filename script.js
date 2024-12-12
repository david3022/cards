

// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.container');
//     const card3 = document.querySelector('.card3');
    
    
//     function startAnimation() {
//         container.classList.add('animate-card3');
//     }

    
//     startAnimation();

   
//     card3.addEventListener('animationend', () => {
//         container.classList.add('animate-others');
//     });

    
//     let hasScrolled = false;
//     window.addEventListener('scroll', () => {
//         if (!hasScrolled) {
//             hasScrolled = true;
//             console.log('Se ha hecho scroll');
//         }
//     }, { once: true });
// });


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const card3 = document.querySelector('.card3');
    
    // Función para activar la animación de card3
    function startAnimation() {
        container.classList.add('animate-card3');
    }

    // Activar la animación de card3 inmediatamente
    startAnimation();

    // Escuchar el final de la animación de card3
    card3.addEventListener('animationend', () => {
        container.classList.add('animate-others');

        // Ajustar la posición de las tarjetas 1, 2, 6 y 7 para que se muestren
        const cards = document.querySelectorAll('.card1, .card2, .card6, .card7');
        cards.forEach(card => {
            card.style.position = 'static';
            card.style.opacity = '1';
        });
    });

    // Mantener el evento de scroll por si se quiere usar más adelante
    let hasScrolled = false;
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            console.log('Se ha hecho scroll');
        }
    }, { once: true });
});
