/* ============================================================
   PIF Route Engine — CFC CONTRACT V13
   ============================================================ */

import { ROUTES_V1 } from "../data/routes_v1.js";


function validateProfileKey(profileKey) {

    if (!profileKey || typeof profileKey !== "string") {
        throw new Error("[PIF] profileKey inválido");
    }
}


export function getRouteForProfile(profileKey) {

    validateProfileKey(profileKey);

    const route = ROUTES_V1[profileKey];

    if (!route) {
        throw new Error(`[PIF] No existe ruta para perfil ${profileKey}`);
    }

    const clone = JSON.parse(JSON.stringify(route));

    /* 🔥 NORMALIZACIÓN IMPORTANTE */

    clone.name = clone.route_name || clone.name || "Ruta sin nombre";

    clone.steps = clone.steps.map(step => {

        if (typeof step === "string") return step;

        if (step.title && step.why) {
            return `${step.title} — ${step.why}`;
        }

        return JSON.stringify(step);
    });

    return clone;
}
