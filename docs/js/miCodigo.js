// Variables
const miMenu = document.getElementById('imgMen');
const linkInicio = document.getElementById('home');

const verMenu = document.getElementById('menu');
const linksMod = document.getElementsByClassName('act2');

const verTitulo = document.getElementById('miTituloCentral');

const targets = document.querySelectorAll('[data-target]');

const targets2 = document.querySelectorAll('[data-target2]');

const contenido = document.querySelectorAll('[data-content]');


// Funciones


// EventListener
//Evento para desplegar el menú de la izquierda
miMenu.addEventListener('click', () => {
    
    verMenu.classList.toggle('mostrar');
}) 


targets.forEach(target => {
    target.addEventListener('click', () => {
        
        contenido.forEach(c => {
            c.classList.remove('active');
        })
        
        const t = document.querySelector(target.dataset.target);
        verTitulo.innerHTML = t.title;
        t.classList.add('active');
        verMenu.classList.toggle('mostrar');
    })
    
})

// evento para el funcionamiento del menú horizontal
targets2.forEach(target2 => {
    target2.addEventListener('click', () => {
        
        targets2.forEach(re => {
            re.classList.remove('active2');
        })
        contenido.forEach(c => {
            c.classList.remove('active');
            
        })
        
        const t2 = document.querySelector(target2.dataset.target2);
        t2.classList.add('active');
        const cambiarOpc = document.getElementById(target2.id);
        cambiarOpc.classList.toggle('active2');
    })
})


