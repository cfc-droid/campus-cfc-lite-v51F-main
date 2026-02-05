/* ============================================================
   PIF UI RESULTS — CFC CONTRACT V13
   Render perfil + ruta + restricción + espejo + cierre
   ============================================================ */

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
    if (!root) return;

    root.innerHTML = "";

    try {

        /* ============================
           PERFIL + RUTA
        ============================ */

        const answers = getAllAnswers();

        const profileKey = calculateProfileKey(answers);
        const route = getRouteForProfile(profileKey);

        const profileCopy = PROFILES_COPY_V1[profileKey];

        if (!profileCopy) {
            throw new Error(`[PIF] Copy faltante ${profileKey}`);
        }

        setProfile(profileKey);
        setRoute(route);


        /* ============================
           PANEL BASE
        ============================ */

        const panel = document.createElement("div");
        panel.className = "pif-panel";


        /* ============================
           PERFIL
        ============================ */

        const profileBlock = document.createElement("div");
        profileBlock.className = "pif-text-block";

        profileBlock.innerHTML = `
            <div class="pif-title">Perfil detectado</div>
            <div>${profileCopy.description || ""}</div>
        `;

        panel.appendChild(profileBlock);


        /* ============================
           RUTA
        ============================ */

        const routeBlock = document.createElement("div");
        routeBlock.className = "pif-text-block";

        const stepsHtml = (route.steps || [])
            .map(s => `<li><b>${s.title}</b><br>${s.why}</li>`)
            .join("");

        routeBlock.innerHTML = `
            <div class="pif-title">Ruta activa</div>
            <div><b>${route.route_name || ""}</b></div>
            <ol>${stepsHtml}</ol>
        `;

        panel.appendChild(routeBlock);


        /* ============================
           RESTRICCIÓN
        ============================ */

        const firstBlocked = route.blocked_strict?.[0] || "acciones avanzadas";

        const restrictionHtml =
            RESTRICTION_COPY_V1.template(firstBlocked);

        const restrictionBlock = document.createElement("div");
        restrictionBlock.className = "pif-text-block";
        restrictionBlock.innerHTML = `
            <div class="pif-title">${RESTRICTION_COPY_V1.title}</div>
            <div>${restrictionHtml}</div>
        `;

        panel.appendChild(restrictionBlock);


        /* ============================
           PREGUNTA ESPEJO
        ============================ */

        const mirrorBlock = document.createElement("div");
        mirrorBlock.className = "pif-text-block";

        mirrorBlock.innerHTML = `
            <div class="pif-title">Pregunta final</div>
            <div>${MIRROR_QUESTION_V1.question}</div>
        `;

        const mirrorOptions = document.createElement("div");

        const actions = document.createElement("div");
        actions.className = "pif-actions";

        const finalBtn = document.createElement("button");
        finalBtn.className = "pif-btn";
        finalBtn.textContent = "Entiendo que este es mi estado actual";
        finalBtn.disabled = true;

        MIRROR_QUESTION_V1.options.forEach(opt => {

            const label = document.createElement("label");
            label.className = "pif-option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "mirror_question";
            radio.value = opt.key;

            radio.addEventListener("change", () => {
                setMirrorAnswer(opt.key);
                finalBtn.disabled = false;
            });

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt.text));

            mirrorOptions.appendChild(label);
        });

        mirrorBlock.appendChild(mirrorOptions);
        panel.appendChild(mirrorBlock);


        /* ============================
           NOTICE FINAL
        ============================ */

        const noticeBlock = document.createElement("div");
        noticeBlock.className = "pif-warning";
        noticeBlock.innerHTML = FINAL_NOTICE_V1.text;

        panel.appendChild(noticeBlock);


        finalBtn.addEventListener("click", exitToCampus);

        actions.appendChild(finalBtn);
        panel.appendChild(actions);

        root.appendChild(panel);

    }

    catch (err) {

        console.error("[PIF RESULTS ERROR]", err);

        root.innerHTML = `
            <div class="pif-panel">
                <div class="pif-title">Error calculando resultado</div>
                <div class="pif-warning">
                    Revisar consola del navegador.
                </div>
            </div>
        `;
    }
}
