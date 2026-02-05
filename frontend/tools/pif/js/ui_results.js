/* ============================================================
   PIF UI RESULTS — CFC CONTRACT V13
   Render perfil + ruta + restricción + espejo + cierre
   NO scoring
   NO runtime mutation directa
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


/* ============================================================
   PUBLIC RENDER
   ============================================================ */

export function renderResults() {

    const root = document.getElementById("pif-app");

    if (!root) {
        throw new Error("[PIF] #pif-app no encontrado");
    }

    root.innerHTML = "";


    /* ============================
       CALCULAR PERFIL + RUTA
       ============================ */

    const answers = getAllAnswers();

    const profileKey = calculateProfileKey(answers);
    const route = getRouteForProfile(profileKey);

    setProfile(profileKey);
    setRoute(route);


    /* ============================
       PANEL BASE
       ============================ */

    const panel = document.createElement("div");
    panel.className = "pif-panel";


    /* ============================
       PERFIL DETECTADO
       ============================ */

    const profileBlock = document.createElement("div");
    profileBlock.className = "pif-text-block";

    const profileTitle = document.createElement("div");
    profileTitle.className = "pif-title";
    profileTitle.textContent = "Perfil detectado";

    const profileCopy = PROFILES_COPY_V1[profileKey];

    if (!profileCopy) {
        throw new Error(`[PIF] Copy faltante para perfil ${profileKey}`);
    }

    const profileDesc = document.createElement("div");
    profileDesc.innerHTML = profileCopy.description;

    profileBlock.appendChild(profileTitle);
    profileBlock.appendChild(profileDesc);

    panel.appendChild(profileBlock);


    /* ============================
       RUTA ACTIVA
       ============================ */

    const routeBlock = document.createElement("div");
    routeBlock.className = "pif-text-block";

    const routeTitle = document.createElement("div");
    routeTitle.className = "pif-title";
    routeTitle.textContent = "Ruta activa";

    const routeName = document.createElement("div");
    routeName.innerHTML = `<b>${route.name}</b>`;

    const stepsList = document.createElement("ol");

    route.steps.forEach(step => {

        const li = document.createElement("li");
        li.textContent = step;

        stepsList.appendChild(li);

    });

    routeBlock.appendChild(routeTitle);
    routeBlock.appendChild(routeName);
    routeBlock.appendChild(stepsList);

    panel.appendChild(routeBlock);


    /* ============================
       RESTRICCIÓN CONTEXTUAL
       ============================ */

    const restrictionBlock = document.createElement("div");
    restrictionBlock.className = "pif-text-block";

    const restrictionTitle = document.createElement("div");
    restrictionTitle.className = "pif-title";
    restrictionTitle.textContent = "Restricción activa";

    const restrictionText = document.createElement("div");

    const firstBlocked = route.blocked_strict?.[0] || "acciones avanzadas";

    const restrictionTemplate = RESTRICTION_COPY_V1;

    restrictionText.innerHTML = restrictionTemplate.replace("[X]", firstBlocked);

    restrictionBlock.appendChild(restrictionTitle);
    restrictionBlock.appendChild(restrictionText);

    panel.appendChild(restrictionBlock);


    /* ============================
       PREGUNTA ESPEJO
       ============================ */

    const mirrorBlock = document.createElement("div");
    mirrorBlock.className = "pif-text-block";

    const mirrorTitle = document.createElement("div");
    mirrorTitle.className = "pif-title";
    mirrorTitle.textContent = "Pregunta final";

    const mirrorQuestion = document.createElement("div");
    mirrorQuestion.innerHTML = MIRROR_QUESTION_V1.question;

    mirrorBlock.appendChild(mirrorTitle);
    mirrorBlock.appendChild(mirrorQuestion);


    const mirrorOptions = document.createElement("div");

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
       ANTI SOPORTE
       ============================ */

    const noticeBlock = document.createElement("div");
    noticeBlock.className = "pif-warning";
    noticeBlock.innerHTML = FINAL_NOTICE_V1;

    panel.appendChild(noticeBlock);


    /* ============================
       BOTÓN FINAL
       ============================ */

    const actions = document.createElement("div");
    actions.className = "pif-actions";

    const finalBtn = document.createElement("button");
    finalBtn.className = "pif-btn";
    finalBtn.textContent = "Entiendo que este es mi estado actual";
    finalBtn.disabled = true;

    finalBtn.addEventListener("click", () => {
        exitToCampus();
    });

    actions.appendChild(finalBtn);
    panel.appendChild(actions);


    /* ============================
       INSERTAR PANEL
       ============================ */

    root.appendChild(panel);

}
