/* =========================================================
routes_v1.js
Motor de rutas financieras obligatorias
========================================================= */

export const ROUTES_V1 = {

/* ===================================================== */
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

/* ===================================================== */
COMPENSADOR_EMOCIONAL: {

  route_name: "Separar emoción de dinero",

  steps: [
    {
      id: 1,
      title: "Identificar disparadores emocionales de gasto",
      why: "Sin detectar el disparador, el gasto impulsivo se repite."
    },
    {
      id: 2,
      title: "Crear fricción antes de gastar",
      why: "La fricción rompe el automatismo emocional."
    },
    {
      id: 3,
      title: "Recién después: orden financiero básico",
      why: "Ordenar números sin regular emociones genera recaídas."
    }
  ],

  blocked_strict: [
    "Presupuestos estrictos",
    "Inversión",
    "Ahorro forzado"
  ],

  not_recommended: [
    "Control financiero rígido"
  ],

  allowed_focus: [
    "Observación emocional del gasto"
  ]
},

/* ===================================================== */
DESORDENADO_CRONICO: {

  route_name: "Estructura antes de optimización",

  steps: [
    {
      id: 1,
      title: "Crear sistema financiero mínimo",
      why: "Sin estructura básica, cualquier mejora se pierde."
    },
    {
      id: 2,
      title: "Reducir reactividad financiera",
      why: "Vivir apagando incendios impide sostener hábitos."
    },
    {
      id: 3,
      title: "Estabilizar hábitos financieros simples",
      why: "La consistencia vale más que la optimización."
    }
  ],

  blocked_strict: [
    "Optimización financiera",
    "Inversión",
    "Estrategias complejas"
  ],

  not_recommended: [
    "Diversificación avanzada"
  ],

  allowed_focus: [
    "Orden operativo básico"
  ]
},

/* ===================================================== */
CONTROLADOR_ANSIOSO: {

  route_name: "Reducir rigidez financiera",

  steps: [
    {
      id: 1,
      title: "Reducir sobreanálisis financiero",
      why: "El exceso de análisis paraliza decisiones."
    },
    {
      id: 2,
      title: "Simplificar sistemas de control",
      why: "Los sistemas complejos aumentan ansiedad."
    },
    {
      id: 3,
      title: "Introducir tolerancia a la incertidumbre",
      why: "Sin tolerancia, el control se vuelve patológico."
    }
  ],

  blocked_strict: [
    "Hipercontrol financiero",
    "Optimización extrema"
  ],

  not_recommended: [
    "Seguimiento financiero obsesivo"
  ],

  allowed_focus: [
    "Simplicidad estructural"
  ]
},

/* ===================================================== */
AHORRADOR_SIN_PROPOSITO: {

  route_name: "Dar dirección al dinero",

  steps: [
    {
      id: 1,
      title: "Definir propósito concreto del dinero",
      why: "Ahorrar sin propósito genera estancamiento."
    },
    {
      id: 2,
      title: "Asignar ahorro a objetivos reales",
      why: "El dinero necesita dirección para generar avance."
    },
    {
      id: 3,
      title: "Evitar acumulación estéril",
      why: "La acumulación sin uso refuerza miedo financiero."
    }
  ],

  blocked_strict: [
    "Optimización financiera",
    "Inversión por moda"
  ],

  not_recommended: [
    "Acumulación sin objetivo"
  ],

  allowed_focus: [
    "Planificación con propósito"
  ]
},

/* ===================================================== */
ASPIRACIONAL_DESALINEADO: {

  route_name: "Alinear expectativas con realidad",

  steps: [
    {
      id: 1,
      title: "Diagnosticar brecha entre estilo de vida y estructura",
      why: "Sin reconocer la brecha, la deuda se vuelve crónica."
    },
    {
      id: 2,
      title: "Ajustar expectativas financieras",
      why: "Las expectativas irreales generan frustración continua."
    },
    {
      id: 3,
      title: "Reconstruir coherencia financiera",
      why: "La coherencia reduce impulsividad aspiracional."
    }
  ],

  blocked_strict: [
    "Consumo aspiracional",
    "Inversión especulativa"
  ],

  not_recommended: [
    "Expansión de estilo de vida"
  ],

  allowed_focus: [
    "Realismo financiero"
  ]
},

/* ===================================================== */
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

/* ===================================================== */
RACIONAL_DESCONECTADO: {

  route_name: "Reconectar emoción con dinero",

  steps: [
    {
      id: 1,
      title: "Reconocer impacto emocional en decisiones",
      why: "Ignorar emoción genera decisiones que no se sostienen."
    },
    {
      id: 2,
      title: "Vincular emoción con conducta financiera",
      why: "La conciencia emocional mejora consistencia."
    },
    {
      id: 3,
      title: "Integrar lógica con autoconciencia financiera",
      why: "La integración reduce autoengaño racional."
    }
  ],

  blocked_strict: [
    "Decisiones exclusivamente racionales"
  ],

  not_recommended: [
    "Desconexión emocional financiera"
  ],

  allowed_focus: [
    "Registro emocional financiero"
  ]
},

/* ===================================================== */
ORDENADO_FUNCIONAL: {

  route_name: "Sostener lo que funciona",

  steps: [
    {
      id: 1,
      title: "Mantener hábitos financieros actuales",
      why: "La estabilidad es más valiosa que el cambio innecesario."
    },
    {
      id: 2,
      title: "Evitar sobre-optimización",
      why: "Optimizar sin necesidad genera fricción y desgaste."
    },
    {
      id: 3,
      title: "Realizar ajustes menores y progresivos",
      why: "Los ajustes graduales sostienen coherencia."
    }
  ],

  blocked_strict: [
    "Cambios estructurales innecesarios"
  ],

  not_recommended: [
    "Reestructuración financiera agresiva"
  ],

  allowed_focus: [
    "Sostenibilidad financiera"
  ]
}

};
