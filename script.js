const nombres = ['Andres', 'Barbara', 'Nicolas', 'Victor', 'Luna', 'Mariana'];
const iconos = Array.from(document.querySelectorAll('g.invisible'));
const carouselButtons = document.querySelector('.carousel-buttons');

carouselButtons.addEventListener('click', () => {
    setTimeout(() => {
        const cuerpo = document.querySelectorAll(".carousel-item.active");
        validarImagenes(cuerpo);
    }, 1000);
});

function validarImagenes([pierna, torzo, cabeza]) {
    // Verificar si las imágenes están en el orden correcto
    nombres.forEach(nombre => {
        if (pierna.id === `piernas${nombre}` && torzo.id === `torzo${nombre}` && cabeza.id=== `cabeza${nombre}`) {
            console.log('¡Las imágenes están acomodadas correctamente!');
            iconos.forEach(icono => {
                if(`mono${nombre}` === icono.id){
                    icono.classList.remove('invisible');
                }
            });
        }
    });
}

iconos.forEach(icono => icono.classList.add('transition'));


