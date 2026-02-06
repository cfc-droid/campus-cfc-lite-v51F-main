/* ============================================================
   PIF Profiles Copy — CFC CONTRACT V13
   CAPA 2 — Dataset psicológico narrativo

   NO engine logic
   NO scoring
   NO runtime mutation
   READ ONLY dataset
   ============================================================ */

export const PROFILES_COPY_V1 = {

  /* ===================================================== */
  EVITADOR_FINANCIERO: {
    name: "Evitador financiero",

    detection_pattern:
      "Alta evitación + ansiedad. Tendencia a evitar números, postergar o no pensar en finanzas.",

    description:
      "Evita mirar su realidad financiera. No porque no le importe, sino porque le genera angustia. Vive con estrés latente.",

    main_risk:
      "El desorden crece en silencio y puede derivar en crisis súbita.",

    common_illusion:
      "Cuando gane más, lo ordeno.",

    real_priority:
      "Visibilidad mínima y segura. Saber dónde está parado sin juicio.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  COMPENSADOR_EMOCIONAL: {
    name: "Compensador emocional",

    detection_pattern:
      "Gasto asociado a estrés, ansiedad o frustración. Culpa posterior y justificación.",

    description:
      "Usa el gasto como regulación emocional. No compra cosas: compra alivio.",

    main_risk:
      "Ciclos repetitivos de gasto → culpa → gasto.",

    common_illusion:
      "Me lo merezco.",

    real_priority:
      "Separar emoción de decisión financiera.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  DESORDENADO_CRONICO: {
    name: "Desordenado crónico",

    detection_pattern:
      "Falta de claridad, inconsistencia y objetivos cambiantes.",

    description:
      "No hay sistema. Todo es reactivo. Vive apagando incendios financieros.",

    main_risk:
      "Fatiga financiera que termina en abandono total.",

    common_illusion:
      "Algún día me organizo bien.",

    real_priority:
      "Construir estructura simple y sostenida.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  CONTROLADOR_ANSIOSO: {
    name: "Controlador ansioso",

    detection_pattern:
      "Hipercontrol, análisis excesivo y estrés al revisar finanzas.",

    description:
      "Busca controlar todo porque no tolera la incertidumbre financiera.",

    main_risk:
      "Parálisis por análisis y desgaste mental.",

    common_illusion:
      "Si controlo todo, estoy a salvo.",

    real_priority:
      "Reducir rigidez y fricción conductual.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  AHORRADOR_SIN_PROPOSITO: {
    name: "Ahorrador sin propósito",

    detection_pattern:
      "Ahorra por obligación, sin objetivos claros.",

    description:
      "Acumula dinero como refugio, pero no genera avance real.",

    main_risk:
      "Estancamiento vital y financiero.",

    common_illusion:
      "Ahorrar es avanzar.",

    real_priority:
      "Definir propósito concreto del dinero.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  ASPIRACIONAL_DESALINEADO: {
    name: "Aspiracional desalineado",

    detection_pattern:
      "Gasto impulsado por identidad futura o expectativas irreales.",

    description:
      "Busca sostener un nivel de vida que su estructura actual no soporta.",

    main_risk:
      "Deuda y frustración crónica.",

    common_illusion:
      "Después lo acomodo.",

    real_priority:
      "Alinear expectativas con realidad actual.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  INVERSOR_PREMATURO: {
    name: "Inversor prematuro",

    detection_pattern:
      "Deseo de invertir sin orden financiero previo.",

    description:
      "Busca inversión como escape psicológico, no como estrategia estructurada.",

    main_risk:
      "Auto-sabotaje financiero y aumento del estrés.",

    common_illusion:
      "Invertir me va a salvar.",

    real_priority:
      "Orden previo obligatorio antes de asumir riesgo.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  RACIONAL_DESCONECTADO: {
    name: "Racional desconectado",

    detection_pattern:
      "Discurso lógico con baja conexión emocional.",

    description:
      "Reduce el dinero a números y subestima impacto emocional en decisiones.",

    main_risk:
      "Decisiones frías que no se sostienen en el tiempo.",

    common_illusion:
      "Las emociones no influyen.",

    real_priority:
      "Reconectar emoción con decisión financiera.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  },

  /* ===================================================== */
  ORDENADO_FUNCIONAL: {
    name: "Ordenado funcional",

    detection_pattern:
      "Coherencia conductual, claridad y respaldo financiero básico.",

    description:
      "Mantiene estructura mínima funcional y conciencia financiera.",

    main_risk:
      "Sobre-optimización innecesaria que rompe lo que funciona.",

    common_illusion:
      "Ya está todo resuelto.",

    real_priority:
      "Sostener hábitos y evitar cambios innecesarios.",

    disclaimer:
      "Este perfil describe tu estado operativo actual, no quién sos. Cambia solo cuando cambian tus conductas."
  }

};
