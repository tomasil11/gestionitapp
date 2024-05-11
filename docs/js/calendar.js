// Definir variables

let nombreMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];

let fechaActual = new Date();
let variableI;
let validarMostrar;
let validaFormIngreso;
let baseDatosCronograma = [];
let datosCrono;
let contDatosCrono = [];
let varValorMesDiaYear;



let diaActual = fechaActual.getDate();
let numeroMes = fechaActual.getMonth();
let yearActual = fechaActual.getFullYear();

let infoCrono = document.getElementById('dates');
let datoMes = document.getElementById('month');
let datoYear = document. getElementById('year');

let flechaPrev = document.getElementById('prev-month');
let flechaSiguiente = document.getElementById('next-month');
let verDiaMes = document.getElementById('diaMes');

let verElDia = document.getElementById('dia');

let varBtnCancelar = document.getElementById('cancelar');
let editarBtnCancelar = document.getElementById('cancela');
console.log(numeroMes);



let formularioIR = document.querySelector('#inserEvento');
let formularioER = document.querySelector('#editarEvento');

let verMensajeEvento1 = document.getElementById('VerEventoCaja1');
let verContEvento = document.getElementById('verContenido');



datoMes.textContent = nombreMeses[numeroMes];
datoYear.textContent = yearActual.toString();

EscribirMes(numeroMes);

/* Ocultar el formulario para crear el evento    */
const verCajaEvento = document.querySelector('.formEvento');

/*  Aparece formulario para crear el evento    */
const mostrarCajaEvento = document.getElementById('creaEvento');
const eventoDia = document.getElementById('evenDia');


// Definir Funciones

function EscribirMes(numeroMes) {
    
    let year = yearActual;

    let contDatosCrono = JSON.parse(localStorage.getItem('baseDatosInfo'));
    
    for (let i = DiaInicioMes();i>0; i--){
        infoCrono.innerHTML += '<div class= "calendar__day calendar__item">'+ 
        ' ' +'</div>';
    }
    
        for (let i=1; i <= CalcularTotalDias(numeroMes); i++) {
        let validaDiaMes = '' + numeroMes + i + year + numeroMes;     
        if (i === diaActual) {
        infoCrono.innerHTML += '<div class= "calendar__day calendar__item calendar__today"><a onclick="EventosCalendario(numeroMes,'+i+')" id="elDia'+i+'">'
        + i +'</div>';
        verDiaMes.innerHTML = i + ' de ' + nombreMeses[numeroMes];
            }  else {
                    infoCrono.innerHTML += 
                    '<div class= "calendar__day calendar__item"><a onclick="EventosCalendario(numeroMes,'+i+')" id="elDia'+i+'">'
                    + i +'</a></div>';
                } 

                for (let j=0; j<= (contDatosCrono.length)-1; j++) {
                    let addClase = document.getElementById('elDia'+i);
                    if (validaDiaMes === contDatosCrono[j].mesDia) {
                        
                        if (contDatosCrono[j].tipoEvento == 1) {
                            
                            addClase.classList.add('calendar__event1');
                        } else {
                            if (contDatosCrono[j].tipoEvento == 2) {
                                addClase.classList.add('calendar__event2');
                            } else {
                                addClase.classList.add('calendar__event3');
                            }
                        }
                        
                    }
                }
            }  
            

        }
    
function CalcularTotalDias(numeroMes) {
    if (numeroMes === -1) numeroMes=11;

    if (numeroMes == 0 || numeroMes == 2 || numeroMes == 4 || numeroMes == 6 || numeroMes == 7 || numeroMes == 9 
        || numeroMes == 11) {
            return 31;
        } else {
            if (numeroMes == 3 || numeroMes == 5 || numeroMes == 8 || numeroMes == 10){
                return 30;
            } else {
                return Bisiesto() ? 29:28;
            }
        }
}

function Bisiesto() {
    return ((yearActual % 100 !== 0) && (yearActual % 4 === 0 ) || (yearActual % 400 === 0)); 
        
}

function DiaInicioMes(){
    let diaInicio = new Date(yearActual, numeroMes, 1);
    return ((diaInicio.getDay()-1) === -1) ? 6: diaInicio.getDay()-1;
}

function MesAnterior() {
    
    if (numeroMes !== 0) {
        numeroMes--;
    } else {
        numeroMes = 11;
        yearActual--;
    }
    NuevoMes();
    verMensajeEvento1.innerHTML = '';
    verContEvento.innerHTML = '';
}

function MesSiguiente() {
    if (numeroMes !== 11) {
        numeroMes++;
    } else {
        numeroMes = 0;
        yearActual++;
    }
    NuevoMes();
    verMensajeEvento1.innerHTML = '';
    verContEvento.innerHTML = '';
    
}

function NuevoMes() {
    
    fechaActual.setFullYear(yearActual,numeroMes,diaActual);
    datoMes.textContent = nombreMeses[numeroMes];
    datoYear.textContent = yearActual.toString();

    infoCrono.textContent = '';
    EscribirMes(numeroMes);
    
}

function actualizarCronograma() {
    infoCrono.textContent = '';
    EscribirMes(numeroMes);
    
}



function EventosCalendario(numeroMes, vari) {
    
    if (!validarMostrar) {
        
        validarMostrar = eventoDia.classList.toggle('mostrar');
        verDiaMes.innerHTML = vari + ' de ' + nombreMeses[numeroMes];
        variableI = vari;
        mostrarElEvento(numeroMes, vari, yearActual);
    } else {
        if (!validaFormIngreso) {
            
            verDiaMes.innerHTML = vari + ' de ' + nombreMeses[numeroMes];
            variableI = vari;
            mostrarElEvento(numeroMes, vari, yearActual);
        } else {
            
            verDiaMes.innerHTML = vari + ' de ' + nombreMeses[numeroMes];
            variableI = vari;
            formCreaEvento(numeroMes, variableI);
            mostrarElEvento(numeroMes, vari, yearActual);
            
        }
        
    }
    
     
}

const formCreaEvento = (numeroMes, variableI) => {
    verContEvento.innerHTML = '';
    if (!validaFormIngreso) {
        validaFormIngreso = verCajaEvento.classList.toggle('mostrar');
        verElDia.innerHTML = ' ' + variableI;
    } else {
        verElDia.innerHTML = variableI;
    }
    
    
}

const registraEventoDia = (e, mes, dia, yearActual) => {
    e.preventDefault();
    
    let varMesDia = ''+ mes + dia + yearActual + mes;
    let varTipoEvento = document.getElementById('tipoEven').value;
    let varEvento = document.getElementById('miEvento').value;
    let varHoraInicio = document.getElementById('miHora').value;
    let varObservacion = document.getElementById('mi_observa').value;
    let cuenta = 0;
        
    datosCrono = {
        mesDia : varMesDia,
        tipoEvento : varTipoEvento,
        evento : varEvento,
        horaInicio : varHoraInicio,
        observacion : varObservacion
    }
    baseDatosCronograma.push(datosCrono);
    let existeInfor = JSON.parse(localStorage.getItem('baseDatosInfo'));
    if (!existeInfor) {
        localStorage.setItem('baseDatosInfo', JSON.stringify(baseDatosCronograma));
    } 
        for (let i=0; i<= existeInfor.length-1; i++) {
            if ((datosCrono.mesDia == existeInfor[i].mesDia) && (datosCrono.tipoEvento == existeInfor[i].tipoEvento)) {
                cuenta++;
                
            } 
        }
        
    if (cuenta == 0) {
        
            existeInfor.push(datosCrono);
            localStorage.setItem('baseDatosInfo', JSON.stringify(existeInfor));
            
        
    } else {
        alert('Ya existe un evento de ese tipo');
        formularioIR.reset();
        return false;
    }
        
    
    
    validaFormIngreso = verCajaEvento.classList.toggle('mostrar');
    formularioIR.reset();
    
    // En este código resalta el día ingresado en el formulario
    let addClase = document.getElementById('elDia'+dia);
    if (existeInfor.tipoEvento === 1) {
        addClase.classList.add('calendar__event1');
    } else {
        if (existeInfor.tipoEvento === 2) {
            addClase.classList.add('calendar__event2');
        } else {
            addClase.classList.add('calendar__event3');
        }
    }
    actualizarCronograma();
    validarMostrar = eventoDia.classList.toggle('mostrar');
    //mostrarElEvento(mes, dia, yearActual);
}

function mostrarElEvento(numeroMes, vari, yearActual) {
    cont = 0;
    verContEvento.innerHTML = '';
    verMensajeEvento1.innerHTML = '';
    let validaMesyDia = '' + numeroMes + vari + yearActual + numeroMes;
    let varEventosBaseDatos = JSON.parse(localStorage.getItem('baseDatosInfo'));
    varEventosBaseDatos.forEach(index => {
    varValorMesDiaYear = validaMesyDia;
    if ((validaMesyDia === index.mesDia) && (index.tipoEvento == 1)){
    cont++;
    verMensajeEvento1.innerHTML += `<div class="verCajaEvento1" id="VerEventoCaja1"> 
    <a onclick="contenidoVerEvento(${varValorMesDiaYear}, ${index.tipoEvento})">
    <strong>Evento:</strong> ${index.evento}</a></div>`;
                       
    } else {
        if ((validaMesyDia === index.mesDia) && (index.tipoEvento == 2)){
            cont++;
            verMensajeEvento1.innerHTML += `<div class="verCajaEvento2" id="VerEventoCaja1"> 
            <a onclick="contenidoVerEvento(${varValorMesDiaYear}, ${index.tipoEvento})">
            <strong>Evento:</strong> ${index.evento}</a></div>`;
                               
            }  else {
                if ((validaMesyDia === index.mesDia) && (index.tipoEvento == 3)){
                    cont++;
                    verMensajeEvento1.innerHTML += `<div class="verCajaEvento3" id="VerEventoCaja1"> 
                    <a onclick="contenidoVerEvento(${varValorMesDiaYear}, ${index.tipoEvento})">
                    <strong>Evento:</strong> ${index.evento}</a></div>`;
                                       
                    }
            }
    } 
       if (cont == 0) {
        verMensajeEvento1.classList.remove('verCajaEvento');
       } 
    });
}

const contenidoVerEvento = (varValorMesDiaYear, tipodEvento) => {
    verMensajeEvento1.innerHTML = '';
    
    let varEventosBaseDatos2 = JSON.parse(localStorage.getItem('baseDatosInfo'));
    varEventosBaseDatos2.forEach(element => {
        
        if ((varValorMesDiaYear == element.mesDia) && (tipodEvento == element.tipoEvento)) {
            let indice = varEventosBaseDatos2.findIndex(
                objeto => ((objeto.mesDia == element.mesDia) && (objeto.tipoEvento == element.tipoEvento)));
            verMensajeEvento1.innerHTML = `<div class="verCajaEvento" id="VerEventoCaja1"><strong>Evento:</strong> 
            ${element.evento}
            </div>`;

            verContEvento.innerHTML = `<div class="verContenidoEvento verFondo" id="verContenido">
            <strong><i>Hora inicio:</i></strong> ${element.horaInicio}<br>
            <strong><i>Observación:</i></strong> ${element.observacion}
            </div>
            
            <div class="verBotonesEdicion" id="verBot">
            <span class="editarEvento" id="editaEvento">
            <a onclick="EditaEvento(${indice})"><img src="img/button_editar.png"></a></span>
            <span class="eliminaEvento" id="deleteEvento">
            <a onclick="EliminaEvento(${indice})"><img src="img/button_eliminar.png"></a></span>
            
            </div>
            `;
        }
    });
    
}

const EliminaEvento = (index) => {
    let varEventosBaseDatos2 = JSON.parse(localStorage.getItem('baseDatosInfo'));
    let objetoEliminado = varEventosBaseDatos2.splice(index, 1);
    localStorage.setItem('baseDatosInfo', JSON.stringify(varEventosBaseDatos2));
    //mostrarElEvento(numeroMes, diaActual, yearActual);
    //NuevoMes();
    actualizarCronograma();
    verMensajeEvento1.innerHTML = '';
    verContEvento.innerHTML = '';
    
}

const EditaEvento = (index) => {
    let varEventosBaseDatos2 = JSON.parse(localStorage.getItem('baseDatosInfo'));
    let arrayEventos = varEventosBaseDatos2[index];
    let tipEvento;
    if (arrayEventos.tipoEvento == 1) {
        tipEvento = 'Personal';
    } else {
        if (varEventosBaseDatos2[index].tipoEvento == 2) {
            tipEvento = 'Institucional';
        } else {
            tipEvento = 'Cumpleaños';
        }
    }
    let escribirTipoEvento = document.getElementById('tipoEven');
    verContEvento.innerHTML =
    `
    <form name="editaEvento" id="editarEvento" class="formularioEdita">
        <fieldset style="border:2px solid #3943b7">
        <legend> Editar Evento:</legend>
        <label>Tipo de evento:</label>
        ${tipEvento}
        <br>
                    
        <label>Hora de Inicio:
        <input type="time" name="laHora" id="miHora" value="${arrayEventos.horaInicio}"></label>
        <br><br>
        <div id="observacion">
        <label>Observación:<textarea name="observa" id="mi_observa" cols="30" rows="2">${arrayEventos.observacion}</textarea></label>
        <br><br>
        </div>
        <div class="botones">
        <button type="submit" class="claseBtnIngresa">Ingresar</button>
                                                   
        <button onclick="edicionBtnCancela()" class="botonCancela" id="cancela">
        Cancelar
        </button>
        </div>
        </fieldset>
        <input type="hidden" id="valorIndex" name="valIndex" value="${index}">
    </form>
    `

}


const EditarElEvento = (e) => {
    e.preventDefault();
    let indice = document.getElementById('valorIndex').value;
    let varEventosBaseDatos2 = JSON.parse(localStorage.getItem('baseDatosInfo'));
    let arrayEvent = varEventosBaseDatos2[indice];
    varEventosBaseDatos2.splice(indice, 1, {
    mesDia : arrayEvent.mesDia,
    tipoEvento : arrayEvent.tipoEvento,
    evento : arrayEvent.evento,
    horaInicio : document.getElementById('miHora').value,
    observacion : document.getElementById('mi_observa').value,
    });
    localStorage.setItem('baseDatosInfo', JSON.stringify(varEventosBaseDatos2));
    contenidoVerEvento(arrayEvent.mesDia, arrayEvent.tipoEvento);
    
}

const edicionBtnCancela = () => {
    mostrarElEvento();
}

// Definir Eventos

flechaPrev.addEventListener('click', () => MesAnterior());
flechaSiguiente.addEventListener('click', () => MesSiguiente());

mostrarCajaEvento.addEventListener('click', () => formCreaEvento(numeroMes, variableI)); 

formularioIR.addEventListener('submit', (e) => registraEventoDia(e, numeroMes, variableI, yearActual));

varBtnCancelar.addEventListener('click', () => {
    validaFormIngreso = verCajaEvento.classList.toggle('mostrar');
    return false;
    
});

formularioER = addEventListener('submit', (e) => EditarElEvento(e));




