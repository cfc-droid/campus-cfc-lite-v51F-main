/* =========================================================
restriction_copy_v1.js
Copy obligatorio de restricción contextual
========================================================= */

export const RESTRICTION_COPY_V1 = {

  title: "Restricción activa",

  template: (blockedActivity) => `
Según tu perfil actual, avanzar ahora en:
${blockedActivity}

no solo no te ayudaría, sino que empeoraría tu situación.

El problema no es falta de información.
Es orden psicológico.
`

};
