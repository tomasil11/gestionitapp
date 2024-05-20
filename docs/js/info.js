let baseDatosCrono, cronoBD, backupCronoBD = [];
let varHoraInicio, varObservacion;
/*  Arreglo con la información del Cronograma
    Para el dato mesDia tener en cuenta que el orden (m/d/aaaa) - Enero = 0; Diciembre = 11
    El tipo de evento (1: Personal - 2: Institucional - 3: Cumpleaños)
*/
baseDatosCrono = [
    {
    mesDia : '42020244',
    tipoEvento : "2",
    evento : 'REUNIÓN CONSEJO DIRECTIVO',
    horaInicio : '',
    observacion : 'RECTORÍA',
    },
    {
    mesDia : '43020244',
    tipoEvento : "2",
    evento : 'REUNIÓN CONSEJO ESTUDIANTIL',
    horaInicio : '',
    observacion : 'CONSEJO ESTUDIANTIL, PERSONERO',
    },
    {
    mesDia : '5520245',
    tipoEvento : "2",
    evento : 'DIRECCIÓN DE GRADO',
    horaInicio : '',
    observacion : 'DOCENTES Y DIRECTIVOS',
    },
    {
    mesDia : '5620245',
    tipoEvento : "2",
    evento : 'DÍA DE LA FAMILIA',
    horaInicio : '',
    observacion : 'DOCENTES Y DIRECTIVOS, ESTUDIANTES',
    },
    {
    mesDia : '5720245',
    tipoEvento : "2",
    evento : 'JUNTA  TÉCNICA',
    horaInicio : '',
    observacion : 'RECTORÍA',
    },
    {
        mesDia : '51220245',
        tipoEvento : "2",
        evento : 'REUNIÓN CONSEJO DIRECTIVO',
        horaInicio : '',
        observacion : 'RECTORÍA',
        },
        {
            mesDia : '51320245',
            tipoEvento : "2",
            evento : 'DÍA DEL ESTUDIANTE',
            horaInicio : '',
            observacion : 'COMUNIDAD EDUCATIVA',
            },
            {
                mesDia : '51720245',
                tipoEvento : "2",
                evento : 'ANÁLISIS DE COMPORTAMIENTO. Y COMITÉ DE CONVIVENCIA',
                horaInicio : '',
                observacion : 'DIRECTORES DE GRADO',
                },
                {
                    mesDia : '51820245',
                    tipoEvento : "2",
                    evento : 'REUNIÓN DE COMISIÓN PROMOCIÓN Y EVALUACIÓN SEGUNDO PERIODO',
                    horaInicio : '',
                    observacion : 'COORDINACIÓN, DOCENTE PRIMARIA Y BACHILLERATO',
                    },
                    {
                        mesDia : '51920245',
                        tipoEvento : "2",
                        evento : 'CARGUE DE NOTAS EN PLATAFORMA. Y REUNIÓN CONSEJO ACADÉMICO',
                        horaInicio : '',
                        observacion : 'DOCENTES Y DIRECTIVOS',
                        }
                        

]

let validacion = JSON.parse(localStorage.getItem('baseDatosInfo'));
if (validacion === null) {
    localStorage.setItem('baseDatosInfo', JSON.stringify(baseDatosCrono));
    
} 