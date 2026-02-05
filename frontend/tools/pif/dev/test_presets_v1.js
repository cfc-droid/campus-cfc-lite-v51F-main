/* ============================================================
   PIF DEV — TEST PRESETS V1 — CFC CONTRACT V13
   Presets de respuestas (30/30) para test mode
   NO UI
   NO scoring
   Solo answersByQid (Q01..Q30 → A..E)
   ============================================================ */

const QIDS_30 = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `Q${n}`;
});

function buildPreset(defaultOptionKey) {
  const obj = {};
  QIDS_30.forEach((qid) => (obj[qid] = defaultOptionKey));
  return obj;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function validatePreset(profileKey, preset) {
  if (!preset || typeof preset !== "object") {
    throw new Error(`[PIF][DEV] Preset inválido para ${profileKey}`);
  }

  const keys = Object.keys(preset);

  if (keys.length !== 30) {
    throw new Error(
      `[PIF][DEV] Preset ${profileKey} debe tener 30 respuestas. Actual: ${keys.length}`
    );
  }

  QIDS_30.forEach((qid) => {
    if (!preset[qid]) {
      throw new Error(`[PIF][DEV] Preset ${profileKey} falta ${qid}`);
    }
    const v = preset[qid];
    if (!["A", "B", "C", "D", "E"].includes(v)) {
      throw new Error(
        `[PIF][DEV] Preset ${profileKey} opción inválida en ${qid}: ${v}`
      );
    }
  });

  return true;
}

/* ============================================================
   PRESETS PRINCIPALES (reales)
   ============================================================ */

/**
 * INVERSOR_PREMATURO
 * Intención: más impulso / escape / salto de base / evitación de orden
 */
const PRESET_INVERSOR_PREMATURO = {
  ...buildPreset("A"),
  // Dim A (emocional)
  Q01: "A", Q02: "B", Q03: "B", Q04: "E", Q05: "C", Q06: "A",
  // Dim B (decisiones)
  Q07: "A", Q08: "A", Q09: "A", Q10: "C", Q11: "A", Q12: "C",
  // Dim C (regulación)
  Q13: "A", Q14: "B", Q15: "A", Q16: "E", Q17: "B", Q18: "B",
  // Dim D (horizonte)
  Q19: "A", Q20: "A", Q21: "A", Q22: "A", Q23: "A", Q24: "B",
  // Dim E (orden)
  Q25: "D", Q26: "B", Q27: "A", Q28: "A", Q29: "A", Q30: "A"
};

/**
 * EVITADOR_FINANCIERO
 * Intención: evitación / postergación / pánico / no mirar
 */
const PRESET_EVITADOR_FINANCIERO = {
  ...buildPreset("E"),
  // Dim A
  Q01: "A", Q02: "C", Q03: "E", Q04: "E", Q05: "E", Q06: "B",
  // Dim B
  Q07: "C", Q08: "E", Q09: "C", Q10: "A", Q11: "E", Q12: "C",
  // Dim C
  Q13: "C", Q14: "B", Q15: "A", Q16: "E", Q17: "E", Q18: "A",
  // Dim D
  Q19: "E", Q20: "A", Q21: "E", Q22: "A", Q23: "A", Q24: "E",
  // Dim E
  Q25: "D", Q26: "B", Q27: "E", Q28: "E", Q29: "C", Q30: "B"
};


/* ============================================================
   PLACEHOLDERS RESTO (válidos 30/30)
   Si querés luego, los afinamos para que representen el patrón.
   ============================================================ */

const PRESET_COMPENSADOR_EMOCIONAL = (() => {
  const p = clone(PRESET_INVERSOR_PREMATURO);
  // empuja regulación emocional / culpa / justifico
  p.Q03 = "A"; p.Q14 = "C"; p.Q18 = "A"; p.Q13 = "A"; p.Q10 = "B";
  return p;
})();

const PRESET_DESORDENADO_CRONICO = (() => {
  const p = buildPreset("E");
  // incoherencia / vaguedad / no claridad
  p.Q20 = "E"; p.Q24 = "A"; p.Q09 = "E"; p.Q28 = "E"; p.Q25 = "A";
  p.Q19 = "B"; p.Q21 = "C"; p.Q12 = "C"; p.Q02 = "C"; p.Q08 = "C";
  return p;
})();

const PRESET_CONTROLADOR_ANSIOSO = (() => {
  const p = buildPreset("D");
  // hipercontrol / análisis / intervención
  p.Q02 = "D"; p.Q07 = "D"; p.Q11 = "D"; p.Q26 = "D"; p.Q27 = "D";
  p.Q06 = "D"; p.Q17 = "D"; p.Q12 = "D"; p.Q10 = "D"; p.Q04 = "D";
  return p;
})();

const PRESET_AHORRADOR_SIN_PROPOSITO = (() => {
  const p = buildPreset("B");
  // guardo sin objetivo / seguridad / debería
  p.Q08 = "C"; p.Q15 = "C"; p.Q05 = "A"; p.Q20 = "B"; p.Q28 = "D";
  p.Q19 = "C"; p.Q24 = "C"; p.Q25 = "B"; p.Q27 = "B"; p.Q23 = "B";
  return p;
})();

const PRESET_ASPIRACIONAL_DESALINEADO = (() => {
  const p = buildPreset("A");
  // alivio inmediato / contradicción / gasto
  p.Q21 = "A"; p.Q03 = "B"; p.Q27 = "A"; p.Q08 = "A"; p.Q24 = "D";
  p.Q15 = "A"; p.Q16 = "A"; p.Q20 = "E"; p.Q23 = "A"; p.Q19 = "A";
  return p;
})();

const PRESET_RACIONAL_DESCONECTADO = (() => {
  const p = buildPreset("C");
  // indiferencia / racionalización / emociones minimizadas
  p.Q01 = "C"; p.Q02 = "E"; p.Q04 = "C"; p.Q05 = "D"; p.Q06 = "E";
  p.Q12 = "D"; p.Q18 = "E"; p.Q13 = "E"; p.Q14 = "E"; p.Q24 = "E";
  return p;
})();

const PRESET_ORDENADO_FUNCIONAL = (() => {
  const p = buildPreset("D");
  // coherencia / claridad / respaldo
  p.Q19 = "D"; p.Q20 = "D"; p.Q21 = "D"; p.Q22 = "D"; p.Q23 = "D";
  p.Q24 = "C"; p.Q25 = "B"; p.Q26 = "D"; p.Q28 = "D"; p.Q30 = "E";
  return p;
})();


/* ============================================================
   EXPORT
   ============================================================ */

export const TEST_PRESETS_V1 = {
  INVERSOR_PREMATURO: PRESET_INVERSOR_PREMATURO,
  EVITADOR_FINANCIERO: PRESET_EVITADOR_FINANCIERO,

  COMPENSADOR_EMOCIONAL: PRESET_COMPENSADOR_EMOCIONAL,
  DESORDENADO_CRONICO: PRESET_DESORDENADO_CRONICO,
  CONTROLADOR_ANSIOSO: PRESET_CONTROLADOR_ANSIOSO,
  AHORRADOR_SIN_PROPOSITO: PRESET_AHORRADOR_SIN_PROPOSITO,
  ASPIRACIONAL_DESALINEADO: PRESET_ASPIRACIONAL_DESALINEADO,
  RACIONAL_DESCONECTADO: PRESET_RACIONAL_DESCONECTADO,
  ORDENADO_FUNCIONAL: PRESET_ORDENADO_FUNCIONAL
};


/* ============================================================
   AUTO-VALIDATION (dev only)
   ============================================================ */

export function validateTestPresets() {
  Object.entries(TEST_PRESETS_V1).forEach(([profileKey, preset]) => {
    validatePreset(profileKey, preset);
  });
  return true;
}
