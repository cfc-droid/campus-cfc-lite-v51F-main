/* =========================================================
profiles_copy_v1.js
Copy psicológico por perfil
========================================================= */

export const PROFILES_COPY_V1 = {

EVITADOR_FINANCIERO: {
  title: "Evitador Financiero",
  description: "Evita mirar su realidad financiera por angustia.",
  risk: "El desorden crece en silencio y puede generar crisis súbita.",
  illusion: "Cuando gane más, lo ordeno.",
  priority: "Visibilidad mínima y segura."
},

COMPENSADOR_EMOCIONAL: {
  title: "Compensador Emocional",
  description: "Usa el gasto como regulación emocional.",
  risk: "Ciclos repetidos de culpa y gasto.",
  illusion: "Me lo merezco.",
  priority: "Separar emoción de decisión financiera."
},

DESORDENADO_CRONICO: placeholderProfile(),
CONTROLADOR_ANSIOSO: placeholderProfile(),
AHORRADOR_SIN_PROPOSITO: placeholderProfile(),
ASPIRACIONAL_DESALINEADO: placeholderProfile(),
INVERSOR_PREMATURO: placeholderProfile(),
RACIONAL_DESCONECTADO: placeholderProfile(),
ORDENADO_FUNCIONAL: placeholderProfile()

};


function placeholderProfile() {
  return {
    title: "",
    description: "",
    risk: "",
    illusion: "",
    priority: ""
  };
}
