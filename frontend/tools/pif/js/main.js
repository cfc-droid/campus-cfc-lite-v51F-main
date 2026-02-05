/* ============================================================
   PIF MAIN ORCHESTRATOR — CFC CONTRACT V13
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
    renderQuiz();
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
   ROUTER EVENTS
   ============================================================ */

window.addEventListener("pif:quiz:completed", () => {
    renderResults();
});


/* ============================================================
   BOOTSTRAP
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    try {

        enforcePifLogin();

        const { test, perfil } = getQueryParams();

        if (test === "1" && perfil) {
            startTestFlow(perfil);
            return;
        }

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
