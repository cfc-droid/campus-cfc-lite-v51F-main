/* ============================================================
   PIF DEV — TEST RUNNER V1 — CFC CONTRACT V13
   Ejecuta presets → profile engine → valida salida

   NO UI
   NO runtime mutation real
   Solo QA técnico de engines
   ============================================================ */

import { TEST_PRESETS_V1, validateTestPresets } from "./test_presets_v1.js";

import { calculateProfileKey } from "../engine/profile_engine_v1.js";
import { getRouteForProfile } from "../engine/route_engine_v1.js";


/* ============================================================
   RUN SINGLE TEST
   ============================================================ */

function runSinglePreset(profileKey, preset) {

    console.group(`[PIF TEST] ${profileKey}`);

    try {

        const calculatedProfile = calculateProfileKey(preset);
        const route = getRouteForProfile(calculatedProfile);

        console.log("Preset:", profileKey);
        console.log("Calculated profile:", calculatedProfile);
        console.log("Route:", route?.name || "SIN RUTA");

        if (calculatedProfile !== profileKey) {
            console.warn("⚠ Perfil esperado ≠ perfil calculado");
        } else {
            console.log("✔ Perfil coincide");
        }

    } catch (err) {
        console.error("❌ Error ejecutando preset:", err);
    }

    console.groupEnd();
}


/* ============================================================
   RUN ALL PRESETS
   ============================================================ */

export function runAllPifTests() {

    console.group("========== PIF ENGINE TEST RUN ==========");

    try {

        validateTestPresets();

        Object.entries(TEST_PRESETS_V1).forEach(([profileKey, preset]) => {
            runSinglePreset(profileKey, preset);
        });

        console.log("✔ Test runner finalizado");

    } catch (err) {
        console.error("❌ Error general test runner:", err);
    }

    console.groupEnd();
}


/* ============================================================
   AUTO RUN (solo si se importa manualmente en consola)
   ============================================================ */

if (typeof window !== "undefined") {
    window.runAllPifTests = runAllPifTests;
}
