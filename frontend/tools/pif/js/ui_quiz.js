/* ============================================================
   PIF UI QUIZ — CFC CONTRACT V13
   Renderiza cuestionario completo
   NO calcula perfil
   NO calcula ruta
   SOLO captura respuestas
   ============================================================ */

import { QUESTIONS_V1, validateQuestionsCount } from "../data/questions_v1.js";
import {
    setAnswer,
    getAnswer,
    isQuizComplete,
    getAllAnswers
} from "./state_runtime.js";


/* ============================================================
   UI QUIZ
   ============================================================ */

export function renderQuiz(onComplete) {

    validateQuestionsCount();

    const root = document.getElementById("pif-app");

    if (!root) {
        throw new Error("[PIF] #pif-app no encontrado");
    }

    root.innerHTML = "";

    /* ---------- PANEL ---------- */

    const panel = document.createElement("div");
    panel.className = "pif-panel";

    /* ---------- TÍTULO ---------- */

    const title = document.createElement("div");
    title.className = "pif-title";
    title.textContent = "Perfil de Identidad Financiera (PIF)";

    /* ---------- MENSAJE FIJO ---------- */

    const subtitle = document.createElement("div");
    subtitle.className = "pif-subtitle";
    subtitle.innerHTML = `
        Respondé según lo que <b>HACÉS habitualmente</b>, incluso si no te gusta.<br>
        No hay respuestas correctas.
    `;

    panel.appendChild(title);
    panel.appendChild(subtitle);

    /* ============================================================
       RENDER PREGUNTAS
       ============================================================ */

    QUESTIONS_V1.forEach((q, index) => {

        const block = document.createElement("div");
        block.className = "pif-text-block";

        const questionTitle = document.createElement("div");
        questionTitle.innerHTML = `<b>${index + 1}. ${q.text}</b>`;

        block.appendChild(questionTitle);

        q.options.forEach(opt => {

            const label = document.createElement("label");
            label.className = "pif-option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q-${q.id}`;
            radio.value = opt.key;

            /* Restaurar selección si existe */
            if (getAnswer(q.id) === opt.key) {
                radio.checked = true;
            }

            radio.addEventListener("change", () => {
                setAnswer(q.id, opt.key);
                updateContinueState();
            });

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt.text));

            block.appendChild(label);
        });

        panel.appendChild(block);
    });


    /* ============================================================
       BOTONES
       ============================================================ */

    const actions = document.createElement("div");
    actions.className = "pif-actions";

    const continueBtn = document.createElement("button");
    continueBtn.className = "pif-btn";
    continueBtn.textContent = "Continuar";
    continueBtn.disabled = true;

    continueBtn.addEventListener("click", () => {

        if (!isQuizComplete(30)) return;

        if (typeof onComplete === "function") {
            onComplete(getAllAnswers());
        }
    });

    actions.appendChild(continueBtn);
    panel.appendChild(actions);

    root.appendChild(panel);


    /* ============================================================
       CONTROL BOTÓN CONTINUAR
       ============================================================ */

    function updateContinueState() {
        continueBtn.disabled = !isQuizComplete(30);
    }

    updateContinueState();
}
