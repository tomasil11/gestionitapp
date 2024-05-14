let baseDatosCrono = [];
let varHoraInicio, varObservacion;
/*  Arreglo con la información del Cronograma
    Para el dato mesDia tener en cuenta que el orden (m/d/aaaa) - Enero = 0; Diciembre = 11
    El tipo de evento (1: Personal - 2: Institucional - 3: Cumpleaños)
*/
baseDatosCrono = [
    {
    mesDia : '5620245',
    tipoEvento : "3",
    evento : 'Cumpleaños profesor Edwin Vargas Galvis',
    horaInicio : '',
    observacion : '',
    },
    {
    mesDia : '41620244',
    tipoEvento : "2",
    evento : 'Día de la Santandereanidad',
    horaInicio : '',
    observacion : 'Responsable: Grado Undécimo',
    },
    {
    mesDia : '62320246',
    tipoEvento : "1",
    evento : 'Actividad familiar',
    horaInicio : '',
    observacion : '',
        }

]


let validacion = JSON.parse(localStorage.getItem('baseDatosInfo'));
if (validacion === null) {
    localStorage.setItem('baseDatosInfo', JSON.stringify(baseDatosCrono));
    
} 