/* ============================================================
   PIF Route Engine — CFC CONTRACT V13
   Deterministic profile → route dataset
   NO UI
   NO runtime mutation
   READ ONLY dataset
   ============================================================ */

import { ROUTES_V1 } from "../data/routes_v1.js";


/* ============================================================
   VALIDATIONS
   ============================================================ */

function validateRoutesDataset() {

    if (!ROUTES_V1 || typeof ROUTES_V1 !== "object") {
        throw new Error("[PIF] ROUTES_V1 inválido");
    }

    if (Object.keys(ROUTES_V1).length === 0) {
        throw new Error("[PIF] ROUTES_V1 vacío");
    }
}


function validateProfileKey(profileKey) {

    if (!profileKey || typeof profileKey !== "string") {
        throw new Error("[PIF] profileKey inválido");
    }
}


/* ============================================================
   ROUTE RESOLVER
   ============================================================ */

export function getRouteForProfile(profileKey) {

    validateRoutesDataset();
    validateProfileKey(profileKey);

    const route = ROUTES_V1[profileKey];

    if (!route) {
        throw new Error(`[PIF] No existe ruta para perfil ${profileKey}`);
    }

    /* -------- Validación mínima estructural -------- */

    if (!route.steps || !Array.isArray(route.steps)) {
        throw new Error(`[PIF] Ruta inválida para perfil ${profileKey} (steps faltantes)`);
    }

    if (!route.blocked_strict || !Array.isArray(route.blocked_strict)) {
        throw new Error(`[PIF] Ruta inválida para perfil ${profileKey} (blocked_strict faltante)`);
    }

    /* -------- Return copia segura -------- */

    return JSON.parse(JSON.stringify(route));
}
