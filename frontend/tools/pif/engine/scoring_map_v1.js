/* =========================================================
scoring_map_v1.js
CORE MATEMÁTICO DEL PIF
SAFE MVP — balanceado para 9 perfiles
========================================================= */

export const SCORING_MAP_V1 = {

  /* ===== PREGUNTA 1 ===== */
  1: {
    A: { EVITADOR_FINANCIERO: 3 },
    B: { COMPENSADOR_EMOCIONAL: 2 },
    C: { RACIONAL_DESCONECTADO: 2 },
    D: { CONTROLADOR_ANSIOSO: 3 },
    E: { EVITADOR_FINANCIERO: 3 }
  },

  /* ===== PREGUNTA 2 ===== */
  2: {
    A: { CONTROLADOR_ANSIOSO: 2 },
    B: { EVITADOR_FINANCIERO: 2 },
    C: { EVITADOR_FINANCIERO: 3 },
    D: { CONTROLADOR_ANSIOSO: 3 },
    E: { RACIONAL_DESCONECTADO: 2 }
  },

  /* ===== PREGUNTA 3 ===== */
  3: {
    A: { COMPENSADOR_EMOCIONAL: 3 },
    B: { COMPENSADOR_EMOCIONAL: 2 },
    C: { COMPENSADOR_EMOCIONAL: 1 },
    D: { DESORDENADO_CRONICO: 2 },
    E: { EVITADOR_FINANCIERO: 2 }
  },

  /* ===== PLACEHOLDER 4–30 ===== */

  4: safePlaceholder(),
  5: safePlaceholder(),
  6: safePlaceholder(),
  7: safePlaceholder(),
  8: safePlaceholder(),
  9: safePlaceholder(),
  10: safePlaceholder(),
  11: safePlaceholder(),
  12: safePlaceholder(),
  13: safePlaceholder(),
  14: safePlaceholder(),
  15: safePlaceholder(),
  16: safePlaceholder(),
  17: safePlaceholder(),
  18: safePlaceholder(),
  19: safePlaceholder(),
  20: safePlaceholder(),
  21: safePlaceholder(),
  22: safePlaceholder(),
  23: safePlaceholder(),
  24: safePlaceholder(),
  25: safePlaceholder(),
  26: safePlaceholder(),
  27: safePlaceholder(),
  28: safePlaceholder(),
  29: safePlaceholder(),
  30: safePlaceholder()

};


/* =====================================================
SAFE PLACEHOLDER SIN SESGO ENTRE 9 PERFILES
===================================================== */

function safePlaceholder() {

  return {

    A: { EVITADOR_FINANCIERO: 1 },

    B: { COMPENSADOR_EMOCIONAL: 1 },

    C: { DESORDENADO_CRONICO: 1 },

    D: { CONTROLADOR_ANSIOSO: 1 },

    E: { AHORRADOR_SIN_PROPOSITO: 1 },

    /* distribución secundaria pseudo aleatoria */

    F: { ASPIRACIONAL_DESALINEADO: 1 },

    G: { INVERSOR_PREMATURO: 1 },

    H: { RACIONAL_DESCONECTADO: 1 },

    I: { ORDENADO_FUNCIONAL: 1 }

  };

}
