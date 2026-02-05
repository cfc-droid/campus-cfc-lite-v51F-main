/* ============================================================
   PIF MAIN ORCHESTRATOR — CFC CONTRACT V13
   Bootstrap completo del sistema
   Controla:
   ✔ Login guard
   ✔ Test mode
   ✔ Quiz UI
   ✔ Results UI
   ============================================================ */

import { enforcePifLogin } from "./guard_login.js";

import { renderQuiz } from "./ui_quiz.js";
import { renderResults } from "./ui_results.js";

import { setTestMode } from "./state_runtime.js";

import { TEST_PRESETS_V1 } from "../dev/test_presets_v1.js";
import { setAnswer } from "./state_runtime.js";


/* ============================================================
   QUERY PARSER
   ============================================================ */

function getQueryParams() {

    const params = new URLSearchParams(window.location.search);

    return {
        test: params.get("test"),
        perfil: params.get("perfil")
    };

}


/* ============================================================
   LOAD PRESET RESPONSES
   ============================================================ */

function loadPreset(profileKey) {

    const preset = TEST_PRESETS_V1[profileKey];

    if (!preset) {
        throw new Error(`[PIF] Preset inexistente para perfil ${profileKey}`);
    }

    Object.entries(preset).forEach(([qid, optionKey]) => {
        setAnswer(qid, optionKey);
    });

}


/* ============================================================
   NORMAL FLOW
   ============================================================ */

function startQuizFlow() {

    renderQuiz(() => {
        renderResults();
    });

}


/* ============================================================
   TEST FLOW
   ============================================================ */

function startTestFlow(profileKey) {

    setTestMode(true);

    loadPreset(profileKey);

    renderResults();

}


/* ============================================================
   BOOTSTRAP
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    try {

        /* ---------- Login obligatorio ---------- */

        enforcePifLogin();


        /* ---------- Leer query params ---------- */

        const { test, perfil } = getQueryParams();


        /* ---------- Test Mode ---------- */

        if (test === "1" && perfil) {
            startTestFlow(perfil);
            return;
        }


        /* ---------- Flujo normal ---------- */

        startQuizFlow();

    }

    catch (err) {

        console.error("[PIF MAIN ERROR]", err);

        const root = document.getElementById("pif-app");

        if (root) {
            root.innerHTML = `
                <div class="pif-panel">
                    <div class="pif-title">Error cargando PIF</div>
                    <div class="pif-warning">
                        Revisar consola del navegador.
                    </div>
                </div>
            `;
        }

    }

});
