/* =========================================================
scoring_map_v1.js
CORE MATEMÁTICO DEL PIF
Contrato V13 compatible con profile_engine_v1
========================================================= */

export const SCORING_MAP_V1 = {

  /* ===== PREGUNTA 1 ===== */
  1: {
    A: { EVITADOR_FINANCIERO: 3 },
    B: { COMPENSADOR_EMOCIONAL: 2 },
    C: { RACIONAL_DESCONECTADO: 1 },
    D: { CONTROLADOR_ANSIOSO: 2 },
    E: { EVITADOR_FINANCIERO: 3 }
  },

  /* ===== PREGUNTA 2 ===== */
  2: {
    A: { CONTROLADOR_ANSIOSO: 2 },
    B: { EVITADOR_FINANCIERO: 2 },
    C: { EVITADOR_FINANCIERO: 3 },
    D: { CONTROLADOR_ANSIOSO: 3 },
    E: { RACIONAL_DESCONECTADO: 1 }
  },

  /* ===== PREGUNTA 3 ===== */
  3: {
    A: { COMPENSADOR_EMOCIONAL: 3 },
    B: { COMPENSADOR_EMOCIONAL: 2 },
    C: { COMPENSADOR_EMOCIONAL: 1 },
    D: { DESORDENADO_CRONICO: 2 },
    E: { EVITADOR_FINANANCIERO_FIX__E: 0 } // placeholder local para no romper estructura
  },

  /* =====================================================
     PLACEHOLDER SEGURO 4–30
     (no rompe engine; simplemente no suma puntaje)
     ===================================================== */

  4: placeholder(),
  5: placeholder(),
  6: placeholder(),
  7: placeholder(),
  8: placeholder(),
  9: placeholder(),
  10: placeholder(),
  11: placeholder(),
  12: placeholder(),
  13: placeholder(),
  14: placeholder(),
  15: placeholder(),
  16: placeholder(),
  17: placeholder(),
  18: placeholder(),
  19: placeholder(),
  20: placeholder(),
  21: placeholder(),
  22: placeholder(),
  23: placeholder(),
  24: placeholder(),
  25: placeholder(),
  26: placeholder(),
  27: placeholder(),
  28: placeholder(),
  29: placeholder(),
  30: placeholder()

};


/* =====================================================
   FUNCIONES INTERNAS
===================================================== */

function placeholder() {
  return {
    A: {},
    B: {},
    C: {},
    D: {},
    E: {}
  };
}
