const nombres = ['Andres', 'Barbara', 'Nicolas', 'Victor', 'Luna', 'Mariana'];

const iconos = Array.from(document.querySelectorAll('g.invisible'));
const carouselButtons = document.querySelector('.carousel-buttons');

let imgCabeza = ['cabezaAndres', 'cabezaBarbara','cabezaNicolas','cabezaLuna','cabezaVictor','cabezaMariana'];
let imgTorzo = ['torzoAndres', 'torzoBarbara','torzoNicolas','torzoLuna', 'torzoVictor','torzoMariana'];
let imgPiernas =['piernasAndres','piernasBarbara','piernasNicolas','piernasLuna','piernasVictor','piernasMariana'];

const pantallaVestirPersonajes = document.querySelector('#pantallaVestirPersonajes');
const pantallaInicio = document.querySelector('#pantallaInicio');
const pantallaFinal = document.querySelector('#pantallaFinal');

let puntos = 0;

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
            
            iconos.forEach(icono => {
                if(`mono${nombre}` === icono.id){
                    if(icono.classList.contains('invisible')) {
                        icono.classList.remove('invisible');
                        puntos++;
                        if(puntos == 6) {
                            const clientRect = document.getElementsByClassName('Vestir-personajes')[0].getClientRects();
                            pantallaFinal.style.display = 'grid';    
                            pantallaFinal.style.height = `${clientRect[0].height}px`;
                            console.log(clientRect[0].height);
                        }
                    }   
                }
            });

        }
    });
}

function mezclarImagenes() {

    // Obtén una imagen aleatoria de cada arreglo
    const arregloCabezas = document.querySelector('#arregloCabezas').querySelectorAll('g');
    const arregloTorzo = document.querySelector('#arregloTorzo').querySelectorAll('g');
    const arregloPiernas = document.querySelector('#arregloPiernas').querySelectorAll('g');

    const cabezaAleatoria = imgCabeza[Math.floor(Math.random() * imgCabeza.length)];
    const torzoAleatorio = imgTorzo[Math.floor(Math.random() * imgTorzo.length)];
    const piernasAleatorias = imgPiernas[Math.floor(Math.random() * imgPiernas.length)];

    arregloCabezas.forEach(cabeza => {
        if(cabeza.classList.contains('active')) cabeza.classList.remove('active');
    });

    arregloPiernas.forEach(piernas => {
        if(piernas.classList.contains('active')) piernas.classList.remove('active');
    });

    arregloTorzo.forEach(torzo => {
        if(torzo.classList.contains('active')) torzo.classList.remove('active');
    });

    console.log(cabezaAleatoria, torzoAleatorio, piernasAleatorias);
    document.getElementById(cabezaAleatoria).classList.add("active");

    document.getElementById(torzoAleatorio).classList.add("active");

    document.getElementById(piernasAleatorias).classList.add("active");

}

document.querySelector('#botonjugar').addEventListener('click', () => {
    pantallaInicio.style.display = 'none';
    pantallaVestirPersonajes.style.display = 'grid';

    iconos.forEach(icono => icono.classList.add('invisible'));

    puntos = 0;

    mezclarImagenes();
});

document.querySelector('#botonjugardenuevo').addEventListener('click', () => {
    pantallaFinal.style.display = 'none';
    iconos.forEach(icono => icono.classList.add('invisible'));

    puntos = 0;

    mezclarImagenes();
    
    pantallaVestirPersonajes.style.display = 'grid';
});

document.querySelector('#botonsalir').addEventListener('click', () => {
    window.parent.postMessage({ type: 'salirDeActividad', args: [] }, '*');
});