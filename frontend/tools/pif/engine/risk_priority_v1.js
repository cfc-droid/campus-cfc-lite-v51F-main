/* =========================================================
risk_priority_v1.js

Orden descendente de riesgo psicológico
Se usa para desempate cuando delta ≤ 2
========================================================= */

export const RISK_PRIORITY_V1 = [

  /* 
  1 = Mayor riesgo psicológico
  9 = Menor riesgo
  */

  "EVITADOR_FINANCIERO", 
  // Evita realidad → crisis silenciosa

  "COMPENSADOR_EMOCIONAL", 
  // Ciclos gasto/culpa altamente destructivos

  "INVERSOR_PREMATURO", 
  // Alto sabotaje + estrés financiero

  "DESORDENADO_CRONICO", 
  // Fatiga financiera + abandono total

  "ASPIRACIONAL_DESALINEADO", 
  // Riesgo deuda + frustración

  "CONTROLADOR_ANSIOSO", 
  // Parálisis por análisis

  "AHORRADOR_SIN_PROPOSITO", 
  // Estancamiento vital

  "RACIONAL_DESCONECTADO", 
  // Subestima impacto emocional

  "ORDENADO_FUNCIONAL"
  // Riesgo mínimo operativo

];


/* =========================================================
HELPER DE PRIORIDAD
========================================================= */

export function getRiskIndex(profileKey) {
  return RISK_PRIORITY_V1.indexOf(profileKey);
}
