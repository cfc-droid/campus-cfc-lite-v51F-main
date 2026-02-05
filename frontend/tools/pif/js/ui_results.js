import { PROFILES_COPY_V1 } from "../data/profiles_copy_v1.js";
import { RESTRICTION_COPY_V1 } from "../data/restriction_copy_v1.js";
import { MIRROR_QUESTION_V1 } from "../data/mirror_question_v1.js";
import { FINAL_NOTICE_V1 } from "../data/final_notice_v1.js";

import { calculateProfileKey } from "../engine/profile_engine_v1.js";
import { getRouteForProfile } from "../engine/route_engine_v1.js";

import {
    setProfile,
    setRoute,
    setMirrorAnswer,
    getAllAnswers,
    exitToCampus
} from "./state_runtime.js";


export function renderResults() {

    const root = document.getElementById("pif-app");
    root.innerHTML = "";

    try {

        const answers = getAllAnswers();

        const profileKey = calculateProfileKey(answers);
        const route = getRouteForProfile(profileKey);

        const profileCopy = PROFILES_COPY_V1[profileKey];

        setProfile(profileKey);
        setRoute(route);

        const panel = document.createElement("div");
        panel.className = "pif-panel";


        /* =========================
           CAPA 2 — PERFIL
        ========================= */

        panel.innerHTML += `
        <div class="pif-title">Perfil detectado</div>
        <div class="pif-text-block">
            <b>${profileCopy.title}</b><br><br>
            ${profileCopy.description}<br><br>
            <b>Riesgo:</b> ${profileCopy.risk}<br>
            <b>Ilusión común:</b> ${profileCopy.illusion}<br>
            <b>Prioridad real:</b> ${profileCopy.priority}
        </div>
        `;


        /* =========================
           CAPA 3 — RUTA
        ========================= */

        panel.innerHTML += `
        <div class="pif-title">Ruta activa</div>
        <div class="pif-text-block">
            <b>${route.route_name}</b>
            <ol>
                ${route.steps.map(s => `
                    <li>
                        <b>${s.title}</b><br>
                        ${s.why}
                    </li>
                `).join("")}
            </ol>
        </div>
        `;


        /* =========================
           CAPA 4 — RESTRICCIÓN
        ========================= */

        const blocked = route.blocked_strict?.[0] || "acciones avanzadas";

        panel.innerHTML += `
        <div class="pif-title">Restricción activa</div>
        <div class="pif-warning">
            ${RESTRICTION_COPY_V1.template(blocked)}
        </div>
        `;


        /* =========================
           PREGUNTA ESPEJO
        ========================= */

        const mirrorBlock = document.createElement("div");
        mirrorBlock.className = "pif-text-block";

        mirrorBlock.innerHTML = `
            <div class="pif-title">Pregunta final</div>
            <div>${MIRROR_QUESTION_V1.question}</div>
        `;

        const finalBtn = document.createElement("button");
        finalBtn.className = "pif-btn";
        finalBtn.textContent = "Entiendo que este es mi estado actual";
        finalBtn.disabled = true;

        MIRROR_QUESTION_V1.options.forEach(opt => {

            const label = document.createElement("label");

            label.innerHTML = `
                <input type="radio" name="mirror" value="${opt.key}">
                ${opt.text}
            `;

            label.querySelector("input").addEventListener("change", () => {
                setMirrorAnswer(opt.key);
                finalBtn.disabled = false;
            });

            mirrorBlock.appendChild(label);
        });

        panel.appendChild(mirrorBlock);


        /* =========================
           AVISO FINAL
        ========================= */

        panel.innerHTML += `
        <div class="pif-warning">
            ${FINAL_NOTICE_V1.text}
        </div>
        `;

        finalBtn.onclick = exitToCampus;
        panel.appendChild(finalBtn);

        root.appendChild(panel);

    }

    catch (err) {

        console.error(err);

        root.innerHTML = `
        <div class="pif-panel">
            Error calculando resultado
        </div>`;
    }
}
