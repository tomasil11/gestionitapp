let baseDatosCrono = [];
let varHoraInicio, varObservacion;
/*  Arreglo con la información del Cronograma
    Para el dato mesDia tener en cuenta que el orden (m/d/aaaa) - Enero = 0; Diciembre = 11
    El tipo de evento (1: Personal - 2: Institucional - 3: Cumpleaños)
*/
baseDatosCrono = [
    {
    mesDia : '6620246',
    tipoEvento : "3",
    evento : 'Cumpleaños profesor Edwin Vargas Galvis',
    horaInicio : '',
    observacion : '',
    },
    {
    mesDia : '51620245',
    tipoEvento : "2",
    evento : 'Día de la Santandereanidad',
    horaInicio : '',
    observacion : 'Responsable: Grado Undécimo',
    }

]


let validacion = JSON.parse(localStorage.getItem('baseDatosInfo'));
if (validacion === null) {
    localStorage.setItem('baseDatosInfo', JSON.stringify(baseDatosCrono));
    
} 