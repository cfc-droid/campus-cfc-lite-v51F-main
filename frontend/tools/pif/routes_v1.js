/* =========================================================
routes_v1.js
Motor de rutas financieras obligatorias
========================================================= */

export const ROUTES_V1 = {

/* =====================================================
EJEMPLO COMPLETO 1
===================================================== */

EVITADOR_FINANCIERO: {

  route_name: "Salir del escondite",

  steps: [
    {
      id: 1,
      title: "Visibilidad mínima segura",
      why: "Intentar mejorar sin mirar primero te mantiene atrapado."
    },
    {
      id: 2,
      title: "Reducir ansiedad asociada al dinero",
      why: "La ansiedad bloquea cualquier orden sostenible."
    },
    {
      id: 3,
      title: "Micro-orden pasivo",
      why: "Automatizar reduce evitación."
    }
  ],

  blocked_strict: [
    "Inversión",
    "Optimización financiera",
    "Metas agresivas"
  ],

  not_recommended: [
    "Planificación compleja"
  ],

  allowed_focus: [
    "Observación financiera básica"
  ]

},

/* =====================================================
EJEMPLO COMPLETO 2
===================================================== */

INVERSOR_PREMATURO: {

  route_name: "Base antes de riesgo",

  steps: [
    {
      id: 1,
      title: "Fondo mínimo de estabilidad",
      why: "Sin base emocional la inversión aumenta ansiedad."
    },
    {
      id: 2,
      title: "Eliminar deuda emocional",
      why: "La deuda alimenta impulsividad."
    },
    {
      id: 3,
      title: "Control del gasto reactivo",
      why: "Reduce sabotaje financiero."
    },
    {
      id: 4,
      title: "Recién después: inversión",
      why: "La inversión sin orden genera abandono."
    }
  ],

  blocked_strict: [
    "Trading",
    "Cripto",
    "Inversión inmediata"
  ],

  not_recommended: [
    "Activos volátiles"
  ],

  allowed_focus: [
    "Educación financiera pasiva"
  ]

},

/* =====================================================
PLACEHOLDERS RESTANTES
===================================================== */

COMPENSADOR_EMOCIONAL: placeholderRoute(),
DESORDENADO_CRONICO: placeholderRoute(),
CONTROLADOR_ANSIOSO: placeholderRoute(),
AHORRADOR_SIN_PROPOSITO: placeholderRoute(),
ASPIRACIONAL_DESALINEADO: placeholderRoute(),
RACIONAL_DESCONECTADO: placeholderRoute(),
ORDENADO_FUNCIONAL: placeholderRoute()

};


/* ===================================================== */

function placeholderRoute() {
  return {
    route_name: "",
    steps: [],
    blocked_strict: [],
    not_recommended: [],
    allowed_focus: []
  };
}
