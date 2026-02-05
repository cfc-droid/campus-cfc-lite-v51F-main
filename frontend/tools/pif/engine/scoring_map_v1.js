/* =========================================================
scoring_map_v1.js
CORE MATEMÁTICO DEL PIF

Reglas:
✔ Peso permitido: 1 | 2 | 3
✔ Máximo 2 perfiles por opción
✔ Solo enteros
✔ Auditable
✔ 30 preguntas exactas
✔ Opciones A–E por pregunta
========================================================= */

export const SCORING_MAP_V1 = {

  /* =====================================================
  EJEMPLOS COMPLETOS REALES (PREGUNTAS 1–3)
  ===================================================== */

  1: {
    A: [{ profile: "EVITADOR_FINANCIERO", weight: 3 }],
    B: [{ profile: "COMPENSADOR_EMOCIONAL", weight: 2 }],
    C: [{ profile: "RACIONAL_DESCONECTADO", weight: 1 }],
    D: [{ profile: "CONTROLADOR_ANSIOSO", weight: 2 }],
    E: [{ profile: "EVITADOR_FINANCIERO", weight: 3 }]
  },

  2: {
    A: [{ profile: "CONTROLADOR_ANSIOSO", weight: 2 }],
    B: [{ profile: "EVITADOR_FINANCIERO", weight: 2 }],
    C: [{ profile: "EVITADOR_FINANCIERO", weight: 3 }],
    D: [{ profile: "CONTROLADOR_ANSIOSO", weight: 3 }],
    E: [{ profile: "RACIONAL_DESCONECTADO", weight: 1 }]
  },

  3: {
    A: [{ profile: "COMPENSADOR_EMOCIONAL", weight: 3 }],
    B: [{ profile: "COMPENSADOR_EMOCIONAL", weight: 2 }],
    C: [{ profile: "COMPENSADOR_EMOCIONAL", weight: 1 }],
    D: [{ profile: "DESORDENADO_CRONICO", weight: 2 }],
    E: [{ profile: "EVITADOR_FINANCIERO", weight: 2 }]
  },

  /* =====================================================
  PLACEHOLDERS ESTRUCTURALES (4–30)
  COMPLETAR RESPETANDO REGLAS
  ===================================================== */

  4: placeholderMap(),
  5: placeholderMap(),
  6: placeholderMap(),
  7: placeholderMap(),
  8: placeholderMap(),
  9: placeholderMap(),
  10: placeholderMap(),
  11: placeholderMap(),
  12: placeholderMap(),
  13: placeholderMap(),
  14: placeholderMap(),
  15: placeholderMap(),
  16: placeholderMap(),
  17: placeholderMap(),
  18: placeholderMap(),
  19: placeholderMap(),
  20: placeholderMap(),
  21: placeholderMap(),
  22: placeholderMap(),
  23: placeholderMap(),
  24: placeholderMap(),
  25: placeholderMap(),
  26: placeholderMap(),
  27: placeholderMap(),
  28: placeholderMap(),
  29: placeholderMap(),
  30: placeholderMap()

};


/* =====================================================
FUNCIONES INTERNAS
===================================================== */

function placeholderMap() {
  return {
    A: [],
    B: [],
    C: [],
    D: [],
    E: []
  };
}


/* =====================================================
VALIDACIÓN DE INTEGRIDAD
===================================================== */

export function validateScoringMap(map) {

  Object.entries(map).forEach(([q, options]) => {

    ["A","B","C","D","E"].forEach(opt => {

      if (!options[opt]) {
        throw new Error(`Pregunta ${q} opción ${opt} faltante`);
      }

      if (options[opt].length > 2) {
        throw new Error(`Pregunta ${q} opción ${opt} supera 2 perfiles`);
      }

      options[opt].forEach(item => {
        if (![1,2,3].includes(item.weight)) {
          throw new Error(`Peso inválido en P${q} ${opt}`);
        }
      });

    });

  });

  return true;
}
