const mongoose = require('mongoose');

const cedulaPolicial = new mongoose.Schema({
    usuario: {
        type: 'string',
        defaultsTo: '',
        required: false,
    },
    nombre: {
        type: 'string',
        defaultsTo: '',
        required: true,
    },
    apellido_paterno: {
        type: 'string',
        defaultsTo: '',
        required: true,
    },
    apellido_materno: {
        type: 'string',
        defaultsTo: '',
    },
    nombre_completo: {
        type: 'string',
        defaultsTo: '',
    },
    fnacimiento: {
        type: 'date',
        defaultsTo: '',
    },
    sexo: {
        type: 'string',
        defaultsTo: '',
    },
    rfc: {
        type: 'string',
        defaultsTo: '',
    },
    elector: {
        type: 'string',
        defaultsTo: '',
    },
    cartilla: {
        type: 'string',
        defaultsTo: '',
    },
    licencia_conducir: {
        type: 'string',
        defaultsTo: ''
    },
    vigencia_licencia: {
        type: 'date',
        defaultsTo: ''
    },
    curp: {
        type: 'string',
        defaultsTo: '',
    },
    pasaporte: {
        type: 'string',
        defaultsTo: ''
    },
    modo_nacionalidad: {
        type: 'string',
        defaultsTo: '',
    },
    fnaturalizacion: {
        type: 'date',
        defaultsTo: '',
    },
    pais_nacimiento: {
        type: 'string',
        defaultsTo: '',
    },
    entidad: {
        type: 'string',
        defaultsTo: '',
    },
    municipio: {
        type: 'string',
        defaultsTo: '',
    },
    ciudad_nacimiento: {
        type: 'string',
        defaultsTo: '',
    },
    nacionalidad: {
        type: 'string',
        defaultsTo: '',
    },
    estado_civil: {
        type: 'string',
        defaultsTo: '',
    },
    cuip: {
        type: 'string',
        defaultsTo: ''
    },
    folio: {
        type: 'string',
        defaultsTo: ''
    },
    status: {
        type: 'string',
        defaultsTo: 'ACTIVO'
    },
    academico: {
        type: 'array',
        defaultsTo: []
    },
    domicilio: {
        type: 'array',
        defaultsTo: []
    },
    adscripcion: {
        type: 'array',
        defaultsTo: []
    },
    experiencia_docente: {
        type: 'array',
        defaultsTo: []
    },
    referencias: {
        type: 'array',
        defaultsTo: []
    },
    socioeconomico: {
        type: 'array',
        defaultsTo: []
    },
    dependientes_economicos: {
        type: 'array',
        defaultsTo: []
    },
    prestaciones: {
        type: 'array',
        defaultsTo: []
    },
    armamento_asignado: {
        type: 'array',
        defaultsTo: []
    },
    vehiculo_asignado: {
        type: 'array',
        defaultsTo: []
    },
    equipo_asignado: {
        type: 'array',
        defaultsTo: []
    },
    empleos_ssp: {
        type: 'array',
        defaultsTo: []
    },
    empleos_diversos: {
        type: 'array',
        defaultsTo: []
    },
    actitud_laboral: {
        type: 'array',
        defaultsTo: []
    },
    disciplina_policial: {
        type: 'array',
        defaultsTo: []
    },
    capacitacion: {
        type: 'array',
        defaultsTo: []
    },
    idiomas: {
        type: 'array',
        defaultsTo: []
    },
    habilidades: {
        type: 'array',
        defaultsTo: []
    },
    agrupaciones: {
        type: 'array',
        defaultsTo: []
    },
    sanciones: {
        type: 'array',
        defaultsTo: []
    },
    resoluciones_ministeriales: {
        type: 'array',
        defaultsTo: []
    },
    estimulos_recibidos: {
        type: 'array',
        defaultsTo: []
    },
    media_filiacion: {
        type: 'array',
        defaultsTo: []
    },
    senas_particulares: {
        type: 'array',
        defaultsTo: []
    },
    ficha_fotografica: {
        type: 'array',
        defaultsTo: []
    },
    documentos: { type: 'json', defaultsTo: {} },
    status_elemento: {
        type: 'array',
        defaultsTo: [{ "status_elemento": "ACTIVO", "createdAt": new Date() }]
    },
    baja: {
        type: 'array',
        defaultsTo: []
    },
    createdAt: {
      type: 'date',
    },
  });

  module.exports = {
    cedulaPolicial
  }