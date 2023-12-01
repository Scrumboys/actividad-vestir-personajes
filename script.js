const nombres = ['Andres', 'Barbara', 'Nicolas', 'Victor', 'Luna', 'Mariana'];
const iconos = Array.from(document.querySelectorAll('g.invisible'));
const carouselButtons = document.querySelector('.carousel-buttons');
const imgCabeza = ['cabezaAndres', 'cabezaBarbara','cabezaNicolas','cabezaLuna','cabezaVictor','cabezaMariana'];
const imgTorzo = ['torzoAndres', 'torzoBarbara','torzoNicolas','torzoLuna', 'torzoVictor','torzoMariana'];
const imgPiernas =['piernasAndres','piernasBarbara','piernasNicolas','piernasLuna','piernasVictor','piernasMariana'];


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
function mezclarImagenes() {
    // Obtén una imagen aleatoria de cada arreglo
    const cabezaAleatoria = imgCabeza[Math.floor(Math.random() * imgCabeza.length)];
    const torzoAleatorio = imgTorzo[Math.floor(Math.random() * imgTorzo.length)];
    const piernasAleatorias = imgPiernas[Math.floor(Math.random() * imgPiernas.length)];

    const cabezaActiva = document.getElementById(cabezaAleatoria);
    document.getElementById("cabezaAndres").classList.remove("active");
    cabezaActiva.classList.add("active");

    const torzoActivo = document.getElementById(torzoAleatorio);
    document.getElementById("torzoAndres").classList.remove("active");
    torzoActivo.classList.add("active");

    const piernasActiva = document.getElementById(piernasAleatorias);
    document.getElementById("piernasAndres").classList.remove("active");
    piernasActiva.classList.add("active");

    // Combina las tres imágenes
    const imagenFinal = cabezaAleatoria + ' ' + torzoAleatorio + ' ' + piernasAleatorias;
    // Muestra la imagen final en la consola (puedes ajustar esto según tus necesidades)
    console.log(imagenFinal);
    }

iconos.forEach(icono => icono.classList.add('transition'));
mezclarImagenes();

