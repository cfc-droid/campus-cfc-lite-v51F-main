/* ============================================================
   PIF DEV — TEST RUNNER V1 — CFC CONTRACT V13
   ============================================================ */

import { TEST_PRESETS_V1, validateTestPresets } from "./test_presets_v1.js";
import { calculateProfileKey } from "../engine/profile_engine_v1.js";
import { getRouteForProfile } from "../engine/route_engine_v1.js";


function runSinglePreset(profileKey, preset) {

    console.group(`[PIF TEST] ${profileKey}`);

    try {

        const calculatedProfile = calculateProfileKey(preset);
        const route = getRouteForProfile(calculatedProfile);

        console.log("Preset esperado:", profileKey);
        console.log("Perfil calculado:", calculatedProfile);
        console.log("Ruta:", route?.name);

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


if (typeof window !== "undefined") {
    window.runAllPifTests = runAllPifTests;
}
