/* ============================================================
   PIF UI QUIZ — CFC CONTRACT V13
   ============================================================ */

import { QUESTIONS_V1, validateQuestionsCount } from "../data/questions_v1.js";
import {
    setAnswer,
    getAnswer,
    isQuizComplete
} from "./state_runtime.js";


export function renderQuiz() {

    validateQuestionsCount();

    const root = document.getElementById("pif-app");

    if (!root) {
        throw new Error("[PIF] #pif-app no encontrado");
    }

    root.innerHTML = "";

    const panel = document.createElement("div");
    panel.className = "pif-panel";

    const title = document.createElement("div");
    title.className = "pif-title";
    title.textContent = "Perfil de Identidad Financiera (PIF)";

    const subtitle = document.createElement("div");
    subtitle.className = "pif-subtitle";
    subtitle.innerHTML = `
        Respondé según lo que <b>HACÉS habitualmente</b>, incluso si no te gusta.<br>
        No hay respuestas correctas.
    `;

    panel.appendChild(title);
    panel.appendChild(subtitle);


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


    const actions = document.createElement("div");
    actions.className = "pif-actions";

    const continueBtn = document.createElement("button");
    continueBtn.className = "pif-btn";
    continueBtn.textContent = "Continuar";
    continueBtn.disabled = true;

    continueBtn.addEventListener("click", () => {

        if (!isQuizComplete(30)) return;

        /* 🔥 EVENTO GLOBAL ROUTER */
        window.dispatchEvent(new CustomEvent("pif:quiz:completed"));

    });

    actions.appendChild(continueBtn);
    panel.appendChild(actions);

    root.appendChild(panel);


    function updateContinueState() {
        continueBtn.disabled = !isQuizComplete(30);
    }

    updateContinueState();
}
