/* =========================================================
scoring_map_v1.js
CORE MATEMÁTICO DEL PIF
Contrato V13 compatible con profile_engine_v1
========================================================= */

export const SCORING_MAP_V1 = {

/* ===== PREGUNTA 1 ===== */

Q01: {
 A: { EVITADOR_FINANCIERO:3 },
 B: { COMPENSADOR_EMOCIONAL:2 },
 C: { RACIONAL_DESCONECTADO:1 },
 D: { CONTROLADOR_ANSIOSO:2 },
 E: { EVITADOR_FINANCIERO:3 }
},

/* ===== PREGUNTA 2 ===== */

Q02: {
 A: { CONTROLADOR_ANSIOSO:2 },
 B: { EVITADOR_FINANCIERO:2 },
 C: { EVITADOR_FINANCIERO:3 },
 D: { CONTROLADOR_ANSIOSO:3 },
 E: { RACIONAL_DESCONECTADO:1 }
},

/* ===== PREGUNTA 3 ===== */

Q03: {
 A: { COMPENSADOR_EMOCIONAL:3 },
 B: { COMPENSADOR_EMOCIONAL:2 },
 C: { COMPENSADOR_EMOCIONAL:1 },
 D: { DESORDENADO_CRONICO:2 },
 E: { EVITADOR_FINANCIERO:2 }
},

/* ===== PLACEHOLDER SEGURO 4–30 ===== */

Q04: placeholder(),
Q05: placeholder(),
Q06: placeholder(),
Q07: placeholder(),
Q08: placeholder(),
Q09: placeholder(),
Q10: placeholder(),
Q11: placeholder(),
Q12: placeholder(),
Q13: placeholder(),
Q14: placeholder(),
Q15: placeholder(),
Q16: placeholder(),
Q17: placeholder(),
Q18: placeholder(),
Q19: placeholder(),
Q20: placeholder(),
Q21: placeholder(),
Q22: placeholder(),
Q23: placeholder(),
Q24: placeholder(),
Q25: placeholder(),
Q26: placeholder(),
Q27: placeholder(),
Q28: placeholder(),
Q29: placeholder(),
Q30: placeholder()

};


/* ===================================================== */

function placeholder() {
 return {
   A:{},
   B:{},
   C:{},
   D:{},
   E:{}
 };
}
